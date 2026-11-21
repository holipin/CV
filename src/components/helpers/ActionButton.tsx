import React from 'react';

export type ActionButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ActionButtonProps {
  id?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: ActionButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
}

const VARIANT_CLASSES: Record<ActionButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white shadow-xl shadow-rose-950/50 hover:shadow-rose-600/30 border border-rose-400/30',
  secondary:
    'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-600 shadow-md',
  outline:
    'bg-transparent hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500',
  ghost:
    'bg-transparent hover:bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-transparent',
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  id,
  href,
  onClick,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  isExternal = false,
  className = '',
  children,
  title,
  disabled = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all transform active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none';
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;
  const combinedClasses = `${baseClasses} ${variantClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        onClick={onClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        title={title}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};
