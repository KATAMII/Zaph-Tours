import React from 'react'
import '../Home/Hero.css'

function Hero() {
  return (
    <div className='heroSection'>
      <h2 className="herotxt1">Zaph Tours With the </h2>
       <h2 className="herotxt">Best safaris and adventures</h2>
       <div className="herobtn">
        <button type='button'className='btn1'>Explore More</button>
        <button type='button'className='btn1'>View Trips</button>
       </div>
    </div>
  )
}

export default Hero
