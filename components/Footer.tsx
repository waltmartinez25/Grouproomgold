import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-12 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full border border-[#C5A028]/50 flex items-center justify-center">
                    <span className="text-[#C5A028] text-[10px] font-bold">GRG</span>
                </div>
                <h3 className="text-white font-serif italic text-lg tracking-wide uppercase">Group Room Gold</h3>
            </div>
            <p className="text-white/40 text-[11px] tracking-widest max-w-xs mx-auto italic uppercase">
                Restoring clinical excellence to the facilitation hour.
            </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
          {/* Functional Email Link */}
          <a 
            href="mailto:serena16602@gmail.com" 
            className="flex items-center space-x-2 text-white/70 hover:text-[#C5A028] transition-colors group"
          >
            <Mail size={16} className="gold-text group-hover:scale-110 transition-transform" />
            <span className="text-[10px] tracking-widest uppercase font-bold">serena16602@gmail.com</span>
          </a>
          {/* Functional Phone Link */}
          <a 
            href="tel:5613849054" 
            className="flex items-center space-x-2 text-white/70 hover:text-[#C5A028] transition-colors group"
          >
            <Phone size={16} className="gold-text group-hover:scale-110 transition-transform" />
            <span className="text-[10px] tracking-widest uppercase font-bold">561-384-9054</span>
          </a>
        </div>

        {/* Developer Credit */}
        <div className="border-t border-white/5 w-full pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.2em] uppercase text-white/20">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Group Room Gold. All rights reserved.</p>
          <p>
            Visual design by <span className="text-white/40 italic">Premium Creative Lab</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;