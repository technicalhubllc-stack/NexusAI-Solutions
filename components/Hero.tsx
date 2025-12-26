
import React from 'react';
import { Lang, translations } from '../translations';

export const Hero: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = translations[lang].hero;
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {t.badge}
        </div>
        
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight ${lang === 'ar' ? 'font-serif' : ''}`}>
          {t.titleStart} <br />
          <span className="gradient-text">{t.titleEnd}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] active:scale-95">
            {t.ctaPrimary}
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
            {t.ctaSecondary}
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="flex items-center justify-center text-xl font-black italic tracking-widest uppercase">TechCorp</div>
          <div className="flex items-center justify-center text-xl font-black italic tracking-widest uppercase">GlobalData</div>
          <div className="flex items-center justify-center text-xl font-black italic tracking-widest uppercase">AIVision</div>
          <div className="flex items-center justify-center text-xl font-black italic tracking-widest uppercase">FutureSoft</div>
        </div>
      </div>
    </div>
  );
};
