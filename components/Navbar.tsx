"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center py-5 px-4"
    >
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center py-5 px-4">
        <div className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-4xl backdrop-blur-2xl bg-white/55 border border-white/30 ">
          {/* Left */}
          <div>
            <Link href="/" className="text-xl font-medium tracking-tight">
              CanvasHub
            </Link>
          </div>

          {/* Center */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/explore" className="relative group">
              Explore
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>

            <Link href="/artists" className="relative group">
              Artists
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>

            <Link href="/supplies" className="relative group">
              Supplies
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white transition-all duration-400 ease-in-out">
              <Link href="/sell">Become Artist</Link>
            </button>

            <button className="px-4 py-2 rounded-full bg-black text-white text-sm hover:opacity-90 transition">
              <Link href="/cart">Cart</Link>
            </button>
            <button className="px-2 py-2 rounded-full border-transparent text-sm">
              <Link href="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
