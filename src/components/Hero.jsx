import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 text-white">
        <img
          src="/assets/hero-bg.png"
          alt="Luxury Fragrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-20px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.5em] text-white/70 mb-6"
        >
          The Future of Fashion
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-light gold-gradient-text tracking-tighter mb-8"
        >
          SPAZELOOMZ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-base md:text-xl font-light text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Where ancient artistry meets modern elegance. Discover fragrances that transcend time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <button className="btn-gold">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
