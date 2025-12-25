import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "mobile apps",
  "brand identity",
  "websites",
];

const HeroMinimal = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      
      {/* HERO CONTENT */}
      <div className="flex items-center gap-4 text-white font-sans">

        {/* Fixed text */}
        <span className="text-4xl md:text-6xl font-semibold">
          We design
        </span>

        {/* Vertical carousel */}
        <div className="relative h-[1.2em] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={services[index]}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-4xl md:text-6xl font-semibold whitespace-nowrap"
            >
              {services[index]}
            </motion.span>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default HeroMinimal;
