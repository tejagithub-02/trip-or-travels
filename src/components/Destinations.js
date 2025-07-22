import React from 'react';
import './Destinations.css';
import { FiArrowRight } from 'react-icons/fi';

const destinations = [
  {
    image: process.env.PUBLIC_URL + '/destinations/d1.png',
    title: 'Thailand',
  },
  {
    image: process.env.PUBLIC_URL + '/destinations/d2.png',
    title: 'Munnar',
  },
  {
    image: process.env.PUBLIC_URL + '/destinations/d3.png',
    title: 'Andaman and Nicobar Islands',
  },
  {
    image: process.env.PUBLIC_URL + '/destinations/d4.png',
    title: 'Agra',
  },
  {
    image: process.env.PUBLIC_URL + '/destinations/d5.png',
    title: 'Maldives',
  },
];

const Destinations = () => {
  return (
    <section className="top-destinations-section">
      <p className="top-destinations-subtitle">Our Destination</p>
      <div className="top-destinations-header">
        <h2 className="top-destinations-title">
       "Explore the World with Comfort – Book Your Perfect Stay Today!"
        </h2>
        <button className="top-destinations-learn-more">
          Learn More <FiArrowRight />
        </button>
      </div>
      <div className="top-destinations-slider">
        {destinations.map((dest, index) => (
          <div key={index} className="top-destination-card">
            <div className="top-destination-image-wrapper">
              <img src={dest.image} alt={dest.title} />
              <div className="top-destination-overlay">
                <div className="top-destination-text">
                  <h3>{dest.title}</h3>
                  
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
