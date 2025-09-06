import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-left">
          <img src={logo} alt="Trip or Travel Holidays" className="footer-logo" />
          <h2>Ready to Explore the World with Us?</h2>
          <p>
            Discover amazing destinations and unforgettable experiences. We offer fully customizable travel packages to make your journey truly yours.
          </p>
        </div>

        {/* Middle Column */}
        <div className="footer-middle">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Tour Packages</a></li>
              <li><a href="#">Travel Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Column */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt /> <a href="tel:+916363298478">+91 6363298478</a></p>
          <h3>Email Us</h3>
          <p><FaEnvelope /> <a href="mailto:triportravelsholiday@gmail.com">triportravelsholiday@gmail.com</a></p>
          <h3>Our Office</h3>
          <p>
            4th Floor, Hosur Main Road, above Domino's Pizza, near Christ University,<br />
            Krishna Nagar, Koramangala Industrial Layout, S.G. Palya,<br />
            Bengaluru, Karnataka 560029
          </p>
        </div>

        {/* Right Column */}
        <div className="footer-right">
          <h3>Plan Your Trip</h3>
          <p>
            Whether you're dreaming of a peaceful retreat or an adventurous escape,
            our team will help you craft a travel experience you'll never forget.
            Start your journey today!
          </p>

          <div className="footer-socials">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/yourpage" className="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/yourprofile" className="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@yourchannel" className="youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://wa.me/916363298478" className="whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Trip or Travels Holidays. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
