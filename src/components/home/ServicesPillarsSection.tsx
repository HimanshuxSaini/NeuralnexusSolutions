import React from 'react';
import { SERVICES } from '../../data/siteData';
import { ArrowRight } from 'lucide-react';

interface ServicesPillarsSectionProps {
  onSelectService: (slug: string) => void;
  onExploreAllServices: () => void;
}

export function ServicesPillarsSection({ onSelectService, onExploreAllServices }: ServicesPillarsSectionProps) {
  // Take first 7 services to fit the 8-card grid
  const featuredServices = SERVICES.slice(0, 7);

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora']">
              Core Capabilities & Solutions
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Architecting high-performance software, intelligent automation, and scalable digital experiences.
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

        {/* 8-Card Grid (7 Services + 1 CTA) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredServices.map((service, index) => {
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.slug)}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#0FA3B1] hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col h-full"
              >
                <div className="mb-4 group-hover:scale-105 transition-transform origin-left">
                  <span 
                    className="text-4xl sm:text-5xl font-black font-['Sora'] text-transparent" 
                    style={{ WebkitTextStroke: '1.5px #0FA3B1' }}
                  >
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-2 font-['Sora'] leading-tight group-hover:text-[#0FA3B1] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-500 line-clamp-3 mb-4 flex-grow leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="mt-auto flex items-center gap-1 text-[11px] font-semibold text-[#0FA3B1]">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* 8th Card: Explore All CTA */}
          <div
            onClick={onExploreAllServices}
            className="bg-gradient-to-br from-[#0B1F3A] to-[#0FA3B1] rounded-2xl p-5 border border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-center items-center text-center h-full min-h-[200px]"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 font-['Sora'] leading-tight">
              Explore All 15 Services
            </h3>
            <p className="text-xs text-white/80 px-2">
              View our complete engineering, AI, and design offerings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
