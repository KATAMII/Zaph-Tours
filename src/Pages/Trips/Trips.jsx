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

import eco1 from '../../assets/eco1.jpeg';
import eco2 from '../../assets/eco2.jpeg';
import eco3 from '../../assets/eco3.jpeg';
import eco4 from '../../assets/eco4.jpeg';

import luxury1 from '../../assets/luxury1.jpeg';
import luxury2 from '../../assets/luxury2.jpeg';
import luxury3 from '../../assets/luxury3.jpeg';
import luxury4 from '../../assets/luxury4.jpeg';

import beach1 from '../../assets/beach1.jpeg';
import beach2 from '../../assets/beach2.jpeg';
import beach3 from '../../assets/beach3.jpeg';
import beach4 from '../../assets/beach4.jpeg';

import well1 from '../../assets/well1.jpeg';
import well2 from '../../assets/well2.jpeg';
import well3 from '../../assets/well3.jpeg';
import well4 from '../../assets/well4.jpeg';

import culinary1 from '../../assets/culinary1.jpeg';
import culinary2 from '../../assets/culinary2.jpeg';
import culinary3 from '../../assets/culinary3.jpeg';
import culinary4 from '../../assets/culinary4.jpeg';





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
      title: 'eco-tours',
      images: [eco1, eco2, eco3, eco4],
      description: 'Enjoy a fun-filled eco-activities with activities for all ages.',
      pricing: 'Starting from $1500 per family'
    },
    {
      title: 'Luxary Vacations',
      images: [luxury1, luxury2, luxury3, luxury4],
      description: 'Enjoy a fun-filled eco-activities with activities for all ages.',
      pricing: 'Starting from $1500 per family'
    },
    {
      title: 'Beach Holidays',
      images: [beach1, beach2, beach3, beach4],
      description: 'Enjoy a fun-filled holidays Beach holid with activities for all ages.',
      pricing: 'Starting from $2000 per family'
    },
    {
      title: 'Wellness retreats',
      images: [well1, well2, well3, well4],
      description: 'Enjoy a fun-filled welness retreats with activities for all ages.',
      pricing: 'Starting from $2000 per family'
    },
    {
      title: 'Culinary Tours',
      images: [culinary1, culinary2, culinary3, culinary4],
      description: 'Enjoy a fun-filled Culinary Tours with activities for all ages.',
      pricing: 'Starting from $2000 per family'
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
