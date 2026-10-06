import React, { useState } from 'react';
import { PILLARS, SERVICES } from '../../data/siteData';
import { Layers, Cpu, BookOpen, TrendingUp, Palette, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

interface ServicesPillarsSectionProps {
  onSelectService: (slug: string) => void;
  onExploreAllServices: () => void;
}

const PILLAR_ICONS: { [key: string]: any } = {
  'software-engineering': Layers,
  'ai-data-automation': Cpu,
  'research-services': BookOpen,
  'growth-marketing': TrendingUp,
  'design-creative': Palette,
};

export function ServicesPillarsSection({ onSelectService, onExploreAllServices }: ServicesPillarsSectionProps) {
  // Allow toggling or expanding pillar cards
  const [expandedPillars, setExpandedPillars] = useState<{ [key: string]: boolean }>({
    'software-engineering': true,
    'ai-data-automation': true,
    'research-services': true,
    'growth-marketing': true,
    'design-creative': true,
  });

  const togglePillar = (id: string) => {
    setExpandedPillars(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora']">
              Engineered for ambitious businesses & research teams
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              From low-latency AI models and WhatsApp commerce pipelines to enterprise ERPs and peer-reviewed research replication.
            </p>
          </div>

          <button
            onClick={onExploreAllServices}
            className="self-start md:self-end text-sm font-semibold text-[#0FA3B1] hover:text-[#0D8B97] flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All 15 Services Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[pillar.id] || Layers;
            const pillarServices = SERVICES.filter(s => s.pillarId === pillar.id);
            const isExpanded = !!expandedPillars[pillar.id];

            return (
              <div
                key={pillar.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                  isExpanded ? 'border-slate-300 shadow-sm' : 'border-slate-200 hover:border-slate-300'
                } ${idx === 0 ? 'lg:col-span-1' : ''}`}
              >
                <div className="p-6">
                  {/* Pillar Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EAF6F8] text-[#0FA3B1] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>

                  </div>

                  <h3 className="text-xl font-bold text-[#0B1F3A] font-['Sora']">
                    {pillar.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {pillar.tagline}
                  </p>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    <strong className="text-slate-700">Typical clients:</strong> {pillar.typicalClients}
                  </div>
                </div>

                {/* Sub-services Expandable Accordion/List */}
                <div className="bg-slate-50/80 p-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Included Services ({pillarServices.length})</span>
                    <button
                      onClick={() => togglePillar(pillar.id)}
                      className="text-[#0FA3B1] text-[11px] hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="space-y-2 mt-2">
                      {pillarServices.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => onSelectService(service.slug)}
                          className="p-3 bg-white rounded-xl border border-slate-200/80 hover:border-[#0FA3B1] transition-all cursor-pointer group shadow-2xs"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#0FA3B1] transition-colors">
                              {service.title}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0FA3B1] group-hover:translate-x-0.5 transition-all" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                            {service.shortDesc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
