import mongoose from "mongoose"
const DB_URL = process.env.DATABASE_URL

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}
    
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {

        cached.promise = mongoose.connect(DB_URL, { bufferCommands: false })
            .then((res) => {
                console.log("-------------------------------------------");
                console.log(" --- Sucess fully connected to database ");
                console.log("-------------------------------------------");

                return res;
            }).catch(error => {
                return false
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;