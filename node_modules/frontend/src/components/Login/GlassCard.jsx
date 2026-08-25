import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="
        w-[95%]
        max-w-7xl
        min-h-[85vh]
        bg-white/10
        backdrop-blur-2xl
        rounded-3xl
        border border-white/20
        shadow-2xl
        overflow-hidden
        flex
        relative
      "
    >
      {/* Left Glow */}
      <div className="absolute -left-32 top-20 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-30"></div>

      {/* Right Glow */}
      <div className="absolute -right-32 bottom-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 flex w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;