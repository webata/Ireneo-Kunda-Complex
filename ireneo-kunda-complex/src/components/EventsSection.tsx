import React, { useState } from 'react';
import { SchoolEvent } from '../types';
import { UPCOMING_EVENTS } from '../data/schoolData';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  CheckCircle2,
  Share2,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [eventsList, setEventsList] = useState<SchoolEvent[]>(UPCOMING_EVENTS);
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [rsvpNotification, setRsvpNotification] = useState<string | null>(null);

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Parents'];

  const handleToggleRsvp = (eventId: string) => {
    setEventsList((prev) =>
      prev.map((ev) => {
        if (ev.id === eventId) {
          const newStatus = !ev.isUserRsvp;
          const newCount = newStatus ? ev.rsvpCount + 1 : ev.rsvpCount - 1;

          setRsvpNotification(
            newStatus
              ? `You have successfully RSVP'd for "${ev.title}"!`
              : `RSVP cancelled for "${ev.title}".`
          );
          setTimeout(() => setRsvpNotification(null), 3500);

          return { ...ev, isUserRsvp: newStatus, rsvpCount: newCount };
        }
        return ev;
      })
    );
  };

  const filteredEvents = eventsList.filter((ev) => {
    const matchesCat = selectedCat === 'All' || ev.category === selectedCat;
    const matchesSearch =
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Toast Notification */}
      {rsvpNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-500/50 flex items-center gap-2 text-xs font-bold animate-in slide-in-from-bottom duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{rsvpNotification}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-800">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>School Calendar & Announcements</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Events & Academic Calendar
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Stay informed on upcoming inter-school competitions, parent conferences, sports galas, and cultural festivals at Ireneo Kunda Complex.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCat === cat
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search school events..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-slate-900"
          />
        </div>
      </div>

      {/* Events List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((ev) => {
          const eventDate = new Date(ev.date);
          const monthStr = eventDate.toLocaleString('default', { month: 'short' });
          const dayNum = eventDate.getDate();

          return (
            <div
              key={ev.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  {/* Date Badge */}
                  <div className="bg-slate-900 text-white rounded-2xl px-4 py-2.5 text-center shrink-0 border border-slate-800 shadow-sm">
                    <span className="block text-xs font-black uppercase text-amber-400">
                      {monthStr}
                    </span>
                    <span className="block text-2xl font-black">{dayNum}</span>
                  </div>

                  <div className="flex-1 space-y-1">
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md inline-block">
                      {ev.category}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                      {ev.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{ev.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span className="truncate">{ev.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-600" />
                    <span>Organizer: {ev.organizer}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    <span>{ev.rsvpCount} Attending</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleToggleRsvp(ev.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    ev.isUserRsvp
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{ev.isUserRsvp ? 'Attending (RSVP Confirmed)' : 'RSVP for Event'}</span>
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(`${window.location.origin}#events`);
                    setRsvpNotification(`Event invitation link copied!`);
                    setTimeout(() => setRsvpNotification(null), 3000);
                  }}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
                  title="Share event link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
