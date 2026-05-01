"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import LocalTime from "./LocalTime";
import Magnetic from "./Magnetic";

// Lazy Load komponen berat
const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();
  const heroTitles = [
    t("hero.title1"),
    t("hero.title2"),
    t("hero.title3"),
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % heroTitles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroTitles.length]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <ParticleCanvas />
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        
        {/* Kolom Kiri: Teks */}
        <div className="w-full lg:w-5/12 text-center lg:text-left mb-12 lg:mb-0 pt-10 lg:pt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              <span className="text-sm font-medium text-gray-300 tracking-wide">{t("hero.badge")}</span>
            </div>
            
            {/* Divider */}
            <span className="hidden sm:block w-px h-4 bg-white/20"></span>
            
            {/* Local Time Widget */}
            <LocalTime />
          </motion.div>

          <div className="min-h-[160px] lg:min-h-[200px] flex flex-col justify-center lg:justify-start mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={titleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
              >
                {heroTitles[titleIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
          >
            {t("hero.subtitle")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Magnetic>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
              >
                {t("hero.btnPrimary")}
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#kontak"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
              >
                {t("hero.btnSecondary")}
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Kolom Kanan: Foto Profil Bagas */}
        <motion.div 
          initial={{ opacity: 0, x: 50, y: 0 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            y: [0, -15, 0] // Efek melayang
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.5 },
            x: { duration: 1, delay: 0.5 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } // Berulang terus menerus
          }}
          className="w-full lg:w-6/12 h-[350px] lg:h-[500px] flex items-center justify-center relative"
        >
          {/* Efek Glow di belakang foto */}
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px] animate-pulse pointer-events-none"></div>
          
          <Magnetic>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)] group transform md:-rotate-3 md:hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/img/bagas.jpg" 
                alt="Bagas Seviardana" 
                fill 
                className="object-cover transition-transform duration-700 filter md:grayscale md:hover:grayscale-0 md:group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-colors duration-500 pointer-events-none z-10"></div>
              {/* Scanline overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-20 mix-blend-overlay"></div>
            </div>
          </Magnetic>
        </motion.div>

      </div>
    </section>
  );
}
