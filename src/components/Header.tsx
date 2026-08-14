import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, Star, Menu, X, Wrench, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface HeaderProps {
  onOpenModal: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Arıza Teşhis', href: '#ariza-teshis' },
    { name: 'Neden Biz?', href: '#neden-biz' },
    { name: 'Müşteri Yorumları', href: '#yorumlar' },
    { name: 'Hizmet Bölgeleri', href: '#hizmet-bolgeleri' },
    { name: 'S.S.S', href: '#sss' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-50 w-full bg-slate-900 text-white shadow-lg transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="border-b border-slate-800 bg-slate-950/80 px-4 py-1.5 text-xs text-slate-300 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Klima ve Kombi Teknik Servisi
            </span>
            <span className="hidden items-center gap-1 text-slate-400 sm:inline-flex">
              <Clock className="h-3.5 w-3.5 text-cyan-400" />
              <span>İletişim & Servis Talebi</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="h-3.5 w-3.5 fill-amber-400" />
              <span>5.0 / 5.0 Google Puanı</span>
            </div>
            <span className="hidden text-slate-500 md:inline">|</span>
            <span className="hidden items-center gap-1 text-slate-400 md:inline-flex">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
              <span>Titiz ve Özenli İşçilik</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 py-3 shadow-md backdrop-blur-md' : 'bg-slate-900 py-4'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo / Brand Name */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="group flex items-center gap-3 focus:outline-none"
            id="brand-logo"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 text-white shadow-md shadow-cyan-900/30 transition-transform group-hover:scale-105">
              <Wrench className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-lg font-bold tracking-tight text-white sm:text-xl">
                  Muhammet Usta
                </span>
                <span className="rounded bg-cyan-950 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-300 border border-cyan-800/60">
                  KLİMA & KOMBİ
                </span>
              </div>
              <span className="text-xs font-medium text-slate-400">
                Profesyonel Teknik Servis
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="transition-colors hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Link */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/15 border border-emerald-500/40 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition-all hover:bg-emerald-600/30 hover:border-emerald-400"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Call Button */}
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:bg-cyan-400 active:scale-95"
              id="header-phone-btn"
            >
              <Phone className="h-3.5 w-3.5 fill-slate-950" />
              <span>Hemen Ara</span>
            </a>

            {/* Service Request Button */}
            <button
              onClick={() => onOpenModal()}
              className="hidden xl:inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-700"
              id="header-appointment-btn"
            >
              <span>Servis Çağır</span>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 p-2 text-slate-950"
              aria-label="Telefon ile Ara"
            >
              <Phone className="h-4 w-4 fill-slate-950" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Menüyü Aç"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-900 px-4 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white shadow-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp'tan Ulaşın ({BUSINESS_CONFIG.whatsappPlaceholder})
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 py-2.5 text-sm font-bold text-slate-950 shadow-sm"
              >
                <Phone className="h-4 w-4 fill-slate-950" />
                Hemen Ara ({BUSINESS_CONFIG.phonePlaceholder})
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 py-2.5 text-sm font-semibold text-slate-200"
              >
                Online Servis Talebi Oluştur
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
