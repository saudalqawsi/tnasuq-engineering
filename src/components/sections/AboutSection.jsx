import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

const FOUNDED_YEAR = '2016';
// PLACEHOLDER: Replace with founder's actual photo URL after upload
const FOUNDER_PHOTO = null;

const HIGHLIGHTS = {
  en: [
    { value: '8+', label: 'Years in Practice' },
    { value: '120+', label: 'Projects Completed' },
    { value: '4', label: 'Roles in the Sector' },
  ],
  ar: [
    { value: '+٨', label: 'سنوات في القطاع' },
    { value: '+١٢٠', label: 'مشروع منجز' },
    { value: '٤', label: 'أدوار في القطاع' },
  ],
};

// Realistic experience pillars reflecting contractor / consultant / client / developer background
const EXPERIENCE_PILLARS = {
  en: [
    { role: 'Developer', note: 'Understands investment returns, plot yield, and approval timelines from an owner\'s perspective.' },
    { role: 'Contractor', note: 'Site-built judgment — knows what is buildable, where drawings fall short, and how to price risk.' },
    { role: 'Consultant', note: 'Code-compliant design and engineering across residential, commercial, and industrial typologies.' },
    { role: 'Client', note: 'Experienced receiving and evaluating consultancy services — so we know what clients actually need.' },
  ],
  ar: [
    { role: 'مطوّر', note: 'يفهم العوائد الاستثمارية وإنتاجية القطعة ومسارات الترخيص من منظور المالك.' },
    { role: 'مقاول', note: 'خبرة ميدانية حقيقية — معرفة ما يمكن تنفيذه فعلياً، وأين تقصر الرسومات، وكيف تُقيَّم المخاطر.' },
    { role: 'مستشار', note: 'تصميم وهندسة متوافقة مع الكودات عبر مشاريع سكنية وتجارية وصناعية.' },
    { role: 'عميل', note: 'تجربة في تلقي خدمات الاستشارة وتقييمها — مما يمنحنا فهماً حقيقياً لما يحتاجه العميل فعلاً.' },
  ],
};

const copy = {
  en: {
    tag: 'About Tnasuq',
    headline: 'Built on every side\nof the table',
    body: `Tnasuq Engineering Consultancy was established in ${FOUNDED_YEAR} in Riyadh. Unlike firms that have only ever sat on one side of a project, our principal has occupied every seat — developer, contractor, consultant, and client. That breadth of perspective shapes how we work: we anticipate problems before they reach site, design what can actually be built, and manage approvals with the patience of someone who has been through the process firsthand.

We are backed by a capable, experienced workforce — engineers, architects, and site supervisors who bring direct knowledge of the Saudi Building Code, Amanat Al-Riyadh procedures, and the practical realities of construction in the Kingdom.`,
    founderRole: 'Founding Principal',
    founderTitle: 'Engineering Consultant · Developer · Contractor',
    teamNote: 'Supported by a multidisciplinary team of engineers, architects, and field supervisors with deep experience across the Saudi market.',
  },
  ar: {
    tag: 'عن تناسق',
    headline: 'بُنيت على خبرة\nكل جانب من المشروع',
    body: `تأسست تناسق للاستشارات الهندسية عام ${FOUNDED_YEAR} في الرياض. على خلاف المكاتب التي لم تجلس إلا على طرف واحد من طاولة المشروع، شغل مؤسسنا كل مقعد — مطوّراً ومقاولاً ومستشاراً وعميلاً. هذا الإدراك الشامل يُشكّل طريقة عملنا: نتوقع المشاكل قبل أن تصل إلى الموقع، ونصمم ما يمكن تنفيذه فعلاً، وندير الموافقات بصبر من مرّ بهذه العملية بنفسه.

يدعمنا فريق مؤهّل وذو خبرة من المهندسين والمعماريين ومشرفي المواقع، الذين يمتلكون معرفة عميقة بالكود السعودي للبناء وإجراءات أمانة الرياض والواقع العملي للبناء في المملكة.`,
    founderRole: 'المؤسس الرئيسي',
    founderTitle: 'مستشار هندسي · مطوّر · مقاول',
    teamNote: 'مدعوم بفريق متعدد التخصصات من المهندسين والمعماريين ومشرفي المواقع ذوي الخبرة العميقة في السوق السعودي.',
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

        {/* Two-column: text left, founder right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

          {/* Left 3/5 — body + stats + pillars */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`text-base text-muted-foreground leading-[1.9] whitespace-pre-line mb-12 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {c.body}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 border-t border-border/40 pt-8">
              {highlights.map((h, i) => (
                <div key={i}>
                  <span className="font-inter font-black text-3xl block leading-none mb-1" style={{ color: 'hsl(32 55% 36%)' }}>
                    {h.value}
                  </span>
                  <span className={`text-xs text-muted-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Four-role experience grid */}
            <div className="grid grid-cols-2 gap-px bg-border/30">
              {pillars.map((p, i) => (
                <div key={i} className="bg-background p-5">
                  <span
                    className={`text-xs tracking-[0.15em] uppercase font-medium mb-2 block ${isRTL ? 'font-arabic' : 'font-inter'}`}
                    style={{ color: 'hsl(32 55% 36%)' }}
                  >
                    {p.role}
                  </span>
                  <p className={`text-sm text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {p.note}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 2/5 — founder card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Founder photo */}
            <div className="relative overflow-hidden bg-muted mb-6" style={{ aspectRatio: '3/4' }}>
              {FOUNDER_PHOTO ? (
                <img src={FOUNDER_PHOTO} alt="Founder" className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <span className="text-muted-foreground/40 font-inter text-xs tracking-widest uppercase">
                    Photo placeholder
                  </span>
                  <span className="text-muted-foreground/20 font-inter text-[10px]">Upload your photo</span>
                </div>
              )}
              {/* Accent bar */}
              <div
                className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-1 h-1/2`}
                style={{ background: 'hsl(32 55% 36%)' }}
              />
              {/* Founded badge */}
              <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-foreground text-primary-foreground px-4 py-3`}>
                <span className="font-inter font-black text-2xl block leading-none" style={{ color: 'hsl(32 55% 60%)' }}>
                  {FOUNDED_YEAR}
                </span>
                <span className={`text-[9px] tracking-[0.2em] uppercase text-primary-foreground/50 mt-1 block ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {isRTL ? 'تأسست' : 'Est.'}
                </span>
              </div>
            </div>

            {/* Founder details */}
            <div className="border-t border-border/40 pt-5">
              <span className={`text-sm font-semibold text-foreground block mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {/* PLACEHOLDER: Replace with founder's actual name */}
                {isRTL ? '[اسم المؤسس]' : '[Founder Name]'}
              </span>
              <span className={`text-xs text-primary mb-3 block ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {c.founderTitle}
              </span>
              <span className={`text-xs text-muted-foreground/70 italic leading-relaxed block ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {c.teamNote}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}