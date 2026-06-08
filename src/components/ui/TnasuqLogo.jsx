import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/72dedd084_logo_transparent.png';

export default function TnasuqLogo({ size = 'md', onClick, dark = false }) {
  const sizes = {
    sm: { h: 28, enSize: 11, arSize: 12, gap: 2 },
    md: { h: 38, enSize: 13, arSize: 14, gap: 3 },
    lg: { h: 50, enSize: 17, arSize: 19, gap: 4 },
  };
  const s = sizes[size] || sizes.md;

  const shadowFilter = dark
    ? 'drop-shadow(0 1px 6px rgba(0,0,0,0.6)) drop-shadow(0 0px 2px rgba(0,0,0,0.4))'
    : 'drop-shadow(0 1px 5px rgba(0,0,0,0.22)) drop-shadow(0 0px 1px rgba(0,0,0,0.14))';

  const content = (
    <div className="flex items-center gap-2.5" style={{ lineHeight: 1 }}>
      {/* Logo mark */}
      <img
        src={LOGO_URL}
        alt="Tnasuq logo"
        style={{
          height: s.h,
          width: 'auto',
          filter: shadowFilter,
          display: 'block',
          flexShrink: 0,
        }}
      />
      {/* Text: Arabic top, English bottom */}
      <div className="flex flex-col" style={{ gap: s.gap }}>
        <span
          className="font-arabic font-bold text-foreground leading-none"
          style={{ fontSize: s.arSize, letterSpacing: '0.04em' }}
        >
          تناســـــق
        </span>
        <span
          className="font-inter font-black tracking-[-0.02em] text-foreground leading-none"
          style={{ fontSize: s.enSize }}
        >
          TNASUQ
        </span>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="focus:outline-none">
        {content}
      </button>
    );
  }

  return content;
}