import React from 'react';
import { Wrench, Phone, MessageCircle, MapPin, Clock, ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SERVICES } from '../data/mockData';

interface FooterProps {
  onOpenModal: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-16 pb-24 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white shadow-md">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <span className="font-heading text-base font-black text-white block">
                  {BUSINESS_CONFIG.name}
                </span>
                <span className="text-[11px] text-cyan-400 font-bold">
                  {BUSINESS_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Ev ve iş yerlerinizdeki tüm klima ve kombi arıza, montaj, bakım ve periyodik temizlik işlemlerinde uzman ve güler yüzlü ustalarımızla titiz ve özenli teknik servis sağlıyoruz.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-amber-400 font-bold">
                <Star className="h-3.5 w-3.5 fill-amber-400" />
                <span>5.0 / 5.0 Google Puanı</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 border border-slate-800 px-3 py-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Titiz İşçilik</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              Teknik Hizmetlerimiz
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenModal(s.id)}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors text-left"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Fast Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              Hızlı Menü
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#hizmetler" onClick={(e) => handleSmoothScroll(e, '#hizmetler')} className="hover:text-cyan-400 transition-colors">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="#ariza-teshis" onClick={(e) => handleSmoothScroll(e, '#ariza-teshis')} className="hover:text-cyan-400 transition-colors">
                  Arıza Teşhis Aracı
                </a>
              </li>
              <li>
                <a href="#neden-biz" onClick={(e) => handleSmoothScroll(e, '#neden-biz')} className="hover:text-cyan-400 transition-colors">
                  Neden Biz?
                </a>
              </li>
              <li>
                <a href="#yorumlar" onClick={(e) => handleSmoothScroll(e, '#yorumlar')} className="hover:text-cyan-400 transition-colors">
                  Müşteri Yorumları
                </a>
              </li>
              <li>
                <a href="#hizmet-bolgeleri" onClick={(e) => handleSmoothScroll(e, '#hizmet-bolgeleri')} className="hover:text-cyan-400 transition-colors">
                  Hizmet Bölgeleri
                </a>
              </li>
              <li>
                <a href="#sss" onClick={(e) => handleSmoothScroll(e, '#sss')} className="hover:text-cyan-400 transition-colors">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a href="#iletisim" onClick={(e) => handleSmoothScroll(e, '#iletisim')} className="hover:text-cyan-400 transition-colors">
                  İletişim & Randevu
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">
              İletişim & Çalışma
            </h3>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-bold block">Telefon:</span>
                  <span>{BUSINESS_CONFIG.phonePlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-bold block">WhatsApp:</span>
                  <span>{BUSINESS_CONFIG.whatsappPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-bold block">Adres & Bölge:</span>
                  <span>{BUSINESS_CONFIG.location.addressPlaceholder}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-bold block">Randevu & İletişim:</span>
                  <span>{BUSINESS_CONFIG.workingHours.summary}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {currentYear} {BUSINESS_CONFIG.name}. Tüm Hakları Saklıdır.
          </div>

          <div className="flex items-center gap-4">
            <span>Müşteri Memnuniyeti</span>
            <span>•</span>
            <span>Titiz İşçilik</span>
            <span>•</span>
            <span>Özenli ve Güler Yüzlü Hizmet</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
