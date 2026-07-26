import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

const SocialLogin = () => {
  // Google Login Success
  const handleGoogleSuccess = (credentialResponse) => {
    const user = jwtDecode(credentialResponse.credential);

    console.log("Google User:", user);

    alert(`Welcome ${user.name}`);

    // Save user information
    localStorage.setItem(
      "googleUser",
      JSON.stringify(user)
    );
  };

  // Google Login Failed
  const handleGoogleError = () => {
    console.log("Google Login Failed");
    alert("Google Login Failed");
  };

  return (
    <div className="mt-6">

      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-[1px] bg-gray-600"></div>

        <span className="text-gray-400 text-sm">
          Or continue with
        </span>

        <div className="flex-1 h-[1px] bg-gray-600"></div>
      </div>

      {/* Google Login */}
      <div className="flex justify-center mb-5">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          theme="filled_blue"
          size="large"
          shape="pill"
          text="signin_with"
        />
      </div>

      {/* GitHub & Facebook */}
      <div className="grid grid-cols-2 gap-4">

        {/* GitHub */}
        {/* GitHub */}
<button
  type="button"
  onClick={() => {
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=Ov23liEisadFlVvdhjVB";
  }}NT_ID
  className="
    flex
    items-center
    justify-center
    h-12
    rounded-xl
    bg-white/10
    border
    border-white/10
    hover:bg-gray-700
    transition
  "
>
      <FaGithub className="text-white text-xl" />
        </button>

        {/* Facebook */}
        <button
          type="button"
          onClick={() => {
            window.location.href =
              `https://www.facebook.com/v23.0/dialog/oauth?client_id=1009752718710695&redirect_uri=http://localhost:5173&response_type=code&scope=email,public_profile`;
          }}
          className="
            flex
            items-center
            justify-center
            h-12
            rounded-xl
            bg-white/10
            border
            border-white/10
            hover:bg-blue-600
            transition-all
            duration-300
          "
        >
          <FaFacebookF className="text-white text-xl" />
        </button>

      </div>

    </div>
  );
};

export default SocialLogin;