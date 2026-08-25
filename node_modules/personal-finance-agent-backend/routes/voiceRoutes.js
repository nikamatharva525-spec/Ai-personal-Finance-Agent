import express from "express";
import { processVoice } from "../controllers/voiceController.js";

const router = express.Router();

// Test Route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Voice Route Working",
  });
});

// Voice Assistant Route
router.post("/chat", processVoice);

export default router;