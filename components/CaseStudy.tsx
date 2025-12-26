
import React from 'react';
import { Lang, translations } from '../translations';

export const CaseStudy: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = translations[lang].caseStudy;
  const outcomes = [
    { label: lang === 'ar' ? 'توفير سنوي' : 'Annual Savings', value: lang === 'ar' ? '2.7 مليون$' : '$2.7M', detail: lang === 'ar' ? 'الوقود والصيانة' : 'Fuel & Maintenance' },
    { label: lang === 'ar' ? 'تأخر الشحنات' : 'Late Deliveries', value: '-85%', detail: lang === 'ar' ? 'تحسن' : 'Improvement' },
    { label: lang === 'ar' ? 'كفاءة المسار' : 'Route Efficiency', value: '+22%', detail: lang === 'ar' ? 'زيادة المقاييس' : 'Metric Gain' },
    { label: lang === 'ar' ? 'بصمة CO2' : 'CO2 Footprint', value: '-15%', detail: lang === 'ar' ? 'استدامة' : 'Sustainability' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
              {t.badge}
            </div>
            <h3 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${lang === 'ar' ? 'font-serif' : ''}`}>
              {t.title} <span className="text-purple-400 italic">{t.client}</span>
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-3">{t.challenge}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {t.challengeText}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-3">{t.solution}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {t.solutionText}
                </p>
              </div>

              <div className="p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10">
                <h4 className="text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-4">{t.integration}</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1 1V4z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-200 text-sm">{t.integrationService}</span>
                      <p className="text-xs text-slate-400 mt-1">{t.integrationDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-3">{t.implementation}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <span className="text-blue-400 font-bold block mb-1">{t.implementationStep1Title}</span>
                    <span className="text-xs text-slate-400">{t.implementationStep1Desc}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-24">
            {outcomes.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/80 border border-white/5 flex flex-col items-center justify-center text-center group hover:border-purple-500/50 transition-all duration-300">
                <span className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">
                  {item.value}
                </span>
                <span className="text-sm font-bold text-purple-400 mb-1">{item.label}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">{item.detail}</span>
              </div>
            ))}
            <div className="col-span-2 p-8 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-between">
              <p className="text-sm font-medium italic text-slate-300">{t.quote}</p>
              <div className="text-right ml-4">
                <span className="block font-bold text-white text-xs whitespace-nowrap">{t.authorName}</span>
                <span className="block text-[10px] text-slate-500 uppercase">{t.authorRole}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
