"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "about", href: "#tentang" },
    { key: "skills", href: "#layanan" },
    { key: "portfolio", href: "#portfolio" },
    { key: "contact", href: "#kontak" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#01041a]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-x-3 text-2xl font-extrabold text-white tracking-wider">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.png" alt="Logo Bagassevirional" className="h-8 w-auto" />
          <span>Bagassevirional</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              {t(`navbar.${link.key}`)}
            </Link>
          ))}
          
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 text-sm font-bold tracking-wider"
            title="Switch Language"
          >
            {language === "id" ? "EN" : "ID"}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/10 text-xs font-bold"
          >
            {language === "id" ? "EN" : "ID"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden header-scrolled backdrop-blur-lg">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-6 text-gray-300 hover:bg-blue-900/50 transition-colors"
            >
              {t(`navbar.${link.key}`)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
