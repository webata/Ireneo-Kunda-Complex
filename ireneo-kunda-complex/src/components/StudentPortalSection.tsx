import React, { useState } from 'react';
import { StudentProfile } from '../types';
import { DEMO_STUDENT_PROFILES } from '../data/schoolData';
import {
  UserCheck,
  GraduationCap,
  CreditCard,
  Calendar,
  CheckSquare,
  Bell,
  CheckCircle2,
  Clock,
  Printer,
  Download,
  Upload,
  AlertCircle,
  FileText,
  DollarSign,
  X,
  Sparkles,
} from 'lucide-react';

export const StudentPortalSection: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile>(DEMO_STUDENT_PROFILES[0]);
  const [activePortalTab, setActivePortalTab] = useState<'dashboard' | 'grades' | 'timetable' | 'assignments' | 'notices'>('dashboard');
  const [assignments, setAssignments] = useState(selectedStudent.assignments);

  // Fee payment modal
  const [paymentModalOpen, setPaymentModalOpen] = useState<boolean>(false);
  const [payAmount, setPayAmount] = useState<string>('2000');
  const [paySuccessMsg, setPaySuccessMsg] = useState<string | null>(null);

  // Switch student
  const handleSelectProfile = (st: StudentProfile) => {
    setSelectedStudent(st);
    setAssignments(st.assignments);
  };

  // Toggle assignment status
  const handleToggleAssignment = (id: string) => {
    setAssignments((prev) =>
      prev.map((a) => {
        if (a.id === id) {
          const newStatus = a.status === 'Pending' ? 'Submitted' : 'Pending';
          return { ...a, status: newStatus };
        }
        return a;
      })
    );
  };

  // Process simulated fee payment
  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(payAmount);
    if (isNaN(amountNum) || amountNum <= 0) return;

    setSelectedStudent((prev) => {
      const newPaid = prev.feeStatus.amountPaid + amountNum;
      const newBalance = Math.max(0, prev.feeStatus.totalTermFee - newPaid);
      return {
        ...prev,
        feeStatus: {
          ...prev.feeStatus,
          amountPaid: newPaid,
          balance: newBalance,
          dueDate: newBalance === 0 ? 'Paid in Full' : prev.feeStatus.dueDate,
        },
      };
    });

    setPaySuccessMsg(`Receipt generated! Payment of ZMW ${amountNum.toLocaleString()} processed successfully.`);
    setTimeout(() => {
      setPaySuccessMsg(null);
      setPaymentModalOpen(false);
    }, 2500);
  };

  return (
    <div className="space-y-8 pb-12 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header Banner & Demo Student Switcher */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Digital Student & Parent Portal</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Student Information System
            </h1>
          </div>

          {/* Profile Switcher */}
          <div className="bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700 flex items-center gap-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 hidden lg:inline">
              Switch Demo Account:
            </span>
            {DEMO_STUDENT_PROFILES.map((st) => (
              <button
                key={st.studentId}
                onClick={() => handleSelectProfile(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedStudent.studentId === st.studentId
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {st.fullName.split(' ')[0]} ({st.grade.includes('11') ? 'Senior' : 'Primary'})
              </button>
            ))}
          </div>
        </div>

        {/* Selected Student Card Header */}
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 flex items-center gap-4">
            <img
              src={selectedStudent.avatarUrl}
              alt={selectedStudent.fullName}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400 shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <h2 className="text-lg font-extrabold text-white">{selectedStudent.fullName}</h2>
              <p className="text-xs text-amber-400 font-bold">{selectedStudent.grade}</p>
              <p className="text-[11px] text-slate-400">ID: {selectedStudent.studentId} • Form Teacher: {selectedStudent.classTeacher}</p>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700">
              <span className="block text-[11px] text-slate-400 font-medium">Attendance Rate</span>
              <span className="text-base font-black text-emerald-400">{selectedStudent.attendanceRate}%</span>
            </div>

            <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700">
              <span className="block text-[11px] text-slate-400 font-medium">Term GPA</span>
              <span className="text-base font-black text-amber-400">{selectedStudent.gpa}</span>
            </div>

            <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700 col-span-2 sm:col-span-1">
              <span className="block text-[11px] text-slate-400 font-medium">Fee Balance</span>
              <span className={`text-base font-black ${selectedStudent.feeStatus.balance > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                ZMW {selectedStudent.feeStatus.balance.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Portal Internal Nav */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-800 pt-4">
          {[
            { id: 'dashboard', label: 'Dashboard Overview', icon: <GraduationCap className="w-4 h-4" /> },
            { id: 'grades', label: 'Gradebook & Report Card', icon: <FileText className="w-4 h-4" /> },
            { id: 'timetable', label: 'Class Timetable', icon: <Calendar className="w-4 h-4" /> },
            { id: 'assignments', label: 'Homework & Tasks', icon: <CheckSquare className="w-4 h-4" /> },
            { id: 'notices', label: 'Announcements', icon: <Bell className="w-4 h-4" /> },
          ].map((tab) => {
            const isActive = activePortalTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActivePortalTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: DASHBOARD OVERVIEW */}
      {activePortalTab === 'dashboard' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* Fee Alert Banner */}
          <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            selectedStudent.feeStatus.balance > 0
              ? 'bg-amber-50 border-amber-300 text-amber-900'
              : 'bg-emerald-50 border-emerald-300 text-emerald-900'
          }`}>
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-extrabold text-sm">
                  {selectedStudent.feeStatus.balance > 0
                    ? `Term 2 Fee Balance Due: ZMW ${selectedStudent.feeStatus.balance.toLocaleString()}`
                    : 'Term 2 Tuition Status: Settled in Full'}
                </h4>
                <p className="text-xs opacity-80">
                  {selectedStudent.feeStatus.balance > 0
                    ? `Payment due by ${selectedStudent.feeStatus.dueDate}. Avoid mid-term exam clearance delays.`
                    : 'Thank you for making prompt tuition payments!'}
                </p>
              </div>
            </div>

            {selectedStudent.feeStatus.balance > 0 && (
              <button
                onClick={() => setPaymentModalOpen(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow shrink-0"
              >
                Pay Fees Online
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Grades Summary */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-slate-900 text-sm">Term Assessment Summary</h3>
                <button
                  onClick={() => setActivePortalTab('grades')}
                  className="text-xs text-amber-700 hover:underline font-bold"
                >
                  View Full Report Card →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedStudent.grades.map((gr, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xs text-slate-900 block">{gr.subject}</span>
                      <span className="text-[11px] text-slate-500 italic">{gr.remarks}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-extrabold text-amber-700 block">{gr.grade}</span>
                      <span className="text-[11px] text-slate-500 font-medium">{gr.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgent Notices Sidebar */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <Bell className="w-4 h-4 text-amber-600" />
                <span>Notice Board</span>
              </h3>

              <div className="space-y-3">
                {selectedStudent.notices.map((n) => (
                  <div key={n.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        n.category === 'Urgent' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {n.category}
                      </span>
                      <span className="text-[10px] text-slate-400">{n.date}</span>
                    </div>
                    <h4 className="font-bold text-xs text-slate-900">{n.title}</h4>
                    <p className="text-[11px] text-slate-600 line-clamp-2">{n.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GRADEBOOK & OFFICIAL REPORT CARD */}
      {activePortalTab === 'grades' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Official Transcript</span>
              <h3 className="text-xl font-extrabold text-slate-900">Term 2 Academic Report Card</h3>
              <p className="text-xs text-slate-500">Student ID: {selectedStudent.studentId} • Class: {selectedStudent.grade}</p>
            </div>

            <button
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow flex items-center gap-2 shrink-0"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print Official Report</span>
            </button>
          </div>

          {/* Grades Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 uppercase font-bold text-[11px] border-b border-slate-200">
                  <th className="p-3">Subject Name</th>
                  <th className="p-3">Score (%)</th>
                  <th className="p-3">Grade</th>
                  <th className="p-3">Teacher Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {selectedStudent.grades.map((g, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{g.subject}</td>
                    <td className="p-3 font-semibold">{g.score}%</td>
                    <td className="p-3">
                      <span className="font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {g.grade}
                      </span>
                    </td>
                    <td className="p-3 text-slate-600 italic">{g.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs gap-3">
            <div>
              <span className="font-bold text-slate-900">Overall Term GPA: </span>
              <span className="font-black text-amber-700 text-sm ml-1">{selectedStudent.gpa}</span>
            </div>
            <div className="text-slate-500 font-medium">
              Report certified by Vice Principal: <span className="font-bold text-slate-800">Prof. Clement Banda</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TIMETABLE */}
      {activePortalTab === 'timetable' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 animate-in fade-in duration-150">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xl font-extrabold text-slate-900">Weekly Class Timetable</h3>
            <p className="text-xs text-slate-500">Scheduled lectures, laboratory sessions, and athletic periods.</p>
          </div>

          <div className="space-y-6">
            {selectedStudent.timetable.map((day, dayIdx) => (
              <div key={dayIdx} className="space-y-3">
                <h4 className="font-extrabold text-sm text-slate-900 bg-amber-50 px-3 py-1.5 rounded-lg inline-block border border-amber-200">
                  {day.day} Schedule
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {day.slots.map((slot, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-amber-800 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {slot.time}
                        </span>
                        <span className="text-slate-500">{slot.room}</span>
                      </div>
                      <h5 className="font-extrabold text-slate-900 text-sm">{slot.subject}</h5>
                      <p className="text-[11px] text-slate-500">Instructor: {slot.teacher}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: ASSIGNMENTS */}
      {activePortalTab === 'assignments' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 animate-in fade-in duration-150">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xl font-extrabold text-slate-900">Homework & Project Checklist</h3>
            <p className="text-xs text-slate-500">Click checkboxes to toggle submission status or mark tasks completed.</p>
          </div>

          <div className="space-y-3">
            {assignments.map((as) => (
              <div
                key={as.id}
                className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => handleToggleAssignment(as.id)}
                    className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      as.status === 'Submitted' || as.status === 'Graded'
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'bg-white border-slate-300 hover:border-amber-500'
                    }`}
                  >
                    {(as.status === 'Submitted' || as.status === 'Graded') && <CheckCircle2 className="w-4 h-4" />}
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                        {as.subject}
                      </span>
                      <span className="text-[11px] text-slate-400">Due: {as.dueDate}</span>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm mt-1">{as.title}</h4>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {as.score && (
                    <span className="text-xs font-black text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg">
                      Score: {as.score}
                    </span>
                  )}
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-xl ${
                      as.status === 'Submitted'
                        ? 'bg-emerald-100 text-emerald-800'
                        : as.status === 'Graded'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {as.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: NOTICES */}
      {activePortalTab === 'notices' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 animate-in fade-in duration-150">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-xl font-extrabold text-slate-900">Official School Circulars</h3>
            <p className="text-xs text-slate-500">Direct notifications from school management.</p>
          </div>

          <div className="space-y-4">
            {selectedStudent.notices.map((n) => (
              <div key={n.id} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded">
                    {n.category}
                  </span>
                  <span className="text-xs text-slate-400">{n.date}</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-base">{n.title}</h4>
                <p className="text-xs text-slate-700 leading-relaxed">{n.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Simulated Fee Payment Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 relative shadow-2xl animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setPaymentModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">Online Tuition Fee Gateway</h3>
                <p className="text-xs text-slate-500">Student: {selectedStudent.fullName}</p>
              </div>
            </div>

            {paySuccessMsg ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold">{paySuccessMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleProcessPayment} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Payment Amount (ZMW):</label>
                  <input
                    type="number"
                    value={payAmount}
                    onChange={(e) => setPayAmount(e.target.value)}
                    max={selectedStudent.feeStatus.balance}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <p className="text-[11px] text-slate-400">Current Balance: ZMW {selectedStudent.feeStatus.balance.toLocaleString()}</p>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 block">Payment Method:</label>
                  <select className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 font-medium">
                    <option>MTN Mobile Money / Airtel Money</option>
                    <option>Visa / Mastercard Debit</option>
                    <option>Direct Bank Transfer Deposit</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow transition-colors"
                >
                  Confirm & Process Payment
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
