import React from "react";
import { motion } from "framer-motion";

const RecentTransactions = ({
  expenses = [],
  incomes = [],
}) => {

  // Merge Income + Expense
  const transactions = [
    ...expenses.map((item) => ({
      ...item,
      type: "Expense",
    })),

    ...incomes.map((item) => ({
      ...item,
      type: "Income",
    })),
  ];

  // Sort latest first
  transactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Show only latest 6
  const recentTransactions = transactions.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0F172A] rounded-3xl p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Transactions
      </h2>

      <table className="w-full text-white">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="py-3 text-left">Date</th>
            <th className="text-left">Category</th>
            <th className="text-left">Type</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {recentTransactions.length > 0 ? (
            recentTransactions.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-800 hover:bg-white/5"
              >
                <td className="py-4">
                  {item.date
                    ? new Date(item.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                      })
                    : "-"}
                </td>

                <td>{item.category || "Income"}</td>

                <td
                  className={
                    item.type === "Income"
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {item.type}
                </td>

                <td
                  className={`text-right font-semibold ${
                    item.type === "Income"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  ₹{Number(item.amount).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-center py-8 text-gray-400"
              >
                No Transactions Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  );
};

export default RecentTransactions;