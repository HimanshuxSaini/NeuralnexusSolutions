import React, { useState } from 'react';

interface TechItem {
  name: string;
  category: string;
  iconSvg: React.ReactNode;
}

export function TechStackStrip() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Line 1: AI, ML, Data & Cloud Backend Stack (Right to Left)
  const line1Technologies: TechItem[] = [
    {
      name: 'Python',
      category: 'AI & Backend',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-5 h-5">
          <path fill="#3776AB" d="M63.7 4c-32.6 0-30.7 14.1-30.7 14.1l.1 14.6h31.2v4.4H20.1S4 35.3 4 67.9c0 32.6 14.2 31.5 14.2 31.5h8.5v-12s-.5-14.2 13.9-14.2h31.1v-4.4H40.6s-13.6-.5-13.6-13.6c0-13.1 12-12.7 12-12.7h45.8s12.5.3 12.5-12.2c0-12.4-11.8-12.3-11.8-12.3H63.7zm-9 9.3c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7c0-2.6 2.1-4.7 4.7-4.7z"/>
          <path fill="#FFD43B" d="M64.3 124c32.6 0 30.7-14.1 30.7-14.1l-.1-14.6H63.7v-4.4h44.2s16.1 1.8 16.1-30.8c0-32.6-14.2-31.5-14.2-31.5h-8.5v12s.5 14.2-13.9 14.2H76.3v4.4h31.1s13.6.5 13.6 13.6c0 13.1-12 12.7-12 12.7H63.2s-12.5-.3-12.5 12.2c0 12.4 11.8 12.3 11.8 12.3h21.8zm9-9.3c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.6-2.1 4.7-4.7 4.7z"/>
        </svg>
      )
    },
    {
      name: 'PyTorch',
      category: 'Deep Learning',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#EE4C2C">
          <path d="M12.73 1.002a11.02 11.02 0 0 0-7.39 3.018l2.673 2.673a7.243 7.243 0 0 1 4.717-1.921c4.015 0 7.272 3.257 7.272 7.272 0 3.738-2.827 6.818-6.442 7.214l.024.018v3.774c5.7-.428 10.187-5.187 10.187-11.006 0-6.096-4.946-11.042-11.041-11.042zm-1.46 3.654a1.82 1.82 0 1 0 0 3.64 1.82 1.82 0 0 0 0-3.64zm-5.71 5.766L2.887 13.1a11.02 11.02 0 0 0 7.39 9.898v-3.77a7.244 7.244 0 0 1-4.717-8.806z"/>
        </svg>
      )
    },
    {
      name: 'TensorFlow',
      category: 'Model Serving',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF6F00">
          <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.545l-6.153 3.593zm21.416 0L12.46 0v24l4.095-2.378V7.545l6.153 3.593z"/>
        </svg>
      )
    },
    {
      name: 'Hugging Face',
      category: 'Open Weights & LLMs',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFD21E">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 2.21.72 4.25 1.94 5.92-.09.34-.14.7-.14 1.08 0 2.21 1.79 4 4 4 .93 0 1.79-.32 2.47-.86C10.96 22.14 11.47 22 12 22s1.04.14 1.73.14c.68.54 1.54.86 2.47.86 2.21 0 4-1.79 4-4 0-.38-.05-.74-.14-1.08C21.28 16.25 22 14.21 22 12c0-5.523-4.477-10-10-10zm-3.5 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-7.46 7.24a4.996 4.996 0 0 0 7.92 0 .5.5 0 0 1 .78.62 5.996 5.996 0 0 1-9.48 0 .5.5 0 0 1 .78-.62z"/>
        </svg>
      )
    },
    {
      name: 'FastAPI',
      category: 'Async Python Backend',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#059669">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-.714 4.5h3.428l-4.5 7.5h4.5l-6.857 7.5 1.714-6h-3.428l5.143-9z"/>
        </svg>
      )
    },
    {
      name: 'Docker',
      category: 'Container Infrastructure',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2496ED">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.93 0h2.12a.185.185 0 00.184-.186V6.29a.185.185 0 00-.184-.185H5.17a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm15.753 2.923c-.4-.268-1.503-.404-2.438-.363-.122-.962-.77-1.745-1.636-2.193l-.403-.207-.3.336c-.463.518-.755 1.18-.847 1.882-.544-.067-1.127-.08-1.722-.036H1.547a.78.78 0 00-.78.78 6.945 6.945 0 002.502 5.438c2.476 1.956 5.926 2.057 8.356 2.057 5.797 0 9.873-2.616 11.233-7.067.14-.46.064-.528-.002-.627z"/>
        </svg>
      )
    },
    {
      name: 'AWS Cloud',
      category: 'Cloud Architecture',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF9900">
          <path d="M8.28 11.45l.95 2.19c.14.33.47.53.82.5h3.9c.36.03.69-.17.83-.5l.95-2.19c.19-.44-.13-.95-.61-.95h-6.23c-.48 0-.8.51-.61.95zm-1.89-2.95l.48 1.11h10.26l.48-1.11c.19-.44-.13-.95-.61-.95H6.99c-.48 0-.8.51-.6.95zm5.61-4.5c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"/>
        </svg>
      )
    },
    {
      name: 'PostgreSQL',
      category: 'Relational Database',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#336791">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
    {
      name: 'Redis',
      category: 'In-Memory Cache & Queue',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#DC382D">
          <path d="M22.5 15.5l-10 5.5-10-5.5 2.5-1.5 7.5 4 7.5-4 2.5 1.5zm0-4.5l-10 5.5-10-5.5 2.5-1.5 7.5 4 7.5-4 2.5 1.5zm-10-8.5l10 5.5-10 5.5-10-5.5 10-5.5z"/>
        </svg>
      )
    }
  ];

  // Line 2: Web, Mobile, Modern Frontend & Automation Stack (Left to Right)
  const line2Technologies: TechItem[] = [
    {
      name: 'React',
      category: 'Frontend Library',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0FA3B1" strokeWidth="1.6">
          <ellipse cx="12" cy="12" rx="10" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/>
          <circle cx="12" cy="12" r="1.8" fill="#0FA3B1"/>
        </svg>
      )
    },
    {
      name: 'Next.js',
      category: 'Full-Stack Web',
      iconSvg: (
        <svg viewBox="0 0 180 180" className="w-5 h-5" fill="none">
          <mask id="next-mask-2" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#next-mask-2)">
            <circle cx="90" cy="90" r="90" fill="#0B1F3A" />
            <path d="M149.508 157.089L69.8516 54H54V125.97H66.2136V69.7125L139.999 164.845C143.333 162.463 146.509 159.873 149.508 157.089Z" fill="white" />
            <rect x="115" y="54" width="12" height="72" fill="white" />
          </g>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      category: 'Type Safety',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#3178C6">
          <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.74 13.845H8.76v7.35H6.285v-7.35H2.805v-2.19h9.435v2.19zm8.955 2.19c0 1.23-.42 2.235-1.26 3.015-.84.78-1.95 1.17-3.33 1.17-1.35 0-2.49-.33-3.42-.99v-2.43c.96.69 2.055 1.035 3.285 1.035.72 0 1.29-.165 1.71-.495.42-.33.63-.78.63-1.35 0-.48-.15-.885-.45-1.215-.3-.33-.87-.66-1.71-.99-1.35-.54-2.31-1.11-2.88-1.71-.57-.6-.855-1.38-.855-2.34 0-1.17.42-2.115 1.26-2.835.84-.72 1.89-1.08 3.15-1.08 1.14 0 2.19.27 3.15.81v2.31c-.87-.54-1.83-.81-2.88-.81-.66 0-1.17.15-1.53.45-.36.3-.54.72-.54 1.26 0 .42.15.78.45 1.08.3.3.84.615 1.62.945 1.41.6 2.4 1.215 2.97 1.845.57.63.855 1.41.855 2.34z"/>
        </svg>
      )
    },
    {
      name: 'Flutter',
      category: 'Cross-Platform App',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#02569B">
          <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm.006 11.088L7.697 17.712 14.32 24h7.38l-6.623-6.288 6.623-6.624h-7.38z"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      category: 'Microservices API',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#5FA04E">
          <path d="M12 0l10.392 6v12L12 24 1.608 18V6L12 0zm0 2.309L3.608 7.155v9.69L12 21.691l8.392-4.846V7.155L12 2.309z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp Cloud API',
      category: 'Meta Business Engine',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#25D366">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.17 8.17 0 0 1-5.82 2.42c-1.42 0-2.81-.37-4.04-1.08l-.29-.17-3.11.82.83-3.03-.19-.3A8.17 8.17 0 0 1 3.8 11.91c0-4.55 3.7-8.24 8.24-8.24zm4.51 11.66c-.25.7-.99 1.28-1.74 1.4-.49.08-1.12.15-3.3-1.03-2.62-1.41-4.32-4.05-4.45-4.22-.13-.18-1.06-1.41-1.06-2.69 0-1.28.67-1.91.91-2.17.24-.26.53-.33.71-.33.18 0 .36 0 .51.01.17.01.39-.06.6.46.23.55.77 1.88.84 2.02.07.14.11.31.02.49-.09.18-.14.29-.28.45-.14.16-.3.35-.42.47-.14.14-.29.29-.12.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.65-.15.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.7-.18 1.4z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      category: 'Design Systems',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#06B6D4">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      )
    },
    {
      name: 'LangChain & RAG',
      category: 'Vector Embeddings',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0FA3B1">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: 'Figma',
      category: 'UI/UX Design Tokens',
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
          <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
          <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
          <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
          <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
        </svg>
      )
    }
  ];

  // Duplicate for seamless 0-50% infinite loops
  const line1Duplicated = [...line1Technologies, ...line1Technologies];
  const line2Duplicated = [...line2Technologies, ...line2Technologies];

  return (
    <div className="bg-white border-y border-slate-200/80 py-8 relative overflow-hidden select-none">


      {/* Line 1: Right to Left (<--) */}
      <div className="marquee-track-container py-1.5">
        <div className="marquee-track flex items-center gap-3.5">
          {line1Duplicated.map((tech, index) => {
            const itemKey = `${tech.name}-row1-${index}`;
            const isHovered = hoveredTech === itemKey;

            return (
              <div
                key={itemKey}
                onMouseEnter={() => setHoveredTech(itemKey)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border transition-all duration-150 cursor-pointer shrink-0 ${
                  isHovered
                    ? 'bg-[#EAF6F8] border-[#0FA3B1] shadow-md -translate-y-0.5'
                    : 'bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-[#0FA3B1]/60'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center p-1 shadow-2xs border border-slate-100 shrink-0">
                  {tech.iconSvg}
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-900 leading-none">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium mt-1 leading-none">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Line 2: Left to Right (-->) */}
      <div className="marquee-track-container py-1.5 mt-1.5">
        <div className="marquee-track-reverse flex items-center gap-3.5">
          {line2Duplicated.map((tech, index) => {
            const itemKey = `${tech.name}-row2-${index}`;
            const isHovered = hoveredTech === itemKey;

            return (
              <div
                key={itemKey}
                onMouseEnter={() => setHoveredTech(itemKey)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border transition-all duration-150 cursor-pointer shrink-0 ${
                  isHovered
                    ? 'bg-[#EAF6F8] border-[#0FA3B1] shadow-md -translate-y-0.5'
                    : 'bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-[#0FA3B1]/60'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center p-1 shadow-2xs border border-slate-100 shrink-0">
                  {tech.iconSvg}
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-900 leading-none">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium mt-1 leading-none">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
