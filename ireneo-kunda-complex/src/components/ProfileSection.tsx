import React, { useState } from 'react';
import { SectionId, ProfileTab } from '../types';
import {
  SCHOOL_INFO,
  ACADEMIC_PROGRAMS,
  FACILITIES_LIST,
  ACHIEVEMENTS,
  LEADERSHIP_TEAM,
} from '../data/schoolData';
import {
  GraduationCap,
  BookOpen,
  Building2,
  Trophy,
  Calculator,
  CheckCircle2,
  FileText,
  Clock,
  MapPin,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Zap,
  User,
  Mail,
} from 'lucide-react';

interface ProfileSectionProps {
  setActiveSection: (section: SectionId) => void;
  onOpenApplyModal: () => void;
  onSelectImageForLightbox: (imgUrl: string, title: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  setActiveSection,
  onOpenApplyModal,
  onSelectImageForLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('overview');

  // Fee Estimator State
  const [estGrade, setEstGrade] = useState<'nursery' | 'primary' | 'junior' | 'senior'>('senior');
  const [estRes, setEstRes] = useState<'day' | 'boarding'>('day');
  const [estTransport, setEstTransport] = useState<boolean>(false);
  const [estLunch, setEstLunch] = useState<boolean>(true);

  const calculateFees = () => {
    let baseTuition = 0;
    if (estGrade === 'nursery') baseTuition = 3500;
    if (estGrade === 'primary') baseTuition = 4800;
    if (estGrade === 'junior') baseTuition = 6500;
    if (estGrade === 'senior') baseTuition = 8500;

    let boardingFee = estRes === 'boarding' ? 4500 : 0;
    let transportFee = estTransport ? 1200 : 0;
    let lunchFee = (estRes === 'day' && estLunch) ? 900 : 0;

    const termTotal = baseTuition + boardingFee + transportFee + lunchFee;
    const annualTotal = termTotal * 3;

    return { baseTuition, boardingFee, transportFee, lunchFee, termTotal, annualTotal };
  };

  const feeCalc = calculateFees();

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
            <GraduationCap className="w-4 h-4" />
            <span>Comprehensive School Profile</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ireneo Kunda Complex Profile & Prospectus
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Explore our educational programs, campus facilities, academic rankings, and admission requirements in full detail.
          </p>
        </div>

        {/* 5 Tabs Navigation */}
        <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'overview', label: '1. Overview', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'academics', label: '2. Academics', icon: <GraduationCap className="w-4 h-4" /> },
            { id: 'facilities', label: '3. Facilities', icon: <Building2 className="w-4 h-4" /> },
            { id: 'achievements', label: '4. Achievements', icon: <Trophy className="w-4 h-4" /> },
            { id: 'admissions', label: '5. Admissions & Fees', icon: <Calculator className="w-4 h-4" /> },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ProfileTab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-800/90 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900">Institutional Overview</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ireneo Kunda Complex is a leading co-educational day and boarding school operating under full Ministry of Education license. Serving over 1,450 students from early childhood to Grade 12 senior high, the complex combines academic rigor with character building, digital technology, and athletic development.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="block text-xs text-slate-500 font-bold">Founded</span>
                  <span className="text-base font-extrabold text-amber-700">{SCHOOL_INFO.established}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="block text-xs text-slate-500 font-bold">Accreditation</span>
                  <span className="text-xs font-bold text-slate-900">ECZ & Cambridge</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="block text-xs text-slate-500 font-bold">Campus Size</span>
                  <span className="text-base font-extrabold text-amber-700">18 Acres</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="block text-xs text-slate-500 font-bold">Co-Curricular</span>
                  <span className="text-base font-extrabold text-slate-900">24+ Clubs</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="block text-xs text-slate-500 font-bold">Faculty</span>
                  <span className="text-base font-extrabold text-amber-700">85+ Educators</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="block text-xs text-slate-500 font-bold">Boarding</span>
                  <span className="text-xs font-bold text-slate-900">Male & Female Halls</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg font-extrabold text-amber-400">Quick Contact & Location</h3>
                <ul className="text-xs space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{SCHOOL_INFO.location}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{SCHOOL_INFO.officeHours}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Admissions Hotline: {SCHOOL_INFO.phonePrimary}</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={onOpenApplyModal}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow transition-colors"
              >
                Start Online Application
              </button>
            </div>
          </div>

          {/* School Leadership & Administration Team */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Executive Administration</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  School Leadership Team
                </h2>
              </div>
              <p className="text-xs text-slate-500 max-w-md">
                Meet the key educational leaders and directors steering Ireneo Nursery & Primary School in Wau, South Sudan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LEADERSHIP_TEAM.map((member) => (
                <div
                  key={member.id}
                  className="bg-slate-50/90 rounded-2xl border border-slate-200/80 p-5 space-y-4 flex flex-col justify-between hover:border-amber-300 hover:shadow-md transition-all group"
                >
                  <div className="space-y-3 text-center">
                    <div className="relative mx-auto w-28 h-28 rounded-full overflow-hidden border-2 border-amber-400 bg-slate-200 flex items-center justify-center shadow-sm">
                      {member.imageUrl ? (
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-2">
                          <User className="w-9 h-9 text-slate-400" />
                          <span className="text-[8px] font-bold text-slate-400 tracking-wider uppercase mt-1">Photo Pending</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base">{member.name}</h3>
                      <p className="text-xs font-bold text-amber-700">{member.role}</p>
                      <p className="text-[11px] font-semibold text-slate-500 mt-0.5">{member.qualifications}</p>
                    </div>

                    {/* Brief Professional Biography */}
                    <div className="pt-3 border-t border-slate-200/80 text-left">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                        Professional Biography:
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
                    <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <a href={`mailto:${member.email}`} className="hover:text-amber-700 transition-colors truncate">
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: ACADEMICS */}
      {activeTab === 'academics' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900">Academic Programs & Streams</h2>
            <p className="text-xs text-slate-600">
              Structured progressive learning from early childhood literacy to advanced senior secondary STEM streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACADEMIC_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-amber-800 bg-amber-100 px-3 py-1 rounded-md">
                      {prog.level}
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {prog.ageGroup}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{prog.description}</p>

                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-900 block">Core Subjects Offered:</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {prog.subjects.map((sub, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">HOD: {prog.headOfDepartment}</span>
                  <span className="font-bold text-amber-700">ECZ / Cambridge Syllabus</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: FACILITIES */}
      {activeTab === 'facilities' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900">Campus Facilities & Infrastructure</h2>
            <p className="text-xs text-slate-600">
              Modern learning spaces engineered to foster intellectual curiosity, physical health, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES_LIST.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="relative h-48 cursor-pointer overflow-hidden bg-slate-100"
                    onClick={() => onSelectImageForLightbox(fac.imageUrl, fac.name)}
                  >
                    <img
                      src={fac.imageUrl}
                      alt={fac.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {fac.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-extrabold text-slate-900 text-base">{fac.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{fac.description}</p>

                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                        Key Features:
                      </span>
                      <ul className="grid grid-cols-1 gap-1 text-[11px] text-slate-600">
                        {fac.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">Ireneo Kunda Campus</span>
                  <button
                    onClick={() => onSelectImageForLightbox(fac.imageUrl, fac.name)}
                    className="text-xs font-bold text-amber-700 hover:underline"
                  >
                    Expand Photo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: ACHIEVEMENTS */}
      {activeTab === 'achievements' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900">Awards & Honors Cabinet</h2>
            <p className="text-xs text-slate-600">
              Celebrating national academic distinctions, sports titles, and innovation awards won by our pupils.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 text-center flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 mx-auto flex items-center justify-center text-amber-700 font-extrabold">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full inline-block">
                    {ach.year} • {ach.category}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base">{ach.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ach.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-400">
                  Verified Distinction
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: ADMISSIONS & FEES CALCULATOR */}
      {activeTab === 'admissions' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-white px-3 py-1 rounded-md border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Admissions 2026 / 2027</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Join the Ireneo Kunda Family
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Admissions are open for Kindergarten, Primary, and Secondary grades. We welcome prospective parents to schedule campus tours or apply directly through our streamlined online portal.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenApplyModal}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow transition-colors flex items-center gap-2"
                >
                  <span>Fill Admission Application</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveSection('contact')}
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs px-5 py-3 rounded-xl border border-slate-300 transition-colors"
                >
                  Schedule Campus Visit
                </button>
              </div>
            </div>

            {/* Application Requirements checklist */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-amber-200/80 shadow-sm space-y-3">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Required Application Documents:</span>
              </h3>
              <ul className="text-xs text-slate-600 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Copy of Pupil Birth Certificate</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Latest 2 Terms Academic Reports from previous school</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2 Passport size photographs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Parent / Guardian ID or Passport copy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Tuition Fee Estimator Calculator */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Interactive Tuition Fee Estimator
                </h3>
                <p className="text-xs text-slate-500">
                  Calculate estimated term and annual fees based on grade level and optional boarding or transport choices.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
              {/* Form Controls */}
              <div className="lg:col-span-7 space-y-5">
                {/* 1. Grade Level */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Select Grade Level:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'nursery', label: 'Nursery' },
                      { id: 'primary', label: 'Primary (1-7)' },
                      { id: 'junior', label: 'Junior High (8-9)' },
                      { id: 'senior', label: 'Senior High (10-12)' },
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setEstGrade(g.id as any)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                          estGrade === g.id
                            ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Residential Status */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Residential Type:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setEstRes('day')}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-left ${
                        estRes === 'day'
                          ? 'bg-amber-50 border-amber-500 text-amber-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="block text-sm">Day Student</span>
                      <span className="text-[11px] font-normal text-slate-500">Attends daily, returns home</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setEstRes('boarding')}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all text-left ${
                        estRes === 'boarding'
                          ? 'bg-amber-50 border-amber-500 text-amber-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="block text-sm">Boarding Hall</span>
                      <span className="text-[11px] font-normal text-slate-500">Full residential housing & meals (+ZMW 4,500/term)</span>
                    </button>
                  </div>
                </div>

                {/* 3. Add-ons */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Optional Services:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                      <input
                        type="checkbox"
                        checked={estTransport}
                        onChange={(e) => setEstTransport(e.target.checked)}
                        className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
                      />
                      <div className="text-xs">
                        <span className="font-bold text-slate-900 block">Daily Bus Shuttle Service</span>
                        <span className="text-slate-500 text-[11px]">Door-to-door or designated pickup zone (+ZMW 1,200/term)</span>
                      </div>
                    </label>

                    {estRes === 'day' && (
                      <label className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          checked={estLunch}
                          onChange={(e) => setEstLunch(e.target.checked)}
                          className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-slate-900 block">School Lunch Meal Plan</span>
                          <span className="text-slate-500 text-[11px]">Fresh hot lunch provided daily (+ZMW 900/term)</span>
                        </div>
                      </label>
                    )}
                  </div>
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Fee Statement Breakdown</span>
                    <span className="text-[11px] text-slate-400">3 Terms per Year</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span>Base Tuition Fee:</span>
                      <span className="font-bold text-white">ZMW {feeCalc.baseTuition.toLocaleString()}</span>
                    </div>

                    {feeCalc.boardingFee > 0 && (
                      <div className="flex justify-between">
                        <span>Boarding Residence:</span>
                        <span className="font-bold text-amber-300">ZMW {feeCalc.boardingFee.toLocaleString()}</span>
                      </div>
                    )}

                    {feeCalc.transportFee > 0 && (
                      <div className="flex justify-between">
                        <span>Bus Shuttle:</span>
                        <span className="font-bold text-amber-300">ZMW {feeCalc.transportFee.toLocaleString()}</span>
                      </div>
                    )}

                    {feeCalc.lunchFee > 0 && (
                      <div className="flex justify-between">
                        <span>Lunch Meal Plan:</span>
                        <span className="font-bold text-amber-300">ZMW {feeCalc.lunchFee.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-slate-400">Total Per Term:</span>
                      <span className="text-2xl font-black text-amber-400">
                        ZMW {feeCalc.termTotal.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline">
                      <span className="text-[11px] text-slate-500">Estimated Annual Total:</span>
                      <span className="text-xs font-bold text-slate-300">
                        ZMW {feeCalc.annualTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={onOpenApplyModal}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow transition-colors text-center"
                  >
                    Apply for this Stream
                  </button>
                  <p className="text-[10px] text-slate-500 text-center">
                    *Note: Fees include exercise books and laboratory access. Uniforms and national exam registration fees charged separately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
