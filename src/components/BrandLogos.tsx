import React from 'react';
import { BRANDS } from '../data/mockData';
import { ShieldCheck } from 'lucide-react';

export const BrandLogos: React.FC = () => {
  return (
    <section className="py-14 bg-white text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
            <ShieldCheck className="h-4 w-4 text-cyan-600" />
            <span>Geniş Marka Uyumluluğu</span>
          </div>
          <h2 className="text-lg font-bold text-slate-800">
            Tüm Klima ve Kombi Markalarında Uzman Teknik Servis Desteği
          </h2>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-center transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm"
            >
              <span className="font-heading font-black tracking-wider text-slate-800 text-sm">
                {brand.logoText}
              </span>
              <span className="text-[10px] text-slate-500 font-semibold capitalize mt-0.5">
                {brand.category === 'hepsi' ? 'Klima & Kombi' : `${brand.category} Servisi`}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-500 mt-5 font-medium">
          * Belirtilen tüm marka ve tescilli logolar ilgili üreticilerin mülkiyetindedir. Muhammet Usta bağımsız özel teknik servis olarak hizmet vermektedir.
        </p>

      </div>
    </section>
  );
};
