import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { IconPermit, IconLayers, IconBolt } from '@/components/ui/BrandIcons';

const pillars = {
  en: [
    {
      number: '01',
      icon: IconPermit,
      title: 'Zero Permit Surprises',
      body: 'We have processed approvals with Amanat Al-Riyadh, MOMRA, SEC, and NWC across dozens of projects. We know exactly what each authority requires before a drawing is submitted — preventing the costly back-and-forth that delays most projects.',
    },
    {
      number: '02',
      icon: IconLayers,
      title: 'One Firm, Full Accountability',
      body: 'Architecture, structure, MEP, supervision — under one contract and one point of contact. No finger-pointing between consultants. If something needs fixing on site, we are the ones who fix it.',
    },
    {
      number: '03',
      icon: IconBolt,
      title: 'Faster Starts, Proven Designs',
      body: 'Our Saudi market design templates — calibrated to villa, apartment, commercial, and industrial typologies — mean your project moves from brief to permit-ready drawings in weeks, not months, without compromising quality.',
    },
  ],
  ar: [
    {
      number: '٠١',
      icon: IconPermit,
      title: 'لا مفاجآت في التراخيص',
      body: 'أنجزنا طلبات الموافقة لدى أمانة الرياض، ووزارة الشؤون البلدية، والشركة السعودية للكهرباء، والشركة الوطنية للمياه في عشرات المشاريع. نعرف بدقة ما تشترطه كل جهة قبل تقديم أي رسم — وهذا يحمي مشروعك من التأخير المكلف.',
    },
    {
      number: '٠٢',
      icon: IconLayers,
      title: 'شركة واحدة، مسؤولية كاملة',
      body: 'معماري وإنشائي وكهروميكانيكي وإشراف — عقد واحد ونقطة تواصل واحدة. لا تضارب بين المستشارين. وإن ظهر أي خطأ في الموقع، فنحن من يصلحه.',
    },
    {
      number: '٠٣',
      icon: IconBolt,
      title: 'انطلاقة أسرع بتصاميم مُجرّبة',
      body: 'نماذجنا التصميمية للسوق السعودي — فلل وعمائر ومبانٍ تجارية وصناعية — تنقل مشروعك من الموجز إلى رسومات جاهزة للترخيص في أسابيع لا في أشهر، دون أي تنازل عن الجودة.',
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
          {items.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
            <div
              key={i}
              className="group bg-background p-10 md:p-12 hover:bg-card transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-primary/40 bg-primary/5 text-primary">
                  {Icon ? <Icon className="w-5 h-5" /> : null}
                </div>
                <div
                  className="font-inter font-black text-[4rem] leading-none select-none"
                  style={{ color: 'hsl(32 55% 36% / 0.15)' }}
                >
                  {pillar.number}
                </div>
              </div>
              <h3 className={`text-xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {pillar.title}
              </h3>
              <p className={`text-sm text-muted-foreground leading-[1.9] ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {pillar.body}
              </p>
              <div className="mt-8 h-[1.5px] bg-primary w-8 group-hover:w-16 transition-all duration-500" />
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}