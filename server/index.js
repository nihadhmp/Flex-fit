import dotenv from "dotenv";
import express from "express";
import connectDB from "./Conneection.js";
import cors from "cors";
const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
connectDB;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
