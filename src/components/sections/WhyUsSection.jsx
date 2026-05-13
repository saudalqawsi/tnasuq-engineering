import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const pillars = {
  en: [
    {
      number: '01',
      title: 'Saudi Code Expertise',
      body: 'We are deeply versed in the Saudi Building Code (SBC), Wadi Hanifah environmental regulations, Amanat Al-Riyadh requirements, and every service provider standard from SEC to NWC — no surprises at the permitting stage.',
    },
    {
      number: '02',
      title: 'End-to-End Delivery',
      body: 'From the first sketch to final handover, we stay on the project. Design, structure, MEP coordination, authority approvals, site supervision — one firm, full accountability.',
    },
    {
      number: '03',
      title: 'Market-Ready Templates',
      body: 'Our Saudi market design templates are calibrated to the most common asset classes — villas, apartments, commercial, and industrial — so your project starts fast without sacrificing quality.',
    },
  ],
  ar: [
    {
      number: '٠١',
      title: 'خبرة عميقة بالكودات السعودية',
      body: 'نمتلك معرفة راسخة بالكود السعودي للبناء (SBC) وأنظمة وادي حنيفة واشتراطات أمانة الرياض ومتطلبات جميع مزودي الخدمات من شركة الكهرباء إلى المياه — دون مفاجآت في مرحلة التراخيص.',
    },
    {
      number: '٠٢',
      title: 'تسليم متكامل من البداية للنهاية',
      body: 'من الفكرة الأولى حتى التسليم النهائي، نبقى مع المشروع. تصميم، إنشاء، تنسيق كهروميكانيكي، موافقات الجهات، إشراف ميداني — شركة واحدة، مسؤولية كاملة.',
    },
    {
      number: '٠٣',
      title: 'نماذج جاهزة للسوق السعودي',
      body: 'نماذجنا التصميمية معدّة لأبرز فئات الأصول — فلل، عمائر، تجاري وصناعي — لتنطلق بمشروعك بسرعة دون المساس بالجودة.',
    },
  ],
};

export default function WhyUsSection() {
  const { isRTL } = useLanguage();
  const items = isRTL ? pillars.ar : pillars.en;

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Blueprint grid bg */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="whyGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="hsl(32 45% 38%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#whyGrid)" />
        </svg>
      </div>

      <div className="relative px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1.5px] bg-primary" />
            <span className={`text-sm tracking-[0.2em] text-primary font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL ? 'لماذا تناسق' : 'Why Tnasuq'}
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
            {isRTL ? 'الفرق في التفاصيل' : 'The difference is in the details'}
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40">
          {items.map((pillar, i) => (
            <div
              key={i}
              className="group bg-background p-10 md:p-12 hover:bg-card transition-colors duration-500"
            >
              <div
                className="font-inter font-black text-[4rem] leading-none mb-8 select-none"
                style={{ color: 'hsl(32 55% 36% / 0.15)' }}
              >
                {pillar.number}
              </div>
              <h3 className={`text-xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {pillar.title}
              </h3>
              <p className={`text-sm text-muted-foreground leading-[1.9] ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {pillar.body}
              </p>
              <div className="mt-8 h-[1.5px] bg-primary w-8 group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}