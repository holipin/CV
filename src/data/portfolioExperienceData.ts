import { PERSONAL_INFO } from './portfolioPersonalInfo';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Hybrid' | 'Remote';
  period: string;
  current?: boolean;
  summary: string;
  keyDeliverables: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface LeadershipPhilosophy {
  title: string;
  description: string;
}

export interface ExperienceSectionConfig {
  badge: string;
  heading: string;
  description: string;
  leadershipPhilosophy: LeadershipPhilosophy;
}

export const LEADERSHIP_PHILOSOPHY: LeadershipPhilosophy = {
  title: 'Philosophy',
  description:
    'Less is more , minimal complexity, susitainable code base ',
};

export const EXPERIENCE_SECTION_CONFIG: ExperienceSectionConfig = {
  badge: 'Proven Track Record',
  heading: 'Working Experience',
  description:
    `${PERSONAL_INFO.yearsOfExperience} years on IT domain . Experience on design holistic optimized solution . Drive Project execution, Software code RnD. `,
  leadershipPhilosophy: LEADERSHIP_PHILOSOPHY,
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Staff Software Engineer',
    company: 'Lumileds',
    companyUrl: 'https://lumileds.com/',
    location: 'Penang, Malaysia LED Factory (Hybrid)',
    type: 'Full-time',
    period: '2024 April - Present',
    current: true,
    summary:
      'Technical Lead, experience on design holistic optimized solution . Drive and deliver projects , Software code RnD',
    keyDeliverables: [
      'Operational Cost Reduction',
      'Internal Product Delivery',
      'Architecture Modernization & Technical Debt Reduction',
      'Infrastructure & Database Optimization',
    ],
    metrics: [
      { label: 'Application Speed Improvement', value: '100.7x' },
      { label: 'DB Total Storage Saved', value: '11.5 TB' },
      { label: 'DB IO Reduction', value: '89.46%' },
      { label: 'Line of Code reduction', value: '78.2%' },
    ],
    technologies: [
      '.NET C#',
      'SQL Database',
      'AI Engineering',
      'Process Optimization',
      'SOLID Priciple',
      'DRY.KISS.YAGNI',
      'Enterpise Security Management',
    ],
  },
  {
    id: 'exp-2',
    role: 'Principal Software Engineer',
    company: 'Dell Technologies',
    companyUrl: 'https://www.dell.com',
    location: 'Penang, MY (Hybrid)',
    type: 'Full-time',
    period: '2011 Aug - 2024 April (12 yrs 9 Months)',
    current: false,
    summary:
      'Fullstack developer , Focus on .Net Core , C# MVC , CICD GIT , Web App , Scripting , Vulnerabilities fixes , Workflow Automation Developement . Used PaaS to develope system as well',
    keyDeliverables: [
      'Ticketing System , Knowledge Management System , Training Onboarding System , JET , SPCOM...',
      'Innovate and automate business process with Microsoft SharePoint , workflow , SQL , .Net C# and PowerShell to achieve the ultimate goal of Process digitalization .',
      'Manage Dell Web System and SharePoint\Salesforce system that use by internal staff',
    ],
    metrics: [
      { label: 'Process cycle time', value: '14x Faster' },
      { label: 'SonarQube code rank ', value: 'AAAA' },
      { label: 'CICD Score', value: '100%' },
      { label: 'Application life', value: '> 10 years' },
    ],
    technologies: [
      '.NET C# , VB',
      'BATScript',
      'SharePoint',
      'Salesforce',
      'Design Thinking',
      'DevOps CICD',
      'API Intergration',
      'PaaS',
      'System Administration',
    ],
  },
  {
    id: 'exp-3',
    role: 'Frontend Software Engineer',
    company: 'Vanguard Media & Systems',
    companyUrl: 'https://example.com',
    location: 'Austin, TX',
    type: 'Full-time',
    period: '2016 - 2019 (3 yrs)',
    current: false,
    summary:
      'Key contributor to customer-facing web applications, content delivery portals, and digital subscription checkout workflows reaching over 2.4 million monthly active readers.',
    keyDeliverables: [
      'Modernized legacy AngularJS 1.5 codebase into Angular 6+ and TypeScript, improving page load responsiveness by 65%.',
      'Developed responsive multi-currency checkout funnel integrated with Stripe Elements and reactive form validation, driving a +14% lift in subscription conversions.',
      'Implemented internationalization (i18n) across 8 global locales and automated localized SEO metadata generation.',
      'Collaborated with UX research teams to conduct A/B tests and build high-fidelity interactive prototypes.',
    ],
    metrics: [
      { label: 'Page Load Speed', value: '+65%' },
      { label: 'Checkout Conversion', value: '+14%' },
      { label: 'Monthly Readers', value: '2.4M' },
      { label: 'Locales Supported', value: '8 Languages' },
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'SCSS',
      'REST APIs',
      'Stripe API',
      'Karma/Jasmine',
      'Webpack',
    ],
  },
];
