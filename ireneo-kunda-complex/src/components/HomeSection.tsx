import React from 'react';
import { SectionId } from '../types';
import { SCHOOL_INFO, UPCOMING_EVENTS } from '../data/schoolData';
import { MR_CLETO_IRENEO_PHOTO } from '../assets/images/cletoIreneoPhoto';
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Compass,
  ArrowRight,
  Zap,
  CheckCircle2,
  Building,
  Target,
  HeartHandshake,
} from 'lucide-react';

interface HomeSectionProps {
  setActiveSection: (section: SectionId) => void;
  onOpenApplyModal: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  setActiveSection,
  onOpenApplyModal,
}) => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 my-4 mx-2 sm:mx-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={SCHOOL_INFO.heroImage}
            alt="Ireneo Kunda Complex Campus"
            className="w-full h-full object-cover object-center opacity-35 scale-105 transform hover:scale-100 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 lg:py-20 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Established 2017 • Premier Educational Institution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Shaping Tomorrow’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">Global Leaders</span> Today
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {SCHOOL_INFO.tagline}. Providing world-class nursery, primary, and secondary education tailored to academic excellence and moral integrity.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenApplyModal}
                id="hero-apply-btn"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Apply for Admission</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveSection('profile')}
                className="bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-base px-6 py-3.5 rounded-xl border border-slate-700 flex items-center gap-2 backdrop-blur-sm transition-all"
              >
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Explore School Profile</span>
              </button>

              <button
                onClick={() => setActiveSection('portal')}
                className="text-slate-300 hover:text-white font-semibold text-sm px-4 py-3 flex items-center gap-1.5 underline decoration-amber-500/60 underline-offset-4"
              >
                <span>Student Portal</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>MoGEI South Sudan Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-400" />
                <span>Boys & Girls Boarding Campus • Wau</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Solar-Powered ICT & Science Labs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="p-2 space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-600">
              {SCHOOL_INFO.stats.studentsCount}
            </p>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Enrolled Pupils
            </p>
            <p className="text-[11px] text-slate-400">Nursery to Senior High</p>
          </div>

          <div className="p-2 space-y-1 pt-4 md:pt-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {SCHOOL_INFO.stats.passRate}
            </p>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Exam Pass Rate
            </p>
            <p className="text-[11px] text-slate-400">Grade 7, 9 & 12 Exams</p>
          </div>

          <div className="p-2 space-y-1 pt-4 md:pt-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-600">
              {SCHOOL_INFO.stats.teachersCount}
            </p>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Qualified Educators
            </p>
            <p className="text-[11px] text-slate-400">17:1 Student-Teacher Ratio</p>
          </div>

          <div className="p-2 space-y-1 pt-4 md:pt-2">
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {SCHOOL_INFO.stats.universityTransition}
            </p>
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              University Transition
            </p>
            <p className="text-[11px] text-slate-400">Local & Foreign Admission</p>
          </div>
        </div>
      </section>

      {/* Founder's Message & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <img
                src={MR_CLETO_IRENEO_PHOTO}
                alt="Mr. Cleto Ireneo"
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-xl border-4 border-white bg-slate-900"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-3 -right-3 bg-amber-500 text-slate-950 font-bold p-3 rounded-2xl shadow-md flex items-center gap-1.5">
                <Award className="w-5 h-5" />
                <span className="text-xs">Founder's Desk</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-md">
              <GraduationCap className="w-4 h-4 text-amber-700" />
              <span>Message From Our Managing Director</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              "We don't just teach subjects — we shape character and ignite lifelong curiosity."
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
              "{SCHOOL_INFO.principalMessage}"
            </p>

            <div className="pt-2 border-t border-amber-200/60 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-extrabold text-slate-900 text-base">Mr. Cleto Ireneo</p>
                <p className="text-xs text-amber-800 font-medium">Managing Director, Ireneo Nursery & Primary School, Wau</p>
              </div>

              <button
                onClick={() => setActiveSection('about')}
                className="text-xs font-bold text-amber-900 hover:text-amber-950 bg-amber-200/60 hover:bg-amber-200 px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Read Full Story & History</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ireneo Kunda Complex */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Pillars of Excellence
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Why Choose Ireneo Kunda Complex?
          </h2>
          <p className="text-sm text-slate-600">
            A balanced ecosystem designed to nurture academic, spiritual, physical, and technological mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <BookOpen className="w-6 h-6 text-amber-600" />,
              title: 'Academic Excellence & Dual Curriculum',
              description: 'Comprehensive ECZ and Cambridge alignment ensuring high exam performance and smooth university transitions.',
            },
            {
              icon: <Zap className="w-6 h-6 text-amber-600" />,
              title: 'STEM & Robotics Innovation Center',
              description: 'Hands-on training in coding, 3D printing, biology research, and robotics starting from early primary grades.',
            },
            {
              icon: <Target className="w-6 h-6 text-amber-600" />,
              title: 'Character & Moral Leadership',
              description: 'Disciplined, value-centered schooling fostering integrity, community service, and emotional resilience.',
            },
            {
              icon: <Building className="w-6 h-6 text-amber-600" />,
              title: 'Modern Infrastructure & Boarding',
              description: 'Spacious smart classrooms, science labs, Olympic sports pitch, and secure residential boarding houses.',
            },
            {
              icon: <Users className="w-6 h-6 text-amber-600" />,
              title: 'Dedicated Qualified Faculty',
              description: 'Passionate educators with specialized degrees and continuous international professional development.',
            },
            {
              icon: <HeartHandshake className="w-6 h-6 text-amber-600" />,
              title: '24+ Clubs, Athletics & Arts',
              description: 'Competitive football, swimming, chess, debate club, music band, and drama performances.',
            },
          ].map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 space-y-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-amber-600 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access Portal & Calendar Highlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <h3 className="font-extrabold text-lg text-white">Upcoming Events</h3>
                </div>
                <button
                  onClick={() => setActiveSection('events')}
                  className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>View All ({UPCOMING_EVENTS.length})</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-3">
                {UPCOMING_EVENTS.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    onClick={() => setActiveSection('events')}
                    className="p-3 bg-slate-800/80 hover:bg-slate-800 rounded-xl cursor-pointer transition-colors flex items-center justify-between gap-3 border border-slate-700/60"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1.5 rounded-lg text-center shrink-0">
                        <span className="block text-xs font-bold uppercase">
                          {new Date(event.date).toLocaleString('default', { month: 'short' })}
                        </span>
                        <span className="block text-base font-extrabold">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white line-clamp-1">{event.title}</h4>
                        <p className="text-xs text-slate-400 flex items-center gap-2">
                          <span>{event.time}</span> • <span className="text-amber-300/80">{event.location}</span>
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setActiveSection('events')}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-amber-400 rounded-xl transition-colors border border-slate-700 text-center"
            >
              Open Interactive School Calendar
            </button>
          </div>

          {/* Student Portal Card */}
          <div className="bg-gradient-to-br from-amber-600 via-amber-600 to-amber-700 text-slate-950 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-slate-950 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                <Compass className="w-3.5 h-3.5" />
                <span>Student & Parent Portal</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-slate-950">
                Track Grades, Attendance, Timetables & Fee Statements
              </h3>

              <p className="text-slate-950/80 text-sm leading-relaxed">
                Our digital portal keeps parents and students connected 24/7. Check academic progress, download homework assignments, and manage fee accounts online.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-bold text-slate-950">
                <div className="flex items-center gap-1.5 bg-white/40 p-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-900" />
                  <span>Real-Time Grades</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/40 p-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-900" />
                  <span>Class Timetables</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/40 p-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-900" />
                  <span>Online Fee Payment</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/40 p-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-900" />
                  <span>Assignment Submission</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveSection('portal')}
              className="w-full py-3 bg-slate-950 hover:bg-slate-900 text-amber-400 font-extrabold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Access Student Portal Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
