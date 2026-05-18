import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import ProductCard from './ProductCard';
import { products as allProducts } from '../data/products';

const FeaturedProducts = () => {
  const featuredProducts = allProducts.filter(product => product.featured);

  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">Featured Fragrances</h2>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          <AnimatePresence mode="popLayout">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
