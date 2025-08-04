import React from 'react';
import Preloader from './components/Preloader';

import Banner from './components/Banner';
import Enquiry from './components/Enquiry';
import AboutUs from './components/AboutUs';
import Destinations from './components/Destinations';
import TravelExperience from './components/TravelExperience';
import FeaturedTour from './components/FeaturedTour';
import Testimonial from './components/Testimonial';
import Insta from './components/Insta';
import Footer from './components/Footer';



function App()
{
  return(
    <>
    <Preloader/>
   
    <Banner/>
   <Enquiry/>
    <AboutUs/>
    <Destinations/>
    <TravelExperience/>
    <FeaturedTour/>
    <Testimonial/>
    <Insta/>
    <Footer/>
    </>
  );
}

export default App;