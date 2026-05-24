'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Elite Formspree email ingestion pipeline setup
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Direct integration using Formspree endpoint pointing to trystarstation@gmail.com
      const response = await fetch('https://formspree.io/f/xnqeovrd', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowSuccessModal(true);
        form.reset();
      } else {
        alert("Pipeline error. Please verify data formats or contact hotlines directly.");
      }
    } catch (err) {
      alert("Network transport layer failed. Check secure telemetry vectors.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
      
      {/* Structural Data Column */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono text-brandGreen font-black tracking-widest block mb-2">// TRANSFORMATION GATEWAY</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">INITIATE OPERATIONS PROTOCOL</h1>
        </div>
        <p className="text-sm text-white/50 font-mono leading-relaxed max-w-lg">
          Connect directly with our strategic design collective. Whether you require structural product packaging overhauls, high-impact media production, or nationwide live activation setups, our pipeline will orchestrate deployment.
        </p>

        <div className="border-t border-white/5 pt-8 space-y-6 text-xs font-mono">
          <div>
            <span className="text-white/20 block text-[10px] tracking-widest mb-1">PHYSICAL OPERATIONS HEDGEROW:</span>
            <span className="text-white font-black uppercase text-sm">2a Oluwatosin Street, Oral Estate, Lekki, Lagos, Nigeria</span>
          </div>
          <div>
            <span className="text-white/20 block text-[10px] tracking-widest mb-1">DIRECT TELECOMMUNICATION CHANNELS:</span>
            <span className="text-white font-black text-sm block">+234 809 100 0449</span>
            <span className="text-white font-black text-sm block">+234 903 689 8584</span>
          </div>
        </div>
      </div>

      {/* Communications Submission Form Interface */}
      <div className="bg-neutral-950 border border-white/5 p-8 md:p-12 rounded-none relative shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandGreen via-emerald-500 to-brandRed" />
        
        <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">01 // INDIVIDUAL OR CORPORATE CONTEXT NAME</label>
            <input required type="text" name="name" className="w-full bg-white/[0.01] border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-brandGreen transition-colors font-mono" placeholder="Ex. Dangote Pasta Management" />
          </div>
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">02 // DATA INTAKE SECURE EMAIL</label>
            <input required type="email" name="email" className="w-full bg-white/[0.01] border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-brandGreen transition-colors font-mono" placeholder="yourmail@domain.com" />
          </div>
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">03 // ENGAGEMENT CHANNEL SELECTION</label>
            <select name="category" className="w-full bg-[#0b0c10] border border-white/10 rounded-none p-4 text-white/70 focus:outline-none focus:border-brandGreen transition-colors font-mono uppercase">
              <option>BRAND STRATEGY & CORPORATE POSITIONING BLUEPRINTS</option>
              <option>CREATIVE CONTENT & TELEVISION COMMERCIAL PRODUCTION</option>
              <option>EVENT ACTIVATION & ARTIST MANAGEMENT INFRASTRUCTURE</option>
              <option>PACKAGE REDESIGN & BLUEPRINT CONCEPT ENGINEERING</option>
            </select>
          </div>
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">04 // TRANSACTIONAL ENGAGEMENT MAP SCOPE</label>
            <textarea required name="message" rows={4} className="w-full bg-white/[0.01] border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-brandGreen transition-colors font-mono" placeholder="Outline operational vectors, parameters, and timeline metrics..."></textarea>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-brandGreen to-emerald-600 text-black text-center py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all text-xs disabled:opacity-50">
            {isSubmitting ? "TRANSMITTING DATA STRINGS..." : "SUBMIT DATA PARAMETERS TO HUB ↗"}
          </button>
        </form>
      </div>

      {/* POP-UP SUCCESS MODAL NOTIFICATION (Premium Glass UI Layer Animation) */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 font-mono animate-fadeIn">
          <div className="bg-neutral-950 border border-brandGreen p-8 max-w-md w-full relative text-center space-y-6 shadow-2xl shadow-brandGreen/5">
            <div className="w-12 h-12 rounded-full border border-brandGreen bg-brandGreen/10 flex items-center justify-center mx-auto text-brandGreen font-black text-lg">
              ✓
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-lg font-black uppercase tracking-wider">TRANSMISSION COMPLETE</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Your parameters have safely routed through our secure data channels directly to our corporate team. An operational specialist will synchronize via your provided email pipeline shortly.
              </p>
            </div>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-brandGreen text-black text-xs font-black tracking-widest py-3 uppercase hover:bg-white transition-colors"
            >
              CLOSE SYSTEM MATRIX
            </button>
          </div>
        </div>
      )}

    </div>
  );
}