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
    <section id="ariza-teshis" className="py-20 bg-slate-50 text-slate-900 border-y border-slate-200 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
            <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
            <span>İnteraktif Arıza Teşhis Aracı</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Cihazınızdaki Sorunu Seçin, Olası Sebebini ve Çözümünü Görün
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Sık karşılaşılan klima ve kombi arızalarının teknik nedenlerini öğrenin, tek tıkla doğrudan ustaya ileterek ön bilgi alın.
          </p>
        </div>

        {/* Device Filter */}
        <div className="flex justify-center gap-2.5 mb-8">
          <button
            onClick={() => {
              setDeviceFilter('all');
              setSelectedDiag(QUICK_DIAGNOSES[0]);
            }}
            className={`rounded-2xl px-4 py-2 text-sm font-bold transition-all ${
              deviceFilter === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
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
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold transition-all ${
              deviceFilter === 'klima'
                ? 'bg-cyan-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
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
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold transition-all ${
              deviceFilter === 'kombi'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
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
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
              Sık Yaşanan Belirtiler (Birine Tıklayın):
            </h3>
            {filteredDiagnoses.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedDiag(item)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between shadow-xs ${
                  selectedDiag.id === item.id
                    ? 'border-amber-400 bg-white shadow-md ring-2 ring-amber-400/40'
                    : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`rounded-lg px-2.5 py-1 text-[10px] font-extrabold uppercase ${
                    item.device === 'klima' ? 'bg-cyan-50 text-cyan-800 border border-cyan-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {item.device}
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {item.symptom}
                  </span>
                </div>
                <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${
                  selectedDiag.id === item.id ? 'text-amber-600 translate-x-1' : 'text-slate-400'
                }`} />
              </button>
            ))}
          </div>

          {/* Right Column: Diagnosis Report Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-amber-100/40 rounded-full blur-2xl pointer-events-none"></div>

              {/* Title & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                    Teknik Değerlendirme & Teşhis
                  </span>
                </div>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                  selectedDiag.urgency === 'Yüksek'
                    ? 'bg-rose-50 text-rose-800 border-rose-200'
                    : 'bg-cyan-50 text-cyan-800 border-cyan-200'
                }`}>
                  Aciliyet: {selectedDiag.urgency}
                </span>
              </div>

              {/* Selected Symptom */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-500 font-semibold">İncelenen Şikayet:</span>
                  <h4 className="text-lg font-black text-slate-900 mt-0.5">
                    {selectedDiag.symptom}
                  </h4>
                </div>

                {/* Likely Cause */}
                <div className="rounded-2xl bg-amber-50/70 p-4 border border-amber-200">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 uppercase tracking-wider mb-1.5">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span>Muhtemel Teknik Nedenler:</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {selectedDiag.likelyReason}
                  </p>
                </div>

                {/* Recommended Action */}
                <div className="rounded-2xl bg-emerald-50/70 p-4 border border-emerald-200">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-900 uppercase tracking-wider mb-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Ustanın Önerdiği Profesyonel Çözüm:</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {selectedDiag.recommendedAction}
                  </p>
                </div>

                {/* CTA Box */}
                <div className="pt-3">
                  <button
                    onClick={() => handleWhatsAppConsult(selectedDiag)}
                    className="w-full flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 active:scale-[0.99]"
                  >
                    <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
                    <span>Bu Arızayı WhatsApp'tan Ustaya Bildir</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 font-medium mt-2">
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
