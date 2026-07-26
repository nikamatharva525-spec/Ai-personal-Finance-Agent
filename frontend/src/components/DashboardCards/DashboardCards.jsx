import React from "react";
import { motion } from "framer-motion";
import {
  FaWallet,
  FaMoneyBillWave,
  FaChartLine,
  FaPiggyBank,
} from "react-icons/fa";

const DashboardCards = ({
  totalBalance = 0,
  totalIncome = 0,
  totalExpense = 0,
  totalSavings = 0,
}) => {
  const cards = [
    {
      title: "Total Balance",
      value: `₹${totalBalance.toLocaleString()}`,
      icon: <FaWallet size={32} />,
      color: "from-blue-500 via-cyan-500 to-blue-700",
      shadow: "shadow-blue-500/30",
    },
    {
      title: "Income",
      value: `₹${totalIncome.toLocaleString()}`,
      icon: <FaMoneyBillWave size={32} />,
      color: "from-green-500 via-emerald-500 to-green-700",
      shadow: "shadow-green-500/30",
    },
    {
      title: "Expenses",
      value: `₹${totalExpense.toLocaleString()}`,
      icon: <FaChartLine size={32} />,
      color: "from-red-500 via-rose-500 to-red-700",
      shadow: "shadow-red-500/30",
    },
    {
      title: "Savings",
      value: `₹${totalSavings.toLocaleString()}`,
      icon: <FaPiggyBank size={32} />,
      color: "from-violet-500 via-purple-500 to-indigo-700",
      shadow: "shadow-purple-500/30",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -12,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.color} p-6 text-white shadow-2xl ${card.shadow}`}
        >
          {/* Background Glow */}
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative flex justify-between items-center">
            <div>
              <p className="text-white/80 text-sm tracking-wide">
                {card.title}
              </p>

              <h2 className="text-4xl font-extrabold mt-3">
                {card.value}
              </h2>
            </div>

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="h-18 w-18 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-lg border border-white/30"
            >
              {card.icon}
            </motion.div>
          </div>

          {/* Bottom Line */}
          <div className="mt-6 h-1 rounded-full bg-white/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{
                duration: 1.5,
                delay: index * 0.3,
              }}
              className="h-full bg-white"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardCards;