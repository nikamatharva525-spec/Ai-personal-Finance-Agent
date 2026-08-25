import express from "express";
import {
  saveIncome,
  getIncome,
  updateIncome,
  deleteIncome,
} from "../controllers/incomeController.js";

const router = express.Router();

// ==============================
// Get All Income
// GET /api/income
// ==============================
router.get("/", getIncome);

// ==============================
// Add Income
// POST /api/income
// ==============================
router.post("/", saveIncome);

// ==============================
// Update Income
// PUT /api/income/:id
// ==============================
router.put("/:id", updateIncome);

// ==============================
// Delete Income
// DELETE /api/income/:id
// ==============================
router.delete("/:id", deleteIncome);

export default router;