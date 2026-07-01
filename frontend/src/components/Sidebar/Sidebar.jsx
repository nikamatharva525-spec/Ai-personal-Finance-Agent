import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaPiggyBank,
  FaRobot,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white shadow-2xl flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-blue-500">
        <h1 className="text-2xl font-bold">
          💰 Finance AI
        </h1>

        <p className="text-blue-200 text-sm mt-1">
          Personal Finance Agent
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg mb-2 transition ${
              isActive
                ? "bg-white text-blue-700 font-semibold"
                : "hover:bg-blue-600"
            }`
          }
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-blue-600 transition"
        >
          <FaWallet />
          Expenses
        </NavLink>

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-blue-600 transition"
        >
          <FaChartPie />
          Analytics
        </NavLink>

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-blue-600 transition"
        >
          <FaPiggyBank />
          Savings
        </NavLink>

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-blue-600 transition"
        >
          <FaRobot />
          AI Advisor
        </NavLink>

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-blue-600 transition"
        >
          <FaCog />
          Settings
        </NavLink>

      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-blue-500">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 p-3 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;