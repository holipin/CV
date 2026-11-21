import React from 'react';
import {
  FileText,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SKILLS } from '../data/portfolioSkillData';
import { MetricAnchorCard, ActionButton } from './helpers';

interface HeroProps {
  onCopyToast?: (text: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      {/* Background subtle atmospheric gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left">
          {/* Availability Pill */}
          <div
            id="hero-availability-badge"
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          {/* Main Headline */}
          <h1 id="hero-main-title" className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-300 to-amber-300">{PERSONAL_INFO.name}</span>
          </h1>

          {/* Subheading Title */}
          <h2 id="hero-subtitle" className="text-xl sm:text-2xl font-semibold text-rose-400 mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            {PERSONAL_INFO.role}
          </h2>

          {/* Paragraph Bio */}
          <p id="hero-bio-text" className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
            {PERSONAL_INFO.bio}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <ActionButton
              id="hero-view-projects-btn"
              href="#projects"
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View Delivered Projects
            </ActionButton>

            <ActionButton
              id="hero-view-resume-btn"
              href="#resume"
              variant="secondary"
              icon={<FileText className="w-4 h-4 text-rose-400" />}
            >
              View Executive Resume
            </ActionButton>
          </div>

          {/* Metric counters strip */}
          <div
            id="hero-metrics-strip"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 backdrop-blur-md w-full max-w-4xl"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.yearsOfExperience.toLowerCase().includes('year')
                  ? PERSONAL_INFO.yearsOfExperience
                  : `${PERSONAL_INFO.yearsOfExperience} Years`}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">System Engineering Experience</span>
            </div>

            <MetricAnchorCard
              id="hero-delivered-projects-anchor"
              href="#projects"
              value={PERSONAL_INFO.deliveredProjectsCount || '480+'}
              label="Delivered Projects"
              color="rose"
              title="Jump to Delivered Projects"
            />

            <MetricAnchorCard
              id="hero-stackoverflow-badge-link"
              href="https://stackoverflow.com/users/6001558/ho-li-pin"
              value={PERSONAL_INFO.codeQualityScore || '100%'}
              label="stackoverflow Badges"
              color="sky"
              isExternal
              title="View Stack Overflow Profile"
            />

            <MetricAnchorCard
              id="hero-skills-count-anchor"
              href="#skills"
              value={SKILLS.length}
              label="Skills Count"
              color="amber"
              title="Jump to Skills Section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
