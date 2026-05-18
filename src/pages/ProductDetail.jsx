import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
        <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
        <Link to="/" className="text-gold-500 hover:text-gold-400 transition-colors uppercase tracking-widest text-xs">
          Back to Home
        </Link>
      </div>
    );
  }

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=971555697964&text=Hi%2C+I%27d+like+to+enquire+about+${encodeURIComponent(product.name)}+(${product.volume}%2C+${product.price}).&type=phone_number&app_absent=0`;

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 selection:bg-gold-500/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/" 
            className="inline-flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-gold-500 transition-all duration-300 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Return to Collection</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-charcoal/30 border border-white/5 shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000"
              />
            </div>
          </motion.div>

          {/* Details Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.6em] text-gold-500 font-medium">
                {product.collection}
              </p>
              <h1 className="text-6xl md:text-7xl font-serif font-light text-white tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center space-x-6">
                <p className="text-3xl font-serif text-gold-500/90">{product.price}</p>
                <div className="h-px w-12 bg-white/10"></div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 pt-1">{product.volume}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/60 font-light leading-relaxed text-lg max-w-xl">
              {product.description}
            </p>

            {/* Fragrance Pyramid */}
            <div className="space-y-10 pt-4 border-t border-white/5">
              <h3 className="text-[11px] uppercase tracking-[0.4em] text-white/90 font-semibold">Fragrance Pyramid</h3>
              
              <div className="grid gap-8">
                {/* Top */}
                <div className="flex items-start">
                  <span className="w-20 text-[10px] uppercase tracking-[0.3em] text-white/30 pt-1">Top</span>
                  <div className="flex flex-wrap gap-2">
                    {product.pyramid?.top.map((note) => (
                      <span key={note} className="px-5 py-2 bg-white/5 text-white/70 text-[11px] font-medium tracking-wide border border-white/5 hover:border-gold-500/30 transition-colors">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Heart */ }
                <div className="flex items-start">
                  <span className="w-20 text-[10px] uppercase tracking-[0.3em] text-white/30 pt-1">Heart</span>
                  <div className="flex flex-wrap gap-2">
                    {product.pyramid?.heart.map((note) => (
                      <span key={note} className="px-5 py-2 bg-white/5 text-white/70 text-[11px] font-medium tracking-wide border border-white/5 hover:border-gold-500/30 transition-colors">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base */}
                <div className="flex items-start">
                  <span className="w-20 text-[10px] uppercase tracking-[0.3em] text-white/30 pt-1">Base</span>
                  <div className="flex flex-wrap gap-2">
                    {product.pyramid?.base.map((note) => (
                      <span key={note} className="px-5 py-2 bg-white/5 text-white/70 text-[11px] font-medium tracking-wide border border-white/5 hover:border-gold-500/30 transition-colors">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-white/40 italic font-serif text-lg leading-relaxed max-w-xl">
                "{product.quote}"
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-6 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center space-x-4 w-full py-5 bg-gold-500 text-black uppercase tracking-[0.3em] text-xs font-bold hover:bg-gold-400 transition-all duration-500 shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10 group-hover:h-full transition-all duration-500"></div>
                <MessageCircle size={18} className="relative z-10" />
                <span className="relative z-10">Enquire on WhatsApp</span>
              </a>
              <div className="flex items-center justify-center space-x-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
                <span>{product.volume}</span>
                <span className="h-1 w-1 bg-white/10 rounded-full"></span>
                <span>{product.shipping || 'Complimentary Shipping'}</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
