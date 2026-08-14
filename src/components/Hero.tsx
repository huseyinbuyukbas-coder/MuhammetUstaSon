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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle Background Technical Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
      
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Google Review Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-amber-400" />
              ))}
            </div>
            <span>5.0 / 5.0 Google Puanı</span>
          </div>

          {/* Customer Feedback Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            <Zap className="h-3.5 w-3.5 text-cyan-400" />
            <span>Müşteri Yorumlarında Hızlı Servis</span>
          </div>

          {/* Meticulous Workmanship Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Titiz ve Özenli İşçilik</span>
          </div>
        </div>

        {/* Grid Layout: Left Content, Right Quick Booking / Diagnostic Tool */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Headline, Subheadline, Trust Points & CTA Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {BUSINESS_CONFIG.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {BUSINESS_CONFIG.heroSubheadline}
            </p>

            {/* Quick Selling Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>İşi oldu bittiye getirmeyen titiz usta</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Gelecekteki arızaları önceden uyarma</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Güler yüzlü ve ilgili usta yaklaşımı</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Arıza odaklı ve detaylı servis</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              
              {/* Primary CTA: WhatsApp'tan Ulaşın */}
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500 hover:shadow-emerald-600/40 active:scale-[0.98]"
                id="hero-whatsapp-primary-btn"
              >
                <MessageCircle className="h-5 w-5 fill-white text-emerald-600" />
                <div className="flex flex-col text-left">
                  <span>WhatsApp'tan Ulaşın</span>
                  <span className="text-[11px] font-normal text-emerald-100">{BUSINESS_CONFIG.whatsappPlaceholder}</span>
                </div>
              </a>

              {/* Secondary CTA: Hemen Ara */}
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-500/35 active:scale-[0.98]"
                id="hero-phone-primary-btn"
              >
                <Phone className="h-5 w-5 fill-slate-950" />
                <div className="flex flex-col text-left">
                  <span>Hemen Ara</span>
                  <span className="text-[11px] font-semibold text-slate-800">{BUSINESS_CONFIG.phonePlaceholder}</span>
                </div>
              </a>

            </div>

            {/* Support info line */}
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <Clock className="h-4 w-4 text-cyan-400" />
              <span>Google yorumlarımızda müşterilerimizin özellikle hızlı servis ve özenli işçilik konusundaki memnuniyeti öne çıkıyor.</span>
            </div>

          </div>

          {/* Right Column: High-Conversion Quick Service & Fast Request Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/80 bg-slate-800/90 p-6 sm:p-7 shadow-2xl backdrop-blur-md">
              
              {/* Header of the Card */}
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Hızlı Servis Talebi</h2>
                    <p className="text-xs text-slate-400">Doğrudan ustaya iletin</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                  Doğrudan İletişim
                </span>
              </div>

              {/* Form Body */}
              <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                
                {/* Device Type Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    1. Cihaz Türünü Seçin
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDevice('klima')}
                      className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                        selectedDevice === 'klima'
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 ring-2 ring-cyan-400'
                          : 'bg-slate-900/80 text-slate-300 border border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <Sparkles className="h-4 w-4" />
                      Klima Servisi
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDevice('kombi')}
                      className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                        selectedDevice === 'kombi'
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 ring-2 ring-cyan-400'
                          : 'bg-slate-900/80 text-slate-300 border border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <Wrench className="h-4 w-4" />
                      Kombi Servisi
                    </button>
                  </div>
                </div>

                {/* Issue Type Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    2. Yaşanan Sorun veya Talep
                  </label>
                  <select
                    value={selectedIssue}
                    onChange={(e) => setSelectedIssue(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    {issueOptions[selectedDevice].map((issue) => (
                      <option key={issue.id} value={issue.id} className="bg-slate-900 text-white">
                        {issue.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Note */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    3. Kısa Not / Cihaz Markası (İsteğe Bağlı)
                  </label>
                  <input
                    type="text"
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="Örn: Baymak kombi E01 hatası veriyor"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Action Submit Buttons */}
                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500 active:scale-[0.99]"
                    id="hero-quick-whatsapp-send"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp ile Ustaya İlet</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenModal(selectedDevice === 'klima' ? 'klima-ariza-onarim' : 'kombi-ariza-bakim', userNote)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/60 py-2.5 text-xs font-medium text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    <span>Veya Online Randevu Formunu Doldur</span>
                  </button>
                </div>

              </form>

              {/* Footnote on Card */}
              <div className="mt-4 border-t border-slate-700/80 pt-3 text-center text-[11px] text-slate-400">
                🔒 Bilgileriniz yalnızca servis randevusu ve teknik arıza iletişimi için kullanılır.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
