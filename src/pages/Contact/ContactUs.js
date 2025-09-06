import React, { useState } from 'react';
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const whatsappNumber = "916363298478"; // WhatsApp number (with country code, no + sign)
    const message = `Hello, I am ${formData.name}.
  Email: ${formData.email}
  Phone: ${formData.phone}
  Message: ${formData.message}`;
  
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappURL, "_blank"); // opens WhatsApp chat in new tab/window
  
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  return (
    <section className="contact-us-section">
      <div className="contact-container">
        {/* Left side: Info cards */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="info-card">
            <h4>Email</h4>
            <p>For inquiries, please email us at:</p>
            <strong>info@bloomitsolutions.com</strong>
          </div>
          <div className="info-card">
  <h4>Phone</h4>
  <p>Reach us by phone at:</p>
  <strong>
    <a href="tel:+916363298478" style={{ textDecoration: 'none', color: '#007bff' }}>
      +91 6363298478
    </a>
  </strong>
</div>

          <div className="info-card">
            <h4>Address</h4>
            <p>Visit us at:</p>
            <strong>
              4th Floor, Hosur Main Road, above Dominos Pizza, near Christ University, 
              Krishna Nagar, Koramangala Industrial Layout, S.G. Palya, Bengaluru, Karnataka 560029
            </strong>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
