import React from 'react';

export type MetricColor = 'rose' | 'amber' | 'sky' | 'emerald' | 'indigo' | 'white';

export interface MetricAnchorCardProps {
  id: string;
  href: string;
  value: string | number;
  label: string;
  color?: MetricColor;
  title?: string;
  isExternal?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const COLOR_CLASSES: Record<
  MetricColor,
  {
    value: string;
    labelHover: string;
    underline: string;
  }
> = {
  rose: {
    value: 'text-rose-400 group-hover:text-rose-300',
    labelHover: 'group-hover:text-rose-300',
    underline: 'decoration-rose-500/40 group-hover:decoration-rose-400',
  },
  amber: {
    value: 'text-amber-400 group-hover:text-amber-300',
    labelHover: 'group-hover:text-amber-300',
    underline: 'decoration-amber-500/40 group-hover:decoration-amber-400',
  },
  sky: {
    value: 'text-sky-400 group-hover:text-sky-300',
    labelHover: 'group-hover:text-sky-300',
    underline: 'decoration-sky-500/40 group-hover:decoration-sky-400',
  },
  emerald: {
    value: 'text-emerald-400 group-hover:text-emerald-300',
    labelHover: 'group-hover:text-emerald-300',
    underline: 'decoration-emerald-500/40 group-hover:decoration-emerald-400',
  },
  indigo: {
    value: 'text-indigo-400 group-hover:text-indigo-300',
    labelHover: 'group-hover:text-indigo-300',
    underline: 'decoration-indigo-500/40 group-hover:decoration-indigo-400',
  },
  white: {
    value: 'text-white group-hover:text-slate-200',
    labelHover: 'group-hover:text-white',
    underline: 'decoration-slate-400/40 group-hover:decoration-white',
  },
};

export const MetricAnchorCard: React.FC<MetricAnchorCardProps> = ({
  id,
  href,
  value,
  label,
  color = 'rose',
  title,
  isExternal = false,
  className = '',
  onClick,
}) => {
  const colorStyles = COLOR_CLASSES[color] || COLOR_CLASSES.rose;

  return (
    <a
      id={id}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      title={title || label}
      onClick={onClick}
      className={`flex flex-col group cursor-pointer transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <span className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${colorStyles.value}`}>
        {value}
      </span>
      <span
        className={`text-xs text-slate-400 mt-0.5 underline underline-offset-2 transition-colors ${colorStyles.labelHover} ${colorStyles.underline}`}
      >
        {label}
      </span>
    </a>
  );
};
