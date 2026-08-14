import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SERVICES } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'klima-ariza-onarim',
    neighborhood: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = SERVICES.find(s => s.id === formData.serviceType)?.title || 'Teknik Servis';
    const message = `Merhaba Muhammet Usta, web sitenizden servis randevusu talep ediyorum:\n\n👤 Ad Soyad: ${formData.name || 'Belirtilmedi'}\n📞 İletişim: ${formData.phone || 'Belirtilmedi'}\n🛠️ Hizmet: ${serviceName}\n📍 Bölge/Adres: ${formData.neighborhood || 'Belirtilmedi'}\n📝 Açıklama: ${formData.notes || 'Arıza tespiti'}`;
    
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="py-20 bg-slate-950 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Phone className="h-3.5 w-3.5" />
            <span>Hızlı ve Kolay İletişim</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Muhammet Usta ile Hemen İletişime Geçin
          </h2>
          <p className="text-base text-slate-300">
            Arıza, periyodik bakım veya montaj talepleriniz için aşağıdaki iletişim kanallarından veya form üzerinden bize anında ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Business Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Card */}
            <div className="rounded-2xl border border-cyan-500/40 bg-slate-900/90 p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 shadow-md">
                  <Phone className="h-6 w-6 fill-slate-950" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Telefon İle Doğrudan İletişim
                  </span>
                  <div className="text-xl font-bold text-white">
                    {BUSINESS_CONFIG.phonePlaceholder}
                  </div>
                  <p className="text-xs text-slate-400">
                    Tıkla ve ustayı doğrudan ara, anında randevu oluştur.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-2.5 text-xs font-bold text-slate-950 shadow-md transition-all hover:bg-cyan-400"
                >
                  <Phone className="h-4 w-4 fill-slate-950" />
                  <span>Hemen Ara</span>
                </a>
              </div>
            </div>

            {/* Primary WhatsApp Card */}
            <div className="rounded-2xl border border-emerald-500/40 bg-slate-900/90 p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    WhatsApp Destek & Fotoğraf Gönderme
                  </span>
                  <div className="text-xl font-bold text-white">
                    {BUSINESS_CONFIG.whatsappPlaceholder}
                  </div>
                  <p className="text-xs text-slate-400">
                    Klima veya kombinizin ekran kodunu/fotoğrafını göndererek hızlı teşhis alın.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp'tan Ulaşın</span>
                </a>
              </div>
            </div>

            {/* Address & Working Hours Info Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4 text-xs text-slate-300">
              
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">İşletme & Atölye Adresi:</span>
                  <span className="text-slate-400">{BUSINESS_CONFIG.location.addressPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Randevu ve İletişim:</span>
                  <span className="text-slate-400">
                    {BUSINESS_CONFIG.workingHours.summary} <br />
                    {BUSINESS_CONFIG.workingHours.note}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Usta Güvencesi:</span>
                  <span className="text-slate-400">İşi oldu bittiye getirmeyen, titiz ve özenli usta işçiliği.</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Appointment & Service Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 sm:p-8 shadow-2xl">
              
              <div className="border-b border-slate-800 pb-5 mb-6">
                <h3 className="text-xl font-bold text-white">
                  Online Servis Randevusu Oluşturun
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Formu doldurun, talebiniz anında WhatsApp üzerinden ustaya iletilsin.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-xl bg-emerald-950/60 border border-emerald-500/50 p-6 text-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Talebiniz Başarıyla İletildi</h4>
                  <p className="text-xs text-slate-300">
                    WhatsApp sohbet penceresi açıldı. Ustamız en kısa sürede geri dönüş sağlayacaktır.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block text-xs font-semibold text-cyan-400 underline pt-2"
                  >
                    Yeni bir form doldur
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Ahmet Yılmaz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="05XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Gereken Hizmet Türü
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Bulunduğunuz Mahalle / Bölge
                      </label>
                      <input
                        type="text"
                        placeholder="Örn: Atatürk Mah. / Çevre Siteler"
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Arıza Belirtisi / Cihaz Markası / Kısa Not
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Örn: Klima soğuk üflemiyor, gazı bitmiş olabilir. Hafta içi öğleden sonra uygundur."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500 active:scale-[0.99]"
                    >
                      <Send className="h-4 w-4" />
                      <span>WhatsApp ile Servis Talebi Gönder</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2.5">
                      Talebiniz doğrudan Muhammet Usta'nın WhatsApp hattına yönlendirilir.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
