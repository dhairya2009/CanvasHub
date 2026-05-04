"use client";

import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import ArtworkCard from "@/components/ArtworkCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ArtistDetailPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [artistArtworks, setArtistArtworks] = useState<any[]>([]);

  useEffect(() => {
    const fetchArtist = async () => {
      const { data, error } = await supabase
        .from("artists")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setArtist(data);
      setLoading(false);
    };
    if (id) fetchArtist();

    // fetch artworks
    const fetchArtistAndWorks = async () => {
      // 1. Fetch Artist Data
      const { data: artistData } = await supabase
        .from("artists")
        .select("*")
        .eq("id", id)
        .single();
      setArtist(artistData);

      // 2. Fetch all Artworks belonging to this artist
      const { data: artworkData } = await supabase
        .from("artworks")
        .select("*")
        .eq("artist_id", id); // Make sure your DB column name is artist_id

      setArtistArtworks(artworkData || []);
      setLoading(false);
    };

    if (id) fetchArtistAndWorks();
  }, [id]);

  if (loading) {
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
            Loading Artist Profile
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

  if (!artist) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative inline-block"
          >
            <span className="text-[12rem] font-serif italic text-gray-100 leading-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-2xl font-serif italic text-black">
                Artist Departed
              </h2>
            </div>
          </motion.div>

          <p className="text-gray-500 font-serif leading-relaxed italic">
            The requested portfolio has been moved or is currently being
            archived by the curator. Please explore our other featured
            collections.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-black text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors shadow-xl"
          >
            Return to Gallery
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Cinematic Ambient Background */}
      <div className="bg-gradient-to-b from-blue-300 to-white absolute w-full h-screen -z-50"></div>

      <main className="pt-32 pb-20 z-50">
        {/* ARTIST HERO SECTION */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-900/5 overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              {/* Profile Image - Modern shadow instead of border */}
              <div className="relative w-64 h-64 shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/10 ring-8 ring-white/50">
                <Image
                  src={artist.image_url}
                  alt={artist.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Artist Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                  Verified Creator
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                  {artist.name}
                </h1>

                <p className="text-xl md:text-2xl font-medium text-slate-500 mt-2">
                  {artist.style} <span className="text-slate-300 mx-2">/</span>{" "}
                  Specialist
                </p>

                {/* High-End Stats Bar */}
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-12 border-t border-slate-200/60 pt-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
                      Collector Rating
                    </p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">
                      ⭐ {artist.rating}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
                      Creations Sold
                    </p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">
                      {artist.sold_count}+
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-lg text-slate-600 max-w-2xl leading-relaxed italic font-serif">
                  "
                  {artist.bio ||
                    "This artist is a featured member of our creative community, specializing in unique digital and physical art pieces."}
                  "
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GALLERY SECTION */}
        <section className="mt-24 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[2px] bg-blue-500" />
                <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
                  Exclusive Collection
                </p>
              </div>
              <h2 className="text-4xl font-bold text-slate-900">
                Featured Artworks
              </h2>
            </div>

            <p className="text-slate-400 text-sm font-medium pb-1">
              Showing {artistArtworks.length} masterpieces
            </p>
          </motion.div>

          {/* The Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {artistArtworks.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ArtworkCard
                  id={art.id}
                  title={art.title}
                  price={art.price}
                  rating={art.rating}
                  style={art.style}
                  image={art.image_url}
                  artist={artist.name}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
