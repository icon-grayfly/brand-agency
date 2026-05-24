'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Connects form submission directly to your email channel
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
        alert("Transmission pipeline encountered an error. Please verify input fields.");
      }
    } catch (err) {
      alert("Network transport layer failed. Please try again or call our hotline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
      
      {/* Narrative Panel */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono text-brandGreen font-black tracking-widest block mb-2">// TRANSFORMATION GATEWAY</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">INITIATE GLOBAL COGNITION</h1>
        </div>
        <p className="text-sm text-white/50 font-mono leading-relaxed max-w-lg">
          Connect directly with our creative team. Whether you require structural product packaging overhauls, commercial media campaigns, or nationwide live brand activation infrastructure, our operations grid will execute immediately.
        </p>

        <div className="border-t border-white/5 pt-8 space-y-6 text-xs font-mono">
          <div>
            <span className="text-white/20 block text-[10px] tracking-widest mb-1">PHYSICAL OPERATIONS BASE:</span>
            <span className="text-white font-black uppercase text-sm">2a Oluwatosin Street, Oral Estate, Lekki, Lagos, Nigeria</span>
          </div>
          <div>
            <span className="text-white/20 block text-[10px] tracking-widest mb-1">DIRECT TELECOMMUNICATION CHANNELS:</span>
            <span className="text-white font-black text-sm block">+234 809 100 0449</span>
            <span className="text-white font-black text-sm block">+234 903 689 8584</span>
          </div>
        </div>
      </div>

      {/* Interactive Submission Engine */}
      <div className="bg-neutral-950 border border-white/5 p-8 md:p-12 rounded-none relative shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandGreen to-brandRed" />
        
        <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">01 // BRAND OR REPRESENTATIVE NAME</label>
            <input required type="text" name="name" className="w-full bg-white/[0.01] border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-brandGreen transition-colors font-mono" placeholder="Ex. Dangote Pasta Management" />
          </div>
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">02 // DATA INTAKE SECURE EMAIL</label>
            <input required type="email" name="email" className="w-full bg-white/[0.01] border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-brandGreen transition-colors font-mono" placeholder="yourmail@domain.com" />
          </div>
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">03 // STRATEGIC DISCOVERY CHANNEL</label>
            <select name="category" className="w-full bg-[#0b0c10] border border-white/10 rounded-none p-4 text-white/70 focus:outline-none focus:border-brandGreen transition-colors font-mono uppercase">
              <option>BRAND STRATEGY & CORPORATE REDESIGN BLUEPRINTS</option>
              <option>CREATIVE CONTENT & TELEVISION COMMERCIAL PRODUCTION</option>
              <option>EVENT ACTIVATION & ARTIST MANAGEMENT INFRASTRUCTURE</option>
              <option>PACKAGE REDESIGN & CONCEPT BLUEPRINT ENGINEERING</option>
            </select>
          </div>
          <div>
            <label className="text-white/40 block mb-2 font-black uppercase tracking-wider">04 // TRANSACTIONAL ENGAGEMENT SCOPE MAP</label>
            <textarea required name="message" rows={4} className="w-full bg-white/[0.01] border border-white/10 rounded-none p-4 text-white focus:outline-none focus:border-brandGreen transition-colors font-mono" placeholder="Outline project goals, parameter limitations, and timeline markers..."></textarea>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-brandGreen to-emerald-600 text-black text-center py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all text-xs disabled:opacity-50">
            {isSubmitting ? "TRANSMITTING DATA VECTORS..." : "SUBMIT STRATEGY PROTOCOL ↗"}
          </button>
        </form>
      </div>

      {/* POP-UP SUCCESS MODAL NOTIFICATION */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 font-mono animate-fadeIn">
          <div className="bg-neutral-950 border border-brandGreen p-8 max-w-md w-full text-center space-y-6 shadow-2xl shadow-brandGreen/5">
            <div className="w-12 h-12 rounded-full border border-brandGreen bg-brandGreen/10 flex items-center justify-center mx-auto text-brandGreen font-black text-lg animate-scaleIn">
              ✓
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-lg font-black uppercase tracking-wider">TRANSMISSION AGGREGATED</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Your data profile has safely bypassed local buffers and routed straight into our strategic management mailbox. An operations specialist will synchronize directly via your communication vector shortly.
              </p>
            </div>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-brandGreen text-black text-xs font-black tracking-widest py-3 uppercase hover:bg-white transition-colors"
            >
              CLOSE INTERFACE PANEL
            </button>
          </div>
        </div>
      )}

    </div>
  );
}