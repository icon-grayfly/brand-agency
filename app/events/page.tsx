'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'UPCOMING' | 'LIVE' | 'PAST'>('ALL');
  const [activeRegistrationEvent, setActiveRegistrationEvent] = useState<string | null>(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const agencyEvents = [
    {
      id: "say-unto-mountain",
      title: "SAY UNTO THIS MOUNTAIN",
      subtitle: "PROPHETIC CONVERGENCE",
      status: "UPCOMING",
      type: "FREE_REGISTRATION", // Custom structural popup action loop
      speaker: "Pst. Victor Olamide A.",
      schedule: "EVERY SUNDAY",
      time: "15:30 HRS",
      flier: "/event-mountain.jpg", 
      location: "ADULLAM, The Green Storey Building, Rector's Market, adjacent main gate, Federal Polytechnic Ede",
      scope: "Prophetic Alignment, Dedicated Spiritual Warfare Infrastructure, and Strategic Gathering Execution."
    },
    {
      id: "afro-urban-concert",
      title: "TRACE LIVE CONVERGENCE",
      subtitle: "AFRO-URBAN PERFORMANCE HUDGEROW",
      status: "LIVE",
      type: "PAID_TICKET", // Automated Link redirection engine to pass parameters
      speaker: "Star Station Curators x Trace",
      schedule: "LIVE FEED ACTIVE",
      time: "20:00 HRS",
      flier: "/event-trace.jpg", 
      location: "Eko Hotels & Suites, Victoria Island, Lagos",
      scope: "Large-scale urban cultural activation connecting premium afrobeats artists, tech specialists, and live broadcast channels globally."
    },
    {
      id: "gwr-activation-premiere",
      title: "RECORD BOX OFFICE PREMIERE",
      subtitle: "GUINNESS WORLD RECORD RUN",
      status: "PAST",
      type: "ARCHIVED_NODE",
      speaker: "Corporate World Entertainment",
      schedule: "COMPLETED ACTIVATION ENGINES",
      time: "18:00 HRS",
      flier: "/event-gwr.jpg",
      location: "Filmhouse IMAX, Lekki Phase 1, Lagos",
      scope: "Strategic premiere operations execution backing the most commercially successful cinematic movie production in Nigerian box office history."
    }
  ];

  const filteredEvents = activeFilter === 'ALL' 
    ? agencyEvents 
    : agencyEvents.filter(e => e.status === activeFilter);

  return (
    <div className="min-h-screen bg-[#0b0c10] py-20 px-6 max-w-7xl mx-auto space-y-16 relative z-10">
      
      {/* Header Framework */}
      <div className="border-b border-white/5 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-xs font-mono text-brandGreen font-black tracking-widest block mb-2">// CORE GATHERINGS ARCHIVE</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">AGENCY CONVERGENCES</h1>
        </div>
        
        {/* Dynamic State Filters */}
        <div className="flex flex-wrap gap-2 font-mono text-[10px] font-black">
          {(['ALL', 'UPCOMING', 'LIVE', 'PAST'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 border transition-all ${
                activeFilter === filter 
                  ? 'bg-brandGreen border-brandGreen text-black shadow-lg shadow-brandGreen/10' 
                  : 'border-white/10 text-white/50 hover:text-white hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetric Visual Grid */}
      <div className="space-y-12">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-neutral-950 border border-white/5 rounded-none flex flex-col lg:flex-row overflow-hidden relative group hover:border-white/10 transition-all duration-300">
            
            {/* FLYER IMAGE SYSTEM RENDERING GRID */}
            <div className="relative w-full lg:w-[300px] h-[300px] lg:h-[auto] bg-neutral-900 shrink-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
              <Image 
                src={event.flier} 
                alt={`${event.title} Official Showcase Flyer`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-100"
                sizes="(max-w-7xl) 300px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* CONTENT ENGINE LAYOUT */}
            <div className="p-8 flex flex-col justify-between flex-grow relative">
              
              {/* Event Badge */}
              <div className={`absolute top-0 right-0 text-[9px] font-mono font-black uppercase tracking-widest px-4 py-1.5 ${
                event.status === 'LIVE' ? 'bg-brandRed text-white animate-pulse' :
                event.status === 'UPCOMING' ? 'bg-brandGreen text-black' : 'bg-white/10 text-white/40'
              }`}>
                {event.status}
              </div>

              <div className="space-y-3">
                <span className="text-[10px] text-brandGreen font-mono font-black uppercase tracking-widest block">
                  {event.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white max-w-[80%]">
                  {event.title}
                </h3>
                <p className="text-xs text-white/50 font-mono leading-relaxed max-w-2xl pt-2">
                  <span className="text-white/20 block text-[9px] font-black tracking-widest mb-1 uppercase">// OPERATIONAL VECTOR SUMMARY</span>
                  {event.scope}
                </p>
              </div>

              {/* ACTION LAYOUT CONTROLLERS */}
              <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-[11px] text-white/40">
                  <div>TIMEFRAME TIMELINE: <span className="text-white font-black uppercase block">{event.schedule}</span></div>
                  <div>LEAD ANCHOR VECT: <span className="text-white font-black uppercase block">{event.speaker}</span></div>
                </div>

                {/* Hybrid Conditional Access Triggers */}
                <div className="w-full sm:w-auto font-mono text-[11px] font-black tracking-widest shrink-0">
                  {event.type === 'PAID_TICKET' && (
                    <Link href="/tickets" className="block text-center bg-gradient-to-r from-brandGreen to-emerald-600 text-black px-6 py-3.5 rounded-none hover:brightness-110 shadow-lg shadow-brandGreen/10 uppercase">
                      BUY REQUISITION TICKETS ↗
                    </Link>
                  )}
                  {event.type === 'FREE_REGISTRATION' && (
                    <button 
                      onClick={() => setActiveRegistrationEvent(event.title)}
                      className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-6 py-3.5 rounded-none hover:bg-brandGreen hover:text-black hover:border-brandGreen transition-all uppercase"
                    >
                      REGISTER / BOOK SEATING ↗
                    </button>
                  )}
                  {event.type === 'ARCHIVED_NODE' && (
                    <span className="text-[10px] text-white/20 border border-white/5 px-4 py-2 block uppercase">
                      ACTIVATION LEDGER CLOSED
                    </span>
                  )}
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

      {/* DYNAMIC REGISTRATION OVERLAY LEDGER */}
      {activeRegistrationEvent && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 font-mono animate-fadeIn">
          <div className="bg-neutral-950 border border-brandGreen p-8 max-w-md w-full relative space-y-6 shadow-2xl">
            <div className="space-y-1">
              <span className="text-[9px] text-brandGreen font-black uppercase block tracking-widest">// COMPLIANT REGISTRATION INTERFACE</span>
              <h3 className="text-white text-lg font-black uppercase tracking-tight">{activeRegistrationEvent}</h3>
              <p className="text-[11px] text-white/40 leading-relaxed">
                Secure your spatial allocation matrix. Credentials will log down directly into the event node registry.
              </p>
            </div>

            {registrationSuccess ? (
              <div className="space-y-4 py-4 text-center animate-scaleIn">
                <div className="text-brandGreen font-black text-2xl">✓ SEAT ALLOCATION SECURED</div>
                <p className="text-xs text-white/60">Your tracking authorization token has been verified. Present your identity profile at the portal entrance vector.</p>
                <button onClick={() => { setRegistrationSuccess(false); setActiveRegistrationEvent(null); }} className="w-full bg-white/10 text-white text-xs py-2.5 font-black uppercase">CLOSE GATEWAY</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setRegistrationSuccess(true); }} className="space-y-4 text-xs">
                <div>
                  <label className="text-white/40 block mb-1.5 uppercase">FULL ACCOUNT REFERENCE NAME</label>
                  <input required type="text" className="w-full bg-white/[0.02] border border-white/10 p-3 text-white focus:outline-none focus:border-brandGreen font-mono" placeholder="Ex. Victor Olamide" />
                </div>
                <div>
                  <label className="text-white/40 block mb-1.5 uppercase">COMMUNICATION PIPELINE MAIL</label>
                  <input required type="email" className="w-full bg-white/[0.02] border border-white/10 p-3 text-white focus:outline-none focus:border-brandGreen font-mono" placeholder="name@domain.com" />
                </div>
                <div>
                  <label className="text-white/40 block mb-1.5 uppercase">SPACE MATRIX CRITERIA</label>
                  <select className="w-full bg-neutral-900 border border-white/10 p-3 text-white focus:outline-none focus:border-brandGreen font-mono">
                    <option>STANDARD ACQUIRED ACCESS SPACE</option>
                    <option>EXECUTIVE TABLE BOOKING INFRASTRUCTURE</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setActiveRegistrationEvent(null)} className="w-1/2 bg-white/5 text-white/60 py-3 font-black uppercase">ABORT</button>
                  <button type="submit" className="w-1/2 bg-brandGreen text-black py-3 font-black uppercase hover:brightness-110 transition-all">LOCK SEAT ↗</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}