"use client";

import ArtworkCard from "@/components/ArtworkCard";
import { motion } from 'framer-motion';

export default function TrendingArtworks() {
  const artworks = [
    {
      id: 1,
      image: "/art1.jpg",
      title: "Ocean Flow",
      artist: "Aanya Mehta",
      style: "Watercolor",
      price: "₹2,499",
      rating: 4.8,
    },
    {
      id: 2,
      image: "/art2.jpg",
      title: "Quiet Eyes",
      artist: "Rohan Patel",
      style: "Pencil Sketch",
      price: "₹1,899",
      rating: 4.7,
    },
    {
      id: 3,
      image: "/art3.jpg",
      title: "Color Storm",
      artist: "Sara Khan",
      style: "Abstract",
      price: "₹3,200",
      rating: 4.9,
    },
    {
      id: 4,
      image: "/art4.jpg",
      title: "Golden Mood",
      artist: "Vihaan Sharma",
      style: "Pastel",
      price: "₹2,100",
      rating: 4.6,
    },
    {
      id: 5,
      image: "/art5.jpg",
      title: "Sketch Soul",
      artist: "Neha Kapoor",
      style: "Charcoal",
      price: "₹1,500",
      rating: 4.5,
    },
    {
      id: 6,
      image: "/art6.jpg",
      title: "Night Bloom",
      artist: "Kabir Joshi",
      style: "Oil Painting",
      price: "₹2,950",
      rating: 4.9,
    },
    {
      id: 7,
      image: "/art7.jpg",
      title: "Silent Rain",
      artist: "Ira Verma",
      style: "Digital Art",
      price: "₹1,799",
      rating: 4.7,
    },
    {
      id: 8,
      image: "/art8.jpg",
      title: "Wild Horizon",
      artist: "Arjun Nair",
      style: "Landscape",
      price: "₹3,499",
      rating: 5.0,
    },
    {
      id: 9,
      image: "/art9.jpg",
      title: "Dream Layers",
      artist: "Mira Shah",
      style: "Mixed Media",
      price: "₹2,799",
      rating: 4.8,
    },
    {
      id: 10,
      image: "/art10.jpg",
      title: "Soft Memory",
      artist: "Dev Malhotra",
      style: "Minimalist",
      price: "₹1,650",
      rating: 4.4,
    },
  ];

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start low and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to position when scrolled into view
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <div className="mb-10">
            <p className="text-blue-400 text-sm font-medium">
              Curated Collection
            </p>

            <h2 className="text-4xl font-bold mt-2">Trending Artworks</h2>
          </div>
        </motion.div>
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {artworks.map((art) => (
            <ArtworkCard key={art.id} {...art} />
          ))}
        </div>
      </div>
    </section>
  );
}
