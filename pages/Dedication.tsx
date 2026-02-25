
import React from 'react';
import { Heart } from 'lucide-react';

const Dedication: React.FC = () => {
  return (
    <div className="py-20 lg:py-40 min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        <div className="flex justify-center animate-in zoom-in duration-1000">
            <Heart className="gold-text opacity-40" size={48} strokeWidth={1} />
        </div>

        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <h1 className="text-4xl md:text-6xl font-serif text-white italic leading-tight">
                This work is dedicated to the individuals we have lost to addiction.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
                And to the families who continue to carry them forward. Your loved ones mattered. Your loss matters. This work exists in honor of those lives.
            </p>
        </div>

        <div className="pt-12 animate-in fade-in duration-1000 delay-700">
            <div className="h-px w-24 gold-bg mx-auto mb-8 opacity-20"></div>
            <p className="font-script text-4xl gold-text">Serena Pierce</p>
        </div>

      </div>
    </div>
  );
};

export default Dedication;
