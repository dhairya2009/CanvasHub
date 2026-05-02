import React from 'react'
import Navbar from "@/components/Navbar" ;
import Hero from "@/components/Hero" ;
import FeaturedArtists from '@/components/FeaturedArtists';
import TrendingArtwork from "@/components/TrendingArtwork"
import Footer from "@/components/Footer" ;

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedArtists />
      <TrendingArtwork />
      <Footer />
    </div>
  )
}

export default page
