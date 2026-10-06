import React from 'react';
import { CASE_STUDIES } from '../../data/siteData';
import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = CASE_STUDIES.filter(c => !!c.testimonial).map(c => ({
    ...c.testimonial!,
    service: c.title,
    client: c.client
  }));

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora']">
            Verifiable client testimonials
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Transparent feedback from the founders, enterprise directors, and researchers who depend on our systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-[#0B1F3A]">{t.author}</div>
                <div className="text-xs text-[#0FA3B1] font-medium">{t.role}</div>
                <div className="text-[11px] text-slate-500">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
