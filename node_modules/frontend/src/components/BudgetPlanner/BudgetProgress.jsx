import React, { useState, useEffect } from "react";
import {
  FaChartLine,
  FaWallet,
  FaMoneyBillWave,
  FaSave,
} from "react-icons/fa";

const BudgetProgress = ({ totalExpense = 18500 }) => {

  const [budget, setBudget] = useState(30000);

  useEffect(() => {
    const savedBudget = localStorage.getItem("monthlyBudget");

    if (savedBudget) {
      setBudget(Number(savedBudget));
    }
  }, []);

  const saveBudget = () => {
    localStorage.setItem("monthlyBudget", budget);
    alert("Budget Saved Successfully!");
  };

  const progress = Math.min(
    (totalExpense / budget) * 100,
    100
  );

  const remaining = budget - totalExpense;

  let progressColor = "bg-green-500";
  let status = "Budget is Healthy";

  if (progress >= 80 && progress < 100) {
    progressColor = "bg-yellow-500";
    status = "Budget Warning";
  }

  if (progress >= 100) {
    progressColor = "bg-red-500";
    status = "Budget Exceeded";
  }

  return (
    <div className="bg-slate-800 rounded-3xl shadow-xl p-6 border border-slate-700 mt-8">

      <div className="flex items-center gap-3 mb-6">
        <FaChartLine className="text-3xl text-blue-400" />
        <h2 className="text-3xl font-bold text-white">
          Budget Progress
        </h2>
      </div>

      {/* Update Budget */}

      <div className="bg-slate-700 rounded-2xl p-6 mb-8">

        <h3 className="text-white text-xl font-bold mb-4">
          Set Your Monthly Budget
        </h3>

        <div className="flex gap-4">

          <input
            type="number"
            value={budget}
            onChange={(e) =>
              setBudget(Number(e.target.value))
            }
            placeholder="Enter Monthly Budget"
            className="flex-1 bg-slate-800 text-white p-4 rounded-xl outline-none"
          />

          <button
            onClick={saveBudget}
            className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 rounded-xl text-white font-bold flex items-center gap-2 hover:scale-105 transition"
          >
            <FaSave />
            Save Budget
          </button>

        </div>

      </div>

      {/* Budget Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="bg-slate-700 rounded-2xl p-5 flex items-center gap-4">

          <FaWallet className="text-green-400 text-3xl" />

          <div>

            <p className="text-gray-400">
              Monthly Budget
            </p>

            <h3 className="text-white text-2xl font-bold">
              ₹{budget.toLocaleString()}
            </h3>

          </div>

        </div>

        <div className="bg-slate-700 rounded-2xl p-5 flex items-center gap-4">

          <FaMoneyBillWave className="text-red-400 text-3xl" />

          <div>

            <p className="text-gray-400">
              Remaining Budget
            </p>

            <h3
              className={`text-2xl font-bold ${
                remaining >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              ₹{remaining.toLocaleString()}
            </h3>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div className="mb-4 flex justify-between">

        <span className="text-white font-semibold">
          Budget Used
        </span>

        <span className="text-blue-400 font-bold">
          {progress.toFixed(1)}%
        </span>

      </div>

      <div className="w-full bg-slate-700 rounded-full h-5 overflow-hidden">

        <div
          className={`${progressColor} h-full transition-all duration-700`}
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      {/* Status */}

      <div className="mt-6 flex justify-between items-center">

        <p className="text-gray-300">
          Current Status
        </p>

        <span
          className={`px-4 py-2 rounded-full text-sm font-bold ${
            progress < 80
              ? "bg-green-500/20 text-green-400"
              : progress < 100
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status}
        </span>

      </div>

    </div>
  );
};

export default BudgetProgress;