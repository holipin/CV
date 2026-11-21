import React, { useState, useMemo } from 'react';
import {
  Layers,
  ExternalLink,
  Github,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Search,
  Filter,
} from 'lucide-react';
import { PROJECTS, PROJECTS_HEADER, ProjectItem } from '../data/portfolioProjectData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Categories are dynamically derived from PROJECTS so editing categories in portfolioProjectData.ts updates the buttons automatically
  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      if (!matchesCategory) return false;
      if (!query) return true;

      const inTitle = project.title.toLowerCase().includes(query);
      const inSubtitle = project.subtitle.toLowerCase().includes(query);
      const inDescription = project.description.toLowerCase().includes(query);
      const inClientRole = project.clientOrRole.toLowerCase().includes(query);
      const inCategory = project.category.toLowerCase().includes(query);
      const inTech = project.technologies.some((t) => t.toLowerCase().includes(query));
      const inHighlights = project.architectureHighlights.some((h) =>
        h.toLowerCase().includes(query)
      );

      return (
        inTitle ||
        inSubtitle ||
        inDescription ||
        inClientRole ||
        inCategory ||
        inTech ||
        inHighlights
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{PROJECTS_HEADER.badge}</span>
          </div>
          <h2 id="projects-section-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {PROJECTS_HEADER.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {PROJECTS_HEADER.description}
          </p>
        </div>

        {/* Category Filter Tabs & Quick Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div id="projects-category-filter" className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-950/40 font-semibold'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-red-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="projects-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects (e.g., .NET, SharePoint, Wintel)..."
              className="w-full pl-10 pr-12 py-2.5 bg-slate-900 border border-red-500 hover:border-red-400 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-colors shadow-sm shadow-red-500/10"
            />
            {searchQuery && (
              <button
                id="projects-search-clear"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div id="projects-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="flex flex-col justify-between rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-black/50 group overflow-hidden"
            >
              {/* Card Top Banner / Meta */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30">
                    {project.category}
                  </span>

                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-rose-400" />
                    {project.deliveryTimeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-rose-400/90 font-medium mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-4 mb-4">
                  {project.description}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-4">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <span className="text-xs font-mono font-bold text-slate-200 block">{m.value}</span>
                      <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Highlights Bullets */}
                <div className="space-y-1.5 mb-4">
                  {project.architectureHighlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom / Tech & CTAs */}
              <div className="p-6 pt-0">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    id={`open-project-modal-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all border border-slate-700/80 group-hover:border-rose-500/50"
                  >
                    <span>Delivery Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800/70 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors border border-slate-700"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div id="projects-empty-state" className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-medium">No projects match "{searchQuery}"</p>
            <p className="text-slate-500 text-xs mt-1">
              Try searching for ".NET", "SharePoint", "SQL", "Wintel", "FTP", or reset filters.
            </p>
            <button
              id="projects-reset-filters-btn"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 px-4 py-1.5 rounded-lg bg-slate-800 text-xs text-rose-300 hover:bg-slate-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
