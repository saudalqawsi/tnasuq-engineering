import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/72dedd084_logo_transparent.png';

// 4 authentic Arabic calligraphy style options for the Arabic wordmark
// Each uses a different font loaded via @import in index.css (or inline link).
// PLACEHOLDER: Pick your preferred style (A–D) and we'll lock it in.
const CALLIGRAPHY_STYLES = {
  // A — Amiri: Classical Naskh, scholarly, timeless
  A: {
    fontFamily: "'Amiri', serif",
    fontWeight: 700,
    letterSpacing: '0.02em',
    label: 'A · Amiri (Classical Naskh)',
  },
  // B — Scheherazade: Traditional, flowing, editorial
  B: {
    fontFamily: "'Scheherazade New', serif",
    fontWeight: 700,
    letterSpacing: '0.01em',
    label: 'B · Scheherazade (Traditional)',
  },
  // C — Lateef: Elegant Kufic-inspired, structured
  C: {
    fontFamily: "'Lateef', serif",
    fontWeight: 400,
    letterSpacing: '0.03em',
    label: 'C · Lateef (Kufic-inspired)',
  },
  // D — Reem Kufi: Contemporary geometric Kufic
  D: {
    fontFamily: "'Reem Kufi', sans-serif",
    fontWeight: 600,
    letterSpacing: '0.04em',
    label: 'D · Reem Kufi (Geometric)',
  },
};

// ← CHANGE THIS to 'A', 'B', 'C', or 'D' to switch styles
const ACTIVE_STYLE = 'A';

export default function TnasuqLogo({ size = 'md', onClick }) {
  const sizes = {
    sm: { h: 28, enSize: 11, arSize: 14, gap: 2 },
    md: { h: 38, enSize: 13, arSize: 16, gap: 3 },
    lg: { h: 50, enSize: 17, arSize: 21, gap: 4 },
  };
  const s = sizes[size] || sizes.md;
  const cal = CALLIGRAPHY_STYLES[ACTIVE_STYLE];

  const shadowFilter = 'drop-shadow(0 1px 5px rgba(0,0,0,0.22)) drop-shadow(0 0px 1px rgba(0,0,0,0.14))';

  const content = (
    <div className="flex items-center gap-2.5" style={{ lineHeight: 1 }}>
      <img
        src={LOGO_URL}
        alt="Tnasuq logo"
        style={{ height: s.h, width: 'auto', filter: shadowFilter, display: 'block', flexShrink: 0 }}
      />
      <div className="flex flex-col" style={{ gap: s.gap }}>
        <span
          className="text-foreground leading-none"
          style={{
            fontFamily: cal.fontFamily,
            fontWeight: cal.fontWeight,
            fontSize: s.arSize,
            letterSpacing: cal.letterSpacing,
          }}
        >
          تناسق
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
    return <button onClick={onClick} className="focus:outline-none">{content}</button>;
  }
  return content;
}