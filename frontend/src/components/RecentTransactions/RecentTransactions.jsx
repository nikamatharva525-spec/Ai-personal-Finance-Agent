import React from "react";
import { motion } from "framer-motion";

const RecentTransactions = ({
  expenses = [],
  incomes = [],
  search = "",
}) => {
  // =========================
  // MERGE INCOME + EXPENSE
  // =========================

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

  // =========================
  // FILTER TRANSACTIONS
  // =========================

  const keyword = search.toLowerCase().trim();

  const filteredTransactions = transactions.filter((item) => {
    const category = (item.category || "").toLowerCase();
    const type = (item.type || "").toLowerCase();
    const amount = String(item.amount || "");

    const date = item.date
      ? new Date(item.date)
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .toLowerCase()
      : "";

    return (
      category.includes(keyword) ||
      type.includes(keyword) ||
      amount.includes(keyword) ||
      date.includes(keyword)
    );
  });

  // =========================
  // SORT LATEST FIRST
  // =========================

  filteredTransactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Show latest 6
  const recentTransactions = filteredTransactions.slice(0, 6);

  // =========================
  // FORMAT DATE
  // =========================

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =========================
  // FORMAT AMOUNT
  // =========================

  const formatAmount = (amount) => {
    return Number(amount || 0).toLocaleString("en-IN");
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        w-full
        min-w-0
        overflow-hidden
        rounded-3xl
        bg-[#0F172A]
        p-4
        sm:p-6
      "
    >
      {/* ========================= */}
      {/* TITLE */}
      {/* ========================= */}

      <h2 className="mb-5 sm:mb-6 text-xl sm:text-2xl font-bold text-white">
        Recent Transactions
      </h2>

      {/* ========================= */}
      {/* TABLE CONTAINER */}
      {/* ========================= */}

      <div className="w-full overflow-x-auto">

        <table className="w-full min-w-[500px] text-white">

          {/* ========================= */}
          {/* TABLE HEADER */}
          {/* ========================= */}

          <thead>
            <tr className="border-b border-gray-700 text-gray-400">

              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium">
                Date
              </th>

              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium">
                Category
              </th>

              <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium">
                Type
              </th>

              <th className="px-2 py-3 text-right text-xs sm:text-sm font-medium">
                Amount
              </th>

            </tr>
          </thead>

          {/* ========================= */}
          {/* TABLE BODY */}
          {/* ========================= */}

          <tbody>

            {recentTransactions.length > 0 ? (

              recentTransactions.map((item, index) => (

                <motion.tr
                  key={item._id || index}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="
                    border-b
                    border-gray-800
                    transition
                    hover:bg-white/5
                  "
                >

                  {/* Date */}

                  <td className="px-2 py-4 text-xs sm:text-sm whitespace-nowrap">
                    {formatDate(item.date)}
                  </td>

                  {/* Category */}

                  <td className="px-2 py-4 text-xs sm:text-sm">
                    <span className="break-words">
                      {item.category || "Income"}
                    </span>
                  </td>

                  {/* Type */}

                  <td
                    className={`px-2 py-4 text-xs sm:text-sm whitespace-nowrap ${
                      item.type === "Income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.type}
                  </td>

                  {/* Amount */}

                  <td
                    className={`px-2 py-4 text-right text-xs sm:text-sm font-semibold whitespace-nowrap ${
                      item.type === "Income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ₹{formatAmount(item.amount)}
                  </td>

                </motion.tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="4"
                  className="
                    py-8
                    text-center
                    text-sm
                    text-gray-400
                  "
                >
                  No Transactions Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </motion.div>
  );
};

export default RecentTransactions;