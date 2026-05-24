'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Elite real-world brand credentials pulled straight from company documentation
  const clientsMarquee = [
    "PEAK MILK", "TRACE NAIJA", "MALTINA", "FILM ONE", "MNET", 
    "GOTV", "MISS NIGERIA", "LAGOON HOSPITAL", "KIA MOTORS", "BAMA",
    "ARIK AIR", "ZENITH BANK", "MULTICHOICE", "DANGOTE PASTA", "NIGERIAN BREWERIES"
  ];

  return (
    <div className="bg-[#0f1115] text-white antialiased overflow-x-hidden flex flex-col min-h-screen selection:bg-brandGreen selection:text-black">
      
      {/* 1. HIGH-TECH HEADER (AKQA Architecture + Pentagram Clarity) */}
      <header className="w-full bg-[#0f1115]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
      {/* Logo Connection Block */}
<Link href="/" className="flex items-center gap-3 group">
  <div className="relative w-8 h-8 shrink-0 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-brandGreen transition-colors rounded-sm">
    <Image 
      src="/logo.png" 
      alt="Star Station Logo" 
      width={24}
      height={24}
      className="object-contain"
      priority
    />
  </div>
  <span className="font-black text-xl tracking-tighter text-white group-hover:text-brandGreen transition-colors uppercase">
    STAR STATION<span className="text-brandRed font-serif">.</span>
  </span>
</Link>
          
          {/* Main Navigation Matrix */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-black uppercase tracking-widest">
            <Link href="/#manifesto" className="text-white/70 hover:text-white transition-colors">THE MANIFESTO</Link>
            <Link href="/#portfolio" className="text-white/70 hover:text-white transition-colors">CAPABILITIES</Link>
            <Link href="/#contact" className="bg-brandGreen text-black px-5 py-2.5 rounded-sm hover:bg-brandRed hover:text-white transition-all duration-300 font-black">
              GET IN TOUCH
            </Link>
          </nav>

          {/* Interactive Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white focus:outline-none border border-white/10 px-3 py-1.5 rounded-sm text-[10px] font-black tracking-widest hover:border-brandGreen transition-colors"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile Dropdown Panel Container */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0f1115] px-6 py-6 space-y-4 text-xs font-black uppercase tracking-widest">
            <Link href="/#manifesto" onClick={() => setIsMenuOpen(false)} className="block text-white/70 py-2 border-b border-white/5">THE MANIFESTO</Link>
            <Link href="/#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-white/70 py-2 border-b border-white/5">CAPABILITIES</Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block bg-brandGreen text-black text-center py-2.5 rounded-sm">GET IN TOUCH</Link>
          </div>
        )}
      </header>

      {/* 2. CONTINUOUS PEDIGREE MARQUEE (Vaynermedia Cultural Hook Layout) */}
      <div className="w-full bg-neutral-900 border-b border-white/10 py-3.5 overflow-hidden select-none">
        <div className="animate-marquee">
          {[...clientsMarquee, ...clientsMarquee].map((client, idx) => (
            <span key={idx} className="mx-8 text-[11px] font-black uppercase tracking-widest font-mono text-white/40 flex items-center gap-2">
              <span className="text-brandGreen">✦</span> {client}
            </span>
          ))}
        </div>
      </div>

      {/* 3. CORE ROUTE ROUTER CONTENT PLUG-IN LAYEER */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 4. HIGH-CONTRAST GLOBAL AGENCY FOOTER (Droga5 Minimalist Layout) */}
      <footer className="w-full bg-neutral-950 border-t border-white/10 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-brandGreen">// HUB VECTOR</h4>
            <p className="text-xs text-white/50 font-mono leading-relaxed">
              2a Oluwatosin Street<br />
              Oral Estate, Lagos, Nigeria
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">// DATA PIPELINES</h4>
            <p className="text-xs text-white/50 font-mono leading-relaxed">
              trystarstation@gmail.com<br />
              +234 809 100 0449<br />
              +234 903 689 8584
            </p>
          </div>
          
          <div className="md:text-right flex flex-col justify-between">
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase tracking-widest text-brandRed">// PHILOSOPHY</h4>
              <p className="text-xs text-white/40 italic font-light max-w-sm md:ml-auto leading-relaxed">
                "The future belongs to the uncommon. We exist to reignite the potential within restless brands by challenging common thinking."
              </p>
            </div>
          </div>

        </div>

        {/* Global Security Ledger Bar */}
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/30">
          <p className="font-mono font-light">&copy; 2026 STAR STATION INC. ALL WORKSTATION PIPELINES SECURED.</p>
          <div className="flex space-x-6 font-mono">
            <a href="#" className="hover:text-brandGreen transition-colors">OPERATIONAL_CHARTER</a>
            <a href="#" className="hover:text-brandRed transition-colors">GLOBAL_ACCREDITATION</a>
          </div>
        </div>
      </footer>

    </div>
  );
}