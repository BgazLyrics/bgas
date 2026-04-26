"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="layanan" className="py-24 bg-black/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Kemampuan Skill
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-blue-500 mx-auto"
          ></motion.div>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Web Development */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
              <p className="text-gray-400">
                Pengembangan situs web dan dapat menggunakan teknologi terkini.
              </p>
            </div>
          </motion.div>

          {/* Video Editor */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732zM9 5l-7 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Video Editor</h3>
              <p className="text-gray-300">
                Memodifikasi clip by clip yang menciptakan sesuatu yang baru.
              </p>
            </div>
          </motion.div>

          {/* Fotografer & Videografer */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fotografer & Videografer
              </h3>
              <p className="text-gray-400">
                Mengabadikan momen melalui lensa dengan komposisi yang menarik.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
