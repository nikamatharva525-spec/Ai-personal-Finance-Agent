import React from "react";
import { FaWallet } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="text-center mb-8">

      {/* Logo Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
          <FaWallet className="text-white text-4xl" />
        </div>
      </div>

      {/* Project Name */}
      <h1 className="text-4xl font-bold">
        <span className="text-white">Finance</span>
        <span className="text-purple-500">Hub</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 mt-3">
        AI Personal Finance Agent
      </p>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">
        Smart Expense Tracking & AI Financial Advisor
      </p>

    </div>
  );
};

export default Logo;