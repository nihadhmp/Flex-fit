import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongodb_url = process.env.MONGO_URL;

const connectDB = mongoose
  .connect(mongodb_url)
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((error) => {
    console.log(error);

    console.log("connection failed");
  });

export default connectDB;
