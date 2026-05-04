"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ArtistCard from "@/components/ArtistCard";
import { supabase } from "@/lib/supabaseClient";

export default function page() {
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        const { data, error: sbError } = await supabase
          .from("artists")
          .select("*")
          .order("name", { ascending: true });

        if (sbError) throw sbError;
        setArtists(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading)
    return (
      <div className="text-white pt-40 text-center">Loading Artists...</div>
    );
  if (error)
    return <div className="text-white pt-40 text-center">Error: {error}</div>;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Cinematic Background Gradient */}
      <div className="bg-gradient-to-b from-blue-300 to-white absolute w-full h-screen -z-50"></div>

      <div className="pt-40 pb-20 z-50">
        {/* 1. EXPLORE HEADER */}
        <section className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-serif italic font-light text-slate-900 leading-tight">
              Meet the Visionaries
            </h1>
            <p className="text-lg text-slate-500 mt-4 max-w-2xl font-serif italic">
              Connecting you with the world's most provocative digital and
              traditional creators.
            </p>
          </motion.div>

          {/* 2. FILTER STRIP (The "Elite" Touch) */}
          <div className="flex flex-wrap items-center justify-between gap-6 mt-12 pt-8 border-t border-slate-500">
            <div className="flex gap-3">
              {["All Artists", "Digital", "Oil", "Sculptors"].map((tab) => (
                <button
                  key={tab}
                  className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                {artists.length} Curated Talents
              </span>
            </div>
          </div>
        </section>

        {/* 3. ARTIST GRID */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.21, 0.47, 0.32, 0.98], // Custom luxury easing
                  delay: (index % 4) * 0.1,
                }}
              >
                {/* Note: Ensure your ArtistCard has been updated to be "Elite" too */}
                <ArtistCard
                  id={artist.id}
                  name={artist.name}
                  style={artist.style}
                  image={artist.image_url}
                  sold={artist.sold_count}
                  rating={artist.rating}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
