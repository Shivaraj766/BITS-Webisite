const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

function readEnvValue(key) {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return null;
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    if (!line || line.trim().startsWith('#')) continue;
    const idx = line.indexOf('=');
    if (idx < 0) continue;
    const k = line.slice(0, idx).trim();
    if (k !== key) continue;
    return line.slice(idx + 1).trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');
  }
  return null;
}

function mergeQueryParams(primary, secondary) {
  const merged = new URLSearchParams(secondary.toString());
  primary.forEach((value, key) => merged.set(key, value));
  return merged;
}

async function buildDohFallbackUri(primaryUri) {
  const parsed = new URL(primaryUri);
  const srvName = `_mongodb._tcp.${parsed.hostname}`;
  const [srvRes, txtRes] = await Promise.all([
    fetch(`https://dns.google/resolve?name=${encodeURIComponent(srvName)}&type=SRV`),
    fetch(`https://dns.google/resolve?name=${encodeURIComponent(parsed.hostname)}&type=TXT`),
  ]);

  const srvJson = await srvRes.json();
  const hosts = (Array.isArray(srvJson?.Answer) ? srvJson.Answer : [])
    .map((record) => String(record?.data || '').trim().split(/\s+/))
    .filter((parts) => parts.length >= 4)
    .map((parts) => `${parts[3].replace(/\.$/, '')}:${parts[2]}`);

  if (!hosts.length) throw new Error('DoH SRV lookup returned no hosts');

  let txtParams = new URLSearchParams();
  if (txtRes.ok) {
    const txtJson = await txtRes.json();
    const txtAnswers = Array.isArray(txtJson?.Answer) ? txtJson.Answer : [];
    for (const entry of txtAnswers) {
      const raw = String(entry?.data || '').trim();
      if (!raw) continue;
      const cleaned = raw.replace(/^"|"$/g, '').replace(/\\"/g, '"');
      txtParams = mergeQueryParams(txtParams, new URLSearchParams(cleaned));
    }
  }

  const username = parsed.username ? encodeURIComponent(decodeURIComponent(parsed.username)) : '';
  const password = parsed.password ? encodeURIComponent(decodeURIComponent(parsed.password)) : '';
  const auth = username ? `${username}${password ? `:${password}` : ''}@` : '';
  const dbName = parsed.pathname.replace(/^\//, '');
  const mergedParams = mergeQueryParams(parsed.searchParams, txtParams);

  return `mongodb://${auth}${hosts.join(',')}/${dbName}${mergedParams.toString() ? `?${mergedParams.toString()}` : ''}`;
}

async function testConnect(label, uri) {
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 12000 });
    console.log(`${label}: OK`);
    await mongoose.disconnect();
    return true;
  } catch (error) {
    console.log(`${label}: FAIL`);
    console.log(`name=${error?.name || ''}`);
    console.log(`message=${error?.message || ''}`);

    const servers = error?.reason?.servers;
    if (servers && typeof servers.forEach === 'function') {
      const details = [];
      servers.forEach((value, key) => {
        details.push({
          server: key,
          type: value?.type,
          error: value?.error?.message || String(value?.error || ''),
        });
      });
      console.log('serverDetails=' + JSON.stringify(details));
    }

    try { await mongoose.disconnect(); } catch (_) {}
    return false;
  }
}

(async () => {
  const primaryUri = process.env.MONGODB_URI || readEnvValue('MONGODB_URI');
  const fallbackUri = process.env.MONGODB_URI_FALLBACK || readEnvValue('MONGODB_URI_FALLBACK');

  if (!primaryUri && !fallbackUri) {
    console.log('No Mongo URI configured');
    process.exit(1);
  }

  if (primaryUri) {
    await testConnect('PRIMARY', primaryUri);
  }

  if (fallbackUri) {
    await testConnect('ENV_FALLBACK', fallbackUri);
  }

  if (primaryUri?.startsWith('mongodb+srv://')) {
    try {
      const dohFallback = await buildDohFallbackUri(primaryUri);
      await testConnect('DOH_FALLBACK', dohFallback);
    } catch (error) {
      console.log('DOH_FALLBACK: BUILD_FAIL');
      console.log(error?.message || String(error));
    }
  }

  process.exit(0);
})();
