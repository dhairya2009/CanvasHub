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

  if (loading)
    return <div className="pt-40 text-center">Loading Artist...</div>;
  if (!artist)
    return <div className="pt-40 text-center">Artist not found.</div>;

  return (
    <div className="">
      <Header />
      <div className="bg-gradient-to-b from-blue-300 to-white absolute w-full h-screen -z-50"></div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="pt-40 px-5  flex justify-center">
          <div className="w-fit flex flex-col md:flex-row gap-12 items-center  backdrop-blur-2xl bg-white/50 border border-white/30  px-18   py-10 rounded-4xl">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-black">
              <Image
                src={artist.image_url}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold">{artist.name}</h1>
              <p className="text-blue-500 text-xl mt-2">
                {artist.style} Specialist
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <p className="text-gray-400 text-sm">Rating ⭐</p>
                  <p className="text-2xl font-bold">{artist.rating}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Artworks Sold</p>
                  <p className="text-2xl font-bold">{artist.sold_count}+</p>
                </div>
              </div>
              <p className="mt-8 text-gray-600 max-w-xl leading-relaxed">
                {artist.bio ||
                  "This artist is a featured member of our creative community, specializing in unique digital and physical art pieces."}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <section className="py-24 px-8">
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

              <h2 className="text-4xl font-bold mt-2">My Artworks</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artistArtworks.map((art) => (
              <ArtworkCard
                key={art.id} // 1. ADD THIS KEY PROP
                id={art.id}
                title={art.title}
                price={art.price}
                rating={art.rating}
                style={art.style}
                image={art.image_url}
                artist={artist.name}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
