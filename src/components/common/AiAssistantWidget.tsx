import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, MessageCircle, User, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES, TEAM_MEMBERS, PILLARS } from '../../data/siteData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickActions?: { label: string; action: string }[];
  isLeadCapture?: boolean;
}

const STARTER_PROMPTS = [
  'What services do you provide?',
  'How much does custom software/ERP cost?',
  'How does WhatsApp Automation work?',
  'Who is on the expert team?',
  'I want to book a free consultation'
];

export function AiAssistantWidget({ onNavigate }: { onNavigate?: (target: string, param?: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', contact: '', service: 'All' });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I am the NeuralNexus AI Assistant. I can answer questions about our 15 software & AI services, team members, pricing models, or help you book a consultation.",
      time: 'Just now',
      quickActions: [
        { label: 'Explore 15 Services', action: 'services' },
        { label: 'WhatsApp Automation Demo', action: 'whatsapp' },
        { label: 'Meet the 5 Experts', action: 'team' }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const generateBotReply = (query: string): { text: string; quickActions?: { label: string; action: string }[]; isLeadCapture?: boolean } => {
    const q = query.toLowerCase();

    if (q.includes('erp') || q.includes('inventory') || q.includes('accounting')) {
      return {
        text: "Our custom ERP Development service builds bespoke modules for inventory, accounts/GST, HR, and CRM with 0 recurring user-seat license fees. You own 100% of the source code. Pardeep Kumar Singh leads this architecture!",
        quickActions: [
          { label: 'View ERP Service Details', action: 'service:erp-development' }
        ]
      };
    }

    if (q.includes('whatsapp') || q.includes('chat') || q.includes('meta')) {
      return {
        text: "We build official Meta WhatsApp Business Cloud API automated pipelines: broadcasts, 24/7 lead qualification chatbots, and appointment scheduling with 98% open rates and zero number-blocking risk. Led by Himanshu Saini.",
        quickActions: [
          { label: 'View WhatsApp Service', action: 'service:whatsapp-automation' }
        ]
      };
    }

    if (q.includes('ai') || q.includes('machine learning') || q.includes('ml') || q.includes('model') || q.includes('llm')) {
      return {
        text: "We provide end-to-end AI & Machine Learning solutions: model design, fine-tuning open-weights (LLaMA/Mistral), RAG pipelines, and low-latency API serving. Piyush Pandey leads our AI/ML architecture.",
        quickActions: [
          { label: 'View AI & ML Service', action: 'service:ai-machine-learning' },
          { label: 'Chatbot Integration', action: 'service:chatbot-integration' }
        ]
      };
    }

    if (q.includes('research') || q.includes('paper') || q.includes('latex') || q.includes('thesis') || q.includes('arxiv')) {
      return {
        text: "Our Research Services include academic paper reproduction in PyTorch/CUDA and publication-grade LaTeX documentation adhering strictly to IEEE/ACM guidelines. Tannu Antil and Piyush Pandey direct this division.",
        quickActions: [
          { label: 'Research Documentation', action: 'service:research-documentation' },
          { label: 'Technical Implementation', action: 'service:research-technical-implementation' }
        ]
      };
    }

    if (q.includes('team') || q.includes('expert') || q.includes('who are you') || q.includes('piyush') || q.includes('himanshu')) {
      return {
        text: "NeuralNexusSolutions is powered by 5 verified senior experts: Piyush Pandey (AI/ML & Research), Pardeep Kumar Singh (Software & Cloud), Himanshu Saini (Full-Stack & WhatsApp Automation), Tannu Antil (Data Analytics & Research Docs), and Pintu Singh (Growth Marketing & SEO).",
        quickActions: [
          { label: 'View All Team Profiles', action: 'team' },
          { label: 'Book Discovery Call', action: 'contact' }
        ]
      };
    }

    if (q.includes('price') || q.includes('cost') || q.includes('estimate') || q.includes('quote') || q.includes('budget') || q.includes('rate')) {
      return {
        text: "We offer 3 clear engagement models: Fixed Project Milestones (MVPs from $2,400+), Monthly Retainer Sprints ($1,500 – $3,200/mo), and Hourly Consulting ($45/hr). You can use our interactive Project Cost Estimator for an immediate scope breakdown!",
        quickActions: [
          { label: 'Submit Quote Request', action: 'contact' }
        ]
      };
    }

    if (q.includes('contact') || q.includes('call') || q.includes('hire') || q.includes('book') || q.includes('consultation')) {
      return {
        text: "You can book a free 20-minute technical discovery call with our team right away! You can also chat directly on WhatsApp or drop your email below for an immediate callback.",
        isLeadCapture: true,
        quickActions: [
          { label: 'Go to Contact Page', action: 'contact' },
          { label: 'Chat on WhatsApp', action: 'whatsapp-direct' }
        ]
      };
    }

    if (q.includes('service') || q.includes('what do you do') || q.includes('pillars')) {
      return {
        text: "We deliver 15 services organized into 5 pillars: 1) Software & Product Engineering, 2) AI, Data & Automation, 3) Research Services, 4) Growth & Marketing (SEO/Ads), and 5) Design & Creative (UI/UX, Video). Which area can we assist you with?",
        quickActions: [
          { label: 'Browse All 15 Services', action: 'services' },
          { label: 'Case Studies', action: 'cases' }
        ]
      };
    }

    // Default friendly response
    return {
      text: "Thanks for asking! We specialize in custom software, AI/ML models, WhatsApp automation, research paper implementation, SEO, and UI/UX design. Would you like to check our pricing estimator or speak with an expert directly?",
      quickActions: [
        { label: 'Book a Consultation', action: 'contact' },
        { label: 'View Case Studies', action: 'cases' }
      ]
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: 'Now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply.text,
        time: 'Now',
        quickActions: reply.quickActions,
        isLeadCapture: reply.isLeadCapture
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action: string) => {
    if (action.startsWith('service:')) {
      const slug = action.split(':')[1];
      if (onNavigate) onNavigate('service', slug);
      setIsOpen(false);
    } else if (action === 'services') {
      if (onNavigate) onNavigate('services');
      setIsOpen(false);
    } else if (action === 'tools') {
      if (onNavigate) onNavigate('tools');
      setIsOpen(false);
    } else if (action === 'team') {
      if (onNavigate) onNavigate('team');
      setIsOpen(false);
    } else if (action === 'contact') {
      if (onNavigate) onNavigate('contact');
      setIsOpen(false);
    } else if (action === 'cases') {
      if (onNavigate) onNavigate('cases');
      setIsOpen(false);
    } else if (action === 'whatsapp' || action === 'whatsapp-direct') {
      window.open('https://wa.me/919999999999?text=Hello%20NeuralNexusSolutions,%20I%20am%20interested%20in%20a%20consultation', '_blank');
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.contact) return;
    setLeadCaptured(true);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Thank you ${leadForm.name || 'there'}! Your consultation request has been forwarded to Piyush Pandey & the lead team. We will reach you via ${leadForm.contact} within 24 hours.`,
        time: 'Now'
      }
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-24 z-40 bg-[#0B1F3A] hover:bg-[#061224] text-white p-3.5 rounded-full shadow-xl border border-slate-700/60 transition-transform hover:scale-105 flex items-center gap-2 group cursor-pointer"
          title="Chat with NeuralNexus AI Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-[#0FA3B1] group-hover:rotate-6 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0B1F3A]" />
          </div>
          <span className="text-xs font-semibold pr-1 hidden sm:inline-block">AI Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 sm:right-10 z-50 w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#0B1F3A] text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0FA3B1]/20 border border-[#0FA3B1]/40 flex items-center justify-center text-[#0FA3B1]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight flex items-center gap-2">
                  <span>NeuralNexus Assistant</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-medium border border-emerald-500/30">
                    Live Demo
                  </span>
                </div>
                <div className="text-[11px] text-slate-300">Grounded in 15 Services & Studio Architecture</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/70 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 shadow-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#0FA3B1] text-white rounded-br-xs font-normal'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>

                  {/* Optional Quick Action Chips */}
                  {m.quickActions && m.quickActions.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {m.quickActions.map((qa, i) => (
                        <button
                          key={i}
                          onClick={() => handleActionClick(qa.action)}
                          className="px-2.5 py-1 rounded-md bg-[#EAF6F8] hover:bg-[#d6eff2] text-[#0B1F3A] font-semibold text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>{qa.label}</span>
                          <ChevronRight className="w-3 h-3 text-[#0FA3B1]" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Inline Lead Capture Form */}
                  {m.isLeadCapture && !leadCaptured && (
                    <form onSubmit={handleLeadSubmit} className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                      <div className="font-semibold text-slate-800 text-[11px]">Request Direct Callback:</div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#0FA3B1]"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Email or WhatsApp number *"
                        value={leadForm.contact}
                        onChange={(e) => setLeadForm({ ...leadForm, contact: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#0FA3B1]"
                      />
                      <button
                        type="submit"
                        className="w-full py-1.5 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-xs rounded transition-colors cursor-pointer"
                      >
                        Submit Consultation Request
                      </button>
                    </form>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{m.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2.5 bg-white rounded-xl border border-slate-200 w-20">
                <span className="w-2 h-2 bg-[#0FA3B1] rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-[#0FA3B1] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 bg-[#0FA3B1] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompt suggestions */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 overflow-x-auto flex gap-1.5 no-scrollbar">
            {STARTER_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about AI, ERP, WhatsApp, pricing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#0FA3B1] text-slate-900 placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white rounded-xl transition-colors disabled:opacity-40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
