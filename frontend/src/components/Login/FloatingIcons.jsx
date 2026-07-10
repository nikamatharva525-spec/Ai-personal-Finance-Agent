import React from "react";
import { motion } from "framer-motion";
import {
  FaWallet,
  FaCoins,
  FaChartLine,
  FaCreditCard,
} from "react-icons/fa";

const icons = [
  {
    Icon: FaWallet,
    top: "15%",
    left: "10%",
    color: "text-purple-500",
  },
  {
    Icon: FaCoins,
    top: "75%",
    left: "20%",
    color: "text-yellow-400",
  },
  {
    Icon: FaChartLine,
    top: "25%",
    right: "10%",
    color: "text-green-400",
  },
  {
    Icon: FaCreditCard,
    bottom: "15%",
    right: "18%",
    color: "text-blue-400",
  },
];

const FloatingIcons = () => {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
        >
          <item.Icon size={40} />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;