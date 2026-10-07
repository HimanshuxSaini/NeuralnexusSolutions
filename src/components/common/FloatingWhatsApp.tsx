import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowUpRight } from 'lucide-react';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState('Need a project quotation');
  const [customNote, setCustomNote] = useState('');

  const phone = '918299032271'; // Studio WhatsApp line

  const intents = [
    'Need a project quotation',
    'WhatsApp Automation & Bot Demo',
    'Custom ERP / Software Architecture',
    'AI / Machine Learning Feasibility',
    'Research Paper Implementation'
  ];

  const handleLaunchWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello NeuralNexus Solutions! I would like to discuss: ${selectedIntent}.${customNote ? ` Note: ${customNote}` : ''}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center justify-center cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
        </button>
      </div>

      {/* Popover Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[340px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-150">
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
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-[#EFEAE2]/30">
            <div className="text-xs font-semibold text-slate-700">What would you like to discuss?</div>
            <div className="space-y-1.5">
              {intents.map((intent) => (
                <button
                  key={intent}
                  onClick={() => setSelectedIntent(intent)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors border cursor-pointer ${
                    selectedIntent === intent
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
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Brief project details, timeline, or links..."
                className="w-full p-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-800 placeholder:text-slate-400 resize-none"
              />
            </div>

            <button
              onClick={handleLaunchWhatsApp}
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start WhatsApp Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-[10px] text-slate-400 text-center">
              Powered by official WhatsApp Business Cloud API
            </div>
          </div>
        </div>
      )}
    </>
  );
}
