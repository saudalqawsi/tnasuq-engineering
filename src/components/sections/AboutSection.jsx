import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

const FOUNDED_YEAR = '2017'; // First professional role post-degree
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

// Four-quadrant experience grid drawn from CV
const EXPERIENCE_PILLARS = {
  en: [
    {
      role: 'Developer',
      note: 'Currently Development Manager at Diriyah Gate — overseeing mid-to-late stage delivery, governance frameworks, feasibility assessment, and third-party developer partnerships at one of Saudi Arabia\'s most ambitious giga-projects.',
    },
    {
      role: 'Consultant',
      note: 'Project Officer at Atkins (sourced to GPT Special Project Ltd) — reviewing engineering designs, monitoring compliance with scope and contractual standards, and supporting governance audits.',
    },
    {
      role: 'Contractor',
      note: 'Quality & Performance Manager at Arkal for Contracting — enforcing quality control across diverse asset classes, managing land phasing, and ensuring delivery against project objectives.',
    },
    {
      role: 'Client / Authority',
      note: 'Embedded within Diriyah Gate Development Authority evaluating project feasibility from the client side — market demand, financial viability, regulatory compliance, and land acquisition governance.',
    },
  ],
  ar: [
    {
      role: 'مطوّر',
      note: 'مدير تطوير حالياً في شركة بوابة الدرعية — يشرف على مراحل التسليم والإطار الحوكمي وتقييم الجدوى وشراكات المطورين الخارجيين في أحد أضخم مشاريع الجيل الجديد في المملكة.',
    },
    {
      role: 'مستشار',
      note: 'مسؤول مشاريع في Atkins — مراجعة التصاميم الهندسية ومتابعة الامتثال للنطاق والمتطلبات التعاقدية ودعم مراجعات الحوكمة.',
    },
    {
      role: 'مقاول',
      note: 'مدير جودة وأداء في أركال للمقاولات — تطبيق آليات ضبط الجودة عبر فئات أصول متنوعة وإدارة مراحل الأراضي وضمان الالتزام بأهداف المشروع.',
    },
    {
      role: 'عميل / جهة',
      note: 'عمل داخل هيئة تطوير بوابة الدرعية لتقييم جدوى المشاريع من منظور العميل — الطلب السوقي والجدوى المالية والامتثال التنظيمي وحوكمة الاستحواذ على الأراضي.',
    },
  ],
};

const copy = {
  en: {
    tag: 'About the Principal',
    headline: 'Built from every seat\nat the table',
    body: `Saud Mohammed Alqawsi founded Tnasuq Engineering Consultancy after more than eight years working inside Saudi Arabia's most demanding real estate and infrastructure environments — as contractor, consultant, client-side authority, and developer. That breadth is uncommon in a principal: most have held one or two of these roles; Saud has held all four.

His most recent position as Development Manager at Diriyah Gate Company — one of Saudi Vision 2030's flagship giga-projects — gave him direct oversight of complex multi-asset delivery, governance frameworks, third-party developer briefs, and authority-side standards. Before that, his quality management background with a contracting firm sharpened his instinct for what is buildable, where designs fall short on site, and how to hold quality through construction.

Saud is supported by a multidisciplinary team of engineers, architects, and field supervisors who bring hands-on experience across the Saudi market.`,
    founderName: 'Saud Mohammed Alqawsi',
    founderTitle: 'Development Manager · PMP · RMP · Professional Engineer (SCE)',
    teamNote: 'Backed by a capable workforce — engineers, architects, and site supervisors with deep knowledge of SBC, Amanat Al-Riyadh procedures, and Saudi construction practice.',
  },
  ar: {
    tag: 'عن المؤسس',
    headline: 'مبنيٌّ على خبرة\nكل جانب من المشروع',
    body: `أسس سعود محمد القوسي تناسق للاستشارات الهندسية بعد أكثر من ثماني سنوات في أكثر بيئات التطوير العقاري والبنية التحتية تطلباً في المملكة العربية السعودية — مقاولاً ومستشاراً وجهةً حكومية ومطوّراً. هذا الجمع نادر في مؤسس: معظمهم تولّى دوراً أو دورين؛ سعود تولّى الأربعة.

آخر مناصبه كمدير تطوير في شركة بوابة الدرعية — أحد المشاريع العملاقة لرؤية 2030 — أعطاه إشرافاً مباشراً على تسليم متعدد الأصول وأطر الحوكمة ومتطلبات المطورين الخارجيين ومعايير الجهات الرقابية. وقبل ذلك، صقلت خلفيته في إدارة الجودة لدى شركة مقاولات حسّه بما يمكن تنفيذه فعلاً، وأين تقصر التصاميم في الموقع، وكيف يُحافَظ على الجودة طوال مرحلة البناء.

يدعم سعود فريق متعدد التخصصات من المهندسين والمعماريين ومشرفي المواقع، بخبرة عميقة في الكود السعودي للبناء وإجراءات أمانة الرياض وممارسات التشييد السعودية.`,
    founderName: 'سعود محمد القوسي',
    founderTitle: 'مدير تطوير · PMP · RMP · مهندس معتمد (هيئة المهندسين)',
    teamNote: 'مدعوم بفريق كفء من المهندسين والمعماريين ومشرفي المواقع بمعرفة عميقة بالكود السعودي وإجراءات أمانة الرياض وممارسات البناء في المملكة.',
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
          className="mb-16"
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

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

          {/* Left 3/5 — body + stats + pillars */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`text-base text-muted-foreground leading-[1.9] whitespace-pre-line mb-12 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {c.body}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 border-t border-border/40 pt-8">
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
            <div className="grid grid-cols-2 gap-px bg-border/30">
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

          {/* Right 2/5 — founder card (artistic, compact) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Artistic photo frame */}
            <div className="relative">
              {/* Decorative offset border */}
              <div
                className={`absolute ${isRTL ? '-left-3 -bottom-3' : '-right-3 -bottom-3'} w-full h-full border border-primary/25 pointer-events-none`}
              />
              {/* Blueprint hairlines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <div className="absolute left-1/3 top-0 bottom-0 w-[0.5px] bg-primary" />
                <div className="absolute left-0 right-0 top-1/3 h-[0.5px] bg-primary" />
              </div>

              {/* Photo — portrait crop, not too tall */}
              <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: '4/5' }}>
                <img
                  src={FOUNDER_PHOTO}
                  alt="Saud Mohammed Alqawsi"
                  className="w-full h-full object-cover object-top"
                />
                {/* Warm vignette overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 55%, hsl(32 45% 12% / 0.7) 100%)',
                  }}
                />
                {/* Name over photo */}
                <div className={`absolute bottom-0 left-0 right-0 p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <span className={`text-sm font-bold text-white block leading-snug ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {c.founderName}
                  </span>
                </div>
                {/* Founded badge */}
                <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} bg-foreground/90 px-3 py-2`}>
                  <span className="font-inter font-black text-xl block leading-none" style={{ color: 'hsl(32 55% 60%)' }}>
                    {FOUNDED_YEAR}
                  </span>
                  <span className="text-[9px] tracking-[0.18em] uppercase text-white/50 mt-0.5 block font-inter">
                    {isRTL ? 'تأسست' : 'Est.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Founder details below photo */}
            <div className="mt-5 border-t border-border/40 pt-4">
              <span className={`text-xs text-primary mb-1 block ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {c.founderTitle}
              </span>
              <span className={`text-[11px] text-muted-foreground/70 italic leading-relaxed block ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {c.teamNote}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}