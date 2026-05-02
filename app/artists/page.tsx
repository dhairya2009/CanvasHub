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
    <div>
      <Header />
      <div className="bg-gradient-to-b from-blue-300 to-white absolute w-full h-screen -z-50"></div>
      <div className="pt-30 pb-10 z-50">
        <div className="flex justify-end py-5 max-w-[90%] md:max-w-[85%] lg:max-w-[75%] mx-auto">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="flex pr-5 font-medium text-3xl justify-end">
              {artists.length} Artists
            </div>
          </motion.div>
        </div>
        <div className="max-w-[90%] md:max-w-[85%] lg:max-w-[75%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: (index % 4) * 0.1,
                }}
              >
                <ArtistCard
                  id={artist.id}
                  name={artist.name}
                  style={artist.style}
                  image={artist.image_url} // Is this what your Card uses?
                  sold={artist.sold_count} // Is this what your Card uses?
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
