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
    <section id="sss" className="py-20 bg-slate-900 text-white relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-base text-slate-300">
            Klima ve kombi bakım, onarım ve servis süreçlerimizle ilgili aklınıza takılabilecek tüm soruların yanıtları.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Tüm Sorular ({FAQS.length})
          </button>
          <button
            onClick={() => setActiveCategory('klima')}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeCategory === 'klima'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Klima S.S.S
          </button>
          <button
            onClick={() => setActiveCategory('kombi')}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeCategory === 'kombi'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Flame className="h-3.5 w-3.5" />
            Kombi S.S.S
          </button>
          <button
            onClick={() => setActiveCategory('genel')}
            className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              activeCategory === 'genel'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Wrench className="h-3.5 w-3.5" />
            Genel Servis & Süreç
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/90 overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-cyan-500/10 border-cyan-500/30' : ''
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-900/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 text-center rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-white">
            Başka bir sorunuz veya cihazınıza özel bir durum mu var?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Muhammet Usta ile doğrudan iletişime geçerek aklınıza takılan konularda bilgi alabilirsiniz.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent("Merhaba Muhammet Usta, aklıma takılan bir soru var.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-500"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp'tan Soru Sorun</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
