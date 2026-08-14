import React from 'react';
import { BRANDS } from '../data/mockData';
import { ShieldCheck } from 'lucide-react';

export const BrandLogos: React.FC = () => {
  return (
    <section className="py-14 bg-slate-950 text-white border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
            <ShieldCheck className="h-4 w-4" />
            <span>Geniş Marka Uyumluluğu & Orijinal Parça Desteği</span>
          </div>
          <h2 className="text-lg font-bold text-slate-200">
            Tüm Klima ve Kombi Markalarında Uzman Teknik Servis
          </h2>
        </div>

        {/* Brand Grid / Marquee style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-center transition-all hover:border-slate-700 hover:bg-slate-800"
            >
              <span className="font-heading font-extrabold tracking-wider text-slate-200 text-sm">
                {brand.logoText}
              </span>
              <span className="text-[10px] text-slate-500 font-medium capitalize mt-0.5">
                {brand.category === 'hepsi' ? 'Klima & Kombi' : `${brand.category} Servisi`}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-5">
          * Belirtilen tüm marka ve tescilli logolar ilgili üreticilerin mülkiyetindedir. Muhammet Usta Teknik Servis bağımsız özel teknik servis olarak orijinal yedek parça standartlarında hizmet vermektedir.
        </p>

      </div>
    </section>
  );
};
