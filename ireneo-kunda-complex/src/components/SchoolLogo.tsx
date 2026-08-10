import React from 'react';

interface SchoolLogoProps {
  variant?: 'full' | 'compact' | 'light' | 'dark' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
}) => {
  // Sizing maps
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  }[size];

  const titleSizes = {
    sm: 'text-xs font-bold',
    md: 'text-sm sm:text-base font-extrabold',
    lg: 'text-xl sm:text-2xl font-black',
  }[size];

  const mottoSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px] sm:text-xs',
    lg: 'text-xs sm:text-sm',
  }[size];

  const isDarkBg = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Visual Icon - Recreated matching the uploaded official school logo */}
      <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 160 140"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Red Motion Swooshes */}
          <path
            d="M 20 85 C 50 115 110 80 155 45 C 115 95 55 125 25 95 Z"
            fill="#e11d48"
          />
          <path
            d="M 30 70 C 60 95 115 65 150 35 C 110 80 60 105 35 78 Z"
            fill="#be123c"
          />

          {/* Running Scholar Silhouette in Navy Blue */}
          {/* Head & Mortarboard / Graduation Cap */}
          <circle cx="85" cy="24" r="10" fill="#1e1b4b" />
          {/* Graduation Cap Top Diamond */}
          <polygon points="85,8 105,14 85,20 65,14" fill="#1e1b4b" />
          {/* Tassel */}
          <path d="M 98 15 L 102 24 L 99 26" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />

          {/* Torso running forward */}
          <path
            d="M 68 36 C 75 30 95 28 92 48 L 72 75 C 65 85 45 92 28 98 C 42 90 60 82 66 74 L 75 56 C 68 52 50 56 38 65 L 48 50 Z"
            fill="#1e1b4b"
          />

          {/* Extended arm holding diploma */}
          <path d="M 85 42 L 116 28" stroke="#1e1b4b" strokeWidth="6" strokeLinecap="round" />
          {/* Diploma Roll */}
          <g transform="rotate(-30 118 26)">
            <rect x="114" y="20" width="16" height="7" rx="2.5" fill="#1e1b4b" />
            <line x1="122" y1="20" x2="122" y2="27" stroke="#e11d48" strokeWidth="2" />
          </g>

          {/* Trailing leg */}
          <path
            d="M 75 70 L 52 90 C 40 100 25 102 18 100 C 32 96 46 90 56 80 Z"
            fill="#1e1b4b"
          />
        </svg>
      </div>

      {/* Text Branding */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-tight">
          <span
            className={`${titleSizes} ${
              isDarkBg ? 'text-red-400' : 'text-red-600'
            } tracking-tight font-bold`}
          >
            Ireneo Nursery & Primary School
          </span>
          <span
            className={`${mottoSizes} ${
              isDarkBg ? 'text-slate-300' : 'text-slate-700'
            } font-medium italic tracking-wide`}
          >
            Education is a Key to Success
          </span>
        </div>
      )}
    </div>
  );
};
