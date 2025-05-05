"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import Image from "next/image";

const MotionDiv = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.div), { ssr: false }
);

const MotionButton = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.button), { ssr: false }
);

export default function SignInPage() {
    return (
      <>  
      <Navbar />
      <main>
      <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/LifesCos-4376.JPG')" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0" />

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl mt-35 shadow-2xl rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20">
        {/* รูปด้านซ้าย */}
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex md:w-1/2 items-center justify-center p-6 bg-black/10"
        >
          <Image
            src="/images/LifesCos-4438.jpg"
            alt="Login Image"
            width={500}
            height={500}
            className="rounded-lg object-contain"
          />
        </MotionDiv>

        {/* ฟอร์มด้านขวา */}
        <MotionDiv
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 p-10 text-white"
        >
          <h2 className="text-4xl font-bold mb-2">Welcome To Lifes'Cos Website</h2>
          <p className="text-sm text-gray-300 mb-6">
            Login to continue your journey
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-full bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-full bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300"
              />
            </div>

            <MotionButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-purple-600 text-white py-2 rounded-full font-semibold shadow-md hover:bg-purple-700 transition"
            >
              Sign In
            </MotionButton>

            <div className="flex items-center justify-between text-sm text-gray-300 mt-2">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
              <a href="/register" className="hover:underline">
                Sign Up
              </a>
            </div>
          </form>

          {/* หรือเข้าสู่ระบบด้วย */}
          <div className="mt-6 space-y-3">
            <p className="text-center text-gray-400 text-sm">or login with</p>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-3 w-full bg-white text-black font-medium py-2 rounded-full hover:bg-gray-200 transition">
                <Image
                  src="/icons/GG.png"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Login with Google
              </button>

              <button className="flex items-center justify-center gap-3 w-full bg-[#1877F2] text-white font-medium py-2 rounded-full hover:bg-[#145db2] transition">
                <Image
                  src="/icons/FB.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                Login with Facebook
              </button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
      </main>
      <Footer />
      </>
    );
  }
  