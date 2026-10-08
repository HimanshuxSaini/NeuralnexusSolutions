import React, { useState } from 'react';
import { TEAM_MEMBERS, TeamMember } from '../../data/siteData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ArrowRight, Linkedin, Github, Mail, ShieldCheck } from 'lucide-react';
import { TeamMemberModal } from './TeamMemberModal';

interface TeamViewProps {
  onNavigate: (view: string, param?: string) => void;
  onBookCallWithMember: (memberName: string) => void;
}

export function TeamView({ onNavigate, onBookCallWithMember }: TeamViewProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const breadcrumbs = [
    { label: 'Expert Team' }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-8">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Hero */}
      <section className="bg-[#0B1F3A] text-white py-8 lg:py-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">
              Principal Leadership
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight mt-2">
              The 5 Experts Behind NeuralNexus Solutions
            </h1>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We do not hide behind anonymous offshore rosters. You work directly with experienced software engineers, AI architects, researchers, and growth strategists.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-[#0FA3B1]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0B1F3A] font-['Sora']">
                      {member.name}
                    </h3>
                    <div className="text-xs text-[#0FA3B1] font-semibold">
                      {member.role}
                    </div>

                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills tags */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {member.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-100 text-slate-700 font-mono px-2 py-0.5 rounded border border-slate-200/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="text-xs font-semibold text-[#0FA3B1] hover:text-[#0D8B97] flex items-center gap-1 cursor-pointer"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>


              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
        onBookCallWithMember={onBookCallWithMember}
      />
    </div>
  );
}
