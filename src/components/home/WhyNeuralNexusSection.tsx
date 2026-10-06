import React from 'react';
import { Cpu, BookOpen, Eye, ShieldCheck, ArrowRight } from 'lucide-react';

export function WhyNeuralNexusSection({ onBookCall }: { onBookCall: () => void }) {
  const differentiators = [
    {
      title: 'AI-First Architecture',
      description: 'We do not simply bolt on generic wrapper chatbots. We design RAG pipelines, fine-tune domain LLMs, and optimize inference latency on private cloud infrastructure.',
      features: ['Custom RAG Pipeline Design', 'Domain-Specific LLM Fine-Tuning', 'Private Cloud Inference Optimization']
    },
    {
      title: 'Research-Grade Rigor',
      description: 'Our research division reproduces peer-reviewed computer science literature into deterministic code with rigorous empirical benchmarks and mathematical precision.',
      features: ['Academic Literature Reproduction', 'Deterministic Code Implementation', 'Empirical Benchmarking']
    },
    {
      title: 'Radical Transparency',
      description: 'Zero hidden fees or markups. You get direct repository access, weekly staging deployments, and clear milestone statements of work with full source code transfer.',
      features: ['Direct Code Repository Access', 'Weekly Staging Deployments', 'Complete Intellectual Property Transfer']
    },
    {
      title: 'Post-Launch SLA & Support',
      description: 'We stand firmly behind our code with an included 30-day bug warranty, server telemetry, and continuous optimization options so you are never left stranded.',
      features: ['30-Day Zero-Bug Guarantee', 'Live Server Telemetry Setup', 'Continuous Optimization Plans']
    }
  ];

  return (
    <section className="py-10 bg-[#0B1F3A] text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0FA3B1]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0FA3B1]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px bg-[#0FA3B1]/40 w-10 sm:w-16" />
            <span className="text-[#0FA3B1] text-xs font-bold tracking-[0.2em] uppercase">
              Our Difference
            </span>
            <div className="h-px bg-[#0FA3B1]/40 w-10 sm:w-16" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] mb-6">
            Built <span className="text-[#0FA3B1]">Different</span> by Design
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            How we solve the four biggest complaints clients have with conventional software agencies.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#112A4A]/50 backdrop-blur-sm border border-white/5 rounded-3xl p-6 hover:bg-[#112A4A] hover:border-[#0FA3B1]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
              >
                {/* Subtle top inner glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0FA3B1]/0 to-transparent group-hover:via-[#0FA3B1]/50 transition-all duration-500" />
                
                <div>
                  {/* Numbering Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold text-[#0FA3B1]">0{idx + 1}</span>
                    <div className="h-px bg-white/10 flex-1" />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white font-['Sora'] mb-3 leading-tight">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {diff.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {diff.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <ArrowRight className="w-3.5 h-3.5 text-[#0FA3B1] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onBookCall}
            className="py-4 px-8 bg-gradient-to-r from-[#0FA3B1] to-[#0B7A85] hover:from-[#0D8B97] hover:to-[#09626B] text-white font-bold text-sm rounded-full transition-all shadow-[0_0_20px_rgba(15,163,177,0.3)] hover:shadow-[0_0_25px_rgba(15,163,177,0.5)] hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss Your Project with the Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
