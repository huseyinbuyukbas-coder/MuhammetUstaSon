import React, { useState } from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, CheckCircle2, Zap, ArrowRight, Wrench, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface HeroProps {
  onOpenModal: (serviceId?: string, prefillDetails?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [selectedDevice, setSelectedDevice] = useState<'klima' | 'kombi'>('klima');
  const [selectedIssue, setSelectedIssue] = useState<string>('ariza');
  const [userNote, setUserNote] = useState<string>('');

  const issueOptions = {
    klima: [
      { id: 'ariza', label: 'Soğutmuyor / Isıtmıyor (Arıza)' },
      { id: 'su-akitiyor', label: 'İç Üniteden Su Damlatıyor' },
      { id: 'bakim', label: 'İlaçlı Yıllık Bakım & Temizlik' },
      { id: 'montaj', label: 'Montaj / Demontaj (Sökme-Takma)' },
      { id: 'gaz', label: 'Gaz Dolumu & Kaçak Kontrolü' },
    ],
    kombi: [
      { id: 'sicak-su-yok', label: 'Sıcak Su Vermiyor / Ilık Akıyor' },
      { id: 'petekler-isinmiyor', label: 'Petekler Isınmıyor / Altı Soğuk' },
      { id: 'bar-dusuyor', label: 'Su Basıncı (Bar) Sürekli Düşüyor' },
      { id: 'yillik-bakim', label: 'Kombi Yıllık Bakımı' },
      { id: 'petek-temizligi', label: 'Makineli İlaçlı Petek Temizliği' },
    ],
  };

  const handleQuickFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const issueLabel = issueOptions[selectedDevice].find(i => i.id === selectedIssue)?.label || 'Teknik Servis';
    const message = `Merhaba Muhammet Usta, ${selectedDevice.toUpperCase()} için servis talep ediyorum. Sorun: ${issueLabel}. ${userNote ? `Not: ${userNote}` : ''}`;
    
    // Direct to WhatsApp with pre-filled detail
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white text-slate-900 pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-slate-200">
      {/* Subtle Background Technical Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:32px_32px] opacity-70"></div>
      
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          {/* Google Review Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-900 shadow-xs">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
              ))}
            </div>
            <span>5.0 / 5.0 Google Puanı</span>
          </div>

          {/* Customer Feedback Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-bold text-cyan-900 shadow-xs">
            <Zap className="h-3.5 w-3.5 text-cyan-600" />
            <span>Müşteri Yorumlarında Hızlı Servis</span>
          </div>

          {/* Meticulous Workmanship Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-900 shadow-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Titiz ve Özenli İşçilik</span>
          </div>
        </div>

        {/* Grid Layout: Left Content, Right Quick Booking Card */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Headline, Subheadline, Trust Points & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {BUSINESS_CONFIG.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {BUSINESS_CONFIG.heroSubheadline}
            </p>

            {/* Quick Selling Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>İşi oldu bittiye getirmeyen titiz usta</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>Gelecekteki arızaları önceden uyarma</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>Güler yüzlü ve ilgili usta yaklaşımı</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>Arıza odaklı ve detaylı servis</span>
              </div>
            </div>

            {/* High-Contrast Action CTAs with Strengthened Hierarchy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              
              {/* Primary CTA: WhatsApp'tan Ulaşın */}
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3.5 rounded-2xl bg-emerald-600 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-emerald-600/30 ring-2 ring-emerald-500/50 transition-all duration-300 hover:bg-emerald-700 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:scale-[0.98]"
                id="hero-whatsapp-primary-btn"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-xs transition-transform group-hover:scale-110">
                  <MessageCircle className="h-5 w-5 fill-white text-emerald-700" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-black tracking-wide">WhatsApp'tan Ulaşın</span>
                  <span className="text-xs font-medium text-emerald-100">{BUSINESS_CONFIG.whatsappPlaceholder}</span>
                </div>
              </a>

              {/* Secondary CTA: Hemen Ara */}
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="group relative inline-flex items-center justify-center gap-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-cyan-700/25 ring-2 ring-cyan-500/40 transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-cyan-700/35 hover:-translate-y-0.5 active:scale-[0.98]"
                id="hero-phone-primary-btn"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-xs transition-transform group-hover:scale-110">
                  <Phone className="h-5 w-5 fill-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-black tracking-wide">Hemen Ara</span>
                  <span className="text-xs font-medium text-cyan-100">{BUSINESS_CONFIG.phonePlaceholder}</span>
                </div>
              </a>

            </div>

            {/* Support info line */}
            <div className="flex items-center gap-2 pt-2 text-xs font-medium text-slate-500">
              <Clock className="h-4 w-4 text-cyan-600 shrink-0" />
              <span>Google yorumlarımızda müşterilerimizin özellikle hızlı servis ve özenli işçilik konusundaki memnuniyeti öne çıkıyor.</span>
            </div>

          </div>

          {/* Right Column: High-Conversion Quick Service Form Card on White */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100">
              
              {/* Header of the Card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold text-slate-900">Hızlı Servis Talebi</h2>
                    <p className="text-xs text-slate-500 font-medium">Doğrudan ustaya iletin</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800 border border-emerald-200">
                  Doğrudan İletişim
                </span>
              </div>

              {/* Form Body */}
              <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                
                {/* Device Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    1. Cihaz Türünü Seçin
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedDevice('klima')}
                      className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${
                        selectedDevice === 'klima'
                          ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20 ring-2 ring-cyan-500'
                          : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Sparkles className="h-4 w-4" />
                      Klima Servisi
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDevice('kombi')}
                      className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${
                        selectedDevice === 'kombi'
                          ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20 ring-2 ring-cyan-500'
                          : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Wrench className="h-4 w-4" />
                      Kombi Servisi
                    </button>
                  </div>
                </div>

                {/* Issue Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    2. Yaşanan Sorun veya Talep
                  </label>
                  <select
                    value={selectedIssue}
                    onChange={(e) => setSelectedIssue(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  >
                    {issueOptions[selectedDevice].map((issue) => (
                      <option key={issue.id} value={issue.id}>
                        {issue.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Note */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    3. Kısa Not / Cihaz Markası (İsteğe Bağlı)
                  </label>
                  <input
                    type="text"
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="Örn: Arıza kodu yanıyor veya soğutmuyor"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>

                {/* Action Submit Buttons */}
                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 active:scale-[0.99]"
                    id="hero-quick-whatsapp-send"
                  >
                    <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
                    <span>WhatsApp ile Ustaya İlet</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenModal(selectedDevice === 'klima' ? 'klima-ariza-onarim' : 'kombi-ariza-bakim', userNote)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    <span>Veya Online Randevu Formunu Doldur</span>
                  </button>
                </div>

              </form>

              {/* Footnote on Card */}
              <div className="mt-4 border-t border-slate-100 pt-3 text-center text-[11px] font-medium text-slate-500">
                🔒 Bilgileriniz yalnızca servis randevusu ve teknik arıza iletişimi için kullanılır.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
