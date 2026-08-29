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
      value: `₹${Number(totalBalance).toLocaleString("en-IN")}`,
      icon: <FaWallet />,
      color: "from-blue-500 via-cyan-500 to-blue-700",
      shadow: "shadow-blue-500/30",
    },
    {
      title: "Income",
      value: `₹${Number(totalIncome).toLocaleString("en-IN")}`,
      icon: <FaMoneyBillWave />,
      color: "from-green-500 via-emerald-500 to-green-700",
      shadow: "shadow-green-500/30",
    },
    {
      title: "Expenses",
      value: `₹${Number(totalExpense).toLocaleString("en-IN")}`,
      icon: <FaChartLine />,
      color: "from-red-500 via-rose-500 to-red-700",
      shadow: "shadow-red-500/30",
    },
    {
      title: "Savings",
      value: `₹${Number(totalSavings).toLocaleString("en-IN")}`,
      icon: <FaPiggyBank />,
      color: "from-violet-500 via-purple-500 to-indigo-700",
      shadow: "shadow-purple-500/30",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
        sm:gap-5
        lg:gap-6
        w-full
        min-w-0
      "
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`
            relative
            w-full
            min-w-0
            overflow-hidden
            rounded-2xl
            sm:rounded-3xl
            bg-gradient-to-br
            ${card.color}
            p-4
            sm:p-5
            lg:p-6
            text-white
            shadow-2xl
            ${card.shadow}
          `}
        >
          {/* ========================= */}
          {/* BACKGROUND GLOW */}
          {/* ========================= */}

          <div
            className="
              absolute
              -right-10
              -top-10
              h-28
              w-28
              sm:h-36
              sm:w-36
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          {/* ========================= */}
          {/* CARD CONTENT */}
          {/* ========================= */}

          <div
            className="
              relative
              flex
              items-center
              justify-between
              gap-3
              min-w-0
            "
          >
            {/* Text */}

            <div className="min-w-0 flex-1">

              <p
                className="
                  text-white/80
                  text-xs
                  sm:text-sm
                  tracking-wide
                "
              >
                {card.title}
              </p>

              <h2
                className="
                  mt-2
                  sm:mt-3
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-extrabold
                  break-all
                  leading-tight
                "
              >
                {card.value}
              </h2>

            </div>

            {/* Icon */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
                flex
                h-12
                w-12
                sm:h-14
                sm:w-14
                lg:h-16
                lg:w-16
                flex-shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-white/20
                backdrop-blur-lg
                text-xl
                sm:text-2xl
                lg:text-3xl
              "
            >
              {card.icon}
            </motion.div>

          </div>

          {/* ========================= */}
          {/* BOTTOM LINE */}
          {/* ========================= */}

          <div
            className="
              mt-4
              sm:mt-6
              h-1
              overflow-hidden
              rounded-full
              bg-white/20
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "80%",
              }}
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