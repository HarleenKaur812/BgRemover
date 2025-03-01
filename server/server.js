import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

const app = express();

const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ Database connected successfully");

    app.use(express.json());
    app.use(cors());

    app.get("/", (req, res) => res.send("API is working on Vercel!"));
    app.get("/test", (req, res) => res.json({ message: "Test route is working!" }));

  } catch (error) {
    console.error("❌ Server startup error:", error);
    process.exit(1);
  }
};

// Ensure serverless export for Vercel
export default async (req, res) => {
  await startServer();
  app(req, res);
};
