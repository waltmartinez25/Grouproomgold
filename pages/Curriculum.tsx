import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Users, Monitor, Globe, ChevronRight, Zap, Target } from 'lucide-react';

const Curriculum: React.FC = () => {
  const tracks = [
    {
      title: 'Substance Use Core',
      modalities: 'Applied CBT, Advanced Relapse Prevention & Neurobiology',
      description: 'A deep dive into the physiological foundations of addiction, identifying cognitive distortions, and establishing long-term stabilization protocols.',
      icon: <Layers className="gold-text" size={28} />
    },
    {
      title: 'Mental Health Primary',
      modalities: 'DBT Skills Integration, Emotional Regulation & Mindfulness',
      description: 'Stabilization-focused modules designed specifically for dual-diagnosis milieus and primary mental health residential environments.',
      icon: <Target className="gold-text" size={28} />
    },
    {
      title: 'Trauma-Informed Track',
      modalities: 'Somatic Safety, Internal Grounding & Psycho-education',
      description: 'Structured, safety-first approaches to understanding trauma responses while building robust internal resources for clinical processing.',
      icon: <Zap className="gold-text" size={28} />
    },
    {
      title: 'Gender-Responsive',
      modalities: 'Relational Dynamics, Role-Specific Healing & Safe-Space facilitation',
      description: 'Addressing the complex societal, biological, and relational dynamics unique to men and women in early and sustained recovery.',
      icon: <Users className="gold-text" size={28} />
    },
    {
      title: 'Telehealth Optimized',
      modalities: 'High-Engagement Digital Interaction & Remote Clinical Intimacy',
      description: 'Specialized curricula adapted for the digital screen to prevent virtual fatigue and maintain the depth of the clinical experience.',
      icon: <Monitor className="gold-text" size={28} />
    },
    {
        title: 'Spanish Language Track',
        modalities: 'Natively Authored Content, Cultural Idioms & Hispanic Dynamics',
        description: 'Authentic clinical curriculum (Grupos en Español) that respects cultural nuances and family values rather than literal translations.',
        icon: <Globe className="gold-text" size={28} />
    }
  ];

  return (
    <div className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Unified Catalog Header */}
        <div className="max-w-4xl mb-24 space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <span className="text-xs tracking-[0.5em] uppercase gold-text font-bold">The Complete Catalog</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white">120+ Modules. <br /><span className="italic text-white/30">6 Specialized Tracks.</span></h1>
            <p className="text-xl text-white/50 leading-relaxed font-light">
                One consolidated library. Every track includes Facilitator Guides, Discussion Starters, and Client Handouts designed to work across all levels of care.
            </p>
        </div>

        {/* Tracks Grid - Entire Card Clickable */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-32">
            {tracks.map((track, idx) => (
                <Link 
                  key={idx} 
                  to="/contact"
                  className="p-12 bg-black hover:bg-white/[0.03] transition-all duration-500 flex flex-col justify-between group h-full relative overflow-hidden"
                >
                    {/* Hover Effect Light */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="space-y-8 relative z-10">
                        <div className="flex justify-between items-start">
                            {track.icon}
                            <span className="text-[9px] tracking-[0.3em] uppercase text-white/20 font-bold">Track 0{idx + 1}</span>
                        </div>
                        <div>
                           <h3 className="text-2xl font-serif text-white mb-3 group-hover:gold-text transition-colors">{track.title}</h3>
                           <p className="text-[10px] leading-relaxed tracking-widest uppercase gold-text font-bold mb-6 border-l border-gold-500/30 pl-4">
                            {track.modalities}
                           </p>
                           <p className="text-white/40 text-sm leading-relaxed font-light">{track.description}</p>
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
                        <span className="text-[9px] tracking-[0.3em] uppercase text-white/60 font-bold group-hover:text-white transition-colors">Inquire for this track</span>
                        <ChevronRight size={16} className="text-white/20 group-hover:translate-x-1 transition-transform group-hover:text-gold-500" />
                    </div>
                </Link>
            ))}
        </div>

        {/* Integrated Spanish Track Callout */}
        <section className="relative overflow-hidden bg-purple-950/10 p-12 lg:p-24 border border-purple-500/20 asymmetric-border">
           <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full"></div>
           <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                 <div className="flex items-center space-x-3">
                    <Globe className="text-purple-400" size={24} />
                    <span className="text-xs tracking-[0.4em] uppercase text-purple-400 font-bold">Auténtico en Español</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-serif text-white">Grupos en Español <br /><span className="italic text-purple-400">Nativo.</span></h2>
                 <p className="text-white/60 text-lg leading-relaxed font-light">
                   We refuse literal translations. Our Spanish tracks are natively authored to respect cultural idioms, family values, and Hispanic clinical dynamics. This integration ensures the integrity of the clinical hour for Spanish-speaking clients.
                 </p>
                 <div className="pt-4">
                    <Link to="/contact" className="inline-block py-4 px-10 border border-purple-400/40 text-purple-400 text-[10px] tracking-widest uppercase font-bold hover:bg-purple-400/10 transition-all">
                        Request Spanish Sample
                    </Link>
                 </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                 <div className="relative">
                    <div className="w-64 h-64 border-2 border-purple-500/20 rounded-full animate-pulse"></div>
                    <Globe size={180} className="text-purple-500/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                 </div>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Curriculum;