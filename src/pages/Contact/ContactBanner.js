import React from 'react';
import './ContactBanner.css';

const ContactBanner = ({ title = 'Contact', image = 'gallery/gallery-image.jpg' }) => {
  return (
    <div
      className="contact-banner"
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

export default ContactBanner;
