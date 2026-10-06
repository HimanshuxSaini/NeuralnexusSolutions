import React, { useState } from 'react';
import { CASE_STUDIES, PILLARS, CaseStudy } from '../../data/siteData';
import { ArrowRight, CheckCircle2, TrendingUp, Layers, ExternalLink } from 'lucide-react';

interface FeaturedProjectsSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onViewAllCases: () => void;
}

export function FeaturedProjectsSection({ onSelectCaseStudy, onViewAllCases }: FeaturedProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredStudies = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.pillarId === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora']">
              Featured projects & case studies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Real engineering results with quantifiable outcomes, architecture breakdown, and verified client testimonials.
            </p>
          </div>

          <button
            onClick={onViewAllCases}
            className="self-start md:self-end text-sm font-semibold text-[#0FA3B1] hover:text-[#0D8B97] flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Segmented Control (frontend-design skill compliant) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar max-w-fit mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeFilter === 'all' ? 'bg-white text-[#0B1F3A] shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Pillars
          </button>
          {PILLARS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveFilter(p.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === p.id ? 'bg-white text-[#0B1F3A] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {p.name.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.slice(0, 6).map((study) => (
            <div
              key={study.id}
              onClick={() => onSelectCaseStudy(study)}
              className="bg-slate-50/60 rounded-2xl border border-slate-200/80 p-6 hover:bg-white hover:border-[#0FA3B1]/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-3">
                  <span className="text-[#0FA3B1] font-semibold">{study.clientIndustry}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.client}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1F3A] font-['Sora'] group-hover:text-[#0FA3B1] transition-colors leading-snug">
                  {study.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {study.summary}
                </p>

                {/* Measurable Results Badges */}
                <div className="mt-5 grid grid-cols-2 gap-2 pt-4 border-t border-slate-200/60">
                  {study.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="p-2.5 bg-white rounded-lg border border-slate-200/60 shadow-2xs">
                      <div className="text-base font-extrabold text-[#0B1F3A] font-['Sora']">
                        {res.metric}
                      </div>
                      <div className="text-[10px] font-semibold text-slate-700 truncate">
                        {res.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {study.techUsed.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[10px] bg-slate-200/60 text-slate-700 px-2 py-0.5 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-[#0FA3B1] font-semibold">
                <span>View Full Architecture & Metrics</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
