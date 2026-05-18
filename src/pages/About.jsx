import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      {/* Hero Section for About */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src="/assets/heritage-bg.png"
            alt="Research & Style"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] text-gold-500 mb-4"
          >
            Our Narrative
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white font-light"
          >
            Research & Style
          </motion.h1>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-sm border border-white/10 p-2 bg-charcoal/30">
              <img
                src="/assets/founder.jpg"
                alt="Founder of SPAZELOOMZ"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold-500">The Visionaries</p>
              <h2 className="text-4xl md:text-5xl font-serif">Meet the Founders</h2>
            </div>
            <blockquote className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed border-l-2 border-gold-500 pl-6 py-2">
              "We didn't just want to create another brand; we wanted to create a complete experience—one that stands out in a market filled with the ordinary."
            </blockquote>
            <p className="text-white/60 font-light leading-relaxed">
              Driven by a singular vision to be different, our founders have a personal commitment that ensures SPAZELOOMZ is where obsessed research finally meets curated style.
            </p>
            <p className="text-gold-500 text-sm tracking-widest uppercase">— A Personal Commitment to Excellence</p>
          </div>
        </div>
      </section>

      {/* Engineering Distinction Section */}
      <section className="section-padding bg-charcoal/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold-500">Our Journey</p>
              <h2 className="text-4xl md:text-5xl font-serif">Engineering Distinction</h2>
            </div>
            <div className="space-y-6 text-white/60 font-light leading-relaxed">
              <p>
                Spazeloomz was created with a bold vision — to redefine premium fashion in India through global sourcing, refined craftsmanship, and a distinctive modern identity. In an industry filled with repetition, we chose distinction.
              </p>
              <p>
                Before introducing our first collection, we invested six years in in-depth research and development. We explored international fabric markets, tested material durability, refined fits, and studied evolving fashion trends across the globe. Because true luxury is never accidental — it is intentional, engineered, and perfected.
              </p>
              <p>
                At Spazeloomz, quality begins at the source. Our premium fabrics are carefully sourced from renowned textile regions including UAE, Turkey, and China — destinations celebrated for advanced weaving techniques and superior textile standards. Each product is then manufactured with precision in India and China, ensuring the perfect balance between global excellence and reliable craftsmanship.
              </p>
            </div>

            {/* Feature Box */}
            <div className="bg-black/40 border border-white/5 p-10 space-y-8">
              <h4 className="text-sm uppercase tracking-[0.2em] text-white">The result is a collection defined by:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "SUPERIOR FABRIC QUALITY",
                  "MODERN TAILORING",
                  "REFINED FINISHING",
                  "LONG-LASTING PERFORMANCE"
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3 text-[10px] tracking-[0.1em] text-gold-400">
                    <Zap size={14} className="fill-gold-500 text-gold-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs italic text-white/40">We don't just create clothing — we engineer confidence.</p>
            </div>
          </div>

          {/* Right: Signature Collection Showcase */}
          <div className="w-full lg:w-1/2 space-y-12 mt-12 lg:mt-0">
            <div className="relative aspect-[16/9] overflow-hidden mb-12 border border-white/10 group">
              <img
                src="/assets/about2.jpg"
                alt="Signature Collection"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="space-y-10">
              <h3 className="text-2xl font-serif text-white">Our Signature Collection Includes:</h3>
              <div className="space-y-8">
                {[
                  { title: "Luxury Shirts", desc: "Distinctive textures and structured fits." },
                  { title: "Modern Trousers", desc: "Designed for style and comfort." },
                  { title: "Premium Perfumes", desc: "Crafted to leave a lasting impression." }
                ].map((item) => (
                  <div key={item.title} className="space-y-2 border-l border-gold-500/30 pl-6">
                    <h4 className="text-sm uppercase tracking-widest text-gold-500">{item.title}</h4>
                    <p className="text-sm text-white/50 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gold-500/5 border border-gold-500/10 p-8 rounded-sm">
                <p className="text-xs text-white/60 leading-relaxed italic">
                  Spazeloomz proudly serves retailers and resellers across India through seamless wholesale purchasing. Orders can be placed easily via WhatsApp or through our official website, ensuring accessibility without compromising on service standards.
                </p>
                <p className="text-xs text-gold-500 mt-4 font-medium uppercase tracking-widest">
                  With dependable supply, competitive pricing, and consistent quality, we aim to build long-term partnerships rooted in trust, excellence, and shared growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section className="section-padding max-w-7xl mx-auto text-center">
        <div className="space-y-4 mb-20">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold-500">Our Standards</p>
          <h2 className="text-4xl md:text-5xl font-serif">Our Pillars</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {[
            {
              title: "Distinction",
              icon: Shield,
              desc: "Choosing engineering over repetition — creating unique aesthetics that transcend the ordinary."
            },
            {
              title: "Precision",
              icon: Target,
              desc: "Investing six years in research to ensure every material and fit meets global excellence."
            },
            {
              title: "Partnership",
              icon: Users,
              desc: "Building long-term trust with retailers and bulk buyers through consistent quality and supply."
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-6 group"
            >
              <div className="flex justify-center">
                <div className="p-4 border border-gold-500/20 rounded-full group-hover:border-gold-500/60 transition-colors duration-500">
                  <item.icon className="text-gold-500" size={32} strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-xl uppercase tracking-widest font-serif">{item.title}</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
