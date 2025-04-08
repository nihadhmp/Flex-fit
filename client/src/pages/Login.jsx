import React from "react";
import LoginImage from "../assets/LoginImage.png";
import flexfit from "../assets/flexfit.png";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-[#242529] [font-family:'Poppins',sans-serif] bg-cover bg-center md:bg-none">
      <div className="md:flex min-h-screen bg-[#242529] md:bg-transparent">
        {/* Left Section (Form) */}
        <div className="flex flex-col justify-center items-center w-full md:w-3/5 px-6 md:px-20 lg:px-32 py-10 gap-6">
          <img className="mb-4 w-40" src={flexfit} alt="logo" />

          <h1 className="text-[#FF7200] text-2xl md:text-4xl [font-family:'Holtwood_One_SC',serif] text-center">
            Welcome to flex fit
          </h1>

          {/* Email Field */}
          <div className="w-full max-w-lg flex flex-col gap-2">
            <label className="text-[#F5F5F5] text-lg">Email</label>
            <div className="flex">
              <div className="bg-[#35373B] h-14 rounded-l-xl px-4 flex items-center">
                <MdOutlineMail className="text-2xl text-white/30" />
              </div>
              <input
                type="email"
                className="w-full h-14 bg-[#35373B] text-white px-4 rounded-r-xl outline-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="w-full max-w-lg flex flex-col gap-2">
            <label className="text-[#F5F5F5] text-lg">Password</label>
            <div className="flex">
              <div className="bg-[#35373B] h-14 rounded-l-xl px-4 flex items-center">
                <MdLockOutline className="text-2xl text-white/30" />
              </div>
              <input
                type="password"
                className="w-full h-14 bg-[#35373B] text-white px-4 outline-none"
              />
              <div className="bg-[#35373B] h-14 rounded-r-xl px-4 flex items-center">
                <IoMdEyeOff className="text-2xl text-white/30" />
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg md:-mt-3 text-right text-[#F5F5F5] text-lg ">
            Forgot?
          </div>

          {/* Login Button */}
          <Link
            to="/"
            className="w-full py-3.5 text-center max-w-lg h-14 mb-3 bg-[#FF7200] text-white text-xl rounded-xl"
          >
            LOGIN
          </Link>

          {/* Create Account Button */}
          <Link
            to="/signup"
            className="w-full text-center py-3.5 max-w-lg h-14 bg-[#FF7200] text-white text-xl rounded-xl"
          >
            Create new account
          </Link>

          {/* Continue With */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <p className="text-[#F5F5F5] text-base">Continue with</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                <FcGoogle />
              </div>
              <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                <FaApple />
              </div>
              <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                <FaFacebook className="text-[#1877F2]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Image (only visible on md and up) */}
        <div
          className="hidden md:block w-2/5 bg-cover bg-center"
          style={{ backgroundImage: `url(${LoginImage})` }}
        ></div>
      </div>
    </div>
  );
}

export default Login;
