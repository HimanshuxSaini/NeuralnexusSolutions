import React, { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

export function CookieConsent({ onOpenPrivacy }: { onOpenPrivacy: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('neural_cookie_consent');
    if (!accepted) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('neural_cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('neural_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm sm:max-w-md bg-white border border-slate-200 rounded-2xl p-4 shadow-xl text-xs text-slate-600 animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#EAF6F8] text-[#0FA3B1] flex items-center justify-center shrink-0 mt-0.5">
          <Shield className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-slate-900 text-sm">Privacy & Analytical Cookies</div>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
            We use privacy-friendly analytics to measure page load performance, tool conversions, and improve our services.
          </p>

          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={handleAccept}
              className="py-1.5 px-3 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition-colors cursor-pointer"
            >
              Essential Only
            </button>
            <button
              onClick={onOpenPrivacy}
              className="text-[11px] text-slate-500 hover:text-[#0FA3B1] underline ml-auto"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-slate-600 p-0.5 rounded-md"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
