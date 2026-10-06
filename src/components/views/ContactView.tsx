import React, { useState } from 'react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ContactCtaSection } from '../home/ContactCtaSection';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, Calendar } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (view: string, param?: string) => void;
  initialService?: string;
  initialNotes?: string;
}

export function ContactView({ onNavigate, initialService, initialNotes }: ContactViewProps) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const breadcrumbs = [
    { label: 'Contact & Quote' }
  ];

  const discoverySlots = [
    'Today · 3:30 PM (IST)',
    'Tomorrow · 11:00 AM (IST)',
    'Tomorrow · 4:00 PM (IST)',
    'Wednesday · 2:00 PM (IST)'
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <section className="bg-[#0B1F3A] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">
              Start a Conversation
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight mt-2">
              Get in Touch or Request a Quote
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Whether you need a custom ERP, WhatsApp automation bot, AI model deployment, or LaTeX paper reproduction, our senior team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Quote Form with initial props */}
      <ContactCtaSection initialService={initialService} initialNotes={initialNotes} />

      {/* Schedule 20-min Discovery Call Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xs">
          <div className="max-w-2xl mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0FA3B1] uppercase tracking-wider mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Discovery Schedule</span>
            </div>
            <h3 className="text-xl font-bold text-[#0B1F3A] font-['Sora']">
              Prefer an immediate 20-minute Zoom / Google Meet?
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Select an upcoming opening to reserve dedicated calendar time directly with our technical leads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {discoverySlots.map((slot, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSlot(slot)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedSlot === slot
                    ? 'border-[#0FA3B1] bg-[#EAF6F8] text-[#0B1F3A] font-semibold shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700'
                }`}
              >
                <div className="text-xs font-bold">{slot.split('·')[0]}</div>
                <div className="text-[11px] text-[#0FA3B1] font-mono mt-0.5">{slot.split('·')[1]}</div>
              </button>
            ))}
          </div>

          {selectedSlot && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>Selected opening: <strong>{selectedSlot}</strong>. Complete the form above to lock this time slot!</span>
              <a
                href="#contact-form"
                className="font-bold text-[#0FA3B1] hover:underline"
              >
                Fill Name & Email
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
