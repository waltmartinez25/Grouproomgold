import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          <div className="lg:col-span-5 space-y-12 animate-in fade-in slide-in-from-left-10 duration-1000">
             <div className="relative group">
                <div className="aspect-[4/5] border border-white/10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                   <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                    alt="Serena Pierce - Professional Consulting" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="mt-12 bg-white/[0.02] border border-white/5 p-8 italic font-serif text-xl text-white/80 leading-relaxed">
                   "We are all here to build a stronger contender against addiction. Thank you for your service to this field."
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-right-10 duration-1000">
             <div className="space-y-4">
                <span className="text-xs tracking-[0.5em] uppercase gold-text font-bold">The Facilitator</span>
                <h1 className="text-6xl font-serif text-white">Serena Pierce <span className="text-2xl text-white/30 italic block md:inline md:ml-4">CAP</span></h1>
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">Clinical Group Facilitator | Consilium Developer</p>
             </div>

             <div className="space-y-8 text-white/60 text-lg leading-relaxed font-light">
                <p>
                  With over <span className="text-white font-bold">22 years</span> in the field, Serena Pierce has navigated every corner of the treatment industry. As a <span className="text-white">Certified Addiction Professional</span>, her work is defined by a rare bridge between high-level clinical theory and the grit of real-world facilitation.
                </p>
                <div className="grid md:grid-cols-2 gap-12 py-8 border-y border-white/5">
                   <div className="space-y-4">
                      <h4 className="text-xs tracking-widest uppercase text-white font-bold">Philosophy</h4>
                      <p className="text-sm">Structure is the prerequisite for psychological safety. We provide the map so you can provide the healing.</p>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-xs tracking-widest uppercase text-white font-bold">Experience</h4>
                      <p className="text-sm">Extensive work in Detox, Residential, PHP, and IOP across South Florida and national consulting contracts.</p>
                   </div>
                </div>
                <p>
                  Serena’s approach is direct, respectful, and relentlessly practical. She understands that a clinician's greatest asset is their presence—and that presence is impossible when you are drowning in prep work.
                </p>
             </div>

             <div className="pt-8 flex items-center space-x-12">
                <div className="text-center">
                   <p className="text-4xl font-serif text-white">22+</p>
                   <p className="text-[10px] tracking-widest uppercase gold-text">Years</p>
                </div>
                <div className="text-center">
                   <p className="text-4xl font-serif text-white">120+</p>
                   <p className="text-[10px] tracking-widest uppercase gold-text">Modules</p>
                </div>
                <div className="text-center">
                   <p className="text-4xl font-serif text-white">6</p>
                   <p className="text-[10px] tracking-widest uppercase gold-text">Tracks</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;