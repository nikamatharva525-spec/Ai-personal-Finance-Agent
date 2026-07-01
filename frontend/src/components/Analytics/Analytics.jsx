import React from "react";

const Analytics = ({ expenses = [] }) => {
  // Calculate analytics
  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  const totalTransactions = expenses.length;

  const averageExpense =
    totalTransactions > 0
      ? (totalExpense / totalTransactions).toFixed(2)
      : 0;

  const highestExpense =
    totalTransactions > 0
      ? Math.max(...expenses.map((item) => Number(item.amount || 0)))
      : 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        📊 Expense Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Total Expense */}
        <div className="bg-red-500 text-white rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-medium">
            Total Expense
          </h3>

          <p className="text-3xl font-bold mt-2">
            ₹{totalExpense}
          </p>
        </div>

        {/* Transactions */}
        <div className="bg-blue-500 text-white rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-medium">
            Transactions
          </h3>

          <p className="text-3xl font-bold mt-2">
            {totalTransactions}
          </p>
        </div>

        {/* Average Expense */}
        <div className="bg-green-500 text-white rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-medium">
            Average Expense
          </h3>

          <p className="text-3xl font-bold mt-2">
            ₹{averageExpense}
          </p>
        </div>

        {/* Highest Expense */}
        <div className="bg-purple-500 text-white rounded-xl p-5 shadow-lg">
          <h3 className="text-lg font-medium">
            Highest Expense
          </h3>

          <p className="text-3xl font-bold mt-2">
            ₹{highestExpense}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Analytics;