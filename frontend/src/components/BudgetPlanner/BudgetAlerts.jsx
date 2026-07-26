import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaInfoCircle,
} from "react-icons/fa";

const BudgetAlerts = ({
  budget = 30000,
  expenses = 18500,
}) => {
  const percentage = (expenses / budget) * 100;
  const remaining = budget - expenses;

  const alerts = [];

  // Budget Status
  if (percentage < 80) {
    alerts.push({
      title: "Budget Healthy",
      message: "Great! Your spending is under control.",
      color: "bg-green-500",
      icon: <FaCheckCircle className="text-2xl text-white" />,
    });
  } else if (percentage < 100) {
    alerts.push({
      title: "Budget Warning",
      message: "You have already used more than 80% of your monthly budget.",
      color: "bg-yellow-500",
      icon: <FaExclamationTriangle className="text-2xl text-white" />,
    });
  } else {
    alerts.push({
      title: "Budget Exceeded",
      message: "You have exceeded your monthly budget.",
      color: "bg-red-500",
      icon: <FaTimesCircle className="text-2xl text-white" />,
    });
  }

  // Remaining Budget
  if (remaining > 0) {
    alerts.push({
      title: "Remaining Budget",
      message: `You still have ₹${remaining.toLocaleString()} available.`,
      color: "bg-blue-500",
      icon: <FaInfoCircle className="text-2xl text-white" />,
    });
  }

  // Savings Suggestion
  if (percentage > 60 && percentage < 100) {
    alerts.push({
      title: "Savings Tip",
      message: "Reduce shopping and dining expenses to save more this month.",
      color: "bg-purple-500",
      icon: <FaInfoCircle className="text-2xl text-white" />,
    });
  }

  return (
    <div className="bg-slate-800 rounded-3xl p-6 shadow-xl border border-slate-700 mt-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        🚨 Budget Alerts
      </h2>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`${alert.color} rounded-2xl p-5 flex items-start gap-4`}
          >
            {alert.icon}

            <div>
              <h3 className="text-xl font-bold text-white">
                {alert.title}
              </h3>

              <p className="text-white mt-1">
                {alert.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between mb-2">
          <span className="text-white">
            Budget Used
          </span>

          <span className="text-blue-400 font-bold">
            {percentage.toFixed(1)}%
          </span>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-5 overflow-hidden">
          <div
            className={`${
              percentage < 80
                ? "bg-green-500"
                : percentage < 100
                ? "bg-yellow-500"
                : "bg-red-500"
            } h-full transition-all duration-700`}
            style={{
              width: `${Math.min(percentage, 100)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetAlerts;