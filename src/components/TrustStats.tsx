import React from 'react';
import { Star, ShieldCheck, Clock, Sparkles } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      id: 'rating',
      value: '5.0 / 5.0',
      label: 'Google Müşteri Puanı',
      desc: 'Müşteri incelemelerinde tam memnuniyet değerlendirmesi',
      icon: Star,
      accentColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      id: 'speed-feedback',
      value: 'Hızlı',
      label: 'Servis Memnuniyeti',
      desc: 'Yorumlarda öne çıkan hızlı servis ve aynı gün deneyimi',
      icon: Clock,
      accentColor: 'text-cyan-700',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
    },
    {
      id: 'craftsmanship',
      value: 'Titiz',
      label: 'Özenli Usta İşçiliği',
      desc: 'İşi oldu bittiye getirmeyen detaylı çalışma anlayışı',
      icon: ShieldCheck,
      accentColor: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      id: 'preventive',
      value: 'Detaylı',
      label: 'Kapsamlı İnceleme',
      desc: 'İleride çıkabilecek olası sorunları da önceden tespit etme',
      icon: Sparkles,
      accentColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section className="relative z-20 -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`flex items-start gap-4 ${index > 0 ? 'pt-6 sm:pt-0 lg:pl-6' : ''}`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${stat.bgColor} ${stat.borderColor} ${stat.accentColor} shadow-xs`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
