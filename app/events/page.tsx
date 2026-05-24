'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'UPCOMING' | 'LIVE' | 'PAST'>('ALL');
  const [activeRegistrationEvent, setActiveRegistrationEvent] = useState<string | null>(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  
  // LIGHTBOX IMAGE PREVIEW STATE CONTROLLERS
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const agencyEvents = [
    {
      id: "say-unto-mountain",
      title: "SAY UNTO THIS MOUNTAIN",
      subtitle: "PROPHETIC CONVERGENCE",
      status: "UPCOMING",
      type: "FREE_REGISTRATION",
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
      subtitle: "AFRO-URBAN PERFORMANCE HEDGEROW",
      status: "LIVE",
      type: "PAID_TICKET",
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
    <div className="min-h-screen bg-[#0b0c10] py-20 px-6 max-w-7xl mx-auto space-y-16 relative z-10">
      
      {/* Header Grid */}
      <div className="border-b border-white/5 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-xs font-mono text-[#25D366] font-black tracking-widest block mb-2">// AGENCY SCHEDULES</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">OUR EVENTS</h1>
        </div>
        
        <div className="flex flex-wrap gap-2 font-mono text-[10px] font-black">
          {(['ALL', 'UPCOMING', 'LIVE', 'PAST'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 border transition-all ${
                activeFilter === filter 
                  ? 'bg-[#25D366] border-[#25D366] text-black' 
                  : 'border-white/10 text-white/50 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="space-y-12">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-neutral-950 border border-white/5 rounded-none flex flex-col lg:flex-row overflow-hidden relative group hover:border-white/10 transition-all duration-300">
            
            {/* CLICKABLE FLYER CONTAINER BLOCK */}
            <div 
              onClick={() => setLightboxImage(event.flier)}
              className="relative w-full lg:w-[300px] h-[300px] lg:h-[auto] bg-neutral-900 shrink-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5 cursor-zoom-in"
              title="Click to view flyer preview full screen"
            >
              <Image 
                src={event.flier} 
                alt={`${event.title} Official Flyer`}
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-500 brightness-[0.75] group-hover:brightness-95"
                sizes="(max-w-7xl) 300px, 100vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black/80 font-mono text-[9px] font-black uppercase tracking-widest text-[#25D366] px-3 py-1.5 border border-[#25D366]/20 shadow-xl">
                  🔎 PREVIEW FLYER
                </span>
              </div>
            </div>

            {/* Content Core */}
            <div className="p-8 flex flex-col justify-between flex-grow relative">
              <div className={`absolute top-0 right-0 text-[9px] font-mono font-black uppercase tracking-widest px-4 py-1.5 ${
                event.status === 'LIVE' ? 'bg-brandRed text-white' :
                event.status === 'UPCOMING' ? 'bg-[#25D366] text-black' : 'bg-white/10 text-white/40'
              }`}>
                {event.status}
              </div>

              <div className="space-y-3">
                <span className="text-[10px] text-[#25D366] font-mono font-black uppercase tracking-widest block">
                  {event.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white max-w-[80%]">
                  {event.title}
                </h3>
                <p className="text-xs text-white/50 font-mono leading-relaxed max-w-2xl pt-2">
                  <span className="text-white/20 block text-[9px] font-black tracking-widest mb-1 uppercase">// EVENT INFORMATION</span>
                  {event.scope}
                </p>
              </div>

              <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 font-mono text-[11px] text-white/40">
                  <div>FREQUENCY: <span className="text-white font-black uppercase block">{event.schedule}</span></div>
                  <div>LEAD ANCHOR: <span className="text-white font-black uppercase block">{event.speaker}</span></div>
                </div>

                <div className="w-full sm:w-auto font-mono text-[11px] font-black tracking-widest shrink-0">
                  {event.type === 'PAID_TICKET' && (
                    <Link href="/tickets" className="block text-center bg-gradient-to-r from-[#25D366] to-emerald-600 text-black px-6 py-3.5 rounded-none hover:brightness-110 uppercase">
                      BUY ACCESS TICKETS ↗
                    </Link>
                  )}
                  {event.type === 'FREE_REGISTRATION' && (
                    <button 
                      onClick={() => setActiveRegistrationEvent(event.title)}
                      className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-6 py-3.5 rounded-none hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all uppercase"
                    >
                      REGISTER FOR SEAT ↗
                    </button>
                  )}
                  {event.type === 'ARCHIVED_NODE' && (
                    <span className="text-[10px] text-white/20 border border-white/5 px-4 py-2 block uppercase">
                      EVENT CONCLUDED
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* DYNAMIC REGISTRATION OVERLAY */}
      {activeRegistrationEvent && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 font-mono animate-fadeIn">
          <div className="bg-neutral-950 border border-[#25D366] p-8 max-w-md w-full relative space-y-6 shadow-2xl">
            <div className="space-y-1">
              <span className="text-[9px] text-[#25D366] font-black uppercase block tracking-widest">// SECURE RESERVATION GATEWAY</span>
              <h3 className="text-white text-lg font-black uppercase tracking-tight">{activeRegistrationEvent}</h3>
            </div>

            {registrationSuccess ? (
              <div className="space-y-4 py-4 text-center">
                <div className="text-[#25D366] font-black text-2xl">✓ ENTRY RESERVED</div>
                <button onClick={() => { setRegistrationSuccess(false); setActiveRegistrationEvent(null); }} className="w-full bg-white/10 text-white text-xs py-2.5 font-black uppercase">CLOSE GATEWAY</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setRegistrationSuccess(true); }} className="space-y-4 text-xs">
                <div>
                  <label className="text-white/40 block mb-1.5 uppercase">YOUR FULL NAME</label>
                  <input required type="text" className="w-full bg-white/[0.02] border border-white/10 p-3 text-white focus:outline-none focus:border-[#25D366] font-mono" placeholder="Ex. Victor Olamide" />
                </div>
                <div>
                  <label className="text-white/40 block mb-1.5 uppercase">EMAIL PIPELINE ADDRESS</label>
                  <input required type="email" className="w-full bg-white/[0.02] border border-white/10 p-3 text-white focus:outline-none focus:border-[#25D366] font-mono" placeholder="name@domain.com" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setActiveRegistrationEvent(null)} className="w-1/2 bg-white/5 text-white/60 py-3 font-black uppercase">ABORT</button>
                  <button type="submit" className="w-1/2 bg-[#25D366] text-black py-3 font-black uppercase">CONFIRM ENTRY ↗</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* FULL SCREEN INTERACTIVE LIGHTBOX FLYER PREVIEW MODAL */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Trigger Button Vector */}
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-brandRed border border-white/10 hover:border-brandRed text-white w-12 h-12 flex items-center justify-center font-mono font-black text-sm transition-all shadow-2xl rounded-none"
            title="Close flyer overview (Esc)"
          >
            ✕
          </button>
          
          <div 
            className="relative max-w-4xl w-full h-[85vh] bg-neutral-950/40 p-1 border border-white/5 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Guarding window close state trigger inside graphic body
          >
            <Image 
              src={lightboxImage} 
              alt="High resolution flyer artifact snapshot showcase preview" 
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}

    </div>
  );
}