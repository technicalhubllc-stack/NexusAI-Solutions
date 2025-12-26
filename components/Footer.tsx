
import React from 'react';
import { Lang, translations } from '../translations';

export const Footer: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = translations[lang].footer;
  const common = translations[lang].nav;

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight">NexusAI</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              {lang === 'ar' 
                ? 'متخصصون في تصميم وتطوير ونشر الأنظمة الذكية التي تساعد المؤسسات على اتخاذ قرارات أفضل وتحسين العمليات.' 
                : 'Specializing in the design, development, and deployment of intelligent systems that help organizations make better decisions and optimize operations.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-500 transition-all text-slate-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">{t.company}</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">{t.about}</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">{t.work}</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">{common.insights}</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">{t.careers}</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">{t.investors}</h5>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.investorsText}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-500 hover:bg-white/10 transition-colors">
                SERIES B
              </span>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all cursor-default">
                AIC-CAPITAL
              </span>
              <span className="text-[10px] font-bold px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all cursor-default">
                VERTEX ALPHA
              </span>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-xs font-bold text-slate-200 hover:text-blue-400 transition-colors group">
              {t.viewPitchDeck}
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 group-hover:translate-x-0.5 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-0.5' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div className="md:col-span-3">
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">{t.contact}</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>
                <a href="mailto:hello@nexusai.com" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  hello@nexusai.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {t.location}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 NexusAI Solutions Inc. {t.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-slate-300 transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
