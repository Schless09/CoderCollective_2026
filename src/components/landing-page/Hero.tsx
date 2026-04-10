"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LogoScroller from "./LogoScroller";
import Terminal from "./Terminal";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e1b4b 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(168, 85, 247, 0.4) 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-white">Push to prod</span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                on your career
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Exclusive opportunities for senior software engineers at VC-backed
              companies.
            </p>

            <LogoScroller />

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="https://cal.com/andrew-schuessler-xrp0oa/20-minute-chat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-xl hover:shadow-purple-500/40"
                  style={{ boxShadow: "0 4px 15px rgba(168, 85, 247, 0.3)" }}
                >
                  Get Started
                </motion.button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
