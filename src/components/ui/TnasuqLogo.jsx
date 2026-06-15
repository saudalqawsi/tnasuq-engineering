import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/72dedd084_logo_transparent.png';

export const CALLIGRAPHY_STYLES = {
  // ── Batch 1 — Original 10 ─────────────────────────────────────────────────
  A:  { fontFamily: "'Amiri', serif",                          fontWeight: 700, letterSpacing: '0.02em',  label: 'A · Amiri — Classical Naskh' },
  B:  { fontFamily: "'Scheherazade New', serif",               fontWeight: 700, letterSpacing: '0.01em',  label: 'B · Scheherazade — Traditional Flowing' },
  C:  { fontFamily: "'Lateef', serif",                         fontWeight: 400, letterSpacing: '0.03em',  label: 'C · Lateef — Kufic-Inspired' },
  D:  { fontFamily: "'Reem Kufi', sans-serif",                 fontWeight: 600, letterSpacing: '0.04em',  label: 'D · Reem Kufi — Geometric Modern' },
  E:  { fontFamily: "'Noto Naskh Arabic', serif",              fontWeight: 700, letterSpacing: '0.01em',  label: 'E · Noto Naskh — Crisp Universal' },
  F:  { fontFamily: "'Markazi Text', serif",                   fontWeight: 700, letterSpacing: '0.02em',  label: 'F · Markazi Text — Editorial Naskh' },
  G:  { fontFamily: "'Tajawal', sans-serif",                   fontWeight: 800, letterSpacing: '0.03em',  label: 'G · Tajawal — Bold Contemporary' },
  H:  { fontFamily: "'Katibeh', cursive",                      fontWeight: 400, letterSpacing: '0.02em',  label: 'H · Katibeh — Ruqʿah Script' },
  I:  { fontFamily: "'Mada', sans-serif",                      fontWeight: 700, letterSpacing: '0.05em',  label: 'I · Mada — Minimal Modern' },
  J:  { fontFamily: "'Cairo', sans-serif",                     fontWeight: 900, letterSpacing: '0.04em',  label: 'J · Cairo Black — Heavy Display' },

  // ── Batch 2 — +20 visually diverse ────────────────────────────────────────
  K:  { fontFamily: "'Aref Ruqaa', serif",                     fontWeight: 400, letterSpacing: '0.04em',  label: 'K · Aref Ruqaa — Ornate Ruqʿah' },
  L:  { fontFamily: "'Reem Kufi Ink', serif",                  fontWeight: 400, letterSpacing: '0.05em',  label: 'L · Reem Kufi Ink — Brushed Kufic' },
  M:  { fontFamily: "'Gulzar', serif",                         fontWeight: 400, letterSpacing: '0.01em',  label: 'M · Gulzar — Nastaliq Elegance' },
  N:  { fontFamily: "'Noto Kufi Arabic', sans-serif",          fontWeight: 700, letterSpacing: '0.06em',  label: 'N · Noto Kufi — Structured Kufic' },
  O:  { fontFamily: "'Mirza', serif",                          fontWeight: 700, letterSpacing: '0.02em',  label: 'O · Mirza — Nastaliq Formal' },
  P:  { fontFamily: "'Rakkas', cursive",                       fontWeight: 400, letterSpacing: '0.03em',  label: 'P · Rakkas — Expressive Display' },
  Q:  { fontFamily: "'Changa', sans-serif",                    fontWeight: 800, letterSpacing: '0.05em',  label: 'Q · Changa — Futurist Bold' },
  R:  { fontFamily: "'El Messiri', sans-serif",                fontWeight: 700, letterSpacing: '0.03em',  label: 'R · El Messiri — Contemporary Naskh' },
  S:  { fontFamily: "'Almarai', sans-serif",                   fontWeight: 800, letterSpacing: '0.04em',  label: 'S · Almarai — Clean Corporate' },
  T:  { fontFamily: "'Readex Pro', sans-serif",                fontWeight: 700, letterSpacing: '0.05em',  label: 'T · Readex Pro — Bi-Script Geometric' },
  U:  { fontFamily: "'Alkalami', serif",                       fontWeight: 400, letterSpacing: '0.02em',  label: 'U · Alkalami — Nigerian Scholarly' },
  V:  { fontFamily: "'Qahiri', serif",                         fontWeight: 400, letterSpacing: '0.04em',  label: 'V · Qahiri — Cairene Naskh' },
  W:  { fontFamily: "'Baloo Bhaijaan 2', cursive",             fontWeight: 800, letterSpacing: '0.02em',  label: 'W · Baloo Bhaijaan — Playful Heavy' },
  X:  { fontFamily: "'Jomhuria', serif",                       fontWeight: 400, letterSpacing: '0.06em',  label: 'X · Jomhuria — Compressed Display' },
  Y:  { fontFamily: "'Lalezar', cursive",                      fontWeight: 400, letterSpacing: '0.03em',  label: 'Y · Lalezar — Slab Nastaliq' },
  Z:  { fontFamily: "'Marhey', sans-serif",                    fontWeight: 700, letterSpacing: '0.04em',  label: 'Z · Marhey — Rounded Casual' },
  AA: { fontFamily: "'Noto Sans Arabic', sans-serif",          fontWeight: 900, letterSpacing: '0.05em',  label: 'AA · Noto Sans Arabic Black — Ultra Bold' },
  BB: { fontFamily: "'Reem Kufi Fun', sans-serif",             fontWeight: 700, letterSpacing: '0.04em',  label: 'BB · Reem Kufi Fun — Soft Geometric' },
  CC: { fontFamily: "'Harmattan', sans-serif",                 fontWeight: 700, letterSpacing: '0.04em',  label: 'CC · Harmattan — West-African Naskh' },
  DD: { fontFamily: "'Cairo Play', sans-serif",                fontWeight: 900, letterSpacing: '0.03em',  label: 'DD · Cairo Play — Variable Display' },

  // ── Batch 3 — +20 more highly distinct styles ──────────────────────────────
  EE: { fontFamily: "'Lemonada', cursive",                     fontWeight: 700, letterSpacing: '0.03em',  label: 'EE · Lemonada — Rounded Warm' },
  FF: { fontFamily: "'Blaka', cursive",                        fontWeight: 400, letterSpacing: '0.02em',  label: 'FF · Blaka — Decorative Ink' },
  GG: { fontFamily: "'Blaka Hollow', cursive",                 fontWeight: 400, letterSpacing: '0.02em',  label: 'GG · Blaka Hollow — Outlined Ink' },
  HH: { fontFamily: "'Ruwudu', serif",                         fontWeight: 700, letterSpacing: '0.03em',  label: 'HH · Ruwudu — Hausa Naskh' },
  II: { fontFamily: "'Noor', sans-serif",                      fontWeight: 700, letterSpacing: '0.04em',  label: 'II · Noor — Simplified Sans' },
  JJ: { fontFamily: "'Lisan', sans-serif",                     fontWeight: 700, letterSpacing: '0.05em',  label: 'JJ · Lisan — Variable Arabic' },
  KK: { fontFamily: "'Aslam', serif",                          fontWeight: 400, letterSpacing: '0.02em',  label: 'KK · Aslam — Scholarly Naskh' },
  LL: { fontFamily: "'Kufam', sans-serif",                     fontWeight: 700, letterSpacing: '0.05em',  label: 'LL · Kufam — Kufi Rounded' },
  MM: { fontFamily: "'Sukar', sans-serif",                     fontWeight: 700, letterSpacing: '0.04em',  label: 'MM · Sukar — Informal Script' },
  NN: { fontFamily: "'Uthman Taha Naskh', serif",              fontWeight: 400, letterSpacing: '0.01em',  label: 'NN · Uthman Taha — Quranic Naskh' },
  OO: { fontFamily: "'Mehr Nastaliq', serif",                  fontWeight: 400, letterSpacing: '0.01em',  label: 'OO · Mehr Nastaliq — Persian Style' },
  PP: { fontFamily: "'Naskh', serif",                          fontWeight: 700, letterSpacing: '0.02em',  label: 'PP · Naskh — Plain Naskh' },
  QQ: { fontFamily: "'Rubik', sans-serif",                     fontWeight: 800, letterSpacing: '0.06em',  label: 'QQ · Rubik — Latin-Arabic Geometric' },
  RR: { fontFamily: "'Exo 2', sans-serif",                     fontWeight: 800, letterSpacing: '0.07em',  label: 'RR · Exo 2 — Structured Latin-Arabic' },
  SS: { fontFamily: "'Nunito', sans-serif",                    fontWeight: 900, letterSpacing: '0.04em',  label: 'SS · Nunito — Rounded Heavy' },
  TT: { fontFamily: "'IBM Plex Sans Arabic', sans-serif",      fontWeight: 700, letterSpacing: '0.04em',  label: 'TT · IBM Plex Sans — Mono-width Arabic' },
  UU: { fontFamily: "'IBM Plex Sans Arabic', sans-serif",      fontWeight: 300, letterSpacing: '0.08em',  label: 'UU · IBM Plex Sans Light — Spaced Thin' },
  VV: { fontFamily: "'Cairo', sans-serif",                     fontWeight: 400, letterSpacing: '0.08em',  label: 'VV · Cairo Light Spaced — Airy Display' },
  WW: { fontFamily: "'Amiri', serif",                          fontWeight: 400, letterSpacing: '0.06em',  label: 'WW · Amiri Light — Refined Classic' },
  XX: { fontFamily: "'Tajawal', sans-serif",                   fontWeight: 300, letterSpacing: '0.09em',  label: 'XX · Tajawal Light Wide — Elegant Spaced' },
};

// ← CHANGE THIS to any key to set the active logo style
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