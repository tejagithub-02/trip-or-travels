import React, { useState, useEffect } from 'react';
import './Banner.css';
import logo from '../assets/logo.png';
import banner1 from '../assets/banner3.jpg';
import banner2 from '../assets/banner2.jpeg';

import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';

const banners = [

  {
    image: banner2,
    tagline: 'Adventure Awaits You',
    headline: 'Unforgettable Journeys Crafted \n For Your Wanderlust',
  },
  {
    image: banner1, // Reusing banner1 for consistency; can be updated if a new image is provided
    tagline: 'Ignite Your Travel Dreams',
    headline: 'Epic Escapes Designed \n To Inspire Your Soul',
  },
];

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { image, tagline, headline } = banners[currentImageIndex];

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Trip or Travel" className="logo" />
        </div>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="/">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#packages">PACKAGES +</a>
          <a href="#contact">CONTACT US</a>
          <a href="#login">LOGIN</a>
        </nav>

        <div className="inquiry">
          <FiPhoneCall className="phone-icon" />
          <div className="inquiry-text">
            <span>To More Inquiry</span>
            <strong>+91 7795183828</strong>
          </div>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </header>

      <div
        className={`hero-text animate-slide-up ${
          currentImageIndex === 1 ? 'right-align' : 'left-align'
        }`}
      >
        <p className="tagline animate-fade-in">{tagline}</p>
        <h1>{headline}</h1>
      </div>
    </section>
  );
};

export default Banner;