import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();

  // =========================
  // GOOGLE LOGIN
  // =========================
  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const user = jwtDecode(credentialResponse.credential);

      console.log("Google User:", user);

      localStorage.setItem(
        "googleUser",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "googleToken",
        credentialResponse.credential
      );

      alert(`Welcome ${user.name}`);

      navigate("/dashboard");
    } catch (error) {
      console.error("Google Login Error:", error);
      alert("Google Login Failed");
    }
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
    alert("Google Login Failed");
  };

  // =========================
  // FACEBOOK LOGIN
  // =========================
  const handleFacebookLogin = () => {
    const fbAppId =
      import.meta.env.VITE_FACEBOOK_APP_ID;

    if (!fbAppId) {
      alert("Facebook App ID is missing.");
      return;
    }

    const redirectUri = window.location.origin;

    const facebookLoginUrl =
      `https://www.facebook.com/v23.0/dialog/oauth` +
      `?client_id=${encodeURIComponent(fbAppId)}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&response_type=code` +
      `&scope=public_profile`;

    console.log("Facebook Login URL:", facebookLoginUrl);

    window.location.href = facebookLoginUrl;
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

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-4">

        {/* GitHub */}
        <button
          type="button"
          onClick={() => {
            const githubClientId =
              import.meta.env.VITE_GITHUB_CLIENT_ID;

            if (!githubClientId) {
              alert("GitHub Client ID is missing.");
              return;
            }

            window.location.href =
              `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
                githubClientId
              )}`;
          }}
          className="flex items-center justify-center h-12 rounded-xl bg-white/10 border border-white/10 hover:bg-gray-700 transition duration-300"
        >
          <FaGithub className="text-white text-xl" />
        </button>

        {/* Facebook */}
        <button
          type="button"
          onClick={handleFacebookLogin}
          className="flex items-center justify-center h-12 rounded-xl bg-white/10 border border-white/10 hover:bg-blue-600 transition duration-300"
        >
          <FaFacebookF className="text-white text-xl" />
        </button>

      </div>
    </div>
  );
};

export default SocialLogin;