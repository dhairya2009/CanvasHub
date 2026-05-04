"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrendingArtworks from "@/components/TrendingArtwork";
import FeaturedArtists from "@/components/FeaturedArtists";
import Link from "next/link";

export default function ArtworkPage() {
  const { id } = useParams(); // This gets the 'id' from the URL
  const [artwork, setArtwork] = useState<any>(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      const { data } = await supabase
        .from("artworks")
        .select("*, artists(name)")
        .eq("id", id)
        .single();
      setArtwork(data);
    };
    if (id) fetchArtwork();
  }, [id]);

  if (!artwork) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="relative w-24 h-24">
          {/* Outer Ring - Slow & Steady */}
          <motion.div
            className="absolute inset-0 border-[3px] border-gray-100 rounded-full"
            style={{ borderTopColor: "#3b82f6" }} // Blue accent
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Middle Ring - Faster & Counter-rotating */}
          <motion.div
            className="absolute inset-4 border-[2px] border-gray-50 rounded-full"
            style={{ borderBottomColor: "#000000" }} // Black accent
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Inner Core - Pulsing Pulse */}
          <motion.div
            className="absolute inset-8 bg-gradient-to-tr from-blue-500 to-black rounded-full shadow-lg"
            animate={{
              scale: [0.8, 1.1, 0.8],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Elegant Typography */}
        <div className="mt-12 text-center space-y-2">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold tracking-[0.5em] uppercase text-black"
          >
            Loading Artwork
          </motion.h2>

          {/* Animated Loading Dots */}
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-blue-500 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-50 rounded-full blur-[100px] -z-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/30 selection:bg-yellow-200">
      <Navbar />
      <main className="max-w-[1400px] mx-auto pt-28 pb-20 px-4 md:px-8">
        {/* Breadcrumbs - Amazon Style */}
        <nav className="text-xs text-gray-500 mb-6 flex gap-2">
          <span className="hover:underline cursor-pointer">Art Gallery</span> ›
          <span className="hover:underline cursor-pointer">
            {artwork.style}
          </span>{" "}
          ›<span className="text-gray-900 font-medium">{artwork.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Image Gallery (Occupies 5/12) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={artwork.image_url}
                alt={artwork.title}
                fill
                priority
                // className="h-10 p-4 transition-transform hover:scale-110 cursor-zoom-in"
                className="h-fit object-fill group-hover:scale-105 transition duration-500"
              />
            </div>
            <p className="text-center text-xs text-gray-400">
              Roll over image to zoom in
            </p>
          </div>

          {/* CENTER: Product Information (Occupies 4/12) */}
          <div className="lg:col-span-4 space-y-6">
            <section className="border-b border-gray-200 pb-4">
              <h1 className="text-3xl font-medium text-gray-900 leading-tight">
                {artwork.title} — Original {artwork.medium || "Mixed Media"} by{" "}
                {artwork.artists?.name}
              </h1>
              <p className="text-sm text-cyan-700 hover:text-orange-700 cursor-pointer mt-1">
                <Link href={`/artist/${artwork.artist_id}`}>
                  Visit the {artwork.artists?.name} Store
                </Link>
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(Math.floor(artwork.rating || 5))}
                  {"☆".repeat(5 - Math.floor(artwork.rating || 5))}
                </div>
                <span className="text-cyan-700 text-sm">
                  {artwork.rating} ratings
                </span>
              </div>
            </section>

            <section className="space-y-4">
              <div className="text-sm space-y-2">
                <p>
                  <span className="font-bold">Style:</span> {artwork.style}
                </p>
                <p>
                  <span className="font-bold">Material:</span>{" "}
                  {artwork.medium || "Standard Canvas"}
                </p>
                <p>
                  <span className="font-bold">Dimensions:</span>{" "}
                  {artwork.dimensions || "24 x 36 inches"}
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="font-bold text-base">About this masterpiece</h3>
              <ul className="list-disc ml-5 text-sm space-y-2 text-gray-800">
                <li>
                  Authentic hand-crafted artwork with verified artist signature.
                </li>
                <li>
                  High-quality {artwork.medium} used for long-lasting color
                  preservation.
                </li>
                <li>
                  Includes a physical Certificate of Authenticity (COA) and
                  digital NFT twin.
                </li>
                <li>
                  Securely packaged in museum-grade crates for worldwide
                  shipping.
                </li>
              </ul>
            </section>
          </div>

          {/* RIGHT: Buy Box (Occupies 3/12) - The Amazon Sidebar */}
          <div className="lg:col-span-3">
            <div className="border border-gray-300 rounded-lg p-5 bg-white space-y-4 shadow-sm">
              <div className="text-2xl text-gray-900">{artwork.price}</div>

              <div className="text-sm">
                <p className="text-green-700 font-medium">In Stock</p>
                <p className="text-gray-500 mt-1">
                  Ships from{" "}
                  <span className="font-bold text-gray-900">
                    Art-E-Commerce Vault
                  </span>
                </p>
              </div>

              <div className="space-y-2">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full text-sm shadow-sm transition">
                  Add to Cart
                </button>
                <button className="w-full bg-orange-400 hover:bg-orange-500 py-2 rounded-full text-sm shadow-sm transition">
                  Buy Now
                </button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button className="text-xs text-cyan-700 hover:underline flex items-center gap-1">
                  🔒 Secure transaction
                </button>
              </div>

              <div className="text-xs space-y-1 pt-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Ships from</span>
                  <span>Gallery Direct</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sold by</span>
                  <span>{artwork.artists?.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Product Table - Bottom Section */}
      </main>
      <TrendingArtworks />
      <FeaturedArtists />
      <Footer />
    </div>
  );
}
