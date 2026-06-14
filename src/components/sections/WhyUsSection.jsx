import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const pillars = {
  en: [
    {
      number: '01',
      title: 'Zero Permit Surprises',
      body: 'We have processed approvals with Amanat Al-Riyadh, MOMRA, SEC, and NWC across dozens of projects. We know exactly what each authority requires before a drawing is submitted — preventing the costly back-and-forth that delays most projects.',
    },
    {
      number: '02',
      title: 'One Firm, Full Accountability',
      body: 'Architecture, structure, MEP, supervision — under one contract and one point of contact. No finger-pointing between consultants. If something needs fixing on site, we are the ones who fix it.',
    },
    {
      number: '03',
      title: 'Faster Starts, Proven Designs',
      body: 'Our Saudi market design templates — calibrated to villa, apartment, commercial, and industrial typologies — mean your project moves from brief to permit-ready drawings in weeks, not months, without compromising quality.',
    },
  ],
  ar: [
    {
      number: '٠١',
      title: 'صفر مفاجآت في التراخيص',
      body: 'أنجزنا طلبات الموافقة لدى أمانة الرياض ووزارة الشؤون البلدية وشركة الكهرباء والمياه في عشرات المشاريع. نعرف تحديداً ما تشترطه كل جهة قبل تقديم أي رسمة — وهذا يحمي مشروعك من التأخير المكلف.',
    },
    {
      number: '٠٢',
      title: 'شركة واحدة، مسؤولية كاملة',
      body: 'معماري وإنشائي وكهروميكانيكي وإشراف — عقد واحد ونقطة تواصل واحدة. لا تضارب بين المستشارين. إن ظهر خطأ في الموقع، نحن من يصلحه.',
    },
    {
      number: '٠٣',
      title: 'انطلاقة أسرع بتصاميم مُختبَرة',
      body: 'نماذجنا التصميمية للسوق السعودي — فلل وعمائر وتجاري وصناعي — تُحرّك مشروعك من الموجز إلى الرسومات الجاهزة للترخيص في أسابيع لا أشهر، دون أي تنازل عن الجودة.',
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