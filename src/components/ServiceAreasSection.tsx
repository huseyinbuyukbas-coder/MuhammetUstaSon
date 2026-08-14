import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const ServiceAreasSection: React.FC = () => {
  return (
    <section id="hizmet-bolgeleri" className="py-20 bg-slate-50 text-slate-900 border-y border-slate-200 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">
            <Navigation className="h-3.5 w-3.5" />
            <span>Hizmet & Bölge Bilgisi</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Hizmet Bölgesi & Servis Talebi
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Klima ve kombi teknik servis talepleriniz için telefon veya WhatsApp üzerinden kolayca iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Coverage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Location & Region Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg shadow-slate-200/50 space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Bölgesel Bilgiler
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Servis kapsamı ve randevu detayları
                  </p>
                </div>
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800 border border-cyan-200">
                  Teknik Servis
                </span>
              </div>

              {/* Location Placeholders Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <MapPin className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 block">Hizmet Bölgesi</span>
                    <span className="text-sm font-black text-slate-900">{BUSINESS_CONFIG.location.serviceRegionPlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <MapPin className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 block">İşletme Adresi</span>
                    <span className="text-sm font-black text-slate-900">{BUSINESS_CONFIG.location.addressPlaceholder}</span>
                  </div>
                </div>
              </div>

              {/* Service Note */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5 font-medium">
                <Clock className="h-4 w-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Servis Bilgilendirmesi:</strong> Bulunduğunuz bölgeye yönelik servis uygunluğu ve randevu saatleri için lütfen telefon veya WhatsApp ile irtibata geçiniz.
                </span>
              </div>

            </div>
          </div>

          {/* Right: Dispatch / Request Box */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/60 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-700">
                  Doğrudan İletişim
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  Servis Randevusu Alın
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  WhatsApp üzerinden veya telefonla arayarak arıza durumunuzu paylaşabilir ve uygun randevu oluşturabilirsiniz.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent("Merhaba Muhammet Usta, klima / kombi servis talebinde bulunmak istiyorum.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-4 text-sm font-black text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
                  <span>WhatsApp ile Yazın ({BUSINESS_CONFIG.whatsappPlaceholder})</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 py-4 text-sm font-black text-white shadow-lg shadow-cyan-600/25 transition-all hover:from-cyan-500 hover:to-blue-500 active:scale-95"
                >
                  <Phone className="h-4 w-4 fill-white" />
                  <span>Telefon ile Arayın ({BUSINESS_CONFIG.phonePlaceholder})</span>
                </a>
              </div>

              <div className="border-t border-slate-100 pt-4 text-center">
                <p className="text-[11px] text-slate-500 font-medium">
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
