import React from 'react';
import { Star, ShieldCheck, Clock, CheckCircle2, Award, ThumbsUp, Wrench, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      id: 'rating',
      value: '5.0 / 5.0',
      label: 'Google Müşteri Puanı',
      desc: 'Müşteri incelemelerinde tam memnuniyet değerlendirmesi',
      icon: Star,
      accentColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
    },
    {
      id: 'speed-feedback',
      value: 'Hızlı',
      label: 'Servis Memnuniyeti',
      desc: 'Yorumlarda öne çıkan hızlı servis ve aynı gün deneyimi',
      icon: Clock,
      accentColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
    },
    {
      id: 'craftsmanship',
      value: 'Titiz',
      label: 'Özenli Usta İşçiliği',
      desc: 'İşi oldu bittiye getirmeyen detaylı çalışma anlayışı',
      icon: ShieldCheck,
      accentColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
    },
    {
      id: 'preventive',
      value: 'Detaylı',
      label: 'Kapsamlı İnceleme',
      desc: 'İleride çıkabilecek olası sorunları da önceden tespit etme',
      icon: Sparkles,
      accentColor: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
  ];

  return (
    <section className="relative z-20 -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-700/80 bg-slate-900/95 p-6 sm:p-8 shadow-xl backdrop-blur-md">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-800">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`flex items-start gap-4 ${index > 0 ? 'pt-6 sm:pt-0 lg:pl-6' : ''}`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${stat.bgColor} ${stat.borderColor} ${stat.accentColor}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
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
