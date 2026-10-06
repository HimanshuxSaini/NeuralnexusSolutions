import React, { useState } from 'react';
import { PILLARS, SERVICES } from '../../data/siteData';
import { NeuralNexusLogo } from './NeuralNexusLogo';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'sitemap') => void;
}

export function Footer({ onNavigate, onOpenLegal }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <div
              onClick={() => onNavigate('home')}
              className="cursor-pointer inline-block"
            >
              <NeuralNexusLogo variant="full" theme="dark" size="md" />
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Where AI, software and growth connect. A startup-style engineering studio delivering custom software, AI & automation pipelines, research paper implementation, and data-driven marketing.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0FA3B1]" />
                <span>Delhi NCR & Global Remote</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#0FA3B1]" />
                <span>+91 99999 99999</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h4 className="font-bold text-white text-base">Subscribe to Neural Insights</h4>
                <span className="text-[11px] text-[#0FA3B1] uppercase font-semibold tracking-wider">
                  Bi-Weekly Technical Dispatch
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Real engineering breakdowns on WhatsApp Cloud API, AI paper reproduction, and custom ERP architectures. Zero promotional spam.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>You're on the list! Watch for our next deep-dive engineering case breakdown.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0FA3B1]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-2.5 px-5 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 5-Pillars Service Sitemap Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 py-12 border-b border-white/10">
          {PILLARS.map((pillar) => {
            const pillarServices = SERVICES.filter((s) => s.pillarId === pillar.id);

            return (
              <div key={pillar.id} className="space-y-3">
                <h5 className="font-bold text-xs uppercase tracking-wider text-[#0FA3B1]">
                  {pillar.name}
                </h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  {pillarServices.map((service) => (
                    <li key={service.id}>
                      <button
                        onClick={() => onNavigate('service', service.slug)}
                        className="hover:text-white transition-colors text-left cursor-pointer"
                      >
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Studio Quick Links & Expert Team */}
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-400 border-b border-white/10">
          <div>
            <div className="font-semibold text-white mb-2 uppercase tracking-wider text-[11px]">Core Navigation</div>
            <ul className="space-y-1.5">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white">About & Mission</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white">All 15 Services Hub</button></li>
              <li><button onClick={() => onNavigate('process')} className="hover:text-white">6-Phase Delivery Process</button></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-2 uppercase tracking-wider text-[11px]">Resources</div>
            <ul className="space-y-1.5">
              <li><button onClick={() => onNavigate('cases')} className="hover:text-white">Filterable Case Studies</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white">Engineering Blog</button></li>
              <li><button onClick={() => onNavigate('process')} className="hover:text-white">Delivery Process</button></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-2 uppercase tracking-wider text-[11px]">Expert Leadership</div>
            <ul className="space-y-1.5">
              <li><button onClick={() => onNavigate('team')} className="hover:text-white">Piyush Pandey (AI/ML Lead)</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:text-white">Pardeep Kumar Singh (Software & Cloud)</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:text-white">Himanshu Saini (WhatsApp & Full-Stack)</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:text-white">Tannu Antil (Data Analytics & Research)</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:text-white">Pintu Singh (Growth Marketing & SEO)</button></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-2 uppercase tracking-wider text-[11px]">Direct Contact</div>
            <ul className="space-y-1.5">
              <li><span>Email: contact@neuralnexussolutions.com</span></li>
              <li><span>WhatsApp: +91 99999 99999</span></li>
              <li><span>Response SLA: Within 24 Business Hours</span></li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#0FA3B1] hover:text-[#0D8B97] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} NeuralNexusSolutions. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={() => onOpenLegal('sitemap')} className="hover:text-white transition-colors cursor-pointer">
              HTML Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
