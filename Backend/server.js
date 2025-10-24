// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";  // 👈 STEP 4: Import your auth routes here

dotenv.config(); // Load variables from .env

const app = express();

// 🔹 Middleware
app.use(cors());
app.use(express.json());

// 🔹 MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// 🔹 Test route
app.get("/", (req, res) => {
  res.send("API is running ...");
});

// 👇 ADD THIS BELOW MIDDLEWARE BUT ABOVE app.listen 👇
app.use("/api/auth", authRoutes);  // ✅ This connects your auth routes

// 🔹 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
