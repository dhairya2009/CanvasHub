"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrendingArtworks from "@/components/TrendingArtwork";

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

  if (!artwork)
    return <div className="pt-40 text-center text-black">Loading...</div>;

  return (
    <div className="">
      <Navbar />
      <div className="bg-gradient-to-b from-blue-300 to-white absolute w-full h-screen -z-50"></div>
      <div className="min-h-screen pt-32 px-5 text-black z-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={artwork.image_url}
              alt={artwork.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold">{artwork.title}</h1>
            <p className="text-xl text-gray-500 mt-2">
              by {artwork.artists?.name}
            </p>
            <p className="text-3xl font-bold mt-6">{artwork.price}</p>

            <button className="mt-8 bg-black text-white py-4 rounded-full font-bold hover:scale-105 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <TrendingArtworks />
      <Footer />
    </div>
  );
}
