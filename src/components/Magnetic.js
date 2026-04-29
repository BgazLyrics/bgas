"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children, className = "" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (!ref.current) return;
    
    // Jangan aktifkan efek magnet di perangkat touch/mobile
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Hitung jarak cursor dari titik tengah tombol
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Tarik elemen (koefisien 0.3 bisa diubah untuk memperkuat/memperlemah magnet)
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
