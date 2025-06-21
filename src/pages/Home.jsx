// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import Pillars from '../components/Pillars'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    // Wrap everything in a top‐level container with id="top"
    <div id="top">
      <Hero />         {/* section with id="top" if you also have it in Hero */}
      <Pillars />      {/* section with id="services" */}
      <CaseStudies />  {/* section with id="cases" */}
      <Testimonials /> {/* section with id="testimonials" */}
      <Contact />      {/* section with id="contact" */}
    </div>
  )
}
