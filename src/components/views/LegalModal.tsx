import React from 'react';
import { X, Shield, FileText, Map, ExternalLink } from 'lucide-react';
import { PILLARS, SERVICES } from '../../data/siteData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'sitemap' | 'refund' | 'cookie';
  onClose: () => void;
  onNavigateService?: (slug: string) => void;
}

export function LegalModal({ type, onClose, onNavigateService }: LegalModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#0B1F3A] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && <Shield className="w-5 h-5 text-[#0FA3B1]" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-[#0FA3B1]" />}
            {type === 'sitemap' && <Map className="w-5 h-5 text-[#0FA3B1]" />}
            {type === 'refund' && <FileText className="w-5 h-5 text-[#0FA3B1]" />}
            {type === 'cookie' && <Shield className="w-5 h-5 text-[#0FA3B1]" />}
            <h3 className="font-bold text-lg text-white">
              {type === 'privacy' && 'Privacy Policy & Data Security'}
              {type === 'terms' && 'Terms of Service & IP Ownership'}
              {type === 'sitemap' && 'HTML Sitemap & Canonical URLs'}
              {type === 'refund' && 'Refund & Cancellation Policy'}
              {type === 'cookie' && 'Cookie Policy'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-sm text-slate-700 space-y-4 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p className="text-xs text-slate-500">Last updated: March 2026 · Compliant with GDPR & IT Act standards</p>
              <h4 className="font-bold text-base text-[#0B1F3A]">1. Data We Collect</h4>
              <p>
                NeuralNexus Solutions only collects contact details (name, email, phone number, organization) that you voluntarily submit via our quote inquiry forms, WhatsApp chat links, or newsletter subscription. We do not sell, rent, or trade your personal information.
              </p>

              <h4 className="font-bold text-base text-[#0B1F3A]">2. Client Confidentiality & NDAs</h4>
              <p>
                We recognize that software architecture, custom datasets, and academic research papers involve highly sensitive proprietary assets. We routinely execute mutual Non-Disclosure Agreements (NDAs) before examining client codebases or data.
              </p>

              <h4 className="font-bold text-base text-[#0B1F3A]">3. Analytics & Lead Magnets</h4>
              <p>
                Information entered into our interactive lead tools (e.g. Website SEO Audit URL, Project Cost Estimator selections, and WhatsApp ROI calculator) is used exclusively to generate your personalized diagnostic report and scope proposal.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p className="text-xs text-slate-500">Effective: 2026 · NeuralNexus Solutions Studio</p>
              <h4 className="font-bold text-base text-[#0B1F3A]">1. 100% Intellectual Property (IP) Ownership</h4>
              <p>
                Unlike traditional agencies that retain proprietary licenses or charge recurring per-user fees, NeuralNexus Solutions transfers 100% full intellectual property, source code, repositories, and custom design assets to the client upon milestone payment completion.
              </p>

              <h4 className="font-bold text-base text-[#0B1F3A]">2. Engagement Models & Guarantees</h4>
              <p>
                Projects are delivered under mutually agreed Statements of Work (SOW) with defined sprint milestones. Every delivered project includes a standard 30-day post-launch warranty covering any bugs or defect remediation.
              </p>

              <h4 className="font-bold text-base text-[#0B1F3A]">3. Non-Compete & Ethical Research Standards</h4>
              <p>
                Our Research Services division adheres strictly to peer-review academic integrity standards. Code reproductions are developed with clean implementations from published papers and cited datasets.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <p className="text-xs text-slate-500">Effective: 2026 · Webunitech Solutions LLP</p>
              <h4 className="font-bold text-base text-[#0B1F3A]">1. Service Cancellations</h4>
              <p>
                Clients may request project cancellation prior to the commencement of the development phase. Once work has commenced under an active Statement of Work (SOW), cancellation terms will be governed by the specific clauses within that SOW.
              </p>

              <h4 className="font-bold text-base text-[#0B1F3A]">2. Refund Eligibility</h4>
              <p>
                Refunds are considered on a case-by-case basis and only applicable for un-utilized sprint hours or undelivered milestone phases. Completed phases and approved deliverables are non-refundable.
              </p>
            </>
          )}

          {type === 'cookie' && (
            <>
              <p className="text-xs text-slate-500">Effective: 2026</p>
              <h4 className="font-bold text-base text-[#0B1F3A]">1. Usage of Cookies</h4>
              <p>
                NeuralNexus Solutions uses essential cookies to ensure the basic functionality of the website and to improve your browsing experience. We do not use third-party tracking cookies for targeted advertising.
              </p>
            </>
          )}

          {type === 'sitemap' && (
            <div className="space-y-6">
              <p className="text-xs text-slate-500">Complete canonical URL inventory (approx 30 indexable routes at launch):</p>
              
              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#0FA3B1] mb-2">Primary Pages</h5>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">/ (Homepage)</li>
                  <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">/about</li>
                  <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">/services</li>
                  <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">/case-studies</li>
                  <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">/our-process</li>
                  <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">/tools</li>
                  <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">/blog</li>
                  <li className="p-2 bg-slate-50 rounded border border-slate-100 font-mono">/contact</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#0FA3B1] mb-2">15 Dedicated Service Pages</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onClose();
                        if (onNavigateService) onNavigateService(s.slug);
                      }}
                      className="text-left p-2 rounded bg-slate-50 hover:bg-[#EAF6F8] hover:text-[#0FA3B1] border border-slate-100 transition-colors flex items-center justify-between"
                    >
                      <span className="font-mono text-[11px]">/services/{s.pillarId}/{s.slug}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0B1F3A] hover:bg-[#061224] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
