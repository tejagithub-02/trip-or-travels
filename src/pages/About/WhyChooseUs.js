import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyChooseUs.css';

const features = [
  {
    icon: 'passport.png',
    title: 'Hassle-Free Visas',
    description: 'We handle the paperwork so you can focus on planning your adventure. No more embassy queues or confusing processes.',
    color: 'linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)',
    animation: 'fade-up',
  },
  {
    icon: 'map.png',
    title: 'Custom Itineraries',
    description: 'Every traveler is different. Our team builds travel plans that match your interests, budget, and pace.',
    color: 'linear-gradient(135deg, #FDE68A 0%, #F97316 100%)',
    animation: 'zoom-in',
  },
  {
    icon: 'plane.png',
    title: 'Seamless Flight Bookings',
    description: 'From economy to first-class, we ensure smooth flight bookings with the best routes and deals.',
    color: 'linear-gradient(135deg, #A5B4FC 0%, #6366F1 100%)',
    animation: 'fade-down',
  },
  {
    icon: 'hotel.jpeg',
    title: 'Top-Rated Stays',
    description: 'We partner with trusted hotels and resorts to ensure comfort, cleanliness, and service you can count on.',
    color: 'linear-gradient(135deg, #F9A8D4 0%, #EC4899 100%)',
    animation: 'flip-left',
  },
  {
    icon: 'support-agent.png',
    title: 'Real-Time Support',
    description: 'Need help during your trip? Our support team is available on chat and call — 24/7, no matter where you are.',
    color: 'linear-gradient(135deg, #FCA5A5 0%, #EF4444 100%)',
    animation: 'flip-up',
  },
  {
    icon: 'wallet.png',
    title: 'Value for Money',
    description: 'No hidden charges. Transparent pricing ensures you always know what you’re paying for — and why.',
    color: 'linear-gradient(135deg, #86EFAC 0%, #22C55E 100%)',
    animation: 'fade-right',
  },
  {
    icon: 'travel-insurance.png',
    title: 'Travel Insurance',
    description: 'Stay protected from unexpected events with our reliable and affordable travel insurance plans.',
    color: 'linear-gradient(135deg, #67E8F9 0%, #06B6D4 100%)',
    animation: 'fade-left',
  },
  {
    icon: 'local-guide.png',
    title: 'Local Guides',
    description: 'Explore hidden gems with certified local guides for an authentic travel experience.',
    color: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
    animation: 'zoom-in-up',
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <section className="why-section">
      <div className="container">
        <p className="subtitle" data-aos="fade-down">Our Promise</p>
        <h2 className="title" data-aos="fade-up">Why Choose Globetrekker?</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              style={{ background: feature.color }}
              data-aos={feature.animation}
              data-aos-delay={index * 100}
            >
              <div className="icon-wrapper">
                <img
                  src={`/about/${feature.icon}`}
                  alt={feature.title}
                  className="feature-icon"
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
