import React from 'react';
import './TravelExperience.css';
import travelImg from '../assets/travelers.png';
import { motion } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Find And Enjoy A Trip That Fits Your Lifestyle With Your Friends',
    desc: 'Globally productize flexible potentialities via high-payoff markets. Proactively revolutionize parallel growth strategies.',
  },
  {
    id: '02',
    title: 'Travel With More Confidence',
    desc: 'Globally productize flexible potentialities via high-payoff markets. Proactively revolutionize parallel growth strategies.',
  },
  {
    id: '03',
    title: 'See What You Really Get From Us',
    desc: 'Globally productize flexible potentialities via high-payoff markets. Proactively revolutionize parallel growth strategies.',
  },
];

const TravelExperience = () => {
  return (
    <section className="travel-wrapper">
      <div className="travel-left">
        <motion.h5 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>Why Choose Us</motion.h5>
        <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>Get The Best Travel Experience</motion.h1>
        <motion.p className="travel-desc" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          There are many variations of passages of available, but the majority have suffered alteration in some form, 
          by injected humour words which do not look even slightly believable.
        </motion.p>
        <div className="travel-steps">
          {steps.map((step, i) => (
            <motion.div className="travel-step" key={step.id} whileHover={{ scale: 1.02 }}>
              <div className="circle-line">
                <span>{step.id}</span>
                {i < steps.length - 1 && <div className="line"></div>}
              </div>
              <div className="step-text">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="travel-right">
        <motion.img src={travelImg} alt="Travelers" className="main-image"
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} />
        <motion.div className="plane" animate={{ x: [0, 30, 0], y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
          ✈️
        </motion.div>
        <div className="shape-bg"></div>
      </div>
    </section>
  );
};

export default TravelExperience;
