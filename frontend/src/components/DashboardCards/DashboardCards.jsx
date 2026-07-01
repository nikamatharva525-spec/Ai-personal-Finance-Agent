import React from "react";
import {
  FaWallet,
  FaMoneyBillWave,
  FaChartLine,
  FaPiggyBank,
} from "react-icons/fa";

const DashboardCards = ({
  totalBalance = 120000,
  totalIncome = 80000,
  totalExpense = 35000,
  totalSavings = 85000,
}) => {
  const cards = [
    {
      title: "Total Balance",
      value: `₹${totalBalance.toLocaleString()}`,
      icon: <FaWallet size={30} />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Income",
      value: `₹${totalIncome.toLocaleString()}`,
      icon: <FaMoneyBillWave size={30} />,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Expenses",
      value: `₹${totalExpense.toLocaleString()}`,
      icon: <FaChartLine size={30} />,
      color: "from-red-500 to-red-700",
    },
    {
      title: "Savings",
      value: `₹${totalSavings.toLocaleString()}`,
      icon: <FaPiggyBank size={30} />,
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${card.color} text-white rounded-2xl shadow-xl p-6`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p>{card.title}</p>
              <h2 className="text-3xl font-bold">{card.value}</h2>
            </div>

            <div className="bg-white/20 p-4 rounded-full">
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;