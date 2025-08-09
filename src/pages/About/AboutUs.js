import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutUs.css';

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const featureVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -8,
      rotateX: 3,
      rotateY: -3,
      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
      transition: { duration: 0.3 },
    },
  };

  const features = [
    { title: 'Adventure Trips', desc: 'Thrilling experiences worldwide', color: 'gradient-red' },
    { title: 'Luxury Stays', desc: 'Handpicked resorts & villas', color: 'gradient-gold' },
    { title: 'Custom Plans', desc: 'Tailored to your dreams', color: 'gradient-blue' },
    { title: '24/7 Support', desc: 'Always with you', color: 'gradient-green' },
    { title: 'Family Friendly', desc: 'Trips for all ages', color: 'gradient-purple' },
    { title: 'Eco Travel', desc: 'Sustainable & responsible', color: 'gradient-teal' },
  ];

  return (
    <section ref={ref} className="about-section">
      <div className="floating-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
        <span className="shape shape4"></span>
      </div>

      <div className="about-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="about-left"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.span className="section-label" variants={itemVariants}>
            About Our Journey
          </motion.span>
          <motion.h2 variants={itemVariants}>
            We <span className="highlight-text">Design Experiences</span>  
            <br /> Not Just Vacations
          </motion.h2>
          <motion.p variants={itemVariants}>
            Since our inception, we’ve been redefining the way people travel.  
            Our mission is to craft <strong>unique experiences</strong> that connect you  
            to the <strong>heart of every destination</strong>.
          </motion.p>
          <motion.p variants={itemVariants}>
            With our <strong>local experts</strong>, <strong>personalized planning</strong>, and  
            <strong>commitment to safety</strong>, your journey is not just a trip—it’s  
            a story worth telling.
          </motion.p>

          {/* Features Section */}
          <motion.div className="about-features" variants={containerVariants}>
            {features.map((item, i) => (
              <motion.div
                className={`feature-box ${item.color}`}
                variants={featureVariants}
                whileHover="hover"
                key={i}
              >
                <h3 className="feature-title">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="cta-button"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="about-right"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div className="image-wrapper fancy-image">
            <img className="main-img" src="/about/aboutus.jpg" alt="Luxury Travel" />
            <img className="overlay-img" src="/about/aboutus1.jpg" alt="Experience" />
            <motion.div
              className="experience-tag"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 150 }}
            >
              <span>500+</span>
              <small>Trips Crafted</small>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
