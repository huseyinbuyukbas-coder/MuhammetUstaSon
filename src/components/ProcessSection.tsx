import React from 'react';
import { PhoneCall, Search, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Talep & Randevu',
      desc: 'Telefon veya WhatsApp üzerinden arıza belirtilerini bildirin; müsaitlik durumuna göre randevu saatinizi belirleyelim.',
      icon: PhoneCall,
      color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    },
    {
      step: '02',
      title: 'Yerinde Arıza Tespiti',
      desc: 'Ustamız adresinize gelir, cihazınızı teknik testlerle inceleyip arıza nedenini ve olası diğer riskleri tespit eder.',
      icon: Search,
      color: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    },
    {
      step: '03',
      title: 'Özenli & Titiz Onarım',
      desc: 'İşi oldu bittiye getirmeden, cihazınızın ihtiyacı olan bakım veya onarım işlemlerini titizlikle gerçekleştiriyoruz.',
      icon: Wrench,
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    },
    {
      step: '04',
      title: 'Test & Teslimat',
      desc: 'Cihaz tam performans test edilir, ısıtma/soğutma ve güvenlik kontrolleri yapılarak çalışır vaziyette teslim edilir.',
      icon: ShieldCheck,
      color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative border-y border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span>Hızlı & Düzenli Süreç</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            4 Adımda Zahmetsiz Teknik Servis Hizmeti
          </h2>
          <p className="text-base text-slate-300">
            Çağrınızdan teslimata kadar her aşamada güvenilir, titiz ve özenli hizmet anlayışı.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-start rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-md transition-all hover:border-slate-700"
              >
                {/* Step Number Top */}
                <div className="flex w-full items-center justify-between mb-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${item.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-700">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
