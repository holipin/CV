import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center font-bold text-white text-xs">
              AM
            </div>
            <div>
              <span className="font-bold text-slate-200 block">{PERSONAL_INFO.name}</span>
              <span className="text-slate-500 text-[11px]">{PERSONAL_INFO.role}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#skills" className="hover:text-white transition-colors">
              Skills Matrix
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Working Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects Delivery
            </a>
            <a href="#resume" className="hover:text-white transition-colors">
              Executive Resume
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline text-[11px]">Back to top</span>
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with strict TypeScript &amp; modern reactive architecture.
          </p>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-rose-400/80">
              <Code2 className="w-3.5 h-3.5" /> Angular 19 &amp; TypeScript 5.8
            </span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
