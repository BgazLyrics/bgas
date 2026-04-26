"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="tentang" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 leading-relaxed text-lg">
            Bagas Seviardana Rionaldi. Saya merupakan seorang pelajar yang penuh
            semangat dan sangat tertarik dengan dunia teknologi, khususnya dalam
            pemrograman dan pengembangan perangkat lunak. Saat ini saya
            bersekolah di SMK Negeri 1 Purwokerto Jurusan Pengembangan Perangkat
            Lunak dan Gim. Setiap hari di sekolah tersebut memberikan tantangan
            baru dan kesempatan untuk belajar hal-hal yang menarik, dan saya
            ingin berbagi perjalanan ini dengan menyenangkan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
