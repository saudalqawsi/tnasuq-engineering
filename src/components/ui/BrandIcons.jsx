import React from 'react';

function Svg({ className, style, children }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

/* ── Why Tnasuq ─────────────────────────────────────────────── */
export const IconPermit = (p) => (
  <Svg {...p}>
    <path d="M24 4 L40 10 V24 C40 33 33 40 24 43 C15 40 8 33 8 24 V10 Z" />
    <path d="M16 23 L21 28 L33 16" />
  </Svg>
);

export const IconLayers = (p) => (
  <Svg {...p}>
    <path d="M24 6 L42 15 L24 24 L6 15 Z" />
    <path d="M6 23 L24 32 L42 23" />
    <path d="M6 31 L24 40 L42 31" />
  </Svg>
);

export const IconBolt = (p) => (
  <Svg {...p}>
    <path d="M8 28 L24 10 L40 28" />
    <path d="M14 36 L24 26 L34 36" />
  </Svg>
);

/* ── Process: From Inquiry to Handover ──────────────────────── */
export const IconInquiry = (p) => (
  <Svg {...p}>
    <path d="M10 8 H38 C39.5 8 41 9.5 41 11 V31 C41 32.5 39.5 34 38 34 H22 L13 42 V34 H10 C8.5 34 7 32.5 7 31 V11 C7 9.5 8.5 8 10 8 Z" />
    <circle cx="17" cy="22" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="24" cy="22" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="31" cy="22" r="1.6" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconSite = (p) => (
  <Svg {...p}>
    <path d="M24 6 C31 6 36 12 36 19 C36 28 24 42 24 42 C24 42 12 28 12 19 C12 12 17 6 24 6 Z" />
    <circle cx="24" cy="19" r="4" />
  </Svg>
);

export const IconDesign = (p) => (
  <Svg {...p}>
    <path d="M24 6 V18" />
    <path d="M24 18 L14 40" />
    <path d="M24 18 L34 40" />
    <path d="M10 40 H38" />
    <circle cx="24" cy="10" r="2.5" />
  </Svg>
);

export const IconHardHat = (p) => (
  <Svg {...p}>
    <path d="M8 30 C8 19 16 14 24 14 C32 14 40 19 40 30 Z" />
    <path d="M5 33 H43" />
    <path d="M24 13 V29" />
    <circle cx="24" cy="9" r="1.8" fill="currentColor" stroke="none" />
  </Svg>
);

/* ── Services ───────────────────────────────────────────────── */
export const IconArchitectural = (p) => (
  <Svg {...p}>
    <path d="M8 22 L24 9 L40 22" />
    <path d="M12 20 V40 H36 V20" />
    <path d="M20 40 V31 H28 V40" />
  </Svg>
);

export const IconStructural = (p) => (
  <Svg {...p}>
    <path d="M8 12 H40" />
    <path d="M8 12 V40" />
    <path d="M40 12 V40" />
    <path d="M8 40 L24 24 L40 40" />
  </Svg>
);

export const IconManagement = (p) => (
  <Svg {...p}>
    <path d="M8 6 V40" />
    <rect x="8" y="10" width="16" height="5" />
    <rect x="16" y="20" width="22" height="5" />
    <rect x="8" y="30" width="12" height="5" />
  </Svg>
);

export const IconMEP = (p) => (
  <Svg {...p}>
    <circle cx="14" cy="14" r="3" />
    <circle cx="34" cy="14" r="3" />
    <circle cx="14" cy="34" r="3" />
    <circle cx="34" cy="34" r="3" />
    <circle cx="24" cy="24" r="3" />
    <path d="M14 14 L24 24" />
    <path d="M34 14 L24 24" />
    <path d="M14 34 L24 24" />
    <path d="M34 34 L24 24" />
  </Svg>
);

export const IconGeotech = (p) => (
  <Svg {...p}>
    <path d="M6 16 H42" />
    <path d="M6 24 H42" />
    <path d="M6 32 H42" />
    <path d="M6 40 H42" />
    <path d="M24 16 V6" />
    <path d="M19 10 L24 5 L29 10" />
  </Svg>
);

export const IconUrban = (p) => (
  <Svg {...p}>
    <rect x="8" y="20" width="8" height="20" />
    <rect x="19" y="12" width="9" height="28" />
    <rect x="31" y="16" width="9" height="24" />
    <path d="M6 40 H42" />
  </Svg>
);

export const IconCadastral = (p) => (
  <Svg {...p}>
    <rect x="8" y="8" width="32" height="32" />
    <path d="M8 24 H40" />
    <path d="M24 8 V40" />
    <circle cx="8" cy="8" r="2.2" fill="currentColor" stroke="none" />
    <circle cx="40" cy="8" r="2.2" fill="currentColor" stroke="none" />
    <circle cx="8" cy="40" r="2.2" fill="currentColor" stroke="none" />
    <circle cx="40" cy="40" r="2.2" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconLandscape = (p) => (
  <Svg {...p}>
    <path d="M6 38 H42" />
    <path d="M24 38 V26" />
    <circle cx="24" cy="18" r="8" />
    <path d="M12 38 V32" />
    <circle cx="12" cy="28" r="4" />
  </Svg>
);