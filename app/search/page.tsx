"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

type Artist = {
  id: string | number;
  name?: string;
  style?: string;
  image_url?: string;
};

type Artwork = {
  id: string | number;
  title?: string;
  price?: string | number;
  image_url?: string;
  artists?: {
    name?: string;
  };
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  const safeText = (value: unknown) => String(value ?? "").toLowerCase();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const [artistRes, artworkRes] = await Promise.all([
        supabase.from("artists").select("*").order("name", { ascending: true }),

        supabase
          .from("artworks")
          .select(
            `
            *,
            artists (
              name
            )
          `,
          )
          .order("created_at", { ascending: false }),
      ]);

      if (!artistRes.error) setArtists(artistRes.data || []);
      if (!artworkRes.error) setArtworks(artworkRes.data || []);

      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredArtists = useMemo(() => {
    return artists.filter((artist) => {
      const search = safeText(query);

      return (
        safeText(artist.name).includes(search) ||
        safeText(artist.style).includes(search)
      );
    });
  }, [artists, query]);

  const filteredArtworks = useMemo(() => {
    return artworks.filter((art) => {
      const search = safeText(query);

      return (
        safeText(art.title).includes(search) ||
        safeText(art.artists?.name).includes(search)
      );
    });
  }, [artworks, query]);

  return (
    <div className="min-h-screen ">
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-blue-600 font-medium text-sm uppercase tracking-[3px]">
            Discover Creativity
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 text-black leading-tight">
            Search Artists & Artworks
          </h1>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-7">
            Find creators, trending artworks, custom commissions and original
            styles from talented artists.
          </p>

          {/* Search Input */}
          <div className="mt-10 max-w-3xl mx-auto">
            <input
              autoFocus
              type="text"
              placeholder="Search artist, artwork, style..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-7 py-5 rounded-full bg-white border border-white/40 shadow-xl outline-none text-lg focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </motion.div>
      </section>

      {/* LOADING */}
      {loading ? (
        <div className="text-center pb-32 text-lg font-medium text-gray-600">
          Loading...
        </div>
      ) : (
        <>
          {/* ARTISTS */}
          <section className="px-6 pb-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Artists</h2>

                <p className="text-sm text-gray-500">
                  {filteredArtists.length} Found
                </p>
              </div>

              <div className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {filteredArtists.map((artist, index) => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/artist/${artist.id}`}>
                      <div className="min-w-[230px] bg-white rounded-3xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
                        <Image
                          src={artist.image_url || "/artist1.jpg"}
                          alt={artist.name || "Artist"}
                          width={300}
                          height={300}
                          className="w-full h-44 object-cover rounded-2xl"
                        />

                        <h3 className="font-semibold text-lg mt-4">
                          {artist.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {artist.style || "Creative Artist"}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ARTWORKS */}
          <section className="px-6 pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Artworks</h2>

                <p className="text-sm text-gray-500">
                  {filteredArtworks.length} Found
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredArtworks.map((art, index) => (
                  <motion.div
                    key={art.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link href={`/artwork/${art.id}`}>
                      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">
                        <Image
                          src={art.image_url || "/art1.jpg"}
                          alt={art.title || "Artwork"}
                          width={400}
                          height={500}
                          className="w-full h-60 object-cover"
                        />

                        <div className="p-4">
                          <h3 className="font-semibold line-clamp-1">
                            {art.title}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                            {art.artists?.name || "Unknown Artist"}
                          </p>

                          <div className="flex justify-between items-center mt-4">
                            <p className="font-bold">{art.price || "0"}</p>

                            <span className="px-4 py-2 rounded-full bg-black text-white text-sm">
                              View
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
