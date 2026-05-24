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
      type: "FREE_REGISTRATION", // Triggers automated registration popup ledger
      speaker: "Pst. Victor Olamide A.",
      schedule: "EVERY SUNDAY",
      time: "15:30 HRS",
      flier: "/event-mountain.jpg", // Drop your flyer image into public folder using this exact name!
      location: "ADULLAM, The Green Storey Building, Rector's Market, adjacent main gate, Federal Polytechnic Ede",
      scope: "Prophetic Alignment, Dedicated Spiritual Warfare Infrastructure, and Strategic Gathering Execution."
    },
    {
      id: "afro-urban-concert",
      title: "TRACE LIVE CONVERGENCE",
      subtitle: "AFRO-URBAN STAGE GATE",
      status: "LIVE",
      type: "PAID_TICKET", // Automatically routes user straight into the /tickets engine
      speaker: "Star Station Curators x Trace",
      schedule: "LIVE CONTEXT ACTIVE",
      time: "20:00 HRS",
      flier: "/event-trace.jpg", 
      location: "Eko Hotels & Suites, Victoria Island, Lagos",
      scope: "Large-scale cultural activation connecting modern afrobeats artists, tech creators, and broadcast channels globally."
    },
    {
      id: "gwr-activation-premiere",
      title: "RECORD BOX OFFICE PREMIERE",
      subtitle: "GUINNESS WORLD RECORD RUN",
      status: "PAST",
      type: "ARCHIVED_NODE",
      speaker: "Corporate World Entertainment",
      schedule: "COMPLETED ENGINES",
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
    <div className="min-h-screen bg-[#0b0c10] py-20 px-6 max-w-7xl mx-auto space-y-16 relative">
      
      {/* Header Framework */}
      <div className="border-b border-white/5 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-xs font-mono text-brandGreen font-black tracking-widest block mb-2">// CORE GATHERINGS REGISTER</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">AGENCY GATHERINGS</h1>
        </div>
        
        {/* Dynamic Filter Elements */}
        <div className="flex flex-wrap gap-2 font-mono text-[10px] font-black">
          {(['ALL', 'UPCOMING', 'LIVE', 'PAST'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 border transition-all rounded-none ${
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

      {/* Asymmetric Presentation Layout */}
      <div className="space-y-12">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-neutral-950 border border-white/5 rounded-none flex flex-col lg:flex-row overflow-hidden relative group hover:border-white/10 transition-all duration-300">
            
            {/* FLYER IMAGE CONTAINER BLOCK (High Contrast Visual Framing Layout) */}
            <div className="relative w-full lg:w-[320px] h-[320px] lg:h-[auto] bg-neutral-900 shrink-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
              <Image 
                src={event.flier} 
                alt={`${event.title} Official Flyer Grid`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                sizes="(max-w-7xl) 320px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* CONTENT ARTIFACT BLOCK */}
            <div className="p-8 flex flex-col justify-between flex-grow relative">
              
              {/* Event Badge Context */}
              <div className={`absolute top-0 right-0 text-[9px] font-mono font-black uppercase tracking-widest px-4 py-1.5 ${
                event.status === 'LIVE' ? 'bg-brandRed text-white' :
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

              {/* ACTION MATRIX CONTEXT TRIGGER ROUTER */}
              <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                
                {/* Telemetry Details */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-[11px] text-white/40">
                  <div>TIMEFRAME TIMELINE: <span className="text-white font-black uppercase block">{event.schedule}</span></div>
                  <div>LEAD ANCHOR VECT: <span className="text-white font-black uppercase block">{event.speaker}</span></div>
                </div>

                {/* Hybrid Conditional Buttons System */}
                <div className="w-full sm:w-auto font-mono text-[11px] font-black tracking-widest shrink-0">
                  {event.type === 'PAID_TICKET' && (
                    <Link href="/tickets" className="block text-center bg-gradient-to-r from-brandGreen to-emerald-600 text-black px-6 py-3.5 rounded-none hover:brightness-110 shadow-lg shadow-brandGreen/10 uppercase">
                      SECURE ACCESS PASS GATEWAY ↗
                    </Link>
                  )}
                  {event.type === 'FREE_REGISTRATION' && (
                    <button 
                      onClick={() => setActiveRegistrationEvent(event.title)}
                      className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-6 py-3.5 rounded-none hover:bg-brandGreen hover:text-black hover:border-brandGreen transition-all uppercase"
                    >
                      BOOK TABLE & SEAT MATRIX ↗
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

      {/* DYNAMIC COMPLIANT SEAT & TABLE REGISTRATION MODAL */}
      {activeRegistrationEvent && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 font-mono animate-fadeIn">
          <div className="bg-neutral-950 border border-brandGreen p-8 max-w-md w-full relative space-y-6">
            <div className="space-y-1">
              <span className="text-[9px] text-brandGreen font-black uppercase block tracking-widest">// FREE ACCREDITATION PORTAL</span>
              <h3 className="text-white text-lg font-black uppercase tracking-tight">{activeRegistrationEvent}</h3>
              <p className="text-[11px] text-white/40 leading-relaxed font-light">
                Secure your structural general space allocation. Credentials will save instantly down into the event node database.
              </p>
            </div>

            {registrationSuccess ? (
              <div className="space-y-4 py-4 text-center">
                <div className="text-brandGreen font-black text-2xl">✓ ALLOCATION LOCKED</div>
                <p className="text-xs text-white/60">Your access token has been generated. Show your confirmation profile at the gateway entrance vector.</p>
                <button onClick={() => { setRegistrationSuccess(false); setActiveRegistrationEvent(null); }} className="w-full bg-white/10 text-white text-xs py-2.5 font-black uppercase">CLOSE GATEWAY</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setRegistrationSuccess(true); }} className="space-y-4 text-xs">
                <div>
                  <label className="text-white/40 block mb-1.5 uppercase">FULL NAME REFERENCE</label>
                  <input required type="text" className="w-full bg-white/[0.02] border border-white/10 p-3 text-white focus:outline-none focus:border-brandGreen font-mono" placeholder="Ex. Victor Olamide" />
                </div>
                <div>
                  <label className="text-white/40 block mb-1.5 uppercase">COMMUNICATION PIPELINE MAIL</label>
                  <input required type="email" className="w-full bg-white/[0.02] border border-white/10 p-3 text-white focus:outline-none focus:border-brandGreen font-mono" placeholder="name@domain.com" />
                </div>
                <div>
                  <label className="text-white/40 block mb-1.5 uppercase">ALLOCATION TYPE PARAMETER</label>
                  <select className="w-full bg-neutral-900 border border-white/10 p-3 text-white focus:outline-none focus:border-brandGreen font-mono">
                    <option>STANDARD GENERAL SEAT METRIC</option>
                    <option>EXECUTIVE PANEL TABLE BOOKING (VIP VECTOR)</option>
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