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
    role: 'Senior Server Engineer',
    company: 'Neuvos OY & Western Digital',
    companyUrl: 'https://www.westerndigital.com',
    location: 'Penang, MY (Onsite)',
    type: 'Full-time',
    period: 'Jul 2006 - Jul 2011 (5 yrs)',
    current: false,
    summary:
      'Specialized in managing Windows Active Directory domains, mixed Windows/Linux servers, virtualization, disaster recovery, and large-scale IT process automation.',
    keyDeliverables: [
      'Production Automation: Built 50+ combined automation scripts and solutions across both roles to sustain production operations',
      'Disaster Recovery: Executed a complex Active Directory disaster recovery for an external service-contract client at Neuvos Oy.',
      'IT Process Optimization: Streamlined Daily Operation workflows, specifically improving security patching , backup Process Management and Event logging Transcations.',
      'Enterprise Infrastructure: Managed Windows (NT through 2008R2) and Linux environments, leading server consolidation, migration, virtualization, and core services (SQL, SharePoint, Exchange, Hyper-V).',
    ],
    metrics: [
      { label: 'Process Improvement', value: 'Patches Management , Server Inventory and Ops' },
      { label: 'Automation Built', value: '50+ Scripts & Solutions' },
      { label: 'Disaster Recovery', value: 'Active Directory , File Server' },
      { label: 'Server OS Coverage', value: 'NT to 2008R2 & Linux' },
    ],
    technologies: [
      'Windows Server',
      'Active Directory',
      'Hyper-V & Virtualization',
      'SQL, SharePoint & Exchange',
      'DNS, DHCP, IIS & Terminal Services',
      'Script Automation',
      'WSUS, WDS & Enterprise Backup',
      'VB .NET',
    ],
  },
];
