'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const expertises = [
    { num: "01", title: "Corporate Branding & Label Layouts", desc: "Complete visual identity transformation. We designed the conceptual blueprints and package layouts for Nigeria's staple food lines like Dangote Pasta." },
    { num: "02", title: "Video Commercials & Media Campaigns", desc: "High-budget TV commercials and radio jingles engineered to command nationwide consumer attention and drive sales." },
    { num: "03", title: "Large Scale Events & Tour Logistics", desc: "From sold-out arena music concerts with Trace Global to record-breaking box office film premiere activations." }
  ];

  return (
    <div className="space-y-32 pb-32">
      
      {/* SECTION 1: EYE-CATCHING HERO LANDING GRID */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Visual Graphic Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80" 
            alt="Star Station Creative Operations Hub Visual"
            fill
            className="object-cover opacity-20 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-transparent to-black/50" />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12">
          <div className="space-y-8 lg:col-span-8">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] tracking-widest text-[#25D366] uppercase">
              <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" /> Top-Rated Creative Agency
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white">
              WE GROW <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">BRANDS</span> & COOPERATE BODIES.
            </h1>
            <p className="text-sm md:text-base text-white/60 font-mono max-w-xl leading-relaxed">
              We help restless brands and major companies clarify their message, re-engineer packaging concepts, and deploy live activation campaigns that win deep consumer loyalty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 font-mono text-xs font-black tracking-widest">
              <Link href="/work" className="bg-gradient-to-r from-[#25D366] to-emerald-600 text-black px-8 py-4 text-center hover:brightness-110 shadow-xl shadow-[#25D366]/5 transition-all uppercase">
                EXPLORE OUR WORK ↗
              </Link>
              <Link href="/contact" className="border border-white/10 hover:border-white text-white px-8 py-4 text-center bg-white/[0.01] transition-all uppercase">
                DISCUSS A BRIEF
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO BEST */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
          <span className="text-xs font-mono text-[#25D366] font-black tracking-widest block uppercase">// CORE CAPABILITIES</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">WHAT WE DO BEST.</h2>
          <p className="text-xs text-white/40 font-mono leading-relaxed">
            From conceptual thinking inside our design rooms down to full production delivery in national marketplaces.
          </p>
        </div>
        <div className="lg:col-span-8 border-l border-white/5 space-y-1">
          {expertises.map((item) => (
            <div key={item.num} className="p-8 md:p-12 border-b border-white/5 hover:bg-white/[0.01] transition-all relative group">
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#25D366] group-hover:h-full transition-all duration-300" />
              <div className="font-mono text-xs text-brandRed font-black mb-2">[{item.num}]</div>
              <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight group-hover:text-[#25D366] transition-colors">{item.title}</h3>
              <p className="text-xs md:text-sm text-white/50 font-mono mt-3 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: OUR SECRET SAUCE (Strategic Narrative Layout) */}
      <section className="bg-black border-y border-white/5 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono text-brandRed font-black tracking-widest block uppercase">// STRATEGIC MISSION</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">THE UNCOMMON FUTURE.</h2>
            <p className="text-xs md:text-sm font-mono text-white/60 leading-relaxed">
              We live in a world where predictive, boring templates rule supreme. At Star Station, we value potential over predictability. The future belongs to the bold and uncommon. We challenge routine ways of thinking to turn corporate properties into active culture landmarks.
            </p>
          </div>
          <div className="relative h-[300px] border border-white/10 bg-neutral-900 overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80"
              alt="Star Station Strategic Execution"
              fill
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

    </div>
  );
}