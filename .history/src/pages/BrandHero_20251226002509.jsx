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
  "website",
];

const BrandHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex justify-center items-center px-4 relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        
        {/* ONE LINE – MOBILE + DESKTOP */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 flex justify-center items-center gap-3 whitespace-nowrap">
          
          <span>We help your brand</span>

          {/* Animated Words (No cut, no jump) */}
          <span className="relative inline-flex min-w-[22ch] justify-start text-blue-400">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute font-black capitalize tracking-wide whitespace-nowrap"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>

        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Crafting digital experiences that leave a lasting impression. Turn visitors into loyal customers.
        </p>

        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg transition-colors duration-300 ease-in-out"
        >
          Let's Talk
        </motion.a>

      </div>
    </section>
  );
};

export default BrandHero;
