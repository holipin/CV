import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Building2,
  Award,
} from 'lucide-react';
import {
  EXPERIENCES,
  EXPERIENCE_SECTION_CONFIG,
  LEADERSHIP_PHILOSOPHY,
} from '../data/portfolioExperienceData';

export const ExperienceSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCES[0].id);

  const selectedExp = EXPERIENCES.find((e) => e.id === activeExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{EXPERIENCE_SECTION_CONFIG.badge}</span>
          </div>
          <h2 id="experience-section-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {EXPERIENCE_SECTION_CONFIG.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            {EXPERIENCE_SECTION_CONFIG.description}
          </p>
        </div>

        {/* Layout: Interactive tabbed timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Company / Role selector list */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === activeExpId;
              return (
                <button
                  key={exp.id}
                  id={`exp-tab-${exp.id}`}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`text-left p-5 rounded-2xl transition-all cursor-pointer border flex flex-col gap-2 ${
                    isSelected
                      ? 'bg-slate-800/90 border-rose-500/80 shadow-xl shadow-rose-950/20 text-white'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Current Role
                      </span>
                    )}
                  </div>

                  <div className="mt-1">
                    <h3 className={`font-bold text-base leading-snug ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                      {exp.role}
                    </h3>
                    <p className="text-xs text-rose-400 font-medium mt-0.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </button>
              );
            })}

            {/* Quick Experience Summary Box */}
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-slate-200">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{LEADERSHIP_PHILOSOPHY.title}</span>
              </div>
              <p>
                {LEADERSHIP_PHILOSOPHY.description}
              </p>
            </div>
          </div>

          {/* Detailed Experience View */}
          <div className="lg:col-span-8">
            <div
              id="exp-detail-card"
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md"
            >
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedExp.role}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {selectedExp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-rose-400 font-semibold mt-1">
                    <span>{selectedExp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1 font-normal">
                      <MapPin className="w-3.5 h-3.5" /> {selectedExp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 self-start">
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  <span>{selectedExp.period}</span>
                </div>
              </div>

              {/* Role Summary */}
              <div className="py-5">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedExp.summary}
                </p>
              </div>

              {/* Impact Metrics */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 font-semibold">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  Key Business &amp; Engineering Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedExp.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col"
                    >
                      <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                  Key Technical Deliverables
                </h4>
                <ul className="space-y-3">
                  {selectedExp.keyDeliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack used */}
              <div className="pt-5 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                  Technologies &amp; Tools Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 text-rose-300 border border-rose-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
