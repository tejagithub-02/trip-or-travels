import React from 'react';
import './AboutBanner.css';

const AboutBanner = ({ title = 'About', image = 'about/about-image.jpg' }) => {
  return (
    <div
      className="about-banner"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${image})` }}
    >
      <div className="banner-content">
        <h1>{title}</h1>
        <p>
          <a href="/">Home</a> <span>&rarr;</span> {title}
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
