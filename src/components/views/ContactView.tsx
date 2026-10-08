import React from 'react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ContactCtaSection } from '../home/ContactCtaSection';


interface ContactViewProps {
  onNavigate: (view: string, param?: string) => void;
  initialService?: string;
  initialNotes?: string;
}

export function ContactView({ onNavigate, initialService, initialNotes }: ContactViewProps) {

  const breadcrumbs = [
    { label: 'Contact & Quote' }
  ];


  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-8">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <section className="bg-[#0B1F3A] text-white py-8 lg:py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">
              Start a Conversation
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight mt-2">
              Get in Touch or Request a Quote
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Whether you need a custom ERP, WhatsApp automation bot, AI model deployment, or Mendeley paper reproduction, our senior team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Quote Form with initial props */}
      <ContactCtaSection initialService={initialService} initialNotes={initialNotes} />


    </div>
  );
}
