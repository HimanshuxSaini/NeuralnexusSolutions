import React, { useState } from 'react';
import { PILLARS, SERVICES } from '../../data/siteData';
import { Calculator, ArrowRight, Check, Sparkles, RefreshCw, Send } from 'lucide-react';

export function ProjectCostEstimator({ onQuoteReady }: { onQuoteReady?: (quoteData: any) => void }) {
  const [selectedPillar, setSelectedPillar] = useState(PILLARS[0].id);
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [projectScale, setProjectScale] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'expedited'>('standard');
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    whatsappBot: false,
    seoPackage: false,
    designSystem: false,
    slaSupport: false,
  });

  const availableServices = SERVICES.filter(s => s.pillarId === selectedPillar);

  // Cost calculation matrix
  const calculateEstimate = () => {
    let base = 2500;
    let weeks = 6;

    // Pillar base adjustment
    if (selectedPillar === 'software-engineering') {
      base = projectScale === 'mvp' ? 2400 : projectScale === 'standard' ? 4800 : 9500;
      weeks = projectScale === 'mvp' ? 4 : projectScale === 'standard' ? 7 : 12;
    } else if (selectedPillar === 'ai-data-automation') {
      base = projectScale === 'mvp' ? 2000 : projectScale === 'standard' ? 4200 : 8500;
      weeks = projectScale === 'mvp' ? 3 : projectScale === 'standard' ? 6 : 10;
    } else if (selectedPillar === 'research-services') {
      base = projectScale === 'mvp' ? 1200 : projectScale === 'standard' ? 2600 : 5200;
      weeks = projectScale === 'mvp' ? 3 : projectScale === 'standard' ? 5 : 8;
    } else if (selectedPillar === 'growth-marketing') {
      base = projectScale === 'mvp' ? 900 : projectScale === 'standard' ? 1800 : 3400;
      weeks = projectScale === 'mvp' ? 2 : projectScale === 'standard' ? 4 : 6;
    } else if (selectedPillar === 'design-creative') {
      base = projectScale === 'mvp' ? 1100 : projectScale === 'standard' ? 2200 : 4500;
      weeks = projectScale === 'mvp' ? 2 : projectScale === 'standard' ? 4 : 8;
    }

    if (timelineSpeed === 'expedited') {
      base = Math.round(base * 1.25);
      weeks = Math.max(2, Math.round(weeks * 0.7));
    }

    // Addons
    let addonsTotal = 0;
    if (addons.whatsappBot) addonsTotal += 850;
    if (addons.seoPackage) addonsTotal += 650;
    if (addons.designSystem) addonsTotal += 950;
    if (addons.slaSupport) addonsTotal += 600;

    const totalUSD = base + addonsTotal;
    const lowUSD = Math.round(totalUSD * 0.9);
    const highUSD = Math.round(totalUSD * 1.15);

    const rateINR = 86; // 1 USD ≈ 86 INR
    const lowINR = Math.round((lowUSD * rateINR) / 1000) * 1000;
    const highINR = Math.round((highUSD * rateINR) / 1000) * 1000;

    return {
      weeks,
      low: currency === 'USD' ? `$${lowUSD.toLocaleString()}` : `₹${lowINR.toLocaleString('en-IN')}`,
      high: currency === 'USD' ? `$${highUSD.toLocaleString()}` : `₹${highINR.toLocaleString('en-IN')}`,
      totalRawUSD: totalUSD,
      currency
    };
  };

  const estimate = calculateEstimate();
  const currentServiceObj = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  const handleApplyToQuote = () => {
    if (onQuoteReady) {
      onQuoteReady({
        pillar: selectedPillar,
        service: currentServiceObj.title,
        scale: projectScale,
        speed: timelineSpeed,
        estimateRange: `${estimate.low} – ${estimate.high}`,
        weeks: estimate.weeks,
        addons: Object.keys(addons).filter(k => addons[k])
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">Interactive Costing Calculator</span>
          <h3 className="text-2xl font-bold text-[#0B1F3A] mt-0.5">Project Scope & Cost Estimator</h3>
          <p className="text-xs text-slate-500 mt-1">
            Configure your technical scope to calculate transparent engineering hours and price ranges.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setCurrency('USD')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${currency === 'USD' ? 'bg-white text-[#0B1F3A] shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrency('INR')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${currency === 'INR' ? 'bg-white text-[#0B1F3A] shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
          >
            INR (₹)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Pillar */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              1. Select Domain Pillar
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PILLARS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setSelectedPillar(p.id);
                    const matching = SERVICES.find(s => s.pillarId === p.id);
                    if (matching) setSelectedService(matching.id);
                  }}
                  className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                    selectedPillar === p.id
                      ? 'border-[#0FA3B1] bg-[#EAF6F8]/60 text-[#0B1F3A] font-semibold'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                  }`}
                >
                  <div className="font-semibold text-sm">{p.name}</div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{p.tagline}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Specific Service */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              2. Specific Service Deliverable
            </label>
            <div className="space-y-1.5">
              {availableServices.map((s) => (
                <label
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`flex items-center justify-between p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                    selectedService === s.id
                      ? 'border-[#0FA3B1] bg-[#EAF6F8]/40 text-[#0B1F3A] font-medium'
                      : 'border-slate-100 hover:border-slate-200 text-slate-600 bg-slate-50/50'
                  }`}
                >
                  <span>{s.title}</span>
                  {selectedService === s.id && (
                    <div className="w-4 h-4 rounded-full bg-[#0FA3B1] text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Step 3: Scope Scale */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              3. Scope & Complexity Scale
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setProjectScale('mvp')}
                className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                  projectScale === 'mvp'
                    ? 'border-[#0FA3B1] bg-[#EAF6F8] text-[#0B1F3A] font-semibold'
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <div className="text-xs font-bold">MVP / Starter</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Core features only</div>
              </button>

              <button
                type="button"
                onClick={() => setProjectScale('standard')}
                className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                  projectScale === 'standard'
                    ? 'border-[#0FA3B1] bg-[#EAF6F8] text-[#0B1F3A] font-semibold'
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <div className="text-xs font-bold">Standard Business</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Full workflows & APIs</div>
              </button>

              <button
                type="button"
                onClick={() => setProjectScale('enterprise')}
                className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                  projectScale === 'enterprise'
                    ? 'border-[#0FA3B1] bg-[#EAF6F8] text-[#0B1F3A] font-semibold'
                    : 'border-slate-200 hover:border-slate-300 text-slate-600'
                }`}
              >
                <div className="text-xs font-bold">Enterprise Scale</div>
                <div className="text-[11px] text-slate-500 mt-0.5">High load & custom RBAC</div>
              </button>
            </div>
          </div>

          {/* Step 4: Optional Add-ons */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              4. High-Impact Enhancements (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { key: 'whatsappBot', label: 'WhatsApp Cloud Bot (+ $850)', desc: 'Official API interactive lead bot' },
                { key: 'seoPackage', label: 'Core SEO Foundation (+ $650)', desc: 'Schema, metadata & speed optimization' },
                { key: 'designSystem', label: 'Custom Figma System (+ $950)', desc: 'Reusable tokens & components' },
                { key: 'slaSupport', label: '3-Month Priority SLA (+ $600)', desc: 'Server monitoring & priority bug fixes' },
              ].map((addon) => (
                <label
                  key={addon.key}
                  className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer text-xs transition-colors ${
                    addons[addon.key] ? 'border-[#0FA3B1] bg-[#EAF6F8]/50 text-[#0B1F3A]' : 'border-slate-100 hover:border-slate-200 text-slate-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={addons[addon.key]}
                    onChange={(e) => setAddons({ ...addons, [addon.key]: e.target.checked })}
                    className="mt-0.5 accent-[#0FA3B1] rounded"
                  />
                  <div>
                    <div className="font-semibold text-xs text-[#0B1F3A]">{addon.label}</div>
                    <div className="text-[11px] text-slate-500">{addon.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Summary Card */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-[#0B1F3A] text-white rounded-2xl p-6 shadow-md border border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-[#0FA3B1] font-semibold flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" /> Project Estimate
              </span>
              <span className="text-xs text-slate-400">No commitment required</span>
            </div>

            <div className="mt-5">
              <div className="text-xs text-slate-400">Selected Deliverable</div>
              <div className="text-lg font-bold text-white mt-0.5">{currentServiceObj.title}</div>
              <div className="text-xs text-slate-300 mt-1 line-clamp-2">{currentServiceObj.oneLinePromise}</div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400">Indicative Investment Range</div>
              <div className="text-3xl font-extrabold text-white mt-1">
                {estimate.low} – {estimate.high}
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 mt-2 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Estimated duration: ~{estimate.weeks} weeks</span>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Scope scale:</span>
                <span className="capitalize text-white font-medium">{projectScale}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span>IP Ownership:</span>
                <span className="text-emerald-400 font-medium">100% Client Owned</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Warranty:</span>
                <span className="text-white font-medium">30 Days Bug Fix SLA</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Delivery Team:</span>
                <span className="text-white font-medium">NeuralNexus Senior Leads</span>
              </div>
            </div>

            <button
              onClick={handleApplyToQuote}
              className="mt-6 w-full py-3 px-4 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Request Consultation for this Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-slate-400 text-center mt-3">
              Final proposal will be confirmed following our 20-min technical discovery call.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
