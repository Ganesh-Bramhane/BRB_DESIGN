import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Rotating words (you can change these)
const words = ["INNOVATE", "INSPIRE", "GROW", "DOMINATE"];

const BrandHero = () => {
  const [index, setIndex] = useState(0);

  // Change word every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          
          <span className="whitespace-nowrap">We help your brand</span>

          {/* Animated word */}
          <div className="relative h-[1.2em] w-[220px] md:w-[280px] flex justify-center md:justify-start overflow-hidden text-blue-400">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute font-black uppercase tracking-wider"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Crafting digital experiences that leave a lasting impression. Turn visitors into loyal customers.
        </p>

        {/* WhatsApp CTA Button */}
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Let’s Talk on WhatsApp
        </motion.a>

      </div>
    </section>
  );
};

export default BrandHero;
