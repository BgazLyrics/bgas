"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default to Indonesian
  const [language, setLanguage] = useState("id");

  // Load saved language from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "id" || savedLang === "en")) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "id" ? "en" : "id";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  // Translation function
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to Indonesian if key missing in English, or just return the key
        return translations["id"]?.[keys[0]]?.[keys[1]] || key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
