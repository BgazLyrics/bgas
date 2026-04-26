"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="kontak" className="py-24 bg-black/10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Mari Bekerja Sama</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Punya ide atau proyek? Ceritakan kepada saya langsung.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST" className="max-w-xl mx-auto">
            <input type="hidden" name="access_key" value="9f652473-0c0d-448b-be0f-c152b5e65fe2" />

            <h3 className="text-xl font-semibold text-white mb-6">Kirim Pesan Langsung</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                name="nama" 
                placeholder="Nama Anda" 
                required
                className="w-full p-3 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Anda" 
                required
                className="w-full p-3 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
              />
            </div>

            <textarea 
              id="contact-message" 
              name="pesan" 
              placeholder="Pesan Anda" 
              rows="5" 
              required
              className="w-full p-3 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white mb-4"
            ></textarea>
            
            <input type="hidden" name="redirect" value="https://portofolio.bgas.my.id/page/index.html" />
            
            <button 
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Kirim Pesan
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
