import React from 'react';
import AboutBanner from './AboutBanner';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import Testimonial from '../../components/Testimonial';
function About()
{
  return(
    <>
    <AboutBanner/>
    <AboutUs/>
    <WhyChooseUs/>
    <Testimonial/>
    </>
  );
}

export default About;