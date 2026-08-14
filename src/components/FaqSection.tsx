import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, Flame, Wrench } from 'lucide-react';
import { FAQS } from '../data/mockData';
import { BUSINESS_CONFIG } from '../config/business';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [activeCategory, setActiveCategory] = useState<'all' | 'klima' | 'kombi' | 'genel'>('all');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  return (
    <section id="sss" className="py-20 bg-white text-slate-900 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Klima ve kombi bakım, onarım ve servis süreçlerimizle ilgili aklınıza takılabilecek tüm soruların yanıtları.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Tüm Sorular ({FAQS.length})
          </button>
          <button
            onClick={() => setActiveCategory('klima')}
            className={`flex items-center gap-1.5 rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              activeCategory === 'klima'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Klima S.S.S
          </button>
          <button
            onClick={() => setActiveCategory('kombi')}
            className={`flex items-center gap-1.5 rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              activeCategory === 'kombi'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Flame className="h-3.5 w-3.5" />
            Kombi S.S.S
          </button>
          <button
            onClick={() => setActiveCategory('genel')}
            className={`flex items-center gap-1.5 rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              activeCategory === 'genel'
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Wrench className="h-3.5 w-3.5" />
            Genel Servis & Süreç
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-all hover:border-slate-300 hover:bg-white shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 shadow-xs transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-cyan-50 border-cyan-300 text-cyan-700' : ''
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 font-medium">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 text-center rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-black text-slate-900">
            Başka bir sorunuz veya cihazınıza özel bir durum mu var?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto font-medium">
            Muhammet Usta ile doğrudan iletişime geçerek aklınıza takılan konularda bilgi alabilirsiniz.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent("Merhaba Muhammet Usta, aklıma takılan bir soru var.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
              <span>WhatsApp'tan Soru Sorun</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
