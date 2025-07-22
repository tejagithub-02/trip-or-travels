import React, { useEffect, useState } from 'react';
import './Preloader.css';
import flightImg from '../assets/flight.png';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <img src={flightImg} alt="Flight" className="flight" />
      <div className="title-container">
        <span className="trip-word">Trip</span>
        <span className="or-word">or</span>
        <span className="travels-word">Travels</span>
      </div>
      <div className="loading-bar"></div>
    </div>
  );
};

export default Preloader;