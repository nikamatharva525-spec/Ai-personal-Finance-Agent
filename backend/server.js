import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import incomeRoutes from "./routes/incomeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import aiChatRoutes from "./routes/aiChatRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import voiceRoutes from "./routes/voiceRoutes.js";

const app = express();

// ======================
// CORS
// ======================

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without an origin
      // such as Postman/server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
    },

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

// ======================
// Middleware
// ======================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ======================
// Routes
// ======================

app.use("/api/voice", voiceRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/expenses", expenseRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/income", incomeRoutes);

app.use("/api/users", userRoutes);

app.use("/api/aichat", aiChatRoutes);

app.use("/api/ai", aiRoutes);

// ======================
// Home Route
// ======================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "🚀 AI Personal Finance Agent Backend Running",
  });
});

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
  console.error("Server Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message:
      err.message || "Internal Server Error",
  });
});

// ======================
// MongoDB Connection
// ======================

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log(
      "✅ MongoDB Connected Successfully"
    );

    app.listen(PORT, "0.0.0.0", () => {
      console.log(
        `🚀 Server running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "❌ MongoDB Connection Failed"
    );

    console.error(error.message);

    process.exit(1);
  }
};

startServer();