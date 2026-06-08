import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/de24cfd8f_image.png';

export default function TnasuqLogo({ size = 'md', onClick, dark = false }) {
  const sizes = {
    sm: { h: 32 },
    md: { h: 44 },
    lg: { h: 58 },
  };
  const s = sizes[size] || sizes.md;

  const img = (
    <img
      src={LOGO_URL}
      alt="Tnasuq"
      style={{
        height: s.h,
        width: 'auto',
        // Drop-shadow to define the mark on any background
        filter: dark
          ? 'drop-shadow(0 1px 6px rgba(0,0,0,0.55)) drop-shadow(0 0px 2px rgba(0,0,0,0.35))'
          : 'drop-shadow(0 1px 4px rgba(0,0,0,0.18)) drop-shadow(0 0px 1px rgba(0,0,0,0.12))',
        display: 'block',
      }}
    />
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="focus:outline-none flex items-center" style={{ lineHeight: 1 }}>
        {img}
      </button>
    );
  }

  return <div className="flex items-center" style={{ lineHeight: 1 }}>{img}</div>;
}