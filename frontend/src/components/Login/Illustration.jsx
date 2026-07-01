import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero.png";

const Illustration = () => {
  return (
    <div className="hidden lg:flex w-1/2 h-full justify-center items-center relative overflow-hidden">

      <div className="absolute w-[420px] h-[420px] bg-purple-600 rounded-full blur-[150px] opacity-20"></div>

      <motion.img
        src={hero}
        alt="Finance Hero"
        className="w-[85%] relative z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

    </div>
  );
};

export default Illustration;