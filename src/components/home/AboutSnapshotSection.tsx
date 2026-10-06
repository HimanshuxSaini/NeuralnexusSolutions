import React from 'react';
import { ArrowRight, CheckCircle2, Award, Users, Code, Sparkles } from 'lucide-react';

export function AboutSnapshotSection({ onReadFullStory }: { onReadFullStory: () => void }) {
  const stats = [
    { value: '15', label: 'Specialized Services', sub: 'Across 5 focused pillars' },
    { value: '5', label: 'Senior Technical Leads', sub: 'Direct principal collaboration' },
    { value: '100%', label: 'IP & Code Ownership', sub: 'Zero per-seat software licensing' },
    { value: '30-Day', label: 'Post-Launch Warranty', sub: 'Guaranteed bug remediation' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Column */}
          <div className="lg:col-span-7 space-y-6">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora'] leading-tight">
              An engineering-first studio founded on transparency, not agency overhead.
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                NeuralNexusSolutions was formed by five specialists who grew frustrated with traditional agencies: heavy account management markup, outsourced offshore junior contractors, and inflated marketing claims without reproducible technical rigor.
              </p>
              <p>
                We operate as a startup-style freelance studio. When you work with us, you collaborate directly with the five senior engineers and strategists building your software, deploying your machine learning pipelines, reproducing your academic research, and scaling your search rankings.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onReadFullStory}
                className="text-sm font-semibold text-[#0FA3B1] hover:text-[#0D8B97] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Our Mission & Working Standards</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Accurate Statistics Matrix */}
          <div className="lg:col-span-5 bg-[#EAF6F8]/60 rounded-3xl p-8 border border-[#0FA3B1]/20">
            <h3 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-6">
              Studio Metrics & Verifiable Standards
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((st, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-2xs">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] font-['Sora']">
                    {st.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">
                    {st.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {st.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#0FA3B1]/20 text-xs text-slate-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0FA3B1] shrink-0" />
              <span>Strict policy: All milestones, codebases, and case studies are authentic and verifiable.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
