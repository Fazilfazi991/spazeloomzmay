import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products as allProducts } from '../data/products';

const Women = () => {
  const products = allProducts.filter(p => p.category.includes('Women'));

  return (
    <div className="pt-32 min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] uppercase tracking-[0.6em] text-gold-500 mb-6 font-medium"
        >
          Fragrances for Women
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-serif font-light mb-10 tracking-tight"
        >
          Elegant & Feminine
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white/50 font-serif italic text-xl md:text-2xl"
        >
          "Whispers of elegance and timeless grace."
        </motion.p>
      </section>

      {/* Main Content: Sidebar + Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 space-y-16">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-sm uppercase tracking-[0.3em] font-medium text-white/90">Filters</h3>
            </div>

            {/* Brand/Subtitle */}
            <div className="py-2">
              <h4 className="text-xl font-serif gold-gradient-text tracking-widest uppercase">SPACELOOMZ</h4>
            </div>

            {/* Fragrance Family */}
            <div className="space-y-8">
              <button className="w-full flex items-center justify-between group">
                <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 group-hover:text-white transition-colors">Fragrance Family</h4>
                <ChevronDown size={16} className="text-white/30 group-hover:text-gold-500 transition-colors" />
              </button>
              <div className="space-y-4 pt-2">
                {['Fresh', 'Oud', 'Floral', 'Oriental'].map((item) => (
                  <label key={item} className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-4 h-4 border border-white/20 rounded-none group-hover:border-gold-500/50 transition-all duration-300 bg-transparent flex items-center justify-center">
                      <div className="w-2 h-2 bg-gold-500 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </div>
                    <span className="text-[13px] text-white/40 group-hover:text-white transition-colors font-light tracking-wide">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Intensity */}
            <div className="space-y-8">
              <button className="w-full flex items-center justify-between group text-left">
                <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 group-hover:text-white transition-colors">Intensity</h4>
                <ChevronDown size={16} className="text-white/30 group-hover:text-gold-500 transition-colors" />
              </button>
              <div className="space-y-4 pt-2">
                {['Light / Mist', 'Medium / EDP', 'Intense / Extrait'].map((item) => (
                  <label key={item} className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-4 h-4 border border-white/20 rounded-none group-hover:border-gold-500/50 transition-all duration-300 bg-transparent flex items-center justify-center">
                      <div className="w-2 h-2 bg-gold-500 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </div>
                    <span className="text-[13px] text-white/40 group-hover:text-white transition-colors font-light tracking-wide">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-8">
              <button className="w-full flex items-center justify-between group">
                <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50 group-hover:text-white transition-colors">Price</h4>
                <ChevronDown size={16} className="text-white/30 group-hover:text-gold-500 transition-colors shadow-gold-500" />
              </button>
              <div className="space-y-8 pt-2">
                <div className="relative group">
                  <input 
                    type="range" 
                    min="0" 
                    max="1000" 
                    className="w-full h-[2px] bg-white/10 rounded-none appearance-none cursor-pointer accent-gold-500 hover:accent-gold-400"
                  />
                  <div className="absolute -bottom-8 left-0 text-[10px] text-white/30 tracking-[0.2em]">$0</div>
                  <div className="absolute -bottom-8 right-0 text-[10px] text-white/30 tracking-[0.2em]">$1000</div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16">
              {products.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Women;
