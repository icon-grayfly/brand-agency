import React from 'react';

export default function Home() {
  
  // Clean delivery nodes extracted from corporate documentation
  const deliverables = [
    { 
      title: "Brand Strategy & Development", 
      desc: "Helping brands establish unmistakable corporate identities through comprehensive workshops, level-headed research, and positioning frameworks." 
    },
    { 
      title: "Creative Content & Media Production", 
      desc: "Developing high-impact Television Commercials (TVC), radio jingles, social media visual campaigns, and outdoor billboard advertisements." 
    },
    { 
      title: "Event & Artist Management", 
      desc: "Executing premium music concerts, comedy festivals, charity events, product launches, and comprehensive artist development roadmaps." 
    },
    { 
      title: "Customer Experience Enhancement", 
      desc: "Building customer personas to create holistic experiences that involve senses, thoughts, and actions—driving massive word-of-mouth growth." 
    },
    { 
      title: "AI-Powered Analytics & Marketing", 
      desc: "Leveraging data-driven insights and omnichannel advertising tools to target campaigns across digital and traditional networks for maximum impact." 
    },
    { 
      title: "Package & Product Design", 
      desc: "Engineering structural packaging blueprints, concept development schemes, and custom label redesigns to completely reinvent retail shelf presence." 
    }
  ];

  // Verified strategic milestones from your company profile records
  const historicalMilestones = [
    { 
      metric: "GWR PARTNER", 
      label: "GUINNESS WORLD RECORD",
      contextualDetails: "Activation and execution partner for the highest grossing Nigerian movie production in history, in partnership with Corporate World Entertainment." 
    },
    { 
      metric: "TRACE ECOSYSTEM", 
      label: "STRATEGIC GLOBAL ALLIANCE",
      contextualDetails: "Collective live operational partners orchestrating massive afro-urban entertainment, connecting creators, music concerts, and charity events." 
    },
    { 
      metric: "DANGOTE PASTA", 
      label: "PACKAGING THINK-TANK",
      contextualDetails: "Core team members responsible for designing and developing the structural concept layout for the new Spaghetti Slim and Standard retail product packaging." 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-36">
      
      {/* 1. HERO ARCHITECTURE SECTION (Droga5 Heavy Conceptual Typography) */}
      <section className="space-y-8 max-w-5xl">
        <div className="inline-flex items-center gap-2 border border-brandGreen/30 bg-brandGreen/5 text-brandGreen font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brandGreen animate-pulse" />
          SYSTEM STATUS: ACTIVE // DESIGN MATRIX FOR THE UNCOMMON FUTURE
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
          WE REIGNITE POTENTIAL WITHIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-700">RESTLESS BRANDS.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed font-light font-sans">
          We live in a time where common thinking reigns supreme, valuing predictability over raw potential. 
          <strong className="text-white font-black"> STAR STATION INC.</strong> is a premier, top-rated innovative management company based in Lagos, Nigeria. We challenge standard paths to stoke uncommon execution.
        </p>
        
        <div className="pt-4">
          <a href="#contact" className="border border-white/20 hover:border-brandGreen text-xs font-black tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:bg-brandGreen hover:text-black rounded-sm inline-block font-mono">
            INITIATE COMMUNICATIONS ↗
          </a>
        </div>
      </section>

      {/* 2. CORE HISTORICAL METRICS GRID (Pentagram Asymmetrical Grid Standard) */}
      <section id="manifesto" className="border-t border-white/10 pt-16 space-y-12">
        <div className="max-w-md">
          <span className="text-xs font-mono text-brandRed font-black tracking-widest block mb-2">// PROVEN RECORD VECTORS</span>
          <h2 className="text-2xl font-black uppercase tracking-tight">STRATEGIC INFRASTRUCTURE MILESTONES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {historicalMilestones.map((milestone, idx) => (
            <div key={idx} className="bg-neutral-900/30 border border-white/5 p-8 rounded-sm hover:bg-neutral-900/80 hover:border-brandGreen/20 transition-all group relative">
              <div className="absolute top-0 left-0 w-1 h-0 bg-brandGreen group-hover:h-full transition-all duration-300" />
              <div className="text-xs font-mono text-neutral-600 font-black tracking-widest mb-6">
                [DATA_NODE_0{idx + 1}]
              </div>
              <div className="text-2xl font-black tracking-tighter text-white uppercase mb-1">
                {milestone.metric}
              </div>
              <div className="text-[10px] font-mono text-brandGreen font-black tracking-widest mb-4">
                {milestone.label}
              </div>
              <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                {milestone.contextualDetails}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAPABILITIES INDEX MATRIX (AKQA Technical Interface Integration) */}
      <section id="portfolio" className="border-t border-white/10 pt-16 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-xs font-mono text-brandGreen font-black tracking-widest block mb-2">// AGENCY OPERATIONS</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">CORE CAPABILITIES</h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono max-w-sm leading-relaxed">
            Integrating advanced strategy, high-impact traditional production, and digital frameworks to transform brand scale across international parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => (
            <div key={idx} className="border border-white/10 p-8 rounded-sm hover:border-brandGreen transition-all duration-300 group bg-neutral-950 flex flex-col justify-between min-h-[240px]">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono text-neutral-600 group-hover:text-brandRed font-black transition-colors">
                    ENGINE_SYS_0{idx + 1}
                  </span>
                  <div className="w-1.5 h-1.5 bg-neutral-800 group-hover:bg-brandGreen transition-colors rounded-full" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-3 group-hover:text-brandGreen transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION CONNECTION GATE (Vaynermedia Deployment Logic) */}
      <section id="contact" className="border border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-900 p-8 md:p-16 rounded-sm text-center space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brandGreen/5 blur-2xl rounded-full" />
        
        <span className="text-xs font-mono text-brandGreen font-black tracking-widest block uppercase">
          // PIPELINE SYNCHRONIZATION INTERFACE
        </span>
        
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter max-w-4xl mx-auto leading-none">
          READY TO ELEVATE ENGAGEMENT AND SHAPE LEGACIES?
        </h2>
        
        <p className="text-xs md:text-sm font-mono text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Collaborate with our corporate think-tank team. Whether you are an established corporate brand scaling market capture or an elite creator positioning global activation networks, our system will orchestrate the transformation.
        </p>
        
        <div className="pt-4 flex flex-wrap justify-center gap-4 font-mono">
          <a href="mailto:trystarstation@gmail.com" className="bg-brandGreen text-black px-8 py-3.5 text-xs font-black tracking-widest uppercase rounded-sm hover:bg-brandRed hover:text-white transition-all">
            EMAIL DIRECT GATEWAY
          </a>
          <a href="tel:+2348091000449" className="border border-white/20 hover:border-white text-white px-8 py-3.5 text-xs font-black tracking-widest uppercase rounded-sm transition-all">
            CALL HOTLINE VECTORS
          </a>
        </div>
      </section>

    </div>
  );
}