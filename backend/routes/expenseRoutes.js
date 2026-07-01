import express from "express";
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../controllers/expenseController.js";

const router = express.Router();

// Get all expenses
router.get("/", getExpenses);

// Add new expense
router.post("/", addExpense);

// Update expense
router.put("/:id", updateExpense);

// Delete expense
router.delete("/:id", deleteExpense);

export default router;