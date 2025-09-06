import React from 'react';
import './GalleryBanner.css';

const GalleryBanner = ({ title = 'Gallery', image = 'gallery/gallery-image.jpg' }) => {
  return (
    <div
      className="gallery-banner"
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

export default GalleryBanner;
