"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

export default function PreLoader() {
  const { progress: threeProgress, active } = useProgress();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("INITIALIZING_CORE_SYSTEMS...");

  useEffect(() => {
    // Kunci scroll saat loading
    document.body.style.overflow = "hidden";

    const texts = [
      "INITIALIZING_CORE_SYSTEMS...",
      "LOADING_3D_ASSETS...",
      "ESTABLISHING_SECURE_CONNECTION...",
      "DECRYPTING_PORTFOLIO_DATA...",
      "COMPILING_STYLESHEETS...",
      "SYSTEM_READY."
    ];

    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      if (textIndex < texts.length - 1) {
        setLoadingText(texts[textIndex]);
      }
    }, 500);

    // Sinkronisasi progress palsu (animasi) dengan progress asli dari Three.js
    const timer = setInterval(() => {
      setProgress((prev) => {
        let target = threeProgress;
        
        // Jika Three.js belum mulai memuat, kita buat progress bohongan sampai 30% 
        // untuk memberi ilusi bahwa sistem sedang memuat komponen lain (DOM)
        if (!active && threeProgress === 0) {
          target = 30;
        }

        // Rumus Easing: Bergerak mulus menuju target
        let next = prev + (target - prev) * 0.1;
        
        // Memastikan progress tidak melampaui 100 atau terjebak di 99.9
        if (target === 100 && next > 99) {
          next = 100;
        }

        // Jika sudah 100%
        if (next >= 100) {
          clearInterval(timer);
          clearInterval(textInterval);
          setLoadingText("BOOT_SEQUENCE_COMPLETE.");
          
          // Tahan sedikit di 100% agar user sempat membaca, lalu hilangkan
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
          }, 800);
          
          return 100;
        }
        
        // Pastikan bar selalu bergerak maju minimal sedikit
        return next > prev ? next : prev + 0.1;
      });
    }, 30);

    // Failsafe (Sistem Keamanan Darurat): 
    // Jika internet lambat dan 3D nyangkut lebih dari 8 detik, paksa buka websitenya.
    const failsafe = setTimeout(() => {
      setProgress(100);
    }, 8000);

    return () => {
      clearInterval(timer);
      clearInterval(textInterval);
      clearTimeout(failsafe);
      document.body.style.overflow = "auto";
    };
  }, [threeProgress, active]);

  const totalBars = 25;
  const safeProgress = Math.min(Math.max(progress, 0), 100);
  const filledBars = Math.floor((safeProgress / 100) * totalBars);
  const emptyBars = Math.max(0, totalBars - filledBars);
  const barString = `[${"|".repeat(filledBars)}${":".repeat(emptyBars)}]`;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0,
            y: "-100vh", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Animasi slide up super mulus
          }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#01041a] text-green-500 font-mono"
        >
          <div className="w-full max-w-2xl px-6 flex flex-col items-center">
            
            {/* Header / Logo Terminal */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 text-center"
            >
              <div className="text-xl md:text-3xl font-bold tracking-[0.2em] mb-2 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                @BGAS_DIGITAL
              </div>
              <div className="text-xs md:text-sm text-gray-500">
                (c) {new Date().getFullYear()} BAGASSEVIRIONAL CORPORATION. ALL RIGHTS RESERVED.
              </div>
            </motion.div>

            {/* Terminal Progress Bar */}
            <div className="w-full text-center mb-6 text-sm md:text-lg lg:text-xl whitespace-pre">
              <span className="text-blue-500 shadow-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                {barString}
              </span> 
              <span className="font-bold text-white ml-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                {Math.floor(progress)}%
              </span>
            </div>
            
            {/* Status Teks Berjalan */}
            <div className="h-6 flex items-center justify-center">
              <motion.span 
                key={loadingText}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                className="text-xs md:text-sm text-green-400 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]"
              >
                <span className="animate-pulse mr-2">{">"}</span> {loadingText}
              </motion.span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
