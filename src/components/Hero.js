"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import ParticleCanvas from "./ParticleCanvas";

export default function Hero() {
  const heroTitles = [
    "Teknologi Merupakan Lonjakan Yang Besar",
    "Belajar Akan Merubah Dirimu Sendiri",
    "Wujudkan Impian Dengan Caramu Sendiri",
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % heroTitles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroTitles.length]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative">
      <ParticleCanvas />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="h-32 flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              {heroTitles[titleIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
        >
          Membantu diri sendiri agar tidak terjebak dengan sesuatu yang negatif
          merupakan suatu keajaiban.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block"
        >
          <Link
            href="#portfolio"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Lihat Karya Saya
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
