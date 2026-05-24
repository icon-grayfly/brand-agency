'use client';

import React from 'react';
import Link from 'next/link';
import LayoutClient from './layout-client';

export default function HomePage() {
  return (
    <LayoutClient>
      <div className="space-y-32 pb-24">
        
        {/* HERO HERO COMPONENT */}
        <section className="relative pt-20 pb-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              PREMIER INNOVATIVE MANAGEMENT HUB
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
              WE GROW GLOBAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-rose-400">BRANDS</span> &amp; PREMIUM TALENTS
            </h1>
            <p className="text-slate-400 text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono">
              We help corporate entities and creatives rediscover their market mission, design iconic product packaging models, and run high-exposure multimedia campaigns.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 font-mono text-xs uppercase tracking-wider">
              <Link href="/work" className="px-6 py-3.5 bg-slate-100 text-slate-950 font-bold hover:bg-white transition-all shadow-lg shadow-white/5">
                Explore Portfolio ↗
              </Link>
              <a href="#contact" className="px-6 py-3.5 border border-slate-800 hover:border-slate-600 text-slate-300 font-bold transition-all">
                Submit Briefing
              </a>
            </div>
          </div>

          {/* 3D FLOATING FOCUS INTERACTIVE BLOCK */}
          <div className="lg:col-span-5 relative flex justify-center z-10" style={{ perspective: '1000px' }}>
            <div className="w-full max-w-sm p-1 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <div className="bg-slate-900/90 rounded-[22px] p-6 backdrop-blur-xl border border-slate-800/40">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">// THINK-TANK STANDARD</p>
                    <h3 className="text-lg font-bold text-white mt-1">Brand Confidence Workshop</h3>
                  </div>
                  <span className="text-2xl">⚡</span>
                </div>
                <p className="text-xs font-mono text-slate-400 leading-relaxed border-l border-slate-800 pl-3">
                  Our customized structural strategy session empowers corporate entities to lock in clear mission statements, product value layouts, and scalable audience footprints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE ARCHITECTURAL CAPABILITIES */}
        <section className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// DEPLOYMENT VECTOR</span>
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">Core Service Architectures</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-4">
              <div className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded w-max">METRIC 01</div>
              <h3 className="text-lg font-bold text-white">Enterprise Product Design</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Complete private label overhaul, conceptual design testing, and tactical packaging revisions that command retail checkout attention.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all space-y-4">
              <div className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded w-max">METRIC 02</div>
              <h3 className="text-lg font-bold text-white">Multimedia Mass Channels</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Production and syndication of high-converting radio jingles, digital billboard prints, and global television media network rollouts.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-rose-500/30 transition-all space-y-4">
              <div className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded w-max">METRIC 03</div>
              <h3 className="text-lg font-bold text-white">Audience Experience Tours</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Full-scale arena experience handling, consumer sampling activations, and long-term brand equity alignment campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* 3D PERSPECTIVE NON-DISTORTED CONTACT FORM PORTAL */}
        <section id="contact" className="max-w-3xl mx-auto px-6 relative">
          <div className="rounded-3xl p-[1px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 shadow-2xl">
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-[23px] p-8 sm:p-12 border border-slate-800/60 space-y-6">
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-black text-white tracking-tight uppercase">Initiate Strategic Briefing</h2>
                <p className="text-xs text-slate-400 font-mono">Transmit parameters directly to our Lagos workspace engine.</p>
              </div>

              <form className="space-y-4 text-xs font-mono" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 uppercase tracking-wider block">Corporate Unit Name</label>
                    <input type="text" placeholder="e.g. Samsung West Africa" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-400 uppercase tracking-wider block">Official Corporate Email</label>
                    <input type="email" placeholder="partner@enterprise.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-400 uppercase tracking-wider block">Objectives Summary Brief</label>
                  <textarea rows={4} placeholder="Outline timeline metrics, market scaling challenges, and core project specifications..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none" />
                </div>
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-500 text-white font-black text-xs uppercase tracking-widest shadow-lg hover:opacity-95 transition-all">
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