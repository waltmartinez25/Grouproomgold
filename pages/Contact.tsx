import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Loader2, ArrowLeft } from 'lucide-react';

type SubmissionStatus = 'idle' | 'submitting' | 'success';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    type: 'Institutional Licensing',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    /**
     * NOTE TO DEVELOPER: 
     * To make this live, replace this simulation with an actual fetch call:
     * await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) });
     */
    
    // Simulate high-end backend processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      org: '',
      type: 'Institutional Licensing',
      message: ''
    });
    setStatus('idle');
  };

  return (
    <div className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12 animate-in fade-in slide-in-from-left-10 duration-1000">
             <div className="space-y-6">
                <span className="text-xs tracking-[0.5em] uppercase gold-text font-bold">Get In Touch</span>
                <h1 className="text-6xl font-serif text-white italic">Inquire.</h1>
                <p className="text-white/50 text-lg leading-relaxed font-light">
                  Direct inquiries regarding licensing, clinical consultation, or speaking engagements are welcome. 
                </p>
             </div>

             <div className="space-y-10 pt-10">
                <div className="group flex items-center space-x-6">
                   <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold-500/50 transition-all">
                      <Mail size={20} className="gold-text" />
                   </div>
                   <a 
                    href="mailto:serena16602@gmail.com" 
                    className="text-white/60 hover:text-white transition-colors tracking-widest uppercase text-xs font-bold border-b border-white/0 hover:border-gold-500/50 pb-1"
                   >
                    serena16602@gmail.com
                   </a>
                </div>
                <div className="group flex items-center space-x-6">
                   <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold-500/50 transition-all">
                      <Phone size={20} className="gold-text" />
                   </div>
                   <a href="tel:5613849054" className="text-white/60 hover:text-white transition-colors tracking-widest uppercase text-xs font-bold border-b border-white/0 hover:border-gold-500/50 pb-1">
                    561-384-9054
                   </a>
                </div>
                <div className="group flex items-center space-x-6">
                   <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold-500/50 transition-all">
                      <MapPin size={20} className="gold-text" />
                   </div>
                   <span className="text-white/60 tracking-widest uppercase text-xs font-bold">South Florida | National Consulting</span>
                </div>
             </div>

             <div className="p-10 border border-white/5 bg-white/[0.01] flex items-start space-x-4">
                <MessageSquare className="text-white/20 mt-1" />
                <p className="text-xs text-white/30 italic leading-relaxed">
                   Site design and creative support provided by Premium Creative Lab. We specialize in medical and clinical digital presence.
                </p>
             </div>
          </div>

          {/* Right Column: Dynamic Form Area */}
          <div className="lg:col-span-7 relative min-h-[600px]">
            {status !== 'success' ? (
              <div className={`bg-white/[0.02] border border-white/10 p-10 md:p-16 transition-all duration-700 ${status === 'submitting' ? 'opacity-50 pointer-events-none grayscale' : 'opacity-100'}`}>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-white/20" 
                        placeholder="Jane Doe" 
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-white/20" 
                        placeholder="jane@facility.com" 
                      />
                    </div>
                    <div className="space-y-4 md:col-span-2">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Organization / Facility Name</label>
                      <input 
                        type="text" 
                        name="org"
                        required
                        value={formData.org}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-gold-500 transition-all text-white placeholder:text-white/20" 
                        placeholder="Recovery Center Pro" 
                      />
                    </div>
                    <div className="space-y-4 md:col-span-2">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Inquiry Type</label>
                      <select 
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-gold-500 transition-all text-white/60"
                      >
                          <option className="text-black" value="Institutional Licensing">Institutional Licensing</option>
                          <option className="text-black" value="Individual Facilitator License">Individual Facilitator License</option>
                          <option className="text-black" value="Staff Training / Consultation">Staff Training / Consultation</option>
                          <option className="text-black" value="Speaking Engagement">Speaking Engagement</option>
                      </select>
                    </div>
                    <div className="space-y-4 md:col-span-2">
                      <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-bold">Message</label>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-gold-500 transition-all text-white resize-none placeholder:text-white/20" 
                        placeholder="Tell us about your clinical program needs..."
                      ></textarea>
                    </div>
                    <div className="md:col-span-2 pt-6">
                      <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full gold-gradient text-black font-bold py-6 px-10 tracking-[0.3em] uppercase text-[10px] flex items-center justify-center hover:scale-[1.01] transition-all shadow-xl disabled:opacity-70"
                      >
                        {status === 'submitting' ? (
                          <>Processing... <Loader2 size={16} className="ml-3 animate-spin" /></>
                        ) : (
                          <>Send Inquiry <Send size={16} className="ml-3" /></>
                        )}
                      </button>
                    </div>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="bg-white/[0.02] border border-gold-500/20 p-10 md:p-16 flex flex-col items-center text-center space-y-8 animate-in zoom-in fade-in duration-700 h-full justify-center">
                <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center mb-4">
                  <CheckCircle size={40} className="gold-text" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-serif text-white italic">Inquiry Received.</h2>
                  <p className="text-white/50 text-lg font-light leading-relaxed max-w-md">
                    Thank you for reaching out. Serena or a member of our clinical team will review your message and respond shortly to the provided email address.
                  </p>
                </div>
                <div className="pt-8">
                  <button 
                    onClick={resetForm}
                    className="flex items-center space-x-3 text-[10px] tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={14} />
                    <span>Send another message</span>
                  </button>
                </div>
                <div className="pt-12 border-t border-white/5 w-full">
                  <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-light italic">
                    Transaction ID: GRG-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;