import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Yeh woh words hain jo cycle honge. Aap inhe apne brand ke hisab se change kar sakte hain.
const words = ["INNOVATE", "INSPIRE", "GROW", "DOMINATE"];

const BrandHero = () => {
  const [index, setIndex] = useState(0);

  // Word ko har 2.5 second mein change karne ka logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="whitespace-nowrap">We <Design></Design></span>

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

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Crafting digital experiences that leave a lasting impression. Turn visitors into loyal customers.
        </p>

        {/* SAME BUTTON — JUST WHATSAPP LINK ADDED */}
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black inline-block"
        >
          Let's Talk
        </motion.a>
      </div>
    </section>
  );
};

export default BrandHero;
