"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import search from "@/public/search.png";

function Navbar() {
  return (
    <div className="">
      <div>
        {/* Main Navbar */}
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full z-50 flex justify-center py-5 px-4"
        >
          <div className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full backdrop-blur-2xl bg-white/55 border border-white/30">
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
              <button className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white transition">
                <Link href="/sell">Become Artist</Link>
              </button>

              <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
                <Link href="/cart">Cart</Link>
              </button>

              <button className="px-2 py-2 text-sm">
                <Link href="/login">Login</Link>
              </button>
            </div>
          </div>
        </motion.header>

        {/* Search Circle Separate */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed top-5 left-[calc(50%+33rem)] z-[60]"
        >
          <Link href="/search">
            <button className="h-16 w-16 rounded-full backdrop-blur-2xl bg-white/45 border border-white/30 text-3xl font-bold flex items-center justify-center hover:scale-104 transition duration-400">
              <Image src={search} alt="Search" className="h-7 w-7" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
