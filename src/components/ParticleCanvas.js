"use client";

import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particlesArray = [];

    const initParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;

      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (window.innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (window.innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 0.4 - 0.2;
        let directionY = Math.random() * 0.4 - 0.2;
        
        particlesArray.push({ x, y, directionX, directionY, size });
      }
    };

    const drawParticle = (p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
      ctx.fillStyle = "rgba(0, 191, 255, 0.3)";
      ctx.fill();
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      for (let i = 0; i < particlesArray.length; i++) {
        let p = particlesArray[i];
        
        if (p.x > canvas.width || p.x < 0) p.directionX = -p.directionX;
        if (p.y > canvas.height || p.y < 0) p.directionY = -p.directionY;
        
        p.x += p.directionX;
        p.y += p.directionY;
        
        drawParticle(p);
      }
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    initParticles();
    updateParticles();

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
