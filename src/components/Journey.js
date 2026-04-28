"use client";

import { motion } from "framer-motion";

export default function Journey() {
  const journeyData = [
    {
      year: "2008 - 2024",
      title: "Masa Muda & Pendidikan Awal",
      description: "Lahir pada 24 Juni 2008 dan tumbuh besar di Purwokerto. Menjalani masa sekolah dasar hingga mengikuti PPDB Online SMPN 3 Purwokerto pada Juni 2024.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
        </svg>
      )
    },
    {
      year: "2025 - Sekarang",
      title: "Pendidikan Vokasi (PPLG)",
      description: "Menempuh pendidikan di SMK Negeri 1 Purwokerto jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). Saat ini tengah memperdalam ilmu di kelas XI PPLG 1.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    {
      year: "2025",
      title: "Fondasi Teknologi & Home Server",
      description: "Memulai karier freelance web developer dan mendirikan Bgas Digital. Mengasah kemampuan full-stack (Laravel, React.js, Next.js). Sangat antusias mengkonfigurasi home server (Linux Armbian), meracik container Docker, dan jaringan akses jarak jauh (Cloudflare Tunnel, Tailscale).",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
        </svg>
      )
    },
    {
      year: "Jan - Mar 2026",
      title: "Ekspansi Proyek & IoT",
      description: "Menginisiasi berbagai proyek: 'Juragan Kost' (Laravel), pengembangan game 'SMECONE TOUR' di Roblox Studio (Luau), 'Price Tracker', serta 'NEXUS Bounty Hunter Registry' (React). Turut mengeksplorasi IoT kontrol akses berbasis modul ESP32-CAM & Python.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      )
    },
    {
      year: "Kehidupan Personal",
      title: "Fotografi, Olahraga & Eksplorasi",
      description: "Menyeimbangkan hidup di luar layar dengan fotografi (Sony a6000 & Mata Lensa), editing video (CapCut/Premiere), dan olahraga basket serta futsal. Sangat menyukai eksplorasi kuliner lokal, road trip antar kota, dan bangga berdialog dengan bahasa ngapak Banyumasan.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="perjalanan" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Perjalanan & Karier
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-blue-500 mx-auto"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-300 max-w-2xl mx-auto"
          >
            Jejak langkah perkembangan saya dari awal mula mengenal teknologi hingga bereksperimen dengan server dan berbagai framework modern.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Garis vertikal di tengah */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-900/50 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

          {/* Konten Timeline */}
          <div className="space-y-12 relative z-10">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Bagian Kosong untuk menyeimbangkan sisi (Desktop Only) */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Ikon Bulatan Tengah */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 border-4 border-[#01041a] shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20">
                  {item.icon}
                </div>

                {/* Card Konten */}
                <div
                  className={`w-full md:w-1/2 pl-16 md:pl-0 mt-4 md:mt-0 ${
                    index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"
                  }`}
                >
                  <div className="glass-card p-6 md:p-8 rounded-xl transform hover:-translate-y-2 transition-transform duration-300 group">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-3 border border-blue-500/30">
                      {item.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
