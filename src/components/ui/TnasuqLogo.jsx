import React from 'react';

/**
 * Tnasuq Logo Mark
 * A bilingual stacked wordmark with a geometric precision accent.
 * The two names sit at equal visual weight, united by a structural rule line
 * and a small diamond "joint" — referencing engineering connections.
 */
export default function TnasuqLogo({ size = 'md', onClick }) {
  const sizes = {
    sm: { en: 14, ar: 12, gap: 3, lineW: 28, dotR: 2.5 },
    md: { en: 18, ar: 15, gap: 4, lineW: 36, dotR: 3 },
    lg: { en: 28, ar: 23, gap: 6, lineW: 52, dotR: 4 }
  };
  const s = sizes[size] || sizes.md;

  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-start focus:outline-none"
      style={{ lineHeight: 1 }}>
      
      {/* English wordmark */}
      <span
        className="font-inter font-black tracking-[-0.03em] text-foreground leading-none"
        style={{ fontSize: s.en }}>
        
        TNASUQ
      </span>

      {/* Structural rule with diamond joint */}
      <div
        className="flex items-center rounded-md my-[1px] hidden"
        style={{ gap: 0 }}>
        
        <span
          className="block bg-foreground/20"
          style={{ width: s.lineW * 0.3, height: 1 }} />
        
        {/* Diamond */}
        <svg
          width={s.dotR * 2.8}
          height={s.dotR * 2.8}
          viewBox="0 0 10 10"
          className="mx-[2px]">
          
          <rect
            x="1.5" y="1.5" width="7" height="7"
            rx="0"
            transform="rotate(45 5 5)"
            fill="none"
            stroke="hsl(32 55% 36%)"
            strokeWidth="1.5" />
          
          <rect
            x="3.5" y="3.5" width="3" height="3"
            transform="rotate(45 5 5)"
            fill="hsl(32 55% 36%)"
            stroke="none" />
          
        </svg>
        <span
          className="block bg-foreground/20"
          style={{ width: s.lineW * 0.7, height: 1 }} />
        
      </div>

      {/* Arabic wordmark — same visual weight, not a subtext */}
      <span
        className="font-arabic-display font-black text-foreground leading-none"
        style={{ fontSize: s.ar, letterSpacing: '0.02em' }}>
        
        تناسق
      </span>
    </button>);

}