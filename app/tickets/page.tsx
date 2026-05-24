'use client';

import React, { useState } from 'react';

export default function TicketsPage() {
  const [selectedPass, setSelectedPass] = useState<string | null>(null);

  const passes = [
    { id: 'standard', name: 'STANDARD PIPELINE PASS', price: '₦15,000', access: ["Access to Main Stage Convergence Area", "Standard General Admission Positioning", "Digital Credential Authentication Ledger"] },
    { id: 'vip', name: 'VIP ACCESS VECTOR', price: '₦50,000', access: ["Front Row Access Infrastructure", "Priority Secure Registration Processing", "Exclusive Star Station Merch Package Vector", "Artist Network Entry Session"] },
    { id: 'thinktank', name: 'THINK-TANK ACCESS SUITE', price: 'CUSTOM DEPLOY', access: ["Private Strategy Workshop Access Suite", "Direct Corporate Partnership Alignment Boardroom", "All-Access Pass (Backstage + Production Hubs)", "Dedicated Concierge Vector Sync"] }
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] py-20 px-6 max-w-7xl mx-auto space-y-16">
      
      <div className="max-w-2xl border-b border-white/5 pb-8">
        <span className="text-xs font-mono text-brandRed font-black tracking-widest block mb-2">// SECURE TICKET LEDGER</span>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">ACCESS PASS GATEWAY</h1>
        <p className="text-sm text-white/50 font-mono mt-4 leading-relaxed">
          Select your credentials matrix parameters. All issued operational access points are encrypted and logged dynamically in the cloud layer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {passes.map((pass) => (
          <div 
            key={pass.id}
            onClick={() => setSelectedPass(pass.id)}
            className={`border p-8 rounded-none bg-neutral-950/40 relative cursor-pointer flex flex-col justify-between min-h-[420px] transition-all group ${
              selectedPass === pass.id ? 'border-brandGreen bg-neutral-900/50 shadow-xl shadow-brandGreen/[0.02]' : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono text-white/30 tracking-widest">// PARAMETER LOCK_01</span>
                <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${selectedPass === pass.id ? 'border-brandGreen' : 'border-white/20'}`}>
                  {selectedPass === pass.id && <div className="w-1.5 h-1.5 bg-brandGreen rounded-full" />}
                </div>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-brandGreen transition-colors">
                {pass.name}
              </h3>
              
              <div className="text-2xl font-mono font-black text-white mt-4 mb-6">
                {pass.price}
              </div>

              <ul className="space-y-3 border-t border-white/5 pt-6 text-xs font-mono text-white/40">
                {pass.access.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-brandGreen shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className={`w-full text-center py-3.5 font-mono text-xs font-black tracking-widest transition-all mt-8 uppercase ${
              selectedPass === pass.id ? 'bg-brandGreen text-black' : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
            }`}>
              {selectedPass === pass.id ? 'CREDENTIAL VECTOR SELECTED' : 'SELECT ACCESS VECTOR'}
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}