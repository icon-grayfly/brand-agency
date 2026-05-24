'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clientsMarquee = [
    "PEAK MILK", "TRACE NAIJA", "MALTINA", "FILM ONE", "MNET", 
    "GOTV", "MISS NIGERIA", "LAGOON HOSPITAL", "KIA MOTORS", "BAMA",
    "ARIK AIR", "ZENITH BANK", "MULTICHOICE", "DANGOTE PASTA", "NIGERIAN BREWERIES"
  ];

  const navLinks = [
    { label: "OUR WORK", path: "/work" },
    { label: "AGENCY EVENTS", path: "/events" },
    { label: "GET TICKETS", path: "/tickets" },
    { label: "CONTACT US", path: "/contact" }
  ];

  return (
    <div className="bg-[#0b0c10] text-white antialiased overflow-x-hidden flex flex-col min-h-screen selection:bg-[#25D366] selection:text-black">
      
      {/* ENTERPRISE FIXED HEADER NAVIGATION */}
      <header className={`w-full fixed top-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-[#0b0c10]/90 backdrop-blur-2xl border-white/5 h-20 shadow-xl' 
          : 'bg-transparent border-white/[0.02] h-24'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-white/[0.01] border border-white/10 group-hover:border-[#25D366]/40 transition-all duration-300 rounded-sm">
              <Image 
                src="/logo.png" 
                alt="Star Station Logo" 
                width={26}
                height={26}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter text-white leading-none uppercase">
                STAR STATION<span className="text-brandRed">.</span>
              </span>
              <span className="text-[8px] font-mono tracking-widest text-white/30 mt-1 uppercase">INNOVATIVE MANAGEMENT</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-black uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`transition-colors py-2 relative group font-mono tracking-widest ${
                  pathname === link.path ? 'text-[#25D366]' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-[#25D366] transition-all duration-300 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link href="/contact" className="bg-gradient-to-r from-[#25D366] to-emerald-600 text-black px-5 py-3 rounded-none hover:brightness-110 shadow-lg shadow-[#25D366]/10 transition-all font-mono font-black tracking-widest text-[10px]">
              START A PROJECT ↗
            </Link>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-white focus:outline-none border border-white/10 px-4 py-2 text-[10px] font-mono font-black tracking-widest hover:border-[#25D366] transition-colors"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[inherit] bg-[#0b0c10]/95 backdrop-blur-2xl border-b border-white/5 px-6 py-8 space-y-4 text-xs font-mono font-black uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-white/60 py-3 border-b border-white/5 hover:text-[#25D366] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block bg-[#25D366] text-black text-center py-3.5 font-black mt-4">
              START A PROJECT ↗
            </Link>
          </div>
        )}
      </header>

      {/* CONTINUOUS BRAND TICKER RUNNER */}
      <div className="w-full pt-24 bg-neutral-950 border-b border-white/5 py-3.5 mt-24 overflow-hidden select-none z-10 relative">
        <div className="animate-marquee">
          {[...clientsMarquee, ...clientsMarquee].map((client, idx) => (
            <span key={idx} className="mx-10 text-[10px] font-black uppercase tracking-widest font-mono text-white/20 flex items-center gap-3">
              <span className="w-1 h-1 bg-brandRed rounded-full inline-block" /> {client}
            </span>
          ))}
        </div>
      </div>

      <main className="flex-grow z-10 relative">
        {children}
      </main>

      {/* FOOTER LAYER WITH HIGH CONTRAST ORIGINAL SOCIAL SVGS */}
      <footer className="w-full bg-black border-t border-white/5 pt-24 pb-12 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-4">
            <div className="font-black text-xl tracking-tighter text-white">STAR STATION<span className="text-brandRed">.</span></div>
            <p className="text-xs text-white/40 font-mono leading-relaxed max-w-xs">
              Growing ambitious brands and premium talent through structural packaging, video commercial development, and nationwide activations.
            </p>
            
            {/* GENUINE BRAND SOCIAL MEDIA SVG MATRIX */}
            <div className="flex items-center space-x-3 pt-2">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#25D366] hover:border-[#25D366] transition-all" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#25D366] hover:border-[#25D366] transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#25D366] hover:border-[#25D366] transition-all" aria-label="Twitter X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#25D366] hover:border-[#25D366] transition-all" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#25D366] font-mono">// LAGOS OFFICE</h4>
            <p className="text-xs text-white/60 font-mono leading-relaxed">
              2a Oluwatosin Street<br />
              Oral Estate, Lekki-Epe Expressway,<br />
              Lagos, Nigeria
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white font-mono">// GET IN TOUCH</h4>
            <p className="text-xs text-white/60 font-mono leading-relaxed">
              trystarstation@gmail.com<br />
              +234 809 100 0449<br />
              +234 903 689 8584
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brandRed font-mono">// PROTECTION MATRIX</h4>
            <p className="text-xs text-white/40 font-mono italic leading-relaxed">
              Data protected via automated global SSL layer authentication tokens.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest text-white/30 font-mono">
          <p>&copy; 2026 STAR STATION. ALL CHANNELS SECURED NATIVELY.</p>
        </div>
      </footer>

      {/* ICON-PERFECT FLOATING WHATSAPP CHAT BADGE */}
      <a 
        href="https://wa.me/2348091000449?text=Hi%20Star%20Station,%20we%20want%20to%20engage%20your%20innovative%20branding%20and%20management%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Absolute Ping Indicator */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        {/* Accurate WhatsApp Visual SVG Vector */}
        <svg className="w-7 h-7 fill-current text-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </div>
  );
}