import React from 'react';
import { SectionId } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: SectionId) => void;
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveSection,
  onOpenApplyModal,
}) => {
  const handleNav = (id: SectionId) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="py-1">
              <SchoolLogo variant="dark" size="md" />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Dedicated to academic excellence, moral integrity, and student discipline. Providing quality Nursery, Primary, Secondary, and Boarding education in Wau, South Sudan.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>MoGEI South Sudan Accredited</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Boys & Girls  Campus</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our School' },
                { id: 'profile', label: 'School Profile & Programs' },
                { id: 'gallery', label: 'Photo & Video Gallery' },
                { id: 'events', label: 'School Events Calendar' },
                { id: 'portal', label: 'Student & Parent Portal' },
                { id: 'contact', label: 'Contact & Map' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id as SectionId)}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500/60 group-hover:text-amber-400" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academics & Admissions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Academics & Admissions
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Kindergarten & Early Years</li>
              <li>Primary School (Grades 1-8)</li>
              <li>Junior Secondary (Grades 1-2)</li>
              <li>Senior Secondary (Grades 2-4)</li>
              <li>STEM & Robotics Innovation</li>
              
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenApplyModal}
                className="w-full text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Apply for 2026/2027</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 4: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.phonePrimary}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{SCHOOL_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Ireneo Nursery & Primary School • Wau, South Sudan. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('profile')}
              className="hover:text-slate-300 transition-colors"
            >
              School Profile
            </button>
            <button
              onClick={() => handleNav('portal')}
              className="hover:text-slate-300 transition-colors"
            >
              Student Portal
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Admissions Office
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
