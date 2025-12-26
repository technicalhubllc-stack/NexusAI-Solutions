
import React, { useState, useEffect } from 'react';
import { getAIInsights } from '../services/gemini';
import { AIResponse } from '../types';
import { Lang, translations } from '../translations';

interface HistoryItem {
  id: string;
  query: string;
  response: AIResponse;
  timestamp: number;
}

const STORAGE_KEY = 'nexusai_search_history';

export const SearchGroundingTool: React.FC<{ lang: Lang }> = ({ lang }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const t = translations[lang].insights;

  // Load history from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const prompt = lang === 'ar' ? `باللغة العربية: ${query}` : query;
      const data = await getAIInsights(prompt);
      
      const newHistoryItem: HistoryItem = {
        id: crypto.randomUUID(),
        query: query.trim(),
        response: data,
        timestamp: Date.now()
      };

      setResult(data);
      setHistory(prev => [newHistoryItem, ...prev].slice(0, 10)); // Keep last 10
    } catch (err) {
      setError(lang === 'ar' ? 'فشل التحليل. يرجى التحقق من الإعدادات.' : 'Analysis failed. Ensure your environment is configured correctly.');
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setHistory([]);
    setResult(null);
  };

  const selectHistoryItem = (item: HistoryItem) => {
    setResult(item.response);
    setQuery(item.query);
    // Scroll to result
    const el = document.getElementById('insight-result');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const suggestions = lang === 'ar' ? [
    "اتجاهات الذكاء الاصطناعي في التجزئة 2025",
    "تأثير الذكاء الاصطناعي التوليدي على سلاسل التوريد",
    "أحدث معايير حوكمة الذكاء الاصطناعي",
    "عائد استثمار الأتمتة في التكنولوجيا المالية"
  ] : [
    "AI trends in Retail 2025",
    "Generative AI impact on supply chain",
    "Latest corporate AI governance standards",
    "ROI of AI automation in fintech"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Search Area */}
        <div className="lg:col-span-8">
          <div className="glass p-1 rounded-2xl shadow-2xl overflow-hidden mb-8">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={lang === 'ar' ? 'اسأل عن اتجاهات الصناعة أو المنافسين...' : 'Ask about AI industry trends, competitor shifts, or new technologies...'}
                className="flex-grow bg-slate-900/50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder-slate-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {lang === 'ar' ? 'جاري التحليل...' : 'Analyzing...'}
                  </>
                ) : (
                  lang === 'ar' ? 'تشغيل الاستخبارات' : 'Run Intelligence'
                )}
              </button>
            </form>
          </div>

          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="text-xs px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-400 hover:text-blue-300 transition-all"
              >
                {s}
              </button>
            ))}
          </div>

          {loading && (
            <div className="animate-pulse space-y-4 mb-8">
              <div className="h-4 bg-slate-800 rounded w-3/4"></div>
              <div className="h-4 bg-slate-800 rounded w-full"></div>
              <div className="h-4 bg-slate-800 rounded w-5/6"></div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center mb-8">
              {error}
            </div>
          )}

          {result && !loading && (
            <div id="insight-result" className="glass p-8 rounded-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 mb-8 border-blue-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{lang === 'ar' ? 'رؤية سوقية موثقة' : 'Verified Market Insight'}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{lang === 'ar' ? 'مدعوم ببيانات جوجل' : 'Grounded in Google Search Data'}</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed mb-8">
                {result.text.split('\n').map((line, i) => (
                  <p key={i} className="mb-4">{line}</p>
                ))}
              </div>

              {result.sources.length > 0 && (
                <div className="pt-6 border-t border-white/10">
                  <h5 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-tighter">{lang === 'ar' ? 'مصادر البحث:' : 'Research Sources:'}</h5>
                  <div className="flex flex-wrap gap-4">
                    {result.sources.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.web?.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs bg-slate-800/50 hover:bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-blue-400 hover:text-blue-300 transition-all"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                        {source.web?.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar History Area */}
        <div className="lg:col-span-4">
          <div className="glass p-6 rounded-3xl border-white/5 h-fit sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-slate-200 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.recentHistory}
              </h4>
              {history.length > 0 && (
                <button 
                  onClick={clearHistory}
                  className="text-[10px] uppercase font-bold text-slate-500 hover:text-red-400 transition-colors"
                >
                  {t.clearHistory}
                </button>
              )}
            </div>

            <div className="space-y-3">
              {history.length === 0 ? (
                <p className="text-xs text-slate-500 py-4 italic text-center">
                  {t.noHistory}
                </p>
              ) : (
                history.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => selectHistoryItem(item)}
                    className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all group"
                  >
                    <p className="text-sm text-slate-300 font-medium line-clamp-2 mb-2 group-hover:text-blue-300 transition-colors">
                      {item.query}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-slate-500">
                        {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <span className="text-[10px] text-blue-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        {t.viewResult} →
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
