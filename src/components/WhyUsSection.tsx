import React from 'react';
import { ShieldCheck, Zap, Award, Sparkles, CheckCircle2, Clock, ThumbsUp, Wrench } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const WhyUsSection: React.FC = () => {
  const advantages = [
    {
      icon: Award,
      title: 'İşi Oldu Bittiye Getirmeyen Yaklaşım',
      desc: 'Sadece mevcut arızayı çözmekle kalmıyor, cihazın genel durumunu inceleyerek ileride çıkabilecek muhtemel sorunları önceden tespit edip sizi bilgilendiriyoruz.',
      highlight: 'Titiz & Detaylı İnceleme',
      color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30',
    },
    {
      icon: Zap,
      title: 'Hızlı Servis Deneyimi',
      desc: 'Google yorumlarımızda müşterilerimizin özellikle hızlı servis ve özenli işçilik konusundaki memnuniyeti öne çıkıyor.',
      highlight: 'Hızlı Çözüm',
      color: 'from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/30',
    },
    {
      icon: ShieldCheck,
      title: 'Titiz ve Özenli İşçilik',
      desc: 'Klimanızın veya kombinizin her parçasını hassasiyetle ele alıyor, usta elinden çıkan sağlam ve güvenilir onarımlar gerçekleştiriyoruz.',
      highlight: 'Usta İşçiliği',
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30',
    },
    {
      icon: ThumbsUp,
      title: 'Güler Yüzlü & İlgili Hizmet',
      desc: 'Süreç boyunca aklınızdaki soruları güler yüzle ve ilgiyle yanıtlıyor, yapılan işlemleri anlaşılır şekilde paylaşıyoruz.',
      highlight: 'Müşteri Memnuniyeti',
      color: 'from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30',
    },
    {
      icon: Sparkles,
      title: 'Ortama Saygılı ve Temiz Çalışma',
      desc: 'Cihaz bakım ve tamir işlemlerini ev ve iş ortamınıza özen göstererek, temiz ve düzenli bir şekilde tamamlıyoruz.',
      highlight: 'Düzenli & Temiz',
      color: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30',
    },
    {
      icon: Wrench,
      title: 'Arıza Odaklı ve Detaylı Servis',
      desc: 'Klima ve kombi sistemlerindeki teknik arızaları kaynağında çözen, işinin erbabı teknisyen kadrosu ile güvenilir servis.',
      highlight: 'İşinin Ehli Teknisyenler',
      color: 'from-rose-500/20 to-orange-500/10 text-rose-400 border-rose-500/30',
    },
  ];

  return (
    <section id="neden-biz" className="py-20 bg-slate-950 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Farkımız & Değerlerimiz</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Neden Muhammet Usta Teknik Servisi?
          </h2>
          <p className="text-base text-slate-300">
            Müşterilerimizin Google yorumlarında bizi 5.0 tam puanla ödüllendirmesini sağlayan ilkelerimiz.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 hover:-translate-y-1 shadow-lg"
              >
                {/* Highlight Tag */}
                <span className="inline-block rounded-md bg-slate-800 border border-slate-700 px-2.5 py-1 text-[11px] font-semibold text-slate-300 mb-4">
                  {item.highlight}
                </span>

                {/* Icon */}
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border bg-gradient-to-br ${item.color}`}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
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
