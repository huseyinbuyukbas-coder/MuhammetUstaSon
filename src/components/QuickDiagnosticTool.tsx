import React, { useState } from 'react';
import { HelpCircle, ArrowRight, MessageCircle, AlertTriangle, CheckCircle, Flame, Sparkles } from 'lucide-react';
import { QUICK_DIAGNOSES } from '../data/mockData';
import { BUSINESS_CONFIG } from '../config/business';
import { QuickDiagnosis } from '../types';

export const QuickDiagnosticTool: React.FC = () => {
  const [deviceFilter, setDeviceFilter] = useState<'all' | 'klima' | 'kombi'>('all');
  const [selectedDiag, setSelectedDiag] = useState<QuickDiagnosis>(QUICK_DIAGNOSES[0]);

  const filteredDiagnoses = QUICK_DIAGNOSES.filter(
    (d) => deviceFilter === 'all' || d.device === deviceFilter
  );

  const handleWhatsAppConsult = (item: QuickDiagnosis) => {
    const text = `Merhaba Muhammet Usta, ${item.device.toUpperCase()} cihazımda "${item.symptom}" sorunu yaşıyorum. Arıza tespiti ve servis için müsait misiniz?`;
    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="ariza-teshis" className="py-20 bg-slate-900 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>İnteraktif Arıza Teşhis Aracı</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Cihazınızdaki Sorunu Seçin, Olası Sebebini ve Çözümünü Görün
          </h2>
          <p className="text-base text-slate-300">
            Sık karşılaşılan klima ve kombi arızalarının teknik nedenlerini öğrenin, tek tıkla doğrudan ustaya ileterek ön bilgi alın.
          </p>
        </div>

        {/* Device Filter */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => {
              setDeviceFilter('all');
              setSelectedDiag(QUICK_DIAGNOSES[0]);
            }}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              deviceFilter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
            }`}
          >
            Tüm Arızalar
          </button>
          <button
            onClick={() => {
              setDeviceFilter('klima');
              const firstKlima = QUICK_DIAGNOSES.find(d => d.device === 'klima');
              if (firstKlima) setSelectedDiag(firstKlima);
            }}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              deviceFilter === 'klima'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            Klima Arızaları
          </button>
          <button
            onClick={() => {
              setDeviceFilter('kombi');
              const firstKombi = QUICK_DIAGNOSES.find(d => d.device === 'kombi');
              if (firstKombi) setSelectedDiag(firstKombi);
            }}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              deviceFilter === 'kombi'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
            }`}
          >
            <Flame className="h-4 w-4" />
            Kombi Arızaları
          </button>
        </div>

        {/* Diagnostic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptom List */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Sık Yaşanan Belirtiler (Birine Tıklayın):
            </h3>
            {filteredDiagnoses.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedDiag(item)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  selectedDiag.id === item.id
                    ? 'border-amber-400 bg-slate-800 shadow-md ring-1 ring-amber-400/50'
                    : 'border-slate-800 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${
                    item.device === 'klima' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {item.device}
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    {item.symptom}
                  </span>
                </div>
                <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${
                  selectedDiag.id === item.id ? 'text-amber-400 translate-x-1' : 'text-slate-500'
                }`} />
              </button>
            ))}
          </div>

          {/* Right Column: Diagnosis Report Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-amber-500/5 rounded-full blur-2xl"></div>

              {/* Title & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Teknik Değerlendirme & Teşhis
                  </span>
                </div>
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                  selectedDiag.urgency === 'Yüksek'
                    ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                    : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                }`}>
                  Aciliyet: {selectedDiag.urgency}
                </span>
              </div>

              {/* Selected Symptom */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-400 font-medium">İncelenen Şikayet:</span>
                  <h4 className="text-lg font-bold text-white mt-0.5">
                    {selectedDiag.symptom}
                  </h4>
                </div>

                {/* Likely Cause */}
                <div className="rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1.5">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Muhtemel Teknik Nedenler:</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedDiag.likelyReason}
                  </p>
                </div>

                {/* Recommended Action */}
                <div className="rounded-xl bg-emerald-950/40 p-4 border border-emerald-800/40">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1.5">
                    <CheckCircle className="h-4 w-4" />
                    <span>Ustanın Önerdiği Profesyonel Çözüm:</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedDiag.recommendedAction}
                  </p>
                </div>

                {/* CTA Box */}
                <div className="pt-3">
                  <button
                    onClick={() => handleWhatsAppConsult(selectedDiag)}
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Bu Arızayı WhatsApp'tan Ustaya Bildir</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    Fotoğraf / video göndererek usta ile anında görüşebilirsiniz.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
