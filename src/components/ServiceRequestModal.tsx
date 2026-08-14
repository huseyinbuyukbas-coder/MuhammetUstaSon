import React, { useState, useEffect } from 'react';
import { X, Wrench, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { BUSINESS_CONFIG } from '../config/business';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialNote?: string;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialNote = '',
}) => {
  const [selectedService, setSelectedService] = useState<string>(initialServiceId || SERVICES[0].id);
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [note, setNote] = useState<string>(initialNote);
  const [preferredTime, setPreferredTime] = useState<string>('En Kısa Sürede (Aynı Gün)');

  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
    if (initialNote) {
      setNote(initialNote);
    }
  }, [initialServiceId, initialNote]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceObj = SERVICES.find(s => s.id === selectedService);
    const serviceTitle = serviceObj ? serviceObj.title : 'Teknik Servis';

    const message = `Merhaba Muhammet Usta, servis randevusu talep ediyorum:\n\n🛠️ Hizmet: ${serviceTitle}\n👤 İsim: ${name || 'Belirtilmedi'}\n📞 Telefon: ${phone || 'Belirtilmedi'}\n⏰ Zaman Tercihi: ${preferredTime}\n📝 Not/Arıza: ${note || 'Genel kontrol'}`;

    const url = `https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-200">
            <Wrench className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Hızlı Servis Randevusu</h3>
            <p className="text-xs text-slate-500 font-medium">Muhammet Usta Teknik Servis</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              İhtiyaç Duyulan Hizmet
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-sm text-slate-900 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-medium"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                placeholder="Örn: Mehmet Öz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Telefon Numaranız
              </label>
              <input
                type="tel"
                placeholder="05XX XXX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Zaman Tercihi
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'En Kısa Sürede',
                'Yarın Sabah',
                'Yarın Öğleden Sonra',
                'Randevulu Tarih Belirleme',
              ].map((timeOption) => (
                <button
                  type="button"
                  key={timeOption}
                  onClick={() => setPreferredTime(timeOption)}
                  className={`rounded-xl p-2.5 text-xs text-left transition-all border font-semibold ${
                    preferredTime === timeOption
                      ? 'border-cyan-500 bg-cyan-50 text-cyan-800 ring-1 ring-cyan-400'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {timeOption}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Cihaz Markası / Şikayetiniz
            </label>
            <textarea
              rows={2}
              placeholder="Örn: Klima soğuk üflemiyor, ekranda arıza kodu yanıyor."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 font-medium"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 active:scale-95"
            >
              <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
              <span>WhatsApp ile Randevuyu Gönder</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-100 py-3 text-xs font-bold text-slate-700 border border-slate-200 hover:bg-slate-200 active:scale-95"
            >
              <Phone className="h-3.5 w-3.5 text-slate-700" />
              <span>Veya Telefon ile Hemen Ara ({BUSINESS_CONFIG.phonePlaceholder})</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-700 font-bold pt-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Titiz ve Özenli Usta İşçiliği</span>
          </div>

        </form>

      </div>
    </div>
  );
};
