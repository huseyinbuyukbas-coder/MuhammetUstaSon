import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Clock, ShieldCheck, Star, Menu, X, Wrench, ChevronRight, Sparkles, Flame } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface HeaderProps {
  onOpenModal: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar - Deep Navy High Contrast */}
      <div className="border-b border-slate-800 bg-slate-950 px-4 py-1.5 text-xs text-slate-300">
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
            <div className="inline-flex items-center gap-1 text-amber-400 font-bold">
              <Star className="h-3.5 w-3.5 fill-amber-400" />
              <span>5.0 / 5.0 Google Puanı</span>
            </div>
            <span className="hidden text-slate-700 md:inline">|</span>
            <span className="hidden items-center gap-1 text-slate-300 md:inline-flex">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Titiz ve Özenli İşçilik</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Crisp White with Subtle Border & Shadow */}
      <div
        className={`w-full bg-white/95 border-b border-slate-200 transition-all duration-300 ${
          isScrolled ? 'py-2.5 shadow-md backdrop-blur-md' : 'py-3.5 shadow-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo / Brand Name - Refined & Distinctive */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="group flex items-center gap-3.5 focus:outline-none"
            id="brand-logo"
          >
            {/* Distinctive Dual-Tech Emblem */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 via-cyan-700 to-slate-900 text-white shadow-md shadow-cyan-950/15 ring-2 ring-cyan-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:ring-cyan-500/40">
              <Wrench className="h-6 w-6 text-white drop-shadow" />
              <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-white">
                <Sparkles className="h-2.5 w-2.5" />
              </div>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading text-lg font-black tracking-tight text-slate-900 sm:text-xl transition-colors group-hover:text-cyan-700">
                  Muhammet Usta
                </span>
                <span className="inline-flex items-center rounded-md border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-cyan-800 shadow-xs">
                  KLİMA & KOMBİ
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <span>Profesyonel Teknik Servis</span>
                <span className="h-1 w-1 rounded-full bg-emerald-500"></span>
                <span className="text-[11px] font-medium text-emerald-600">Özenli Usta Hizmeti</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="transition-colors hover:text-cyan-600 focus:outline-none focus:text-cyan-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs - Visually Enhanced Hierarchy */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Primary Action: WhatsApp CTA (Prominent & High Converting) */}
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/25 ring-1 ring-emerald-500 transition-all duration-200 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:scale-95"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
              <div className="flex flex-col text-left leading-tight">
                <span>WhatsApp</span>
                <span className="text-[9px] font-normal text-emerald-100">Hemen Yazın</span>
              </div>
            </a>

            {/* Secondary Action: Direct Call Button (Eye Catching) */}
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-cyan-600/25 ring-1 ring-cyan-500 transition-all duration-200 hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-600/35 hover:-translate-y-0.5 active:scale-95"
              id="header-phone-btn"
            >
              <Phone className="h-4 w-4 fill-white" />
              <div className="flex flex-col text-left leading-tight">
                <span>Hemen Ara</span>
                <span className="text-[9px] font-normal text-cyan-100">{BUSINESS_CONFIG.phonePlaceholder}</span>
              </div>
            </a>

            {/* Service Request Button */}
            <button
              onClick={() => onOpenModal()}
              className="hidden xl:inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-slate-100/80 px-3.5 py-2 text-xs font-bold text-slate-700 shadow-xs transition-all hover:bg-slate-200 hover:border-slate-400 active:scale-95"
              id="header-appointment-btn"
            >
              <span>Servis Çağır</span>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
            </button>
          </div>

          {/* Mobile Hamburger & Call Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 p-2.5 text-white shadow-sm"
              aria-label="WhatsApp ile Yaz"
            >
              <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
            </a>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-xl bg-cyan-600 p-2.5 text-white shadow-sm"
              aria-label="Telefon ile Ara"
            >
              <Phone className="h-4 w-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 focus:outline-none"
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
        <div className="border-b border-slate-200 bg-white px-4 pb-6 pt-3 shadow-xl lg:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-cyan-700"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp ile Ulaşın ({BUSINESS_CONFIG.whatsappPlaceholder})
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 py-3 text-sm font-bold text-white shadow-md shadow-cyan-600/20"
              >
                <Phone className="h-4 w-4 fill-white" />
                Hemen Ara ({BUSINESS_CONFIG.phonePlaceholder})
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-100 py-2.5 text-sm font-bold text-slate-800"
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
