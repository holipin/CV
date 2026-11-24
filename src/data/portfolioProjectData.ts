export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'WD' | 'Dell' | 'LLM' | 'Public' | 'Private' | string;
  deliveryTimeline: string;
  clientOrRole: string;
  description: string;
  challenges: string[];
  solutions: string[];
  metrics: ProjectMetric[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  architectureHighlights: string[];
}

export interface ProjectHeaderStat {
  value: string;
  label: string;
  color?: string;
}

export interface ProjectsHeaderConfig {
  badge: string;
  title: string;
  description: string;
  stats: ProjectHeaderStat[];
}

export const PROJECTS_HEADER: ProjectsHeaderConfig = {
  badge: 'Shipped Production Systems',
  title: 'Projects Delivery Showcase',
  description:
    'Real-world enterprise platforms, open-source reactive engines, and high-frequency trading cockpits delivered on schedule with measurable business impact.',
  stats: [
    { value: '24+', label: 'Total Deployments', color: 'text-rose-400' },
    { value: '100%', label: 'On-Time Delivery', color: 'text-emerald-400' },
    { value: '99.9%', label: 'SLA Uptime', color: 'text-sky-400' },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-mapops',
    title: 'FTP_MapOps Modernization',
    subtitle:
      '21 Legacy FTP Services ( WinSCP , Bat , Ps1 , Perl , .NetFramework ) refactored as single MultiThreading Solution with robust exception handler',
    category: 'LLM',
    deliveryTimeline: '2024 Dec - 2026 Nov',
    clientOrRole: 'Systems Architect & Fullstack Lead',
    featured: true,
    description:
      'Refactor 21 legacy services into a single .NET Core framework across 35++ change releases. Massive efficiency gains in maintenance overhead, achieving a 98.9x execution speed increase and 78.2% line-of-code reduction.',
    challenges: [
      'Managing operational risk while migrating 21 actively running legacy services without service disruption.',
      'Bloated codebase with redundant logic, divergent frameworks, and high maintenance overhead.',
      'Slow execution bottlenecks , Unstable network tunnel hindering FTP e-MAPs Operations.',
    ],
    solutions: [
      'Consolidated all 21 legacy services into a unified .NET Core solution following SOLID principles and clean architecture.',
      'Executed a phased migration strategy across 35++ change releases.',
      'Re-engineered data execution pipelines with Async , include with exception handlers , Logs features ,unti test to form a robust enterprise services.',
    ],
    metrics: [
      { label: 'Speed Boost', value: '98.9x Faster' },
      { label: 'Code Reduction', value: '78.2%' },
      { label: 'Services Unified', value: '21 FTP Services' },
      { label: 'Releases Delivered', value: '35++ Change' },
    ],
    technologies: ['.NET Core', 'C#', 'SSH.NET', 'SQL Server', 'Dapper', 'Xunit', 'PuTTy'],
    architectureHighlights: [
      '21 legacy services consolidated into a single maintainable .NET Core framework',
      '78.2% reduction in line-of-code footprint cutting maintenance debt',
      '98.9x execution speed acceleration across critical data workflows',
    ],
  },
  {
    id: 'proj-serverbuddy',
    title: 'ServerBuddy (Gemini 3.5)',
    subtitle: 'AI-Driven Performance Troubleshooting & Automated Capacity Planning',
    category: 'LLM',
    deliveryTimeline: '2024 Dec - 2025 Jun',
    clientOrRole: 'Lead Architect & AI Solutions Engineer',
    featured: true,
    description:
      'Server health care system , integrated AI to automate capacity planning. Drastically reduced manual engineering hours for performance troubleshooting processes while tracking real-time CPU, RAM, Storage, and IO metrics.',
    challenges: [
      'Hundreds of manual engineering hours consumed investigating complex multi-server performance incidents.',
      'Lack of predictive forecasting leading to reactive hardware escalations and resource contention.',
      'Devs was blind of (CPU, RAM, Storage, IO) matrix and health pattern where cause not able effetive identified performance culprits.',
    ],
    solutions: [
      'Automated WMI matrix collection to form Server Health matrix where signifincatly reduce performance root-cause analysis cost.',
      'Integrated Gemini 3.5 LLM for capacity planning to propose upgrade direction based on history WMI matrix.',
      'Created automated diagnostic summaries that drastically slash manual engineering troubleshooting overhead.',
    ],
    metrics: [
      { label: 'AI Model', value: 'Gemini 3.5' },
      { label: 'Manual Triage', value: 'Drastically Slashed' },
      { label: 'Matrix Tracked', value: 'CPU, RAM, Storage, IO' },
      { label: 'Capacity Planning', value: 'AI Predictive' },
    ],
    technologies: ['AI Agent', 'WMI', '.NET Core', 'Blazor', 'Chart.js', 'API'],
    architectureHighlights: [
      'Automated Gemini 3.5 performance troubleshooting pipeline',
      'Turn RAW (CPU, RAM, Storage, IO) WMI matrix to easy digest Chart or Graph Pattern',
      'Intelligent CAPEX forecasting eliminating server over or under upgrade',
    ],
  },
  {
    id: 'proj-blucopy',
    title: 'BluCopy Refactor',
    subtitle: '514 Legacy BAT Scripts Consolidated into Unified .NET Core',
    category: 'LLM',
    deliveryTimeline: '2024 May',
    clientOrRole: 'Lead Architect & Developer',
    featured: true,
    description:
      'Consolidated 514 legacy scripts into a unified .NET Core solution. Achieved a 99.6% reduction in code volume and a 9.6x performance boost while enforcing strict SOLID and DRY engineering standards.',
    challenges: [
      '514 disconnected legacy scripts creating extreme operational fragility and maintenance overhead.',
      'Frequent execution failures, inconsistent parameter handling, and absent centralized logging.',
      'Sluggish script runtime severely impeding automated business workflows.',
    ],
    solutions: [
      'Consolidated common routines across all 514 scripts into reusable, modular .NET Core domain libraries.',
      'Implemented clean OOP architecture with standardized error handling and execution validation.',
      'Refactored data movement pipelines to achieve an immediate 9.6x performance acceleration.',
    ],
    metrics: [
      { label: 'Speed Boost', value: '9.6x Faster' },
      { label: 'Code Reduction', value: '99.6%' },
      { label: 'Scripts Unified', value: '514 scripts to 1 .NET sln' },
      { label: 'Framework', value: '.NET Core' },
    ],
    technologies: ['.NET Core', 'C#', 'Script Modernization', 'SOLID & DRY', 'Unit Testing'],
    architectureHighlights: [
      'Consolidated 514 disparate scripts into a single unified .NET Core solution',
      '99.6% reduction in code volume eliminating technical and documentation debt',
      '9.6x runtime performance acceleration across operations',
    ],
  },
  {
    id: 'proj-sql-efficiency',
    title: 'SQL Database Optimization',
    subtitle: '~12.0 TB Storage Reclaimed & 30-60% Database Resource Savings',
    category: 'LLM',
    deliveryTimeline: '2025 March - 2025 Dec',
    clientOrRole: 'Database Admin , Project Manager , Developer',
    featured: true,
    description:
      'Fixed expensive queries and refactored legacy code. Rationalized index setup to optimize memory and storage footprint, reclaiming ~12.0 TB of storage and delaying high-value hardware CAPEX.',
    challenges: [
      'Runaway database storage expansion threatening server limits and prompting imminent, costly hardware CAPEX requests.',
      'Unoptimized legacy query patterns consuming 99%+ Disc IO and saturating memory buffer pools.',
      'Over ~200 duplicate or low usage index degrading transactional response times.',
    ],
    solutions: [
      'Audited and rationalized ~200 SQL indexes, removing redundant indexes and introducing targeted covering indexes.',
      'Refactored ineffeitve TSQL to eliminate table scans and blocking locks.',
      'Implemented automated Data maintainence scripts , freeing ~12.0 TB across VM and SQL storage tiers.',
    ],
    metrics: [
      { label: 'Storage Reclaimed', value: '~12.0 TB' },
      { label: 'Page Memeory Saved', value: '30% - 60%' },
      { label: 'Indexes Optimized', value: '~200 Indexes' },
      { label: 'TSQL Cost', value: 'Avg 95% reduction' },
    ],
    technologies: ['SQL', 'Query Tuning', 'Index Rationalization', 'Performance Analysis', 'Scripting'],
    architectureHighlights: [
      '~12.0 TB storage reclaimed across VM and SQL environments',
      '30% to 60% resource savings across Disk IO and memory pools',
      'Successfully delayed high-value hardware CAPEX expenses',
    ],
  },
  {
    id: 'proj-operational-stabilization',
    title: 'Operational Stabilization',
    subtitle: '100++ Production Releases Eliminating Support Bleeding Costs',
    category: 'LLM',
    deliveryTimeline: '100++ Change Releases Delivered',
    clientOrRole: 'Lead Architect & Developer',
    featured: false,
    description:
      'Executed 100++ total production releases across Barcode Apps, DF2 API, BluCopy and other Apps. Refined error handling and operational workflows to completely eliminate ongoing support bleeding costs.',
    challenges: [
      'Recurring "support bleeding" costs consuming valuable engineering bandwidth on repetitive tickets.',
      'Fragile error handling in legacy Barcode and DF2 API services leading to manual operational interventions.',
      'Unstandardized release procedures introducing variability across application updates.',
    ],
    solutions: [
      'Audited failure modes and embedded comprehensive defensive programming with automated self-healing retries.',
      'Standardized deployment lifecycles, completing 26 zero-defect production releases.',
      'Eliminated root causes of frequent operational exceptions, bringing support ticket volume to near zero.',
    ],
    metrics: [
      { label: 'Total Releases', value: '100++ Deployed' },
      { label: 'Support Costs', value: 'Bleeding Killed' },
      { label: 'Core Apps', value: 'Barcode, DF2, BluCopy, FTPMapOps, ServerBuddy,GIT CICI and more' },
      { label: 'Process Debt', value: 'Remediated' },
    ],
    technologies: ['.NET Core', 'C#', 'Unit Test', 'MVC', 'GIT', 'SOLID & OOP'],
    architectureHighlights: [
      '100++ total verified change releases delivered smoothly to production',
      'Permanent elimination of reactive support bleeding expenditures',
      'Robust error handling and resilient automated workflows',
    ],
  },
  {
    id: 'proj-governance-systems',
    title: 'ITIL V4 (WikiCenter, SCM & Kanban)',
    subtitle: 'Task Management , Knowledge Management & Coding Standards',
    category: 'LLM',
    deliveryTimeline: '2024 April - 2024 Jun',
    clientOrRole: 'Systems Architect & Tech Lead',
    featured: false,
    description:
      'Deployed WikiCenter (KM), SCM (Service Catalog), and Kanban with Data Sync to unify global task and reporting visibility. Formalized Developer Guidelines adopting SOLID, DRY, KISS, MVC, Unit Testing, and ORM best practices.',
    challenges: [
      'Lack of centralized global task visibility and fragmented reporting across international stakeholders.',
      'Absence of unified developer standards, leading to inconsistent code quality and technical debt accumulation.',
      'Scattered knowledge assets hindering onboarding and collaborative incident resolution.',
    ],
    solutions: [
      'Deployed WikiCenter (KMS), SCM (Service Catalog), and Kanban to manage KBs , Tasks , IT Asset & Service Objects .',
      'Authored and enforced comprehensive Developer Guidelines embedding SOLID, DRY, KISS, and MVC paradigms.',
      'Mandated automated Unit Testing and ORM architectural best practices across development pipelines.',
    ],
    metrics: [
      { label: 'Daily Workflow', value: 'Optimized' },
      { label: 'Systems Deployed', value: 'WikiCenter, SCM, Kanban' },
      { label: 'Standards Adopted', value: 'SOLID, DRY, KISS, MVC' },
      { label: 'Technical Debt', value: 'Remediated' },
    ],
    technologies: ['ITIL V4', 'Developer Guide Line', 'Design Pattern'],
    architectureHighlights: [
      'Unified global task tracking and executive reporting with live Data Sync',
      'Comprehensive Developer Guidelines adopting SOLID, DRY, KISS, and Best pratices',
      'Remediated long-term security, maintainability, and process-cost technical debt',
    ],
  },
  {
    id: 'proj-dell-calendar-center',
    title: 'Calendar Center',
    subtitle: 'Centralized Out-of-Office (OOO) Management & Automated Outlook Sync',
    category: 'Dell',
    deliveryTimeline: '2011 - 2021 (11 yrs)',
    clientOrRole: 'Senior Solutions Engineer & SharePoint Specialist',
    featured: true,
    description:
      'Centralized enterprise Out-of-Office (OOO) event management portal eliminating email inbox flood and scheduling confusion across Dell teams, featuring automated synchronization into Microsoft Outlook calendars.',
    challenges: [
      'Disjointed OOO announcements clogging inboxes with massive "email storms" across multi-team distribution lists.',
      'Lack of a single source of truth for shift, coverage, and leave scheduling across global support teams.',
      'Manual calendar invites prone to human error, missed notifications, and synchronization delays.',
    ],
    solutions: [
      'Architected a centralized SharePoint & O365 leave registry with automated Outlook calendar synchronization.',
      'Implemented event workflows to automatically push schedule updates to team calendars without spamming mailboxes.',
      'Enabled dynamic filtering and real-time team availability views for regional managers and dispatchers.',
    ],
    metrics: [
      { label: 'Inbox Clutter', value: '100% Spam Killed' },
      { label: 'Active Service', value: '10 Years Stable' },
      { label: 'Sync Mechanism', value: 'Automated Outlook' },
      { label: 'Adoption', value: 'Dell Global Teams' },
    ],
    technologies: ['SharePoint', 'SharePoint Workflow', 'JavaScript'],
    architectureHighlights: [
      'Replaced company-wide OOO reply-all email floods with centralized calendar registry',
      'Automated bi-directional sync directly with Microsoft Outlook calendars',
      'Sustained continuous mission-critical production service for over a decade',
    ],
  },
  {
    id: 'proj-dell-request-center',
    title: 'Request Center',
    subtitle: 'Global Request Orchestration & Multi-Tier Approval Workflow Engine',
    category: 'Dell',
    deliveryTimeline: '2011 - 2018 (8 yrs)',
    clientOrRole: 'Systems Architect & Workflow Developer',
    featured: true,
    description:
      'Enterprise task management and service request portal supporting multi-tier approval workflows, SLA tracking, automated email alerts, and executive reporting utilized by Dell\'s global operations.',
    challenges: [
      'Fragmented ad-hoc service requests lost in personal inboxes without audit trails or SLA tracking.',
      'Inconsistent approval hierarchies across disparate international departments and stakeholders.',
      'Inability to generate real-time metrics on operational turnaround time or team workload bottlenecks.',
    ],
    solutions: [
      'Built custom multi-tier approval routing using SharePoint Workflows and JavaScript client-side validations.',
      'Automated dynamic email alerting based on role status transitions and SLA deadline triggers.',
      'Created centralized reporting dashboards with custom views and export capabilities for management reviews.',
    ],
    metrics: [
      { label: 'User Base', value: 'Global Dell Ops' },
      { label: 'SLA Tracking', value: 'Automated Alerts' },
      { label: 'Approvals', value: 'Multi-Tier Engine' },
      { label: 'Lifespan', value: '7+ Years Active' },
    ],
    technologies: ['SharePoint', 'SharePoint Designer', 'SharePoint Workflow', 'JavaScript'],
    architectureHighlights: [
      'Designed multi-tier automated approval workflows with strict audit trails',
      'Eliminated manual request tracking with SLA monitoring and dynamic alert notifications',
      'Standardized request lifecycles across diverse global operational teams',
    ],
  },
  {
    id: 'proj-dell-training-center',
    title: 'Training Center',
    subtitle: 'Centralized Global Training Operations & Learning Material Repository',
    category: 'Dell',
    deliveryTimeline: '2011 - 2018 (8 yrs)',
    clientOrRole: 'Tech Lead & SharePoint Developer',
    featured: false,
    description:
      'Centralized learning management repository and curriculum workflow system managing training materials, compliance tracking, and course completions across worldwide Dell teams.',
    challenges: [
      'Scattered training collateral and outdated docs across shared network drives and disparate team sites.',
      'Manual tracking of team certification statuses, new hire onboarding progress, and recurring compliance deadlines.',
      'Inefficient training distribution and fragmented curriculum delivery across distributed international teams.',
    ],
    solutions: [
      'Developed a unified learning hub with indexed course materials, role-based access, and structured curricula.',
      'Automated training completion notifications, manager sign-offs, and compliance verification workflows.',
      'Streamlined new-hire onboarding checklists with interactive progress trackers and completion status reports.',
    ],
    metrics: [
      { label: 'Content Hub', value: 'Unified Repository' },
      { label: 'Compliance', value: 'Automated Tracking' },
      { label: 'Reach', value: 'Global Cross-Regional' },
      { label: 'Access', value: 'Version-Controlled' },
    ],
    technologies: ['SharePoint', 'SharePoint Workflow', 'JavaScript'],
    architectureHighlights: [
      'Centralized global training materials with version-controlled documentation',
      'Automated progress tracking and completion sign-off notifications',
      'Standardized onboarding and continuous learning pathways for global engineers',
    ],
  },
  {
    id: 'proj-dell-wiki-center',
    title: 'Wiki Center',
    subtitle: 'Cross-Departmental Knowledge Base & Collaborative Documentation Portal',
    category: 'Dell',
    deliveryTimeline: '2011 - 2024 (14 yrs)',
    clientOrRole: 'Tech Lead & SharePoint Developer',
    featured: false,
    description:
      'Enterprise-wide knowledge management repository centralizing standard operating procedures (SOPs), troubleshooting guides, and technical wikis across cross-functional departments globally.',
    challenges: [
      'Siloed technical knowledge leading to redundant troubleshooting efforts and prolonged incident resolution times.',
      'Inconsistent formatting, obsolete documentation, and lack of content ownership governance.',
      'Difficult discovery of critical operational procedures during high-severity off-hours outages.',
    ],
    solutions: [
      'Deployed structured SharePoint wiki engine with taxonomies, fast search indexes, and department permissions.',
      'Instituted content review workflows prompting subject matter experts to re-verify technical articles periodically.',
      'Embedded rich media formatting, interactive tables, and quick-link directory structures for operational teams.',
    ],
    metrics: [
      { label: 'Search Speed', value: 'Instant KB Discovery' },
      { label: 'Silos Broken', value: 'Cross-Department' },
      { label: 'Collaboration', value: 'Global Operational' },
      { label: 'Useability', value: 'Automated Version Control' },
    ],
    technologies: ['SharePoint', 'SharePoint Designer', 'SharePoint Workflow', 'JavaScript'],
    architectureHighlights: [
      'Unified fragmented team documentation into a searchable global knowledge repository',
      'Automated document verification workflows to ensure up-to-date operational procedures',
      'Accelerated cross-team troubleshooting and onboarding efficiency',
    ],
  },
  {
    id: 'proj-dell-jet',
    title: 'JET (Just Everything Tool)',
    subtitle: 'Unified Enterprise Operations Suite: Transactions, Tasks, KM, Live Chat & BI',
    category: 'Dell',
    deliveryTimeline: '2018 - 2021 (3 yrs)',
    clientOrRole: 'Fullstack Architect & Salesforce Developer',
    featured: true,
    description:
      'Comprehensive enterprise operations suite consolidating critical business functions—including Transaction Management, Task Orchestration, Knowledge Management, Training Lifecycles, Live Chat, and Executive BI Dashboards.',
    challenges: [
      'Context switching across 5+ disjointed operational tools causing severe workflow fatigue and data fragmentation.',
      'Lack of synchronization between Salesforce CRM records and internal various SharePoint systems.',
      'Delayed executive visibility into real-time transactional volumes and operational throughput.',
    ],
    solutions: [
      'Architected a cohesive fullstack platform integrating .NET microservices with Salesforce via REST APIs and APEX triggers.',
      'Migrate and rebuilt every missing SharePoint system features from scratch using new tech stack.',
      'Integrated high-performance BI reporting dashboards aggregating live KPIs, task turnaround times, and team capacity.',
    ],
    metrics: [
      { label: 'Tool Consolidation', value: '5+ Tools in 1' },
      { label: 'Architecture', value: '.NET + Salesforce' },
      { label: 'Sync Pipeline', value: 'Real-Time REST APIs' },
      { label: 'Core Features', value: 'Live Chat, BI, Tasks' },
    ],
    technologies: ['.NET', 'Salesforce', 'APEX', 'REST API', 'JavaScript', 'SQL Server'],
    architectureHighlights: [
      'Unified Transaction, Task, Knowledge, and Training lifecycles into a single command center',
      'Deep two-way integration between .NET backend services and Salesforce CRM via APEX & REST APIs',
      'Embedded live chat and interactive BI telemetry dashboards for real-time operational transparency',
    ],
  },
  {
    id: 'proj-dell-qhc-r2',
    title: 'QHC R2 (Qfinity Health Checker R2)',
    subtitle: 'Integrated System Health Telemetry & Automated Diagnostic Reporting Engine',
    category: 'Dell',
    deliveryTimeline: '2022 - 2024 (3 yrs)',
    clientOrRole: '.NET Developer',
    featured: false,
    description:
      'Automated health-monitoring diagnostic tool that probes connected enterprise integration systems, calculates health aggregates, and generates executive diagnostic reports with lightning-fast search and export functionality.',
    challenges: [
      'Silent integration failures between upstream and downstream enterprise services remaining undetected until user escalation.',
      'Tedious manual health verification processes across distributed servers consuming senior engineers\' time daily.',
      'Inability to quickly search historical health logs or export analytical audit reports for stakeholders.',
    ],
    solutions: [
      'Developed automated health diagnostic probes in .NET checking endpoints, queues, and database connections.',
      'Implemented high-speed search algorithms and optimized SQL queries to query millions of telemetry records instantaneously.',
      'Built automated scheduled summary reporting with one-click multi-format data export capabilities.',
    ],
    metrics: [
      { label: 'Incident Detection', value: 'Proactive Alerting' },
      { label: 'Query Speed', value: 'Sub-Second Search' },
      { label: 'Reporting', value: 'Automated Summaries' },
      { label: 'Data Export', value: 'Instant CSV / Excel' },
    ],
    technologies: ['.NET', 'C#', 'SQL Server', 'REST APIs', 'Health Probes'],
    architectureHighlights: [
      'Proactive end-to-end integration health monitoring preventing silent pipeline failures',
      'Sub-second indexing and search over large-scale health check diagnostic histories',
      'Automated executive summary report generation with flexible export capabilities',
    ],
  },
  {
    id: 'proj-dell-spcom',
    title: 'SharePoint CSOM Automation( SPCOM )',
    subtitle: 'Enterprise Automation Suite for Dell Content Management & Site Collections',
    category: 'Dell',
    deliveryTimeline: '2011 - 2024 (14 yrs)',
    clientOrRole: 'Principal Automation Architect',
    featured: true,
    description:
      'Robust .NET client-side object modeling (CSOM) automation engine orchestrating administrative tasks, bulk data synchronization, permissions governance, and batch operations across Dell Content Management Systems and extensive SharePoint site collections.',
    challenges: [
      'Manual repetitive administrative overhead managing hundreds of enterprise site collections, libraries, and access permissions.',
      'High risk of human error during large-scale content migrations and metadata taxonomy updates.',
      'Native web UI limitations preventing batch processing of thousands of records simultaneously.',
    ],
    solutions: [
      'Engineered high-throughput multi-threaded .NET automation utilities leveraging SharePoint Client Object Model (CSOM).',
      'Automated administrative governance routines including permission auditing, orphaned object cleanup, and bulk metadata sync.',
      'Built resilient error recovery and detailed transaction logging ensuring zero data corruption during batch operations.',
    ],
    metrics: [
      { label: 'Admin Time Saved', value: '95% Automation' },
      { label: 'Lifespan', value: 'Active Until leave Dell' },
      { label: 'Integrity', value: '0% Mistake , 100% Accurancy' },
    ],
    technologies: ['.NET', 'C#', 'SharePoint CSOM', 'Active Directory', 'REST API'],
    architectureHighlights: [
      'Automated mission-critical administrative workflows across massive Dell enterprise SharePoint ecosystems',
      'Replaced hours of manual maintenance with high-speed multi-threaded .NET CSOM actions',
      'Maintained 14-year operational durability supporting ongoing site migrations and governance',
    ],
  },
  {
    id: 'proj-wd-wintel-infrastructure',
    title: 'Enterprise Wintel Infrastructure & Automation',
    subtitle: 'Active Directory, Multi-OS Server Consolidation, Virtualization & 40+ Production Scripts',
    category: 'WD',
    deliveryTimeline: '2006 Jul - 2010 Jan (3 yrs 7 mos)',
    clientOrRole: 'Wintel Server Engineer',
    featured: true,
    description:
      'Orchestrated enterprise Windows infrastructure and Active Directory domain across multi-generational Windows Server environments (NT, 2000, 2003 R2, 2008 R2). Led hardware consolidation, virtualization, enterprise backup, and security design while authoring 40+ mission-critical automation scripts that elevated IT macro processes including patch compliance and security audit logs.',
    challenges: [
      'Managing heterogeneous legacy Windows environments (NT to 2008 R2) with complex interdependencies during physical-to-virtual server consolidation.',
      'Manual server deployment and administrative routine overhead causing operational latency across DNS, DHCP, IIS, and File Server management.',
      'Labor-intensive security patch auditing and compliance tracking prone to oversight across distributed enterprise servers.',
    ],
    solutions: [
      'Architected enterprise Active Directory domain governance, Group Policies (GPO), and centralized security access models.',
      'Engineered server virtualization, high-availability backup procedures, and streamlined OS provisioning via WDS & WSUS.',
      'Authored 40+ automated administrative and audit scripts (VBScript/Batch) to continuously automate security patch verification, audit log analysis, and system health checks.',
    ],
    metrics: [
      { label: 'Automation Scripts', value: '40++ Built' },
      { label: 'OS Generations', value: 'NT to 2008 R2' },
      { label: 'Core Services', value: 'AD, DNS, IIS, SQL' },
      { label: 'Impact', value: 'Automated Patch & Audit' },
    ],
    technologies: [
      'Windows Server',
      'Active Directory',
      'Virtualization',
      'IIS',
      'SQL Server',
      'WDS / WSUS',
      'VBScript & Batch',
      'Terminal Services',
      'DNS / DHCP','.NET',
    ],
    architectureHighlights: [
      'Consolidated and virtualized multi-generational server fleets across Windows NT through 2008 R2',
      'Authored 40+ enduring production automation scripts sustaining long-term operational efficiency',
      'Hardened enterprise security posture with automated patch management and proactive audit log governance',
    ],
  },
];
