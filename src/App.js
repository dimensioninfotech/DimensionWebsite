import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './Component/Landing/Header';
import Footer from './Component/Landing/Footer';
import Home from './Component/Landing/Home';
import About from './Component/Landing/About';
import Service from './Component/Landing/Service';
import Portfolio from './Component/Landing/Portfolio';
import Contact from './Component/Landing/Contact';
import TrainingAndInternship from './Component/Landing/TrainingAndInternship';

import './App.css';

// Har route change par top scroll karne ke liye component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* Page Top Scroll Component */}
      <ScrollToTop />
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training" element={<TrainingAndInternship />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;