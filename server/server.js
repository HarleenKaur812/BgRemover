import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

const app = express();

const startServer = async () => {
  await connectDB();

  app.use(express.json());
  app.use(cors());

  app.get("/", (req, res) => res.send("API Working..."));
};

startServer();

export default app; // Vercel requires this export
