import express from "express";
import {
  saveChat,
  getChatHistory,
  deleteChatHistory,
} from "../controllers/aiChatController.js";

const router = express.Router();

// Save AI Chat
router.post("/save", saveChat);

// Get Chat History
router.get("/:userId", getChatHistory);

// Delete Chat History
router.delete("/:userId", deleteChatHistory);

export default router;