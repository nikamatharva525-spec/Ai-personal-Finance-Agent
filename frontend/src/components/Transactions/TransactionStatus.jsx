import React from "react";
import {
  FaWallet,
  FaArrowDown,
  FaArrowUp,
  FaExchangeAlt,
} from "react-icons/fa";

const TransactionStats = ({
  totalIncome,
  totalExpense,
  totalBalance,
  totalTransactions,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Total Income */}
      <div className="bg-green-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Total Income
            </h3>

            <h2 className="text-3xl font-bold mt-2">
              ₹{totalIncome}
            </h2>
          </div>

          <FaArrowDown size={35} />
        </div>
      </div>

      {/* Total Expense */}
      <div className="bg-red-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Total Expense
            </h3>

            <h2 className="text-3xl font-bold mt-2">
              ₹{totalExpense}
            </h2>
          </div>

          <FaArrowUp size={35} />
        </div>
      </div>

      {/* Net Balance */}
      <div className="bg-blue-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Net Balance
            </h3>

            <h2 className="text-3xl font-bold mt-2">
              ₹{totalBalance}
            </h2>
          </div>

          <FaWallet size={35} />
        </div>
      </div>

      {/* Total Transactions */}
      <div className="bg-purple-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              Transactions
            </h3>

            <h2 className="text-3xl font-bold mt-2">
              {totalTransactions}
            </h2>
          </div>

          <FaExchangeAlt size={35} />
        </div>
      </div>

    </div>
  );
};

export default TransactionStats;