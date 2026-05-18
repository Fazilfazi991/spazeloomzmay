import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-charcoal mb-6 border border-white/5">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>

          {/* Hover WhatsApp Icon */}
          <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
            <a
              href={`https://api.whatsapp.com/send/?phone=971555697964&text=Hi%2C+I%27d+like+to+enquire+about+${encodeURIComponent(product.name)}+(${product.volume}%2C+${product.price}).&type=phone_number&app_absent=0`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-12 h-12 bg-gold-500 text-black rounded-full hover:scale-110 active:scale-95 transition-all shadow-xl"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">{product.collection}</p>
          <h3 className="text-2xl font-serif text-white/90 group-hover:text-white transition-colors">{product.name}</h3>
          <p className="text-gold-500 font-medium tracking-[0.2em]">{product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
