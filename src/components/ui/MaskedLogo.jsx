import React, { useId } from 'react';

const DEFAULT_SRC =
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/09abea324_Designer5.png';

/**
 * Renders the Tnasuq brand mark with its white background keyed to
 * transparency (so it works over light or dark backdrops) using an
 * SVG color matrix on the blue channel.
 */
export default function MaskedLogo({ className, style, src = DEFAULT_SRC, alt = 'Tnasuq', blend = false }) {
  const raw = useId();
  const filterId = `wta-${raw.replace(/[^a-zA-Z0-9]/g, '')}`;

  if (blend) {
    // For small/light backdrops, multiply blend removes the source image's
    // white background cleanly (white→backdrop, bronze stays) with no fringing.
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ ...style, mixBlendMode: 'multiply' }}
        crossOrigin="anonymous"
        aria-label={alt}
        role="img"
      />
    );
  }

  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={alt}
    >
      <defs>
        {/* Steep alpha key on the blue channel: any pixel bluer than B≈0.8 (white +
            near-white/cream backgrounds) → fully transparent; the bronze mark
            (B≈0.2–0.4) stays fully opaque. RGB passes through untouched. */}
        <filter id={filterId}>
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 -2.5 0 2"
          />
        </filter>
      </defs>
      <image
        href={src}
        crossOrigin="anonymous"
        x="0"
        y="0"
        width="100"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        filter={`url(#${filterId})`}
      />
    </svg>
  );
}