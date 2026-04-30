"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function DynamicTitle() {
  const { t } = useLanguage();
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Dapatkan terjemahan saat ini
    const comeBackText = t("dynamicTitle.comeBack") || "Hey, Kembali! 😭";
    const welcomeBackText = t("dynamicTitle.welcomeBack") || "Selamat Datang Kembali! ✨";
    const originalText = t("dynamicTitle.original") || "Bagas | Portfolio";

    // Set judul awal jika belum ada
    if (!document.title || document.title === "temp" || document.title === "Create Next App") {
      document.title = originalText;
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Hapus timeout jika ada
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        
        // Ganti judul dan favicon saat user pindah tab
        document.title = comeBackText;
        
        // Opsional: Ganti favicon jika Anda punya icon menangis (misal /favicon-sad.ico)
        // document.querySelector("link[rel*='icon']").href = "/favicon-sad.ico";
      } else {
        // Ganti judul menyambut user kembali
        document.title = welcomeBackText;
        
        // Kembalikan favicon normal
        // document.querySelector("link[rel*='icon']").href = "/favicon.ico";

        // Kembalikan judul asli setelah 2 detik
        timeoutRef.current = setTimeout(() => {
          document.title = originalText;
        }, 2000);
      }
    };

    // Dengarkan event perubahan tab
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup saat unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [t]); // Dependensi 't' agar teks berubah jika bahasa diubah

  // Komponen ini tidak merender UI apa pun
  return null;
}
