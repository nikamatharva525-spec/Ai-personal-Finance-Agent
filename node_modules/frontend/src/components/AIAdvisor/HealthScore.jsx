import React from "react";

const HealthScore = () => {
  const score = 85;

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">
          💚 Financial Health
        </h3>

        <span className="text-green-400 text-2xl font-bold">
          {score}/100
        </span>
      </div>

      <div className="w-full h-4 bg-slate-700 rounded-full mt-5 overflow-hidden">
        <div
          className="bg-green-500 h-full rounded-full"
          style={{ width: `${score}%` }}
        ></div>
      </div>

      <p className="text-gray-400 mt-3">
        Excellent financial condition.
      </p>
    </div>
  );
};

export default HealthScore; 