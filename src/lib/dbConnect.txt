import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

console.log("myconnectino string............",MONGODB_URI)

if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environment variable');
}

let cachedClient = global.mongoose;

if (!cachedClient) {
    cachedClient = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cachedClient.conn) {
        return cachedClient.conn;
    }

    if (!cachedClient.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cachedClient.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cachedClient.conn = await cachedClient.promise;
    return cachedClient.conn;
}

export default dbConnect;
