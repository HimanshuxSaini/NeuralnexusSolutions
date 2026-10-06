import React, { useState } from 'react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { SeoAuditTool } from '../tools/SeoAuditTool';
import { ProjectCostEstimator } from '../tools/ProjectCostEstimator';
import { RoiCalculator } from '../tools/RoiCalculator';
import { Search, Calculator, MessageSquare, Wrench } from 'lucide-react';

interface ToolsViewProps {
  onNavigate: (view: string, param?: string) => void;
  onQuoteReady: (quoteData: any) => void;
}

export function ToolsView({ onNavigate, onQuoteReady }: ToolsViewProps) {
  const [activeTool, setActiveTool] = useState<'audit' | 'estimator' | 'roi'>('estimator');

  const breadcrumbs = [
    { label: 'Free Interactive Tools' }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <section className="bg-[#0B1F3A] text-white py-14 lg:py-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">
              Free Technical Lead Magnets
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight mt-2">
              Engineering Calculators & Diagnostic Tools
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Explore immediate data points for your business: run a live technical SEO audit, calculate bespoke project development costs, or measure WhatsApp automation ROI.
            </p>
          </div>

          {/* Tool Switcher Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTool('estimator')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTool === 'estimator'
                  ? 'bg-[#0FA3B1] text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/15 text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Project Cost Estimator</span>
            </button>

            <button
              onClick={() => setActiveTool('roi')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTool === 'roi'
                  ? 'bg-[#0FA3B1] text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/15 text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp / Bot ROI Engine</span>
            </button>

            <button
              onClick={() => setActiveTool('audit')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTool === 'audit'
                  ? 'bg-[#0FA3B1] text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/15 text-white'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Website SEO Audit</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Tool Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTool === 'estimator' && (
          <ProjectCostEstimator onQuoteReady={onQuoteReady} />
        )}

        {activeTool === 'roi' && (
          <RoiCalculator onBookAutomation={() => onNavigate('contact')} />
        )}

        {activeTool === 'audit' && (
          <SeoAuditTool onBookConsultation={(url) => onNavigate('contact', `SEO remediation for ${url}`)} />
        )}
      </div>
    </div>
  );
}
