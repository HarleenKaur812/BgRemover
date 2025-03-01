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

    app.get("/", (req, res) => res.send("API Working..."));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (error) {
    console.error("❌ Server startup error:", error);
    process.exit(1);
  }
};

startServer();

export default app; // Required for Vercel
