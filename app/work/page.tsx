'use client';

import React from 'react';
import Link from 'next/link'; // <-- Add this missing dependency line here

export default function WorkPage() {
  const caseStudies = [
    {
      id: "dangote-pasta",
      client: "DANGOTE PASTA METRICS",
      title: "RE-ENGINEERING RETAIL PACKAGING INFRASTRUCTURE",
      role: "Core Think-Tank Activation Team",
      impact: "Developed the advanced structural conceptual blueprints, geometric asset layout rules, and consumer product labels for the flagship Spaghetti Slim and Spaghetti Standard lines, modernizing retail presence entirely.",
      tag: "STRUCTURAL LAYOUT ENGINEERING"
    },
    {
      id: "gwr-movie",
      client: "CORPORATE WORLD ENTERTAINMENT",
      title: "RECORD-BREAKING BOX OFFICE DEPLOYMENT",
      role: "Strategic Execution & Media Partner",
      impact: "Orchestrated end-to-end promotional activation operations for the highest-grossing Nigerian cinematic movie release in national history, securing official Guinness World Record credentials.",
      tag: "MASS SCALE MEDIA INTAKE"
    },
    {
      id: "trace-alliance",
      client: "TRACE MEDIA GLOBAL ECOSYSTEM",
      title: "AFRO-URBAN CONTINUOUS LIVE OPERATIONS",
      role: "Joint Activation Curators",
      impact: "Synchronized multiple high-octane live deployments, large-scale music concerts, nationwide comedy festivals, and targeted community charity initiatives across regional hubs.",
      tag: "LIVE EXPERIENCE ACTIVATION"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] py-20 px-6 max-w-7xl mx-auto space-y-24">
      
      <div className="max-w-3xl border-b border-white/5 pb-12">
        <span className="text-xs font-mono text-brandGreen font-black tracking-widest block mb-3">// RECORD DEPLOYMENTS</span>
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">PROVEN SYSTEM ARTIFACTS</h1>
        <p className="text-sm text-white/50 font-mono mt-4 leading-relaxed">
          We don't build generic brand flyers. We construct strategic operational architectures that shift corporate market capture metrics globally.
        </p>
      </div>

      <div className="space-y-16">
        {caseStudies.map((study, idx) => (
          <div key={study.id} className="border border-white/5 bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-none flex flex-col lg:flex-row justify-between gap-12 relative overflow-hidden group hover:border-brandGreen/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-0 bg-brandGreen group-hover:h-full transition-all duration-500" />
            
            <div className="space-y-4 max-w-2xl">
              <span className="text-[10px] font-mono text-brandRed font-black tracking-widest block">
                [CASE_INDEX_NODE_0{idx+1}]
              </span>
              <div className="text-xs font-mono text-brandGreen font-black tracking-widest uppercase">
                {study.client}
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-brandGreen transition-colors duration-300">
                {study.title}
              </h2>
              <div className="inline-block bg-white/5 font-mono text-[9px] font-black px-3 py-1 text-white/60 uppercase tracking-widest">
                ROLE: {study.role}
              </div>
              <p className="text-xs md:text-sm text-white/50 font-mono leading-relaxed pt-2">
                {study.impact}
              </p>
            </div>

            <div className="lg:text-right flex flex-col justify-between items-start lg:items-end shrink-0 min-w-[200px]">
              <span className="border border-white/10 text-white/40 font-mono text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-none">
                {study.tag}
              </span>
              <Link href="/contact" className="text-[11px] font-mono font-black text-white group-hover:text-brandGreen tracking-widest transition-colors mt-6 lg:mt-0">
                EXPLORE INSIGHT PARADIGM →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}