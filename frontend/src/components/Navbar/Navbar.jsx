import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaQuestionCircle,
} from "react-icons/fa";

const Navbar = ({ search = "", setSearch = () => {} }) => {
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    "💰 Budget exceeded by ₹2,000",
    "🤖 AI generated new AI advice",
    "📊 Monthly financial report is ready",
    "🎯 Savings goal achieved 80%",
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        sticky top-0 z-40
        flex h-20 items-center justify-between
        border-b border-white/10
        bg-slate-900/70
        px-4 sm:px-6 md:px-8
        backdrop-blur-xl
        shadow-xl
      "
    >
      {/* ========================= */}
      {/* LEFT SIDE */}
      {/* ========================= */}

      <div className="min-w-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white truncate">
          Dashboard
        </h1>

        <p className="hidden sm:block text-sm md:text-base text-slate-400">
          Welcome back 👋
        </p>
      </div>

      {/* ========================= */}
      {/* RIGHT SIDE */}
      {/* ========================= */}

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">

        {/* ========================= */}
        {/* SEARCH */}
        {/* ========================= */}

        <div className="relative hidden sm:block">

          <FaSearch className="absolute left-4 top-4 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="
              w-40 md:w-56 lg:w-72
              rounded-xl
              border border-white/10
              bg-slate-800/80
              py-3 pl-11 pr-4
              text-white
              placeholder:text-slate-400
              outline-none
              transition-all
              duration-300
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/40
            "
          />

        </div>

        {/* ========================= */}
        {/* NOTIFICATIONS */}
        {/* ========================= */}

        <div className="relative">

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 10,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="relative cursor-pointer p-2"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
          >

            <FaBell
              size={21}
              className="text-white sm:w-6 sm:h-6"
            />

            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="
                absolute
                -right-1
                -top-1
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-red-500
                text-xs
                text-white
              "
            >
              {notifications.length}
            </motion.span>

          </motion.div>

          {/* Notifications Dropdown */}

          <AnimatePresence>

            {showNotifications && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  fixed
                  right-3
                  top-20
                  w-[calc(100vw-24px)]
                  max-w-80
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900
                  shadow-2xl
                  sm:absolute
                  sm:right-0
                  sm:top-auto
                  sm:mt-5
                  sm:w-80
                "
              >

                <div className="border-b border-white/10 p-4">
                  <h2 className="font-bold text-white">
                    🔔 Notifications
                  </h2>
                </div>

                {notifications.map((item, index) => (

                  <div
                    key={index}
                    className="
                      border-b
                      border-white/10
                      px-4
                      py-4
                      text-sm
                      text-slate-300
                      transition
                      hover:bg-white/10
                    "
                  >
                    {item}
                  </div>

                ))}

                <button
                  onClick={() =>
                    setShowNotifications(false)
                  }
                  className="
                    w-full
                    bg-gradient-to-r
                    from-violet-600
                    to-blue-600
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:opacity-90
                  "
                >
                  Mark All as Read
                </button>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

        {/* ========================= */}
        {/* PROFILE */}
        {/* ========================= */}

        <div className="relative">

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 5,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="cursor-pointer"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
          >

            <FaUserCircle
              size={35}
              className="text-violet-400 sm:w-10 sm:h-10"
            />

          </motion.div>

          {/* Profile Dropdown */}

          <AnimatePresence>

            {showProfile && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  fixed
                  right-3
                  top-20
                  w-[calc(100vw-24px)]
                  max-w-72
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-slate-900
                  shadow-2xl
                  sm:absolute
                  sm:right-0
                  sm:top-auto
                  sm:mt-5
                  sm:w-72
                "
              >

                {/* Profile Header */}

                <div className="border-b border-white/10 p-5">

                  <div className="flex items-center gap-3">

                    <FaUserCircle
                      size={50}
                      className="text-violet-400"
                    />

                    <div className="min-w-0">

                      <h3 className="text-lg font-bold text-white truncate">
                        Atharva Nikam
                      </h3>

                      <p className="text-sm text-slate-400">
                        AI / ML Developer
                      </p>

                    </div>

                  </div>

                </div>

                {/* My Profile */}

                <button
                  onClick={() => {
                    navigate("/profile");
                    setShowProfile(false);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-5
                    py-4
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  <FaUser />
                  My Profile
                </button>

                {/* Settings */}

                <button
                  onClick={() => {
                    navigate("/settings");
                    setShowProfile(false);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-5
                    py-4
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  <FaCog />
                  Settings
                </button>

                {/* Help */}

                <button
                  onClick={() => {
                    navigate("/help");
                    setShowProfile(false);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-5
                    py-4
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  <FaQuestionCircle />
                  Help Center
                </button>

                {/* Logout */}

                <div className="border-t border-white/10">

                  <button
                    onClick={handleLogout}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      bg-red-600
                      px-5
                      py-4
                      text-white
                      transition
                      hover:bg-red-700
                    "
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </motion.div>
  );
};

export default Navbar;