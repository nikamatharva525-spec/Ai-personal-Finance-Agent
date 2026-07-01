import React from "react";

const GlassCard = ({ children }) => {
  return (
    <div
      className="
      w-[92%]
      max-w-7xl
      h-[88vh]
      rounded-[35px]
      bg-white/5
      backdrop-blur-2xl
      border border-white/10
      shadow-[0_0_80px_rgba(59,130,246,0.25)]
      flex
      overflow-hidden
      "
    >
      {children}
    </div>
  );
};

export default GlassCard;