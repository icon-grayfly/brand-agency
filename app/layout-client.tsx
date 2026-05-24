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
    { label: "WORK HEDGEROW", path: "/work" },
    { label: "AGENCY EVENTS", path: "/events" },
    { label: "ACCESS GATEWAY", path: "/tickets" },
    { label: "CONTACT HUB", path: "/contact" }
  ];

  return (
    <div className="bg-[#0b0c10] text-white antialiased overflow-x-hidden flex flex-col min-h-screen selection:bg-brandGreen selection:text-black">
      
      {/* ELITE FLOATING HEADER GRID */}
      <header className={`w-full fixed top-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-[#0b0c10]/80 backdrop-blur-2xl border-white/5 h-20 shadow-xl' 
          : 'bg-transparent border-white/[0.02] h-24'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-white/[0.01] border border-white/10 group-hover:border-brandGreen/40 transition-all duration-300 rounded-sm">
              <Image 
                src="/logo.png" 
                alt="Star Station Logo" 
                width={26}
                height={26}
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter text-white leading-none uppercase">
                STAR STATION<span className="text-brandRed">.</span>
              </span>
              <span className="text-[8px] font-mono tracking-widest text-white/30 mt-1 uppercase">PREMIER CREATIVE BLUEPRINT</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-black uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`transition-colors py-2 relative group font-mono tracking-widest ${
                  pathname === link.path ? 'text-brandGreen' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-brandGreen transition-all duration-300 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link href="/contact" className="bg-gradient-to-r from-brandGreen to-emerald-600 text-black px-5 py-3 rounded-none hover:brightness-110 shadow-lg shadow-brandGreen/10 transition-all font-mono font-black tracking-widest text-[10px]">
              ENGAGE PIPELINE ↗
            </Link>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-white focus:outline-none border border-white/10 px-4 py-2 text-[10px] font-mono font-black tracking-widest hover:border-brandGreen transition-colors"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile Submenu Interface */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[inherit] bg-[#0b0c10]/95 backdrop-blur-2xl border-b border-white/5 px-6 py-8 space-y-4 text-xs font-mono font-black uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-white/60 py-3 border-b border-white/5 hover:text-brandGreen transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block bg-brandGreen text-black text-center py-3.5 font-black mt-4">
              ENGAGE PIPELINE ↗
            </Link>
          </div>
        )}
      </header>

      {/* INFINITE RUNNING MARQUEE SECTION */}
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

      {/* CORE INDUSTRIAL COMPLIANT FOOTER */}
      <footer className="w-full bg-black border-t border-white/5 pt-24 pb-12 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-4">
            <div className="font-black text-xl tracking-tighter text-white">STAR STATION<span className="text-brandRed">.</span></div>
            <p className="text-xs text-white/40 font-mono leading-relaxed max-w-xs">
              Transforming enterprise structures, design system patterns, and global media campaigns for absolute market capture.
            </p>
            {/* MINIMALIST SOCIAL CHANNELS MATRIX */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs font-mono text-white/40 hover:text-brandGreen hover:border-brandGreen transition-all" title="Instagram Link">IG</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs font-mono text-white/40 hover:text-brandGreen hover:border-brandGreen transition-all" title="LinkedIn Business Profile">LN</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs font-mono text-white/40 hover:text-brandGreen hover:border-brandGreen transition-all" title="Twitter Channel">X</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs font-mono text-white/40 hover:text-brandGreen hover:border-brandGreen transition-all" title="YouTube Showcase">YT</a>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brandGreen font-mono">// HEADQUARTERS HUB</h4>
            <p className="text-xs text-white/60 font-mono leading-relaxed">
              2a Oluwatosin Street<br />
              Oral Estate, Lekki-Epe Expressway,<br />
              Lagos, Nigeria
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white font-mono">// SECURE CHANNELS</h4>
            <p className="text-xs text-white/60 font-mono leading-relaxed">
              trystarstation@gmail.com<br />
              +234 809 100 0449<br />
              +234 903 689 8584
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brandRed font-mono">// SECURITY ACCESS</h4>
            <p className="text-xs text-white/40 font-mono italic leading-relaxed">
              Operational network monitored via secure, automated SSL handshake layers globally.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest text-white/30 font-mono">
          <p>&copy; 2026 STAR STATION INC. NETWORK FULLY SYNCED AND AUTHENTICATED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brandGreen transition-colors">COMPLIANCE_MAP</a>
            <a href="#" className="hover:text-brandRed transition-colors">SSL_CREDENTIALS</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT CHATBOT WIDGET (Appears dynamically across all child routes) */}
      <a 
        href="https://wa.me/2348091000449?text=Hi%20Star%20Station,%20we%20are%20looking%20to%20engage%20your%20innovative%20management%20and%20branding%20infrastructure."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-black px-4 py-3 rounded-none shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-all duration-300 font-mono text-[11px] font-black tracking-wider group"
        aria-label="Connect via WhatsApp Corporate Channel"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
        </span>
        LIVE OPERATIONAL SYNC
      </a>

    </div>
  );
}