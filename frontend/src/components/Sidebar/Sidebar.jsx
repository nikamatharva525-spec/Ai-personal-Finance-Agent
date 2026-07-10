import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaBullseye,
  FaRobot,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/",
  },
  {
    title: "Transactions",
    icon: <FaWallet />,
    path: "/transactions",
  },
  {
    title: "Analytics",
    icon: <FaChartPie />,
    path: "/analytics",
  },
  {
    title: "Budget Planner",
    icon: <FaBullseye />,
    path: "/budget",
  },
  {
    title: "AI Advisor",
    icon: <FaRobot />,
    path: "/advisor",
  },
  {
    title: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 w-64 h-screen bg-[#0B1120] border-r border-white/10 text-white flex flex-col justify-between"
    >
      <div>
        {/* Logo */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-purple-500">
            FinanceHub
          </h1>
        </div>

        {/* Menu */}
        <div className="px-4 space-y-3">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/"}
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{ x: 8 }}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      : "hover:bg-white/10 text-gray-300"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="p-4">
        <motion.div
          whileHover={{ x: 8 }}
          className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-red-500/20 text-red-400"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;