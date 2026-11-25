import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  GraduationCap,
  Award,
  Sparkles,
  ShieldCheck,
  Building,
  Download,
} from 'lucide-react';
import { RESUME_DATA, RESUME_HEADER } from '../data/portfolioData';
import { EXPERIENCES } from '../data/portfolioExperienceData';
import { PROJECTS } from '../data/portfolioProjectData';
import { exportResumePdf } from '../utils/exportResumePdf';

interface ResumeSectionProps {
  onCopyToast: (msg: string) => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onCopyToast }) => {
  return (
    <section id="resume" className="py-20 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>{RESUME_HEADER.badge}</span>
            </div>
            <h2 id="resume-section-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {RESUME_HEADER.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              {RESUME_HEADER.description}
            </p>
          </div>

          {/* Verification Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{RESUME_HEADER.verificationBadge}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                const fileName = exportResumePdf();
                onCopyToast(`Resume exported as ${fileName}`);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-500/20 transition hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Download executive resume as PDF"
            >
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </button>
          </div>
        </div>

        {/* Highlight Grid: Summary & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Certifications & Highlights Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Education Card */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-4">
                <GraduationCap className="w-5 h-5" />
                <span>Formal Education</span>
              </div>
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="font-bold text-white text-base">{edu.degree}</h4>
                  <p className="text-xs text-rose-400 font-medium">{edu.institution}</p>
                  <p className="text-xs font-mono text-slate-400">{edu.period}</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{edu.notes}</p>
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-4">
                <Award className="w-5 h-5" />
                <span>Professional Certifications</span>
              </div>
              <ul className="space-y-3">
                {RESUME_DATA.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Technical Assets Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-xl text-xs text-slate-400 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-200 text-sm">
                <Sparkles className="w-4 h-4 text-rose-400" />
                <span>Executive Profile Standards</span>
              </div>
              <p>
                Engineered with strict semantic hierarchy, quantitative business achievements, and verified enterprise milestones for rapid technical leadership assessment.
              </p>
              <div className="pt-2 border-t border-slate-800 space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between">
                  <span>Architecture:</span>
                  <span className="text-slate-200">IaaS, PaaS, SaaS</span>
                </div>
                <div className="flex justify-between">
                  <span>Code Standards:</span>
                  <span className="text-slate-200">SOLID, DRY, KISS</span>
                </div>
                <div className="flex justify-between">
                  <span>ATS Compliant:</span>
                  <span className="text-emerald-400">Machine Parsable Structure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic In-Browser Document Preview */}
          <div className="lg:col-span-8">
            <div
              id="resume-document-wrapper"
              className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden"
            >
              {/* Top document tool bar */}
              <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-300 font-medium">
                    {RESUME_DATA.name.replace(/[^a-zA-Z0-9]/g, '_')}_Executive_CV
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Document
                  </span>
                </div>
              </div>

              {/* Realistic Document Paper Canvas */}
              <div className="p-4 sm:p-8 bg-slate-950/60 overflow-x-auto">
                <div
                  id="resume-paper-view"
                  className="mx-auto max-w-[780px] bg-slate-900 text-slate-100 p-8 sm:p-12 rounded-2xl border border-slate-800 shadow-2xl relative"
                >
                  {/* Document Header */}
                  <div className="border-b border-slate-800 pb-6 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                        {RESUME_DATA.name}
                      </h3>
                      <span className="text-xs font-mono text-rose-400 font-semibold">
                        {RESUME_DATA.title}
                      </span>
                    </div>

                    {/* Contact strip */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-2 font-mono">
                      <span>{RESUME_DATA.contact.email}</span>
                      <span>•</span>
                      <span>{RESUME_DATA.contact.phone}</span>
                      <span>•</span>
                      <span>{RESUME_DATA.contact.location}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-sky-400 mt-1 font-mono">
                      <span className="font-bold">{RESUME_DATA.contact.portfolio}</span>
                      <span>•</span>
                      <span>{RESUME_DATA.contact.linkedin}</span>
                      <span>•</span>
                      <span>{RESUME_DATA.contact.github}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-2">
                      Executive Profile
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {RESUME_DATA.summary}
                    </p>
                  </div>

                  {/* Core Skills */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-2.5">
                      Core Technical Competencies
                    </h4>
                    <div className="space-y-1.5 text-xs text-slate-300">
                      {RESUME_DATA.coreSkills.map((sk, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{sk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-4">
                      Professional Experience
                    </h4>
                    <div className="space-y-6">
                      {EXPERIENCES.map((exp) => (
                        <div key={exp.id} className="space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h5 className="font-bold text-white text-sm">
                              {exp.role} <span className="text-rose-400 font-normal">@ {exp.company}</span>
                            </h5>
                            <span className="text-xs font-mono text-slate-400">
                              {exp.period} | {exp.location}
                            </span>
                          </div>

                          <p className="text-xs text-slate-400 leading-relaxed">
                            {exp.summary}
                          </p>

                          <ul className="space-y-1 pl-2">
                            {exp.keyDeliverables.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                                <span className="text-slate-500">-</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
