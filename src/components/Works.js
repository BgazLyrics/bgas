"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Komponen GlowCard Reusable
const GlowCard = ({ children, className }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-md border border-white/10 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-20"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,.25), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

export default function Works() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const works = [
    {
      title: "Website Edukasi Hacking",
      role: "Sebagai front-end programmer",
      link: "https://hackings.bgas.my.id/",
      img: "/img/web.png",
    },
    {
      title: "Recap Classmeet Questival 2025",
      role: "Sebagai director utama",
      link: "https://www.instagram.com/reel/DLCqVE_pt7r/",
      img: "/img/edit.png",
    },
    {
      title: "Recap Classmeet Aventra 2025",
      role: "Sebagai director utama",
      link: "https://www.instagram.com/reel/DNVXzjQJyGr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      img: "/img/aventra.jpg",
    },
    {
      title: "Organization & Extracurricular Demonstration 2025",
      role: "Sebagai penanggung jawab Visual Effect (VFX)",
      link: "https://youtu.be/qksJXa9QG_k?si=ZQUh-HOpsCh2kOHx",
      img: "/img/demos2025.png",
    },
    {
      title: "Coming Soon",
      role: "",
      link: "#",
      img: "https://placehold.co/600x400/3d1c70/white/svg?text=coming+soon",
    },
    {
      title: "Coming Soon",
      role: "",
      link: "#",
      img: "https://placehold.co/600x400/701c1c/white/svg?text=coming+soon",
    },
  ];

  const totalPages = Math.ceil(works.length / itemsPerPage);
  
  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            {t("works.title")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-blue-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-lg relative pb-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {works.map((work, index) => (
                <div key={index} className={`w-full flex-shrink-0 px-4`} style={{ width: `${100 / itemsPerPage}%` }}>
                  <GlowCard className="group aspect-[4/3] relative h-full">
                    <Link href={work.link} target={work.link === "#" ? "_self" : "_blank"} rel="noopener noreferrer" className="block w-full h-full relative">
                      <Image
                        src={work.img}
                        alt={work.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500 relative z-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 z-10" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10">
                        <h4 className="font-bold text-xl text-white mb-1 group-hover:text-blue-300 transition-colors">{work.title}</h4>
                        {work.role && <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{work.role}</p>}
                      </div>
                    </Link>
                  </GlowCard>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-10 transition-opacity ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= totalPages - 1}
            className={`absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full z-10 transition-opacity ${currentIndex >= totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
