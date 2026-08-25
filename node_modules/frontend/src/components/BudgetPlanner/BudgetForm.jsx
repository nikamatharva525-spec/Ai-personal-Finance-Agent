import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const BudgetAlerts = ({
  totalBudget = 30000,
  totalExpense = 18500,
}) => {
  const percentage = (totalExpense / totalBudget) * 100;

  let title = "";
  let message = "";
  let bgColor = "";
  let borderColor = "";
  let icon = null;

  if (percentage < 80) {
    title = "Budget is Healthy";
    message =
      "You are spending within your budget. Keep saving!";
    bgColor = "bg-green-500/20";
    borderColor = "border-green-500";
    icon = (
      <FaCheckCircle className="text-green-400 text-4xl" />
    );
  } else if (percentage >= 80 && percentage < 100) {
    title = "Budget Warning";
    message =
      "You have used more than 80% of your budget.";
    bgColor = "bg-yellow-500/20";
    borderColor = "border-yellow-500";
    icon = (
      <FaExclamationTriangle className="text-yellow-400 text-4xl" />
    );
  } else {
    title = "Budget Exceeded";
    message =
      "Your expenses have exceeded your monthly budget.";
    bgColor = "bg-red-500/20";
    borderColor = "border-red-500";
    icon = (
      <FaTimesCircle className="text-red-400 text-4xl" />
    );
  }

  return (
    <div
      className={`
        ${bgColor}
        ${borderColor}
        border
        rounded-2xl
        p-6
        shadow-xl
        mt-6
      `}
    >
      <div className="flex items-center gap-4">

        {icon}

        <div>
          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

          <p className="text-gray-300 mt-1">
            {message}
          </p>
        </div>

      </div>

      <div className="mt-6">

        <div className="flex justify-between text-gray-300 mb-2">
          <span>Budget Used</span>

          <span>{percentage.toFixed(1)}%</span>
        </div>

        <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">

          <div
            className={`h-full ${
              percentage < 80
                ? "bg-green-500"
                : percentage < 100
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
            style={{
              width: `${Math.min(percentage, 100)}%`,
            }}
          ></div>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-slate-800 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm">
            Monthly Budget
          </h3>

          <p className="text-white text-xl font-bold mt-1">
            ₹{totalBudget.toLocaleString()}
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <h3 className="text-gray-400 text-sm">
            Total Expenses
          </h3>

          <p className="text-white text-xl font-bold mt-1">
            ₹{totalExpense.toLocaleString()}
          </p>
        </div>

      </div>
    </div>
  );
};

export default BudgetAlerts;