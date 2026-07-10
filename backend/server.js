import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

// ======================
// Middleware
// ======================
app.use(
  cors({
    origin: "http://localhost:5173", // React Vite Frontend
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
// Routes
// ======================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Personal Finance Agent Backend Running 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/dashboard", dashboardRoutes);

// ======================
// 404 Route
// ======================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ======================
// Global Error Handler
// ======================
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ======================
// MongoDB Connection
// ======================
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
   console.log("Mongo Uri:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server");
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error(error); // Prints the complete error object
    process.exit(1);
  }
};

startServer();