import React from "react";
import Background from "../components/Login/Background";
import GlassCard from "../components/Login/GlassCard";
import Illustration from "../components/Login/Illustration";
import LoginForm from "../components/Login/LoginForm";
import FloatingIcons from "../components/Login/FloatingIcons";
import Particles from "../components/Login/Particles";

const Login = () => {
  return (
    <Background>
  <Particles />
  <FloatingIcons />

  <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
    <GlassCard>

      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-10">
        <Illustration />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-10">
        <LoginForm />
      </div>

    </GlassCard>
  </div>
</Background>
  );
};

export default Login;