'use client';

import React, { useState } from 'react';
import LayoutClient from '../layout-client';

export default function EventsPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const tickets = [
    {
      tag: "ARENA TOUR",
      date: "JUNE 21",
      title: "AY Live: Happiness Concert",
      desc: "Full execution alongside Maltina and premium beverage pipeline distribution frameworks live inside the Transcorp Hilton Arena, Abuja.",
      meta: "VENUE: TRANSCORP HILTON ABUJA",
      badge: "SOLD OUT",
      accent: "border-cyan-500/30 text-cyan-400"
    },
    {
      tag: "MEDIA ECOSYSTEM",
      date: "ANNUAL GRID",
      title: "Trace Urban Strategic Partnership",
      desc: "Star Station syncs directly with the international Trace Afro-urban media grid, deploying unified consumer comedy tracking activations nationwide.",
      meta: "NETWORKS: TRACE TV / MTV BASE",
      badge: "ACTIVE NODES",
      accent: "border-indigo-500/30 text-indigo-400"
    }
  ];

  return (
    <LayoutClient>
      <div className="py-12 max-w-7xl mx-auto px-6 space-y-16 pb-32">
        <div className="border-b border-slate-900 pb-6">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">// REAL-WORLD ACTIVATIONS</span>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">AGENCY EXPERIENCES</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tickets.map((ticket, idx) => (
            <div 
              key={idx} 
              onClick={() => setLightbox(ticket.title.toUpperCase())}
              className="bg-slate-900/30 border border-slate-800 rounded-3xl flex flex-col justify-between relative group hover:border-slate-700 hover:-translate-y-1 transition-all shadow-xl cursor-zoom-in"
            >
              {/* Ticket Punch Cutout Geometry */}
              <div className="absolute top-1/2 -left-3 w-6 h-6 bg-slate-950 rounded-full border-r border-slate-800 transform -translate-y-1/2" />
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-slate-950 rounded-full border-l border-slate-800 transform -translate-y-1/2" />

              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className={`px-2 py-0.5 rounded bg-slate-900 border ${ticket.accent} font-bold`}>{ticket.tag}</span>
                  <span className="text-slate-500">{ticket.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{ticket.title}</h3>
                <p className="text-xs text-slate-400 font-mono leading-relaxed">{ticket.desc}</p>
                <span className="inline-block text-[9px] font-mono text-cyan-400 underline opacity-0 group-hover:opacity-100 transition-opacity">🔎 CLICK TICKETS TO EXPAND</span>
              </div>

              <div className="px-8 py-3.5 bg-slate-900/60 border-t border-slate-800/80 rounded-b-3xl flex justify-between items-center font-mono text-[10px] text-slate-400">
                <span>{ticket.meta}</span>
                <span className="font-bold text-slate-200">{ticket.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX LIGHT MODAL SHIELD ENGINE */}
        {lightbox && (
          <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center z-50 p-6" onClick={() => setLightbox(null)}>
            <button className="absolute top-6 right-6 bg-slate-900 border border-slate-800 hover:border-rose-500/50 text-white w-12 h-12 flex items-center justify-center text-xs font-mono rounded-xl transition-colors" onClick={() => setLightbox(null)}>
              ✕
            </button>
            <div className="max-w-xl w-full p-8 bg-slate-900 border border-slate-800 rounded-3xl text-center space-y-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest block uppercase">// DYNAMIC INTERACTIVE DISPLAY PREVIEW</span>
              <h2 className="text-xl font-black text-white">{lightbox}</h2>
              <div className="w-full h-64 bg-slate-950 rounded-2xl flex items-center justify-center text-xs font-mono text-slate-600 border border-slate-800">
                [ FLYER SPECIMEN NODE CANVAS ]
              </div>
            </div>
          </div>
        )}
      </div>
    </LayoutClient>
  );
}