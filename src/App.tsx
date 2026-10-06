/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { FeaturedProjectsSection } from './components/home/FeaturedProjectsSection';
import { ProcessSection } from './components/home/ProcessSection';
import { IndustriesSection } from './components/home/IndustriesSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { BlogPreviewSection } from './components/home/BlogPreviewSection';
import { FaqSection } from './components/home/FaqSection';
import { ContactCtaSection } from './components/home/ContactCtaSection';

// Subpage Views
import { ServiceDetailView } from './components/views/ServiceDetailView';
import { ServicesHubView } from './components/views/ServicesHubView';
import { AboutView } from './components/views/AboutView';
import { TeamView } from './components/views/TeamView';
import { TeamMemberModal } from './components/views/TeamMemberModal';
import { CaseStudiesView } from './components/views/CaseStudiesView';
import { ProcessView } from './components/views/ProcessView';
import { ToolsView } from './components/views/ToolsView';
import { BlogView } from './components/views/BlogView';
import { ContactView } from './components/views/ContactView';

import { SERVICES, TEAM_MEMBERS, CASE_STUDIES, TeamMember, CaseStudy, BlogPost } from './data/siteData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string>(SERVICES[0].slug);
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [initialCaseStudyId, setInitialCaseStudyId] = useState<string | null>(null);
  const [initialBlogPost, setInitialBlogPost] = useState<BlogPost | null>(null);
  const [quoteInitialService, setQuoteInitialService] = useState<string | undefined>(undefined);
  const [quoteInitialNotes, setQuoteInitialNotes] = useState<string | undefined>(undefined);

  // Legal Modal
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'sitemap' | null>(null);

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

  const handleQuoteReadyFromEstimator = (quoteData: any) => {
    setQuoteInitialService(quoteData.service);
    setQuoteInitialNotes(
      `Estimated budget: ${quoteData.estimateRange} (~${quoteData.weeks} weeks). Scope scale: ${quoteData.scale}. Addons: ${quoteData.addons.join(', ')}`
    );
    setCurrentView('contact');
  };

  const currentServiceObj = SERVICES.find(s => s.slug === currentServiceSlug) || SERVICES[0];

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
              onExploreWork={() => setCurrentView('cases')}
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

            {/* Section 07: Featured projects / case studies */}
            <FeaturedProjectsSection
              onSelectCaseStudy={(study) => {
                setInitialCaseStudyId(study.id);
                setCurrentView('cases');
              }}
              onViewAllCases={() => setCurrentView('cases')}
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

            {/* Section 10: Verified Testimonials */}
            <TestimonialsSection />

            {/* Section 11: Blog / Insights */}
            <BlogPreviewSection
              onSelectPost={(post) => {
                setInitialBlogPost(post);
                setCurrentView('blog');
              }}
              onViewAllBlog={() => {
                setInitialBlogPost(null);
                setCurrentView('blog');
              }}
            />

            {/* Section 12: FAQ with schema markup */}
            <FaqSection
              onAskCustomQuestion={() => setCurrentView('contact')}
            />

            {/* Section 13: Final CTA and Contact Form */}
            <ContactCtaSection
              initialService={quoteInitialService}
              initialNotes={quoteInitialNotes}
            />
          </>
        )}

        {/* Dedicated Service Detail Page (Matching Section 6 Template) */}
        {currentView === 'service' && (
          <ServiceDetailView
            service={currentServiceObj}
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuoteFromService}
            onOpenCaseStudy={(caseId) => {
              setInitialCaseStudyId(caseId);
              setCurrentView('cases');
            }}
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
            onOpenCaseStudy={(caseId) => {
              setInitialCaseStudyId(caseId);
              setCurrentView('cases');
            }}
            onBookCallWithMember={(memberName) => {
              setQuoteInitialNotes(`Requested direct discovery consultation with ${memberName}`);
              setCurrentView('contact');
            }}
          />
        )}

        {/* Case Studies / Portfolio */}
        {currentView === 'cases' && (
          <CaseStudiesView
            onNavigate={handleNavigate}
            onRequestSimilarProject={(title) => {
              setQuoteInitialNotes(`Interested in architecture similar to case study: ${title}`);
              setCurrentView('contact');
            }}
            initialSelectedCaseId={initialCaseStudyId}
          />
        )}

        {/* Process Page */}
        {currentView === 'process' && (
          <ProcessView
            onNavigate={handleNavigate}
            onBookDiscovery={() => setCurrentView('contact')}
          />
        )}

        {/* Interactive Lead Magnet Tools */}
        {currentView === 'tools' && (
          <ToolsView
            onNavigate={handleNavigate}
            onQuoteReady={handleQuoteReadyFromEstimator}
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
          onOpenCaseStudy={(caseId) => {
            setSelectedTeamMember(null);
            setInitialCaseStudyId(caseId);
            setCurrentView('cases');
          }}
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
