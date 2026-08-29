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
      value: `₹${Number(totalExpense).toLocaleString("en-IN")}`,
      icon: <Wallet />,
      gradient: "from-pink-500 via-red-500 to-orange-500",
      shadow: "shadow-red-400/40",
    },
    {
      title: "This Month",
      value: `₹${Number(monthlyExpense).toLocaleString("en-IN")}`,
      icon: <Calendar />,
      gradient: "from-blue-500 via-cyan-500 to-sky-400",
      shadow: "shadow-blue-400/40",
    },
    {
      title: "Transactions",
      value: Number(totalTransactions).toLocaleString("en-IN"),
      icon: <Receipt />,
      gradient: "from-green-500 via-emerald-500 to-lime-400",
      shadow: "shadow-green-400/40",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
        sm:gap-5
        lg:gap-8
        w-full
        min-w-0
      "
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          whileHover={{
            scale: 1.02,
            y: -5,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`
            relative
            w-full
            min-w-0
            overflow-hidden
            cursor-pointer
            rounded-2xl
            sm:rounded-3xl
            bg-gradient-to-r
            ${card.gradient}
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
              -right-8
              -top-8
              h-24
              w-24
              sm:h-32
              sm:w-32
              rounded-full
              bg-white/20
              blur-2xl
            "
          />

          {/* ========================= */}
          {/* CARD CONTENT */}
          {/* ========================= */}

          <div
            className="
              relative
              z-10
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
                  font-semibold
                "
              >
                {card.title}
              </p>

              <h1
                className="
                  mt-2
                  sm:mt-3
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-extrabold
                  leading-tight
                  break-all
                "
              >
                {card.value}
              </h1>
            </div>

            {/* Icon */}

            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, 6, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
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
                bg-white/20
                p-3
                sm:p-4
                backdrop-blur-md
              "
            >
              {React.cloneElement(card.icon, {
                size: 24,
                className:
                  "sm:hidden",
              })}

              {React.cloneElement(card.icon, {
                size: 28,
                className:
                  "hidden sm:block lg:hidden",
              })}

              {React.cloneElement(card.icon, {
                size: 34,
                className:
                  "hidden lg:block",
              })}
            </motion.div>
          </div>

          {/* ========================= */}
          {/* DECORATIVE LINE */}
          {/* ========================= */}

          <div
            className="
              relative
              z-10
              mt-4
              sm:mt-5
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
                width: "75%",
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
              }}
              className="h-full bg-white/80"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExpenseCards;