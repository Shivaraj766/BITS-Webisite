import mongoose from "mongoose";

function isSrvDnsFailure(message: string) {
  return /querysrv\s+econnrefused/i.test(message) || /ENOTFOUND|EAI_AGAIN/i.test(message);
}

function mergeQueryParams(primary: URLSearchParams, secondary: URLSearchParams) {
  const merged = new URLSearchParams(secondary.toString());
  primary.forEach((value, key) => {
    merged.set(key, value);
  });
  return merged;
}

async function resolveAtlasSrvViaDoh(hostname: string) {
  const srvName = `_mongodb._tcp.${hostname}`;
  const [srvResponse, txtResponse] = await Promise.all([
    fetch(`https://dns.google/resolve?name=${encodeURIComponent(srvName)}&type=SRV`),
    fetch(`https://dns.google/resolve?name=${encodeURIComponent(hostname)}&type=TXT`),
  ]);

  if (!srvResponse.ok) {
    throw new Error(`DoH SRV lookup failed (${srvResponse.status})`);
  }

  const srvJson = await srvResponse.json();
  const srvAnswers = Array.isArray(srvJson?.Answer) ? srvJson.Answer : [];
  const hosts = srvAnswers
    .map((record: { data?: string }) => record?.data ?? "")
    .map((data: string) => {
      const parts = data.trim().split(/\s+/);
      if (parts.length < 4) {
        return null;
      }
      const port = parts[2];
      const target = parts[3].replace(/\.$/, "");
      return `${target}:${port}`;
    })
    .filter((value: string | null): value is string => Boolean(value));

  if (!hosts.length) {
    throw new Error("DoH SRV lookup returned no hosts");
  }

  let txtParams = new URLSearchParams();
  if (txtResponse.ok) {
    const txtJson = await txtResponse.json();
    const txtAnswers = Array.isArray(txtJson?.Answer) ? txtJson.Answer : [];

    for (let index = 0; index < txtAnswers.length; index += 1) {
      const record = (txtAnswers as Array<{ data?: string }>)[index];
      const raw = (record?.data ?? "").trim();
      if (!raw) {
        continue;
      }
      const cleaned = raw.replace(/^"|"$/g, "").replace(/\\"/g, '"');
      const params = new URLSearchParams(cleaned);
      txtParams = mergeQueryParams(txtParams, params);
    }
  }

  return { hosts, txtParams };
}

async function buildDohFallbackUri(primaryUri: string) {
  if (!primaryUri.startsWith("mongodb+srv://")) {
    return null;
  }

  const parsed = new URL(primaryUri);
  const { hosts, txtParams } = await resolveAtlasSrvViaDoh(parsed.hostname);

  const username = parsed.username ? encodeURIComponent(decodeURIComponent(parsed.username)) : "";
  const password = parsed.password ? encodeURIComponent(decodeURIComponent(parsed.password)) : "";
  const auth = username
    ? `${username}${password ? `:${password}` : ""}@`
    : "";
  const dbName = parsed.pathname.replace(/^\//, "");
  const mergedParams = mergeQueryParams(parsed.searchParams, txtParams);
  const queryString = mergedParams.toString();

  return `mongodb://${auth}${hosts.join(",")}/${dbName}${queryString ? `?${queryString}` : ""}`;
}

function getMongoUris() {
  const primaryUri = process.env.MONGODB_URI?.trim();
  const fallbackUri = process.env.MONGODB_URI_FALLBACK?.trim();

  if (!primaryUri && !fallbackUri) {
    throw new Error("Missing MONGODB_URI in environment variables");
  }

  return {
    primaryUri,
    fallbackUri,
  };
}

type CachedMongoose = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseConnectionCache: CachedMongoose | undefined;
}

const cached: CachedMongoose = global.mongooseConnectionCache || {
  conn: null,
  promise: null,
};

if (!global.mongooseConnectionCache) {
  global.mongooseConnectionCache = cached;
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const { primaryUri, fallbackUri } = getMongoUris();

    cached.promise = (async () => {
      const connectOptions = {
        serverSelectionTimeoutMS: 10000,
      };

      if (!primaryUri && fallbackUri) {
        return mongoose.connect(fallbackUri, connectOptions);
      }

      try {
        return await mongoose.connect(primaryUri!, connectOptions);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "";
        const isSrvDnsError = isSrvDnsFailure(errorMessage);

        if (isSrvDnsError && fallbackUri) {
          return mongoose.connect(fallbackUri, connectOptions);
        }

        if (isSrvDnsError && primaryUri?.startsWith("mongodb+srv://")) {
          const dohFallbackUri = await buildDohFallbackUri(primaryUri);
          if (dohFallbackUri) {
            return mongoose.connect(dohFallbackUri, connectOptions);
          }
        }

        throw error;
      }
    })();
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}