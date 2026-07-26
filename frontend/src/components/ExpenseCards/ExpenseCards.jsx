import React from "react";
import { Wallet, Calendar, Receipt } from "lucide-react";
import { motion } from "framer-motion";

const ExpenseCards = ({
  totalExpense = 0,
  monthlyExpense = 0,
  totalTransactions = 0,
}) => {
  const cards = [
    {
      title: "Total Expense",
      value: `₹${Number(totalExpense).toLocaleString()}`,
      icon: <Wallet size={34} />,
      gradient: "from-pink-500 via-red-500 to-orange-500",
      shadow: "shadow-red-400/40",
    },
    {
      title: "This Month",
      value: `₹${Number(monthlyExpense).toLocaleString()}`,
      icon: <Calendar size={34} />,
      gradient: "from-blue-500 via-cyan-500 to-sky-400",
      shadow: "shadow-blue-400/40",
    },
    {
      title: "Transactions",
      value: totalTransactions,
      icon: <Receipt size={34} />,
      gradient: "from-green-500 via-emerald-500 to-lime-400",
      shadow: "shadow-green-400/40",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          whileHover={{
            scale: 1.06,
            rotate: 1,
          }}
          className={`bg-gradient-to-r ${card.gradient}
          rounded-3xl p-6 text-white
          shadow-2xl ${card.shadow}
          relative overflow-hidden cursor-pointer`}
        >
          {/* Background Glow */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>

          <div className="flex justify-between items-center relative z-10">
            <div>
              <p className="text-white/80 text-sm font-semibold">
                {card.title}
              </p>

              <h1 className="text-4xl font-extrabold mt-3">
                {card.value}
              </h1>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="bg-white/20 p-5 rounded-full backdrop-blur-md"
            >
              {card.icon}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExpenseCards;