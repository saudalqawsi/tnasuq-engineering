import React, { useState } from 'react';
import { CALLIGRAPHY_STYLES, ACTIVE_STYLE } from '@/components/ui/TnasuqLogo';

const LOGO_URL = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/72dedd084_logo_transparent.png';
const shadowFilter = 'drop-shadow(0 1px 5px rgba(0,0,0,0.22)) drop-shadow(0 0px 1px rgba(0,0,0,0.14))';

function LogoPreview({ styleKey }) {
  const cal = CALLIGRAPHY_STYLES[styleKey];
  return (
    <div className="flex items-center gap-3" style={{ lineHeight: 1 }}>
      <img src={LOGO_URL} alt="logo" style={{ height: 44, width: 'auto', filter: shadowFilter, display: 'block' }} />
      <div className="flex flex-col" style={{ gap: 4 }}>
        <span style={{ fontFamily: cal.fontFamily, fontWeight: cal.fontWeight, fontSize: 18, letterSpacing: cal.letterSpacing }}>
          تناسق
        </span>
        <span className="font-inter font-black tracking-[-0.02em]" style={{ fontSize: 13 }}>
          TNASUQ
        </span>
      </div>
    </div>
  );
}

export default function CalligraphyPickerSection() {
  const [selected, setSelected] = useState(ACTIVE_STYLE);

  return (
    <section className="py-16 bg-muted/40 border-t border-border" dir="ltr">
      <div className="px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[1.5px] bg-primary" />
              <span className="text-xs tracking-[0.2em] text-primary font-inter font-medium uppercase">
                Internal — Arabic Calligraphy Preview
              </span>
            </div>
            <h2 className="text-2xl font-inter font-bold text-foreground">
              Pick your preferred logo style
            </h2>
            <p className="text-sm text-muted-foreground font-inter mt-1">
              Click a style below. When decided, tell us the key (A–XX) and we'll lock it in and remove this section.
            </p>
          </div>

          {/* Live preview of selected */}
          <div className="border border-primary/30 bg-background px-6 py-4">
            <p className="text-[10px] tracking-[0.2em] text-primary font-inter uppercase mb-3">
              Current selection — {selected}
            </p>
            <LogoPreview styleKey={selected} />
            <p className="text-[10px] text-muted-foreground font-inter mt-3">
              {CALLIGRAPHY_STYLES[selected].label}
            </p>
          </div>
        </div>

        {/* 10 style cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {Object.keys(CALLIGRAPHY_STYLES).map((key) => {
            const cal = CALLIGRAPHY_STYLES[key];
            const isActive = selected === key;
            return (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`relative group text-left p-5 border transition-all duration-300 ${
                  isActive
                    ? 'border-primary bg-background shadow-md'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
              >
                {/* Key badge */}
                <div
                  className={`absolute top-3 right-3 w-5 h-5 flex items-center justify-center text-[9px] font-inter font-black transition-colors ${
                    isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {key}
                </div>

                {/* Logo preview */}
                <div className="mb-4 flex items-center gap-2.5" style={{ lineHeight: 1 }}>
                  <img src={LOGO_URL} alt="logo" style={{ height: 32, width: 'auto', filter: shadowFilter }} />
                  <div className="flex flex-col" style={{ gap: 3 }}>
                    <span
                      style={{
                        fontFamily: cal.fontFamily,
                        fontWeight: cal.fontWeight,
                        fontSize: 15,
                        letterSpacing: cal.letterSpacing,
                      }}
                    >
                      تناسق
                    </span>
                    <span className="font-inter font-black tracking-[-0.02em]" style={{ fontSize: 10 }}>
                      TNASUQ
                    </span>
                  </div>
                </div>

                {/* Style name */}
                <p className="text-[10px] text-muted-foreground font-inter leading-snug mt-1">
                  {cal.label.split('·')[1]?.trim() || cal.label}
                </p>

                {/* Selected indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                )}
              </button>
            );
          })}
        </div>

        <p className="text-[10px] text-muted-foreground font-inter mt-6 text-center">
          ↑ This section is temporary and will be removed after your selection is confirmed.
        </p>
      </div>
    </section>
  );
}