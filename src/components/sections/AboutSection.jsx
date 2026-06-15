import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

const FOUNDER_PHOTO = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/8e0590923_DGDAphoto-Copy.jpg';

const HIGHLIGHTS = {
  en: [
    { value: '8+', label: 'Years in the Sector' },
    { value: '5', label: 'Distinct Industry Roles' },
    { value: 'PMP · RMP', label: 'Certifications' },
  ],
  ar: [
    { value: '+٨', label: 'سنوات في القطاع' },
    { value: '٥', label: 'أدوار متخصصة' },
    { value: 'PMP · RMP', label: 'شهادات مهنية' },
  ],
};

const EXPERIENCE_PILLARS = {
  en: [
    { role: 'Developer', note: 'Mid-to-late stage delivery, governance frameworks, feasibility assessment, and third-party developer partnerships at giga-project scale.' },
    { role: 'Consultant', note: 'Reviewing engineering designs, monitoring scope compliance, and supporting governance audits across complex infrastructure programmes.' },
    { role: 'Contractor', note: 'Quality control enforcement across diverse asset classes, managing land phasing and ensuring delivery against project objectives.' },
    { role: 'Client / Authority', note: 'Evaluating project feasibility from the client side — market demand, financial viability, regulatory compliance, and land acquisition governance.' },
  ],
  ar: [
    { role: 'مطوّر', note: 'إشراف على مراحل التسليم والإطار الحوكمي وتقييم الجدوى وشراكات المطورين الخارجيين بمقياس المشاريع العملاقة.' },
    { role: 'مستشار', note: 'مراجعة التصاميم الهندسية ومتابعة الامتثال للنطاق ودعم مراجعات الحوكمة عبر برامج بنية تحتية معقدة.' },
    { role: 'مقاول', note: 'تطبيق آليات ضبط الجودة عبر فئات أصول متنوعة وإدارة مراحل الأراضي وضمان الالتزام بأهداف المشروع.' },
    { role: 'عميل / جهة', note: 'تقييم جدوى المشاريع من منظور العميل — الطلب السوقي والجدوى المالية والامتثال التنظيمي وحوكمة الاستحواذ على الأراضي.' },
  ],
};

const copy = {
  en: {
    tag: 'Who We Are',
    headline: 'Built from every seat\nat the table',
    statement: 'A team that has operated as developer, contractor, consultant, and client — fluent in what the Saudi market demands at every stage of delivery.',
    founderName: 'Saud Mohammed Alqawsi',
    founderTitle: 'Principal · PMP · RMP · Professional Engineer (SCE)',
  },
  ar: {
    tag: 'من نحن',
    headline: 'مبنيٌّ على خبرة\nكل جانب من المشروع',
    statement: 'فريق عمل احترافي خبر السوق السعودي بكل أدواره — مطوّراً ومقاولاً ومستشاراً وجهةً حكومية — وملمّ بمتطلبات كل مرحلة من مراحل التنفيذ.',
    founderName: 'سعود محمد القوسي',
    founderTitle: 'المدير الرئيسي · PMP · RMP · مهندس معتمد',
  },
};

export default function AboutSection() {
  const { isRTL } = useLanguage();
  const c = isRTL ? copy.ar : copy.en;
  const highlights = isRTL ? HIGHLIGHTS.ar : HIGHLIGHTS.en;
  const pillars = isRTL ? EXPERIENCE_PILLARS.ar : EXPERIENCE_PILLARS.en;

  return (
    <section
      id="about"
      className="relative py-24 md:py-40 overflow-hidden bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="px-6 md:px-16 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1.5px] bg-primary" />
            <span className={`text-sm tracking-[0.2em] text-primary font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {c.tag}
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground leading-[1.1] whitespace-pre-line ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
            {c.headline}
          </h2>
        </motion.div>

        {/* Thumbnail + statement row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`flex items-center gap-6 mb-16 pb-10 border-b border-border/40 ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          {/* Circular thumbnail */}
          <div className="shrink-0 relative">
            <div
              className="rounded-full overflow-hidden border-2 border-primary/30"
              style={{ width: 72, height: 72 }}
            >
              <img
                src={FOUNDER_PHOTO}
                alt="Principal"
                className="w-full h-full object-cover object-top"
                style={{ filter: 'grayscale(15%) contrast(1.05)' }}
              />
            </div>
            {/* Decorative ring */}
            <div
              className="absolute inset-[-4px] rounded-full border border-primary/15 pointer-events-none"
            />
          </div>

          {/* Name + Statement */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <span className={`text-[11px] tracking-[0.15em] uppercase text-primary font-medium block mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {c.founderName} — {c.founderTitle}
            </span>
            <p className={`text-base md:text-lg font-medium text-foreground leading-snug max-w-2xl ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {c.statement}
            </p>
          </div>
        </motion.div>

        {/* Stats + Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {highlights.map((h, i) => (
              <div key={i}>
                <span className="font-inter font-black text-2xl block leading-none mb-1" style={{ color: 'hsl(32 55% 36%)' }}>
                  {h.value}
                </span>
                <span className={`text-xs text-muted-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {h.label}
                </span>
              </div>
            ))}
          </div>

          {/* Four-role grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30">
            {pillars.map((p, i) => (
              <div key={i} className="bg-background p-5">
                <span
                  className={`text-xs tracking-[0.15em] uppercase font-medium mb-2 block ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  style={{ color: 'hsl(32 55% 36%)' }}
                >
                  {p.role}
                </span>
                <p className={`text-xs text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {p.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}