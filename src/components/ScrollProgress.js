"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Menggunakan efek physics pegas (spring) agar pergerakan progres bar sangat mulus
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-blue-500 z-[99999] origin-left shadow-[0_0_12px_rgba(59,130,246,0.9)]"
      style={{ scaleX }}
    />
  );
}
