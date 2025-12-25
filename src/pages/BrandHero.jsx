import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "mobile apps",
  "graphic design",
  "visual concepts",
  "design system",
  "digital marketing",
  "brand identity",
  "social media",
  "websites",
  "ecommerce",
  "shopify",
  "brands that connect",
];

const BrandHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Video ke pace se match karne ke liye timing 2s rakhi hai
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col px-6 relative overflow-hidden font-sans">
      
      {/* Pure Black Background with very subtle grain or glow */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1)_0%,_rgba(0,0,0,1)_100%)]"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
        <h1 className="flex flex-col md:flex-row items-center gap-x-4 gap-y-2 text-center">
          
          {/* Static Part */}
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/90">
            We design
          </span>

          {/* Animated Part */}
          <div className="relative h-[1.2em] flex items-center justify-center md:justify-start min-w-[280px] md:min-w-[450px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                // Neeche se upar aane wala transition
                initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth motion
                }}
                className="absolute text-3xl md:text-5xl lg:text-6xl font-medium text-gray-400 whitespace-nowrap italic italic-serif"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>
      </div>

      {/* --- CTA BUTTON --- */}
      <div className="relative z-10 pb-16 flex justify-center">
        <motion.a
          href="https://wa.me/918766440104"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-10 py-4 bg-transparent overflow-hidden border border-white/20 rounded-full transition-all duration-300 hover:border-white"
        >
          <span className="relative z-10 text-white font-medium tracking-wide">
            Let's Talk
          </span>
          {/* Hover Fill Effect */}
          <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
          <style jsx>{`
            .group:hover span { color: black; }
          `}</style>
        </motion.a>
      </div>

    </section>
  );
};

export default BrandHero;