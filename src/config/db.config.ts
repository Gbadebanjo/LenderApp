import mongoose from "mongoose";

async function db() {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable is not defined");
    }

    const connect = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err: any) {
    console.log(`Error: ${err.message}`);
  }
}

export default db;
