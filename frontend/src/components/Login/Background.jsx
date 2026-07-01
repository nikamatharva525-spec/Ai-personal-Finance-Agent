import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050816] relative overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute -left-44 -top-44 w-[500px] h-[500px] rounded-full bg-purple-600 blur-[180px] opacity-25"></div>

      {/* Blue Glow */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[220px] opacity-20"></div>

      {/* Cyan Glow */}
      <div className="absolute top-1/3 left-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500 blur-[180px] opacity-10"></div>

      {children}
    </div>
  );
};

export default Background;