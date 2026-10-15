/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { useSEO, buildBreadcrumbSchema } from './hooks/useSEO';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingActionStack } from './components/common/FloatingActionStack';
import { CookieConsent } from './components/common/CookieConsent';
import { LegalModal } from './components/views/LegalModal';

// Home Blueprint Sections (Sections 1 through 13 from Page 7)
import { HeroSection } from './components/home/HeroSection';
import { TechStackStrip } from './components/home/TechStackStrip';
import { ServicesPillarsSection } from './components/home/ServicesPillarsSection';
import { WhyNeuralNexusSection } from './components/home/WhyNeuralNexusSection';
import { ExpertTeamSection } from './components/home/ExpertTeamSection';
import { ProcessSection } from './components/home/ProcessSection';
import { IndustriesSection } from './components/home/IndustriesSection';
import { FaqSection } from './components/home/FaqSection';

// Subpage Views
import { ServiceDetailView } from './components/views/ServiceDetailView';
import { ServicesHubView } from './components/views/ServicesHubView';
import { AboutView } from './components/views/AboutView';
import { TeamView } from './components/views/TeamView';
import { TeamMemberModal } from './components/views/TeamMemberModal';
import { ProcessView } from './components/views/ProcessView';
import { BlogView } from './components/views/BlogView';
import { ContactView } from './components/views/ContactView';

import { SERVICES, TEAM_MEMBERS, TeamMember, BlogPost } from './data/siteData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string>(SERVICES[0].slug);
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [initialBlogPost, setInitialBlogPost] = useState<BlogPost | null>(null);
  const [quoteInitialService, setQuoteInitialService] = useState<string | undefined>(undefined);
  const [quoteInitialNotes, setQuoteInitialNotes] = useState<string | undefined>(undefined);

  // Legal Modal
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'sitemap' | 'refund' | 'cookie' | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, currentServiceSlug]);

  const handleNavigate = (view: string, param?: string) => {
    if (view === 'service' && param) {
      setCurrentServiceSlug(param);
    }
    setCurrentView(view);
  };

  const handleSelectServiceFromHome = (slug: string) => {
    setCurrentServiceSlug(slug);
    setCurrentView('service');
  };

  const handleRequestQuoteFromService = (serviceTitle: string, modelType?: string) => {
    setQuoteInitialService(serviceTitle);
    setQuoteInitialNotes(modelType ? `Selected model: ${modelType}` : '');
    setCurrentView('contact');
  };


  const currentServiceObj = SERVICES.find(s => s.slug === currentServiceSlug) || SERVICES[0];

  // ─── Dynamic SEO per View ───────────────────────────────────────
  const seoConfig = useMemo(() => {
    const BASE = 'https://neuralnexussolutions.com';
    switch (currentView) {
      case 'service':
        return {
          title: `${currentServiceObj.title} — NeuralNexus Solutions`,
          description: currentServiceObj.oneLinePromise || currentServiceObj.shortDesc,
          canonical: `${BASE}/service/${currentServiceObj.slug}`,
          structuredData: buildBreadcrumbSchema([
            { name: 'Services', url: `${BASE}/services` },
            { name: currentServiceObj.pillarName },
            { name: currentServiceObj.title, url: `${BASE}/service/${currentServiceObj.slug}` },
          ]),
        };
      case 'services':
        return {
          title: 'All Services — NeuralNexus Solutions',
          description: '15+ specialized services across software engineering, AI & automation, research implementation, growth marketing, and design — delivered by a startup-grade engineering team.',
          canonical: `${BASE}/services`,
          structuredData: buildBreadcrumbSchema([{ name: 'Services', url: `${BASE}/services` }]),
        };
      case 'about':
        return {
          title: 'About Us & Mission — NeuralNexus Solutions',
          description: 'Five engineering minds united by a hackathon podium finish. Learn how NeuralNexus Solutions became a multi-domain technology studio serving clients across India and globally.',
          canonical: `${BASE}/about`,
          structuredData: buildBreadcrumbSchema([{ name: 'About & Mission', url: `${BASE}/about` }]),
        };
      case 'team':
        return {
          title: 'Our Expert Team — NeuralNexus Solutions',
          description: 'Meet the senior engineers, architects, and designers behind NeuralNexus Solutions. AI/ML specialists, full-stack developers, and growth strategists.',
          canonical: `${BASE}/team`,
          structuredData: buildBreadcrumbSchema([{ name: 'Team', url: `${BASE}/team` }]),
        };
      case 'process':
        return {
          title: 'Our 6-Step Process — NeuralNexus Solutions',
          description: 'From discovery call to post-launch support — our proven 6-step engineering process ensures on-time, transparent, production-grade delivery.',
          canonical: `${BASE}/process`,
          structuredData: buildBreadcrumbSchema([{ name: 'Process', url: `${BASE}/process` }]),
        };
      case 'blog':
        return {
          title: 'Insights & Technical Blog — NeuralNexus Solutions',
          description: 'Technical deep-dives on AI, WhatsApp automation, ERP migration, Core Web Vitals, and research paper reproduction from the NeuralNexus engineering team.',
          canonical: `${BASE}/blog`,
          structuredData: buildBreadcrumbSchema([{ name: 'Blog', url: `${BASE}/blog` }]),
        };
      case 'contact':
        return {
          title: 'Contact & Request a Quote — NeuralNexus Solutions',
          description: 'Get in touch with NeuralNexus Solutions for custom software, AI model deployment, WhatsApp automation, or research paper implementation. Free discovery call available.',
          canonical: `${BASE}/contact`,
          structuredData: buildBreadcrumbSchema([{ name: 'Contact', url: `${BASE}/contact` }]),
        };
      default: // home
        return {
          title: 'NeuralNexus Solutions — Where AI, Software & Growth Connect',
          description: 'High-impact full-stack software development, generative AI & LLMs, WhatsApp Cloud API automation, research implementation, growth marketing, and UI/UX design.',
          canonical: `${BASE}/`,
        };
    }
  }, [currentView, currentServiceObj]);

  useSEO(seoConfig);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-['Inter']">
      {/* Global Navigation Header */}
      <Header currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* Section 01: Hero */}
            <HeroSection
              onStartProject={() => setCurrentView('contact')}
              onExploreWork={() => setCurrentView('services')}
            />

            {/* Section 02: Tech stack strip */}
            <TechStackStrip />

            {/* Section 03: Services (5 pillar cards expanding to sub-services) */}
            <ServicesPillarsSection
              onSelectService={handleSelectServiceFromHome}
              onExploreAllServices={() => setCurrentView('services')}
            />


            {/* Section 05: Why NeuralNexus */}
            <WhyNeuralNexusSection
              onBookCall={() => setCurrentView('contact')}
            />

            {/* Section 06: Expert Team */}
            <ExpertTeamSection
              onSelectMember={(member) => setSelectedTeamMember(member)}
              onViewAllTeam={() => setCurrentView('team')}
            />


            {/* Section 08: 6-Step Process */}
            <ProcessSection
              onViewFullProcess={() => setCurrentView('process')}
            />

            {/* Section 09: Industries served */}
            <IndustriesSection
              onConsultIndustry={(industry) => {
                setQuoteInitialNotes(`Inquiry for vertical: ${industry}`);
                setCurrentView('contact');
              }}
            />


            {/* Section 12: FAQ with schema markup */}
            <FaqSection
              onAskCustomQuestion={() => setCurrentView('contact')}
            />


          </>
        )}

        {/* Dedicated Service Detail Page (Matching Section 6 Template) */}
        {currentView === 'service' && (
          <ServiceDetailView
            service={currentServiceObj}
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuoteFromService}
          />
        )}

        {/* Services Hub (All 15 Services & 5 Pillars) */}
        {currentView === 'services' && (
          <ServicesHubView
            onNavigate={handleNavigate}
            onSelectService={handleSelectServiceFromHome}
          />
        )}

        {/* About & Story Page */}
        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onBookCall={() => setCurrentView('contact')}
          />
        )}

        {/* Team Page */}
        {currentView === 'team' && (
          <TeamView
            onNavigate={handleNavigate}
            onBookCallWithMember={(memberName) => {
              setQuoteInitialNotes(`Requested direct discovery consultation with ${memberName}`);
              setCurrentView('contact');
            }}
          />
        )}



        {/* Process Page */}
        {currentView === 'process' && (
          <ProcessView
            onNavigate={handleNavigate}
            onBookDiscovery={() => setCurrentView('contact')}
          />
        )}



        {/* Blog & Insights Page */}
        {currentView === 'blog' && (
          <BlogView
            onNavigate={handleNavigate}
            initialPost={initialBlogPost}
          />
        )}

        {/* Contact & Quote Request Page */}
        {currentView === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            initialService={quoteInitialService}
            initialNotes={quoteInitialNotes}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Global Vertical Floating Action Stack (WhatsApp + AI Assistant with live suggestion bubbles) */}
      <FloatingActionStack onNavigate={handleNavigate} />

      {/* Global Privacy & Cookie Notice */}
      <CookieConsent onOpenPrivacy={() => setLegalModalType('privacy')} />

      {/* Legal Modal (Privacy Policy / Terms of Service / HTML Sitemap) */}
      {legalModalType && (
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
          onNavigateService={(slug) => {
            setLegalModalType(null);
            handleSelectServiceFromHome(slug);
          }}
        />
      )}

      {/* Member Details Modal */}
      {selectedTeamMember && (
        <TeamMemberModal
          member={selectedTeamMember}
          onClose={() => setSelectedTeamMember(null)}
          onBookCallWithMember={(memberName) => {
            setSelectedTeamMember(null);
            setQuoteInitialNotes(`Requested direct discovery consultation with ${memberName}`);
            setCurrentView('contact');
          }}
        />
      )}
    </div>
  );
}
