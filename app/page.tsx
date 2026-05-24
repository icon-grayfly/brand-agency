import React from 'react';

export default function StarStationWeb() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">STAR</span>
              <span className="text-xs font-bold tracking-[0.3em] text-cyan-400 -mt-1">STATION</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">Our Work</a>
            <a href="#events" className="hover:text-cyan-400 transition-colors">Agency Events</a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold hover:opacity-95 transition-all shadow-md shadow-cyan-500/10">Get In Touch</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 tracking-wide shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            LAGOS, NIGERIA'S PREMIER INNOVATIVE MANAGEMENT AGENCY
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
            We Grow Global Brands & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-rose-400">Talented Artists</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Star Station is a top-rated management collective helping partners rediscover their mission, clarify structural positioning, and execute unforgettable sensory experiences. From package design think-tanks to multi-million consumer activations.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a href="#work" className="px-8 py-4 rounded-xl bg-slate-100 text-slate-950 font-bold hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-lg shadow-white/5">
              Explore Our Portfolio
            </a>
            <a href="#services" className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold hover:bg-slate-850 hover:text-white transition-all transform hover:-translate-y-0.5">
              Our Core Expertise
            </a>
          </div>
        </div>

        {/* 3D HERO INTERACTIVE CARD */}
        <div className="lg:col-span-5 relative flex justify-center z-10" style={{ perspective: '1000px' }}>
          <div className="w-full max-w-md p-1 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-indigo-950/50 group">
            <div className="bg-slate-900/90 rounded-[22px] p-6 backdrop-blur-xl border border-slate-800/40 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex justify-between items-start mb-8">
                <div className="space-y-1">
                  <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Brand Strategy Workshop</p>
                  <h3 className="text-xl font-bold text-white">Rediscover Strategy</h3>
                </div>
                <span className="text-3xl">🚀</span>
              </div>
              <div className="space-y-4 border-l-2 border-slate-800 pl-4 py-1">
                <p className="text-sm text-slate-400 italic">"This process yields a brief that enables structural entities to clearly state their mission, metrics, and core brand personality."</p>
                <div className="flex gap-2 text-xs font-semibold text-slate-400">
                  <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700/60">Research</span>
                  <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700/60">Positioning</span>
                  <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700/60">Scale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE SLIDING MARQUEE BRANDS */}
      <section className="py-12 bg-slate-900/40 border-y border-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Pedigree &amp; Track Record</h2>
            <p className="text-sm font-bold text-slate-300">Trusted By Major Enterprise Brands &amp; Media Outlets</p>
          </div>
        </div>
        
        {/* Sliding Marquee Tracks */}
        <div className="flex gap-10 overflow-hidden select-none relative w-full Mask-Linear">
          <div className="flex justify-around min-w-full shrink-0 gap-12 items-center py-4 animate-marquee whitespace-nowrap">
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">SAMSUNG</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">DANGOTE PASTA</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">TRACE ENTERTAINMENT</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">MALTINA</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">PEAK MILK</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">GALA MEGA</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">GINO PARTY JOLLOF</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">FILMONE BOX OFFICE</span>
          </div>
          <div className="flex justify-around min-w-full shrink-0 gap-12 items-center py-4 animate-marquee whitespace-nowrap" aria-hidden="true">
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">SAMSUNG</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">DANGOTE PASTA</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">TRACE ENTERTAINMENT</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">MALTINA</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">PEAK MILK</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">GALA MEGA</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">GINO PARTY JOLLOF</span>
            <span className="text-xl font-black text-slate-400 tracking-tight hover:text-white transition-colors cursor-default">FILMONE BOX OFFICE</span>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Service Architecture</h2>
          <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">How We Reshape Brand Perspectives</p>
          <p className="text-slate-400">Laying data-driven foundations across physical, visual, and audio market spaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 text-xl font-bold mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">01</div>
            <h3 className="text-xl font-bold text-white mb-3">Enterprise Branding</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Running proprietary Brand Confidence Workshops defining the unique purpose, market positioning, and core behavioral alignment of corporate entities.
            </p>
            <ul className="text-xs font-mono text-slate-500 space-y-1">
              <li>• Private Label Concepting</li>
              <li>• Corporate Identity Mapping</li>
              <li>• Product Portfolio Extensions</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 text-xl font-bold mb-6 group-hover:bg-indigo-500 group-hover:text-slate-950 transition-colors">02</div>
            <h3 className="text-xl font-bold text-white mb-3">Multimedia Mass Media</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Complete generation of hyper-persuasive audio and visual communication lines deployed via strategic multimedia partner grids nationwide.
            </p>
            <ul className="text-xs font-mono text-slate-500 space-y-1">
              <li>• Radio Jingles (Beat FM, Cool FM)</li>
              <li>• TV Broadcast (Trace, MTV Base, DSTV)</li>
              <li>• Digital Smart LED Billboard Mapping</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-rose-500/50 transition-all group hover:-translate-y-1">
            <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400 text-xl font-bold mb-6 group-hover:bg-rose-500 group-hover:text-slate-950 transition-colors">03</div>
            <h3 className="text-xl font-bold text-white mb-3">Holistic Experience</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Building dynamic, highly structured custom audience personas ensuring your product drives meaningful, scalable, real-world customer loop metrics.
            </p>
            <ul className="text-xs font-mono text-slate-500 space-y-1">
              <li>• Multi-Sensory Activations</li>
              <li>• Digital Platform Integration</li>
              <li>• High Loyalty Retention Models</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OUR WORK SECTION: ALTERNATING SIDE-BY-SIDE BLOCKS */}
      <section id="work" className="py-24 bg-slate-900/20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 space-y-4">
            <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Case Studies &amp; Execution</h2>
            <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">Our Work Strategy Portfolio</p>
          </div>

          <div className="space-y-32">
            
            {/* Block 1: Dangote Pasta */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono text-slate-500 tracking-widest block uppercase">Packaging Architecture &amp; Relaunch</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Dangote Pasta National Redesign</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Star Station proudly sat as a core member of the elite strategic Think-Tank Team commissioned to formulate and guide the complete visual overhaul and new packaging layout for Dangote Pasta variants—including Spaghetti Standard, Spaghetti Slim, and Macaroni Elbow styles.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-cyan-400">
                  <span className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">Concept Formulation</span>
                  <span className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">Package Redesigning</span>
                  <span className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">Billboard Advert</span>
                </div>
              </div>
              <div className="lg:col-span-6 relative flex justify-center group" style={{ perspective: '1200px' }}>
                <div className="w-full max-w-md h-72 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] transform transition-all duration-500 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:shadow-cyan-500/10 shadow-xl">
                  <div className="w-full h-full bg-slate-900 rounded-[15px] flex items-center justify-center p-8 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply z-10" />
                    <div className="text-center z-20 space-y-2">
                      <p className="font-black text-2xl tracking-widest text-slate-200">DANGOTE PASTA</p>
                      <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Visual Relaunch Showcase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Gala Mega */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-6">
                <span className="text-xs font-mono text-slate-500 tracking-widest block uppercase">Market Relaunch &amp; Activation Campaign</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Gala Mega Relaunch &amp; Product Marketing</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Revitalizing a legacy market classic since 1962. Star Station mapped out the unified "Chop the Gala, Cheer the Goal" promotional sequence. This ecosystem combined heavy retail market consumer brand activations with modern digitized social media strategies to aggressively drive immediate product adoption metrics.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-indigo-400">
                  <span className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">Product Brand Activation</span>
                  <span className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">Social Media Advert</span>
                  <span className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">Package Design Optimization</span>
                </div>
              </div>
              <div className="lg:col-span-6 lg:order-1 relative flex justify-center group" style={{ perspective: '1200px' }}>
                <div className="w-full max-w-md h-72 rounded-2xl bg-gradient-to-tr from-indigo-500 to-rose-500 p-[1px] transform transition-all duration-500 group-hover:rotate-x-6 group-hover:rotate-y--6 group-hover:shadow-indigo-500/10 shadow-xl">
                  <div className="w-full h-full bg-slate-900 rounded-[15px] flex items-center justify-center p-8 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply z-10" />
                    <div className="text-center z-20 space-y-2">
                      <p className="font-black text-2xl tracking-widest text-slate-200">GALA MEGA</p>
                      <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest">National Relaunch Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 3: Gino Mix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono text-slate-500 tracking-widest block uppercase">FMCG Packaging Evolution</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Gino Party Jollof &amp; Max Flavours</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Collaborating seamlessly on product design modifications for Gino Tomato Seasoning Mix architectures, including the visual deployment tracking frameworks for the newly scaled Gino Max Beef Flavour lineup across high-exposure physical digital formats.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-rose-400">
                  <span className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">Concept Development</span>
                  <span className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">Label Designing</span>
                  <span className="px-3 py-1 bg-slate-900 rounded-md border border-slate-800">FMCG Strategy</span>
                </div>
              </div>
              <div className="lg:col-span-6 relative flex justify-center group" style={{ perspective: '1200px' }}>
                <div className="w-full max-w-md h-72 rounded-2xl bg-gradient-to-tr from-rose-500 to-cyan-500 p-[1px] transform transition-all duration-500 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:shadow-rose-500/10 shadow-xl">
                  <div className="w-full h-full bg-slate-900 rounded-[15px] flex items-center justify-center p-8 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply z-10" />
                    <div className="text-center z-20 space-y-2">
                      <p className="font-black text-2xl tracking-widest text-slate-200">GINO MAX FOODS</p>
                      <p className="text-xs font-mono text-rose-400 uppercase tracking-widest">FMCG Creative Alignment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AGENCY EVENTS SECTION: TICKET COUPE BLOCKS */}
      <section id="events" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Live Experience Execution</h2>
          <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">Agency Events &amp; Entertainment Grids</p>
          <p className="text-slate-400 max-w-xl">
            From delicate high-profile celebrity weddings to massive arena-scale entertainment programs.
          </p>
        </div>

        {/* Ticket Block Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Ticket 1: AY Live */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between relative group hover:border-slate-700 transition-all shadow-xl hover:-translate-y-0.5">
            {/* Left & Right Ticket Punch Cutout Effects */}
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-slate-950 rounded-full border-r border-slate-800 transform -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-slate-950 rounded-full border-l border-slate-800 transform -translate-y-1/2 pointer-events-none" />
            
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded bg-slate-800 border border-slate-700/50 text-xs font-mono text-cyan-400 font-semibold tracking-wider">ARENA CONCERT</span>
                <span className="text-xs font-mono text-slate-500">JUNE 21ST</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">AY Live: Complete Happiness Tour</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Seamless full-scale collaborative execution alongside Maltina and major national distribution networks live at the Transcorp Hilton Main Arena, Abuja. Mapped consumer activations from entry grids to main stage placement loops.
              </p>
            </div>
            <div className="px-8 py-4 bg-slate-900/80 border-t border-slate-800/80 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>VENUE: TRANSCORP HILTON</span>
              <span className="text-cyan-400 font-bold">SOLD OUT</span>
            </div>
          </div>

          {/* Ticket 2: Trace Network Alliance */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between relative group hover:border-slate-700 transition-all shadow-xl hover:-translate-y-0.5">
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-slate-950 rounded-full border-r border-slate-800 transform -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-slate-950 rounded-full border-l border-slate-800 transform -translate-y-1/2 pointer-events-none" />
            
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded bg-slate-800 border border-slate-700/50 text-xs font-mono text-indigo-400 font-semibold tracking-wider">MEDIA ALLIANCE GRID</span>
                <span className="text-xs font-mono text-slate-500">ANNUAL CO-OPS</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">Trace Urban Ecosystem Partnership</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Star Station links seamlessly with the global Trace Afro-urban media grid. Collaborating closely across large-scale music concerts, curated localized comedy tours, and impactful charitable live awareness events nationwide.
              </p>
            </div>
            <div className="px-8 py-4 bg-slate-900/80 border-t border-slate-800/80 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>NETWORKS: TRACE TV / MTV BASE</span>
              <span className="text-indigo-400 font-bold">ACTIVE ALLIANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3D GLASSMORPHIC CONTACT FORM SECTION */}
      <section id="contact" className="py-24 max-w-4xl mx-auto px-6 relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Layered 3D Depth Wrapper (Preserving text clear line of sight) */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-b from-slate-700 via-slate-900 to-slate-800 shadow-2xl">
          <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[23px] p-8 sm:p-12 border border-slate-800/60 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Initiate A Strategic Briefing</h2>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Connect with our Lagos-based management team to launch your brand identity tracking mapping model.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Full Corporate Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Samsung West Africa" 
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Official Email Address</label>
                  <input 
                    type="email" 
                    placeholder="partner@enterprise.com" 
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Target Service Domain</label>
                <select className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-300 focus:outline-none focus:border-cyan-500 text-sm transition-colors">
                  <option>Brand Overhaul / Packaging Rethink Think-Tank</option>
                  <option>Mass Media Deployment (TV, Radio, Billboard)</option>
                  <option>Arena Concert Production &amp; Live Activations</option>
                  <option>Artist Management Portfolio Strategy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Project Objectives Brief</label>
                <textarea 
                  rows="4" 
                  placeholder="Outline key metrics, timeline parameters, and current positioning challenges..." 
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 text-sm transition-colors resize-none"
                />
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-550/10 hover:opacity-95 transition-opacity">
                Transmit Corporate Briefing Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER WITH REINFORCED BRAND LOGO */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo Integration matching Header footprint */}
          <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-rose-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-black text-sm">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-wider text-white">STAR</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-400 -mt-1">STATION</span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-slate-500 font-mono">
              &copy; {new Date().getFullYear()} STAR STATION HOLDINGS. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[11px] text-slate-600">
              Innovative Management Company &bull; Lagos, Nigeria
            </p>
          </div>
        </div>
      </footer>

      {/* ADDING MARQUEE ANIMS & MASK PROPERTIES VIA INLINE CSS */}
      <style bg-scoped="true">{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .Mask-Linear {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>

    </div>
  );
}