import React, { useState } from 'react';
import { SectionId, LeadershipMember } from '../types';
import { SCHOOL_INFO, TIMELINE_EVENTS, LEADERSHIP_TEAM } from '../data/schoolData';
import {
  Award,
  BookOpen,
  Target,
  Heart,
  Lightbulb,
  ShieldCheck,
  Calendar,
  Mail,
  UserCheck,
  X,
  ChevronRight,
  GraduationCap,
  User,
} from 'lucide-react';

interface AboutSectionProps {
  setActiveSection: (section: SectionId) => void;
  onOpenApplyModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  setActiveSection,
  onOpenApplyModal,
}) => {
  const [selectedLeader, setSelectedLeader] = useState<LeadershipMember | null>(null);
  const [activeTimelineFilter, setActiveTimelineFilter] = useState<string>('All');

  const filters = ['All', 'Foundation', 'Growth', 'Technology', 'Excellence', 'Sustainability', 'Innovation'];

  const filteredTimeline = activeTimelineFilter === 'All'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter((e) => e.badge === activeTimelineFilter);

  return (
    <div className="space-y-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-800">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>Our Journey & Identity</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-amber-400">Ireneo Nursery & Primary School</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Founded in 2017 in Wau, Western Bahr el Ghazal State, South Sudan, Ireneo Nursery & Primary School provides quality Nursery (ECD), Primary (P1-P8), Secondary (S1-S4), and Boarding accommodation under the South Sudan Ministry of General Education and Instruction (MoGEI).
          </p>
        </div>
      </div>

      {/* Mission, Vision & Core Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">Our Mission</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            To provide an empowering, value-driven educational experience that inspires critical thinking, ethical leadership, academic mastery, and lifelong global citizenship.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">Our Vision</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            To be recognized nationally and internationally as a beacon of academic distinction, technological innovation, and holistic student development in Africa.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">Core Values</h3>
          <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
            <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Excellence in all endeavors</li>
            <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Integrity & Moral Duty</li>
            <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Innovation & Curiosity</li>
            <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Inclusivity & Respect</li>
          </ul>
        </div>
      </section>

      {/* Interactive History Timeline */}
      <section className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full">
              Milestones & Legacy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Interactive History Timeline (2017–2026)
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {filters.map((badge) => (
              <button
                key={badge}
                onClick={() => setActiveTimelineFilter(badge)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTimelineFilter === badge
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {badge}
              </button>
            ))}
          </div>
        </div>

        <div className="relative border-l-2 border-amber-200 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-10">
          {filteredTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-slate-950 font-extrabold text-[10px]">
                {item.year.slice(-2)}
              </div>

              <div className="bg-slate-50 hover:bg-amber-50/50 p-5 rounded-2xl border border-slate-200/80 transition-colors space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-md">
                      {item.year}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-base">{item.title}</h3>
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-amber-800">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Key Impact: {item.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Directorate */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            School Governance
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            School Leadership Team
          </h2>
          <p className="text-xs text-slate-600">
            Meet the visionary administrators and educational experts guiding Ireneo Kunda Complex.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-md transition-all space-y-3 p-4 text-center group"
            >
              <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-2 border-amber-400 bg-slate-100 flex items-center justify-center">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-2">
                    <User className="w-10 h-10 text-slate-400" />
                    <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase mt-1">Photo Pending</span>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 text-base">{member.name}</h3>
                <p className="text-xs font-bold text-amber-700">{member.role}</p>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-1">{member.qualifications}</p>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 italic px-2">
                "{member.bio}"
              </p>

              <button
                onClick={() => setSelectedLeader(member)}
                className="w-full py-2 bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1"
              >
                <span>Read Full Profile</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Bio Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 relative shadow-2xl animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0 bg-slate-100 flex items-center justify-center">
                {selectedLeader.imageUrl ? (
                  <img
                    src={selectedLeader.imageUrl}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-1">
                    <User className="w-8 h-8 text-slate-400" />
                    <span className="text-[8px] font-bold text-slate-400 uppercase">Photo Pending</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">{selectedLeader.name}</h3>
                <p className="text-xs font-bold text-amber-700">{selectedLeader.role}</p>
                <p className="text-xs text-slate-500 font-medium">{selectedLeader.qualifications}</p>
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700 leading-relaxed">
              <p className="font-bold text-slate-900">Biography & Background:</p>
              <p>{selectedLeader.bio}</p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <a
                href={`mailto:${selectedLeader.email}`}
                className="text-xs text-amber-700 hover:underline font-bold flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>{selectedLeader.email}</span>
              </a>
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
