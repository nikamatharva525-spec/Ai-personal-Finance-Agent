import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaMoon,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-lg rounded-2xl px-8 py-4 flex justify-between items-center">

      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-blue-600">
          💰 AI Personal Finance Agent
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back,{" "}
          <span className="font-semibold text-gray-700">
            {user?.name || "Atharva"}
          </span>{" "}
          👋
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Search Box */}
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notification */}
        <button
          className="text-2xl text-gray-600 hover:text-blue-600 transition"
          title="Notifications"
        >
          <FaBell />
        </button>

        {/* Dark Mode */}
        <button
          className="text-2xl text-gray-600 hover:text-yellow-500 transition"
          title="Dark Mode"
        >
          <FaMoon />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-5xl text-blue-600" />

          <div>
            <h3 className="font-semibold text-gray-800">
              {user?.name || "Atharva"}
            </h3>

            <p className="text-sm text-gray-500">
              Finance User
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;