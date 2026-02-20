import mongoose from "mongoose";

function getMongoUri() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("Missing MONGODB_URI in environment variables");
  }
  return mongoUri;
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
    const mongoUri = getMongoUri();

    cached.promise = mongoose
      .connect(mongoUri, {
        serverSelectionTimeoutMS: 10000,
      })
      .then((mongooseInstance) => mongooseInstance);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}