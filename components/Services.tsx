
import React, { useState, useEffect } from 'react';
import { Lang, translations } from '../translations';

const getServicesData = (lang: Lang) => [
  {
    id: 'predictive',
    title: lang === 'ar' ? 'التحليلات التنبؤية' : 'Predictive Analytics',
    description: lang === 'ar' ? 'حول بياناتك التاريخية إلى استراتيجيات مستقبلية.' : 'Transform historical data into future-proof strategies by identifying patterns before they become problems.',
    details: lang === 'ar' ? 'تحل محركاتنا التنبؤية تحديات حرجة مثل تقلب الطلب وتوقف المعدات.' : 'Our predictive engines solve critical forecasting challenges such as demand volatility, customer churn, and equipment failure risk.',
    problems: lang === 'ar' ? ['اختلال المخزون', 'مخاطر الائتمان', 'فقدان العملاء'] : ['Inventory imbalances', 'Unpredictable customer churn', 'Financial risk exposure'],
    features: lang === 'ar' ? ['خوارزميات اكتشاف الشذوذ', 'التنبؤ متعدد المتغيرات', 'إعادة تدريب النماذج آلياً'] : ['Anomaly detection algorithms', 'Multivariate forecasting', 'Automated model retraining'],
    tech: lang === 'ar' ? ['الشبكات العصبية', 'السلاسل الزمنية'] : ['Neural Networks', 'Time-Series'],
    useCases: lang === 'ar' ? ['التنبؤ بالطلب بالتجزئة', 'نماذج تسجيل الائتمان'] : ['Retail Demand Forecasting', 'Credit Scoring Models'],
    advancedTech: lang === 'ar' ? ['إكس جي بوست (XGBoost)', 'نماذج LSTM المتقدمة'] : ['XGBoost', 'LSTMs'],
    architecture: lang === 'ar' ? 'بنية هجينة تجمع بين نماذج Transformer للبيانات التسلسلية و Gradient Boosting للتصنيف.' : 'Hybrid architecture utilizing Transformer models for sequential data and Gradient Boosting for tabular classification.',
    roi: '+35%',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M12 12h.01M15 12h.01" className="opacity-40" />
      </svg>
    ),
  },
  {
    id: 'automation',
    title: lang === 'ar' ? 'الأتمتة الذكية' : 'Intelligent Automation',
    description: lang === 'ar' ? 'تجاوز الأتمتة البسيطة مع وكلاء إدراكيين.' : 'Go beyond basic RPA with cognitive agents that handle complex, non-linear business workflows.',
    details: lang === 'ar' ? 'نقوم بأتمتة المهام المعقدة مثل معالجة المستندات وجدولة الخدمات اللوجستية.' : 'We automate high-cognitive-load tasks like intelligent document processing, multi-channel support routing, and autonomous logistics scheduling.',
    problems: lang === 'ar' ? ['أخطاء إدخال البيانات', 'بطء وقت الاستجابة'] : ['Manual data entry errors', 'Slow response times'],
    features: lang === 'ar' ? ['تنسيق سير العمل المتكامل', 'الفهم الإدراكي للمستندات', 'تخصيص الموارد ديناميكياً'] : ['End-to-end workflow orchestration', 'Cognitive document understanding', 'Dynamic resource allocation'],
    tech: lang === 'ar' ? ['معالجة اللغات (NLP)', 'رؤية الكمبيوتر'] : ['NLP', 'Computer Vision'],
    useCases: lang === 'ar' ? ['معالجة المطالبات آلياً', 'وكلاء دعم 24/7'] : ['Automated Claims Processing', '24/7 Multi-lingual AI Agents'],
    advancedTech: lang === 'ar' ? ['لانج تشين (LangChain)', 'نموذج BERT'] : ['LangChain', 'BERT'],
    architecture: lang === 'ar' ? 'نظام متعدد الوكلاء مبني على تقنيات Orchestration لدمج نماذج LLM مع أنظمة المؤسسة.' : 'Multi-agent system based on orchestration techniques to integrate LLMs with legacy enterprise systems.',
    roi: '4.5x',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    id: 'platforms',
    title: lang === 'ar' ? 'منصات الذكاء الاصطناعي المخصصة' : 'Custom AI Platforms',
    description: lang === 'ar' ? 'أنظمة ذكاء اصطناعي آمنة ومبنية على معرفتك الفريدة.' : 'Secure, private, and proprietary AI ecosystems built on your organization’s unique knowledge base.',
    details: lang === 'ar' ? 'نستخدم تقنيات الـ RAG لضمان دقة الإجابات وخصوصية بيانات المؤسسة.' : 'Generic LLMs risk data privacy; our custom platforms solve this by using RAG (Retrieval-Augmented Generation) on local datasets.',
    problems: lang === 'ar' ? ['تشتت البيانات', 'تسرب الملكية الفكرية'] : ['Data fragmentation', 'IP leakage risks with public AI'],
    features: lang === 'ar' ? ['الامتثال لتخزين البيانات محلياً', 'استيعاب البيانات متعدد الوسائط', 'ضوابط وصول دقيقة'] : ['Local data residency compliance', 'Multi-modal data ingestion', 'Granular access controls'],
    tech: lang === 'ar' ? ['قواعد بيانات المتجهات', 'تقنية RAG'] : ['Vector DB', 'RAG'],
    useCases: lang === 'ar' ? ['مساعد أبحاث الصيدلة', 'ذكاء المستندات القانونية'] : ['Pharma Research Assistant', 'Legal Document Intelligence'],
    advancedTech: lang === 'ar' ? ['باينكون (Pinecone)', 'كوبرنيتيس (Kubernetes)'] : ['Pinecone', 'Kubernetes'],
    architecture: lang === 'ar' ? 'بنية RAG موزعة مع طبقة أمان مدمجة لضمان عدم تسريب البيانات الحساسة.' : 'Distributed RAG architecture with an embedded security layer to prevent sensitive data leakage.',
    roi: '100% Privacy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    id: 'dashboards',
    title: lang === 'ar' ? 'لوحات المعلومات الذكية' : 'Smart Dashboards',
    description: lang === 'ar' ? 'سرد مرئي تفاعلي لاتخاذ قرارات فورية.' : 'Interactive visual narratives that synthesize complex AI outputs into immediate executive decisions.',
    details: lang === 'ar' ? 'نحول مقاييس التعلم الآلي المجردة إلى مؤشرات أداء رئيسية مألوفة للقيادة.' : 'Data is useless without clarity. Our dashboards solve the "black box" problem of AI by visualizing confidence scores.',
    problems: lang === 'ar' ? ['دورات القرار البطيئة', 'نقص الشفافية'] : ['Slow decision cycles', 'Lack of transparency in AI models'],
    features: lang === 'ar' ? ['تحليل الأسباب الجذرية التفصيلي', 'ملخصات تنفيذية قابلة للتصدير', 'تنبيهات ومحفزات فورية'] : ['Drill-down root cause analysis', 'Exportable executive summaries', 'Real-time alerts & triggers'],
    tech: lang === 'ar' ? ['رياكت (React)', 'ريتشارتس (Recharts)'] : ['React', 'Recharts'],
    useCases: lang === 'ar' ? ['مراقبة الاحتيال المباشرة', 'مراكز قيادة التوريد'] : ['Real-time Fraud Monitoring', 'Supply Chain Command Centers'],
    advancedTech: lang === 'ar' ? ['جراف كيو إل (GraphQL)', 'مكتبة D3.js'] : ['GraphQL', 'D3.js'],
    architecture: lang === 'ar' ? 'بنية Micro-frontend مع معالجة بيانات فورية عبر WebSockets.' : 'Micro-frontend architecture with real-time stream processing via WebSockets.',
    roi: '12h Saved/Week',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" className="opacity-20" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const Services: React.FC<{ lang: Lang }> = ({ lang }) => {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'impact'>('overview');
  const t = translations[lang].services;
  const servicesData = getServicesData(lang);

  // Body scroll lock
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const closeModal = () => setSelectedService(null);

  const tabs = [
    { id: 'overview', label: lang === 'ar' ? 'نظرة عامة' : 'Overview' },
    { id: 'tech', label: lang === 'ar' ? 'البنية التقنية' : 'Architecture' },
    { id: 'impact', label: lang === 'ar' ? 'الأثر التجاري' : 'Business Impact' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'ar' ? 'font-serif' : ''}`}>{t.title}</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {servicesData.map((service) => (
          <div 
            key={service.id}
            className="group p-8 rounded-3xl glass transition-all duration-500 border border-white/5 flex flex-col h-full hover:bg-white/5 hover:border-blue-500/30 cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <div className="flex items-start justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                {service.icon}
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.techLabel}</span>
                <div className="flex gap-1">
                  {service.tech.map((techItem, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-400 rounded-md uppercase font-bold tracking-tighter">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${lang === 'ar' ? 'font-serif' : ''}`}>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5" })}
              </div>
              <span>{service.title}</span>
            </h3>
            <p className="text-blue-400/80 font-medium text-sm mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="mt-auto">
              <button 
                className="w-full py-4 rounded-xl bg-blue-500/10 hover:bg-blue-600 text-blue-400 hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2 group"
              >
                {t.learnMore}
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Deep-Dive Modal Overlay */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8"
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl animate-in fade-in duration-500"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] overflow-hidden bg-slate-950/50 md:rounded-[3rem] border border-white/10 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 flex flex-col">
            
            {/* Header Section */}
            <div className="p-8 md:p-12 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 relative bg-gradient-to-b from-blue-600/5 to-transparent">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-500/30">
                  {React.cloneElement(selectedService.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <div>
                  <h4 className={`text-3xl md:text-4xl font-black ${lang === 'ar' ? 'font-serif' : ''}`}>{selectedService.title}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-blue-400 font-bold uppercase tracking-[0.3em]">{lang === 'ar' ? 'استبيان تقني شامل' : 'Comprehensive Tech Survey'}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">ID: {selectedService.id.toUpperCase()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-green-400">ROI: {selectedService.roi}</span>
                </div>
                <button 
                  onClick={closeModal}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 transition-all active:scale-90"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="px-12 pt-4 flex gap-8 border-b border-white/5">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === tab.id ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-t-full shadow-[0_-4px_10px_rgba(59,130,246,0.5)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column: Dynamic Tabs */}
                <div className="lg:col-span-8 space-y-12">
                  
                  {activeTab === 'overview' && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-left-4 duration-500">
                      <section>
                        <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">{lang === 'ar' ? 'الرؤية الاستراتيجية' : 'Strategic Vision'}</h5>
                        <p className="text-xl text-slate-200 leading-relaxed font-medium bg-slate-900/40 p-8 rounded-3xl border border-white/5">
                          {selectedService.details}
                        </p>
                      </section>

                      <section>
                        <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">{t.keyFeatures}</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedService.features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/5 group hover:bg-blue-600/10 transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">
                                {i + 1}
                              </div>
                              <span className="text-slate-200 text-sm font-semibold">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  )}

                  {activeTab === 'tech' && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-left-4 duration-500">
                      <section>
                        <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">{lang === 'ar' ? 'هندسة النظام' : 'System Engineering'}</h5>
                        <div className="p-8 rounded-3xl bg-slate-900/40 border border-blue-500/20">
                          <p className="text-lg text-blue-100 font-mono mb-8 leading-relaxed italic">
                            {selectedService.architecture}
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {selectedService.tech.concat(selectedService.advancedTech).map((t: string, i: number) => (
                              <div key={i} className="px-4 py-3 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center text-center">
                                <span className="text-[10px] font-black text-slate-400 uppercase">{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>

                      <section>
                        <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">{lang === 'ar' ? 'سير العمل التقني' : 'Technical Workflow'}</h5>
                        <div className="flex flex-col gap-6 relative">
                          <div className="absolute top-0 bottom-0 left-[21px] w-px bg-blue-500/20" />
                          {[
                            { l: 'Data Ingestion', d: 'Automated extraction from legacy SQL and NoSQL sources.' },
                            { l: 'Pre-processing', d: 'Noise reduction using proprietary denoising filters.' },
                            { l: 'Inference', d: 'Real-time prediction with latency sub-50ms.' },
                            { l: 'Feedback Loop', d: 'Active learning module updates weights daily.' }
                          ].map((step, i) => (
                            <div key={i} className="flex gap-6 relative z-10">
                              <div className="w-11 h-11 rounded-full bg-slate-950 border-2 border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">
                                0{i+1}
                              </div>
                              <div className="pt-2">
                                <h6 className="font-bold text-slate-100 mb-1">{step.l}</h6>
                                <p className="text-xs text-slate-500 leading-relaxed">{step.d}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  )}

                  {activeTab === 'impact' && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-left-4 duration-500">
                      <section>
                        <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">{t.useCases}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {selectedService.useCases.map((uc: string, i: number) => (
                            <div key={i} className="p-8 rounded-[2rem] glass border border-purple-500/10 hover:border-purple-500/30 transition-all group overflow-hidden relative">
                              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full" />
                              <h6 className="text-purple-400 font-black text-xs uppercase tracking-widest mb-4">Enterprise Case {i+1}</h6>
                              <p className="text-slate-100 font-bold text-lg leading-tight group-hover:text-white transition-colors">
                                {uc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-3xl border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                          </div>
                          <h5 className="font-bold text-slate-100">Performance Projections</h5>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                          <div>
                            <span className="block text-2xl font-black text-green-400 mb-1">{selectedService.roi}</span>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">Projected ROI</span>
                          </div>
                          <div>
                            <span className="block text-2xl font-black text-blue-400 mb-1">90 Days</span>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">Breakeven Period</span>
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <span className="block text-2xl font-black text-purple-400 mb-1">24/7</span>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">Operational Uptime</span>
                          </div>
                        </div>
                      </section>
                    </div>
                  )}
                </div>

                {/* Right Column: Context & Action */}
                <div className="lg:col-span-4 space-y-8 h-fit lg:sticky lg:top-0">
                  {/* Critical Problems Solved */}
                  <div className="p-8 rounded-[2.5rem] bg-slate-900/60 border border-white/10 shadow-xl">
                    <h5 className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-6">{t.problemFocus}</h5>
                    <div className="space-y-4">
                      {selectedService.problems.map((p: string, i: number) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 group-hover:scale-110 transition-transform">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                          </div>
                          <span className="text-sm text-slate-300 font-medium">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Implementation CTA */}
                  <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                    <h5 className="font-bold text-xl mb-3 relative z-10">{lang === 'ar' ? 'ابدأ التنفيذ اليوم' : 'Initiate Phase 1'}</h5>
                    <p className="text-blue-100 text-sm mb-8 leading-relaxed relative z-10">
                      {lang === 'ar' 
                        ? 'جدولة مراجعة فنية مع فريقنا لمناقشة دمج هذه الحلول في بنيتكم.' 
                        : 'Schedule a technical scoping session with our solution architects to evaluate integration pathways.'}
                    </p>
                    <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl active:scale-95 relative z-10">
                      {translations[lang].nav.contact}
                    </button>
                  </div>

                  {/* Download Spec */}
                  <button className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    {lang === 'ar' ? 'تحميل المواصفات التقنية' : 'Download Technical PDF'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
