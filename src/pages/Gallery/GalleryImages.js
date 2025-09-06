import React, { useState } from 'react';
import './GalleryImages.css';

const GalleryImages = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'gallery/img1.png',
    'gallery/img2.jpeg',
    'gallery/img3.jpeg',
    'gallery/img4.jpg',
    'gallery/img5.jpg',
    'gallery/img6.jpg',
    'gallery/img7.jpg',
    'gallery/img8.webp',
  ];

  return (
    <div className="gallery-wrapper">
      {/* Heading */}
      <h2 className="gallery-heading">My Gallery</h2>

      {/* Gallery Grid */}
      <div className="gallery-images">
        {images.map((src, index) => (
          <div
            key={index}
            className={`gallery-item effect-${(index % 4) + 1}`} // cycle through 4 effects
            onClick={() => setSelectedImage(`${process.env.PUBLIC_URL}/${src}`)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/${src}`}
              alt={`Gallery ${index + 1}`}
            />
            {/* ✨ Shine effect overlay */}
            <span className="shine"></span>
          </div>
        ))}
      </div>

      {/* Modal View */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImages;
