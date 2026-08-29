import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHome,
  FaMoneyBillWave,
  FaReceipt,
  FaExchangeAlt,
  FaChartPie,
  FaBullseye,
  FaRobot,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    title: "Income",
    icon: <FaMoneyBillWave />,
    path: "/income",
  },
  {
    title: "Expenses",
    icon: <FaReceipt />,
    path: "/expenses",
  },
  {
    title: "Transactions",
    icon: <FaExchangeAlt />,
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
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setMobileOpen(false);

    navigate("/login");
  };

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* ============================= */}
      {/* MOBILE TOP BAR */}
      {/* ============================= */}

      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 py-3 md:hidden">

        <h1 className="text-xl font-extrabold bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          FinanceHub
        </h1>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white text-2xl p-2"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* ============================= */}
      {/* MOBILE OVERLAY */}
      {/* ============================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
          />
        )}
      </AnimatePresence>


      {/* ============================= */}
      {/* SIDEBAR */}
      {/* ============================= */}

      <motion.aside
        initial={{ x: -120 }}
        animate={{
          x:
            typeof window !== "undefined" && window.innerWidth < 768
              ? mobileOpen
                ? 0
                : -280
              : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 z-50 h-screen w-64 overflow-hidden
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800
        border-r border-white/10
        backdrop-blur-xl
        shadow-2xl"
      >

        {/* Background Glow */}

        <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />


        <div className="relative flex h-full flex-col justify-between">

          {/* ============================= */}
          {/* LOGO */}
          {/* ============================= */}

          <div>

            <div className="border-b border-white/10 p-7">

              <div className="flex items-center justify-between">

                <motion.h1
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-extrabold bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  FinanceHub
                </motion.h1>

                {/* Close button on mobile */}

                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 text-xl md:hidden"
                >
                  <FaTimes />
                </button>

              </div>

              <p className="mt-2 text-sm text-slate-400">
                AI Personal Finance
              </p>

            </div>


            {/* ============================= */}
            {/* NAVIGATION */}
            {/* ============================= */}

            <div className="mt-6 px-3">

              {menuItems.map((item, index) => (

                <NavLink
                  key={index}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  onClick={handleNavigation}
                >

                  {({ isActive }) => (

                    <motion.div
                      whileHover={{
                        x: 8,
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`group relative mb-3 flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-violet-600 via-fuchsia-600 to-blue-600 text-white shadow-lg"
                          : "text-slate-300 hover:bg-white/10"
                      }`}
                    >

                      {/* Active Indicator */}

                      {isActive && (
                        <motion.div
                          layoutId="activeMenu"
                          className="absolute left-0 top-2 h-10 w-1 rounded-full bg-white"
                        />
                      )}


                      {/* Icon */}

                      <span className="text-xl transition-transform duration-300 group-hover:rotate-6">
                        {item.icon}
                      </span>


                      {/* Title */}

                      <span className="font-medium tracking-wide">
                        {item.title}
                      </span>

                    </motion.div>

                  )}

                </NavLink>

              ))}

            </div>

          </div>


          {/* ============================= */}
          {/* LOGOUT */}
          {/* ============================= */}

          <div className="border-t border-white/10 p-4">

            <motion.button
              whileHover={{
                scale: 1.03,
                x: 6,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={handleLogout}
              className="flex w-full items-center gap-4 rounded-2xl p-4 text-red-400 transition-all duration-300 hover:bg-red-500/20"
            >

              <FaSignOutAlt className="text-xl" />

              <span className="font-semibold">
                Logout
              </span>

            </motion.button>

          </div>

        </div>

      </motion.aside>
    </>
  );
};

export default Sidebar;