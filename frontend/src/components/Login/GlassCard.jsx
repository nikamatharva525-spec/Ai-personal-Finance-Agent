import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({ children }) => {
  return (
    <motion.div
      className="
        w-[92%]
        max-w-7xl
        h-[88vh]
        rounded-[35px]
        bg-white/5
        backdrop-blur-3xl
        border border-white/10
        shadow-[0_0_120px_rgba(59,130,246,0.25)]
        flex
        overflow-hidden
      "
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        rotateX: 5,
        rotateY: -5,
        scale: 1.02,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;