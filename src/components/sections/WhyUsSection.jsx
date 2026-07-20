import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ShieldCheck, Handshake, Zap } from 'lucide-react';

const pillars = {
  en: [
    {
      number: '01',
      icon: ShieldCheck,
      title: 'Zero Permit Surprises',
      body: 'We have processed approvals with Amanat Al-Riyadh, MOMRA, SEC, and NWC across dozens of projects. We know exactly what each authority requires before a drawing is submitted — preventing the costly back-and-forth that delays most projects.',
    },
    {
      number: '02',
      icon: Handshake,
      title: 'One Firm, Full Accountability',
      body: 'Architecture, structure, MEP, supervision — under one contract and one point of contact. No finger-pointing between consultants. If something needs fixing on site, we are the ones who fix it.',
    },
    {
      number: '03',
      icon: Zap,
      title: 'Faster Starts, Proven Designs',
      body: 'Our Saudi market design templates — calibrated to villa, apartment, commercial, and industrial typologies — mean your project moves from brief to permit-ready drawings in weeks, not months, without compromising quality.',
    },
  ],
  ar: [
    {
      number: '٠١',
      icon: ShieldCheck,
      title: 'لا مفاجآت في التراخيص',
      body: 'أنجزنا طلبات الموافقة لدى أمانة الرياض، ووزارة الشؤون البلدية، والشركة السعودية للكهرباء، والشركة الوطنية للمياه في عشرات المشاريع. نعرف بدقة ما تشترطه كل جهة قبل تقديم أي رسم — وهذا يحمي مشروعك من التأخير المكلف.',
    },
    {
      number: '٠٢',
      icon: Handshake,
      title: 'شركة واحدة، مسؤولية كاملة',
      body: 'معماري وإنشائي وكهروميكانيكي وإشراف — عقد واحد ونقطة تواصل واحدة. لا تضارب بين المستشارين. وإن ظهر أي خطأ في الموقع، فنحن من يصلحه.',
    },
    {
      number: '٠٣',
      icon: Zap,
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

        {/* Pillars — squeezed side by side; large icon + title, details reveal on hover */}
        <div className="grid grid-cols-3 gap-px bg-border/40 border-y border-border/40">
          {items.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
            <div
              key={i}
              className="group relative bg-background hover:bg-card transition-colors duration-500 flex flex-col items-center text-center py-10 md:py-20 px-3 md:px-10 overflow-hidden"
            >
              {/* Number watermark */}
              <span
                className="absolute top-5 end-6 font-inter font-black text-3xl leading-none select-none opacity-20 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                style={{ color: 'hsl(32 55% 36%)' }}
              >
                {pillar.number}
              </span>

              {/* Blown-up icon — no frame */}
              <div className="relative mb-7 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {Icon ? <Icon className="relative w-10 h-10 md:w-16 md:h-16 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} /> : null}
              </div>

              {/* Title */}
              <h3 className={`relative text-xs md:text-xl font-bold text-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {pillar.title}
              </h3>

              {/* Details — reveal on hover */}
              <div className="relative w-full overflow-hidden max-h-0 opacity-0 group-hover:max-h-72 group-hover:opacity-100 group-hover:mt-5 transition-all duration-500 ease-out">
                <div className="pt-4 border-t border-primary/20">
                  <p className={`text-sm text-muted-foreground leading-[1.85] ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {pillar.body}
                  </p>
                </div>
              </div>

              {/* bottom hairline grows on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary w-0 group-hover:w-16 transition-all duration-500" />
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}