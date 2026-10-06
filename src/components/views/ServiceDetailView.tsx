import React, { useState } from 'react';
import { ServiceItem, CASE_STUDIES, PILLARS } from '../../data/siteData';
import { ArrowRight, CheckCircle2, ChevronDown, Layers, MessageCircle, ShieldCheck, Clock, Zap, ExternalLink } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';

interface ServiceDetailViewProps {
  service: ServiceItem;
  onNavigate: (view: string, param?: string) => void;
  onRequestQuote: (serviceTitle: string, modelType?: string) => void;
  onOpenCaseStudy: (caseId: string) => void;
}

export function ServiceDetailView({
  service,
  onNavigate,
  onRequestQuote,
  onOpenCaseStudy
}: ServiceDetailViewProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const relatedCase = CASE_STUDIES.find(c => c.id === service.relatedCaseStudyId) || CASE_STUDIES[0];
  const currentPillar = PILLARS.find(p => p.id === service.pillarId);

  const breadcrumbs = [
    { label: 'Services', view: 'services' },
    { label: service.pillarName, view: 'services' },
    { label: service.title }
  ];

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hi NeuralNexusSolutions! I am interested in your ${service.title} service. Can we discuss scope and availability?`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Block 1: Hero */}
      <section className="bg-[#0B1F3A] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Unboxed clean metadata (frontend design skill) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase mb-3">
              <span>{service.pillarName}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>100% Owned Source Code</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.oneLinePromise}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onRequestQuote(service.title)}
                className="py-3 px-6 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Get a Quote for this Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppChat}
                className="py-3 px-6 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Quick WhatsApp Inquiry</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: What We Deliver */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-wider">Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] font-['Sora'] mt-1">
            What we deliver
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Granular deliverables included in this service package with guaranteed technical specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.whatWeDeliver.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:border-[#0FA3B1]/40 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[#EAF6F8] text-[#0FA3B1] flex items-center justify-center font-bold text-xs mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-base text-[#0B1F3A] font-['Sora']">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Block 3: Process (Service-Specific Steps) */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-wider">Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] font-['Sora'] mt-1">
              Service delivery roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              From initial architectural specification to verified production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/70 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xl font-extrabold font-['Sora'] text-[#0FA3B1] mb-2">
                    Step 0{step.step}
                  </div>
                  <h4 className="font-bold text-sm text-[#0B1F3A] font-['Sora']">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 4: Tools and Technology */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs">
          <div>
            <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-wider">Production Stack</span>
            <h3 className="text-xl font-bold text-[#0B1F3A] font-['Sora'] mt-1">
              Technologies & frameworks used
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Modern tooling selected for high performance, maintainability, and clean documentation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {service.tools.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 border border-slate-200/60 font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Block 5: Related Case Study */}
      {relatedCase && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EAF6F8]/60 border border-[#0FA3B1]/20 rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-wider">Related Case Study</span>
                <h3 className="text-2xl font-bold text-[#0B1F3A] font-['Sora'] mt-1">
                  {relatedCase.title}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Client: {relatedCase.client} · {relatedCase.clientIndustry}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 mt-3 max-w-2xl leading-relaxed">
                  {relatedCase.summary}
                </p>

                {/* Metrics */}
                <div className="mt-4 flex flex-wrap gap-4">
                  {relatedCase.results.map((res, i) => (
                    <div key={i} className="bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-2xs">
                      <div className="text-base font-extrabold text-[#0B1F3A]">{res.metric}</div>
                      <div className="text-[10px] text-slate-600 font-medium">{res.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => onOpenCaseStudy(relatedCase.id)}
                  className="py-3 px-5 bg-[#0B1F3A] hover:bg-[#061224] text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>View Full Case Breakdown</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Block 6: Engagement Models */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-wider">Pricing Structure</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] font-['Sora'] mt-1">
            Transparent engagement models
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Predictable costs with zero hidden agency markups or surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {service.engagementModels.map((model, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-bold text-sm text-[#0B1F3A] font-['Sora']">{model.type}</span>
                  <span className="text-[11px] font-mono text-slate-500">{model.typicalDuration}</span>
                </div>

                <div className="text-2xl font-extrabold text-[#0B1F3A] font-['Sora'] mt-4">
                  {model.pricingEstimate}
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {model.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-700">Best for:</strong> {model.recommendedFor}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onRequestQuote(service.title, model.type)}
                  className="w-full py-2.5 px-4 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Select {model.type}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Block 7: FAQ (Service-Specific) */}
      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-wider">Service FAQ</span>
          <h2 className="text-2xl font-bold text-[#0B1F3A] font-['Sora'] mt-1">
            Questions specific to {service.title}
          </h2>
        </div>

        <div className="space-y-3">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="bg-white rounded-xl border border-slate-200/80 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-xs sm:text-sm text-[#0B1F3A] font-['Sora']">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#0FA3B1]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Block 8: Final CTA */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1F3A] rounded-3xl p-8 sm:p-12 text-white text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Sora'] max-w-xl">
            Ready to kick off {service.title}?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg">
            Schedule a free 20-minute discovery call with our lead engineers or chat with us instantly on WhatsApp.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onRequestQuote(service.title)}
              className="py-3 px-6 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Request Formal Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppChat}
              className="py-3 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Talk to an Expert on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
