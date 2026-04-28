export const NAV_LINKS = [
  { name: 'Universe', href: '#hero' },
  { name: 'Journey', href: '#about' },
  { name: 'Console', href: '#skills' },
  { name: 'Orbit', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = [
  { name: 'HTML5', level: 90, icon: 'Layout' },
  { name: 'CSS3', level: 90, icon: 'Palette' },
  { name: 'JavaScript', level: 85, icon: 'Code2' },
  { name: 'React.js', level: 82, icon: 'Cpu' },
  { name: 'Tailwind CSS', level: 88, icon: 'Wind' },
  { name: 'Bootstrap', level: 80, icon: 'Container' },
  { name: 'Git', level: 85, icon: 'GitBranch' },
  { name: 'GitHub', level: 88, icon: 'Github' },
  { name: 'Node/Express', level: 75, icon: 'Server' },
{ name: 'MongoDb', level: 80, icon: 'Database' },
{ name: 'Mysql', level: 70, icon: 'Database' },
{ name: 'UI/UX', level: 68, icon: 'Figma' },
];

export const PROJECTS = [
  {
  id: 'job-tracker',
  title: 'JobTrackr',
  description: 'A full-stack job application tracking platform built with React and Node.js. Track every application, manage statuses with filters, view dashboard stats, and get AI-powered resume insights — all secured with JWT access & refresh token authentication.',
  features: [
    'Application CRUD with Status Filters',
    'Dashboard with Stats & Charts',
    'JWT Auth (Access + Refresh Tokens)',
    'AI-powered Resume Insights',
    'Feature-based Architecture (Frontend + Backend)',
  ],
  tech: ['React 18', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  liveUrl: 'https://job-tracker-frontend-three-chi.vercel.app',
  learning: 'Built a production-grade full-stack app with JWT refresh token flow, feature-based monorepo structure, and integrated AI resume analysis on the backend.',
},
 {
  id: 'ecommerce',
  title: 'Bazario — E-commerce Platform',
  description: 'A premium, responsive e-commerce frontend for browsing clothing, accessories, and lifestyle products. Features category/subcategory browsing, advanced filters, wishlist, cart, multi-step checkout, and a full account dashboard — all with route-level code splitting and localStorage persistence.',
  features: [
    'Category & Subcategory Browsing with Advanced Filters',
    'Wishlist & Cart with State Persistence',
    'Multi-step Checkout Flow',
    'Account Dashboard (Orders, Addresses, Profile)',
    'AI-powered Review Summaries',
    'Responsive Design (Mobile, Tablet, Desktop)',
  ],
  tech: ['React 18', 'Vite', 'Tailwind CSS v4', 'Redux Toolkit', 'React Router 6', 'React Hook Form'],
  liveUrl: 'https://ecommerce-website-ebon-nine.vercel.app/',
  learning: 'Implemented feature-based architecture with route-level code splitting, global error boundaries, and scalable Redux state management across complex UI flows.',
},
 
];

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology',
    institution: 'Uttrakhand Technical University Dehradun',
    period: '2020 - 2024',
    status: 'Completed',
    highlights: ['Focus on Web Technologies', 'Relevant Coursework: DS, Algorithms, DBMS'],
  }
];

export const RECRUITER_REASONS = [
  {
  title: 'Frontend Developer - Creative Mindset',
  description: 'Focused on building clean, responsive, and user-friendly web experiences with modern frontend technologies.',
  icon: 'Zap',
},
{
  title: 'Modern Tech Stack',
  description: 'Skilled in React, Tailwind CSS, JavaScript, MongoDB, and modern web development practices.',
  icon: 'Layers',
},
{
  title: 'Fast Learner',
  description: 'Quickly adapts to new tools, workflows, and technologies while continuously improving development skills.',
  icon: 'TrendingUp',
},
{
  title: 'Attention to Detail',
  description: 'Focused on pixel-perfection, smooth performance, and high-quality UX design.',
  icon: 'Eye',
}
];
