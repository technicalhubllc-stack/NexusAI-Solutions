
import React from 'react';
import { Lang, translations } from '../translations';

interface NavbarProps {
  activeSection: string;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, lang, setLang }) => {
  const t = translations[lang].nav;
  
  const navItems = [
    { label: t.home, href: '#home', id: 'home' },
    { label: t.services, href: '#services', id: 'services' },
    { label: t.caseStudy, href: '#case-studies', id: 'case-studies' },
    { label: t.insights, href: '#insights', id: 'insights' },
    { label: t.solutions, href: '#solutions', id: 'solutions' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight">NexusAI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-500' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-xs font-bold px-3 py-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors uppercase tracking-widest"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              {t.contact}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
