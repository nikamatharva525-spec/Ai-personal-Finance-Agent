import React, { useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaRobot,
  FaWallet,
  FaSave,
} from "react-icons/fa";

const NotificationSettings = () => {
  const [budgetAlerts, setBudgetAlerts] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [aiTips, setAiTips] = useState(true);
  const [monthlyReport, setMonthlyReport] = useState(false);

  const handleSave = () => {
    alert("✅ Notification Settings Saved Successfully!");
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <FaBell className="text-yellow-400 text-3xl" />

        <h2 className="text-2xl font-bold text-white">
          Notification Settings
        </h2>
      </div>

      {/* Budget Alerts */}
      <div className="flex justify-between items-center bg-slate-700 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3">
          <FaWallet className="text-green-400 text-xl" />

          <div>
            <h3 className="text-white font-semibold">
              Budget Alerts
            </h3>

            <p className="text-gray-400 text-sm">
              Notify when your budget reaches 80% or exceeds the limit.
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          checked={budgetAlerts}
          onChange={() => setBudgetAlerts(!budgetAlerts)}
          className="w-5 h-5"
        />
      </div>

      {/* Email Notifications */}
      <div className="flex justify-between items-center bg-slate-700 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-blue-400 text-xl" />

          <div>
            <h3 className="text-white font-semibold">
              Email Notifications
            </h3>

            <p className="text-gray-400 text-sm">
              Receive important updates by email.
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={() =>
            setEmailNotifications(!emailNotifications)
          }
          className="w-5 h-5"
        />
      </div>

      {/* AI Tips */}
      <div className="flex justify-between items-center bg-slate-700 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3">
          <FaRobot className="text-purple-400 text-xl" />

          <div>
            <h3 className="text-white font-semibold">
              Daily AI Finance Tips
            </h3>

            <p className="text-gray-400 text-sm">
              Receive personalized AI finance suggestions.
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          checked={aiTips}
          onChange={() => setAiTips(!aiTips)}
          className="w-5 h-5"
        />
      </div>

      {/* Monthly Report */}
      <div className="flex justify-between items-center bg-slate-700 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3">
          <FaBell className="text-red-400 text-xl" />

          <div>
            <h3 className="text-white font-semibold">
              Monthly Expense Report
            </h3>

            <p className="text-gray-400 text-sm">
              Receive a monthly summary of your expenses.
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          checked={monthlyReport}
          onChange={() => setMonthlyReport(!monthlyReport)}
          className="w-5 h-5"
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition flex justify-center items-center gap-2"
      >
        <FaSave />
        Save Notification Settings
      </button>

    </div>
  );
};

export default NotificationSettings;