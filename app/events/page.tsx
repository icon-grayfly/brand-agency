'use client';

import React, { useState } from 'react';

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'UPCOMING' | 'LIVE' | 'PAST'>('ALL');

  const agencyEvents = [
    {
      id: "say-unto-mountain",
      title: "SAY UNTO THIS MOUNTAIN",
      subtitle: "SUNDAY CONVERGENCE",
      status: "UPCOMING",
      speaker: "Pst. Victor Olamide A.",
      schedule: "EVERY SUNDAY",
      time: "15:30 HRS",
      location: "ADULLAM, The Green Storey Building, Rector's Market, adjacent main gate, Federal Polytechnic Ede",
      scope: "Prophetic Alignment & Spiritual Warfare Infrastructure"
    },
    {
      id: "afro-urban-concert",
      title: "TRACE LIVE CONVERGENCE",
      subtitle: "AFRO-URBAN MUSIC CONCERT",
      status: "LIVE",
      speaker: "Star Station Curators x Trace",
      schedule: "LIVE MODE ACTIVE",
      time: "20:00 HRS",
      location: "Eko Hotels & Suites, Victoria Island, Lagos",
      scope: "Strategic Live Activation & Entertainment Broadcast Ecosystem"
    },
    {
      id: "gwr-activation-premiere",
      title: "RECORD BOX OFFICE PREMIERE",
      subtitle: "GUINNESS WORLD RECORD RUN",
      status: "PAST",
      speaker: "Corporate World Entertainment",
      schedule: "COMPLETED ACTIVATION",
      time: "18:00 HRS",
      location: "Filmhouse IMAX, Lekki Phase 1, Lagos",
      scope: "Highest Grossing Nigerian Movie Activation Campaign Engine"
    }
  ];

  const filteredEvents = activeFilter === 'ALL' 
    ? agencyEvents 
    : agencyEvents.filter(e => e.status === activeFilter);

  return (
    <div className="min-h-screen bg-[#0b0c10] py-20 px-6 max-w-7xl mx-auto space-y-12">
      
      <div className="border-b border-white/5 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-xs font-mono text-brandGreen font-black tracking-widest block mb-2">// CENTRAL REPOSITORY</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">AGENCY CONVERGENCES</h1>
        </div>
        
        {/* Navigation State Filters (Vaynermedia Real-Time Layout Logic) */}
        <div className="flex flex-wrap gap-2 font-mono text-[10px] font-black">
          {(['ALL', 'UPCOMING', 'LIVE', 'PAST'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 border transition-all ${
                activeFilter === filter 
                  ? 'bg-brandGreen border-brandGreen text-black shadow-lg shadow-brandGreen/10' 
                  : 'border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Presentation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-neutral-950 border border-white/5 p-8 rounded-none relative overflow-hidden group hover:border-white/20 transition-all flex flex-col justify-between min-h-[340px]">
            
            {/* Status Visual Badges */}
            <div className={`absolute top-0 right-0 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 font-mono ${
              event.status === 'LIVE' ? 'bg-brandRed text-white animate-pulse' :
              event.status === 'UPCOMING' ? 'bg-brandGreen text-black' : 'bg-white/20 text-white/60'
            }`}>
              {event.status}
            </div>

            <div>
              <span className="text-[10px] text-brandGreen font-black uppercase tracking-widest block mb-1 font-mono">
                {event.subtitle}
              </span>
              <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-brandGreen transition-colors uppercase max-w-[85%]">
                {event.title}
              </h3>
              <p className="text-xs text-white/50 font-mono mt-4 leading-relaxed max-w-xl">
                <span className="text-white/30 block text-[9px] tracking-wider mb-0.5">// OPERATIONAL FOCUS:</span>
                {event.scope}
              </p>
            </div>

            <div className="border-t border-white/5 pt-6 mt-8 space-y-2 text-[11px] font-mono text-white/40">
              <div className="flex justify-between">
                <span>TIMEFRAME TIMELINE:</span>
                <span className="text-white font-black">{event.schedule} // {event.time}</span>
              </div>
              <div className="flex justify-between">
                <span>LEAD ANCHOR VECT:</span>
                <span className="text-white font-black uppercase">{event.speaker}</span>
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-[9px] tracking-widest text-white/20 mb-1">HUB INFRASTRUCTURE LOCATION:</span>
                <span className="text-white font-black leading-relaxed capitalize text-xs">
                  {event.location.toLowerCase()}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}