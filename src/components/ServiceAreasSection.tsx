import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const ServiceAreasSection: React.FC = () => {
  return (
    <section id="hizmet-bolgeleri" className="py-20 bg-slate-950 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Navigation className="h-3.5 w-3.5" />
            <span>Hizmet & Bölge Bilgisi</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Hizmet Bölgesi & Servis Talebi
          </h2>
          <p className="text-base text-slate-300">
            Klima ve kombi teknik servis talepleriniz için telefon veya WhatsApp üzerinden kolayca iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Coverage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Location & Region Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-7 shadow-lg space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Bölgesel Bilgiler
                  </h3>
                  <p className="text-xs text-slate-400">
                    Servis kapsamı ve randevu detayları
                  </p>
                </div>
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20">
                  Teknik Servis
                </span>
              </div>

              {/* Location Placeholders Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <MapPin className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Hizmet Bölgesi</span>
                    <span className="text-sm font-bold text-white">{BUSINESS_CONFIG.location.serviceRegionPlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-4">
                  <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">İşletme Adresi</span>
                    <span className="text-sm font-bold text-white">{BUSINESS_CONFIG.location.addressPlaceholder}</span>
                  </div>
                </div>
              </div>

              {/* Service Note */}
              <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Servis Bilgilendirmesi:</strong> Bulunduğunuz bölgeye yönelik servis uygunluğu ve randevu saatleri için lütfen telefon veya WhatsApp ile irtibata geçiniz.
                </span>
              </div>

            </div>
          </div>

          {/* Right: Dispatch / Request Box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Doğrudan İletişim
                </span>
                <h3 className="text-xl font-bold text-white">
                  Servis Randevusu Alın
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  WhatsApp üzerinden veya telefonla arayarak arıza durumunuzu paylaşabilir ve uygun randevu oluşturabilirsiniz.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent("Merhaba Muhammet Usta, klima / kombi servis talebinde bulunmak istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp ile Yazın ({BUSINESS_CONFIG.whatsappPlaceholder})</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition-all hover:bg-cyan-400"
                >
                  <Phone className="h-4 w-4 fill-slate-950" />
                  <span>Telefon ile Arayın ({BUSINESS_CONFIG.phonePlaceholder})</span>
                </a>
              </div>

              <div className="border-t border-slate-800 pt-4 text-center">
                <p className="text-[11px] text-slate-400">
                  {BUSINESS_CONFIG.location.serviceNote}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
