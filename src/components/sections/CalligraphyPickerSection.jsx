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
    </div>);

}

export default function CalligraphyPickerSection() {
  const [selected, setSelected] = useState(ACTIVE_STYLE);

  return null;































































































}