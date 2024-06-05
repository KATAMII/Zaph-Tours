import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import '../Home/About.css'
import aboutimg from '../../assets/Abtimg.jpg'

function About() {
  return (
    <div className='aboutsection'>
       <div className="abtText">
            <h1 className="abttitle">About Us</h1>
            <p className="location"><FaLocationDot />  Nairobi,AfyaCenter</p>
            <p className='location1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quae voluptas corporis at magni fugit ea quia veritatis delectus recusandae!</p>
            <div className="btn2"> <button type='button'className='btn1'id='btnabt'>View More</button></div>
           
       </div>
       <div className="abtimg">
        <img src={aboutimg} alt="adventure frame image" />
       </div>
    </div>
  )
}

export default About
