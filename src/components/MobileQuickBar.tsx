import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface MobileQuickBarProps {
  onOpenModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenModal }) => {
  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop & Tablet) */}
      <aside aria-label="Hızlı İletişim Butonları">
        <a
          href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-5 z-40 hidden md:flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-2xl shadow-emerald-900/30 transition-all duration-300 hover:bg-emerald-700 hover:scale-105 active:scale-95 group"
          id="floating-whatsapp-btn"
          aria-label="WhatsApp ile Mesaj Gönderin"
        >
          <div className="relative">
            <MessageCircle className="h-6 w-6 fill-white text-emerald-600" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300"></span>
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-black leading-tight">WhatsApp Destek</span>
            <span className="text-[10px] text-emerald-100 font-bold leading-tight">İletişime Geçin</span>
          </div>
        </a>

        {/* Fixed Bottom Quick Action Bar (Mobile Only) */}
        <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden items-center justify-between border-t border-slate-200 bg-white/95 px-3 py-2.5 backdrop-blur-lg shadow-2xl">
          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 py-3 text-xs font-black text-white shadow-md active:scale-95 mx-1"
            id="mobile-quick-call-btn"
          >
            <Phone className="h-4 w-4 fill-white" />
            <span>Hemen Ara</span>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappRaw.replace(/\D/g, '')}?text=${encodeURIComponent(BUSINESS_CONFIG.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 text-xs font-black text-white shadow-md active:scale-95 mx-1"
            id="mobile-quick-whatsapp-btn"
          >
            <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenModal}
            className="flex items-center justify-center rounded-2xl bg-slate-100 border border-slate-200 p-3 text-slate-700 active:scale-95 mx-1 hover:bg-slate-200"
            aria-label="Randevu Formu"
            id="mobile-quick-modal-btn"
          >
            <Calendar className="h-4 w-4 text-cyan-600" />
          </button>
        </div>
      </aside>
    </>
  );
};
