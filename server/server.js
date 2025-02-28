import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";

const PORT = process.env.PORT || 4000;
const app = express();

const startServer = async () => {
  await connectDB();


//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.get("/", (req, res) => res.send("API Working..."));

app.listen(PORT, () => console.log("Server Running on port " + PORT));

};

startServer();
