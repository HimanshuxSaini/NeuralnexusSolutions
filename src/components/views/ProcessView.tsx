import React from 'react';
import { PROCESS_STEPS } from '../../data/siteData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { CheckCircle2, ShieldCheck, Clock, ArrowRight, Zap } from 'lucide-react';

interface ProcessViewProps {
  onNavigate: (view: string, param?: string) => void;
  onBookDiscovery: () => void;
}

export function ProcessView({ onNavigate, onBookDiscovery }: ProcessViewProps) {
  const breadcrumbs = [
    { label: 'Our Process' }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-8">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <section className="bg-[#0B1F3A] text-white py-8 lg:py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">
                Proven Delivery Framework
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight mt-2">
                Our 6-Phase Engineering Lifecycle
              </h1>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                How we take projects from raw problem statement to battle-tested production deployment with zero scope creep and clear weekly milestones.
              </p>
            </div>
            
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 hidden lg:block aspect-video bg-slate-900/50">
              <video 
                src="/ideavideo_opt.mp4" 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-extrabold font-['Sora'] text-[#0FA3B1]">
                    {step.number}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Phase {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] font-['Sora']">
                  {step.name}
                </h3>
                <p className="text-xs font-semibold text-[#0FA3B1] mt-1">
                  {step.tagline}
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                    Phase Deliverables & Client Handover
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {step.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="font-medium">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Strip */}
        <div className="mt-16 bg-[#0B1F3A] text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] max-w-xl">
            Ready to initiate Phase 01: Discover?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md">
            Book our free 20-minute discovery call to map requirements and receive a fixed statement of work.
          </p>

          <button
            onClick={onBookDiscovery}
            className="mt-6 py-3.5 px-7 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Book Your Discovery Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
