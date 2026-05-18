import React from 'react';
import { motion } from 'framer-motion';

const Heritage = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center section-padding overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/heritage-bg.png"
          alt="Our Heritage"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.5em] text-gold-500 mb-4 font-medium"
        >
          Our Heritage
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif mb-8 text-white font-light"
        >
          Crafted with Obsession
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-white/60 font-light mb-12 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
        >
          Every Spaze Loomz fragrance is a journey through rare ingredients sourced from the world's most exotic destinations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-10 py-3 bg-black/40 border border-white/20 text-white uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-white hover:text-black transition-all duration-700 backdrop-blur-sm">
            Discover Origins
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Heritage;
