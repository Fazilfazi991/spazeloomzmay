import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Men from './pages/Men';
import Women from './pages/Women';
import Unisex from './pages/Unisex';
import Footer from './components/Footer';

import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';

const App = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black overflow-x-hidden selection:bg-gold-500/30 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/unisex" element={<Unisex />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
