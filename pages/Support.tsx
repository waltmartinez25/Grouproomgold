import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Video, Users, Monitor, BookOpen } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Licensing & Support Section */}
        <div className="grid lg:grid-cols-12 gap-16 mb-40 items-center">
           {/* Left: Licensing Info */}
           <div className="lg:col-span-6 space-y-12 animate-in fade-in slide-in-from-left-10 duration-1000">
              <div className="space-y-6">
                <span className="text-xs tracking-[0.5em] uppercase gold-text font-bold">Licensing & Support</span>
                <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                  Clinical <br /><span className="italic text-white/30">Standardization.</span>
                </h1>
              </div>

              <div className="max-w-xl space-y-8">
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  Group Room Gold is licensed to protect the integrity and intellectual property of the curriculum and ensure ethical use within treatment settings. Licensing options are available for <span className="text-white font-semibold">individual facilitators</span> and <span className="text-white font-semibold">treatment centers</span>.
                </p>
                
                <div className="bg-white/[0.03] border-l-4 gold-border p-8 space-y-4">
                  <h4 className="text-white font-bold tracking-widest uppercase text-xs">Pricing Inquiry</h4>
                  <p className="text-white/50 text-base leading-relaxed">
                    Pricing is provided upon request to allow appropriate facility-level customization and to protect licensed materials.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                 <Link to="/contact" className="gold-gradient text-black font-bold py-6 px-16 tracking-widest uppercase text-xs inline-block shadow-[0_20px_40px_rgba(197,160,40,0.2)] hover:-translate-y-1 transition-all">
                    Inquire for Pricing
                 </Link>
              </div>
           </div>

           {/* Right: Centered Boxed Companion Resource Section */}
           <div className="lg:col-span-6 relative">
              <div className="bg-white/[0.02] border border-white/10 p-10 md:p-16 relative overflow-hidden group animate-in fade-in zoom-in duration-1000 delay-300 flex flex-col items-center text-center">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full"></div>
                 
                 <div className="relative z-10 space-y-8 w-full">
                    <div className="flex items-center justify-center space-x-3 text-red-500/80">
                        <BookOpen size={20} />
                        <span className="text-[10px] tracking-[0.4em] uppercase font-bold">The Facilitator Lifeline</span>
                    </div>

                    <div className="max-w-md mx-auto">
                      <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight italic mb-4">
                        "Oh Shit, I Have <br /> Group Today."
                      </h2>
                      <p className="text-white/40 text-sm leading-relaxed font-light">
                        The definitive companion resource for navigators of the clinical trenches. Ready-to-use interventions for high-pressure moments when prep time is zero.
                      </p>
                    </div>

                    {/* Centered Book Visual */}
                    <div className="relative perspective-1000 pt-8 flex justify-center">
                        <div className="relative w-56 h-72 transition-transform duration-700 hover:rotate-y-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
                           {/* Book Spine */}
                           <div className="absolute left-0 top-0 bottom-0 w-[14px] bg-zinc-800 border-r border-black/50 rounded-l-sm z-20"></div>
                           
                           {/* Book Cover */}
                           <div className="absolute inset-0 bg-neutral-950 border-l-[14px] border-zinc-800 flex flex-col items-center justify-center p-8 text-center space-y-4">
                              <span className="font-script text-2xl gold-text opacity-40">Group Room Gold</span>
                              <div className="h-px w-10 bg-white/10"></div>
                              <div className="space-y-1">
                                 <h4 className="text-white font-serif text-2xl">Oh Shit,</h4>
                                 <h4 className="text-white font-serif text-2xl">I Have Group</h4>
                              </div>
                              <div className="pt-4">
                                 <p className="text-white/20 text-[7px] tracking-[0.5em] uppercase">Companion Resource</p>
                              </div>
                           </div>
                        </div>
                    </div>

                    <p className="text-[9px] text-white/20 tracking-[0.3em] uppercase italic pt-4">
                       Professional & Institutional License Exclusive
                    </p>
                 </div>
              </div>
           </div>
        </div>

        {/* Training & Teaching Section */}
        <section className="py-32 border-t border-white/5">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <div className="space-y-4">
                    <span className="text-xs tracking-[0.5em] uppercase gold-text font-bold">Expansion & Learning</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white">Training & <span className="italic text-white/30">Teaching.</span></h2>
                 </div>
                 
                 <div className="text-white/60 text-lg leading-relaxed space-y-8 font-light">
                   <p>
                     Serena offers facilitator training, staff development, and clinical consultation. Training is available in person or via Zoom to accommodate national and regional programs.
                   </p>
                   <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div className="p-6 border border-white/5 bg-white/[0.02] flex items-center space-x-4">
                        <Users size={24} className="gold-text" />
                        <span className="text-xs tracking-widest uppercase font-bold text-white">In-Person Immersion</span>
                      </div>
                      <div className="p-6 border border-white/5 bg-white/[0.02] flex items-center space-x-4">
                        <Video size={24} className="gold-text" />
                        <span className="text-xs tracking-widest uppercase font-bold text-white">Remote Staff Zoom</span>
                      </div>
                   </div>
                   <p className="italic text-white/80 border-l-2 gold-border pl-8 py-4">
                     Payment arrangements for training and consultation are discussed directly to allow flexibility based on program needs and facility scale.
                   </p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 {[
                   { icon: <Clock />, step: 'Staff Development', detail: 'Elevating clinical delivery.' },
                   { icon: <ShieldCheck />, step: 'Compliance', detail: 'Ensuring ethical standards.' },
                   { icon: <Monitor />, step: 'Implementation', detail: 'Smooth milieu integration.' },
                   { icon: <Users />, step: 'Consultation', detail: 'Clinical problem solving.' }
                 ].map((box, i) => (
                   <div key={i} className="p-8 border border-white/5 hover:border-gold-500/30 transition-all flex flex-col justify-center text-center space-y-4 bg-zinc-950">
                      <div className="mx-auto text-white/20">{box.icon}</div>
                      <h4 className="text-[10px] tracking-widest uppercase text-white font-bold">{box.step}</h4>
                      <p className="text-[10px] text-white/40 leading-relaxed uppercase">{box.detail}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Support;