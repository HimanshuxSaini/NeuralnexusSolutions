import React from 'react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ShieldCheck, Target, Users, Zap, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (view: string, param?: string) => void;
  onBookCall: () => void;
}

export function AboutView({ onNavigate, onBookCall }: AboutViewProps) {
  const breadcrumbs = [
    { label: 'About & Mission' }
  ];

  const workstreams = [
    { title: 'Project Management', desc: 'Sprint timeline enforcement, task tracking, transparent client communication.' },
    { title: 'UI/UX Design', desc: 'Wireframes, responsive visual design, cohesive Figma design systems.' },
    { title: 'Frontend Development', desc: 'Sub-second React/Next.js pages, accessible components, mobile responsiveness.' },
    { title: 'Backend & Integrations', desc: 'Robust REST/GraphQL APIs, CRM synchronization, WhatsApp webhooks.' },
    { title: 'AI & Automation', desc: 'Model fine-tuning, RAG chatbot logic, ROI calculation models, LLM demos.' },
    { title: 'Content & SEO', desc: 'Technical SEO copywriting, keyword mapping, semantic schema markup.' },
    { title: 'Marketing & Creative', desc: 'Scroll-stopping graphics, video editing, social media launch strategies.' },
    { title: 'QA & Launch', desc: 'Lighthouse 90+ speed checks, security testing, zero-downtime deployment.' },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">
              Our Story and Mission
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight mt-2">
              Engineering with purpose, transparency, and technical depth.
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              NeuralNexusSolutions was founded as a high-velocity freelance studio delivering software, AI, and growth engineering to startups, enterprises, and academic institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-wider">Mission Statement</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] font-['Sora']">
              To replace bloated agency bureaucracy with direct senior technical execution.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Most clients lose weeks explaining requirements to junior account handlers who have never written a line of code or deployed an inference server.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              At NeuralNexusSolutions, every project is planned, architected, and coded by senior domain leads. We eliminate middlemen, protect your budget, and ensure your product launches on schedule with clean, maintainable architecture.
            </p>

            <div className="pt-2">
              <button
                onClick={onBookCall}
                className="py-3 px-6 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule a 20-Min Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-[#0B1F3A] font-['Sora']">Our Core Commitments</h3>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-[#0FA3B1] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">No Inflated Claims or Fake Stats</strong>
                  We only report milestones and metrics that are 100% genuine and reproducible.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                <Target className="w-4 h-4 text-[#0FA3B1] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">100% IP Transfer</strong>
                  You own all code, repositories, and design files upon milestone completion.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                <Clock className="w-4 h-4 text-[#0FA3B1] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">30-Day Post-Launch SLA</strong>
                  We provide continuous support and immediate bug remediation following go-live.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workstreams Section from Page 15 */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-[#0FA3B1] uppercase tracking-wider">Operational Rigor</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] font-['Sora'] mt-1">
              8 Managed Workstreams
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every project is assigned clear owners across all critical dimensions of engineering and launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workstreams.map((ws, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
                <div className="text-[11px] font-mono text-[#0FA3B1] font-bold">0{i + 1}</div>
                <h4 className="font-bold text-sm text-[#0B1F3A] font-['Sora'] mt-1">{ws.title}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
