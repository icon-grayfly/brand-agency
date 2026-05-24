'use client';

import React from 'react';
import LayoutClient from '../layout-client';

export default function EventsPage() {
  const tickets = [
    {
      tag: "ARENA TOUR",
      date: "JUNE 21",
      title: "AY Live: Happiness Tour",
      desc: "Full conceptual engineering and logistical execution alongside Maltina and key beverage national pipeline distribution frameworks live at the Transcorp Hilton Main Arena, Abuja.",
      meta: "VENUE: TRANSCORP HILTON ABUJA",
      badge: "SOLD OUT",
      accent: "border-cyan-500/30 text-cyan-400"
    },
    {
      tag: "MEDIA NETWORK",
      date: "ANNUAL SYSTEM",
      title: "Trace Urban Strategic Grid",
      desc: "Star Station syncs directly with the international Trace Afro-urban media grid, tracking, launching, and managing massive localized live comedy activations nationwide.",
      meta: "PARTNERS: TRACE TV / MTV NAIJA",
      badge: "ACTIVE ALLIANCE",
      accent: "border-indigo-500/30 text-indigo-400"
    }
  ];

  return (
    <LayoutClient>
      <div className="py-12 max-w-7xl mx-auto px-6 space-y-16 pb-32">
        <div className="border-b border-slate-900 pb-6">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">// LIVE ENTERTAINMENT PRODUCTIONS</span>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">AGENCY EVENTS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tickets.map((ticket, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 border border-slate-800 rounded-3xl flex flex-col justify-between relative group hover:border-slate-700 hover:-translate-y-1 transition-all shadow-xl"
            >
              {/* Perfect Cutout Ticket Geometry Punch Holes */}
              <div className="absolute top-1/2 -left-3 w-6 h-6 bg-slate-950 rounded-full border-r border-slate-800 transform -translate-y-1/2" />
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-slate-950 rounded-full border-l border-slate-800 transform -translate-y-1/2" />

              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className={`px-2 py-0.5 rounded bg-slate-900 border ${ticket.accent} font-bold`}>{ticket.tag}</span>
                  <span className="text-slate-500">{ticket.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{ticket.title}</h3>
                <p className="text-xs text-slate-400 font-mono leading-relaxed">{ticket.desc}</p>
              </div>

              <div className="px-8 py-4 bg-slate-900/60 border-t border-slate-800/80 rounded-b-3xl flex justify-between items-center font-mono text-[10px] text-slate-400">
                <span>{ticket.meta}</span>
                <span className="font-bold text-slate-200">{ticket.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutClient>
  );
}
