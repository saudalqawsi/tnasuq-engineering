import React from 'react';

/**
 * A bordered, gold-toned thumbnail silhouette of Saudi Arabia.
 * Used in the stats strip to represent "Licensed & Registered in KSA".
 */
export default function SaudiMapThumbnail({ className = '' }) {
  const goldStroke = 'hsl(32 55% 50%)';
  const goldFill = 'hsl(32 55% 45%)';

  return (
    <div
      className={`relative flex items-center justify-center border border-primary/40 bg-primary/5 px-2 py-1.5 ${className}`}
      style={{ width: 'clamp(3rem, 5vw, 4.25rem)' }}
    >
      <svg
        viewBox="0 0 200 150"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Saudi Arabia"
      >
        {/* Gold wash backdrop */}
        <rect x="0" y="0" width="200" height="150" fill="hsl(32 55% 45% / 0.06)" />
        {/* Saudi Arabia silhouette */}
        <path
          d="M44 30 L80 26 L130 26 L165 34 L170 52 L150 58 L150 66 L156 66 L158 54 L168 54 L172 86 L150 108 L126 126 L108 140 L74 128 L48 118 L32 96 L26 64 L34 42 Z"
          fill={goldFill}
          stroke={goldStroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}