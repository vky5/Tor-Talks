import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/pigeon";

// Ensure the connection is only established once
let isConnected = false;

const dbConnect = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw new Error("Database connection error");
  }
};

export default dbConnect;
