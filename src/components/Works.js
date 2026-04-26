"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3, updated on mount

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    // Initialize
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
      img: "https://placehold.co/600x400/3d1c70/white?text=coming+soon",
    },
    {
      title: "Coming Soon",
      role: "",
      link: "#",
      img: "https://placehold.co/600x400/701c1c/white?text=coming+soon",
    },
  ];

  const totalPages = Math.ceil(works.length / itemsPerPage);
  
  // Safe bounds check in case resize changes totalPages
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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Karya Terbaru
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-blue-500 mx-auto"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-lg relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {works.map((work, index) => (
                <div key={index} className={`w-full flex-shrink-0 px-4`} style={{ width: `${100 / itemsPerPage}%` }}>
                  <div className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-md border border-white/10 aspect-[4/3]">
                    <Link href={work.link} target={work.link === "#" ? "_self" : "_blank"} rel="noopener noreferrer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={work.img}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <h4 className="font-bold text-lg text-white">{work.title}</h4>
                        {work.role && <p className="text-sm text-gray-300">{work.role}</p>}
                      </div>
                    </Link>
                  </div>
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
