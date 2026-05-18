import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <section id="about" className="section-padding bg-charcoal/30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 text-white">
        {/* Left: Image with reveal effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full lg:w-1/2 aspect-[4/5] overflow-hidden group"
        >
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000"
            alt="Perfume Creation"
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
        </motion.div>

        {/* Right: Text content */}
        <div className="w-full lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.4em] uppercase text-gold-500"
            >
              The Spaceloomz Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif"
            >
              Different by Design
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-white/70 font-light leading-relaxed text-lg"
          >
            <p>
              Born from a vision to redefine the aromatic landscape, Spaceloomz is a sanctuary of sensory exploration. We believe that a fragrance is more than a scent; it is an invisible armor, a silent language, and a bridge to distant memories.
            </p>
            <p>
              Our master perfumers travel to the most remote corners of the globe, seeking out the rarest botanicals—from the night-blooming jasmine of Grasse to the precious oud of Southeast Asia. Each essence is harvested at its peak and treated with artisanal reverence.
            </p>
            <p>
              Innovation meets tradition in our laboratory, where we employ modern molecular science to extract deep, complex notes that were once thought elusive. The result is a collection of olfactory masterpieces that evolve on the skin, telling a unique story for every wearer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="#" className="inline-block border-b border-gold-500/50 pb-2 text-sm uppercase tracking-widest text-gold-400 hover:text-gold-200 transition-colors">
              Read Our Full Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
