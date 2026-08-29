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

  // =========================
  // FETCH INCOME
  // =========================

  const fetchIncome = async () => {
    try {
      const res = await getIncome();

      const incomes = Array.isArray(res.data)
        ? res.data
        : res.data?.incomes || [];

      setIncomeList(incomes);
    } catch (err) {
      console.error("Error fetching income:", err);
    }
  };

  useEffect(() => {
    fetchIncome();
  }, []);

  // =========================
  // ADD INCOME
  // =========================

  const handleAddIncome = async (e) => {
    e.preventDefault();

    if (!source.trim() || !amount) {
      alert("Please fill all fields");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    try {
      setLoading(true);

      await addIncome({
        source: source.trim(),
        amount: Number(amount),
      });

      alert("Income Added Successfully!");

      setSource("");
      setAmount("");

      await fetchIncome();
    } catch (err) {
      console.error(
        "Add Income Error:",
        err.response?.data || err
      );

      alert(
        err.response?.data?.message ||
          "Failed to add income"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // TOTAL INCOME
  // =========================

  const totalIncome = incomeList.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  return (
    <div
      className="
        min-h-screen
        min-w-0
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-slate-900
        flex
      "
    >
      {/* ========================= */}
      {/* SIDEBAR */}
      {/* ========================= */}

      <Sidebar />

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div
        className="
          flex-1
          min-w-0
          ml-0
          md:ml-64
          pt-16
          md:pt-0
        "
      >
        {/* Navbar */}

        <Navbar />

        {/* ========================= */}
        {/* PAGE CONTENT */}
        {/* ========================= */}

        <div
          className="
            w-full
            max-w-5xl
            mx-auto
            p-4
            sm:p-6
            md:p-8
          "
        >

          {/* ========================= */}
          {/* TOTAL INCOME CARD */}
          {/* ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              w-full
              overflow-hidden
              rounded-2xl
              sm:rounded-3xl
              bg-gradient-to-r
              from-green-500
              to-emerald-600
              p-5
              sm:p-6
              md:p-8
              text-white
              shadow-xl
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  sm:h-16
                  sm:w-16
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                "
              >
                <FaWallet
                  className="text-2xl sm:text-3xl"
                />
              </div>

              <div className="min-w-0">

                <p className="text-sm sm:text-lg text-white/80">
                  Total Income
                </p>

                <h1
                  className="
                    mt-1
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-bold
                    break-all
                  "
                >
                  ₹ {totalIncome.toLocaleString("en-IN")}
                </h1>

              </div>

            </div>
          </motion.div>

          {/* ========================= */}
          {/* ADD INCOME CARD */}
          {/* ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mt-6
              sm:mt-8
              w-full
              overflow-hidden
              rounded-2xl
              sm:rounded-3xl
              bg-white
              p-5
              sm:p-6
              md:p-8
              shadow-xl
            "
          >

            <h2
              className="
                mb-6
                sm:mb-8
                flex
                items-center
                gap-3
                text-2xl
                sm:text-3xl
                font-bold
                text-gray-800
              "
            >
              <FaMoneyBillWave className="flex-shrink-0 text-green-600" />

              <span>
                Add Income
              </span>
            </h2>

            {/* ========================= */}
            {/* FORM */}
            {/* ========================= */}

            <form
              onSubmit={handleAddIncome}
              className="space-y-5 sm:space-y-6"
            >

              {/* Income Source */}

              <div>

                <label
                  className="
                    mb-2
                    block
                    text-sm
                    sm:text-base
                    font-semibold
                    text-gray-700
                  "
                >
                  Income Source
                </label>

                <input
                  type="text"
                  value={source}
                  onChange={(e) =>
                    setSource(e.target.value)
                  }
                  placeholder="Salary, Freelancing..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-black
                    outline-none
                    transition
                    focus:border-green-500
                    focus:ring-2
                    focus:ring-green-500
                  "
                  required
                />

              </div>

              {/* Income Amount */}

              <div>

                <label
                  className="
                    mb-2
                    block
                    text-sm
                    sm:text-base
                    font-semibold
                    text-gray-700
                  "
                >
                  Income Amount
                </label>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  placeholder="Enter Amount"
                  min="1"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    sm:px-5
                    py-3
                    sm:py-4
                    text-black
                    outline-none
                    transition
                    focus:border-green-500
                    focus:ring-2
                    focus:ring-green-500
                  "
                  required
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  bg-gradient-to-r
                  from-green-500
                  to-emerald-600
                  py-3
                  sm:py-4
                  text-base
                  sm:text-lg
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:from-green-600
                  hover:to-emerald-700
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading
                  ? "Adding..."
                  : "Add Income"}
              </button>

            </form>

            {/* ========================= */}
            {/* INCOME HISTORY */}
            {/* ========================= */}

            <div className="mt-8 sm:mt-10">

              <h2
                className="
                  mb-5
                  sm:mb-6
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-gray-800
                "
              >
                Income History
              </h2>

              {/* No Income */}

              {incomeList.length === 0 ? (

                <div
                  className="
                    rounded-xl
                    bg-gray-100
                    p-5
                    sm:p-6
                    text-center
                    text-sm
                    sm:text-base
                    text-gray-500
                  "
                >
                  No income added yet.
                </div>

              ) : (

                <div className="space-y-3 sm:space-y-4">

                  {incomeList.map((item, index) => (

                    <motion.div
                      key={item._id || index}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        flex
                        w-full
                        min-w-0
                        flex-col
                        gap-3
                        rounded-xl
                        border
                        bg-gray-50
                        p-4
                        sm:p-5
                        transition-all
                        duration-300
                        hover:shadow-lg
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                      "
                    >

                      {/* Source */}

                      <div className="min-w-0">

                        <h3
                          className="
                            break-words
                            text-base
                            sm:text-lg
                            font-bold
                            text-gray-800
                          "
                        >
                          {item.source || "Income"}
                        </h3>

                        <p className="text-sm text-gray-500">
                          Income Source
                        </p>

                      </div>

                      {/* Amount */}

                      <div
                        className="
                          text-xl
                          sm:text-2xl
                          font-bold
                          text-green-600
                          break-all
                          sm:text-right
                        "
                      >
                        ₹{" "}
                        {Number(
                          item.amount || 0
                        ).toLocaleString("en-IN")}
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