import React from 'react';
import { PROCESS_STEPS } from '../../data/siteData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ProcessSection({ onViewFullProcess }: { onViewFullProcess: () => void }) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora']">
            Our 6-phase engineering lifecycle
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A disciplined, milestone-driven framework that eliminates project drift, surprise bugs, and communication gaps.
          </p>
        </div>

        {/* 6 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:border-[#0FA3B1]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-['Sora'] text-[#0FA3B1]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Phase {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B1F3A] font-['Sora']">
                  {step.name}
                </h3>
                <div className="text-xs font-semibold text-[#0FA3B1] mt-0.5">
                  {step.tagline}
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Deliverables
                  </div>
                  {step.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onViewFullProcess}
            className="text-sm font-semibold text-[#0FA3B1] hover:text-[#0D8B97] inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Learn More About Our Sprint Schedules & SLAs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
