import React from 'react';
import Preloader from './components/Preloader';

import Banner from './components/Banner';
import AboutUs from './components/AboutUs';

function App()
{
  return(
    <>
    <Preloader/>
   
    <Banner/>
    <AboutUs/>
    </>
  );
}

export default App;