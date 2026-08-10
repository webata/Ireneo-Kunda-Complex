import {
  GalleryItem,
  TimelineEvent,
  LeadershipMember,
  Facility,
  AcademicProgram,
  Achievement,
  SchoolEvent,
  StudentProfile,
} from '../types';
import { MR_CLETO_IRENEO_PHOTO } from '../assets/images/cletoIreneoPhoto';

export const SCHOOL_INFO = {
  name: 'Ireneo Nursery & Primary School',
  fullName: 'Ireneo Nursery, Primary & Secondary School',
  tagline: 'Education is a Key to Success • Nurturing South Sudan’s Future Leaders',
  motto: 'Education is a Key to Success',
  established: '2017',
  location: 'Plot 12, Hai Nazareth / Kwajok Road, Wau, Western Bahr el Ghazal State, South Sudan',
  cityState: 'Wau, South Sudan',
  phonePrimary: '+211 920 000 123',
  phoneSecondary: '+211 915 000 456',
  email: 'info@ireneoschools-ss.org',
  admissionsEmail: 'admissions@ireneoschools-ss.org',
  officeHours: 'Mon - Fri: 07:30 AM - 16:30 PM | Sat: 08:00 AM - 12:30 PM',
  stats: {
    studentsCount: '1,250+',
    passRate: '99.2%',
    teachersCount: '68+',
    studentTeacherRatio: '18:1',
    universityTransition: '95%',
    clubsCount: '18+',
  },
  heroImage: '/src/assets/images/ireneo_hero_campus_1784811762575.jpg',
  principalMessage: `Welcome to Ireneo Nursery & Primary School, Wau. Guided by our motto "Education is a Key to Success", we provide high-quality education following the Republic of South Sudan General Education Curriculum. Our Wau campus features state-of-the-art learning facilities alongside secure Boarding Dormitories for both male and female pupils. We are dedicated to nurturing disciplined, innovative, and ethically grounded young leaders.`,
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2017',
    title: 'Founding of Ireneo Nursery & Primary School',
    description: 'Established in Wau, Western Bahr el Ghazal State, with 110 pioneer learners across Nursery and Lower Primary grades.',
    highlight: '110 Pioneer Students',
    badge: 'Foundation',
  },
  {
    year: '2019',
    title: 'Commissioning of Boarding Facilities in Wau',
    description: 'Opened modern residential boarding dormitories for boys and girls to accommodate pupils from Western Bahr el Ghazal and surrounding states.',
    highlight: 'Boys & Girls Boarding',
    badge: 'Boarding',
  },
  {
    year: '2021',
    title: 'Science & Computer Innovation Lab',
    description: 'Unveiled the ICT computer suite and primary science discovery center in Wau to boost practical STEM skills.',
    highlight: 'STEM Lab Launch',
    badge: 'Technology',
  },
  {
    year: '2023',
    title: 'South Sudan PLE Outstanding Performance',
    description: 'Achieved top ranking in the South Sudan Primary Leaving Certificate Examinations (PLE) in Western Bahr el Ghazal State.',
    highlight: '#1 in State Examinations',
    badge: 'Excellence',
  },
  {
    year: '2025',
    title: 'Secondary School Expansion (Senior 1 - Senior 4)',
    description: 'Expanded campus facilities to provide the complete South Sudan Certificate of Secondary Education (CSE) pathway.',
    highlight: 'Full CSE Secondary Pathway',
    badge: 'Growth',
  },
  {
    year: '2026',
    title: 'Solar Power & Digital Learning Initiative',
    description: 'Installed 24/7 solar power backup system for classroom light, computer labs, and boarding hall night study prep in Wau.',
    highlight: '24/7 Solar Campus',
    badge: 'Innovation',
  },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: '1',
    name: 'Mr. Cleto Ireneo',
    role: 'Founder & Managing Director',
    qualifications: 'M.Ed. Educational Leadership & Administration',
    bio: 'Dedicated South Sudanese educational leader overseeing overall school vision, infrastructure growth, and academic excellence at Ireneo Nursery & Primary School in Wau.',
    imageUrl: MR_CLETO_IRENEO_PHOTO,
    email: 'director@ireneoschools-ss.org',
  },
  {
    id: '2',
    name: 'Mr. Adiama Andrea',
    role: 'Head of Primary School',
    qualifications: 'B.Ed. Primary Education (MoGEI Certified)',
    bio: 'Directs Primary 1 through Primary 8 academic standards, teacher supervision, and preparation for South Sudan Primary Leaving Examinations (PLE).',
    imageUrl: '',
    email: 'primary@ireneoschools-ss.org',
  },
  {
    id: '3',
    name: 'Mr. Simon Luciano',
    role: 'Head of Secondary School',
    qualifications: 'B.Sc. Education & Mathematics',
    bio: 'Leads Senior 1 to Senior 4 academic programs, STEM science labs, and preparation for South Sudan Certificate of Secondary Education (CSE).',
    imageUrl: '',
    email: 'secondary@ireneoschools-ss.org',
  },
  {
    id: '4',
    name: 'Mrs. Janet Edward',
    role: 'Head of Kindergarten & Nursery',
    qualifications: 'Dip. Early Childhood Development (ECD)',
    bio: 'Specializes in early childhood phonics, mother-tongue foundation, play-based learning, and nurturing care for learners aged 3 to 5.',
    imageUrl: '',
    email: 'kindergarten@ireneoschools-ss.org',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Wau Campus Main Quadrangle',
    category: 'Campus',
    imageUrl: '/src/assets/images/ireneo_hero_campus_1784811762575.jpg',
    description: 'Main administrative block and spacious, green assembly court at Ireneo Nursery & Primary School, Wau.',
    date: 'March 2026',
  },
  {
    id: 'g2',
    title: 'Science & Agricultural Experiment Plot',
    category: 'STEM',
    imageUrl: '/src/assets/images/ireneo_science_lab_1784811772659.jpg',
    description: 'Primary pupils conducting plant life and soil chemistry experiments under teacher supervision.',
    date: 'February 2026',
  },
  {
    id: 'g3',
    title: 'Wau Inter-School Athletics Field',
    category: 'Sports',
    imageUrl: '/src/assets/images/ireneo_sports_complex_1784811786471.jpg',
    description: 'Our standard football pitch and athletics track hosting inter-school tournaments in Western Bahr el Ghazal.',
    date: 'January 2026',
  },
  {
    id: 'g4',
    title: 'Modern Boarding Dormitory Lounge',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1000',
    description: 'Clean, secure residential boarding facilities for resident pupils with supervised prep study tables.',
    date: 'March 2026',
  },
  {
    id: 'g5',
    title: 'South Sudan Cultural Celebration Day',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000',
    description: 'Students performing traditional cultural dances and songs celebrating unity and diversity in Wau.',
    date: 'December 2025',
  },
  {
    id: 'g6',
    title: 'ICT & Computer Training Suite',
    category: 'STEM',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000',
    description: 'Primary 5-8 pupils learning keyboarding, digital literacy, and basic computer applications.',
    date: 'February 2026',
  },
];

export const FACILITIES_LIST: Facility[] = [
  {
    id: 'f1',
    name: 'Secure Boarding Halls (Boys & Girls Dormitories)',
    category: 'Living',
    description: 'State-approved boarding accommodation featuring separate secure dormitories for male and female pupils, resident matrons/patrons, and 24/7 security.',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1000',
    features: ['Separate male & female dorms', '24/7 security guards & perimeter wall', 'Resident nurse & sickbay', 'Supervised evening prep study'],
  },
  {
    id: 'f2',
    name: 'Science & Discovery Laboratory',
    category: 'Academic',
    description: 'Equipped with scientific equipment for Primary Science and Secondary Physics, Chemistry, and Biology experiments.',
    imageUrl: '/src/assets/images/ireneo_science_lab_1784811772659.jpg',
    features: ['Microscopes & specimen kits', 'Solar-powered demonstration stations', 'Safety equipment & clean water supply'],
  },
  {
    id: 'f3',
    name: 'ICT Computer Lab & Solar Station',
    category: 'Technology',
    description: '25 desktop workstations powered by a dedicated solar inverter system ensuring uninterrupted computer lessons.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000',
    features: ['24/7 Solar battery backup', 'Educational offline digital library', 'Keyboarding & software tools'],
  },
  {
    id: 'f4',
    name: 'Sports Complex & Football Pitch',
    category: 'Sports',
    description: 'Full-sized grass football pitch, volleyball court, and basketball ring for physical education and weekend tournaments.',
    imageUrl: '/src/assets/images/ireneo_sports_complex_1784811786471.jpg',
    features: ['Regulation football field', 'Volleyball & netball courts', 'Track & athletics equipment'],
  },
  {
    id: 'f5',
    name: 'Hygienic Dining Hall & Kitchen',
    category: 'Living',
    description: 'Spacious dining hall serving three nutritious hot meals daily to boarding pupils and healthy lunches to day pupils.',
    imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=1000',
    features: ['3 balanced daily meals for boarders', 'Purified drinking water filtration', 'Clean hygienic food prep area'],
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'p1',
    level: 'Nursery & Early Childhood (Baby, Middle, Top Class)',
    ageGroup: 'Ages 3 - 5 Years',
    headOfDepartment: 'Mrs. Janet Edward',
    description: 'A joyful, protective environment nurturing social development, early phonics, number concepts, motor skills, and creative play.',
    subjects: ['Language Development & Phonics', 'Number Work & Pre-Math', 'Environmental Studies', 'Creative Arts & Song', 'Physical Movement'],
    keyHighlights: ['Caring early childhood teachers', 'Shaded outdoor playground', 'Nutritious morning porridge snack'],
  },
  {
    id: 'p2',
    level: 'Primary School (Primary 1 to Primary 8 - P1 to P8)',
    ageGroup: 'Ages 6 - 13 Years',
    headOfDepartment: 'Mr. Adiama Andrea',
    description: 'Aligned with the South Sudan National Curriculum under MoGEI. Prepares pupils thoroughly for the South Sudan Primary Leaving Examination (PLE).',
    subjects: ['English Language', 'Mathematics', 'Science & Health', 'Social Studies (History & Geography of South Sudan)', 'Christian Religious Education (CRE) / Islamic Studies', 'National & Local Languages', 'ICT Foundations'],
    keyHighlights: ['South Sudan PLE Examination Center', 'Daily homework guidance & prep', 'Day & Boarding options available'],
  },
  {
    id: 'p3',
    level: 'Secondary School (Senior 1 to Senior 4 - S1 to S4)',
    ageGroup: 'Ages 14 - 18 Years',
    headOfDepartment: 'Mr. Simon Luciano',
    description: 'Prepares students for university entrance through the South Sudan Certificate of Secondary Education (CSE) curriculum.',
    subjects: ['Mathematics', 'English Literature', 'Physics', 'Chemistry', 'Biology', 'History & Geography', 'Commerce / Principles of Accounts', 'Computer Science'],
    keyHighlights: ['Top exam performance record', 'University admission counseling', 'Full male & female boarding available'],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    year: '2025',
    title: 'Top PLE Examination Scores in Western Bahr el Ghazal State',
    category: 'Academic',
    description: 'Our Primary 8 candidates achieved a 99.2% pass rate in the South Sudan National Primary Leaving Examinations.',
    iconName: 'Award',
  },
  {
    id: 'a2',
    year: '2025',
    title: 'Wau Inter-Schools Football Trophy Champions',
    category: 'Sports',
    description: 'Ireneo U-14 Football team won the Wau City Primary Schools Tournament undefeated.',
    iconName: 'Trophy',
  },
  {
    id: 'a3',
    year: '2024',
    title: 'Model Boarding School Hygiene & Safety Award',
    category: 'Community',
    description: 'Awarded by Western Bahr el Ghazal State Ministry of Education for exemplary student boarding care.',
    iconName: 'GraduationCap',
  },
];

export const UPCOMING_EVENTS: SchoolEvent[] = [
  {
    id: 'e1',
    title: 'Primary 8 PLE National Mock Examinations',
    date: '2026-08-18',
    time: '08:00 AM - 13:00 PM',
    location: 'Main Examination Hall, Wau Campus',
    category: 'Academic',
    description: 'Statewide mock exams preparing P8 candidates for the South Sudan Primary Leaving Certificate.',
    organizer: 'MoGEI Exam Committee',
    rsvpCount: 95,
  },
  {
    id: 'e2',
    title: 'Boarding Parents & Guardians Visitation Day',
    date: '2026-08-29',
    time: '09:00 AM - 16:00 PM',
    location: 'School Dining Hall & Quadrangle',
    category: 'Parents',
    description: 'Quarterly visit day for parents of boarding pupils to discuss progress with housemasters and teachers.',
    organizer: 'Boarding Administration',
    rsvpCount: 180,
  },
  {
    id: 'e3',
    title: 'South Sudan National Cultural & Literacy Festival',
    date: '2026-09-12',
    time: '08:30 AM - 15:30 PM',
    location: 'Ireneo Athletics Field, Wau',
    category: 'Cultural',
    description: 'Traditional dance, poetry, drama, and storytelling competition celebrating South Sudanese culture.',
    organizer: 'Cultural Department',
    rsvpCount: 210,
  },
];

export const DEMO_STUDENT_PROFILES: StudentProfile[] = [
  {
    studentId: 'IKC-SS-2024-042',
    fullName: 'Deng Akot Garang',
    grade: 'Primary 8 (P8 - PLE Exam Candidate)',
    classTeacher: 'Mr. Adiama Andrea',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    attendanceRate: 98.8,
    gpa: '4.0 / 4.0',
    feeStatus: {
      totalTermFee: 450000, // South Sudanese Pounds (SSP)
      amountPaid: 350000,
      balance: 100000,
      dueDate: '2026-08-30',
    },
    grades: [
      { subject: 'Mathematics', score: 96, grade: 'A*', remarks: 'Exceptional speed in arithmetic and geometry.' },
      { subject: 'Science & Health', score: 94, grade: 'A*', remarks: 'Top scorer in practical science mock exam.' },
      { subject: 'English Language', score: 88, grade: 'A', remarks: 'Strong essay writing and comprehension.' },
      { subject: 'Social Studies', score: 92, grade: 'A*', remarks: 'Excellent knowledge of South Sudan history.' },
      { subject: 'Christian Religious Ed (CRE)', score: 90, grade: 'A*', remarks: 'Diligent student.' },
      { subject: 'ICT Foundations', score: 95, grade: 'A*', remarks: 'Proficient in computer operations.' },
    ],
    timetable: [
      {
        day: 'Monday',
        slots: [
          { time: '08:00 - 08:45', subject: 'Mathematics', room: 'P8 Room A', teacher: 'Mr. Garang' },
          { time: '08:50 - 09:35', subject: 'Science & Health', room: 'Science Lab', teacher: 'Mrs. Bwalya' },
          { time: '09:40 - 10:25', subject: 'English Language', room: 'P8 Room A', teacher: 'Mr. Deng' },
          { time: '10:50 - 11:35', subject: 'Social Studies', room: 'P8 Room A', teacher: 'Mr. Bol' },
          { time: '11:40 - 12:25', subject: 'ICT Lab', room: 'Solar Computer Lab', teacher: 'Mr. Lual' },
          { time: '14:00 - 16:00', subject: 'Boarding Supervised Prep', room: 'Library', teacher: 'Mr. Bol Arop' },
        ],
      },
    ],
    assignments: [
      { id: 'as1', subject: 'Mathematics', title: 'South Sudan PLE 2024 Past Paper Revision', dueDate: '2026-08-05', status: 'Pending' },
      { id: 'as2', subject: 'Science & Health', title: 'Human Digestive System Diagram', dueDate: '2026-07-28', status: 'Submitted', score: '20 / 20' },
    ],
    notices: [
      { id: 'n1', title: 'P8 South Sudan PLE Registration Deadline', date: '2026-07-20', content: 'Ensure all index registration details are verified at the Headteacher office in Wau.', category: 'Urgent' },
      { id: 'n2', title: 'Boarding Prep Schedule Updated', date: '2026-07-15', content: 'Evening prep for resident pupils runs 19:00 - 21:00 PM daily under solar lighting.', category: 'General' },
    ],
  },
  {
    studentId: 'IKC-SS-2025-108',
    fullName: 'Achan Mary Lual',
    grade: 'Primary 5 (P5 Boarding Student)',
    classTeacher: 'Mrs. Janet Edward',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    attendanceRate: 97.5,
    gpa: '3.85 / 4.0',
    feeStatus: {
      totalTermFee: 650000, // Boarder SSP
      amountPaid: 650000,
      balance: 0,
      dueDate: 'Paid in Full',
    },
    grades: [
      { subject: 'Mathematics', score: 86, grade: 'A', remarks: 'Good progress in multiplication & fractions.' },
      { subject: 'Science & Health', score: 90, grade: 'A*', remarks: 'Active learner in class.' },
      { subject: 'English Language', score: 89, grade: 'A', remarks: 'Loves reading storybooks.' },
      { subject: 'Social Studies', score: 84, grade: 'B+', remarks: 'Good participation.' },
    ],
    timetable: [
      {
        day: 'Monday',
        slots: [
          { time: '08:00 - 08:45', subject: 'English Language', room: 'P5 Room B', teacher: 'Mrs. Nyidier' },
          { time: '08:50 - 09:35', subject: 'Mathematics', room: 'P5 Room B', teacher: 'Mr. Garang' },
          { time: '09:40 - 10:25', subject: 'Science', room: 'P5 Room B', teacher: 'Mrs. Nyidier' },
          { time: '10:50 - 11:35', subject: 'CRE', room: 'P5 Room B', teacher: 'Mr. Deng' },
        ],
      },
    ],
    assignments: [
      { id: 'as10', subject: 'Science', title: 'Sources of Clean Water in Wau Experiment', dueDate: '2026-07-30', status: 'Pending' },
    ],
    notices: [
      { id: 'n10', title: 'Boarding Linen & Laundry Day', date: '2026-07-18', content: 'Weekly laundry collection for girls dormitory is every Saturday morning.', category: 'General' },
    ],
  },
];
