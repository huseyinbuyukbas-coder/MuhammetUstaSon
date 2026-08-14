import React from 'react';
import { ShieldCheck, Zap, Award, Sparkles, CheckCircle2, ThumbsUp, Wrench } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const advantages = [
    {
      icon: Award,
      title: 'İşi Oldu Bittiye Getirmeyen Yaklaşım',
      desc: 'Sadece mevcut arızayı çözmekle kalmıyor, cihazın genel durumunu inceleyerek ileride çıkabilecek muhtemel sorunları önceden tespit edip sizi bilgilendiriyoruz.',
      highlight: 'Titiz & Detaylı İnceleme',
      color: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      icon: Zap,
      title: 'Hızlı Servis Deneyimi',
      desc: 'Google yorumlarımızda müşterilerimizin özellikle hızlı servis ve özenli işçilik konusundaki memnuniyeti öne çıkıyor.',
      highlight: 'Hızlı Çözüm',
      color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    },
    {
      icon: ShieldCheck,
      title: 'Titiz ve Özenli İşçilik',
      desc: 'Klimanızın veya kombinizin her parçasını hassasiyetle ele alıyor, usta elinden çıkan sağlam ve güvenilir onarımlar gerçekleştiriyoruz.',
      highlight: 'Usta İşçiliği',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      icon: ThumbsUp,
      title: 'Güler Yüzlü & İlgili Hizmet',
      desc: 'Süreç boyunca aklınızdaki soruları güler yüzle ve ilgiyle yanıtlıyor, yapılan işlemleri anlaşılır şekilde paylaşıyoruz.',
      highlight: 'Müşteri Memnuniyeti',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      icon: Sparkles,
      title: 'Ortama Saygılı ve Temiz Çalışma',
      desc: 'Cihaz bakım ve tamir işlemlerini ev ve iş ortamınıza özen göstererek, temiz ve düzenli bir şekilde tamamlıyoruz.',
      highlight: 'Düzenli & Temiz',
      color: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      icon: Wrench,
      title: 'Arıza Odaklı ve Detaylı Servis',
      desc: 'Klima ve kombi sistemlerindeki teknik arızaları kaynağında çözen, işinin erbabı ustalık anlayışı ile güvenilir servis.',
      highlight: 'İşinin Ehli Servis',
      color: 'bg-rose-50 text-rose-700 border-rose-200',
    },
  ];

  return (
    <section id="neden-biz" className="py-20 bg-white text-slate-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Farkımız & Değerlerimiz</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Neden Muhammet Usta Teknik Servisi?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
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
                className="group relative rounded-3xl border border-slate-200 bg-slate-50/70 p-7 transition-all duration-300 hover:border-cyan-300 hover:bg-white hover:-translate-y-1 shadow-sm hover:shadow-xl"
              >
                {/* Highlight Tag */}
                <span className="inline-block rounded-lg bg-white border border-slate-200 px-3 py-1 text-[11px] font-bold text-slate-700 mb-4 shadow-xs">
                  {item.highlight}
                </span>

                {/* Icon */}
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${item.color} shadow-xs`}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-black text-slate-900 mb-2.5 group-hover:text-cyan-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
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
