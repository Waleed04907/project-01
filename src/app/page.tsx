"use client"

import HeroSection from "../components/HeroSection"
import FeaturedCourses from "../components/FeaturedCourses"
import FeaturedWebinars from "../components/FeaturedWebinars"
import Whychooseus from "../components/whyChouseus"

import React from 'react'
const page = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedCourses/>
      <FeaturedWebinars/>
      <Whychooseus/>
    </div>
  )
}

export default page
