"use client";

import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

export default function FeaturedArtists() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // api calling
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
          .gte("rating", 4.5)
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

  // caling end

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start low and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to position when scrolled into view
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="text-blue-400 font-medium text-sm">
                Creative Community
              </p>

              <h2 className="text-4xl font-bold mt-2">Featured Artists</h2>
            </div>

            <button className="px-5 py-2 rounded-full border hover:bg-black hover:text-white transition duration-400">
              <Link href="/artists">View All</Link>
            </button>
          </div>
        </motion.div>
        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto mb-4 py-3 scrollbar-none [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {artists.map((artist, index) => (
            <motion.div
              initial={{ opacity: 0, x: -40 }} // Start low and invisible
              whileInView={{ opacity: 1, x: 0 }} // Animate to position when scrolled into view
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeIn" }}
              key={artist.id}
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

        <div className="flex gap-3 justify-end pr-5 mt-8">
          <button
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full border hover:bg-black hover:text-white transition duration-400"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="w-11 h-11 rounded-full border hover:bg-black hover:text-white transition duration-400"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
