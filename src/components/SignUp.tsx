"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, CheckCircle } from "lucide-react";

const Signup = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fcfbf8] px-4 p-10 m-10">
      <div className="w-full max-w-md bg-[#fcf8f4] shadow-md rounded-xl p-6 md:p-8 border border-[#e5e1dc]">
        
        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center gap-3 w-full p-3 border border-[#dcd6d0] rounded-full text-gray-700 hover:bg-gray-100 transition">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.29 0 6.26 1.13 8.64 3.02l6.43-6.43C34.75 2.06 29.77 0 24 0 14.91 0 7.07 5.32 3.43 12.93l7.58 5.89C13.04 13.07 18.09 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.26 24.52c0-1.54-.14-3.02-.4-4.48H24v8.96h12.76c-.56 2.87-2.17 5.33-4.47 6.96l7.14 5.55c4.17-3.84 6.83-9.46 6.83-16z"/>
              <path fill="#FBBC05" d="M11.01 28.45c-1.03-.3-2.02-.75-2.91-1.32l-7.58 5.9c2.89 5.8 8.79 9.97 15.48 10.65v-9.05c-2.7-.09-5.21-.98-7.31-2.61z"/>
              <path fill="#34A853" d="M24 46c4.85 0 9.37-1.6 13.07-4.34l-7.14-5.55c-1.78 1.18-4 1.88-6.36 1.88-5.34 0-9.86-3.61-11.49-8.48l-7.58 5.9C7.07 42.68 14.91 48 24 48z"/>
            </svg>
            Login with Google
          </button>

          <button className="flex items-center justify-center gap-3 w-full p-3 border border-[#dcd6d0] rounded-full text-gray-700 hover:bg-gray-100 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M22 12.06C22 6.43 17.52 2 12 2S2 6.43 2 12.06c0 4.97 3.64 9.11 8.39 9.94V15.08h-2.6v-3h2.6V9.83c0-2.57 1.54-3.98 3.89-3.98 1.13 0 2.32.2 2.32.2v2.55h-1.31c-1.29 0-1.69.8-1.69 1.62v1.86h2.87l-.46 3h-2.41v6.92C18.36 21.17 22 17.03 22 12.06z"/>
            </svg>
            Login with Facebook
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-[#e5e1dc]" />
          <span className="px-3 text-gray-500 text-sm">Or</span>
          <hr className="flex-1 border-[#e5e1dc]" />
        </div>

        <form className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 pl-10 bg-[#fcf8f4] border border-[#dcd6d0] rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-10 bg-[#fcf8f4] border border-[#dcd6d0] rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 pl-10 bg-[#fcf8f4] border border-[#dcd6d0] rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-10 bg-[#fcf8f4] border border-[#dcd6d0] rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 pl-10 bg-[#fcf8f4] border border-[#dcd6d0] rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              id="terms"
              className="hidden"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            <label htmlFor="terms" className="flex items-center cursor-pointer text-gray-600">
              <div className={`w-4 h-4 border border-[#dcd6d0] rounded ${accepted ? "bg-blue-500 text-white" : "bg-[#fcf8f4]"}`}>
                {accepted && <CheckCircle className="w-4 h-4 text-white" />}
              </div>
              <span className="ml-2">
                I accept <Link href="#" className="text-blue-500 underline">Terms of Use & Privacy Policy</Link>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5f8eff] text-white p-3 rounded-full shadow-md hover:bg-[#4c7dff] transition flex items-center justify-center gap-2"
          >
            Sign Up →
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link href="/login" className="text-blue-500">LogIn</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
