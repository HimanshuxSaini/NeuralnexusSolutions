import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Zap, BarChart3, Cloud, Sparkles } from 'lucide-react';

function AnimatedNumber({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, suffix?: string, prefix?: string, decimals?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(easeProgress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={nodeRef}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export function HeroSection({ onStartProject, onExploreWork }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Luminous soft cyan ambient gradient glow in the background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#00D2D3]/12 via-[#0FA3B1]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: HERO COPY & CTAS & STATS (MATCHING IMAGE 2)        */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left z-10">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-extrabold text-[#0B1F3A] tracking-tight leading-[1.08] font-['Sora']">
              Intelligence that{' '}
              <span className="text-[#0FA3B1] bg-gradient-to-r from-[#00A896] via-[#0FA3B1] to-[#00B4D8] bg-clip-text text-transparent">
                connects.
              </span>
              <br />
              Solutions that{' '}
              <span className="text-[#0FA3B1] bg-gradient-to-r from-[#00A896] via-[#0FA3B1] to-[#00B4D8] bg-clip-text text-transparent">
                scale.
              </span>
            </h1>

            {/* Subheadline matching Image 2 */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              We build AI-powered software, automation systems and digital solutions that turn complex problems into real-world impact.
            </p>

            {/* Action Buttons matching Image 2 */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Build With Us (Solid Dark Navy Button) */}
              <button
                onClick={onStartProject}
                className="py-3.5 px-7 bg-[#0B1F3A] hover:bg-[#061224] text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <span>Build With Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Explore Solutions (White with Teal Border Button) */}
              <button
                onClick={onExploreWork}
                className="py-3.5 px-7 bg-white hover:bg-[#EAF6F8] text-[#00897B] hover:text-[#0D8B97] font-semibold text-sm sm:text-base rounded-xl border-2 border-[#0FA3B1] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Key Performance Stats Row matching Image 2 */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-7 xl:gap-8 text-left">
              {/* Stat 1: 50+ */}
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-['Sora'] leading-tight">
                  <AnimatedNumber end={50} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  Projects Delivered
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-slate-200" />

              {/* Stat 2: 20+ */}
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-['Sora'] leading-tight">
                  <AnimatedNumber end={20} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  Happy Clients
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-slate-200" />

              {/* Stat 3: 4+ */}
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-['Sora'] leading-tight">
                  <AnimatedNumber end={4} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  Industries
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-slate-200" />

              {/* Stat 4: 99.9% */}
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-['Sora'] leading-tight">
                  <AnimatedNumber end={99.9} decimals={1} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  Uptime & Reliability
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: 3D HERO GRAPHIC & FLOATING CARDS (IMAGE 2)       */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]">
            
            {/* Top-Right Architectural Typography Watermark (Matching Image 2) */}
            <div className="absolute top-0 right-2 sm:right-6 text-right select-none pointer-events-none z-0">
              <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-slate-300 leading-relaxed font-mono uppercase">
                PEOPLE<br />
                TECHNOLOGY<br />
                IDEAS<br />
                A BRIGHTER<br />
                TOMORROW
              </div>
            </div>

            {/* Central 3D Metallic Illuminated "N" Sculpture with Orbiting Nodes */}
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Backlight Aura Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/50 via-teal-100/40 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Video Project 8 */}
              <video
                src="/Video%20Project%208.mp4"
                className="w-full h-full object-cover relative z-10 drop-shadow-2xl rounded-full shadow-[0_0_80px_rgba(15,163,177,0.3)] border-2 border-[#0FA3B1]/20"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* ============================================================== */}
            {/* 4 FLOATING GLASSMORPHIC FEATURE CARDS (MATCHING IMAGE 2)        */}
            {/* ============================================================== */}

            {/* Card 1: AI Solutions (Top-Left of 3D N) */}
            <div className="absolute top-2 sm:top-4 left-0 sm:left-4 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-1 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <Cpu className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5 leading-tight">
                  <span>AI Solutions</span>
                  <span className="text-[11px] text-slate-400">→</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  From idea to impact
                </div>
              </div>
            </div>

            {/* Card 2: Automation (Bottom-Left of 3D N) */}
            <div className="absolute bottom-20 sm:bottom-24 -left-2 sm:left-2 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-1 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <Zap className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Automation
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  Work Smarter
                </div>
              </div>
            </div>

            {/* Card 3: 99.9% Reliable & Scalable (Top-Right of 3D N) */}
            <div className="absolute top-4 sm:top-6 right-2 sm:right-6 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-1 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <BarChart3 className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  99.9%
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  Reliable & Scalable
                </div>
              </div>
            </div>

            {/* Card 4: Cloud & Data (Bottom-Right of 3D N) */}
            <div className="absolute bottom-24 sm:bottom-28 right-0 sm:right-4 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-1 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <Cloud className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Cloud & Data
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  Secure & Flexible
                </div>
              </div>
            </div>

            {/* Step Progression Timeline Slider (Bottom Right Pill matching Image 2) */}
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-6 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md rounded-2xl px-4 py-2.5 min-w-[210px]">
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 mb-2">
                <span>Ideas</span>
                <span className="text-slate-400">→</span>
                <span>Intelligence</span>
                <span className="text-slate-400">→</span>
                <span className="text-[#0FA3B1]">Impact</span>
              </div>
              
              {/* Progress Track */}
              <div className="relative w-full h-1 bg-slate-200 rounded-full flex items-center justify-between">
                <div className="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-cyan-400 to-[#0FA3B1] rounded-full" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#0FA3B1] border-2 border-white shadow-xs z-10" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#0FA3B1] border-2 border-white shadow-xs z-10" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white shadow-xs z-10" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
