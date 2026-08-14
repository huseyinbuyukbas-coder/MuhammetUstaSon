import React from 'react';
import { PhoneCall, Search, Wrench, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Talep & Randevu',
      desc: 'Telefon veya WhatsApp üzerinden arıza belirtilerini bildirin; müsaitlik durumuna göre randevu saatinizi belirleyelim.',
      icon: PhoneCall,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    },
    {
      step: '02',
      title: 'Yerinde Arıza Tespiti',
      desc: 'Ustamız adresinize gelir, cihazınızı teknik testlerle inceleyip arıza nedenini ve olası diğer riskleri tespit eder.',
      icon: Search,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      step: '03',
      title: 'Özenli & Titiz Onarım',
      desc: 'İşi oldu bittiye getirmeden, cihazınızın ihtiyacı olan bakım veya onarım işlemlerini titizlikle gerçekleştiriyoruz.',
      icon: Wrench,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      step: '04',
      title: 'Test & Teslimat',
      desc: 'Cihaz tam performans test edilir, ısıtma/soğutma ve güvenlik kontrolleri yapılarak çalışır vaziyette teslim edilir.',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
            <span>Hızlı & Düzenli Süreç</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            4 Adımda Zahmetsiz Teknik Servis Hizmeti
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Çağrınızdan teslimata kadar her aşamada güvenilir, titiz ve özenli hizmet anlayışı.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-start rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Step Number Top */}
                <div className="flex w-full items-center justify-between mb-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${item.color} shadow-xs`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
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
