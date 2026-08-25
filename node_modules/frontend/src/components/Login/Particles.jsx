import React from "react";
import { motion } from "framer-motion";

const Particles = () => {
  const particles = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-purple-500 opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 1.5,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight - 150,
            ],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  );
};

export default Particles;