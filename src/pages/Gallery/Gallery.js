import React from 'react';
import GalleryBanner from './GalleryBanner';
import GalleryImages from './GalleryImages';
import GalleryVideos from './GalleryVideos';

function Gallery() {
  return (
    <>
      <GalleryBanner />
      <GalleryImages />
      <GalleryVideos />
    </>
  );
}

export default Gallery;
