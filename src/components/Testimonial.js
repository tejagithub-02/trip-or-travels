import React, { useState } from 'react';
import './Testimonial.css';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Rohit Sharma',
      role: 'Backpacker, India',
     
      rating: 4.8,
      maxRating: 5,
      text: `Exploring the mountains of Himachal with this agency was an unforgettable experience. The stay was cozy, the food delicious, and the guides were extremely helpful.`,
      reviewDate: '04/2024',
      totalReviews: 1520,
    },
    {
      name: 'Aarav Patel',
      role: 'Travel Blogger, Mumbai',
     
      rating: 4.9,
      maxRating: 5,
      text: `From houseboats in Kashmir to the backwaters of Kerala, every moment was curated with perfection. Smooth bookings and excellent support throughout!`,
      reviewDate: '12/2023',
      totalReviews: 2100,
    },
    {
      name: 'Meera Iyer',
      role: 'Adventure Seeker, Bangalore',
     
      rating: 4.7,
      maxRating: 5,
      text: `I booked a solo trip to Meghalaya and everything was just perfect — transport, safety, and accommodations. Highly recommended for women solo travelers.`,
      reviewDate: '08/2023',
      totalReviews: 1780,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: Math.floor(rating) }, (_, i) => (
      <FaStar key={i} className="star-icon" />
    ));
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-left">
         
          <div className="testimonial-nav-mobile">
            <button onClick={prevTestimonial} className="nav-arrow">
              <FaChevronLeft />
            </button>
            <button onClick={nextTestimonial} className="nav-arrow">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="testimonial-right">
          <p className="testimonial-subtitle">Testimonials</p>
          <h2 className="testimonial-title">What Our Travelers Say</h2>

          <div className="testimonial-box">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{testimonial.text}</p>

            <div className="testimonial-footer">
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>

              <div className="testimonial-meta">
                <div className="stars">
                  {renderStars(testimonial.rating)}
                  <span className="rating-text">
                    {testimonial.rating.toFixed(1)} / {testimonial.maxRating}
                  </span>
                </div>
                <p className="review-count">
                  Reviewed on {testimonial.reviewDate} • {testimonial.totalReviews.toLocaleString()} reviews
                </p>
              </div>
            </div>
          </div>

         

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
