'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const clientsMarquee = [
    "PEAK MILK", "TRACE NAIJA", "MALTINA", "FILM ONE", "MNET", 
    "GOTV", "MISS NIGERIA", "LAGOON HOSPITAL", "KIA MOTORS", "BAMA",
    "ARIK AIR", "ZENITH BANK", "MULTICHOICE", "DANGOTE PASTA", "NIGERIAN BREWERIES"
  ];

  const navLinks = [
    { label: "THE MANIFESTO", path: "/#manifesto" },
    { label: "CAPABILITIES", path: "/#portfolio" },
    { label: "AGENCY EVENTS", path: "/events" },
    { label: "TICKET GATEWAY", path: "/tickets" },
    { label: "CONTACT HUB", path: "/contact" }
  ];

  return (
    <div className="bg-[#0b0c10] text-white antialiased overflow-x-hidden flex flex-col min-h-screen selection:bg-brandGreen selection:text-black">
      
      {/* ELITE GLASS HEADER (AKQA High-Tech Fluid Identity) */}
      <header className="w-full bg-[#0b0c10]/70 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-white/[0.02] border border-white/10 group-hover:border-brandGreen/50 transition-all duration-300 rounded-sm shadow-inner">
              <Image 
                src="/logo.png" 
                alt="Star Station Logo" 
                width={28}
                height={28}
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-white leading-none uppercase group-hover:text-brandGreen transition-colors">
                STAR STATION<span className="text-brandRed">.</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-white/40 mt-1 uppercase">INNOVATIVE MANAGEMENT</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-black uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`transition-colors py-2 relative group tracking-wider ${
                  pathname === link.path ? 'text-brandGreen' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brandGreen transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link href="/contact" className="bg-gradient-to-r from-brandGreen to-emerald-600 text-black px-6 py-3 rounded-none hover:brightness-110 shadow-lg shadow-brandGreen/10 transition-all font-black tracking-widest text-[11px]">
              ENGAGE VECTOR
            </Link>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden text-white focus:outline-none border border-white/10 px-4 py-2 text-[10px] font-black tracking-widest hover:border-brandGreen transition-colors"
          >
            {isMenuOpen ? "CLOSE INTERFACE" : "MENU INTERFACE"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/5 bg-[#0b0c10]/95 backdrop-blur-2xl px-6 py-8 space-y-4 text-sm font-black uppercase tracking-widest animate-fadeIn">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-white/70 py-3 border-b border-white/5 hover:text-brandGreen"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block bg-brandGreen text-black text-center py-3.5 font-black mt-6">
              ENGAGE VECTOR
            </Link>
          </div>
        )}
      </header>

      {/* CONTINUOUS PEDIGREE MARQUEE */}
      <div className="w-full bg-neutral-950 border-b border-white/5 py-4 overflow-hidden select-none">
        <div className="animate-marquee">
          {[...clientsMarquee, ...clientsMarquee].map((client, idx) => (
            <span key={idx} className="mx-10 text-[11px] font-black uppercase tracking-widest font-mono text-white/30 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-brandGreen rounded-full inline-block" /> {client}
            </span>
          ))}
        </div>
      </div>

      <main className="flex-grow">
        {children}
      </main>

      {/* HIGH-END INDUSTRIAL AGENCY FOOTER (Pentagram Typography Grid) */}
      <footer className="w-full bg-black border-t border-white/5 pt-20 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brandGreen/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <div className="font-black text-lg tracking-tighter text-white">STAR STATION<span className="text-brandRed">.</span></div>
            <p className="text-xs text-white/40 font-mono leading-relaxed max-w-xs">
              Premier innovative management firm driving high-impact brand strategies, package engineering, and elite media production globally.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brandGreen">// HUB VECTOR</h4>
            <p className="text-xs text-white/60 font-mono leading-relaxed">
              2a Oluwatosin Street<br />
              Oral Estate, Lekki-Epe Expressway,<br />
              Lagos, Nigeria
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">// DATA PIPELINES</h4>
            <p className="text-xs text-white/60 font-mono leading-relaxed space-y-1">
              <span className="block text-white/30">SECURE MAIL:</span> trystarstation@gmail.com<br />
              <span className="block text-white/30 mt-1">HOTLINE VECTORS:</span> +234 809 100 0449<br />
              +234 903 689 8584
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brandRed">// PHILOSOPHY ENGINE</h4>
            <p className="text-xs text-white/40 italic font-mono leading-relaxed">
              "We challenge common frameworks to unlock unmapped execution metrics across global pipelines."
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/30 font-mono">
          <p className="font-light">&copy; 2026 STAR STATION INC. ALL WORKSTATIONS SYNCED IN REAL-TIME.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brandGreen transition-colors">OPERATIONAL_CHARTER</a>
            <a href="#" className="hover:text-brandRed transition-colors">GLOBAL_ACCREDITATION</a>
          </div>
        </div>
      </footer>

    </div>
  );
}