import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  const sizeConfig = {
    sm: {
      title: 'text-lg md:text-xl',
      subtitle: 'text-[8px] tracking-[0.25em]',
    },
    md: {
      title: 'text-2xl md:text-3xl',
      subtitle: 'text-[9px] md:text-[10.5px] tracking-[0.32em]',
    },
    lg: {
      title: 'text-3xl md:text-4xl',
      subtitle: 'text-[11px] md:text-xs tracking-[0.36em]',
    },
  }[size];

  return (
    <div className={`inline-flex flex-col justify-center group cursor-pointer ${className}`}>
      {/* Pure White Elegant Serif Brand Typography */}
      <span className={`${sizeConfig.title} font-serif font-black tracking-widest text-white transition-opacity duration-300 group-hover:opacity-90 leading-none`}>
        HAVEST
      </span>
      {showTagline && (
        <span className={`${sizeConfig.subtitle} font-sans uppercase font-bold text-slate-300/90 mt-1 flex items-center gap-1.5 leading-none`}>
          <span>PROPERTIES</span>
          <span className="w-1 h-1 bg-white/50 rounded-full inline-block"></span>
          <span className="text-slate-400 font-medium">REAL ESTATE</span>
        </span>
      )}
    </div>
  );
};


