import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <Preloader />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Example for future pages:
        */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
