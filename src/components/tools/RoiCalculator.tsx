import React, { useState } from 'react';
import { MessageSquare, TrendingUp, Clock, DollarSign, ArrowRight, CheckCircle2, Bot, Sparkles } from 'lucide-react';

export function RoiCalculator({ onBookAutomation }: { onBookAutomation?: () => void }) {
  const [inquiriesPerMonth, setInquiriesPerMonth] = useState(2500);
  const [minutesPerInquiry, setMinutesPerInquiry] = useState(12);
  const [hourlyAgentRate, setHourlyAgentRate] = useState(250);
  const [automationRate, setAutomationRate] = useState(75); // % automated

  // Calculations
  const totalHoursSpentPerMonth = (inquiriesPerMonth * minutesPerInquiry) / 60;
  const hoursAutomated = Math.round((totalHoursSpentPerMonth * automationRate) / 100);
  const monthlyCostSavings = Math.round(hoursAutomated * hourlyAgentRate);
  const annualCostSavings = monthlyCostSavings * 12;

  // Estimated conversion uplift: instant response increases conversions by ~24%
  const estimatedAdditionalLeads = Math.round((inquiriesPerMonth * 0.24 * (automationRate / 100)));

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">Interactive ROI Engine</span>
        <h3 className="text-2xl font-bold text-[#0B1F3A] mt-1">Chatbot & WhatsApp Automation ROI Calculator</h3>
        <p className="text-sm text-slate-600 mt-2">
          Calculate the exact monthly staff hours saved, operational cost reductions, and conversion uplift achieved through automated WhatsApp Cloud API and AI chatbot pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Sliders Area */}
        <div className="lg:col-span-6 space-y-6">
          {/* Slider 1: Inquiries */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <label className="font-semibold text-slate-800">Monthly Inquiries / Support Queries</label>
              <span className="font-mono font-bold text-[#0FA3B1] text-base">{inquiriesPerMonth.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="200"
              max="20000"
              step="100"
              value={inquiriesPerMonth}
              onChange={(e) => setInquiriesPerMonth(Number(e.target.value))}
              className="w-full accent-[#0FA3B1] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>200</span>
              <span>10,000</span>
              <span>20,000+</span>
            </div>
          </div>

          {/* Slider 2: Minutes spent */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <label className="font-semibold text-slate-800">Avg. Human Minutes Spent Per Query</label>
              <span className="font-mono font-bold text-[#0FA3B1] text-base">{minutesPerInquiry} mins</span>
            </div>
            <input
              type="range"
              min="3"
              max="30"
              step="1"
              value={minutesPerInquiry}
              onChange={(e) => setMinutesPerInquiry(Number(e.target.value))}
              className="w-full accent-[#0FA3B1] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>3 min (quick query)</span>
              <span>15 min</span>
              <span>30 min (complex order)</span>
            </div>
          </div>

          {/* Slider 3: Agent hourly loaded cost */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <label className="font-semibold text-slate-800">Support Staff Loaded Hourly Cost (₹ INR)</label>
              <span className="font-mono font-bold text-[#0FA3B1] text-base">₹{hourlyAgentRate}/hr</span>
            </div>
            <input
              type="range"
              min="80"
              max="800"
              step="10"
              value={hourlyAgentRate}
              onChange={(e) => setHourlyAgentRate(Number(e.target.value))}
              className="w-full accent-[#0FA3B1] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>₹80/hr</span>
              <span>₹400/hr</span>
              <span>₹800/hr</span>
            </div>
          </div>

          {/* Slider 4: Automation target */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <label className="font-semibold text-slate-800">Target Automated Resolution Rate</label>
              <span className="font-mono font-bold text-emerald-600 text-base">{automationRate}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="90"
              step="5"
              value={automationRate}
              onChange={(e) => setAutomationRate(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>40% (conservative)</span>
              <span>75% (recommended benchmark)</span>
              <span>90% (max)</span>
            </div>
          </div>

          {/* Interactive Flow Simulator */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-2.5">
              <Bot className="w-3.5 h-3.5 text-[#0FA3B1]" />
              <span>Simulated WhatsApp Automation Flow</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-slate-800 shadow-xs max-w-[85%]">
                <span className="text-[10px] text-slate-400 block mb-0.5">User · 10:14 AM</span>
                "Hi, can I check pricing for your enterprise ERP software?"
              </div>
              <div className="bg-[#EAF6F8] p-2.5 rounded-lg border border-[#0FA3B1]/20 text-[#0B1F3A] shadow-xs max-w-[88%] ml-auto">
                <span className="text-[10px] text-[#0FA3B1] font-semibold block mb-0.5">NeuralNexus Bot · 10:14 AM (instant &lt; 1s)</span>
                "Hello! Our custom modular ERP includes Inventory, HR, and Accounting modules with zero recurring per-user license fees. How many warehouse locations are you operating?"
              </div>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-radial from-[#0F294D] to-[#0B1F3A] text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-md">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-semibold tracking-wider text-[#0FA3B1] uppercase flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> Projected Savings & Impact
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 font-medium px-2 py-0.5 rounded-md border border-emerald-500/30">
                Fast Payback (&lt; 30 Days)
              </span>
            </div>

            <div className="mt-6">
              <span className="text-xs text-slate-400">Estimated Annual Cost Savings</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-white mt-1 tracking-tight">
                ₹{annualCostSavings.toLocaleString('en-IN')}
                <span className="text-base font-normal text-slate-400"> / year</span>
              </div>
              <div className="text-xs text-slate-300 mt-1">
                Equivalent to <strong className="text-white">₹{monthlyCostSavings.toLocaleString('en-IN')}</strong> in reduced support overhead every month.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#0FA3B1]" /> Hours Reclaimed
                </div>
                <div className="text-2xl font-bold text-white mt-1">{hoursAutomated.toLocaleString()} hrs</div>
                <div className="text-[11px] text-slate-400 mt-0.5">per month saved</div>
              </div>

              <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Lead Conversion
                </div>
                <div className="text-2xl font-bold text-white mt-1">+{estimatedAdditionalLeads} leads</div>
                <div className="text-[11px] text-slate-400 mt-0.5">captured via instant replies</div>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Response latency drops from {minutesPerInquiry} minutes to sub-3 seconds.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Official Meta WhatsApp Business Cloud API — zero account block risk.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Smart human handoff triggers when sentiment or high-intent is detected.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10">
            <button
              onClick={() => onBookAutomation && onBookAutomation()}
              className="w-full py-3 px-4 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Deploy WhatsApp Automation for Your Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-2.5">
              Talk directly to Himanshu Saini (Automation Lead) on our free 20-min consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
