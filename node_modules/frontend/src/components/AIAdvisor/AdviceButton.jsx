import React from "react";

const AdviceButton = ({ onGenerate }) => {
  return (
    <button
      onClick={onGenerate}
      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl text-lg font-bold hover:scale-105 transition"
    >
      🔄 Generate New Advice
    </button>
  );
};

export default AdviceButton;