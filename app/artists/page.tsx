"use client";

import React from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ArtistCard from "@/components/ArtistCard";

function page() {
  const artists = [
  { id: "aanya-mehta", name: "Aanya Mehta", style: "Watercolor Artist", image: "/artist1.jpg", sold: 120, rating: 4.9 },
  { id: "rohan-patel", name: "Rohan Patel", style: "Pencil Sketch", image: "/artist2.jpg", sold: 85, rating: 3.9 },
  { id: "sara-khan", name: "Sara Khan", style: "Digital Illustrator", image: "/artist3.jpg", sold: 210, rating: 4.9 },
  { id: "vihaan-sharma", name: "Vihaan Sharma", style: "Pastel Artist", image: "/artist4.jpg", sold: 95, rating: 4.3 },
  { id: "dhairya-agrawal", name: "Dhairya Agrawal", style: "Pastel Artist", image: "/artist5.jpg", sold: 176, rating: 4.5 },
  { id: "neha-kapoor", name: "Neha Kapoor", style: "Charcoal Specialist", image: "/artist6.jpg", sold: 142, rating: 4.7 },
  { id: "arjun-nair", name: "Arjun Nair", style: "Landscape Painter", image: "/artist7.jpg", sold: 310, rating: 5.0 },
  { id: "ira-verma", name: "Ira Verma", style: "Digital Art", image: "/artist8.jpg", sold: 64, rating: 4.2 },
  { id: "kabir-joshi", name: "Kabir Joshi", style: "Oil Painting", image: "/artist9.jpg", sold: 189, rating: 4.8 },
  { id: "mira-shah", name: "Mira Shah", style: "Mixed Media", image: "/artist10.jpg", sold: 112, rating: 4.6 },
  { id: "dev-malhotra", name: "Dev Malhotra", style: "Minimalist", image: "/artist11.jpg", sold: 98, rating: 4.4 },
  { id: "aditi-rao", name: "Aditi Rao", style: "Acrylic Artist", image: "/artist12.jpg", sold: 225, rating: 4.9 },
  { id: "karan-singh", name: "Karan Singh", style: "Pop Art", image: "/artist13.jpg", sold: 156, rating: 4.5 },
  { id: "pooja-hegde", name: "Pooja Hegde", style: "Fine Art", image: "/artist14.jpg", sold: 88, rating: 4.1 },
  { id: "siddharth-m", name: "Siddharth Malani", style: "Sculptor", image: "/artist15.jpg", sold: 45, rating: 4.0 },
  { id: "tara-sutaria", name: "Tara Sutaria", style: "Portrait Artist", image: "/artist16.jpg", sold: 134, rating: 4.7 },
  { id: "ishaan-k", name: "Ishaan Khatter", style: "Street Art", image: "/artist17.jpg", sold: 270, rating: 4.9 },
  { id: "vidya-balan", name: "Vidya Balan", style: "Calligraphy", image: "/artist18.jpg", sold: 190, rating: 4.8 },
  { id: "vicky-k", name: "Vicky Kaushal", style: "Abstract Painter", image: "/artist19.jpg", sold: 215, rating: 4.6 },
  { id: "kiara-a", name: "Kiara Advani", style: "Modern Art", image: "/artist20.jpg", sold: 167, rating: 4.5 }
];
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
                  image={artist.image}
                  sold={artist.sold}
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

export default page;
