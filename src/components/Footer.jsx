import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold gold-gradient-text tracking-[0.2em] uppercase">SPAZELOOMZ</h2>
            <p className="text-white/60 font-light leading-relaxed pr-10">
              Curating emotions through scent. A luxury fragrance house dedicated to the art of fine living and timeless elegance.
            </p>
            <div className="space-y-4">
              <a href="mailto:info@spazeloomz.com" className="flex items-center space-x-3 text-white/70 hover:text-gold-400 transition-colors">
                <Mail size={16} />
                <span className="text-sm">info@spazeloomz.com</span>
              </a>
              <a href="tel:+971501234567" className="flex items-center space-x-3 text-white/70 hover:text-gold-400 transition-colors">
                <MessageCircle size={16} />
                <span className="text-sm">+971 50 123 4567</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50">Company</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Shop', path: '/collections' },
                  { name: 'Our Story', path: '/about' },
                  { name: 'Collections', path: '/collections' },
                  { name: 'Contact', path: 'mailto:info@spazeloomz.com' }
                ].map((item) => (
                  <li key={item.name}>
                    {item.path.startsWith('mailto') ? (
                      <a href={item.path} className="text-white/70 hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">{item.name}</a>
                    ) : (
                      <Link to={item.path} className="text-white/70 hover:text-gold-400 transition-colors text-sm uppercase tracking-widest">{item.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
          </div>

          {/* Column 3: UAE Office */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50">UAE Office</h4>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p>Suite 1204, Marina Plaza, Dubai Marina, UAE</p>
              </div>
              <p>Mon - Fri: 09:00 - 18:00</p>
            </div>
          </div>

          {/* Column 4: India Office */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/50">India Office</h4>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p>Level 8, Prestige Trade Towers, Palace Road, Bangalore, India</p>
              </div>
              <p>Mon - Sat: 10:00 - 19:00</p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-6 pt-4">
              <a href="#" className="text-white/40 hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-gold-400 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            &copy; {new Date().getFullYear()} SPAZELOOMZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
