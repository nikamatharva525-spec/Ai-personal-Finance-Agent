import Income from "../models/Income.js";

// ==============================
// Add Income
// ==============================
export const saveIncome = async (req, res) => {
  console.log("✅ POST /api/income called");

  try {
    const { source, amount } = req.body;

    if (!source || !amount) {
      return res.status(400).json({
        success: false,
        message: "Source and amount are required.",
      });
    }

    const income = await Income.create({
      source,
      amount,
    });

    return res.status(201).json({
      success: true,
      message: "Income added successfully",
      income,
    });
  } catch (error) {
    console.error("❌ Save Income Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==============================
// Get All Income
// ==============================
export const getIncome = async (req, res) => {
  console.log("✅ GET /api/income controller reached");

  try {
    const incomes = await Income.find().sort({ createdAt: -1 });

    console.log("📊 Total Income Records:", incomes.length);

    const totalIncome = incomes.reduce(
      (sum, income) => sum + Number(income.amount),
      0
    );

    return res.status(200).json({
      success: true,
      totalIncome,
      incomes,
    });
  } catch (error) {
    console.error("❌ Get Income Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==============================
// Update Income
// ==============================
export const updateIncome = async (req, res) => {
  console.log("✅ PUT /api/income/:id called");

  try {
    const { id } = req.params;

    const income = await Income.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!income) {
      return res.status(404).json({
        success: false,
        message: "Income not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Income updated successfully",
      income,
    });
  } catch (error) {
    console.error("❌ Update Income Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==============================
// Delete Income
// ==============================
export const deleteIncome = async (req, res) => {
  console.log("✅ DELETE /api/income/:id called");

  try {
    const { id } = req.params;

    const income = await Income.findByIdAndDelete(id);

    if (!income) {
      return res.status(404).json({
        success: false,
        message: "Income not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Income deleted successfully",
    });
  } catch (error) {
    console.error("❌ Delete Income Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};