"use client";

import { motion } from "framer-motion";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [cards, setCards] = useState(["/art11.jpg", "/art6.jpg", "/art9.jpg"]);
  const [artists, setArtists] = useState(0);
  const [artworks, setArtworks] = useState(0);
  var data = { no_of_artist: 440, artworks: 1476 };

  useEffect(() => {
    let a = 0;
    let b = 0;

    const interval = setInterval(() => {
      if (a < data.no_of_artist) a += 10;
      if (b < data.artworks) b += 40;

      setArtists(a);
      setArtworks(b);

      if (a >= 500 && b >= 2000) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => [...prev.slice(1), prev[0]]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-300 to-white">
      <section className="min-h-screen pt-50 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Left */}
            <div>
              <p className="text-sm font-medium text-blue-400">
                Discover Original Creations
              </p>

              <h1 className="text-4xl md:text-7xl font-bold leading-tight text-gray-900">
                Buy Art That
                <br /> Speaks To You
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
                Explore handcrafted paintings, sketches, digital art and custom
                commissions directly from talented independent artists.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="/explore">
                  <button className="px-6 py-3 rounded-full bg-black text-white hover:opacity-90 transition">
                    Explore Art
                  </button>
                </Link>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                <div className="bg-white/55 backdrop-blur-2xl border border-white/30 rounded-2xl px-5 py-4 shadow-md">
                  <h3 className="text-xl font-bold">{artists}+</h3>
                  <p className="text-xs text-gray-600">Artists</p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl px-5 py-4 shadow-md">
                  <h3 className="text-xl font-bold">{artworks}+</h3>
                  <p className="text-xs text-gray-600">Artworks</p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl px-5 py-4 shadow-md">
                  <h3 className="text-xl font-bold">Worldwide</h3>
                  <p className="text-xs text-gray-600">Shipping</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: +80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="relative w-[500px] h-[520px] ml-auto"
            >
              {cards.map((card, index) => {
                const styles = [
                  "top-0 right-0 z-30 scale-100 rotate-0",
                  "top-10 right-12 z-20 scale-95 rotate-6 opacity-90",
                  "top-20 right-24 z-10 scale-90 -rotate-6 opacity-70",
                ];

                return (
                  <motion.div
                    key={card}
                    layout
                    transition={{ duration: 0.8 }}
                    className={`absolute w-82 h-106 rounded-3xl overflow-hidden shadow-2xl ${styles[index]}`}
                  >
                    <Image
                      src={card}
                      alt="Artwork"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
