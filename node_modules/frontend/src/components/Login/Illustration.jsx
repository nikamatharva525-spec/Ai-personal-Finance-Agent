import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero.png";

const Illustration = () => {
  return (
    <div className="hidden lg:flex w-1/2 h-full justify-center items-center relative overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute w-[420px] h-[420px] bg-purple-600 rounded-full blur-[150px] opacity-20"></div>

      {/* Blue Glow */}
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600 rounded-full blur-[150px] opacity-20"></div>

      {/* Hero Image */}
      <motion.img
        src={hero}
        alt="Finance Hero"
        className="w-[85%] relative z-10"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 2, 0, -2, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
};

export default Illustration;

