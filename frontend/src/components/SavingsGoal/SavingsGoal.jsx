import React from "react";
import { motion } from "framer-motion";

const SavingsGoal = () => {
  const goal = 100000;
  const saved = 65000;
  const percentage = (saved / goal) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0F172A] rounded-3xl p-6"
    >
      <h2 className="text-2xl font-bold text-white">
        Savings Goal
      </h2>

      <div className="mt-6">
        <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
          />
        </div>
      </div>

      <div className="flex justify-between mt-4 text-white">
        <span>Saved: ₹{saved}</span>
        <span>Goal: ₹{goal}</span>
      </div>

      <div className="mt-3 text-green-400">
        {percentage.toFixed(0)}% Completed
      </div>
    </motion.div>
  );
};

export default SavingsGoal;