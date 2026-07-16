import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

const steps = {
  en: [
    {
      num: '01',
      title: 'Inquiry & Scope',
      body: 'You submit a brief or call us directly. We respond within 24 hours with initial questions to understand your plot, programme, and budget.',
    },
    {
      num: '02',
      title: 'Site Visit & Proposal',
      body: 'We visit the site, verify municipal records, and prepare a clear proposal covering scope, fees, and realistic timelines — no vague estimates.',
    },
    {
      num: '03',
      title: 'Design & Permitting',
      body: 'Our team produces permit-ready drawings and manages all authority submissions — Amanat Al-Riyadh, MOMRA, SEC, NWC — until approvals are secured.',
    },
    {
      num: '04',
      title: 'Supervision & Handover',
      body: 'We supervise construction to ensure the build matches the approved drawings. Final inspections, snagging, and sign-off are included.',
    },
  ],
  ar: [
    {
      num: '٠١',
      title: 'الاستفسار وتحديد النطاق',
      body: 'أرسل لنا ملخّصاً عن مشروعك أو تواصل معنا مباشرةً. نرد خلال ٢٤ ساعة بأسئلة نتعرف من خلالها على قطعة الأرض والمتطلبات الوظيفية والميزانية.',
    },
    {
      num: '٠٢',
      title: 'الزيارة الميدانية والعرض',
      body: 'نزور الموقع ونتحقق من السجلات البلدية، ونُعد عرضاً واضحاً يشمل النطاق والرسوم والجداول الزمنية الواقعية — دون تقديرات مبهمة.',
    },
    {
      num: '٠٣',
      title: 'التصميم والتراخيص',
      body: 'يُعدّ فريقنا رسومات جاهزة للترخيص ويدير طلبات الجهات كافة — أمانة الرياض، ووزارة الشؤون البلدية، والشركة السعودية للكهرباء، والشركة الوطنية للمياه — حتى صدور الموافقات.',
    },
    {
      num: '٠٤',
      title: 'الإشراف والتسليم',
      body: 'نشرف على التنفيذ لضمان مطابقة البناء للرسومات المعتمدة، ويشمل ذلك الفحص النهائي وكشف العيوب والتسليم النهائي للمشروع.',
    },
  ],
};

export default function ProcessSection() {
  const { isRTL } = useLanguage();
  const items = isRTL ? steps.ar : steps.en;

  return (
    <section
      id="process"
      className="relative py-24 md:py-40 bg-foreground text-primary-foreground overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Faint vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        {[25, 50, 75].map((pct) => (
          <div key={pct} className="absolute top-0 bottom-0 w-[0.5px] bg-primary-foreground" style={{ left: `${pct}%` }} />
        ))}
      </div>

      <div className="relative px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1.5px] bg-primary" />
            <span className={`text-sm tracking-[0.2em] text-primary font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL ? 'كيف نعمل' : 'How We Work'}
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
            {isRTL ? 'من الاستفسار\nإلى التسليم' : 'From inquiry\nto handover'}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
          {items.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-foreground p-8 md:p-10 relative"
            >
              {/* Step number — large watermark */}
              <div
                className="font-inter font-black text-[5rem] leading-none mb-6 select-none"
                style={{ color: 'hsl(32 55% 36% / 0.18)' }}
              >
                {step.num}
              </div>

              {/* Connector line between steps (desktop) */}
              {i < items.length - 1 && (
                <div className="hidden lg:block absolute top-[4.5rem] end-0 translate-x-1/2 z-10">
                  <div className="w-6 h-[1px] bg-primary/30" />
                </div>
              )}

              <h3 className={`text-lg font-semibold mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {step.title}
              </h3>
              <p className={`text-sm text-primary-foreground/50 leading-[1.85] group-hover:text-primary-foreground/70 transition-colors duration-400 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {step.body}
              </p>

              {/* Bottom accent */}
              <div className="mt-8 h-[1.5px] bg-primary w-8 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
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