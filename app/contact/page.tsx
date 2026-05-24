'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      {/* Structural Data Column (Droga5 Minimalist Layout Style) */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono text-brandGreen font-black tracking-widest block mb-2">// TRANSFORMATION GATEWAY</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">INITIATE GLOBAL SYNCHRONIZATION</h1>
        </div>
        <p className="text-sm text-white/50 font-mono leading-relaxed max-w-lg">
          Connect directly with our creative team. Whether you require structural concept packaging redesigns, end-to-end artist development infrastructure, or conversion media campaigns, our operations network is ready to scale.
        </p>

        <div className="border-t border-white/5 pt-8 space-y-6 text-xs font-mono">
          <div>
            <span className="text-white/20 block text-[10px] tracking-widest mb-1">PHYSICAL SECURE OPERATIONS BASE:</span>
            <span className="text-white font-black uppercase text-sm">2a Oluwatosin Street, Oral Estate, Lekki, Lagos, Nigeria</span>
          </div>
          <div>
            <span className="text-white/20 block text-[10px] tracking-widest mb-1">DIRECT TELECOMMUNICATION CHANNELS:</span>
            <span className="text-white font-black text-sm block">+234 809 100 0449</span>
            <span className="text-white font-black text-sm block">+234 903 689 8584</span>
          </div>
          <div>
            <span className="text-white/20 block text-[10px] tracking-widest mb-1">CLOUD MAIL ROUTE ID:</span>
            <span className="text-white font-black text-sm">trystarstation@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Communications Submission Interface Panel */}
      <div className="bg-neutral-950 border border-white/5 p-8 md:p-12 rounded-none relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandGreen to-brandRed" />
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 font-mono text-xs">
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">01 // INDIVIDUAL OR BRAND CONTEXT NAME</label>
            <input type="text" className="w-full bg-white/[0.02] border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-brandGreen transition-colors font-mono" placeholder="Ex. Dangote Pasta Corporate / Peak Corp" />
          </div>
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">02 // DATA INTAKE COMMUNICATION MAIL</label>
            <input type="email" className="w-full bg-white/[0.02] border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-brandGreen transition-colors font-mono" placeholder="yourmail@domain.com" />
          </div>
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">03 // STRATEGIC PIPELINE REQUIREMENT CATEGORY</label>
            <select className="w-full bg-[#0b0c10] border border-white/10 rounded-none p-4 text-white/70 focus:outline-none focus:border-brandGreen transition-colors font-mono uppercase">
              <option>BRAND STRATEGY & BLUEPRINTS DEVELOPMENT</option>
              <option>CREATIVE CONTENT & TELEVISION COMMERCIAL PRODUCTION</option>
              <option>EVENT ACTIVATION & ARTIST MANAGEMENT MATRIX</option>
              <option>PACKAGE REDESIGN & BLUEPRINT CONCEPT DESIGN</option>
            </select>
          </div>
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">04 // TRANSACTIONAL ENGAGEMENT MAP SCOPE</label>
            <textarea rows={4} className="w-full bg-white/[0.02] border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-brandGreen transition-colors font-mono" placeholder="Outline your parameters, challenges, and unmapped potential targets..."></textarea>
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-brandGreen to-emerald-600 text-black text-center py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all text-xs">
            SUBMIT DATA PARAMETERS TO HUB ↗
          </button>
        </form>
      </div>

    </div>
  );
}