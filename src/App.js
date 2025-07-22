import React from 'react';
import Preloader from './components/Preloader';

import Banner from './components/Banner';
import Enquiry from './components/Enquiry';
import AboutUs from './components/AboutUs';
import Destinations from './components/Destinations';
import TravelExperience from './components/TravelExperience';


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
    </>
  );
}

export default App;