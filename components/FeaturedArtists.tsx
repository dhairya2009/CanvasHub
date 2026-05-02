"use client";

import ArtistCard from "./ArtistCard";
import Link from "next/link";
import { useRef } from "react";

export default function FeaturedArtists() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
  const artists = [
    {
      id: "aanya-mehta",
      name: "Aanya Mehta",
      style: "Watercolor Artist",
      image: "/artist1.jpg",
      sold: 120,
      rating: 4.9,
    },
    {
      id: "rohan-patel",
      name: "Rohan Patel",
      style: "Pencil Sketch",
      image: "/artist2.jpg",
      sold: 85,
      rating: 3.9,
    },
    {
      id: "sara-khan",
      name: "Sara Khan",
      style: "Digital Illustrator",
      image: "/artist3.jpg",
      sold: 210,
      rating: 4.9,
    },
    {
      id: "vihaan-sharma",
      name: "Vihaan Sharma",
      style: "Pastel Artist",
      image: "/artist4.jpg",
      sold: 95,
      rating: 4.3,
    },
    {
      id: "dhairya-agrawal",
      name: "Dhairya Agrawal",
      style: "Pastel Artist",
      image: "/artist5.jpg",
      sold: 176,
      rating: 4.5,
    },
  ];

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-blue-600 font-medium text-sm">
              Creative Community
            </p>

            <h2 className="text-4xl font-bold mt-2">Featured Artists</h2>
          </div>

          <button className="px-5 py-2 rounded-full border hover:bg-black hover:text-white transition">
            <Link href="/artists">View All</Link>
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4  scrollbar-none [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {artists.map((artist, index) => (
            <ArtistCard
              key={artist.id}
              id={artist.id}
              name={artist.name}
              style={artist.style}
              image={artist.image}
              sold={artist.sold}
              rating={artist.rating}
            />
          ))}
        </div>

        <div className="flex gap-3 justify-end pr-5 mt-8">
          <button
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full border hover:bg-black hover:text-white transition"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="w-11 h-11 rounded-full border hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
