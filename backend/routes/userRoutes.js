import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

// Get User Profile
router.get("/:id", getUserProfile);

// Update User Profile
router.put("/:id", updateUserProfile);

export default router;