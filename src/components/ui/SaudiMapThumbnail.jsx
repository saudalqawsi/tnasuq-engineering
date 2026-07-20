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
          d="M42 24 L128 20 L150 26 L162 34 L166 50 L154 56 L142 60 L150 72 L172 88 L170 106 L144 126 L120 144 L96 138 L74 124 L56 120 L44 102 L30 84 L26 60 L34 40 Z"
          fill={goldFill}
          stroke={goldStroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}