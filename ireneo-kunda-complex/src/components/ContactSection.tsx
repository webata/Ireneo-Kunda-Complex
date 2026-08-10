import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Compass,
  Building,
  UserCheck,
  MessageSquare,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions Inquiry',
    message: '',
  });

  const [submittedMsg, setSubmittedMsg] = useState<boolean>(false);
  const [messagesHistory, setMessagesHistory] = useState<
    { name: string; subject: string; time: string; text: string }[]
  >([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newMsg = {
      name: formData.name,
      subject: formData.subject,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: formData.message,
    };

    setMessagesHistory((prev) => [newMsg, ...prev]);
    setSubmittedMsg(true);
    setFormData({ name: '', email: '', phone: '', subject: 'Admissions Inquiry', message: '' });

    setTimeout(() => {
      setSubmittedMsg(false);
    }, 4000);
  };

  return (
    <div className="space-y-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-800">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Connect with Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Location
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Have questions about admissions, fees, South Sudan curriculum, or boarding dormitories? Reach out to our administration team in Wau.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-xl font-extrabold text-slate-900">Send an Online Inquiry</h2>
            <p className="text-xs text-slate-500">Our administration office responds to all messages within 24 business hours.</p>
          </div>

          {submittedMsg && (
            <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl flex items-center gap-3 text-xs font-bold animate-in fade-in duration-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thank you! Your message has been sent to the Ireneo Nursery & Primary School administration team in Wau.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mary Banda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. mary@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+211 920 000 123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Inquiry Category</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                >
                  <option>Admissions Inquiry</option>
                  <option>Bursar & Fee Payment</option>
                  <option>Boarding Facilities</option>
                  <option>General School Tour</option>
                  <option>Job / Careers Application</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 block">Message Details *</label>
              <textarea
                required
                rows={4}
                placeholder="Write your questions or notes here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </button>
          </form>

          {/* Messages History Preview */}
          {messagesHistory.length > 0 && (
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <span className="text-xs font-bold text-slate-500 block">Your Sent Messages Session Log:</span>
              <div className="space-y-2 max-h-36 overflow-y-auto">
                {messagesHistory.map((m, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl text-xs space-y-1 border border-slate-100">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{m.subject}</span>
                      <span className="text-slate-400 font-normal">{m.time}</span>
                    </div>
                    <p className="text-slate-600 italic">"{m.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contact Info Sidebar & Department Directory */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <h3 className="font-extrabold text-lg text-amber-400">Campus Contact Directory</h3>

            <ul className="space-y-4 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Physical Location:</span>
                  <span>{SCHOOL_INFO.location}</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Telephone Numbers:</span>
                  <span>Main: {SCHOOL_INFO.phonePrimary}</span>
                  <span className="block">Secondary: {SCHOOL_INFO.phoneSecondary}</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Official Emails:</span>
                  <span>General: {SCHOOL_INFO.email}</span>
                  <span className="block">Admissions: {SCHOOL_INFO.admissionsEmail}</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Operating Hours:</span>
                  <span>{SCHOOL_INFO.officeHours}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Department extensions */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm">Department Extension Numbers</h4>
            <ul className="text-xs space-y-2 text-slate-600 font-medium">
              <li className="flex justify-between border-b border-slate-100 pb-1">
                <span>Principal's Office:</span>
                <span className="font-bold text-slate-900">Ext 101</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-1">
                <span>Admissions & Registrar:</span>
                <span className="font-bold text-slate-900">Ext 104</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-1">
                <span>Accounts & Bursar:</span>
                <span className="font-bold text-slate-900">Ext 108</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-1">
                <span>Boarding Housemaster:</span>
                <span className="font-bold text-slate-900">Ext 112</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Map & Campus Location */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">Campus Location Map & Directions</h3>
            <p className="text-xs text-slate-500">Ireneo Nursery & Primary School, Plot 12 Kwajok Road, Wau, Western Bahr el Ghazal, South Sudan</p>
          </div>
          <button
            onClick={() => window.open(`https://maps.app.goo.gl/Kg6uqopMXuJUmgpUA`, '_blank')}
            className="text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
          >
            <Compass className="w-4 h-4 text-amber-700" />
            <span>Open in Google Maps</span>
          </button>
        </div>

        {/* Map Container Graphic */}
        <div className="relative h-72 sm:h-80 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-900/40"></div>
          <div className="relative z-10 text-center space-y-3 p-6 max-w-md bg-slate-950/85 backdrop-blur-md rounded-2xl border border-slate-800 text-white shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto font-black shadow-lg animate-bounce">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-base text-amber-400">Ireneo Nursery & Primary School Campus</h4>
            <p className="text-xs text-slate-300">Plot 32 Calavario Road, Hai Calavario, Wau, Western Bahr el Ghazal State, Republic of South Sudan.</p>
            <p className="text-[11px] text-emerald-400 font-bold">Visitors reception & male/female boarding gates available</p>
          </div>
        </div>
      </section>
    </div>
  );
};
