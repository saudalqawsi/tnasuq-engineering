import React, { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, useInView } from 'framer-motion';

/**
 * Blueprint grid SVG pattern — semi-transparent, behind the wordmarks.
 * Each variant has a slightly different grid treatment.
 */

// Variant A: Fine orthogonal grid (standard blueprint)
function GridA() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridA" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="hsl(32 45% 38% / 0.18)" strokeWidth="0.5" />
        </pattern>
        <pattern id="gridABig" width="96" height="96" patternUnits="userSpaceOnUse">
          <path d="M 96 0 L 0 0 0 96" fill="none" stroke="hsl(32 45% 38% / 0.32)" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridA)" />
      <rect width="100%" height="100%" fill="url(#gridABig)" />
    </svg>);

}

// Variant B: Diagonal hatching grid
function GridB() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridB" width="20" height="20" patternUnits="userSpaceOnUse">
          <line x1="0" y1="20" x2="20" y2="0" stroke="hsl(32 45% 38% / 0.14)" strokeWidth="0.5" />
        </pattern>
        <pattern id="gridBOrtho" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" fill="none" stroke="hsl(32 45% 38% / 0.22)" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridB)" />
      <rect width="100%" height="100%" fill="url(#gridBOrtho)" />
    </svg>);

}

// Variant C: Radial / concentric rings with orthogonal axis lines
function GridC() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridCSmall" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsl(32 45% 38% / 0.12)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridCSmall)" />
      {/* Axis crosshairs centered */}
      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="hsl(32 45% 38% / 0.25)" strokeWidth="0.6" />
      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="hsl(32 45% 38% / 0.25)" strokeWidth="0.6" />
      {/* Concentric circles */}
      <circle cx="50%" cy="50%" r="60" fill="none" stroke="hsl(32 45% 38% / 0.1)" strokeWidth="0.7" />
      <circle cx="50%" cy="50%" r="100" fill="none" stroke="hsl(32 45% 38% / 0.1)" strokeWidth="0.7" />
      <circle cx="50%" cy="50%" r="148" fill="none" stroke="hsl(32 45% 38% / 0.1)" strokeWidth="0.7" />
    </svg>);

}

// Diamond joint SVG element
function DiamondJoint({ color = 'hsl(32 55% 36%)' }) {
  return (
    <svg width="12" height="12" viewBox="0 0 10 10" className="mx-1">
      <rect x="1.5" y="1.5" width="7" height="7" rx="0" transform="rotate(45 5 5)"
      fill="none" stroke={color} strokeWidth="1.5" />
      <rect x="3.5" y="3.5" width="3" height="3" transform="rotate(45 5 5)"
      fill={color} />
    </svg>);

}

const VARIANTS = [
{
  id: 'A',
  label: { en: 'Variation A — Blueprint Grid', ar: 'النسخة A — شبكة المخطط' },
  bg: 'bg-[hsl(40_7%_95%)]',
  Grid: GridA,
  // Clean stacked lockup, rule + diamond
  render: (foreground) =>
  <div className="flex flex-col items-center gap-0 select-none">
        <span className="font-inter font-black tracking-[-0.03em] leading-none"
    style={{ fontSize: 52, color: foreground }}>
          TNASUQ
        </span>
        <div className="flex items-center my-[5px] w-full">
          <span className="flex-1 block" style={{ height: 1, background: `${foreground}30` }} />
          <DiamondJoint color="hsl(32 55% 36%)" />
          <span className="flex-1 block" style={{ height: 1, background: `${foreground}30` }} />
        </div>
        <span className="font-arabic font-bold tracking-[0.1em] leading-none"
    style={{ fontSize: 38, color: foreground }}>
          تناسق
        </span>
      </div>

},
{
  id: 'B',
  label: { en: 'Variation B — Hatched Grid', ar: 'النسخة B — شبكة مائلة' },
  bg: 'bg-[hsl(40_7%_95%)]',
  Grid: GridB,
  // Side by side split by a vertical structural rule
  render: (foreground) =>
  <div className="flex items-center gap-0 select-none">
        <span className="font-inter font-black tracking-[-0.03em] leading-none"
    style={{ fontSize: 46, color: foreground }}>
          TNASUQ
        </span>
        {/* Vertical rule with diamond */}
        <div className="flex flex-col items-center mx-4" style={{ height: 64 }}>
          <span className="flex-1 block w-[1px]" style={{ background: `${foreground}25` }} />
          <DiamondJoint color="hsl(32 55% 36%)" />
          <span className="flex-1 block w-[1px]" style={{ background: `${foreground}25` }} />
        </div>
        <span className="font-arabic font-bold tracking-[0.08em] leading-none"
    style={{ fontSize: 38, color: foreground }}>
          تناسق
        </span>
      </div>

},
{
  id: 'C',
  label: { en: 'Variation C — Crosshair Grid', ar: 'النسخة C — شبكة محورية' },
  bg: 'bg-[hsl(40_7%_95%)]',
  Grid: GridC,
  // Centered stacked, letters separated by a full-width rule band
  render: (foreground) =>
  <div className="flex flex-col items-center select-none" style={{ gap: 0 }}>
        <span className="font-inter font-black tracking-[-0.03em] leading-none"
    style={{ fontSize: 52, color: foreground }}>
          TNASUQ
        </span>
        {/* Rule band with corner registration marks */}
        <div className="relative w-full flex items-center justify-center my-2" style={{ height: 16 }}>
          <div className="absolute left-0 top-0 w-2 h-2 border-l border-t"
      style={{ borderColor: 'hsl(32 55% 36% / 0.6)' }} />
          <div className="absolute right-0 top-0 w-2 h-2 border-r border-t"
      style={{ borderColor: 'hsl(32 55% 36% / 0.6)' }} />
          <div className="absolute left-0 bottom-0 w-2 h-2 border-l border-b"
      style={{ borderColor: 'hsl(32 55% 36% / 0.6)' }} />
          <div className="absolute right-0 bottom-0 w-2 h-2 border-r border-b"
      style={{ borderColor: 'hsl(32 55% 36% / 0.6)' }} />
          <span className="w-full block" style={{ height: '0.5px', background: `${foreground}20` }} />
          <DiamondJoint color="hsl(32 55% 36%)" />
          <span className="w-full block" style={{ height: '0.5px', background: `${foreground}20` }} />
        </div>
        <span className="font-arabic font-bold tracking-[0.12em] leading-none"
    style={{ fontSize: 40, color: foreground }}>
          تناسق
        </span>
      </div>

}];


export default function LogoVariationsSection() {
  const { isRTL } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const foreground = 'hsl(0 0% 10%)';

  return (
    <section
      id="logo-variations"
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden hidden"
      dir={isRTL ? 'rtl' : 'ltr'}>
      
      





















































      
    </section>);

}