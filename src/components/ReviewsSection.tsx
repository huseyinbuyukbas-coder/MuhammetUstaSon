import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, MessageSquare, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../data/mockData';
import { BUSINESS_CONFIG } from '../config/business';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'klima' | 'kombi'>('all');

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (filter === 'all') return true;
    if (filter === 'klima') return rev.serviceType.toLowerCase().includes('klima');
    if (filter === 'kombi') return rev.serviceType.toLowerCase().includes('kombi');
    return true;
  });

  return (
    <section id="yorumlar" className="py-20 bg-slate-900 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-slate-800 pb-8">
          
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Star className="h-3.5 w-3.5 fill-amber-400" />
              <span>Gerçek Google Müşteri Yorumları</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Müşterilerimizin Gözünden Muhammet Usta
            </h2>
            <p className="text-base text-slate-300">
              Google yorumlarımızda müşterilerimizin özellikle hızlı servis, güler yüzlü yaklaşım ve özenli işçilik konusundaki memnuniyeti öne çıkıyor.
            </p>
          </div>

          {/* Overall Rating Box */}
          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4 sm:p-5 shrink-0 shadow-lg">
            <div className="flex flex-col items-center justify-center border-r border-slate-800 pr-4">
              <span className="text-3xl font-black text-amber-400">5.0</span>
              <div className="flex items-center text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                <span>Google Puanı</span>
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                  Tam Puan
                </span>
              </div>
              <p className="text-xs text-slate-400">
                5.0 / 5.0 Müşteri Değerlendirmesi
              </p>
            </div>
          </div>

        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Tüm Yorumlar ({GOOGLE_REVIEWS.length})
          </button>
          <button
            onClick={() => setFilter('klima')}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              filter === 'klima'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Klima Servis Yorumları
          </button>
          <button
            onClick={() => setFilter('kombi')}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              filter === 'kombi'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
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
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-slate-700 hover:shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Top User Info & Stars */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-600 to-blue-800 font-bold text-white shadow-sm text-sm">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {review.author}
                        <CheckCircle className="h-3.5 w-3.5 text-cyan-400" />
                      </h3>
                      <span className="text-[11px] text-slate-400">
                        {review.date} • {review.serviceType}
                      </span>
                    </div>
                  </div>

                  {/* Google Icon Badge */}
                  <div className="flex items-center justify-center rounded-md bg-slate-900 px-2 py-1 border border-slate-800 text-[10px] font-bold text-slate-400">
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
                  <div className="rounded-lg bg-slate-900/90 border-l-2 border-cyan-400 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                    "{review.highlight}"
                  </div>
                )}

                {/* Review Text */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{review.text}"
                </p>

              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  <ThumbsUp className="h-3 w-3" />
                  Doğrulanmış Müşteri Deneyimi
                </span>
                <span>5/5 Yıldız</span>
              </div>

            </div>
          ))}
        </div>

        {/* Customer Trust Quote Banner */}
        <div className="mt-12 text-center rounded-xl bg-slate-950/60 border border-slate-800 p-4 text-xs text-slate-400">
          ⭐ Tüm incelemeler ve referanslar müşterilerimizin gerçek servis deneyimlerine aittir.
        </div>

      </div>
    </section>
  );
};
