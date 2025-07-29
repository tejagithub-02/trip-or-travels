import React from 'react';
import './Insta.css';

const images = [
  require('../assets/tour1.png'),
  require('../assets/banner1.jpeg'),
  require('../assets/image1.png'),
  require('../assets/image5.png'),
  require('../assets/tour2.png'),
  
];

const instaLink = "https://www.instagram.com/yourpage"; // Replace with your actual link

const Insta = () => {
  return (
    <section className="instagram-section">
      <div className="pattern-overlay"></div>
      <h2 className="instagram-title">Follow Instagram</h2>
      <div className="instagram-gallery">
        {images.map((img, index) => (
          <div key={index} className="instagram-image-wrapper">
            <img src={img} alt={`Insta ${index + 1}`} className="instagram-image" />
            <a
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-overlay"
            >
              <div className="instagram-icon"></div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insta;
