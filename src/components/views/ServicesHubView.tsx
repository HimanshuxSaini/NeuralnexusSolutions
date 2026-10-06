import React, { useState } from 'react';
import { PILLARS, SERVICES, ServiceItem } from '../../data/siteData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { Search, ArrowRight, Layers, Cpu, BookOpen, TrendingUp, Palette, CheckCircle2 } from 'lucide-react';

interface ServicesHubViewProps {
  onNavigate: (view: string, param?: string) => void;
  onSelectService: (slug: string) => void;
}

const PILLAR_ICONS: { [key: string]: any } = {
  'software-engineering': Layers,
  'ai-data-automation': Cpu,
  'research-services': BookOpen,
  'growth-marketing': TrendingUp,
  'design-creative': Palette,
};

export function ServicesHubView({ onNavigate, onSelectService }: ServicesHubViewProps) {
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const breadcrumbs = [
    { label: 'Services Hub' }
  ];

  const filteredServices = SERVICES.filter(s => {
    const matchesPillar = selectedPillar === 'all' || s.pillarId === selectedPillar;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPillar && matchesSearch;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <section className="bg-[#0B1F3A] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">
              Comprehensive Service Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight mt-2">
              All 15 Specialized Services
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We group our capabilities into five technical pillars so you know exactly what team, tools, and timelines will deliver your product.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-8 max-w-lg relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by service name, keyword (e.g. ERP, WhatsApp, PyTorch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0FA3B1]"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Pillar filter tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          <button
            onClick={() => setSelectedPillar('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
              selectedPillar === 'all'
                ? 'bg-[#0B1F3A] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
            }`}
          >
            All Pillars (15)
          </button>

          {PILLARS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPillar(p.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedPillar === p.id
                  ? 'bg-[#0B1F3A] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = PILLAR_ICONS[service.pillarId] || Layers;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.slug)}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs hover:shadow-md hover:border-[#0FA3B1]/40 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF6F8] text-[#0FA3B1] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {service.pillarName.split('&')[0].trim()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1F3A] font-['Sora'] group-hover:text-[#0FA3B1] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {service.tools.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                        {t}
                      </span>
                    ))}
                    {service.tools.length > 3 && (
                      <span className="text-[10px] text-slate-400 self-center">+{service.tools.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0FA3B1] font-semibold">
                  <span>View Details & Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">No services match your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedPillar('all');
              }}
              className="mt-3 text-xs font-semibold text-[#0FA3B1] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
