export type SectionId = 'home' | 'about' | 'profile' | 'gallery' | 'events' | 'portal' | 'contact';

export type ProfileTab = 'overview' | 'academics' | 'facilities' | 'achievements' | 'admissions';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Events' | 'Sports' | 'Classroom' | 'STEM' | 'Arts';
  imageUrl: string;
  description: string;
  date: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight: string;
  badge?: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  imageUrl: string;
  email: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'Academic' | 'Sports' | 'Technology' | 'Living' | 'Arts';
  description: string;
  imageUrl: string;
  features: string[];
}

export interface AcademicProgram {
  id: string;
  level: string;
  ageGroup: string;
  headOfDepartment: string;
  description: string;
  subjects: string[];
  keyHighlights: string[];
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  category: 'Academic' | 'Sports' | 'Innovation' | 'Community';
  description: string;
  iconName: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Parents' | 'Community';
  description: string;
  organizer: string;
  rsvpCount: number;
  isUserRsvp?: boolean;
}

export interface StudentProfile {
  studentId: string;
  fullName: string;
  grade: string;
  classTeacher: string;
  avatarUrl: string;
  attendanceRate: number;
  gpa: string;
  feeStatus: {
    totalTermFee: number;
    amountPaid: number;
    balance: number;
    dueDate: string;
  };
  grades: {
    subject: string;
    score: number;
    grade: string;
    remarks: string;
  }[];
  timetable: {
    day: string;
    slots: { time: string; subject: string; room: string; teacher: string }[];
  }[];
  assignments: {
    id: string;
    subject: string;
    title: string;
    dueDate: string;
    status: 'Pending' | 'Submitted' | 'Graded';
    score?: string;
  }[];
  notices: {
    id: string;
    title: string;
    date: string;
    content: string;
    category: 'Urgent' | 'General' | 'Academic';
  }[];
}

export interface AdmissionApplication {
  applicantName: string;
  parentName: string;
  email: string;
  phone: string;
  gradeApplying: string;
  residentialStatus: 'Day Student' | 'Boarding';
  prevSchool: string;
  message: string;
  submittedAt?: string;
}
