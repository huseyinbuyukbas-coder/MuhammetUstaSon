import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../data/mockData';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'klima' | 'kombi'>('all');

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (filter === 'all') return true;
    if (filter === 'klima') return rev.serviceType.toLowerCase().includes('klima');
    if (filter === 'kombi') return rev.serviceType.toLowerCase().includes('kombi');
    return true;
  });

  return (
    <section id="yorumlar" className="py-20 bg-white text-slate-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-slate-200 pb-8">
          
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <span>Gerçek Google Müşteri Yorumları</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Müşterilerimizin Gözünden Muhammet Usta
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Google yorumlarımızda müşterilerimizin özellikle hızlı servis, güler yüzlü yaklaşım ve özenli işçilik konusundaki memnuniyeti öne çıkıyor.
            </p>
          </div>

          {/* Overall Rating Box */}
          <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 shrink-0 shadow-lg shadow-slate-200/50">
            <div className="flex flex-col items-center justify-center border-r border-slate-200 pr-4">
              <span className="text-3xl font-black text-amber-500">5.0</span>
              <div className="flex items-center text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                <span>Google Puanı</span>
                <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                  Tam Puan
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                5.0 / 5.0 Müşteri Değerlendirmesi
              </p>
            </div>
          </div>

        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start gap-2.5 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Tüm Yorumlar ({GOOGLE_REVIEWS.length})
          </button>
          <button
            onClick={() => setFilter('klima')}
            className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              filter === 'klima'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Klima Servis Yorumları
          </button>
          <button
            onClick={() => setFilter('kombi')}
            className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              filter === 'kombi'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Kombi & Teknik Yorumlar
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-amber-300 hover:bg-white hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                
                {/* Top User Info & Stars */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 font-bold text-white shadow-sm text-sm">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                        {review.author}
                        <CheckCircle className="h-3.5 w-3.5 text-cyan-600" />
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {review.date} • {review.serviceType}
                      </span>
                    </div>
                  </div>

                  {/* Google Icon Badge */}
                  <div className="flex items-center justify-center rounded-lg bg-white px-2.5 py-1 border border-slate-200 text-[10px] font-bold text-slate-600 shadow-xs">
                    Google
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                {/* Highlight Quote if present */}
                {review.highlight && (
                  <div className="rounded-xl bg-cyan-50 border-l-3 border-cyan-600 px-3 py-1.5 text-xs font-bold text-cyan-900">
                    "{review.highlight}"
                  </div>
                )}

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
                  "{review.text}"
                </p>

              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                  <ThumbsUp className="h-3 w-3" />
                  Doğrulanmış Müşteri Deneyimi
                </span>
                <span className="font-bold text-slate-700">5/5 Yıldız</span>
              </div>

            </div>
          ))}
        </div>

        {/* Customer Trust Quote Banner */}
        <div className="mt-12 text-center rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs font-medium text-slate-600">
          ⭐ Tüm incelemeler ve referanslar müşterilerimizin gerçek servis deneyimlerine aittir.
        </div>

      </div>
    </section>
  );
};
