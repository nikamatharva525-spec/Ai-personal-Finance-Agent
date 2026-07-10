import React from "react";
import {
  FaWallet,
  FaArrowDown,
  FaArrowUp,
  FaChartLine,
} from "react-icons/fa";

const AnalyticsCards = ({
  totalIncome,
  totalExpense,
  totalBalance,
  totalTransactions,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Total Income */}
      <div className="bg-green-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Total Income
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹{totalIncome}
            </h2>
          </div>

          <FaArrowDown className="text-4xl" />
        </div>
      </div>

      {/* Total Expense */}
      <div className="bg-red-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Total Expense
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹{totalExpense}
            </h2>
          </div>

          <FaArrowUp className="text-4xl" />
        </div>
      </div>

      {/* Net Balance */}
      <div className="bg-blue-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Net Balance
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹{totalBalance}
            </h2>
          </div>

          <FaWallet className="text-4xl" />
        </div>
      </div>

      {/* Total Transactions */}
      <div className="bg-purple-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Total Transactions
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              {totalTransactions}
            </h2>
          </div>

          <FaChartLine className="text-4xl" />
        </div>
      </div>

    </div>
  );
};

export default AnalyticsCards;import React from "react";
import {
  FaWallet,
  FaArrowDown,
  FaArrowUp,
  FaChartLine,
} from "react-icons/fa";

const AnalyticsCards = ({
  totalIncome,
  totalExpense,
  totalBalance,
  totalTransactions,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Total Income */}
      <div className="bg-green-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Total Income
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹{totalIncome}
            </h2>
          </div>

          <FaArrowDown className="text-4xl" />
        </div>
      </div>

      {/* Total Expense */}
      <div className="bg-red-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Total Expense
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹{totalExpense}
            </h2>
          </div>

          <FaArrowUp className="text-4xl" />
        </div>
      </div>

      {/* Net Balance */}
      <div className="bg-blue-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Net Balance
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              ₹{totalBalance}
            </h2>
          </div>

          <FaWallet className="text-4xl" />
        </div>
      </div>

      {/* Total Transactions */}
      <div className="bg-purple-600 rounded-xl p-6 shadow-lg text-white">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">
              Total Transactions
            </h3>
            <h2 className="text-3xl font-bold mt-2">
              {totalTransactions}
            </h2>
          </div>

          <FaChartLine className="text-4xl" />
        </div>
      </div>

    </div>
  );
};

export default AnalyticsCards;