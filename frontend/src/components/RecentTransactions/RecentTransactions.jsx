import React from "react";
import { motion } from "framer-motion";

const transactions = [
  {
    id: 1,
    date: "02 Jul",
    category: "Food",
    amount: "₹450",
    type: "Expense",
  },
  {
    id: 2,
    date: "01 Jul",
    category: "Fuel",
    amount: "₹900",
    type: "Expense",
  },
  {
    id: 3,
    date: "30 Jun",
    category: "Salary",
    amount: "₹40,000",
    type: "Income",
  },
  {
    id: 4,
    date: "28 Jun",
    category: "Shopping",
    amount: "₹2,100",
    type: "Expense",
  },
];

const RecentTransactions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0F172A] rounded-3xl p-6 mt-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Transactions
      </h2>

      <table className="w-full text-white">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700">
            <th className="py-3 text-left">Date</th>
            <th className="text-left">Category</th>
            <th className="text-left">Type</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-800 hover:bg-white/5"
            >
              <td className="py-4">{item.date}</td>
              <td>{item.category}</td>
              <td>{item.type}</td>

              <td
                className={`text-right font-semibold ${
                  item.type === "Income"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default RecentTransactions;