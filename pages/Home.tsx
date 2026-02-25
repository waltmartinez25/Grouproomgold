import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Award, Users, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 lg:pt-24 overflow-hidden pb-20">
        {/* Deep Ambient Textures */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(197,160,40,0.08)_0%,transparent_50%)] -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5A028]/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left-10 duration-1000 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-px w-8 bg-[#C5A028]"></div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A028] font-bold">
                  Clinical Integrity Since 2002
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-white leading-[0.95] tracking-tight mb-8">
                The Gold Standard <br /> 
                <span className="italic gold-text ml-4 md:ml-12">of Facilitation.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-2xl border-l border-white/10 pl-8">
                Group Room Gold is more than a curriculum—it's a clinical roadmap. Designed for facilitators who refuse to settle for "killing time" in the treatment room.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <Link to="/licensing-resources" className="gold-gradient text-black font-bold py-6 px-12 tracking-[0.25em] uppercase text-xs hover:shadow-[0_20px_50px_rgba(197,160,40,0.3)] transition-all transform hover:-translate-y-1">
                Access Curriculum
              </Link>
              <Link to="/curriculum" className="group flex items-center space-x-4 text-white/80 tracking-widest uppercase text-xs font-semibold py-6 px-4 border-b border-white/10 hover:border-[#C5A028] transition-all">
                <span>View All Tracks</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform gold-text" />
              </Link>
            </div>

            {/* Verification Badges */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 opacity-40">
               <div className="flex items-center space-x-3">
                 <Shield size={20} className="text-white" />
                 <span className="text-[9px] tracking-widest uppercase font-bold">CARF Supportive</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Star size={20} className="text-white" />
                 <span className="text-[9px] tracking-widest uppercase font-bold">Evidence Based</span>
               </div>
               <div className="flex items-center space-x-3 hidden md:flex">
                 <Award size={20} className="text-white" />
                 <span className="text-[9px] tracking-widest uppercase font-bold">Clinical Excellence</span>
               </div>
            </div>
          </div>

          {/* The SIGNATURE CARD - Professional clinical branding */}
          <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 order-1 lg:order-2">
             <div className="absolute -top-6 -right-6 w-full h-full border border-[#C5A028]/20 -z-10 translate-x-4 translate-y-4"></div>
             
             <div className="relative aspect-square bg-[#1A1A1A] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] group overflow-hidden border-4 border-[#121212]">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Serena Pierce - Clinical Specialist" 
                  className="w-full h-full object-cover grayscale brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center bg-black/40 backdrop-blur-md border-t border-white/5">
                   <h2 className="text-white font-serif text-3xl md:text-4xl tracking-tight mb-2 uppercase">SERENA PIERCE</h2>
                   <p className="text-white/90 text-sm md:text-base font-light tracking-wide mb-6">Certified Addiction Professional</p>
                   
                   <div className="h-px w-full bg-white/20 mb-6 mx-auto"></div>
                   
                   <p className="text-white/80 text-[10px] md:text-[11px] tracking-[0.2em] uppercase leading-relaxed font-bold">
                     Clinical Group Facilitator <span className="text-[#C5A028] mx-1">|</span> Clinical Consilium Developer
                   </p>
                   
                   <p className="text-white/30 text-[9px] tracking-[0.4em] mt-6 font-light">
                     WWW.GROUPROOMGOLD.COM
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Mission */}
      <section className="py-24 border-y border-white/5 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Modules', val: '120+', desc: 'Facilitator-Ready Content' },
              { label: 'Experience', val: '22yrs', desc: 'In-Field Expertise' },
              { label: 'Specialized Tracks', val: '6', desc: 'Comprehensive Paths' },
              { label: 'Clinical Reach', val: '10k+', desc: 'Clients Impacted' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2 group">
                <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:gold-text transition-colors">{stat.val}</h3>
                <p className="text-[10px] tracking-[0.3em] uppercase gold-text font-bold">{stat.label}</p>
                <p className="text-white/30 text-[9px] italic">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                 Stop Winging Your <br /> <span className="italic text-white/40">Clinical Hour.</span>
               </h2>
               <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light">
                 <p>
                   Many programs struggle with facilitator burnout and inconsistent content. Group Room Gold provides the map so you can provide the healing.
                 </p>
                 <div className="border-l-2 gold-border pl-8 py-4 bg-white/[0.02] text-white italic">
                   "Structure is the prerequisite for psychological safety. Our curriculum restores that structure to the trenches of addiction treatment."
                 </div>
               </div>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {['Manualized Content', 'Spanish Tracks', 'Crisis Protocols', 'Staff Onboarding'].map((item, i) => (
                   <li key={i} className="flex items-center space-x-3 text-sm tracking-wide text-white/80">
                     <CheckCircle size={16} className="gold-text" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="relative">
               <div className="bg-white/[0.02] border border-white/10 p-12 lg:p-20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-3xl rounded-full"></div>
                  <Users className="text-white/5 mb-8" size={80} />
                  <h3 className="text-3xl font-serif text-white mb-6">Built for Facility Directors.</h3>
                  <p className="text-white/40 mb-10 leading-relaxed">
                    Scale your clinical quality across multiple sites with ease. Ensure every staff member, from the newest tech to the lead clinician, has high-quality resources.
                  </p>
                  <Link to="/contact" className="text-xs gold-text font-bold tracking-widest uppercase border-b-2 border-gold-500/30 pb-2 hover:border-gold-500 transition-all">
                    Schedule a Consultation
                  </Link>
               </div>
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500/20 blur-2xl rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;