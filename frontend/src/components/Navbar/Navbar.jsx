import React from "react";
import { motion } from "framer-motion";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-20 px-8 bg-[#0F172A] border-b border-white/10 flex items-center justify-between"
    >
      {/* Left */}
      <div>
        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-gray-400 text-sm">
          Welcome back 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Notification */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative cursor-pointer"
        >
          <FaBell
            size={22}
            className="text-white"
          />

          <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full"></span>
        </motion.div>

        {/* User */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer"
        >
          <FaUserCircle
            size={38}
            className="text-purple-400"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Navbar;