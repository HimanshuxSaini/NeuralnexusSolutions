import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Zap, BarChart3, Cloud, TrendingUp, Code, Database, Layout } from 'lucide-react';

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
    <section className="relative overflow-hidden bg-white text-slate-900 pt-4 sm:pt-6 pb-6 sm:pb-8 lg:pt-8 lg:pb-12 border-b border-slate-100">
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
              <span className="text-[#0FA3B1]">
                connects.
              </span>
              <br />
              Solutions that{' '}
              <span className="text-[#0FA3B1]">
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
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-4 sm:gap-6 lg:gap-7 xl:gap-8 text-left">
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
          <div className="lg:col-span-6 xl:col-span-6 relative hidden sm:flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px]">
            

            {/* Central 3D Metallic Illuminated "N" Sculpture with Orbiting Nodes */}
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Backlight Aura Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/50 via-teal-100/40 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Video Project 8 */}
              <div className="relative w-full h-full flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_80px_rgba(15,163,177,0.2)]">
                <video
                  src="/Video%20Project%208.mp4"
                  className="w-full h-full object-cover relative z-10 rounded-full scale-[1.02]"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                {/* Edge Blending Overlay to mix boundaries with bg */}
                <div className="absolute inset-0 z-20 pointer-events-none rounded-full bg-[radial-gradient(circle_at_center,transparent_50%,#F8FAFC_85%,#F8FAFC_100%)] shadow-[inset_0_0_40px_#F8FAFC]" />
              </div>
            </div>

            {/* ============================================================== */}
            {/* 6 FLOATING GLASSMORPHIC FEATURE CARDS (MATCHING IMAGE 2 + MORE) */}
            {/* ============================================================== */}

            {/* Card 5: ERP Systems (Middle-Left) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-[calc(50%+4px)] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <Database className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  ERP Systems
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  Streamline ops
                </div>
              </div>
            </div>

            {/* Card 6: UI/UX Design (Middle-Right) */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-[calc(50%+4px)] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <Layout className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  UI/UX Design
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  Engaging experiences
                </div>
              </div>
            </div>

            {/* Card 1: AI Solutions (Top-Left of 3D N) */}
            <div className="absolute top-2 sm:top-4 left-0 sm:left-4 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-1 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <Cpu className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5 leading-tight">
                  <span>AI & Automation</span>
                  <span className="text-[11px] text-slate-400">→</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  Smarter workflows
                </div>
              </div>
            </div>

            {/* Card 2: Web Dev (Bottom-Left of 3D N) */}
            <div className="absolute bottom-20 sm:bottom-24 -left-2 sm:left-2 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-1 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <Code className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Web Development
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  Scalable platforms
                </div>
              </div>
            </div>

            {/* Card 3: Data Analytics (Top-Right of 3D N) */}
            <div className="absolute top-4 sm:top-6 right-2 sm:right-6 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-1 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <BarChart3 className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Data Analytics
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  Actionable insights
                </div>
              </div>
            </div>

            {/* Card 4: Growth & SEO (Bottom-Right of 3D N) */}
            <div className="absolute bottom-24 sm:bottom-28 right-0 sm:right-4 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/50 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 hover:-translate-y-1 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100/80 flex items-center justify-center text-[#0FA3B1] shrink-0">
                <TrendingUp className="w-5 h-5 text-[#0FA3B1]" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Growth & SEO
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                  Drive real impact
                </div>
              </div>
            </div>

            {/* Step Progression Timeline Slider (Bottom Right Pill matching Image 2) */}
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-6 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md rounded-2xl px-4 py-2.5 min-w-[210px]">
              <style>{`
                @keyframes fillProgress {
                  0% { width: 0%; }
                  100% { width: 100%; }
                }
                @keyframes dotColor {
                  0%, 49% { background-color: #CBD5E1; }
                  50%, 100% { background-color: #0FA3B1; }
                }
                @keyframes dotColorEnd {
                  0%, 95% { background-color: #CBD5E1; }
                  96%, 100% { background-color: #0FA3B1; }
                }
                @keyframes textColorMid {
                  0%, 49% { color: #475569; }
                  50%, 100% { color: #0FA3B1; }
                }
                @keyframes textColorEnd {
                  0%, 95% { color: #475569; }
                  96%, 100% { color: #0FA3B1; }
                }
              `}</style>
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 mb-2">
                <span className="text-[#0FA3B1]">Ideas</span>
                <span className="text-slate-400">→</span>
                <span style={{ animation: 'textColorMid 5s infinite' }}>Intelligence</span>
                <span className="text-slate-400">→</span>
                <span style={{ animation: 'textColorEnd 5s infinite' }}>Impact</span>
              </div>
              
              {/* Progress Track */}
              <div className="relative w-full h-1 bg-slate-200 rounded-full flex items-center justify-between">
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 to-[#0FA3B1] rounded-full" 
                  style={{ animation: 'fillProgress 5s linear infinite' }}
                />
                <span className="w-2.5 h-2.5 rounded-full bg-[#0FA3B1] border-2 border-white shadow-xs z-10" />
                <span className="w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs z-10 bg-slate-300" style={{ animation: 'dotColor 5s infinite' }} />
                <span className="w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs z-10 bg-slate-300" style={{ animation: 'dotColorEnd 5s infinite' }} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
