import React from 'react';
import '../Home/Testimonials.css';
import { FcRating } from "react-icons/fc";
import lisaimg from '../../assets/Lisa.jpeg';

function Testimonials() {
  return (
    <div className='testimonialsSection'>
        <h1 className='testimonialsTitle'>Testimonials</h1>
        <div className="all">
        <div className="testimonials">
            <div className="testimonialHeader">
                <div className="image">
                    <img src={lisaimg} alt="Lisa Image" />
                </div>
                <div className="nameJob">
                    <h3 className="name">Lisa Deralosa</h3>
                    <h5 className="job">Tourist</h5>
                </div>
            </div>
            <div className="testimony">
                <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam accusantium distinctio deleniti eius perspiciatis voluptatibus accusamus eaque vel consequuntur error!</p>
                <p className="ratings"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
            </div>
        </div>
        <div className="testimonials">
            <div className="testimonialHeader">
                <div className="image">
                    <img src={lisaimg} alt="Lisa Image" />
                </div>
                <div className="nameJob">
                    <h3 className="name">Lisa Deralosa</h3>
                    <h5 className="job">Tourist</h5>
                </div>
            </div>
            <div className="testimony">
                <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam accusantium distinctio deleniti eius perspiciatis voluptatibus accusamus eaque vel consequuntur error!</p>
                <p className="ratings"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
            </div>
        </div>
        <div className="testimonials">
            <div className="testimonialHeader">
                <div className="image">
                    <img src={lisaimg} alt="Lisa Image" />
                </div>
                <div className="nameJob">
                    <h3 className="name">Lisa Deralosa</h3>
                    <h5 className="job">Tourist</h5>
                </div>
            </div>
            <div className="testimony">
                <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam accusantium distinctio deleniti eius perspiciatis voluptatibus accusamus eaque vel consequuntur error!</p>
                <p className="ratings"><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Testimonials;
