import React, { useEffect, useState } from 'react';
import './Banner.css';
import banner1 from '../assets/banner3.jpg';
import banner2 from '../assets/banner2.jpeg';

const fallbackImage = 'https://via.placeholder.com/1920x1080?text=Travel+Banner';

const banners = [
  {
    image: banner1 || fallbackImage,
    tagline: 'Embark on Epic Adventures',
    headline: 'Curated Trips Spark Your Sense of Wonder',
  },
  {
    image: banner2 || fallbackImage,
    tagline: 'Chase Your Wanderlust',
    headline: 'Dream Destinations Await Your Next Journey',
  },
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, tagline, headline } = banners[currentImageIndex];

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${image || fallbackImage})` }}
    >
      <div className="overlay" />
      <div
        className={`hero-text ${
          currentImageIndex === 1 ? 'align-right' : 'align-left'
        }`}
      >
        <p className="tagline">{tagline}</p>
        <h1 className="headline">{headline}</h1>
        <button className="explore-btn">Explore Now</button>
      </div>
    </section>
  );
};

export default Banner;
