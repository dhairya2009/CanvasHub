"use client";

import React, { useEffect, useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function TrendingArtworks() {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("artworks")
          .select(
            `
        *,
        artists (
          name
        )
      `,
          )
          // Add this line to filter for ratings strictly greater than 4.6
          .gt("rating", 4.8)
          // Or use .gte("rating", 4.6) for 4.6 and above
          .order("rating", { ascending: false }); // Optional: shows highest rated first

        if (error) throw error;
        setArtworks(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start low and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to position when scrolled into view
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="flex justify-between items-center"
        >
          <div className="mb-10">
            <p className="text-blue-400 text-sm font-medium">
              Curated Collection
            </p>

            <h2 className="text-4xl font-bold mt-2">Trending Artworks</h2>
          </div>
          <button className="px-5 py-2 rounded-full border hover:bg-black hover:text-white transition duration-400">
            <Link href="/explore">View All</Link>
          </button>
        </motion.div>
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {artworks.map((art, index) => (
            <ArtworkCard
              id={art.id}
              title={art.title}
              price={art.price}
              rating={art.rating}
              style={art.style}
              // This is the important part:
              image={art.image_url}
              artist={art.artists?.name || "Unknown Artist"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
