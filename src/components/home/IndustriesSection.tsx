import React, { useState } from 'react';
import { INDUSTRIES_SERVED } from '../../data/siteData';
import { GraduationCap, HeartPulse, ShoppingBag, Rocket, FlaskConical, CheckCircle2, ArrowRight } from 'lucide-react';

const INDUSTRY_ICONS: { [key: string]: any } = {
  'Startups & SMEs': Rocket,
  'Education & Academics': GraduationCap,
  'Healthcare & Clinics': HeartPulse,
  'Retail & E-Commerce': ShoppingBag,
  'Corporate R&D Labs': FlaskConical,
};

export function IndustriesSection({ onConsultIndustry }: { onConsultIndustry: (industry: string) => void }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIndustry = INDUSTRIES_SERVED[activeIdx];
  const Icon = INDUSTRY_ICONS[activeIndustry.name] || Rocket;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora']">
            Industries where we deliver measurable advantage
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tailored engineering pipelines matching compliance standards, data security, and operational workflows.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <button
              key={ind.name}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'bg-[#0B1F3A] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Active Industry Showcase */}
        <div className="bg-[#EAF6F8]/60 border border-[#0FA3B1]/20 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0FA3B1] text-white flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] font-['Sora']">
                {activeIndustry.name}
              </h3>
              <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                {activeIndustry.description}
              </p>

              <div className="space-y-2 pt-2">
                {activeIndustry.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0FA3B1] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 self-start md:self-center">
              <button
                onClick={() => onConsultIndustry(activeIndustry.name)}
                className="py-3 px-6 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Consult for {activeIndustry.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
