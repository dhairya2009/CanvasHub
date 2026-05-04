"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
import FeaturedArtists from "@/components/FeaturedArtists";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

function page() {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        // We select everything from artworks, AND the name from the linked artists table
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
          .order("created_at", { ascending: false });

        if (error) throw error;
        setArtworks(data || []);
      } catch (error) {
        console.error("Error loading artworks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-blue-300 to-white absolute w-full h-screen -z-50"></div>
      <section className="py-36 px-8 z-50">
        <div className="flex justify-end py-5">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p className="flex pr-5 justify-end text-sm text-gray-500">
              {artworks.length} Products Found
            </p>
          </motion.div>
        </div>
        <div className="max-w-8xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-6 gap-6 space-y-6">
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
      <FeaturedArtists />
      <Footer />
    </div>
  );
}

export default page;
