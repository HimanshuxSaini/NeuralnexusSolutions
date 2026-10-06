import React, { useState } from 'react';
import { GLOBAL_FAQS } from '../../data/siteData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export function FaqSection({ onAskCustomQuestion }: { onAskCustomQuestion: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Structured Data Schema markup for FAQPage as per Section 10 & 12
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GLOBAL_FAQS.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      {/* Injected JSON-LD FAQ schema for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase mb-2">
            <span>Section 12</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora']">
            Clear answers to common questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Everything you need to know about code ownership, sprints, NDAs, and delivery timelines.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {GLOBAL_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#0B1F3A] font-['Sora']">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#EAF6F8] text-[#0FA3B1]' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs text-slate-500">
          <span>Have a unique requirement not covered here? </span>
          <button
            onClick={onAskCustomQuestion}
            className="text-[#0FA3B1] font-semibold hover:underline cursor-pointer"
          >
            Ask us via WhatsApp or Contact Form
          </button>
        </div>
      </div>
    </section>
  );
}
