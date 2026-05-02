"use client";

import React from 'react'
import Navbar from "@/components/Navbar" ;
import Hero from "@/components/Hero" ;
import FeaturedArtists from '@/components/FeaturedArtists';
import TrendingArtwork from "@/components/TrendingArtwork"
import Footer from "@/components/Footer" ;
import Faqs from "@/components/Faq" ;

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedArtists />
      <TrendingArtwork />
      <Faqs/>
      <Footer />
    </div>
  )
}

export default page
