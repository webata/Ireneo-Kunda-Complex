import React, { useState } from 'react';
import { SectionId } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import {
  Phone,
  Mail,
  GraduationCap,
  Menu,
  X,
  Search,
  UserCheck,
  Award,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  onOpenApplyModal: () => void;
  onOpenSearchModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenApplyModal,
  onOpenSearchModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SectionId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'about', label: 'About Us', icon: <Award className="w-4 h-4" /> },
    { id: 'profile', label: 'School Profile', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'gallery', label: 'Gallery', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'events', label: 'Events & News', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'portal', label: 'Student Portal', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact Us', icon: <Phone className="w-4 h-4" /> },
  ];

  const handleNavClick = (id: SectionId) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href={`tel:${SCHOOL_INFO.phonePrimary}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{SCHOOL_INFO.phonePrimary}</span>
            </a>
            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              2026/2027 Admissions Open
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearchModal}
              className="flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-2.5 py-1 rounded-md text-[11px] transition-colors border border-slate-700"
              title="Search website"
            >
              <Search className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">Search Site</span>
            </button>

            <button
              onClick={() => handleNavClick('portal')}
              className="flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 px-2.5 py-1 rounded-md transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Portal Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Institution Name */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group py-1"
          >
            <SchoolLogo variant="full" size="md" />
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                  {item.id === 'portal' && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Apply Action Button & Mobile Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenApplyModal}
              id="header-apply-btn"
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-md shadow-amber-500/20 transition-all transform active:scale-95"
            >
              <span>Apply Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">
            Navigation Menu
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-50 text-amber-900 border border-amber-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isActive ? 'text-amber-600' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-600' : 'text-slate-300'}`} />
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow"
            >
              <span>Apply for Admission</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
