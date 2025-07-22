import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './AboutUs.css';

import img1a from '../assets/image1.png';
import img1b from '../assets/image2.png';
import img2a from '../assets/image4.png';
import img2b from '../assets/image3.png';
import img3a from '../assets/image5.png';
import img3b from '../assets/image6.png';

const cards = [
  {
    title: 'Cultural Tours',
    text: 'Immerse yourself in vibrant traditions with our expert-guided cultural expeditions across India.',
    images: [img1a, img1b],
    stats: [
      { value: '50+', label: 'Heritage Sites' },
      { value: '12', label: 'Cultural Zones' },
      { value: '24/7', label: 'Local Guides' }
    ],
    accent: '#EF4444' // red
  },
  {
    title: 'Adventure Getaways',
    text: 'From Himalayan treks to coastal dives, challenge yourself with thrilling escapades.',
    images: [img2a, img2b],
    stats: [
      { value: '100+', label: 'Adventure Spots' },
      { value: '5', label: 'Difficulty Levels' },
      { value: '100%', label: 'Safety Record' }
    ],
    accent: '#3B82F6' // blue
  },
  {
    title: 'Spiritual Retreats',
    text: 'Find inner peace through ancient practices at sacred destinations across India.',
    images: [img3a, img3b],
    stats: [
      { value: '7', label: 'Sacred Rivers' },
      { value: '15+', label: 'Meditation Centers' },
      { value: '5000+', label: 'Happy Travelers' }
    ],
    accent: '#EF4444' // red
  },
];

const AboutUs = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([0, 0, 0]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes((prevIndexes) =>
        prevIndexes.map((val) => (val === 0 ? 1 : 0))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section" ref={ref}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="section-title"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          OUR TRAVEL PHILOSOPHY
        </motion.h2>
        <motion.div 
          className="title-underline"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Crafting <span className="red-text">unforgettable</span> journeys with{' '}
          <span className="blue-text">precision</span> and{' '}
          <span className="red-text">passion</span>
        </motion.p>
      </motion.div>

      <div className="cards-container">
        {cards.map((card, i) => (
          <motion.div
            className="about-card"
            key={i}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * i, duration: 0.7 }}
            whileHover={{ 
              y: -15,
              boxShadow: `0 25px 50px -12px ${card.accent}40`
            }}
            onHoverStart={() => setHoveredCard(i)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div 
              className="card-accent-bar"
              style={{ backgroundColor: card.accent }}
              animate={{
                height: hoveredCard === i ? 8 : 5,
                opacity: hoveredCard === i ? 1 : 0.8
              }}
            />
            
            <div className="image-wrapper">
              <AnimatePresence mode='wait'>
                {visibleIndexes[i] === 0 ? (
                  <motion.img
                    key={`${i}-0`}
                    src={card.images[0]}
                    alt={card.title}
                    className="card-image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      filter: hoveredCard === i ? 'brightness(1.05)' : 'brightness(1)'
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                  />
                ) : (
                  <motion.img
                    key={`${i}-1`}
                    src={card.images[1]}
                    alt={card.title}
                    className="card-image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      filter: hoveredCard === i ? 'brightness(1.05)' : 'brightness(1)'
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="card-content">
              <motion.h3 
                className="card-title"
                animate={{ color: hoveredCard === i ? card.accent : '#111827' }}
              >
                {card.title}
              </motion.h3>
              <motion.p 
                className="card-text"
                animate={{ color: hoveredCard === i ? '#4B5563' : '#6B7280' }}
              >
                {card.text}
              </motion.p>
              
              <div className="card-stats">
                {card.stats.map((stat, index) => (
                  <motion.div 
                    className="stat-item"
                    key={index}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: card.accent,
                      color: 'white'
                    }}
                    animate={{
                      border: `2px solid ${card.accent}`,
                      color: hoveredCard === i ? card.accent : '#111827'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

     
    </section>
  );
};

export default AboutUs;