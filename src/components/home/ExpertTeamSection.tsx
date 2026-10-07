import React, { useState, useEffect, useRef } from 'react';
import { TEAM_MEMBERS, TeamMember } from '../../data/siteData';
import { ArrowRight, Linkedin, Github, Mail, ChevronLeft, ChevronRight, Pause, Play, RotateCw, LayoutGrid, Orbit, Award } from 'lucide-react';

interface ExpertTeamSectionProps {
  onSelectMember: (member: TeamMember) => void;
  onViewAllTeam: () => void;
}

export function ExpertTeamSection({ onSelectMember, onViewAllTeam }: ExpertTeamSectionProps) {
  // View mode: 'revolving' (round and round 3D stage) vs 'grid'
  const [viewMode, setViewMode] = useState<'revolving' | 'grid'>('revolving');

  // Carousel rotation angle in degrees
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartAngle, setDragStartAngle] = useState(0);

  // Screen width for responsive radius calculation
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Track window resize for responsive 3D radius
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive radii for the orbital ring
  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;
  
  // Radius on X and Z axis
  const radiusX = isMobile ? 180 : isTablet ? 290 : 390;
  const radiusZ = isMobile ? 120 : isTablet ? 180 : 230;
  const cardWidth = isMobile ? 260 : isTablet ? 290 : 310;

  // Smooth continuous round-and-round animation loop
  useEffect(() => {
    if (viewMode !== 'revolving') return;

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = time - lastTimeRef.current;
        // Rotate continuously when auto-rotating, not hovered, and not dragging
        // ~12 degrees per second -> full 360 rotation in ~30 seconds
        if (isAutoRotating && !isHovered && !isDragging) {
          setRotationAngle((prev) => (prev - (delta * 0.012)) % 360);
        }
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = null;
    };
  }, [isAutoRotating, isHovered, isDragging, viewMode]);

  const numMembers = TEAM_MEMBERS.length;
  const stepAngle = 360 / numMembers; // 72 degrees each for 5 members

  // Rotate one step to next or prev
  const handleRotateStep = (direction: 'next' | 'prev') => {
    // Snap to closest step
    const currentStep = Math.round(rotationAngle / stepAngle);
    const targetStep = direction === 'next' ? currentStep - 1 : currentStep + 1;
    setRotationAngle(targetStep * stepAngle);
  };

  // Rotate a specific member directly to the center front (where relative angle is ~0)
  const handleSelectToCenter = (index: number) => {
    // We want: (index * stepAngle + targetAngle) % 360 === 0
    // => targetAngle = -index * stepAngle
    setRotationAngle(-index * stepAngle);
  };

  // Mouse & Touch drag handlers for interactive spin
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartAngle(rotationAngle);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    setRotationAngle(dragStartAngle + deltaX * 0.45);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragStartAngle(rotationAngle);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStartX;
    setRotationAngle(dragStartAngle + deltaX * 0.45);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Calculate normalized angles and find currently front-most member
  const membersWithTransforms = TEAM_MEMBERS.map((member, index) => {
    // Raw angle in degrees for this member in the revolving circle
    let memberAngle = (index * stepAngle + rotationAngle) % 360;
    if (memberAngle < -180) memberAngle += 360;
    if (memberAngle > 180) memberAngle -= 360;

    const rad = (memberAngle * Math.PI) / 180;
    const x = Math.sin(rad) * radiusX;
    const z = Math.cos(rad) * radiusZ;

    // Scale from 0.72 (back) to 1.05 (front)
    const normalizedDepth = (z + radiusZ) / (2 * radiusZ); // 0 at far back, 1 at direct front
    const scale = 0.74 + normalizedDepth * 0.31;
    
    // Opacity: front is 1.0, back cards are 0.45 to 0.75
    const opacity = 0.45 + normalizedDepth * 0.55;

    // zIndex: higher for front cards
    const zIndex = Math.round(normalizedDepth * 100);

    // Subtle 3D tilt towards viewer
    const rotateY = -memberAngle * 0.28;

    // Distance to center in degrees
    const absAngle = Math.abs(memberAngle);
    const isFrontCard = absAngle < 36; // Within half of stepAngle

    return {
      member,
      index,
      x,
      z,
      scale,
      opacity,
      zIndex,
      rotateY,
      absAngle,
      isFrontCard
    };
  });

  // Find the currently front-focused member
  const activeFrontItem = membersWithTransforms.reduce((prev, curr) => 
    curr.absAngle < prev.absAngle ? curr : prev
  );

  return (
    <section className="py-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80 overflow-hidden relative select-none">
      {/* Background architectural glow & subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0FA3B1]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora']">
              Meet the Core Team
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-2xl">
              No account managers or junior buffers. You build and communicate directly with our five senior leads.
            </p>
          </div>

          {/* Controls: View Mode Toggle & Full Team Profile Button */}
          <div className="flex items-center flex-wrap gap-3 self-start md:self-end">

          </div>
        </div>

        {/* ============================================================== */}
        {/* VIEW MODE 1: ROUND AND ROUND REVOLVING 3D STAGE CAROUSEL       */}
        {/* ============================================================== */}
        {viewMode === 'revolving' && (
          <div className="relative pt-4 pb-12 sm:pb-8">
            

            {/* 3D Circular Revolving Stage Container */}
            <div
              className="relative h-[480px] sm:h-[510px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing perspective-1000"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setIsDragging(false);
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Orbital Ring Floor Graphic (Gives true 3D spatial depth) */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full border border-dashed border-[#0FA3B1]/25 transition-transform"
                style={{
                  width: `${radiusX * 2 + 100}px`,
                  height: `${radiusZ * 2 + 60}px`,
                  transform: 'translate(-50%, -50%) rotateX(68deg)',
                  boxShadow: '0 0 50px rgba(15, 163, 177, 0.08)'
                }}
              />

              {/* 5 Revolving Team Cards */}
              {membersWithTransforms.map((item) => {
                const { member, index, x, z, scale, opacity, zIndex, rotateY, isFrontCard } = item;

                return (
                  <div
                    key={member.id}
                    onClick={() => {
                      if (!isFrontCard) {
                        handleSelectToCenter(index);
                      }
                    }}
                    style={{
                      width: `${cardWidth}px`,
                      transform: `translate3d(${x}px, ${-z * 0.06}px, ${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      zIndex,
                      opacity,
                      transition: isDragging ? 'none' : 'transform 0.15s ease-out, opacity 0.2s ease-out',
                      transformOrigin: 'center center'
                    }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border p-4 sm:p-5 flex flex-col justify-between transition-shadow duration-300 ${
                      isFrontCard
                        ? 'border-[#0FA3B1] shadow-2xl ring-4 ring-[#0FA3B1]/10 cursor-default'
                        : 'border-slate-200/90 shadow-md hover:border-[#0FA3B1]/60 cursor-pointer hover:shadow-lg'
                    }`}
                  >
                    {/* Front-focused indicator badge */}
                    {isFrontCard && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B1F3A] text-[#0FA3B1] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#0FA3B1]/40 flex items-center gap-1 shadow-sm uppercase tracking-wider">
                        <Award className="w-2.5 h-2.5 text-[#0FA3B1]" />
                        <span>Lead 0{index + 1}</span>
                      </div>
                    )}

                    <div>
                      {/* Member Photo */}
                      <div className="relative aspect-4/3 sm:aspect-square w-full rounded-xl overflow-hidden bg-slate-100 mb-3 border border-slate-100 group">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[10px] text-white font-mono font-medium">
                          {member.experienceYears}+ yrs exp
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <h3 className="font-bold text-base text-[#0B1F3A] font-['Sora'] leading-tight">
                            {member.name}
                          </h3>
                          <div className="text-xs font-semibold text-[#0FA3B1] mt-0.5 leading-tight">
                            {member.role}
                          </div>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-500 font-medium mt-1 line-clamp-1">
                        {member.specialization}
                      </div>

                      <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Skills Tags */}
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1 text-[10px] text-slate-600 font-medium">
                        {member.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="inline-block bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="text-slate-400 px-1 self-center text-[10px]">
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectMember(member);
                        }}
                        className="text-xs font-semibold text-[#0B1F3A] hover:text-[#0FA3B1] flex items-center gap-1 cursor-pointer group"
                      >
                        <span>Detailed Bio</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>


                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick-Switch Thumbnails / Dots for each member */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {TEAM_MEMBERS.map((member, idx) => {
                const isActive = activeFrontItem.member.id === member.id;

                return (
                  <button
                    key={member.id}
                    onClick={() => handleSelectToCenter(idx)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0B1F3A] text-white border-[#0FA3B1] shadow-sm font-semibold'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full overflow-hidden shrink-0">
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <span>{member.name.split(' ')[0]}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0FA3B1]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="text-center text-[11px] text-slate-400 mt-3">
              Drag or swipe left/right to spin the stage · Hover over any lead to pause rotation
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW MODE 2: CLEAN 5-COLUMN COMPACT GRID                       */}
        {/* ============================================================== */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 animate-in fade-in duration-200">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:shadow-md hover:border-[#0FA3B1]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] text-white font-mono">
                      {member.experienceYears}+ yrs exp
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-[#0B1F3A] font-['Sora'] group-hover:text-[#0FA3B1] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#0FA3B1] mt-0.5 leading-tight line-clamp-1">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5 line-clamp-1">
                    {member.specialization}
                  </div>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1 text-[10px] text-slate-500 font-medium">
                    {member.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="inline-block bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="text-slate-400 px-1 self-center">+{member.skills.length - 3}</span>
                    )}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectMember(member)}
                    className="text-xs font-semibold text-[#0B1F3A] hover:text-[#0FA3B1] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Detailed Bio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>


                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
