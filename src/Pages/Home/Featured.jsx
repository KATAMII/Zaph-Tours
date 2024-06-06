import React from 'react';
import '../Home/Featured.css';
import mtkenya from '../../assets/mount Kenya.jpeg';
import { FaHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import mtruwenzori from '../../assets/ruwenzori.jpeg'
import lakeNakuru from '../../assets/nakuru.jpeg';
import nairobipark from '../../assets/nairobi.jpeg';
import tsavo from '../../assets/tsavoImg.jpeg';
import coast from '../../assets/Lamu.jpeg';



function Featured() {
  return (
    <div className='featuresSection'>
      <h1 className="feature">Featured Destination</h1>
      <div className="destinations">
        <div className="featurecontent">
          <img src={mtkenya} alt="Mount Kenya" />
          <div className="loveicon">
            <FaHeart />
          </div>
          <div className="title">
            <h5 className='featureTitle'>Mount Kenya</h5>
            <p className="locator">
              <IoLocationOutline /> Central Kenya
              <p className="cost">$2000</p>
            </p>
          
          </div>
        </div>
        <div className="featurecontent">
          <img src={mtruwenzori} alt="Mount ruwenzori" />
          <div className="loveicon">
            <FaHeart />
          </div>
          <div className="title">
            <h5 className='featureTitle'>Mt.Ruwenzori</h5>
            <p className="locator">
              <IoLocationOutline /> Western Uganda
              <p className="cost">$2000</p>
            </p>
            
          </div>
        </div>
        <div className="featurecontent">
          <img src={lakeNakuru} alt="lake Nakuru" />
          <div className="loveicon">
            <FaHeart />
          </div>
          <div className="title">
            <h5 className='featureTitle'>Lake Nakuru</h5>
            <p className="locator">
              <IoLocationOutline /> Nakuru
              <p className="cost">$2000</p>
            </p>
            
          </div>
        </div>
        <div className="featurecontent">
          <img src={nairobipark} alt="Nairobi National park" />
          <div className="loveicon">
            <FaHeart />
          </div>
          <div className="title">
            <h5 className='featureTitle'>Nairobi National Park</h5>
            <p className="locator">
              <IoLocationOutline />Nairobi Kenya
              <p className="cost">$2000</p>
            </p>
            
          </div>
        </div>
        <div className="featurecontent">
          <img src={coast} alt="coast" />
          <div className="loveicon">
            <FaHeart />
          </div>
          <div className="title">
            <h5 className='featureTitle'>Coastal Kenya</h5>
            <p className="locator">
              <IoLocationOutline /> Mombasa Kenya
              <p className="cost">$2000</p>
            </p>
            
          </div>
        </div>
        <div className="featurecontent">
          <img src={tsavo} alt="Tsavo National Park" />
          <div className="loveicon">
            <FaHeart />
          </div>
          <div className="title">
            <h5 className='featureTitle'>Tsavo National Park</h5>
            <p className="locator">
              <IoLocationOutline /> Taita-Taveta
              <p className="cost">$2000</p>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
