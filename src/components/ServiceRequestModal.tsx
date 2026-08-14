import React, { useState, useEffect } from 'react';
import { X, Wrench, Send, Phone, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-7 shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
            <Wrench className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Hızlı Servis Randevusu</h3>
            <p className="text-xs text-slate-400">Muhammet Usta Teknik Servis</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              İhtiyaç Duyulan Hizmet
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                placeholder="Örn: Mehmet Öz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Telefon Numaranız
              </label>
              <input
                type="tel"
                placeholder="05XX XXX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
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
                  className={`rounded-lg p-2 text-xs text-left transition-all border ${
                    preferredTime === timeOption
                      ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300 font-semibold'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {timeOption}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Cihaz Markası / Şikayetiniz
            </label>
            <textarea
              rows={2}
              placeholder="Örn: Klima soğuk üflemiyor, ekranda arıza kodu yanıyor."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-500"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp ile Randevuyu Gönder</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-800 py-2.5 text-xs font-semibold text-slate-200 border border-slate-700 hover:bg-slate-700"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Veya Telefon ile Hemen Ara ({BUSINESS_CONFIG.phonePlaceholder})</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-400 pt-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Titiz ve Özenli Usta İşçiliği</span>
          </div>

        </form>

      </div>
    </div>
  );
};
