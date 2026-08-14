import React, { useState } from 'react';
import { Wrench, Sparkles, Layers, Flame, Gauge, ShieldAlert, CheckCircle2, ArrowRight, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { BUSINESS_CONFIG } from '../config/business';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'klima' | 'kombi' | 'genel'>('all');

  const filteredServices = SERVICES.filter((service) => {
    if (activeTab === 'all') return true;
    return service.category === activeTab;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="h-6 w-6 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6 text-cyan-400" />;
      case 'Layers': return <Layers className="h-6 w-6 text-cyan-400" />;
      case 'Flame': return <Flame className="h-6 w-6 text-amber-400" />;
      case 'Gauge': return <Gauge className="h-6 w-6 text-amber-400" />;
      case 'ShieldAlert': return <ShieldAlert className="h-6 w-6 text-emerald-400" />;
      default: return <Wrench className="h-6 w-6 text-cyan-400" />;
    }
  };

  const handleWhatsAppForService = (service: ServiceItem) => {
    const msg = `Merhaba Muhammet Usta, "${service.title}" hizmetiniz hakkında bilgi almak ve randevu oluşturmak istiyorum.`;
    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="hizmetler" className="py-20 bg-slate-950 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Wrench className="h-3.5 w-3.5" />
            <span>Uzman Hizmet Alanlarımız</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Klima & Kombi Profesyonel Teknik Servis Hizmetleri
          </h2>
          <p className="text-base text-slate-400">
            Tüm marka ve modellerde arıza tespiti, titiz onarım, periyodik bakım ve güvenli montaj işlemlerini özenle gerçekleştiriyoruz.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800'
            }`}
          >
            Tüm Hizmetler ({SERVICES.length})
          </button>
          <button
            onClick={() => setActiveTab('klima')}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              activeTab === 'klima'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800'
            }`}
          >
            ❄️ Klima Hizmetleri (3)
          </button>
          <button
            onClick={() => setActiveTab('kombi')}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              activeTab === 'kombi'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800'
            }`}
          >
            🔥 Kombi Hizmetleri (2)
          </button>
          <button
            onClick={() => setActiveTab('genel')}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              activeTab === 'genel'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800'
            }`}
          >
            🛡️ Genel Teknik Servis (1)
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-lg transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* Image & Header */}
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Badge */}
                  {service.badge && (
                    <span className="absolute top-3.5 right-3.5 rounded-md bg-slate-900/90 border border-cyan-500/40 px-2.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">
                      {service.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="absolute bottom-3.5 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900/90 border border-slate-700 shadow-md">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Hizmet Kapsamı:
                    </span>
                    <ul className="space-y-1.5">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common issues solved */}
                  <div className="rounded-xl bg-slate-950/60 p-3 border border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-cyan-300 mb-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>Çözülen Başlıca Şikayetler:</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {service.commonIssues.slice(0, 2).join(' • ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4">
                <div className="grid grid-cols-2 gap-2 pt-4">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-cyan-500 px-3 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-cyan-400"
                  >
                    <span>Servis Çağır</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppForService(service)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 px-3 py-2.5 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-600/30"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Emergency Callout Box */}
        <div className="mt-14 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500/20 px-2.5 py-0.5 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
              Teknik Servis İhtiyacı mı Var?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Cihazınız aniden durdu mu veya su mu akıtıyor?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Servis talebiniz ve arıza tespiti için ustamızla hemen iletişime geçebilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-md transition-all hover:bg-cyan-400"
            >
              <Phone className="h-4 w-4 fill-slate-950" />
              <span>Hemen Ara: {BUSINESS_CONFIG.phonePlaceholder}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent("Merhaba Muhammet Usta, servis talebinde bulunmak istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-500"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp İletişim Hattı</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
