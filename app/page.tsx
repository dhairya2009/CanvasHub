import React from 'react'
import Navbar from "@/components/Navbar" ;
import Hero from "@/components/Hero" ;
import Footer from "@/components/Footer" ;
import FeaturedArtists from '@/components/FeaturedArtists';


function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedArtists />
      <Footer />
    </div>
  )
}

export default page
