// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import ParallaxBoard from '../components/ParallaxBoard'
import Pillars from '../components/Pillars'
import CaseStudies from '../components/CaseStudies'
import Contact from '../components/Contact'

export default function Home() {
  return (
    // Wrap everything in a top‐level container with id="top"
    <div id="top">
      <Hero />         {/* section with id="top" if you also have it in Hero */}
      <Pillars />      {/* section with id="services" */}
      <ParallaxBoard />
      <CaseStudies />  {/* section with id="cases" */}
      <ParallaxBoard />
      <Contact />      {/* section with id="contact" */}
    </div>
  )
}
