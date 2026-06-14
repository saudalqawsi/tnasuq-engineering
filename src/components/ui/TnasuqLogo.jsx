import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/72dedd084_logo_transparent.png';

export const CALLIGRAPHY_STYLES = {
  // ── Original 10 ──────────────────────────────────────────────────────────
  A:  { fontFamily: "'Amiri', serif",                    fontWeight: 700, letterSpacing: '0.02em',  label: 'A · Amiri — Classical Naskh' },
  B:  { fontFamily: "'Scheherazade New', serif",         fontWeight: 700, letterSpacing: '0.01em',  label: 'B · Scheherazade — Traditional Flowing' },
  C:  { fontFamily: "'Lateef', serif",                   fontWeight: 400, letterSpacing: '0.03em',  label: 'C · Lateef — Kufic-Inspired' },
  D:  { fontFamily: "'Reem Kufi', sans-serif",           fontWeight: 600, letterSpacing: '0.04em',  label: 'D · Reem Kufi — Geometric Modern' },
  E:  { fontFamily: "'Noto Naskh Arabic', serif",        fontWeight: 700, letterSpacing: '0.01em',  label: 'E · Noto Naskh — Crisp Universal' },
  F:  { fontFamily: "'Markazi Text', serif",             fontWeight: 700, letterSpacing: '0.02em',  label: 'F · Markazi Text — Editorial Naskh' },
  G:  { fontFamily: "'Tajawal', sans-serif",             fontWeight: 800, letterSpacing: '0.03em',  label: 'G · Tajawal — Bold Contemporary' },
  H:  { fontFamily: "'Katibeh', cursive",                fontWeight: 400, letterSpacing: '0.02em',  label: 'H · Katibeh — Ruqʿah Script' },
  I:  { fontFamily: "'Mada', sans-serif",                fontWeight: 700, letterSpacing: '0.05em',  label: 'I · Mada — Minimal Modern' },
  J:  { fontFamily: "'Cairo', sans-serif",               fontWeight: 900, letterSpacing: '0.04em',  label: 'J · Cairo Black — Heavy Display' },

  // ── New 20 ───────────────────────────────────────────────────────────────
  K:  { fontFamily: "'Aref Ruqaa', serif",               fontWeight: 400, letterSpacing: '0.04em',  label: 'K · Aref Ruqaa — Ornate Ruqʿah' },
  L:  { fontFamily: "'Reem Kufi Ink', serif",            fontWeight: 400, letterSpacing: '0.05em',  label: 'L · Reem Kufi Ink — Brushed Kufic' },
  M:  { fontFamily: "'Gulzar', serif",                   fontWeight: 400, letterSpacing: '0.01em',  label: 'M · Gulzar — Nastaliq Elegance' },
  N:  { fontFamily: "'Noto Kufi Arabic', sans-serif",    fontWeight: 700, letterSpacing: '0.06em',  label: 'N · Noto Kufi — Structured Kufic' },
  O:  { fontFamily: "'Harmattan', sans-serif",           fontWeight: 700, letterSpacing: '0.04em',  label: 'O · Harmattan — West-African Naskh' },
  P:  { fontFamily: "'Mirza', serif",                    fontWeight: 700, letterSpacing: '0.02em',  label: 'P · Mirza — Nastaliq Formal' },
  Q:  { fontFamily: "'Rakkas', cursive",                 fontWeight: 400, letterSpacing: '0.03em',  label: 'Q · Rakkas — Expressive Bi-Script' },
  R:  { fontFamily: "'Changa', sans-serif",              fontWeight: 800, letterSpacing: '0.05em',  label: 'R · Changa — Futurist Bold' },
  S:  { fontFamily: "'El Messiri', sans-serif",          fontWeight: 700, letterSpacing: '0.03em',  label: 'S · El Messiri — Contemporary Naskh' },
  T:  { fontFamily: "'Almarai', sans-serif",             fontWeight: 800, letterSpacing: '0.04em',  label: 'T · Almarai — Clean Corporate' },
  U:  { fontFamily: "'Readex Pro', sans-serif",          fontWeight: 700, letterSpacing: '0.05em',  label: 'U · Readex Pro — Versatile Bi-Script' },
  V:  { fontFamily: "'Alkalami', serif",                 fontWeight: 400, letterSpacing: '0.02em',  label: 'V · Alkalami — Nigerian Naskh' },
  W:  { fontFamily: "'Aslam', serif",                    fontWeight: 400, letterSpacing: '0.02em',  label: 'W · Aslam — Scholarly Naskh' },
  X:  { fontFamily: "'Qahiri', serif",                   fontWeight: 400, letterSpacing: '0.04em',  label: 'X · Qahiri — Cairene Naskh' },
  Y:  { fontFamily: "'Baloo Bhaijaan 2', cursive",       fontWeight: 800, letterSpacing: '0.02em',  label: 'Y · Baloo Bhaijaan — Playful Heavy' },
  Z:  { fontFamily: "'Jomhuria', serif",                 fontWeight: 400, letterSpacing: '0.06em',  label: 'Z · Jomhuria — Compressed Display' },
  AA: { fontFamily: "'Lalezar', cursive",                fontWeight: 400, letterSpacing: '0.03em',  label: 'AA · Lalezar — Slab Nastaliq' },
  BB: { fontFamily: "'Marhey', sans-serif",              fontWeight: 700, letterSpacing: '0.04em',  label: 'BB · Marhey — Rounded Casual' },
  CC: { fontFamily: "'Noto Sans Arabic', sans-serif",    fontWeight: 900, letterSpacing: '0.05em',  label: 'CC · Noto Sans Arabic Black — Ultra Bold' },
  DD: { fontFamily: "'Reem Kufi Fun', sans-serif",       fontWeight: 700, letterSpacing: '0.04em',  label: 'DD · Reem Kufi Fun — Soft Geometric' },
};

// ← CHANGE THIS to any key (A–DD) to set the active style
export const ACTIVE_STYLE = 'A';

export default function TnasuqLogo({ size = 'md', onClick, styleKey }) {
  const sizes = {
    sm: { h: 28, enSize: 11, arSize: 14, gap: 2 },
    md: { h: 38, enSize: 13, arSize: 16, gap: 3 },
    lg: { h: 50, enSize: 17, arSize: 21, gap: 4 },
  };
  const s = sizes[size] || sizes.md;
  const cal = CALLIGRAPHY_STYLES[styleKey || ACTIVE_STYLE];

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