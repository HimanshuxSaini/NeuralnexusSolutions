import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Headphones, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SERVICES, TEAM_MEMBERS } from '../../data/siteData';

interface FloatingActionStackProps {
  onNavigate?: (target: string, param?: string) => void;
}

interface SuggestionPair {
  whatsappText: string;
  whatsappMessage: string;
  aiText: string;
  aiPrompt: string;
}

const SUGGESTION_PAIRS: SuggestionPair[] = [
  {
    whatsappText: 'CHAT WITH US • GET A QUOTE • ',
    whatsappMessage: 'Hi NeuralNexus Solutions! I have an inquiry about my project and need technical assistance.',
    aiText: 'ASK AI ANYTHING • INSTANT HELP • ',
    aiPrompt: 'Hello! What can you tell me about NeuralNexus Solutions?'
  },
  {
    whatsappText: 'APP DEV • SEO • BUSINESS GROWTH • ',
    whatsappMessage: 'Hi! I am looking for custom app development and growth marketing services.',
    aiText: 'EXPLORE SERVICES • VIEW PRICING • ',
    aiPrompt: 'Can you show me the full list of your 15 services and pricing models?'
  },
  {
    whatsappText: 'WHATSAPP CLOUD API • LIVE DEMO • ',
    whatsappMessage: 'Hello Himanshu! Can I get a live demo of the official WhatsApp Cloud API automation?',
    aiText: 'GROWTH ASSISTANT • BOOST SALES • ',
    aiPrompt: 'How does WhatsApp automation increase sales conversion and customer support response times?'
  },
  {
    whatsappText: 'FREE PROJECT QUOTE • FAST ESTIMATE • ',
    whatsappMessage: 'Hi team, I would like to get a project scope and cost estimate for our business.',
    aiText: 'COST ESTIMATOR • GET ROI • ',
    aiPrompt: 'How much does custom software, ERP, or AI model development cost?'
  },
  {
    whatsappText: 'TALK TO EXPERTS • HIRE LEADS • ',
    whatsappMessage: 'Hello! I would like to speak directly with Piyush, Pardeep, or Himanshu for technical consulting.',
    aiText: 'RESEARCH PAPERS • AI MODELS • ',
    aiPrompt: 'Tell me about your research paper reproduction and Mendeley documentation services.'
  }
];

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickActions?: { label: string; action: string }[];
  isLeadCapture?: boolean;
}

export function FloatingActionStack({ onNavigate }: FloatingActionStackProps) {
  // Suggestion rotation state: 1.5s visible, 2.0s gap hidden
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const [isBubbleHovered, setIsBubbleHovered] = useState(false);

  // WhatsApp Drawer State
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppIntent, setWhatsAppIntent] = useState('Need a project quotation');
  const [whatsAppCustomNote, setWhatsAppCustomNote] = useState('');

  // AI Assistant Chat State
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', contact: '' });
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I am your NeuralNexus AI Assistant. I can answer questions about our 15 software & AI services, team members, pricing models, or help you book a consultation.",
      time: 'Just now',
      quickActions: [
        { label: 'Explore 15 Services', action: 'services' },
        { label: 'WhatsApp Automation Demo', action: 'whatsapp' },
        { label: 'Meet the 5 Experts', action: 'team' }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const phone = '918299032271';

  // Exact cadence requested: Visible for 1.5s -> 2.0s gap hidden -> Next suggestion visible for 1.5s
  useEffect(() => {
    if (isWhatsAppOpen || isAiChatOpen) {
      setIsBubbleVisible(false);
      return;
    }

    // Keep bubble visible and do not hide while user is hovering to click
    if (isBubbleHovered) {
      return;
    }

    let timer: NodeJS.Timeout;

    if (isBubbleVisible) {
      // Visible for 1.5 seconds (1500ms)
      timer = setTimeout(() => {
        setIsBubbleVisible(false);
      }, 1500);
    } else {
      // 2.0 seconds gap (2000ms) where user doesn't see suggestion
      timer = setTimeout(() => {
        setCurrentSuggestionIndex((prev) => (prev + 1) % SUGGESTION_PAIRS.length);
        setIsBubbleVisible(true);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isBubbleVisible, isBubbleHovered, isWhatsAppOpen, isAiChatOpen]);

  useEffect(() => {
    if (isAiChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isAiChatOpen]);

  const currentPair = SUGGESTION_PAIRS[currentSuggestionIndex];

  // WhatsApp handlers
  const handleLaunchWhatsApp = (prefilledText?: string) => {
    const textToUse = prefilledText || `Hello NeuralNexus Solutions! I would like to discuss: ${whatsAppIntent}.${whatsAppCustomNote ? ` Note: ${whatsAppCustomNote}` : ''}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(textToUse)}`, '_blank');
    setIsWhatsAppOpen(false);
  };

  const handleWhatsAppBubbleClick = () => {
    handleLaunchWhatsApp(currentPair.whatsappMessage);
  };

  // AI Assistant Chatbot replies
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

    if (q.includes('research') || q.includes('paper') || q.includes('mendeley') || q.includes('thesis') || q.includes('arxiv')) {
      return {
        text: "Our Research Services include academic paper reproduction in PyTorch/CUDA and publication-grade Mendeley documentation adhering strictly to IEEE/ACM guidelines. Piyush Pandey directs this division.",
        quickActions: [
          { label: 'Research Documentation', action: 'service:research-documentation' },
          { label: 'Technical Implementation', action: 'service:research-technical-implementation' }
        ]
      };
    }

    if (q.includes('team') || q.includes('expert') || q.includes('piyush') || q.includes('himanshu') || q.includes('pardeep')) {
      return {
        text: "NeuralNexus Solutions is powered by 5 verified senior experts: Piyush Pandey (AI/ML & Research), Pardeep Kumar Singh (Software & Cloud), Himanshu Saini (Full-Stack & WhatsApp Automation), Tannu Antil (Business Analyst & ML Enthusiast), and Pintu Singh (Video Editing & Motion Graphics).",
        quickActions: [
          { label: 'View All Team Profiles', action: 'team' },
          { label: 'Book Discovery Call', action: 'contact' }
        ]
      };
    }

    if (q.includes('price') || q.includes('cost') || q.includes('estimate') || q.includes('quote') || q.includes('budget')) {
      return {
        text: "We offer 3 clear engagement models: Fixed Project Milestones (MVPs from $2,400+), Monthly Retainer Sprints ($1,500 – $3,200/mo), and Hourly Consulting ($45/hr). You can use our interactive Project Cost Estimator for an immediate scope breakdown!",
        quickActions: [
          { label: 'Submit Quote Request', action: 'contact' }
        ]
      };
    }

    if (q.includes('contact') || q.includes('call') || q.includes('hire') || q.includes('book') || q.includes('consultation')) {
      return {
        text: "You can book a free 20-minute technical discovery call with our team right away! You can also chat directly on WhatsApp or drop your contact below for an immediate callback.",
        isLeadCapture: true,
        quickActions: [
          { label: 'Go to Contact Page', action: 'contact' },
          { label: 'Chat on WhatsApp', action: 'whatsapp-direct' }
        ]
      };
    }

    return {
      text: "Thanks for asking! We specialize in custom software, AI/ML models, WhatsApp automation, research paper implementation, SEO, and UI/UX design. Would you like to check our pricing estimator or speak with an expert directly?",
      quickActions: [
        { label: 'Book a Consultation', action: 'contact' }
      ]
    };
  };

  const handleSendAiMessage = (textToSend?: string) => {
    const query = textToSend || chatInput;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: 'Now'
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(query);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply.text,
        time: 'Now',
        quickActions: reply.quickActions,
        isLeadCapture: reply.isLeadCapture
      };
      setChatMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleAiBubbleClick = () => {
    setIsAiChatOpen(true);
    setIsWhatsAppOpen(false);
    handleSendAiMessage(currentPair.aiPrompt);
  };

  const handleActionClick = (action: string) => {
    if (action.startsWith('service:')) {
      const slug = action.split(':')[1];
      if (onNavigate) onNavigate('service', slug);
      setIsAiChatOpen(false);
    } else if (action === 'services') {
      if (onNavigate) onNavigate('services');
      setIsAiChatOpen(false);
    } else if (action === 'tools') {
      if (onNavigate) onNavigate('tools');
      setIsAiChatOpen(false);
    } else if (action === 'team') {
      if (onNavigate) onNavigate('team');
      setIsAiChatOpen(false);
    } else if (action === 'contact') {
      if (onNavigate) onNavigate('contact');
      setIsAiChatOpen(false);
    } else if (action === 'cases') {
      if (onNavigate) onNavigate('cases');
      setIsAiChatOpen(false);
    } else if (action === 'whatsapp' || action === 'whatsapp-direct') {
      handleLaunchWhatsApp('Hello NeuralNexus Solutions, I would like to schedule a consultation.');
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.contact) return;
    setLeadCaptured(true);
    setChatMessages((prev) => [
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
      {/* Vertically Stacked Floating Action Buttons (Fixed Bottom-Right) */}
      <div className="fixed bottom-10 right-10 z-40 flex flex-col items-center gap-12 select-none">
        
        {/* TOP ITEM: WhatsApp Button & Suggestion Bubble */}
        <div
          className="relative group flex items-center justify-center w-14 h-14"
          onMouseEnter={() => setIsBubbleHovered(true)}
          onMouseLeave={() => setIsBubbleHovered(false)}
        >
          {/* Spinning Curved Text SVG */}
          {!isWhatsAppOpen && (
            <div
              onClick={handleWhatsAppBubbleClick}
              className={`absolute -inset-8 pointer-events-none transition-all duration-500 ease-out cursor-pointer ${
                isBubbleVisible
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-75 pointer-events-none'
              }`}
              title="Click to chat this topic on WhatsApp"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible animate-[spin_12s_linear_infinite]">
                <path id="whatsapp-curve" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                <text className="text-[9px] font-semibold uppercase tracking-[0.2em] fill-slate-400 group-hover:fill-slate-600 transition-colors">
                  <textPath href="#whatsapp-curve" startOffset="0%">
                    {currentPair.whatsappText}
                  </textPath>
                </text>
              </svg>
            </div>
          )}

          {/* Green Circular WhatsApp Button */}
          <button
            onClick={() => {
              setIsWhatsAppOpen(!isWhatsAppOpen);
              if (isAiChatOpen) setIsAiChatOpen(false);
            }}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-200 shrink-0 cursor-pointer relative z-10"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 fill-white stroke-none" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white" />
            </span>
          </button>
        </div>

        {/* BOTTOM ITEM: AI Assistant / Support Headset Button & Suggestion Bubble */}
        <div
          className="relative group flex items-center justify-center w-14 h-14"
          onMouseEnter={() => setIsBubbleHovered(true)}
          onMouseLeave={() => setIsBubbleHovered(false)}
        >
          {/* Spinning Curved Text SVG */}
          {!isAiChatOpen && (
            <div
              onClick={handleAiBubbleClick}
              className={`absolute -inset-8 pointer-events-none transition-all duration-500 ease-out cursor-pointer ${
                isBubbleVisible
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-75 pointer-events-none'
              }`}
              title="Click to ask NeuralNexus AI Assistant"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible animate-[spin_12s_linear_infinite]">
                <path id="ai-curve" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                <text className="text-[9px] font-semibold uppercase tracking-[0.2em] fill-slate-400 group-hover:fill-slate-600 transition-colors">
                  <textPath href="#ai-curve" startOffset="0%">
                    {currentPair.aiText}
                  </textPath>
                </text>
              </svg>
            </div>
          )}

          {/* Bright Blue Circular AI Assistant Button with Headset/Support Icon */}
          <button
            onClick={() => {
              setIsAiChatOpen(!isAiChatOpen);
              if (isWhatsAppOpen) setIsWhatsAppOpen(false);
            }}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#007AFF] hover:bg-[#0066d6] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-200 shrink-0 cursor-pointer relative z-10"
            aria-label="Open AI Assistant"
          >
            {/* Crisp Headphone / Headset Support Icon matching screenshot */}
            <Headphones className="w-7 h-7 stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
          </button>
        </div>
      </div>

      {/* WhatsApp Popover Drawer */}
      {isWhatsAppOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[90vw] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-150">
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              </div>
              <div>
                <div className="font-bold text-sm">NeuralNexus Quick Chat</div>
                <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full inline-block animate-pulse" />
                  <span>Typically replies in &lt; 5 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsWhatsAppOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-[#EFEAE2]/30">
            <div className="text-xs font-semibold text-slate-700">What would you like to discuss?</div>
            <div className="space-y-1.5">
              {[
                'Need a project quotation',
                'WhatsApp Automation & Bot Demo',
                'Custom ERP / Software Architecture',
                'AI / Machine Learning Feasibility',
                'Research Paper Implementation'
              ].map((intent) => (
                <button
                  key={intent}
                  onClick={() => setWhatsAppIntent(intent)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors border cursor-pointer ${
                    whatsAppIntent === intent
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {intent}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-[11px] text-slate-500 mb-1">Optional context / requirements:</label>
              <textarea
                rows={2}
                value={whatsAppCustomNote}
                onChange={(e) => setWhatsAppCustomNote(e.target.value)}
                placeholder="Brief project details, timeline, or links..."
                className="w-full p-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-800 placeholder:text-slate-400 resize-none"
              />
            </div>

            <button
              onClick={() => handleLaunchWhatsApp()}
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start WhatsApp Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* AI Assistant Chat Window */}
      {isAiChatOpen && (
        <div className="fixed bottom-24 right-6 sm:right-10 z-50 w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#0B1F3A] text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#007AFF] text-white flex items-center justify-center shadow-xs">
                <Headphones className="w-5 h-5" />
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
              onClick={() => setIsAiChatOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/70 text-xs">
            {chatMessages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 shadow-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#007AFF] text-white rounded-br-xs font-normal'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>

                  {/* Quick Action Chips */}
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
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#007AFF]"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Email or WhatsApp number *"
                        value={leadForm.contact}
                        onChange={(e) => setLeadForm({ ...leadForm, contact: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#007AFF]"
                      />
                      <button
                        type="submit"
                        className="w-full py-1.5 bg-[#007AFF] hover:bg-[#0066d6] text-white font-semibold text-xs rounded transition-colors cursor-pointer"
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
                <span className="w-2 h-2 bg-[#007AFF] rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-[#007AFF] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 bg-[#007AFF] rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompt suggestions */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 overflow-x-auto flex gap-1.5 no-scrollbar">
            {[
              'What services do you provide?',
              'How much does custom software/ERP cost?',
              'How does WhatsApp Automation work?',
              'Who is on the expert team?',
              'Book free consultation'
            ].map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendAiMessage(prompt)}
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
              handleSendAiMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about AI, ERP, WhatsApp, pricing..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#007AFF] text-slate-900 placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!chatInput.trim()}
              className="p-2 bg-[#007AFF] hover:bg-[#0066d6] text-white rounded-xl transition-colors disabled:opacity-40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
