'use client';

import React from 'react';
import Link from 'next/link';
import LayoutClient from './layout-client';

export default function HomePage() {
  return (
    <LayoutClient>
      <div className="space-y-32 pb-32">
        
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              TOP-RATED INNOVATIVE MANAGEMENT HUB
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] text-white uppercase">
              WE GROW <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-rose-400">BRANDS</span> &amp; COOPERATE BODIES
            </h1>
            <p className="text-slate-400 text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono">
              We help premium companies clarify market parameters, redesign product packaging layouts, and deploy high-budget multimedia campaigns that win consumer trust.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 font-mono text-xs font-bold uppercase tracking-wider">
              <Link href="/work" className="px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-lg shadow-white/5">
                Explore Portfolio ↗
              </Link>
              <Link href="/contact" className="px-6 py-3.5 border border-slate-800 hover:border-slate-600 text-slate-300 transition-all">
                Discuss Brief
              </Link>
            </div>
          </div>

          {/* 3D INTERACTIVE CARD INTERFACE */}
          <div className="lg:col-span-5 relative flex justify-center z-10" style={{ perspective: '1000px' }}>
            <div className="w-full max-w-sm p-1 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-indigo-950/40">
              <div className="bg-slate-900/90 rounded-[22px] p-6 backdrop-blur-xl border border-slate-800/40">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">// PERFORMANCE MATRIX</p>
                    <h3 className="text-lg font-bold text-white mt-1">Brand Strategy Framework</h3>
                  </div>
                  <span className="text-2xl">⚡</span>
                </div>
                <p className="text-xs font-mono text-slate-400 leading-relaxed border-l border-slate-800 pl-3">
                  Our core processes ensure your structural entity clearly states its unique business mission, market values, and audience growth layout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RE-ENGINEERED SERVICES ARCHITECTURE */}
        <section className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// CORE CAPABILITIES</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Our Service Architectures</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-4">
              <div className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded w-max">METRIC 01</div>
              <h3 className="text-lg font-bold text-white">Enterprise Packaging Layouts</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Transforming physical retail properties through concept mapping. We overhaul labels to match active consumer expectations.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all space-y-4">
              <div className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded w-max">METRIC 02</div>
              <h3 className="text-lg font-bold text-white">Multimedia Mass Campaigns</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                High-budget video commercials and clear radio jingles designed to scale visibility across major national distribution channels.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-rose-500/30 transition-all space-y-4">
              <div className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded w-max">METRIC 03</div>
              <h3 className="text-xs font-bold text-white">Large Scale Experience Tours</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Flawless physical experience architecture, linking modern media networks with active live audience retention loops.
              </p>
            </div>
          </div>
        </section>

        {/* 3D CONTACT SECURE WORKSPACE BRIEFING FORM */}
        <section id="contact" className="max-w-3xl mx-auto px-6">
          <div className="rounded-3xl p-[1px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 shadow-2xl" style={{ perspective: '1000px' }}>
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-[23px] p-8 border border-slate-800/60 space-y-6">
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-black text-white tracking-tight uppercase">Initiate Strategic Briefing</h2>
                <p className="text-xs text-slate-400 font-mono">Connect with our Lagos office pipelines to launch your brand track.</p>
              </div>

              <form className="space-y-4 text-xs font-mono" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 uppercase tracking-wider block">Corporate Identity Name</label>
                    <input type="text" placeholder="e.g. Samsung West Africa" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-400 uppercase tracking-wider block">Official Network Email</label>
                    <input type="email" placeholder="partner@enterprise.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-400 uppercase tracking-wider block">Objectives Summary Brief</label>
                  <textarea rows={4} placeholder="Outline timeline metrics, market scaling challenges, and structural values..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none" />
                </div>
                <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-500 text-white font-black text-xs uppercase tracking-widest shadow-lg hover:opacity-95 transition-opacity">
                  Transmit Corporate Briefing Request
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </LayoutClient>
  );
}