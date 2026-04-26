"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/30 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-gray-400">
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Bagassevirional</h3>
            <p className="text-sm">
              Mewujudkan ide menjadi realita digital pemikiran yang logika, kritis, dan sehat.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Jelajahi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#tentang" className="hover:text-blue-400 transition-colors">Tentang</Link></li>
              <li><Link href="#layanan" className="hover:text-blue-400 transition-colors">Keahlian</Link></li>
              <li><Link href="#portfolio" className="hover:text-blue-400 transition-colors">Portofolio</Link></li>
              <li><Link href="#kontak" className="hover:text-blue-400 transition-colors">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ikuti Saya</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bagasevirional/" aria-label="Instagram" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217 1.79.465-2.428A4.883 4.883 0 013.678 3.678 4.915 4.915 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 2a9.922 9.922 0 00-4.112.06c-1.01.047-1.58.21-1.99.39-.43.18-.76.41-1.07.73a2.91 2.91 0 00-.73 1.07c-.18.41-.343.98-.39 1.99-.05 1.05-.06 1.38-.06 4.12s.01 3.07.06 4.12c.047 1.01.21 1.58.39 1.99.18.43.41.76.73 1.07a2.91 2.91 0 001.07.73c.41.18.98.343 1.99.39 1.05.05 1.38.06 4.12.06s3.07-.01 4.12-.06c1.01-.047 1.58-.21 1.99-.39.43-.18.76.41 1.07-.73a2.91 2.91 0 00.73-1.07c.18-.41.343-.98.39-1.99.05-1.05.06-1.38.06-4.12s-.01-3.07-.06-4.12c-.047-1.01-.21-1.58-.39-1.99a2.91 2.91 0 00-.73-1.07 2.91 2.91 0 00-1.07-.73c-.41-.18-.98-.343-1.99-.39C15.07 4.01 14.73 4 12 4zm0 3.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM12 15a3 3 0 110-6 3 3 0 010 6zm4.75-8.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@bgazlyrics" aria-label="Youtube" className="text-gray-400 hover:text-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.422a4.234 4.234 0 0 0-2.992-2.992C15.25 2 12 2 12 2s-3.25 0-4.819.43a4.234 4.234 0 0 0-2.992 2.992C2 7.009 2 12 2 12s0 4.991.431 6.578a4.234 4.234 0 0 0 2.992 2.992C7.009 22 12 22 12 22s4.991 0 6.578-.43a4.234 4.234 0 0 0 2.992-2.992C22 16.991 22 12 22 12s0-4.991-.43-6.578ZM9.75 15.5V8.5l6 3.5-6 3.5Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com/BgazLyrics" aria-label="Github" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Bagassevirional. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
