import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
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
    <section id="iletisim" className="py-20 bg-white text-slate-900 border-t border-slate-200 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Phone className="h-3.5 w-3.5" />
            <span>Hızlı ve Kolay İletişim</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Muhammet Usta ile Hemen İletişime Geçin
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Arıza, periyodik bakım veya montaj talepleriniz için aşağıdaki iletişim kanallarından veya form üzerinden bize anında ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Business Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Card */}
            <div className="rounded-3xl border border-cyan-200 bg-cyan-50/50 p-6 sm:p-7 shadow-lg shadow-cyan-900/5 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-md">
                  <Phone className="h-6 w-6 fill-white" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-800">
                    Telefon İle Doğrudan İletişim
                  </span>
                  <div className="text-xl font-black text-slate-900">
                    {BUSINESS_CONFIG.phonePlaceholder}
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    Tıkla ve ustayı doğrudan ara, anında randevu oluştur.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-cyan-200/60">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 py-3 text-sm font-extrabold text-white shadow-md shadow-cyan-600/20 transition-all hover:from-cyan-500 hover:to-blue-500 active:scale-95"
                >
                  <Phone className="h-4 w-4 fill-white" />
                  <span>Hemen Ara: {BUSINESS_CONFIG.phonePlaceholder}</span>
                </a>
              </div>
            </div>

            {/* Primary WhatsApp Card */}
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-7 shadow-lg shadow-emerald-900/5 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                  <MessageCircle className="h-6 w-6 fill-white text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    WhatsApp Destek & Fotoğraf Gönderme
                  </span>
                  <div className="text-xl font-black text-slate-900">
                    {BUSINESS_CONFIG.whatsappPlaceholder}
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    Klima veya kombinizin ekran kodunu/fotoğrafını göndererek hızlı teşhis alın.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-200/60">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 text-sm font-extrabold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
                  <span>WhatsApp'tan Ulaşın ({BUSINESS_CONFIG.whatsappPlaceholder})</span>
                </a>
              </div>
            </div>

            {/* Address & Working Hours Info Card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 space-y-4 text-xs text-slate-700 font-medium">
              
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-cyan-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">İşletme & Atölye Adresi:</span>
                  <span className="text-slate-600">{BUSINESS_CONFIG.location.addressPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Randevu ve İletişim:</span>
                  <span className="text-slate-600">
                    {BUSINESS_CONFIG.workingHours.summary} <br />
                    {BUSINESS_CONFIG.workingHours.note}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Usta Güvencesi:</span>
                  <span className="text-slate-600">İşi oldu bittiye getirmeyen, titiz ve özenli usta işçiliği.</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Appointment & Service Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xl shadow-slate-200/50">
              
              <div className="border-b border-slate-100 pb-5 mb-6">
                <h3 className="text-xl font-black text-slate-900">
                  Online Servis Randevusu Oluşturun
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Formu doldurun, talebiniz anında WhatsApp üzerinden ustaya iletilsin.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-black text-slate-900">Talebiniz Başarıyla İletildi</h4>
                  <p className="text-xs text-slate-600 font-medium">
                    WhatsApp sohbet penceresi açıldı. Ustamız en kısa sürede geri dönüş sağlayacaktır.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block text-xs font-bold text-cyan-700 underline pt-2 hover:text-cyan-800"
                  >
                    Yeni bir form doldur
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Ahmet Yılmaz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="05XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Gereken Hizmet Türü
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-medium"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Bulunduğunuz Mahalle / Bölge
                      </label>
                      <input
                        type="text"
                        placeholder="Örn: Atatürk Mah. / Çevre Siteler"
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Arıza Belirtisi / Cihaz Markası / Kısa Not
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Örn: Klima soğuk üflemiyor, gazı bitmiş olabilir. Hafta içi öğleden sonra uygundur."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-medium"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-4 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 active:scale-[0.99]"
                    >
                      <Send className="h-4 w-4" />
                      <span>WhatsApp ile Servis Talebi Gönder</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2.5 font-medium">
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
