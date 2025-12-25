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
    <section className="min-h-screen bg-black text-white flex flex-col px-4 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <h1 className="text-2xl md:text-6xl lg:text-7xl font-extrabold tracking-tight flex items-center gap-3 whitespace-nowrap">
          
          <span>We Design</span>

          {/* Smaller animated word */}
          <span className="relative inline-flex min-w-[22ch] text-blue-400 text-3xl md:text-4xl lg:text-5xl font-semibold">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute whitespace-nowrap"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>

        </h1>
      </div>

      {/* BUTTON AT BOTTOM */}
      <div className="relative z-10 pb-12 flex justify-center">
        <motion.a
          href="https://wa.me/918766440104"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg transition-colors duration-300"
        >
          Let's Talk
        </motion.a>
      </div>

    </section>
  );
};

export default BrandHero;
