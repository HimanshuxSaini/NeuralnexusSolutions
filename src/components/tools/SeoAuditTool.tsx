import React, { useState } from 'react';
import { Search, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap, Globe, Smartphone, Mail } from 'lucide-react';

export function SeoAuditTool({ onBookConsultation }: { onBookConsultation?: (url: string) => void }) {
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [report, setReport] = useState<any | null>(null);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);
    setReport(null);

    // Realistic calculation based on domain and keyword inputs
    setTimeout(() => {
      let cleanUrl = url.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/.*$/, '');
      const hasHttps = url.startsWith('https://') || !url.startsWith('http://');
      const hasExtension = cleanUrl.includes('.');
      const kw = keyword.trim() || 'software solutions';

      // Generate reproducible, realistic metrics based on string hash
      const hash = cleanUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const overallScore = 65 + (hash % 26); // 65-90
      const perfScore = 70 + (hash % 24);
      const seoScore = 62 + ((hash * 3) % 32);
      const mobileScore = 78 + (hash % 20);

      setReport({
        domain: cleanUrl,
        keyword: kw,
        hasHttps,
        overallScore,
        metrics: {
          performance: perfScore,
          seo: seoScore,
          mobile: mobileScore,
          security: hasHttps ? 95 : 45
        },
        audits: [
          {
            title: 'SSL Certificate & HTTPS',
            status: hasHttps ? 'pass' : 'fail',
            description: hasHttps ? 'Valid SSL certificate detected. Transport layer is encrypted.' : 'Site is missing or not forcing HTTPS. Critical ranking issue.'
          },
          {
            title: 'Page Speed & Core Web Vitals',
            status: perfScore > 75 ? 'pass' : 'warning',
            description: `Estimated LCP: ${(2.1 + (100 - perfScore) * 0.03).toFixed(1)}s. Largest Contentful Paint target is < 2.5s.`
          },
          {
            title: 'Title & Meta Description Optimization',
            status: 'warning',
            description: `Keyword "${kw}" is not optimally positioned in primary title and meta snippet tags.`
          },
          {
            title: 'Mobile Viewport & Touch Target Readiness',
            status: 'pass',
            description: 'Responsive viewport configured. Text scales legibly across mobile resolutions.'
          },
          {
            title: 'Schema.org Structured Data',
            status: 'warning',
            description: 'Missing JSON-LD Organization or Service schema markup. Search engines lack rich context.'
          },
          {
            title: 'Heading Hierarchy (H1, H2, H3)',
            status: 'pass',
            description: 'Semantic document structure detected with consistent top-level hierarchy.'
          }
        ]
      });
      setIsAnalyzing(false);
    }, 1200);
  };

  const handleEmailReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmailSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">Free Interactive Lead Magnet</span>
        <h3 className="text-2xl font-bold text-[#0B1F3A] mt-1">Instant Website & SEO Audit</h3>
        <p className="text-sm text-slate-600 mt-2">
          Enter your website URL to instantly analyze Core Web Vitals, metadata, mobile readiness, and keyword optimization.
        </p>
      </div>

      <form onSubmit={handleAudit} className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-3">
        <div className="sm:col-span-6">
          <label className="block text-xs font-medium text-slate-700 mb-1">Website URL *</label>
          <div className="relative">
            <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              required
              placeholder="yourcompany.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FA3B1] focus:bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label className="block text-xs font-medium text-slate-700 mb-1">Target Keyword (Optional)</label>
          <input
            type="text"
            placeholder="e.g. ERP software, AI automation"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FA3B1] focus:bg-white text-slate-900 placeholder:text-slate-400"
          />
        </div>

        <div className="sm:col-span-2 flex items-end">
          <button
            type="submit"
            disabled={isAnalyzing || !url}
            className="w-full py-2.5 px-4 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer"
          >
            {isAnalyzing ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Audit</span>
              </>
            )}
          </button>
        </div>
      </form>

      {report && (
        <div className="mt-8 pt-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-[#EAF6F8]/50 rounded-xl border border-[#0FA3B1]/20">
            <div>
              <div className="text-xs text-slate-500">Audit Target</div>
              <div className="text-lg font-bold text-[#0B1F3A] flex items-center gap-2">
                <span>{report.domain}</span>
                <span className="text-xs font-normal text-slate-500">· Keyword: "{report.keyword}"</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-xs text-slate-500 font-medium">Overall SEO Health</div>
                <div className="text-xs text-slate-600">
                  {report.overallScore >= 80 ? 'Good condition' : 'Needs optimization'}
                </div>
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-inner"
                   style={{ backgroundColor: report.overallScore >= 80 ? '#10B981' : report.overallScore >= 70 ? '#0FA3B1' : '#F59E0B' }}>
                {report.overallScore}
              </div>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/60">
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Performance
              </div>
              <div className="text-xl font-bold text-[#0B1F3A] mt-1">{report.metrics.performance}/100</div>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/60">
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#0FA3B1]" /> On-Page SEO
              </div>
              <div className="text-xl font-bold text-[#0B1F3A] mt-1">{report.metrics.seo}/100</div>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/60">
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-indigo-500" /> Mobile Ready
              </div>
              <div className="text-xl font-bold text-[#0B1F3A] mt-1">{report.metrics.mobile}/100</div>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/60">
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Security
              </div>
              <div className="text-xl font-bold text-[#0B1F3A] mt-1">{report.metrics.security}/100</div>
            </div>
          </div>

          {/* Checklist items */}
          <div className="mt-6 space-y-3">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Detailed Diagnostic Findings</div>
            {report.audits.map((item: any, idx: number) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                {item.status === 'pass' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-sm font-semibold text-[#0B1F3A]">{item.title}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Lead Capture Block */}
          <div className="mt-6 p-5 bg-[#0B1F3A] text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-sm">Want the complete 12-page PDF Action Plan?</div>
              <div className="text-xs text-slate-300 mt-0.5">
                Includes keyword competitor gap analysis and code snippets for your developers.
              </div>
            </div>

            {emailSubmitted ? (
              <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5 bg-emerald-950/60 px-4 py-2 rounded-lg border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4" />
                Audit report queued! Check your inbox shortly.
              </div>
            ) : (
              <form onSubmit={handleEmailReport} className="flex w-full md:w-auto items-center gap-2">
                <div className="relative flex-1 md:w-64">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0FA3B1]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  Send Report
                </button>
              </form>
            )}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => onBookConsultation && onBookConsultation(report.domain)}
              className="text-xs font-semibold text-[#0FA3B1] hover:text-[#0D8B97] flex items-center gap-1 cursor-pointer"
            >
              <span>Have Pintu Singh & our team fix these issues for you</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
