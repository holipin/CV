export type SkillCategory = 'SaaS' | 'IaaS' | 'PaaS' | 'testing-devops' | 'Design-Pattern';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: number; // 1 to 100
  years: number;
  featured?: boolean;
  description: string;
  tags: string[];
}

export interface SkillsHeaderConfig {
  badge: string;
  title: string;
  description: string;
}

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Competencies' },
  { id: 'SaaS', label: 'SaaS' },
  { id: 'IaaS', label: 'IaaS' },
  { id: 'PaaS', label: 'PaaS' },
  { id: 'testing-devops', label: 'DevOps & Operations' },
  { id: 'Design-Pattern', label: 'Design-Pattern' },
] as const;

export const SKILLS_HEADER: SkillsHeaderConfig = {
  badge: 'Core Competencies & Technical Mastery',
  title: 'Fullstack & Systems Architecture Expertise',
  description: 'Specialized in scalable enterprise web architectures, .NET Core backends, SQL optimization, IaaS infrastructure, and AI-assisted automation.',
};

export const SKILLS: SkillItem[] = [
  // IaaS - System Administration & Infrastructure
  {
    name: 'Windows Server & Active Directory',
    category: 'IaaS',
    level: 96,
    years: 16,
    featured: true,
    description: 'Enterprise server administration, Active Directory domain governance, Group Policies (GPO), and Windows identity security.',
    tags: ['Windows Server', 'Active Directory', 'GPO', 'DNS/DHCP', 'Security' ,'File Server'],
  },
  {
    name: 'IIS Web Server & Hosting',
    category: 'IaaS',
    level: 95,
    years: 14,
    featured: true,
    description: 'Configuring, tuning, and securing enterprise IIS application pools, SSL/TLS certificates, reverse proxies, and URL rewrites.',
    tags: ['IIS', 'App Pools', 'SSL/TLS', 'URL Rewrite'],
  },
  {
    name: 'Virtualization',
    category: 'IaaS',
    level: 94,
    years: 14,
    featured: true,
    description: 'Hypervisor provisioning, virtual machine orchestration, high-availability failover clusters, and enterprise hardware consolidation.',
    tags: ['Virtualization', 'VMware', 'Hyper-V', 'High Availability', 'Failover Cluster'],
  },
  {
    name: 'Disaster Recovery',
    category: 'IaaS',
    level: 95,
    years: 14,
    featured: true,
    description: 'Robust business continuity planning, automated snapshot schedules, bare-metal image restoration, and volume shadow copy policies.',
    tags: ['Acronis', 'Script Backup', 'Volume Shadow Copy', 'File Versioning', 'Image Backup & Restore'],
  },
  {
    name: 'Pivotal Cloud Foundry (PCF)',
    category: 'IaaS',
    level: 90,
    years: 6,
    featured: false,
    description: 'Cloud platform runtime operations, container scaling, buildpack management, and enterprise app lifecycle orchestration.',
    tags: ['PCF', 'Cloud Foundry', 'Microservices', 'Platform Ops'],
  },
  {
    name: 'SQL Database Administration',
    category: 'IaaS',
    level: 95,
    years: 16,
    featured: true,
    description: 'Database storage management, index rationalization, query plan tuning, and buffer pool optimization reclaiming terabytes of storage.',
    tags: ['SQL Server', 'Execution Plan', 'Index Tuning', 'Buffer Pool', 'TSQL'],
  },

  // SaaS - Backend & Scripting Development
  {
    name: '.NET Core, C# & ASP.NET',
    category: 'SaaS',
    level: 97,
    years: 12,
    featured: true,
    description: 'Architecting robust enterprise solutions, high-throughput REST APIs, asynchronous processing, and clean domain services.',
    tags: ['.NET Core', 'C#', 'ASP.NET', 'REST APIs', 'Async/Await', 'Swagger'],
  },
  {
    name: 'Scripting',
    category: 'SaaS',
    level: 93,
    years: 15,
    featured: true,
    description: 'Automating mission-critical workflows, systems monitoring, ETL scripts, and refactoring sprawling legacy script libraries.',
    tags: ['PowerShell', 'VBScript', 'BAT', 'TSQL', 'YAML', 'APEX'],
  },
  {
    name: 'ORM & Data Access Patterns',
    category: 'SaaS',
    level: 94,
    years: 12,
    featured: false,
    description: 'High-performance micro-ORMs like Dapper and Entity Framework, eliminating N+1 queries and enforcing transactional consistency.',
    tags: ['Dapper', 'ORM', 'Data Layer', 'Transaction Mgmt', 'Repository Pattern'],
  },

  // SaaS - Frontend Development
  {
    name: 'Blazor & ASP.NET MVC',
    category: 'SaaS',
    level: 95,
    years: 8,
    featured: true,
    description: 'Interactive server & webassembly Blazor components, MVC architectures, Razor syntax, and seamless C# fullstack integration.',
    tags: ['Blazor', 'ASP.NET MVC', 'Razor Components', 'Interactive UI', 'C# Fullstack'],
  },
  {
    name: 'Modern Web: HTML, JS, CSS & Bootstrap',
    category: 'SaaS',
    level: 96,
    years: 16,
    featured: false,
    description: 'Modern responsive web layouts, custom Bootstrap component styling, clean DOM manipulation, and cross-browser resilience.',
    tags: ['HTML5', 'JavaScript', 'CSS3', 'Bootstrap', 'Responsive Design'],
  },
  {
    name: 'React & Angular Ecosystem',
    category: 'SaaS',
    level: 65,
    years: 2,
    featured: false,
    description: 'Single-page application frontends, component lifecycle, reactive state management, and modern REST API consuming clients.',
    tags: ['React', 'Angular', 'SPA', 'State Management', 'REST Integration'],
  },

  // SaaS - AI & Machine Learning
  {
    name: 'AI & Machine Learning',
    category: 'SaaS',
    level: 94,
    years: 3,
    featured: true,
    description: 'Integrating Gemini 2.5 and LLM APIs for automated performance diagnostics, capacity planning, and intelligent triage pipelines.',
    tags: ['Vibe Coding', 'LLM API', 'Google AI Studio', 'Predictive Analysis', 'AI Prompts'],
  },
  {
    name: 'Supervised Training & Telemetry Models',
    category: 'SaaS',
    level: 91,
    years: 4,
    featured: false,
    description: 'Developing supervised training models over multi-dimensional server telemetry (CPU, RAM, Storage, IO) for predictive alerting.',
    tags: ['ML.NET', 'Supervised Training', 'Telemetry Analytics', 'Pattern Recognition'],
  },

  // PaaS - System Engineering & Platforms
  {
    name: 'MS PowerAutomate & Power Apps',
    category: 'PaaS',
    level: 94,
    years: 6,
    featured: true,
    description: 'Building agile enterprise workflows, automated business approval pipelines, and low-code applications connected to enterprise data.',
    tags: ['PowerAutomate', 'MS Power Apps', 'Workflow Automation', 'Connector APIs'],
  },
  {
    name: 'PowerBI',
    category: 'PaaS',
    level: 89,
    years: 3,
    featured: true,
    description: 'Enterprise data visualization, interactive business intelligence dashboards, DAX calculations, data modeling, and automated report pipelines.',
    tags: ['Enterprise Geteway', 'Data Modeling', 'Dashboards', 'Business Intelligence'],
  },
  {
    name: 'SharePoint & Salesforce Platforms',
    category: 'PaaS',
    level: 90,
    years: 8,
    featured: false,
    description: 'Enterprise portals, collaborative document systems, and CRM integrations, bridging business stakeholders with automated tools.',
    tags: ['SharePoint', 'Salesforce', 'CRM', 'Document Mgmt', 'Enterprise Portals'],
  },
  {
    name: 'WordPress CMS Engineering',
    category: 'PaaS',
    level: 92,
    years: 10,
    featured: false,
    description: 'Custom CMS architecture, theme and plugin customization, database optimizations, and secure multi-site installations.',
    tags: ['WordPress', 'CMS', 'PHP', 'Cpanel', 'MySQL'],
  },

  // Design-Pattern & Architecture
  {
    name: 'Clean Code Engineering',
    category: 'Design-Pattern',
    level: 98,
    years: 16,
    featured: true,
    description: 'Institutionalizing developer guidelines, strict object-oriented principles, modularity, and drastic reduction of code debt.',
    tags: ['SOLID', 'DRY', 'KISS', 'OOP', 'MVC', 'Refactoring', 'Domain Layer'],
  },
  {
    name: 'High Performance Services',
    category: 'Design-Pattern',
    level: 96,
    years: 14,
    featured: true,
    description: 'Optimizing underlying technology stack across databases, application code, and algorithms to maximize throughput and scale system performance.',
    tags: ['DB index', 'Caching', 'Batching', 'Message Queue', 'Algorithm optimization', 'Split Read Write'],
  },
  {
    name: 'Asynchronous Programming & Concurrency',
    category: 'Design-Pattern',
    level: 97,
    years: 12,
    featured: true,
    description: 'Eliminating synchronous bottlenecks with Async/Await, Task Parallelism, multithreading, and non-blocking I/O pipelines.',
    tags: ['Async/Await', 'Concurrency', 'Multithreading', 'Task Parallelism', 'Non-blocking I/O'],
  },

  // DevOps & Operations / Testing
  {
    name: 'Automatation Testing',
    category: 'testing-devops',
    level: 93,
    years: 10,
    featured: true,
    description: 'Automated test-driven pipelines, unit testing suites with xUnit, and automated browser end-to-end testing with Selenium.',
    tags: ['xUnit', 'Selenium', 'Unit Testing', 'MS Test', 'SonarQube'],
  },
  {
    name: 'Git & CI/CD Release Pipelines',
    category: 'testing-devops',
    level: 94,
    years: 10,
    featured: true,
    description: 'Source code management, multi-branch release workflows, and automated continuous integration/deployment pipeline execution.',
    tags: ['GIT', 'CI/CD Pipeline', 'YAML', 'Agile Release Strategy'],
  },
];
