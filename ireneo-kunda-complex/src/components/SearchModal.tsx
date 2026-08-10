import React, { useState } from 'react';
import { SectionId } from '../types';
import {
  ACADEMIC_PROGRAMS,
  FACILITIES_LIST,
  LEADERSHIP_TEAM,
  UPCOMING_EVENTS,
  GALLERY_ITEMS,
} from '../data/schoolData';
import { Search, X, ChevronRight, BookOpen, Building, User, Calendar, Image } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveSection: (section: SectionId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  setActiveSection,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingAcademics = q
    ? ACADEMIC_PROGRAMS.filter(
        (p) =>
          p.level.toLowerCase().includes(q) ||
          p.subjects.some((s) => s.toLowerCase().includes(q))
      )
    : [];

  const matchingFacilities = q
    ? FACILITIES_LIST.filter(
        (f) => f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)
      )
    : [];

  const matchingStaff = q
    ? LEADERSHIP_TEAM.filter(
        (l) => l.name.toLowerCase().includes(q) || l.role.toLowerCase().includes(q)
      )
    : [];

  const matchingEvents = q
    ? UPCOMING_EVENTS.filter(
        (e) => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)
      )
    : [];

  const matchingGallery = q
    ? GALLERY_ITEMS.filter(
        (g) => g.title.toLowerCase().includes(q) || g.category.toLowerCase().includes(q)
      )
    : [];

  const totalResults =
    matchingAcademics.length +
    matchingFacilities.length +
    matchingStaff.length +
    matchingEvents.length +
    matchingGallery.length;

  const handleNavigate = (section: SectionId) => {
    setActiveSection(section);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 pt-16">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 space-y-4 relative shadow-2xl animate-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 flex-1 mr-4">
            <Search className="w-5 h-5 text-amber-500 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search subjects, staff, facilities, events..."
              className="w-full text-sm font-medium text-slate-900 focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results view */}
        <div className="max-h-96 overflow-y-auto space-y-4 text-xs">
          {!q ? (
            <div className="text-center py-8 text-slate-400 space-y-2">
              <Search className="w-8 h-8 text-slate-300 mx-auto" />
              <p>Type keywords to search across Ireneo Kunda Complex website.</p>
            </div>
          ) : totalResults === 0 ? (
            <p className="text-center py-8 text-slate-500 font-medium">
              No results found matching "{query}".
            </p>
          ) : (
            <div className="space-y-4">
              {matchingAcademics.length > 0 && (
                <div className="space-y-1">
                  <span className="font-bold text-amber-800 uppercase tracking-wider block text-[10px] bg-amber-50 px-2 py-0.5 rounded w-max">
                    Academic Programs
                  </span>
                  {matchingAcademics.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleNavigate('profile')}
                      className="p-2.5 hover:bg-slate-50 rounded-xl cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-amber-600" />
                        <div>
                          <p className="font-bold text-slate-900">{item.level}</p>
                          <p className="text-[11px] text-slate-500">{item.subjects.slice(0, 4).join(', ')}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              )}

              {matchingFacilities.length > 0 && (
                <div className="space-y-1">
                  <span className="font-bold text-amber-800 uppercase tracking-wider block text-[10px] bg-amber-50 px-2 py-0.5 rounded w-max">
                    Facilities & Infrastructure
                  </span>
                  {matchingFacilities.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleNavigate('profile')}
                      className="p-2.5 hover:bg-slate-50 rounded-xl cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-amber-600" />
                        <div>
                          <p className="font-bold text-slate-900">{item.name}</p>
                          <p className="text-[11px] text-slate-500">{item.category}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              )}

              {matchingEvents.length > 0 && (
                <div className="space-y-1">
                  <span className="font-bold text-amber-800 uppercase tracking-wider block text-[10px] bg-amber-50 px-2 py-0.5 rounded w-max">
                    School Events
                  </span>
                  {matchingEvents.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleNavigate('events')}
                      className="p-2.5 hover:bg-slate-50 rounded-xl cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-600" />
                        <div>
                          <p className="font-bold text-slate-900">{item.title}</p>
                          <p className="text-[11px] text-slate-500">{item.date} • {item.location}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              )}

              {matchingStaff.length > 0 && (
                <div className="space-y-1">
                  <span className="font-bold text-amber-800 uppercase tracking-wider block text-[10px] bg-amber-50 px-2 py-0.5 rounded w-max">
                    Leadership & Staff
                  </span>
                  {matchingStaff.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleNavigate('about')}
                      className="p-2.5 hover:bg-slate-50 rounded-xl cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-amber-600" />
                        <div>
                          <p className="font-bold text-slate-900">{item.name}</p>
                          <p className="text-[11px] text-slate-500">{item.role}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
