import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWallet, FaMoneyBillWave } from "react-icons/fa";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

import {
  getIncome,
  addIncome,
} from "../api/incomeApi";

const Income = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [incomeList, setIncomeList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Income
  const fetchIncome = async () => {
    try {
      const res = await getIncome();

      const incomes = Array.isArray(res.data)
        ? res.data
        : res.data.incomes || [];

      setIncomeList(incomes);
    } catch (err) {
      console.error("Error fetching income:", err);
    }
  };

  useEffect(() => {
    fetchIncome();
  }, []);

  // Add Income
  const handleAddIncome = async (e) => {
    e.preventDefault();

    if (!source.trim() || !amount) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await addIncome({
        source: source,
        amount: Number(amount),
      });

      alert("Income Added Successfully!");

      setSource("");
      setAmount("");

      await fetchIncome();
    } catch (err) {
      console.error(err.response?.data || err);

      alert(
        err.response?.data?.message || "Failed to add income"
      );
    } finally {
      setLoading(false);
    }
  };

  const totalIncome = incomeList.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      <Sidebar />

      <div className="flex-1 lg:ml-64">
        <Navbar />

        <div className="max-w-5xl mx-auto p-8">

          {/* Total Income Card */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl shadow-xl p-8 text-white"
          >
            <div className="flex items-center gap-4">
              <FaWallet size={40} />

              <div>
                <p className="text-lg">Total Income</p>

                <h1 className="text-4xl font-bold">
                  ₹ {totalIncome}
                </h1>
              </div>
            </div>
          </motion.div>

          {/* Add Income */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 mt-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <FaMoneyBillWave className="text-green-600" />
              Add Income
            </h2>

            <form
              onSubmit={handleAddIncome}
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Income Source
                </label>

                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Salary, Freelancing..."
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 text-black bg-white focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Income Amount
                </label>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter Amount"
                  min="1"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 text-black bg-white focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl text-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Adding..." : "Add Income"}
              </button>
            </form>

            {/* Income History */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Income History
              </h2>

              {incomeList.length === 0 ? (
                <div className="bg-gray-100 rounded-xl p-6 text-center text-gray-500">
                  No income added yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {incomeList.map((item) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50 rounded-xl p-5 flex justify-between items-center border hover:shadow-lg transition-all duration-300"
                    >
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">
                          {item.source}
                        </h3>

                        <p className="text-gray-500">
                          Income Source
                        </p>
                      </div>

                      <div className="text-green-600 text-2xl font-bold">
                        ₹ {item.amount}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Income;