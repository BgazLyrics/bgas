"use client";

import { useState, useEffect } from "react";

export default function LocalTime() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      // Format waktu untuk WIB (Asia/Jakarta)
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <span className="opacity-0">00:00:00 AM</span>;

  return (
    <div className="flex items-center gap-2" title="Waktu Lokal Purwokerto, Jawa Tengah">
      <div className="relative flex items-center justify-center w-2 h-2">
        <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
        <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
      </div>
      <span className="text-xs sm:text-sm font-mono text-gray-300 tracking-wider">
        Purwokerto, ID <span className="text-white font-medium ml-1">{time}</span>
      </span>
    </div>
  );
}
