import React, { useState, useRef, useEffect } from 'react';
import { PILLARS, SERVICES } from '../../data/siteData';
import { NeuralNexusLogo } from './NeuralNexusLogo';
import { ChevronDown, Menu, X, ArrowRight, Cpu, Layers, BookOpen, TrendingUp, Palette, Wrench, Users, Info, Workflow, Calculator } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, param?: string) => void;
}

const PILLAR_ICONS: { [key: string]: any } = {
  'software-engineering': Layers,
  'ai-data-automation': Cpu,
  'research-services': BookOpen,
  'growth-marketing': TrendingUp,
  'design-creative': Palette,
};

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedPillarMobile, setExpandedPillarMobile] = useState<string | null>(null);
  const [expandedMoreMobile, setExpandedMoreMobile] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const moreTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handlers for smooth hover on "More" dropdown
  const handleMoreMouseEnter = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setMoreMenuOpen(true);
  };

  const handleMoreMouseLeave = () => {
    moreTimeoutRef.current = setTimeout(() => {
      setMoreMenuOpen(false);
    }, 180);
  };

  // Handlers for smooth hover on "Services" mega-menu
  const handleMegaMouseEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMegaMouseLeave = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 180);
  };

  const isMoreActive = ['about', 'process', 'team', 'tools', 'blog'].includes(currentView);

  const moreItems = [
    {
      id: 'about',
      title: 'About Us & Mission',
      description: 'Our story, values, and engineering standards',
      icon: Info,
      view: 'about'
    },
    {
      id: 'process',
      title: 'Our 6-Phase Process',
      description: 'Structured sprint lifecycle from brief to launch',
      icon: Workflow,
      view: 'process'
    },
    {
      id: 'team',
      title: 'Expert Team',
      description: '5 senior domain leads, no junior subcontractors',
      icon: Users,
      view: 'team'
    },
    {
      id: 'tools',
      title: 'Free Interactive Tools',
      description: 'SEO audit, project cost & ROI calculators',
      icon: Calculator,
      view: 'tools'
    },
    {
      id: 'blog',
      title: 'Insights & Blog',
      description: 'In-depth technical teardowns & guides',
      icon: BookOpen,
      view: 'blog'
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-2xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with 3D Isometric 'N' & NeuralNexus SOLUTIONS */}
          <div
            onClick={() => onNavigate('home')}
            className="cursor-pointer group flex items-center transition-transform hover:scale-102"
          >
            <NeuralNexusLogo variant="full" theme="light" size="md" />
          </div>

          {/* Desktop Navigation: Core items on screen, others in More */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Home with active underline indicator */}
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer relative ${
                currentView === 'home'
                  ? 'text-[#0FA3B1]'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              <span>Home</span>
              {currentView === 'home' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0FA3B1] rounded-full animate-in fade-in" />
              )}
            </button>

            {/* Services with 5-Pillar Mega-Menu Trigger (Hover & Click) */}
            <div
              className="relative"
              ref={megaMenuRef}
              onMouseEnter={handleMegaMouseEnter}
              onMouseLeave={handleMegaMouseLeave}
            >
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer relative ${
                  megaMenuOpen || currentView === 'services' || currentView === 'service'
                    ? 'text-[#0FA3B1]'
                    : 'text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    megaMenuOpen ? 'rotate-180 text-[#0FA3B1]' : 'text-slate-500'
                  }`}
                />
                {(currentView === 'services' || currentView === 'service') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0FA3B1] rounded-full animate-in fade-in" />
                )}
              </button>

              {/* Mega-Menu Dropdown: 5 Columns for 5 Pillars as per Section 4 */}
              {megaMenuOpen && (
                <div className="fixed left-1/2 -translate-x-1/2 top-[76px] w-[95vw] max-w-7xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="font-bold text-[#0B1F3A] text-base">All 15 Specialized Services</h4>
                      <p className="text-xs text-slate-500">Organized into 5 dedicated technical pillars</p>
                    </div>
                    <button
                      onClick={() => {
                        onNavigate('services');
                        setMegaMenuOpen(false);
                      }}
                      className="text-xs font-semibold text-[#0FA3B1] hover:text-[#0D8B97] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Services Overview Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {PILLARS.map((pillar) => {
                      const IconComponent = PILLAR_ICONS[pillar.id] || Layers;
                      const pillarServices = SERVICES.filter((s) => s.pillarId === pillar.id);

                      return (
                        <div key={pillar.id} className="p-3 rounded-xl bg-slate-50/60 border border-slate-100 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-md bg-[#0FA3B1]/10 text-[#0FA3B1] flex items-center justify-center">
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <h5 className="font-bold text-xs text-[#0B1F3A] leading-tight">
                              {pillar.name}
                            </h5>
                          </div>

                          <div className="space-y-2 mt-3">
                            {pillarServices.map((service) => (
                              <button
                                key={service.id}
                                onClick={() => {
                                  onNavigate('service', service.slug);
                                  setMegaMenuOpen(false);
                                }}
                                className="w-full text-left p-1.5 rounded-lg hover:bg-white transition-colors group cursor-pointer"
                              >
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-[#0FA3B1] transition-colors leading-tight">
                                  {service.title}
                                </div>
                                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {service.shortDesc}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">

                      <span>100% intellectual property & code ownership transferred to client</span>
                    </span>
                    <button
                      onClick={() => {
                        onNavigate('tools');
                        setMegaMenuOpen(false);
                      }}
                      className="text-[#0B1F3A] font-semibold hover:text-[#0FA3B1] flex items-center gap-1 cursor-pointer"
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Calculate Scope & Estimate</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Case Studies */}
            <button
              onClick={() => onNavigate('cases')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer relative ${
                currentView === 'cases'
                  ? 'text-[#0FA3B1]'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              <span>Case Studies</span>
              {currentView === 'cases' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0FA3B1] rounded-full animate-in fade-in" />
              )}
            </button>

            {/* More Dropdown (Hover & Click) containing other supporting pages */}
            <div
              className="relative"
              ref={moreMenuRef}
              onMouseEnter={handleMoreMouseEnter}
              onMouseLeave={handleMoreMouseLeave}
            >
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-semibold flex items-center gap-1 transition-colors cursor-pointer relative ${
                  moreMenuOpen || isMoreActive
                    ? 'text-[#0FA3B1]'
                    : 'text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreMenuOpen ? 'rotate-180 text-[#0FA3B1]' : 'text-slate-500'
                  }`}
                />
                {isMoreActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0FA3B1] rounded-full animate-in fade-in" />
                )}
              </button>

              {/* More Dropdown Menu */}
              {moreMenuOpen && (
                <div className="absolute left-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2.5 z-50 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Company & Resources
                    </span>
                  </div>

                  <div className="space-y-1">
                    {moreItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentView === item.view;

                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            onNavigate(item.view);
                            setMoreMenuOpen(false);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 cursor-pointer group ${
                            isActive
                              ? 'bg-[#EAF6F8] text-[#0B1F3A]'
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isActive
                              ? 'bg-[#0FA3B1] text-white'
                              : 'bg-slate-100 text-slate-600 group-hover:bg-[#EAF6F8] group-hover:text-[#0FA3B1]'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>

                          <div className="flex-1">
                            <div className="text-xs font-bold leading-tight group-hover:text-[#0FA3B1] transition-colors flex items-center justify-between">
                              <span>{item.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#0FA3B1]" />
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              {item.description}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => onNavigate('contact')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer relative ${
                currentView === 'contact'
                  ? 'text-[#0FA3B1]'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              <span>Contact</span>
              {currentView === 'contact' && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0FA3B1] rounded-full animate-in fade-in" />
              )}
            </button>
          </nav>

          {/* Primary Consultation Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="py-2.5 px-5 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-sm rounded-xl transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onNavigate('contact')}
              className="py-1.5 px-3 bg-[#0FA3B1] text-white font-medium text-xs rounded-lg cursor-pointer"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Home
          </button>

          <button
            onClick={() => {
              onNavigate('services');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 text-sm font-semibold text-[#0FA3B1] hover:bg-slate-50 rounded-lg"
          >
            Services Overview Hub
          </button>

          {/* Mobile Accordion for Pillars */}
          <div className="pl-2 space-y-1">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="border-l-2 border-slate-200 pl-3">
                <button
                  onClick={() =>
                    setExpandedPillarMobile(expandedPillarMobile === pillar.id ? null : pillar.id)
                  }
                  className="w-full text-left py-1 text-xs font-bold text-slate-700 flex items-center justify-between"
                >
                  <span>{pillar.name}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedPillarMobile === pillar.id ? 'rotate-180' : ''}`} />
                </button>

                {expandedPillarMobile === pillar.id && (
                  <div className="space-y-1 py-1 pl-2">
                    {SERVICES.filter((s) => s.pillarId === pillar.id).map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          onNavigate('service', s.slug);
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-1 text-xs text-slate-600 hover:text-[#0FA3B1]"
                      >
                        · {s.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              onNavigate('cases');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Case Studies
          </button>

          {/* More Sections Accordion for Mobile */}
          <div className="border-t border-slate-100 pt-2">
            <button
              onClick={() => setExpandedMoreMobile(!expandedMoreMobile)}
              className="w-full text-left py-2 px-3 text-sm font-semibold text-slate-800 flex items-center justify-between hover:bg-slate-50 rounded-lg"
            >
              <span>More Sections</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedMoreMobile ? 'rotate-180 text-[#0FA3B1]' : ''}`} />
            </button>

            {expandedMoreMobile && (
              <div className="pl-3 space-y-1 py-1 border-l-2 border-[#0FA3B1]/40 ml-3">
                {moreItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.view);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-1.5 px-2 text-xs font-medium text-slate-700 hover:text-[#0FA3B1] flex items-center justify-between"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 text-sm font-semibold text-[#0FA3B1] hover:bg-slate-50 rounded-lg"
          >
            Contact & Quote Request
          </button>
        </div>
      )}
    </header>
  );
}
