import React, { useState } from "react";
import { FaMoneyBillWave, FaSave } from "react-icons/fa";

const CurrencySettings = () => {
  const [currency, setCurrency] = useState("INR");

  const handleSave = () => {
    localStorage.setItem("currency", currency);
    alert("✅ Currency settings saved successfully!");
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 mb-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <FaMoneyBillWave className="text-green-400 text-3xl" />

        <h2 className="text-2xl font-bold text-white">
          Currency Settings
        </h2>
      </div>

      <label className="block text-gray-300 mb-2">
        Select Your Preferred Currency
      </label>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full bg-slate-700 text-white rounded-xl p-3 outline-none mb-6"
      >
        <option value="INR">₹ Indian Rupee (INR)</option>
        <option value="USD">$ US Dollar (USD)</option>
        <option value="EUR">€ Euro (EUR)</option>
        <option value="GBP">£ British Pound (GBP)</option>
        <option value="JPY">¥ Japanese Yen (JPY)</option>
      </select>

      <div className="bg-slate-700 rounded-xl p-4 mb-6">
        <h3 className="text-white font-semibold mb-2">
          Current Currency
        </h3>

        <p className="text-green-400 text-xl font-bold">
          {currency}
        </p>
      </div>

      <button
        onClick={handleSave}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
      >
        <FaSave />
        Save Currency
      </button>
    </div>
  );
};

export default CurrencySettings;