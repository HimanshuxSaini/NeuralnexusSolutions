import React, { useState } from 'react';
import { CASE_STUDIES, PILLARS, CaseStudy } from '../../data/siteData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ArrowRight, CheckCircle2, X, Star, ExternalLink, ShieldCheck } from 'lucide-react';

interface CaseStudiesViewProps {
  onNavigate: (view: string, param?: string) => void;
  onRequestSimilarProject: (studyTitle: string) => void;
  initialSelectedCaseId?: string | null;
}

export function CaseStudiesView({ onNavigate, onRequestSimilarProject, initialSelectedCaseId }: CaseStudiesViewProps) {
  const [activePillar, setActivePillar] = useState('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(
    initialSelectedCaseId ? CASE_STUDIES.find(c => c.id === initialSelectedCaseId) || null : null
  );

  const breadcrumbs = [
    { label: 'Case Studies' }
  ];

  const filteredStudies = activePillar === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.pillarId === activePillar);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <section className="bg-[#0B1F3A] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">
              Verified Technical Deliverables
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight mt-2">
              Case Studies & Portfolio
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Explore in-depth technical breakdowns of production software, conversational WhatsApp bots, arXiv research reproductions, and technical SEO growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          <button
            onClick={() => setActivePillar('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
              activePillar === 'all'
                ? 'bg-[#0B1F3A] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            All Pillars ({CASE_STUDIES.length})
          </button>
          {PILLARS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePillar(p.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                activePillar === p.id
                  ? 'bg-[#0B1F3A] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedStudy(study)}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-[#0FA3B1]/40 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="text-[#0FA3B1] font-semibold">{study.clientIndustry}</span>
                  <span>{study.client}</span>
                </div>

                <h3 className="font-bold text-lg text-[#0B1F3A] font-['Sora'] group-hover:text-[#0FA3B1] transition-colors leading-snug">
                  {study.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {study.summary}
                </p>

                {/* Key Metrics */}
                <div className="mt-5 grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                  {study.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                      <div className="text-base font-extrabold text-[#0B1F3A] font-['Sora']">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-slate-600 font-semibold truncate">
                        {res.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-1">
                  {study.techUsed.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0FA3B1] font-semibold">
                <span>View Full Architecture Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="bg-[#0B1F3A] text-white p-6 flex items-start justify-between">
              <div>
                <div className="text-[11px] text-[#0FA3B1] font-semibold uppercase tracking-wider">
                  Case Study · {selectedStudy.clientIndustry}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Sora'] text-white mt-1">
                  {selectedStudy.title}
                </h3>
                <div className="text-xs text-slate-300 mt-1">
                  Client: {selectedStudy.client}
                </div>
              </div>

              <button
                onClick={() => setSelectedStudy(null)}
                className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700">
              {/* Problem Statement */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                  The Problem & Bottlenecks
                </h4>
                <div className="p-4 bg-amber-50/60 border border-amber-200/60 rounded-2xl text-slate-800 leading-relaxed">
                  {selectedStudy.problem}
                </div>
              </div>

              {/* Technical Approach & Architecture */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Engineering Approach & Technical Architecture
                </h4>
                <div className="p-4 bg-[#EAF6F8]/60 border border-[#0FA3B1]/20 rounded-2xl text-slate-800 leading-relaxed">
                  {selectedStudy.approach}
                </div>
              </div>

              {/* Measurable Results */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Quantifiable Production Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedStudy.results.map((res, i) => (
                    <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-2xs">
                      <div className="text-2xl font-extrabold text-[#0B1F3A] font-['Sora']">
                        {res.metric}
                      </div>
                      <div className="text-xs font-bold text-slate-800 mt-0.5">
                        {res.value}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {res.context}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Production Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStudy.techUsed.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-mono font-semibold text-slate-800 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial if available */}
              {selectedStudy.testimonial && (
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <p className="italic text-xs text-slate-700 leading-relaxed">
                    "{selectedStudy.testimonial.quote}"
                  </p>
                  <div className="mt-3 text-[11px] font-bold text-[#0B1F3A]">
                    {selectedStudy.testimonial.author} · <span className="text-slate-500 font-normal">{selectedStudy.testimonial.role}, {selectedStudy.testimonial.company}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Need a similar engineering architecture?</span>
              <button
                onClick={() => {
                  const title = selectedStudy.title;
                  setSelectedStudy(null);
                  onRequestSimilarProject(title);
                }}
                className="py-2.5 px-5 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
