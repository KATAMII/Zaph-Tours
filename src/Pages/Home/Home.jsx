import React from 'react'
import Hero from './Hero'
import About from './About'
import Featured from './Featured'
import Testimonials from './Testimonials'
import NewsLetter from './NewsLetter'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Featured/>
      <Testimonials/>
      <NewsLetter/>
    </div>
  )
}

export default Home
