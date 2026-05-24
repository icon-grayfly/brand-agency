'use client';

import React from 'react';
import LayoutClient from '../layout-client';

export default function WorkPage() {
  const portfolio = [
    {
      domain: "PACKAGING ARCHITECTURE & VISUAL RELAUNCH",
      title: "Dangote Pasta National Overhaul",
      desc: "Star Station sat proudly as a core member of the elite strategic Think-Tank Team commissioned to formulate and guide the complete visual overhaul and new structural packaging layout for Dangote Pasta variants—including Spaghetti Standard, Spaghetti Slim, and Macaroni Elbow lines.",
      tags: ["Concept Development", "Package Redesigning", "Billboard Advert"],
      gradient: "from-cyan-500 to-indigo-600",
      accent: "text-cyan-400"
    },
    {
      domain: "MARKET RELAUNCH & CONSUMER PROMOTION",
      title: "Gala Mega National Campaign",
      desc: "Revitalizing a legacy market classic since 1962. Star Station engineered the unified 'Chop the Gala, Cheer the Goal' activation blueprints, combining heavy street-level retail activations with digital video distributions to drive immediate product checkout loops.",
      tags: ["Product Brand Activation", "Social Media Advert", "Label Design"],
      gradient: "from-indigo-500 to-rose-500",
      accent: "text-indigo-400"
    },
    {
      domain: "FMCG PACKAGING MODIFICATION",
      title: "Gino Party Jollof Extensions",
      desc: "Collaborating cleanly on spatial product design updates for Gino Tomato Seasoning Mix parameters. We structured visual pipeline tracking assets for the newly scaled Gino Max Beef Flavour variants across high-exposure physical billboard locations.",
      tags: ["FMCG Strategy", "Label Designing", "Concept Testing"],
      gradient: "from-rose-500 to-cyan-500",
      accent: "text-rose-400"
    }
  ];

  return (
    <LayoutClient>
      <div className="py-12 max-w-7xl mx-auto px-6 space-y-24 pb-32">
        <div className="border-b border-slate-900 pb-6">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">// EXECUTION CASE STUDIES</span>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">OUR PORTFOLIO WORK</h1>
        </div>

        <div className="space-y-32">
          {portfolio.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-[10px] font-mono text-slate-500 tracking-widest block uppercase">{item.domain}</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{item.title}</h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-mono">{item.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2 text-[9px] font-mono font-bold tracking-wider uppercase">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={`px-2.5 py-1 bg-slate-900 rounded border border-slate-800 ${item.accent}`}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Angled 3D Representation block frame */}
              <div className={`lg:col-span-6 flex justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`} style={{ perspective: '1200px' }}>
                <div className={`w-full max-w-sm h-64 rounded-2xl bg-gradient-to-tr ${item.gradient} p-[1px] transform transition-transform duration-500 hover:rotate-x-3 hover:rotate-y-3 shadow-xl`}>
                  <div className="w-full h-full bg-slate-950/95 rounded-[15px] flex items-center justify-center font-mono font-black text-sm text-slate-400 tracking-widest">
                    [ VISUAL PORTFOLIO LINK SHIELD ]
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutClient>
  );
}