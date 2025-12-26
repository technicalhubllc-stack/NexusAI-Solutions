
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SearchGroundingTool } from './components/SearchGroundingTool';
import { DashboardDemo } from './components/DashboardDemo';
import { CaseStudy } from './components/CaseStudy';
import { Footer } from './components/Footer';
import { Lang, translations } from './translations';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 500) setActiveSection('home');
      else if (scrollY < 1800) setActiveSection('services');
      else if (scrollY < 2800) setActiveSection('case-studies');
      else if (scrollY < 3800) setActiveSection('insights');
      else setActiveSection('solutions');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar activeSection={activeSection} lang={lang} setLang={setLang} />
      
      <main>
        <section id="home">
          <Hero lang={lang} />
        </section>

        <section id="services" className="py-24 bg-slate-900/50">
          <Services lang={lang} />
        </section>

        <section id="case-studies" className="py-24">
          <CaseStudy lang={lang} />
        </section>

        <section id="insights" className="py-24 bg-slate-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-serif' : ''}`}>{t.insights.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                {t.insights.subtitle}
              </p>
            </div>
            <SearchGroundingTool lang={lang} />
          </div>
        </section>

        <section id="solutions" className="py-24 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-serif' : ''}`}>
                {lang === 'ar' ? 'الاستخبارات القابلة للتنفيذ' : 'Actionable Intelligence'}
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                {lang === 'ar' ? 'توفر لوحات المعلومات لدينا الوضوح اللازم للقيادة. لا مزيد من الصناديق السوداء - فقط مسارات واضحة مدفوعة بالبيانات للنجاح.' : 'Our dashboards provide the clarity needed to lead. No more black boxes—just clear, data-driven pathways to success.'}
              </p>
            </div>
            <DashboardDemo />
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
