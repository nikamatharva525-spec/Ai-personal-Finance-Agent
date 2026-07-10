import React from "react";
import { motion } from "framer-motion";

const BudgetPlanner = () => {
  const budget = 50000;
  const spent = 35000;
  const percentage = (spent / budget) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0F172A] rounded-3xl p-6"
    >
      <h2 className="text-2xl font-bold text-white">
        Budget Planner
      </h2>

      <p className="text-gray-400 mt-2">
        Monthly Budget
      </p>

      <div className="mt-6">
        <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-between mt-4 text-white">
        <span>Spent: ₹{spent}</span>
        <span>Budget: ₹{budget}</span>
      </div>

      <div className="mt-3 text-green-400">
        Remaining: ₹{budget - spent}
      </div>
    </motion.div>
  );
};

export default BudgetPlanner;