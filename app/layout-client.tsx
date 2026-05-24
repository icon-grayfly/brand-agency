'use client';

import React from 'react';
import Link from 'next/link';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* ENTERPRISE FIXED NAVIGATION HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-900/60 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">STAR</span>
              <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 -mt-1">STATION</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home &amp; Experience</Link>
            <Link href="/work" className="hover:text-cyan-400 transition-colors">Our Work</Link>
            <Link href="/events" className="hover:text-cyan-400 transition-colors">Agency Events</Link>
            <Link href="/tickets" className="hover:text-cyan-400 transition-colors">Get Tickets</Link>
            <Link href="/contact" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold hover:opacity-95 transition-all shadow-md shadow-cyan-500/10">
              Start Brief ↗
            </Link>
          </nav>
        </div>
      </header>

      {/* INFINITE SLIDING MARQUEE ECOSYSTEM */}
      <div className="w-full pt-20 bg-slate-900/40 border-b border-slate-900 overflow-hidden relative select-none z-10">
        <div className="flex gap-12 overflow-hidden relative w-full Mask-Linear py-4">
          <div className="flex justify-around min-w-full shrink-0 gap-16 items-center animate-marquee whitespace-nowrap text-xs font-mono font-black text-slate-400 tracking-widest">
            <span>SAMSUNG WEST AFRICA</span>
            <span>DANGOTE PASTA METRICS</span>
            <span>TRACE NAIJA MULTIMEDIA</span>
            <span>MALTINA BRAND ACTIVATION</span>
            <span>PEAK MILK PACKAGING HOUSES</span>
            <span>GALA MEGA RETAIL LINES</span>
            <span>GINO PARTY JOLLOF CAMPAIGNS</span>
            <span>FILMONE BOX OFFICE STUDIOS</span>
          </div>
          <div className="flex justify-around min-w-full shrink-0 gap-16 items-center animate-marquee whitespace-nowrap text-xs font-mono font-black text-slate-400 tracking-widest" aria-hidden="true">
            <span>SAMSUNG WEST AFRICA</span>
            <span>DANGOTE PASTA METRICS</span>
            <span>TRACE NAIJA MULTIMEDIA</span>
            <span>MALTINA BRAND ACTIVATION</span>
            <span>PEAK MILK PACKAGING HOUSES</span>
            <span>GALA MEGA RETAIL LINES</span>
            <span>GINO PARTY JOLLOF CAMPAIGNS</span>
            <span>FILMONE BOX OFFICE STUDIOS</span>
          </div>
        </div>
      </div>

      {/* CORE VIEWPORT CHANNELS */}
      <main className="flex-grow z-10 relative">
        {children}
      </main>

      {/* AUTHENTIC BRAND FOOTER WITH ENHANCED INTEGRATION */}
      <footer className="border-t border-slate-900 bg-slate-950 py-16 px-6 z-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-9 h-9 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-black text-base">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-wider text-white">STAR</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 -mt-1">STATION</span>
            </div>
          </div>

          {/* Genuine Social Graphic Vector Matrix */}
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <div className="text-center md:text-right font-mono text-[11px] text-slate-500">
            &copy; {new Date().getFullYear()} STAR STATION COLLECTIVE. LAGOS, NIGERIA.
          </div>
        </div>
      </footer>

      {/* ICON-PERFECT FLOATING NATIVE WHATSAPP ENGAGEMENT BADGE */}
      <a 
        href="https://wa.me/2348091000449?text=Hi%20Star%20Station,%20we%20want%20to%20engage%2520your%20innovative%20branding%20and%20management%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <svg className="w-7 h-7 fill-current text-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* CORE SYSTEM CSS MARQUEE ENGINE */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 38s linear infinite;
        }
        .Mask-Linear {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>

    </div>
  );
}