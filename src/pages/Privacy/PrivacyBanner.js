import React from 'react';
import './PrivacyBanner.css';

const PrivacyBanner = ({ title = 'Privacy Policy', image = 'gallery/gallery-image.jpg' }) => {
  return (
    <div
      className="privacy-banner"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${image})` }}
    >
      <div className="privacy-content">
        <h1>{title}</h1>
        <p>
          <a href="/">Home</a> <span>&rarr;</span> {title}
        </p>
      </div>
    </div>
  );
};

export default PrivacyBanner;
