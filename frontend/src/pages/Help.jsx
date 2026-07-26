import React from "react";
import { FaQuestionCircle, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Help = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <FaQuestionCircle className="text-4xl text-purple-500" />
          <h1 className="text-4xl font-bold">Help & Support</h1>
        </div>

        <p className="text-gray-300 mb-8">
          Welcome to the AI Personal Finance Agent. If you're facing any issues,
          check the information below or contact support.
        </p>

        <div className="space-y-6">

          <div className="bg-slate-700 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              💰 Expense Tracker
            </h2>
            <p className="text-gray-300">
              Add, edit, and delete your daily expenses to keep track of your spending.
            </p>
          </div>

          <div className="bg-slate-700 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              📊 Analytics
            </h2>
            <p className="text-gray-300">
              View monthly spending reports, charts, and financial insights.
            </p>
          </div>

          <div className="bg-slate-700 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              🤖 AI Advisor
            </h2>
            <p className="text-gray-300">
              Receive AI-powered suggestions to improve your budgeting and savings.
            </p>
          </div>

          <div className="bg-slate-700 p-5 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Contact Support
            </h2>

            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope className="text-purple-400" />
              <span>support@financeagent.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              <span>+91 98765 43210</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Help;