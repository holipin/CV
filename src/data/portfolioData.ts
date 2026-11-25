import { PERSONAL_INFO } from './portfolioPersonalInfo';
export { PERSONAL_INFO };

export type {
  SkillItem,
  SkillCategory,
  SkillsHeaderConfig,
} from './portfolioSkillData';
export {
  SKILLS,
  SKILL_CATEGORIES,
  SKILLS_HEADER,
} from './portfolioSkillData';

export type { ExperienceItem, ExperienceSectionConfig, LeadershipPhilosophy } from './portfolioExperienceData';
export { EXPERIENCES, EXPERIENCE_SECTION_CONFIG, LEADERSHIP_PHILOSOPHY } from './portfolioExperienceData';

export type {
  ProjectItem,
  ProjectsHeaderConfig,
  ProjectHeaderStat,
  ProjectMetric,
} from './portfolioProjectData';
export { PROJECTS, PROJECTS_HEADER } from './portfolioProjectData';

export const RESUME_HEADER = {
  badge: 'Verified Credentials & Resume',
  title: 'Executive Resume & Credentials',
  description:
    'Typeset for technical hiring managers, engineering directors. Inspect the verified credentials, architectural career highlights, and complete document profile below.',
  verificationBadge: 'Verified Technical Record',
};

export const RESUME_DATA = {
  name: PERSONAL_INFO.name,
  title: PERSONAL_INFO.role,
  contact: {
    email: PERSONAL_INFO.email,
    phone: PERSONAL_INFO.phone,
    location: PERSONAL_INFO.location,
      portfolio: 'https://holipin.github.io/CV',
      linkedin: 'https://www.linkedin.com/in/ho-li-pin-lee-50573aa3',
      github: 'https://holipin.github.io/CNBible',
  },
  summary: PERSONAL_INFO.bio,
  coreSkills: [
    'IaaS - System Administration: Windows Server, Active Directory, IIS, SQL, Virtualization, Disaster Recovery, PCF',
    'SaaS - Frontend Development: Blazor , MVC , REST APIs, HTML , JavaScript , CSS , Bootstrap , React , Angular',
    'SaaS - Backend & Development: .NET Core, C#, ASP.NET, REST APIs, Python, Blazor, ORM, PowerShell, VBS, ',
    'SaaS - AI: LLM API Integration , Context Injection & Prompt Engineering , Supervised ML Model , AI Pair Programming',
    'SaaS - Unit Test: Xunit , Selenium',
    'PaaS - System Engineering: Wordpress , MS PowerAutomate , Salesforce , SharePoints , MS PowerApp , PowerBI',
    'Design-Pattern: Async, SOLID, DRY, KISS, MVC, Clean Architecture, TDD',
    'DevOps & Operations: GIT , CI/CD Pipeline',
  ],
  education: [
    {
      degree: 'Advanced Diploman in Computer Science / Information Technology',
      institution: 'IPG College (Institut Perkim-Goon)',
      period: '2001 - 2003',
      notes: 'Specialization in Systems Architecture, Database Engineering & Enterprise Software Development',
    },
  ],
  certifications: [
    'Microsoft Certified Solutions Associate (MCSA)®',
    'Microsoft Certified Systems Administrator (MCSA)®',
    'Microsoft Certified Technology Specialist (MCTS)®', 
    'Microsoft Certified Professional (MCP)®',
    'ITIL® Foundation Certified (5825952.20589711)',
  ],
};
