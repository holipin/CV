import React, { useState, useMemo } from 'react';
import {
  Code,
  Search,
  Filter,
  CheckCircle,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
} from 'lucide-react';
import {
  SKILLS,
  SKILL_CATEGORIES,
  SKILLS_HEADER,
  SkillItem,
} from '../data/portfolioSkillData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 bg-slate-950/70 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>{SKILLS_HEADER.badge}</span>
            </div>
            <h2 id="skills-section-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {SKILLS_HEADER.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              {SKILLS_HEADER.description}
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-red-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skills-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., .NET Core, SQL)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-red-500 hover:border-red-400 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-colors shadow-sm shadow-red-500/10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div id="skills-category-tabs" className="flex flex-wrap items-center gap-2 mb-8">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`skills-tab-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-900/30 font-semibold'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div id="skills-grid-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-medium">No skills match "{searchQuery}"</p>
            <p className="text-slate-500 text-xs mt-1">Try searching for ".NET Core", "Blazor", "SQL", "IaaS", or reset the filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-1.5 rounded-lg bg-slate-800 text-xs text-rose-300 hover:bg-slate-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Highlight Architecture Focus Banner */}
        <div
          id="skills-architecture-highlight"
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800/80 to-slate-900 border border-slate-700/80 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Async Pipelines &amp; Modernization</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Consolidating legacy scripts into high-performance .NET Core solutions with async execution, robust exception logging, and unit testing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">SOLID, DRY &amp; Clean Architecture</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Decoupled multi-tiered design, repository data access patterns, and rigorous coding standards that remediate long-term technical debt.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">AI Diagnostics &amp; SQL Efficiency</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Leveraging Gemini 2.5 for predictive capacity planning while rationalizing SQL indexes to reclaim terabytes of storage and delay CAPEX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: SkillItem }> = ({ skill }) => {
  return (
    <div
      id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
      className="flex flex-col justify-between p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-black/40 group"
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-slate-100 text-base group-hover:text-rose-400 transition-colors">
            {skill.name}
          </h3>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
            {skill.years} yrs exp
          </span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          {skill.description}
        </p>
      </div>

      <div>
        {/* Proficiency bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
            <span className="text-slate-400">Proficiency</span>
            <span className="font-bold text-rose-400">{skill.level}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-500"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
