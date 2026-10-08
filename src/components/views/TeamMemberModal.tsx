import React from 'react';
import { TeamMember } from '../../data/siteData';
import { X, Linkedin, Github, Mail, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
  onBookCallWithMember: (memberName: string) => void;
}

export function TeamMemberModal({
  member,
  onClose,
  onBookCallWithMember
}: TeamMemberModalProps) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#0B1F3A] text-white p-6 flex items-start justify-between relative">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-800 border-2 border-[#0FA3B1] shrink-0">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-[11px] text-[#0FA3B1] font-semibold uppercase tracking-wider">
                Expert Profile
              </div>
              <h3 className="text-2xl font-bold font-['Sora'] text-white">
                {member.name}
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                {member.role}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
          {/* Bio */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-1.5">
              Biography & Focus Area
            </h4>
            <p className="leading-relaxed text-slate-600">
              {member.bio}
            </p>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">
              Verified Technical Stack & Skills
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {member.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200/60 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>




        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Direct senior consultation</span>
          <button
            onClick={() => {
              onClose();
              onBookCallWithMember(member.name);
            }}
            className="py-2 px-4 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Consult with {member.name.split(' ')[0]}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
