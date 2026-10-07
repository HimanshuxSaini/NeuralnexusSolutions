import React from 'react';
import { PROCESS_STEPS } from '../../data/siteData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ProcessSection({ onViewFullProcess }: { onViewFullProcess: () => void }) {
  return (
    <section className="py-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora'] mb-6">
            Every Great Product Starts With an Idea.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From raw concept to scalable product. Our 7-phase lifecycle eliminates project drift, bugs, and communication gaps.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">

          {/* Left Side: Sticky Video */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white z-10">
            <video 
              src="/ideavideo_opt.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full h-auto object-cover aspect-video"
            />
          </div>

          {/* Right Side: Scrolling Timeline */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 relative">

            {/* Optional connecting line behind cards */}
            <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-0.5 bg-[#0FA3B1]/20 -z-10" />

            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm hover:shadow-md hover:border-[#0FA3B1]/40 transition-all flex flex-col justify-between relative z-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold font-['Sora'] text-[#0FA3B1]">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Phase {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B1F3A] font-['Sora'] mb-1">
                    {step.name}
                  </h3>
                  <div className="text-sm font-semibold text-[#0FA3B1] mb-4">
                    {step.tagline}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-5 border-t border-slate-100/80 space-y-2.5">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Key Deliverables
                    </div>
                    {step.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}


          </div>

        </div>
      </div>
    </section>
  );
}
