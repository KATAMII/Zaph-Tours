import React from 'react';
import './Trips.css'; 
import honeymoon1 from '../../assets/honemoon1.jpeg';
import honeymoon2 from '../../assets/honeymoon2.jpeg';
import honeymoon3 from '../../assets/honeymoon3.jpeg';
import honeymoon4 from '../../assets/honeymoon4.jpeg';

import family1 from '../../assets/family1.jpeg';
import family2 from '../../assets/family2.jpeg';
import family3 from '../../assets/family3.jpeg';
import family4 from '../../assets/family4.jpeg';

import adventure1 from '../../assets/adventure1.jpeg';
import adventure2 from '../../assets/adventure2.jpeg';
import adventure3 from '../../assets/adventure3.jpeg';
import adventure4 from '../../assets/adventure4.jpeg';

import culture1 from '../../assets/culture1.jpeg';
import culture2 from '../../assets/culture2.jpeg';
import culture3 from '../../assets/culture3.jpeg';
import culture4 from '../../assets/culture4.jpeg';

import wildlife1 from '../../assets/wildlife1.jpeg';
import wildlife2 from '../../assets/wildlife2.jpeg';
import wildlife3 from '../../assets/wildlife3.jpeg';
import wildlife4 from '../../assets/wildlife4.jpeg';


function Trips() {
  const packages = [
    {
      title: 'Honeymoon',
      images: [honeymoon1, honeymoon2, honeymoon3, honeymoon4],
      description: 'Experience a romantic getaway with our specially curated honeymoon packages.',
      pricing: 'Starting from $2000 per couple'
    },
    {
      title: 'Family',
      images: [family1, family2, family3, family4],
      description: 'Enjoy a fun-filled family vacation with activities for all ages.',
      pricing: 'Starting from $1500 per family'
    },
    {
      title: 'Adventures',
      images: [adventure1, adventure2, adventure3, adventure4],
      description: 'Enjoy a fun-filled adventures with activities for all ages.',
      pricing: 'Starting from $1500 per family'
    },
    {
      title: 'Cultural tours',
      images: [culture1, culture2, culture3, culture4],
      description: 'Enjoy a fun-filled cultural tours with activities for all ages.',
      pricing: 'Starting from $1500 per family'
    },
    {
      title: 'Wildlife safaris',
      images: [wildlife1, wildlife2, wildlife3, wildlife4],
      description: 'Enjoy a fun-filled wildlife safaris with activities for all ages.',
      pricing: 'Starting from $1500 per family'
    },
    {
      title: 'Wildlife safaris',
      images: [wildlife1, wildlife2, wildlife3, wildlife4],
      description: 'Enjoy a fun-filled wildlife safaris with activities for all ages.',
      pricing: 'Starting from $1500 per family'
    },
   
  ];

  return (
    <div className='tripTypesSection'>
      <h1 className="mainHeading">Trip Types</h1>
      {packages.map((pkg, index) => (
        <div key={index} className="package">
          <h2 className="packageTitle">{pkg.title}</h2>
          <div className="imageGallery">
            {pkg.images.map((image, idx) => (
              <img key={idx} src={image} alt={`${pkg.title} ${idx + 1}`} className="galleryImage" />
            ))}
          </div>
          <p className="description">{pkg.description}</p>
          <p className="pricing">{pkg.pricing}</p>
        </div>
      ))}
    </div>
  );
}

export default Trips;
