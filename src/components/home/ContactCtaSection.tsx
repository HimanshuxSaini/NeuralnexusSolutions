import React, { useState } from 'react';
import { SERVICES } from '../../data/siteData';
import { Send, CheckCircle2, MessageCircle, Mail, Phone, Clock, ShieldCheck, Upload, ArrowRight } from 'lucide-react';

interface ContactCtaSectionProps {
  initialService?: string;
  initialNotes?: string;
}

export function ContactCtaSection({ initialService, initialNotes }: ContactCtaSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || SERVICES[0].title,
    budget: '$2,500 – $5,000',
    timeline: 'Standard (4 - 8 weeks)',
    message: initialNotes || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const budgetOptions = [
    '< $2,500 (PoC / Quick Sprint)',
    '$2,500 – $5,000 (Standard MVP)',
    '$5,000 – $12,000 (Full Software / ERP)',
    '$12,000+ (Enterprise Multi-Module)'
  ];

  const timelineOptions = [
    'Urgent (< 3 weeks)',
    'Standard (4 - 8 weeks)',
    'Comprehensive (2 - 3 months)',
    'Ongoing Monthly Retainer'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.name.trim()) return;

    setIsSubmitting(true);
    // Simulate real pipeline processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi NeuralNexusSolutions, this is ${formData.name || 'a visitor'}. I am reaching out to discuss a potential project regarding ${formData.service}. Are you available for a discovery call?`
    );
    window.open(`https://wa.me/918299032271?text=${text}`, '_blank');
  };

  return (
    <section className="py-8 lg:py-8 bg-white" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Context & Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora'] leading-tight">
              Start your project with a senior technical team.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tell us about your requirements. We review every submission within 24 business hours and deliver an actionable preliminary scope and timeline.
            </p>

            {/* Direct Quick Options */}
            <div className="pt-2 space-y-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full p-4 rounded-2xl bg-[#EAF6F8]/60 border border-[#0FA3B1]/30 hover:border-[#0FA3B1] transition-all flex items-center justify-between group cursor-pointer text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#0B1F3A]">Instant WhatsApp Inquiry</div>
                    <div className="text-[11px] text-slate-500">Quick response from Himanshu & lead team</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#0FA3B1] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs text-[#0B1F3A]">Direct Engineering Email</div>
                  <div className="text-[11px] text-slate-500 font-mono">contact@neuralnexussolutions.com</div>
                </div>
              </div>
            </div>

            {/* SLA guarantees */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#0FA3B1]" />
                <span>Discovery call scheduled within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Mutual Non-Disclosure Agreement (NDA) executed on request</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Quote Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] font-['Sora']">
                  Consultation Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our senior lead has received your project parameters for <strong>{formData.service}</strong>. We will reach out to <strong>{formData.email}</strong> within 24 business hours with preliminary scope recommendations.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#0FA3B1] hover:underline cursor-pointer"
                  >
                    Submit another requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA3B1] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA3B1] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 82990 32271"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA3B1] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA3B1] text-slate-900"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          [{s.pillarName.split('&')[0].trim()}] {s.title}
                        </option>
                      ))}
                      <option value="Other / Custom">Other / Custom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Desired Delivery Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA3B1] text-slate-900"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Description & Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe the business problem, existing tech stack, target audience, or paper to implement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0FA3B1] text-slate-900 placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Optional File Upload Simulation */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Optional Specification / RFP Document (PDF, DOCX, ZIP)
                  </label>
                  <label className="flex items-center gap-2 p-3 bg-white border border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <Upload className="w-4 h-4 text-slate-400" />
                    <span className="text-xs text-slate-500 truncate">
                      {fileName ? `Attached: ${fileName}` : 'Click to attach project brief or RFQ (max 25MB)'}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>Submit Project Brief for Review</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  Protected by standard confidentiality. Zero spam. We never sell your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
