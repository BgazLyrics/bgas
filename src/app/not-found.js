"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  const [text, setText] = useState("");
  const fullText = "FATAL ERROR: 404_PAGE_NOT_FOUND";
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="min-h-screen bg-[#01041a] flex flex-col items-center justify-center p-6 text-green-500 font-mono relative overflow-hidden">
      {/* Efek Garis Scan Terminal */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full border border-red-500/30 p-8 rounded-sm bg-black/50 shadow-[0_0_30px_rgba(255,0,0,0.1)] relative z-10 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between border-b border-red-500/30 pb-4 mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-red-500 text-xs tracking-widest uppercase animate-pulse">System Failure</span>
        </div>

        <div className="text-center md:text-left mb-8">
          <h1 
            className="text-6xl md:text-8xl font-bold text-red-500 mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] glitch-text select-none" 
            data-text="404"
          >
            404
          </h1>
        </div>

        <div className="mb-10 space-y-3 text-sm md:text-base bg-black/40 p-4 rounded border border-red-500/20 font-mono">
          <p className="text-red-400">{">"} {text}<span className="animate-ping">_</span></p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-gray-400"
          >
            {">"} DIRECTORY_ACCESS_DENIED_OR_DESTROYED
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="text-gray-400"
          >
            {">"} ATTEMPTING_DATA_RECOVERY... <span className="text-red-500 font-bold ml-2">FAILED</span>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            className="text-gray-400"
          >
            {">"} PLEASE_EVACUATE_THE_SECTOR_IMMEDIATELY
          </motion.p>
        </div>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#b91c1c" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-red-600 text-white font-bold tracking-widest uppercase rounded shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all flex items-center justify-center gap-3 group"
          >
            <svg className="w-5 h-5 group-hover:-rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            [ REBOOT SYSTEM ]
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
