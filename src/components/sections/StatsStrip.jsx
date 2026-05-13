import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const stats = {
  en: [
    { value: '120+', label: 'Projects Delivered' },
    { value: '8+', label: 'Years in Saudi Market' },
    { value: '100%', label: 'SBC Compliant Designs' },
    { value: '24h', label: 'Inquiry Response Time' },
  ],
  ar: [
    { value: '+١٢٠', label: 'مشروع منجز' },
    { value: '+٨', label: 'سنوات في السوق السعودي' },
    { value: '١٠٠٪', label: 'تصاميم متوافقة مع الكود' },
    { value: '٢٤ساعة', label: 'وقت الاستجابة للاستفسارات' },
  ],
};

export default function StatsStrip() {
  const { isRTL } = useLanguage();
  const items = isRTL ? stats.ar : stats.en;

  return (
    <div
      className="border-y border-border/60 bg-card"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/40">
        {items.map((stat, i) => (
          <div
            key={i}
            className="px-8 py-10 md:py-12 flex flex-col items-center md:items-start gap-2"
          >
            <span
              className="font-inter font-black text-4xl md:text-5xl leading-none"
              style={{ color: 'hsl(32 55% 36%)' }}
            >
              {stat.value}
            </span>
            <span className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}