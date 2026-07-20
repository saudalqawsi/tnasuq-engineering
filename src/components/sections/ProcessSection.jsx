import React, { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IconInquiry, IconSite, IconDesign, IconHardHat } from '@/components/ui/BrandIcons';

const steps = {
  en: [
    {
      num: '01',
      icon: IconInquiry,
      title: 'Inquiry & Scope',
      body: 'You submit a brief or call us directly. We respond within 24 hours with initial questions to understand your plot, programme, and budget.',
    },
    {
      num: '02',
      icon: IconSite,
      title: 'Site Visit & Proposal',
      body: 'We visit the site, verify municipal records, and prepare a clear proposal covering scope, fees, and realistic timelines — no vague estimates.',
    },
    {
      num: '03',
      icon: IconDesign,
      title: 'Design & Permitting',
      body: 'Our team produces permit-ready drawings and manages all authority submissions — Amanat Al-Riyadh, MOMRA, SEC, NWC — until approvals are secured.',
    },
    {
      num: '04',
      icon: IconHardHat,
      title: 'Supervision & Handover',
      body: 'We supervise construction to ensure the build matches the approved drawings. Final inspections, snagging, and sign-off are included.',
    },
  ],
  ar: [
    {
      num: '٠١',
      icon: IconInquiry,
      title: 'الاستفسار وتحديد النطاق',
      body: 'أرسل لنا ملخّصاً عن مشروعك أو تواصل معنا مباشرةً. نرد خلال ٢٤ ساعة بأسئلة نتعرف من خلالها على قطعة الأرض والمتطلبات الوظيفية والميزانية.',
    },
    {
      num: '٠٢',
      icon: IconSite,
      title: 'الزيارة الميدانية والعرض',
      body: 'نزور الموقع ونتحقق من السجلات البلدية، ونُعد عرضاً واضحاً يشمل النطاق والرسوم والجداول الزمنية الواقعية — دون تقديرات مبهمة.',
    },
    {
      num: '٠٣',
      icon: IconDesign,
      title: 'التصميم والتراخيص',
      body: 'يُعدّ فريقنا رسومات جاهزة للترخيص ويدير طلبات الجهات كافة — أمانة الرياض، ووزارة الشؤون البلدية، والشركة السعودية للكهرباء، والشركة الوطنية للمياه — حتى صدور الموافقات.',
    },
    {
      num: '٠٤',
      icon: IconHardHat,
      title: 'الإشراف والتسليم',
      body: 'نشرف على التنفيذ لضمان مطابقة البناء للرسومات المعتمدة، ويشمل ذلك الفحص النهائي وكشف العيوب والتسليم النهائي للمشروع.',
    },
  ],
};

// Milestone x-positions along the road (fraction of width) — start → end
const POSITIONS = [0.1, 0.37, 0.63, 0.9];

export default function ProcessSection() {
  const { isRTL } = useLanguage();
  const items = isRTL ? steps.ar : steps.en;
  const sectionRef = useRef(null);

  // Travelled-progress along the road tracks scroll through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.9', 'end 0.4'],
  });
  const dashOffset = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const xFor = (i) => (isRTL ? 1 - POSITIONS[i] : POSITIONS[i]) * 100;

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-foreground text-primary-foreground overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Faint blueprint grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="procGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#procGrid)" />
        </svg>
      </div>

      <div className="relative px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1.5px] bg-primary" />
            <span className={`text-sm tracking-[0.2em] text-primary font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL ? 'رحلة المشروع' : 'The Project Journey'}
            </span>
            <div className="w-12 h-[1.5px] bg-primary" />
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'} whitespace-pre-line`}>
            {isRTL ? 'من الاستفسار\nإلى التسليم' : 'From inquiry\nto handover'}
          </h2>
        </div>

        {/* ===== Desktop roadmap (≥ lg) ===== */}
        <div className="hidden lg:block relative" style={{ height: '30rem' }}>
          {/* The road */}
          <svg
            className="absolute left-0 right-0 w-full"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            height="56"
            viewBox="0 0 1000 56"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Road edges */}
            <path d="M 40 28 Q 250 -4 500 28 T 960 28" stroke="hsl(32 45% 38% / 0.35)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 40 28 Q 250 60 500 28 T 960 28" stroke="hsl(32 45% 38% / 0.35)" strokeWidth="2" strokeLinecap="round" />
            {/* Base dashed centre line */}
            <path
              id="procRoad"
              d="M 40 28 Q 250 28 500 28 T 960 28"
              stroke="hsl(32 55% 70% / 0.25)"
              strokeWidth="2"
              strokeDasharray="2 14"
              strokeLinecap="round"
            />
            {/* Travelled (filled as you scroll) */}
            <motion.path
              d="M 40 28 Q 250 28 500 28 T 960 28"
              stroke="hsl(30 45% 58%)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="2 14"
              style={{ strokeDashoffset: dashOffset, pathLength: 1 }}
            />
          </svg>

          {/* Start / End caps */}
          <span
            className="absolute top-1/2 z-20 -translate-y-1/2 text-[10px] tracking-[0.3em] font-inter text-primary-foreground/40"
            style={isRTL ? { right: '2%' } : { left: '2%' }}
          >
            {isRTL ? 'البداية' : 'START'}
          </span>
          <span
            className="absolute top-1/2 z-20 -translate-y-1/2 text-[10px] tracking-[0.3em] font-inter text-primary"
            style={isRTL ? { left: '2%' } : { right: '2%' }}
          >
            {isRTL ? 'التسليم' : 'FINISH'}
          </span>

          {/* Milestones */}
          {items.map((step, i) => {
            const Icon = step.icon;
            const isTop = i % 2 === 0; // zig-zag: even above, odd below
            const left = xFor(i);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: isTop ? -24 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="absolute z-30"
                style={{ left: `${left}%`, top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <div className="relative flex flex-col items-center">
                  {/* Card */}
                  <div
                    className={`absolute w-60 ${isTop ? 'bottom-[3.5rem]' : 'top-[3.5rem]'}`}
                    style={{ transform: 'translateX(-50%)' }}
                  >
                    <div className="border border-primary/30 bg-foreground/80 backdrop-blur-sm p-5 shadow-xl">
                      <span
                        className="block font-inter font-black text-3xl mb-1"
                        style={{ color: 'hsl(32 55% 60% / 0.5)' }}
                      >
                        {step.num}
                      </span>
                      <h3 className={`text-base font-bold mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>{step.title}</h3>
                      <p className={`text-xs text-primary-foreground/60 leading-[1.85] ${isRTL ? 'font-arabic' : 'font-inter'}`}>{step.body}</p>
                    </div>
                    {/* stem to marker */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-[1px] bg-primary/30 ${isTop ? 'top-full' : 'bottom-full'}`}
                      style={{ height: '3.5rem' }}
                    />
                  </div>

                  {/* Milestone marker */}
                  <div className="relative w-16 h-16 rounded-full bg-foreground border-2 border-primary flex items-center justify-center shadow-[0_0_0_6px_hsl(0_0%_6%)]">
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== Mobile / tablet vertical roadmap ===== */}
        <div className="lg:hidden relative pl-8">
          {/* Vertical road */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-primary/20" style={isRTL ? { right: '1.5rem' } : { left: '1.5rem' }} />
          <motion.div
            className="absolute top-0 w-[2px] bg-primary origin-top"
            style={{ height: progressWidth, ...(isRTL ? { right: '1.5rem' } : { left: '1.5rem' }) }}
          />

          <div className="space-y-10">
            {items.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative"
                >
                  {/* Marker */}
                  <div
                    className="absolute top-0 w-12 h-12 rounded-full bg-foreground border-2 border-primary flex items-center justify-center shadow-[0_0_0_4px_hsl(0_0%_6%)]"
                    style={isRTL ? { right: '0', transform: 'translateX(35%)' } : { left: '0', transform: 'translateX(-35%)' }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  {/* Card */}
                  <div className={`border border-primary/30 bg-foreground/80 backdrop-blur-sm p-5 ${isRTL ? 'mr-16 text-right' : 'ml-16 text-left'}`}>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-inter font-black text-2xl" style={{ color: 'hsl(32 55% 60% / 0.5)' }}>{step.num}</span>
                      <h3 className={`text-base font-bold ${isRTL ? 'font-arabic' : 'font-inter'}`}>{step.title}</h3>
                    </div>
                    <p className={`text-xs text-primary-foreground/60 leading-[1.85] ${isRTL ? 'font-arabic' : 'font-inter'}`}>{step.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`group inline-flex items-center gap-3 border border-primary text-primary px-8 py-4 text-sm tracking-wider font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-500 ${isRTL ? 'font-arabic' : 'font-inter'}`}
          >
            {isRTL ? 'ابدأ مشروعك' : 'Start a Project'}
            <span className="inline-block w-5 h-[1.5px] bg-current group-hover:w-8 transition-all duration-300" />
          </button>
          <span className={`text-sm text-primary-foreground/30 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {isRTL ? 'نرد خلال ٢٤ ساعة' : 'We respond within 24 hours'}
          </span>
        </div>
      </div>
    </section>
  );
}