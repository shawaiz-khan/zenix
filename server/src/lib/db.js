import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DATABASE_NAME })
        console.log("MongoDB connected: ", conn.connection.host)
    } catch (error) {
        console.log("Cannot connect to MongoDB")
        process.exit(1)
    }
}

export default connectDB;