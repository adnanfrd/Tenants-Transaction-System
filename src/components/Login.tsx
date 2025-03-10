"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, X } from "lucide-react";

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fcfbf8] px-4 p-10 m-10">
      <div className="w-full max-w-md bg-[#fcf8f4] shadow-md rounded-xl p-6 md:p-8 border border-[#e5e1dc]">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        
        <form className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email"
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
          
          <div className="flex justify-between text-sm">
            <Link href="#" className="text-blue-500" onClick={() => setShowForgotPassword(true)}>
              Forgot Password?
            </Link>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#5f8eff] text-white p-3 rounded-full shadow-md cursor-pointer hover:bg-[#4c7dff] transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <Link href="/signup" className="text-blue-500">Sign Up</Link>
        </p>
      </div>
      
      {showForgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button className="absolute top-3 right-3 text-gray-500 cursor-pointer" onClick={() => setShowForgotPassword(false)}>
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4">Reset Password</h3>
            <p className="text-sm text-gray-600 mb-3">Enter your email to receive a password reset link.</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button className="w-full bg-blue-500 text-white p-2 mt-3 rounded-lg hover:bg-blue-600">
              Send Reset Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
