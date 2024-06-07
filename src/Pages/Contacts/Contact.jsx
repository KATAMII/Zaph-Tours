import React from 'react'
import '../Contacts/Contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbHours12 } from "react-icons/tb";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className='ContactSection'>
       <h1 className="contactHeading">Contact us</h1>
       <div className="ContactTitle">
        <h2 className="titlehead">Get In Touch With Zaph Tours</h2>
        <p className='titlepara'><TiSocialFacebookCircular /> <TiSocialTwitterCircular /> <FaInstagram /></p>
       </div>
       <div className="iconees">
         <div className="part1">
          <h1 className="locate"><FaLocationDot /></h1>
          <p className="located">Our Location</p>
          <p className="here">Muranga Kiharu </p>
         </div>
         <div className="part1" id='part1color'>
          <h1 className="locate" id='locn'><FaPhoneVolume /></h1>
          <p className="located" id='loct'>Phone Number</p>
          <p className="here" id='Lo'>+254-753685008 </p>
         </div>
         <div className="part1">
          <h1 className="locate"><MdOutlineMailOutline  /></h1>
          <p className="located">Our Email</p>
          <p className="here">zaphtours@zaph.com </p>
         </div>
         <div className="part1" id='part1color'>
          <h1 className="locate" id='locn'><TbHours12 /></h1>
          <p className="located" id='loct'>Working Hours</p>
          <p className="here" id='Lo'> Mon-sat 9.00-5.00</p>
         </div>
       </div>
       <div className="mapRegister">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15958.032696318172!2d37.1372399!3d-0.7144094!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1717783382086!5m2!1sen!2ske" width="600" height="450"></iframe>
        </div>
        <div className="formsection">
          <form className='form2'>
            <input type="text" placeholder='Full Name' required/>
            <input type="text" placeholder='Email' required/>
            <input type="text" placeholder='Subject' required />
            <textarea name="Message" id="Message"></textarea>
            <button type='button'>Submit</button>
          </form>
        </div>

       </div>
    </div>
  )
}

export default Contact
