"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to BagasOS v2.0." },
    { type: "system", content: "Type 'help' to see available commands." },
    { type: "system", content: "----------------------------------------" }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomEvent = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("openTerminal", handleCustomEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("openTerminal", handleCustomEvent);
    };
  }, [isOpen]);

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (!trimmedCmd) return null;

    switch (trimmedCmd) {
      case "help":
        return "Commands: \n  whoami    : Menampilkan identitas\n  projects  : Daftar proyek\n  skills    : Stack teknologi\n  clear     : Membersihkan layar\n  sudo      : [Akses Root]\n  exit      : Menutup terminal";
      case "whoami":
        return "Nama      : Bagas Seviardana Rionaldi\nPeran     : Full-Stack Web Developer & IT Enthusiast\nLokasi    : Purwokerto, Jawa Tengah\nPendidikan: SMK N 1 Purwokerto (PPLG)";
      case "projects":
        return "Daftar Proyek:\n  [1] SMECONE TOUR (Roblox Lua)\n  [2] Juragan Kost (Laravel)\n  [3] NEXUS Bounty Hunter (React)\n  [4] Price Tracker (React)\n  [5] Web Edukasi Hacking";
      case "skills":
        return "Teknologi yang Dikuasai:\n  - Frontend : React, Next.js, TailwindCSS\n  - Backend  : Laravel, Node.js\n  - DevOps   : Docker, Linux (Armbian), Cloudflare Tunnels\n  - Lainnya  : IoT ESP32, Luau, Adobe Premiere Pro";
      case "clear":
        setHistory([]);
        return null;
      case "sudo":
        return "Akses ditolak: Insiden ini telah dilaporkan kepada administrator server. Nice try hacker :)";
      case "exit":
        setIsOpen(false);
        return null;
      default:
        return `bash: ${trimmedCmd}: command not found. Ketik 'help' untuk daftar perintah.`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Tambahkan perintah user ke history
    const newHistory = [...history, { type: "user", content: `root@bagas-server:~$ ${input}` }];
    
    // Proses perintah
    const output = processCommand(input);
    if (output) {
      newHistory.push({ type: "system", content: output });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-3xl h-[60vh] min-h-[400px] bg-[#0c0c0c]/95 backdrop-blur-xl rounded-xl border border-gray-700/50 shadow-2xl flex flex-col overflow-hidden font-mono text-sm sm:text-base ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Window Header (Mac Style) */}
            <div className="flex items-center px-4 py-3 bg-[#1e1e1e] border-b border-gray-800">
              <div className="flex gap-2">
                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-red-500 flex items-center justify-center group">
                    <span className="opacity-0 group-hover:opacity-100 text-[8px] text-red-900">x</span>
                </button>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="mx-auto text-gray-400 text-xs tracking-wider flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M4 18h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                root@bagas-server:~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto text-green-400 selection:bg-green-400 selection:text-black cursor-text" onClick={() => inputRef.current?.focus()}>
              {history.map((line, i) => (
                <div key={i} className={`mb-2 ${line.type === "user" ? "text-blue-300" : "text-green-400 whitespace-pre-wrap leading-relaxed"}`}>
                  {line.content}
                </div>
              ))}
              
              <form onSubmit={handleSubmit} className="flex mt-2 items-center">
                <span className="text-purple-400 mr-2">root@bagas-server:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-white caret-white"
                  autoComplete="off"
                  spellCheck="false"
                  autoFocus
                />
              </form>
              <div ref={terminalEndRef} className="h-4" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
