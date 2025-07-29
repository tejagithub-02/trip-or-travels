import React from 'react';
import './FeaturedTour.css';
import { motion } from 'framer-motion';

const tours = [
  { id: 1, title: 'Bathing and Kayaking at Nonrival Beach', location: 'Thailand', image: require('../assets/tour1.png') },
  { id: 2, title: '5 Best Tips For An Amazing Molina Trip', location: 'Austria', image: require('../assets/tour2.png') },
  { id: 3, title: 'Discover Beautiful Moliva: Nature\'s Paradise', location: 'Slingerland', image: require('../assets/tour3.png') },
  { id: 4, title: 'Best Time Ever To Explore Molinas Nature', location: 'Nederland', image: require('../assets/tour4.png') },
];

const FeaturedTour = () => {
  return (
    <section className="featured-wrapper">
      <motion.div className="featured-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h5>Featured Tour</h5>
        <h1>Unforgettable Travel Discoveries</h1>
        <p>
          There are many variations of passages of available, but the majority have suffered alteration in some form,
          by injected humour words which do not look even slightly believable.
        </p>
      </motion.div>

      <div className="featured-cards">
        {tours.map((tour, i) => (
          <motion.div
            className="tour-card"
            key={tour.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={tour.image} alt={tour.title} />
            <div className="tour-label">{tour.location}</div>
            <h3>{tour.title}</h3>
          
          </motion.div>
        ))}
      </div>

      <motion.div
        className="animated-plane"
        animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        ✈️
      </motion.div>
    </section>
  );
};

export default FeaturedTour;
