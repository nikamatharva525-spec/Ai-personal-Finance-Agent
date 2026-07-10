import React from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

const AIAdvisor = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#0F172A] rounded-3xl p-6"
    >
      <div className="flex items-center gap-3">
        <FaRobot className="text-purple-500 text-3xl" />

        <h2 className="text-2xl font-bold text-white">
          AI Finance Advisor
        </h2>
      </div>

      <p className="text-gray-300 mt-6">
        You spent 20% more on shopping this month.
      </p>

      <p className="text-purple-400 mt-3">
        Suggestion:
      </p>

      <p className="text-gray-400 mt-2">
        Reduce shopping expenses by ₹3,000 to stay within your monthly budget.
      </p>

      <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-105 transition">
        Generate New Advice
      </button>
    </motion.div>
  );
};

export default AIAdvisor;