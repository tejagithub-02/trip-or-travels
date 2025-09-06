
// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';
import './Navbar.css'; // Create this CSS file for styles
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

  return (
    <header className="header">
    <div className="header-container">
      <div className="logo-section">
        <img src={logo} alt="Trip or Travel" className="logo" />
      </div>
  
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
  <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
  <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
  <Link to="#packages" onClick={() => setIsOpen(false)}>PACKAGES +</Link>
  <Link to="/gallery" onClick={() => setIsOpen(false)}>GALLERY</Link>
  <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
  <Link to="#login" onClick={() => setIsOpen(false)}>LOGIN</Link>
</nav>

  
      <div className="inquiry">
        <FiPhoneCall className="phone-icon" />
        <div className="inquiry-text">
          <span>To More Inquiry</span>
          <strong>+91 6363298478</strong>
        </div>
      </div>
  
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </div>
  </header>
  
  );
};

export default Navbar;
