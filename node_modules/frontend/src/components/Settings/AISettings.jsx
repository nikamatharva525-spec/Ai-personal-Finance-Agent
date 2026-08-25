import React, { useState } from "react";
import {
  FaRobot,
  FaSave,
  FaBell,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";

const AISettings = () => {
  const [enableAI, setEnableAI] = useState(true);
  const [dailyTips, setDailyTips] = useState(true);
  const [investmentAdvice, setInvestmentAdvice] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert("✅ AI Settings Saved Successfully!");
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <FaRobot className="text-3xl text-purple-500" />

        <h2 className="text-2xl font-bold text-white">
          AI Settings
        </h2>
      </div>

      {/* Enable AI */}
      <div className="flex justify-between items-center bg-slate-700 rounded-xl p-4 mb-4">
        <div>
          <h3 className="text-white font-semibold">
            Enable AI Finance Advisor
          </h3>

          <p className="text-gray-400 text-sm">
            Allow AI to analyze your expenses.
          </p>
        </div>

        <input
          type="checkbox"
          checked={enableAI}
          onChange={() => setEnableAI(!enableAI)}
          className="w-5 h-5"
        />
      </div>

      {/* Daily Tips */}
      <div className="flex justify-between items-center bg-slate-700 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3">
          <FaLightbulb className="text-yellow-400 text-xl" />

          <div>
            <h3 className="text-white font-semibold">
              Daily AI Tips
            </h3>

            <p className="text-gray-400 text-sm">
              Receive daily financial advice.
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          checked={dailyTips}
          onChange={() => setDailyTips(!dailyTips)}
          className="w-5 h-5"
        />
      </div>

      {/* Investment Advice */}
      <div className="flex justify-between items-center bg-slate-700 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3">
          <FaChartLine className="text-green-400 text-xl" />

          <div>
            <h3 className="text-white font-semibold">
              Smart Investment Suggestions
            </h3>

            <p className="text-gray-400 text-sm">
              Get AI-powered investment recommendations.
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          checked={investmentAdvice}
          onChange={() => setInvestmentAdvice(!investmentAdvice)}
          className="w-5 h-5"
        />
      </div>

      {/* Notifications */}
      <div className="flex justify-between items-center bg-slate-700 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3">
          <FaBell className="text-blue-400 text-xl" />

          <div>
            <h3 className="text-white font-semibold">
              AI Notifications
            </h3>

            <p className="text-gray-400 text-sm">
              Receive AI alerts and recommendations.
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
          className="w-5 h-5"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl text-white font-semibold hover:scale-105 transition flex justify-center items-center gap-2"
      >
        <FaSave />
        Save AI Settings
      </button>

    </div>
  );
};

export default AISettings;