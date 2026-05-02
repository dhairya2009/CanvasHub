"use client";

import React from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
import FeaturedArtists from "@/components/FeaturedArtists";
import { motion } from "framer-motion";

function page() {
  const artworks = [
    // ... (Your original 10 items)
    {
      id: 1,
      image: "/art1.jpg",
      title: "Ganesh Ji",
      artist: "Aanya Mehta",
      style: "Pencil Portrait",
      price: "₹4,499",
      rating: 4.8,
    },
    {
      id: 2,
      image: "/art2.jpg",
      title: "Krishna Ji",
      artist: "Rohan Patel",
      style: "Pencil Portrait",
      price: "₹6,899",
      rating: 4.7,
    },
    {
      id: 3,
      image: "/art3.jpg",
      title: "Deer Portrait",
      artist: "Sara Khan",
      style: "Pencil Portrait",
      price: "₹5,200",
      rating: 4.9,
    },
    {
      id: 4,
      image: "/art4.jpg",
      title: "Horse Art",
      artist: "Vihaan Sharma",
      style: "Golden Mood",
      price: "₹3,100",
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

    // New Items (11-50)
    {
      id: 11,
      image: "/art11.jpg",
      title: "Sunlit Ghats",
      artist: "Aditi Rao",
      style: "Watercolor",
      price: "₹2,600",
      rating: 4.7,
    },
    {
      id: 12,
      image: "/art12.jpg",
      title: "Urban Pulse",
      artist: "Karan Singh",
      style: "Abstract",
      price: "₹4,100",
      rating: 4.9,
    },
    {
      id: 13,
      image: "/art13.jpg",
      title: "Vintage Soul",
      artist: "Pooja Hegde",
      style: "Oil Painting",
      price: "₹3,850",
      rating: 4.6,
    },
    {
      id: 14,
      image: "/art14.jpg",
      title: "Desert Echo",
      artist: "Siddharth Malani",
      style: "Landscape",
      price: "₹2,200",
      rating: 4.3,
    },
    {
      id: 15,
      image: "/art15.jpg",
      title: "Neon Nights",
      artist: "Riya Sen",
      style: "Digital Art",
      price: "₹1,450",
      rating: 4.8,
    },
    {
      id: 16,
      image: "/art16.jpg",
      title: "Morning Mist",
      artist: "Amitabh Das",
      style: "Watercolor",
      price: "₹2,150",
      rating: 4.5,
    },
    {
      id: 17,
      image: "/art17.jpg",
      title: "Concrete Jungle",
      artist: "Zoya Akhtar",
      style: "Charcoal",
      price: "₹1,950",
      rating: 4.2,
    },
    {
      id: 18,
      image: "/art18.jpg",
      title: "Petal Dance",
      artist: "Ananya Panday",
      style: "Pastel",
      price: "₹1,800",
      rating: 4.7,
    },
    {
      id: 19,
      image: "/art19.jpg",
      title: "Eternal Knot",
      artist: "Ishaan Khatter",
      style: "Minimalist",
      price: "₹2,300",
      rating: 4.9,
    },
    {
      id: 20,
      image: "/art20.jpg",
      title: "Royal Tides",
      artist: "Saif Ali",
      style: "Mixed Media",
      price: "₹5,200",
      rating: 5.0,
    },
    {
      id: 21,
      image: "/art21.jpg",
      title: "Rustic Window",
      artist: "Tara Sutaria",
      style: "Pencil Sketch",
      price: "₹1,200",
      rating: 4.1,
    },
    {
      id: 22,
      image: "/art22.jpg",
      title: "Cosmic Swirl",
      artist: "Varun Dhawan",
      style: "Abstract",
      price: "₹3,600",
      rating: 4.8,
    },
    {
      id: 23,
      image: "/art23.jpg",
      title: "The Old Banyan",
      artist: "Vidya Balan",
      style: "Oil Painting",
      price: "₹4,500",
      rating: 4.9,
    },
    {
      id: 24,
      image: "/art24.jpg",
      title: "Cyber Punk",
      artist: "Ayushmann Khurrana",
      style: "Digital Art",
      price: "₹2,050",
      rating: 4.6,
    },
    {
      id: 25,
      image: "/art25.jpg",
      title: "First Snow",
      artist: "Kiara Advani",
      style: "Watercolor",
      price: "₹2,800",
      rating: 4.7,
    },
    {
      id: 26,
      image: "/art26.jpg",
      title: "Shadow Play",
      artist: "Rajkummar Rao",
      style: "Charcoal",
      price: "₹1,650",
      rating: 4.4,
    },
    {
      id: 27,
      image: "/art27.jpg",
      title: "Tangerine Sky",
      artist: "Alia Bhatt",
      style: "Pastel",
      price: "₹1,999",
      rating: 4.8,
    },
    {
      id: 28,
      image: "/art28.jpg",
      title: "Broken Lines",
      artist: "Ranbir Kapoor",
      style: "Minimalist",
      price: "₹2,750",
      rating: 4.5,
    },
    {
      id: 29,
      image: "/art29.jpg",
      title: "Monsoon Melodies",
      artist: "Shraddha Kapoor",
      style: "Landscape",
      price: "₹3,100",
      rating: 4.9,
    },
    {
      id: 30,
      image: "/art30.jpg",
      title: "Hidden Truths",
      artist: "Vicky Kaushal",
      style: "Mixed Media",
      price: "₹4,200",
      rating: 4.7,
    },
    {
      id: 31,
      image: "/art31.jpg",
      title: "Blue Mosque",
      artist: "Farhan Akhtar",
      style: "Oil Painting",
      price: "₹3,400",
      rating: 4.6,
    },
    {
      id: 32,
      image: "/art32.jpg",
      title: "Gaze",
      artist: "Deepika Padukone",
      style: "Pencil Sketch",
      price: "₹2,100",
      rating: 4.8,
    },
    {
      id: 33,
      image: "/art33.jpg",
      title: "Fluidity",
      artist: "Ranveer Singh",
      style: "Abstract",
      price: "₹3,900",
      rating: 4.9,
    },
    {
      id: 34,
      image: "/art34.jpg",
      title: "Electric Soul",
      artist: "Priyanka Chopra",
      style: "Digital Art",
      price: "₹2,550",
      rating: 4.7,
    },
    {
      id: 35,
      image: "/art35.jpg",
      title: "Lavender Fields",
      artist: "Katrina Kaif",
      style: "Watercolor",
      price: "₹2,350",
      rating: 4.4,
    },
    {
      id: 36,
      image: "/art36.jpg",
      title: "Smoky Trails",
      artist: "Hrithik Roshan",
      style: "Charcoal",
      price: "₹1,850",
      rating: 4.3,
    },
    {
      id: 37,
      image: "/art37.jpg",
      title: "Velvet Forest",
      artist: "Kareena Kapoor",
      style: "Oil Painting",
      price: "₹4,800",
      rating: 5.0,
    },
    {
      id: 38,
      image: "/art38.jpg",
      title: "Infinity Loop",
      artist: "Shahid Kapoor",
      style: "Minimalist",
      price: "₹2,250",
      rating: 4.6,
    },
    {
      id: 39,
      image: "/art39.jpg",
      title: "Copper Sunset",
      artist: "Anushka Sharma",
      style: "Pastel",
      price: "₹2,400",
      rating: 4.7,
    },
    {
      id: 40,
      image: "/art40.jpg",
      title: "Mountain Peak",
      artist: "Sushant Singh",
      style: "Landscape",
      price: "₹3,600",
      rating: 4.9,
    },
    {
      id: 41,
      image: "/art41.jpg",
      title: "Urban Geometry",
      artist: "Kriti Sanon",
      style: "Digital Art",
      price: "₹1,900",
      rating: 4.5,
    },
    {
      id: 42,
      image: "/art42.jpg",
      title: "Woven Dreams",
      artist: "Jacqueline Fernandez",
      style: "Mixed Media",
      price: "₹3,300",
      rating: 4.6,
    },
    {
      id: 43,
      image: "/art43.jpg",
      title: "The Muse",
      artist: "Kartik Aaryan",
      style: "Pencil Sketch",
      price: "₹1,750",
      rating: 4.4,
    },
    {
      id: 44,
      image: "/art44.jpg",
      title: "Crimson Tide",
      artist: "Janhvi Kapoor",
      style: "Abstract",
      price: "₹2,999",
      rating: 4.7,
    },
    {
      id: 45,
      image: "/art45.jpg",
      title: "Floral Whisper",
      artist: "Sara Ali Khan",
      style: "Watercolor",
      price: "₹2,150",
      rating: 4.8,
    },
    {
      id: 46,
      image: "/art46.jpg",
      title: "Midnight City",
      artist: "Tiger Shroff",
      style: "Charcoal",
      price: "₹2,050",
      rating: 4.2,
    },
    {
      id: 47,
      image: "/art47.jpg",
      title: "Gold Dust",
      artist: "Disha Patani",
      style: "Pastel",
      price: "₹1,850",
      rating: 4.5,
    },
    {
      id: 48,
      image: "/art48.jpg",
      title: "Zen Garden",
      artist: "Pankaj Tripathi",
      style: "Minimalist",
      price: "₹3,100",
      rating: 4.9,
    },
    {
      id: 49,
      image: "/art49.jpg",
      title: "Legacy",
      artist: "Nawazuddin Siddiqui",
      style: "Oil Painting",
      price: "₹5,500",
      rating: 5.0,
    },
    {
      id: 50,
      image: "/art50.jpg",
      title: "New Dawn",
      artist: "Taapsee Pannu",
      style: "Landscape",
      price: "₹2,700",
      rating: 4.7,
    },
  ];
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-blue-300 to-white absolute w-full h-screen -z-50"></div>
      <section className="py-36 px-8 z-50">
        <div className="flex justify-end py-5">
          {/* <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="flex gap-3 items-center ml-2">
              <button className="px-4 py-2 hover:border-transparent rounded-full border text-sm hover:bg-black hover:text-white transition-all duration-400 ease-in-out">
                All
              </button>
              <button className="px-4 py-2 hover:border-transparent  rounded-full border text-sm hover:bg-black hover:text-white transition-all duration-400 ease-in-out">
                Watercolour
              </button>
              <button className="px-4 py-2 hover:border-transparent  rounded-full border text-sm hover:bg-black hover:text-white transition-all duration-400 ease-in-out">
                Pencil
              </button>
              <button className="px-4 py-2 hover:border-transparent  rounded-full border text-sm hover:bg-black hover:text-white transition-all duration-400 ease-in-out">
                Abstract
              </button>
              <button className="px-4 py-2 hover:border-transparent  rounded-full border text-sm hover:bg-black hover:text-white transition-all duration-400 ease-in-out">
                Pastel
              </button>
              <button className="px-4 py-2 hover:border-transparent  rounded-full border text-sm hover:bg-black hover:text-white transition-all duration-400 ease-in-out">
                Oil Painting
              </button>
            </div>
          </motion.div> */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="flex pr-5 font-medium text-3xl justify-end">
              {artworks.length} Products
            </div>
          </motion.div>
        </div>
        <div className="max-w-8xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-6 gap-6 space-y-6">
            {artworks.map((art) => (
              <ArtworkCard key={art.id} {...art} />
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
