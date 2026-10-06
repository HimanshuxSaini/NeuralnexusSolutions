import React from 'react';
import { Cpu, BookOpen, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export function WhyNeuralNexusSection({ onBookCall }: { onBookCall: () => void }) {
  const differentiators = [
    {
      icon: Cpu,
      title: 'AI-First Architecture',
      description: 'We do not simply bolt on generic wrapper chatbots. We design RAG pipelines, fine-tune domain LLMs, and optimize inference latency on private cloud infrastructure.'
    },
    {
      icon: BookOpen,
      title: 'Research-Grade Rigor',
      description: 'Our research division reproduces peer-reviewed computer science literature into deterministic code with rigorous empirical benchmarks and mathematical precision.'
    },
    {
      icon: Eye,
      title: 'Radical Transparency',
      description: 'Zero hidden fees or markups. You get direct repository access, weekly staging deployments, and clear milestone statements of work with full source code transfer.'
    },
    {
      icon: ShieldCheck,
      title: 'Post-Launch SLA & Support',
      description: 'We stand firmly behind our code with an included 30-day bug warranty, server telemetry, and continuous optimization options so you are never left stranded.'
    }
  ];

  return (
    <section className="py-20 bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Sora']">
            Built different by design
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            How we solve the four biggest complaints clients have with conventional software agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-[#0FA3B1]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0FA3B1]/20 text-[#0FA3B1] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Sora']">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-[#0FA3B1]">
                  Guarantee 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onBookCall}
            className="py-3 px-6 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-sm rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss Your Project with the Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
