import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

// ─── PLACEHOLDERS — fill these in ────────────────────────────────────────────
// PLACEHOLDER: Replace with your actual founding year
const FOUNDED_YEAR = '2016';

// PLACEHOLDER: Replace with a real photo or architectural render you own
const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=80';

// PLACEHOLDER: Confirm or update these figures
const HIGHLIGHTS = {
  en: [
    { value: '8+', label: 'Years of Practice' },
    { value: '120+', label: 'Projects Completed' },
    { value: '6', label: 'Engineering Disciplines' },
  ],
  ar: [
    { value: '+٨', label: 'سنوات خبرة' },
    { value: '+١٢٠', label: 'مشروع منجز' },
    { value: '٦', label: 'تخصصات هندسية' },
  ],
};

const copy = {
  en: {
    tag: 'About Tnasuq',
    headline: 'Built on deep roots\nin the Saudi market',
    // PLACEHOLDER: Write 2–3 sentences about the firm's story, founding, and ethos
    body: `Tnasuq Engineering Consultancy was established in ${FOUNDED_YEAR} in Riyadh with a singular purpose: to deliver engineering work that is precise, code-compliant, and built to last. Our team combines formal training with hands-on experience across residential, commercial, and industrial projects throughout the Kingdom.

We operate at the intersection of technical rigour and local knowledge — understanding not just what the Saudi Building Code requires, but how Amanat Al-Riyadh, MOMRA, SEC, and NWC actually process approvals on the ground.`,
    // PLACEHOLDER: Add founder name and title
    founder: '[Founder Name], [Title]',
    founderNote: 'Founding Principal',
  },
  ar: {
    tag: 'عن تناسق',
    headline: 'جذور راسخة\nفي السوق السعودي',
    // PLACEHOLDER: ترجمة أو صياغة النص بأسلوبك
    body: `تأسست تناسق للاستشارات الهندسية عام ${FOUNDED_YEAR} في الرياض بهدف واحد: تقديم أعمال هندسية دقيقة ومتوافقة مع الكودات ومصممة للأمد البعيد. يجمع فريقنا بين التدريب الأكاديمي الرصين والخبرة الميدانية الواسعة في مشاريع سكنية وتجارية وصناعية في أرجاء المملكة.

نعمل عند تقاطع الصرامة التقنية والمعرفة المحلية — إذ لا نكتفي بفهم ما يشترطه الكود السعودي للبناء، بل نعرف كيف تعالج أمانة الرياض ووزارة الشؤون البلدية وشركات الكهرباء والمياه طلبات الموافقة فعلياً على أرض الواقع.`,
    // PLACEHOLDER: أضف اسم المؤسس ولقبه
    founder: '[اسم المؤسس]، [اللقب]',
    founderNote: 'المؤسس الرئيسي',
  },
};

export default function AboutSection() {
  const { isRTL } = useLanguage();
  const c = isRTL ? copy.ar : copy.en;
  const highlights = isRTL ? HIGHLIGHTS.ar : HIGHLIGHTS.en;

  return (
    <section
      id="about"
      className="relative py-24 md:py-40 overflow-hidden bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src={ABOUT_IMAGE}
                alt="Tnasuq office or project"
                className="w-full h-full object-cover"
              />
              {/* Accent border */}
              <div
                className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-1 h-2/3`}
                style={{ background: 'hsl(32 55% 36%)' }}
              />
            </div>

            {/* Floating founded badge */}
            <div
              className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} bg-foreground text-primary-foreground px-5 py-4`}
            >
              <span className="font-inter font-black text-3xl block leading-none" style={{ color: 'hsl(32 55% 60%)' }}>
                {FOUNDED_YEAR}
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 mt-1 block ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {isRTL ? 'تأسست' : 'Est.'}
              </span>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1.5px] bg-primary" />
              <span className={`text-sm tracking-[0.2em] text-primary font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {c.tag}
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-foreground mb-8 leading-[1.1] whitespace-pre-line ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}
            >
              {c.headline}
            </h2>

            <div className={`space-y-4 text-base text-muted-foreground leading-[1.9] mb-10 whitespace-pre-line ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {c.body}
            </div>

            {/* Highlight stats row */}
            <div className="grid grid-cols-3 gap-6 mb-10 border-t border-border/40 pt-8">
              {highlights.map((h, i) => (
                <div key={i}>
                  <span
                    className="font-inter font-black text-3xl block leading-none mb-1"
                    style={{ color: 'hsl(32 55% 36%)' }}
                  >
                    {h.value}
                  </span>
                  <span className={`text-xs text-muted-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Founder attribution — PLACEHOLDER */}
            <div className="flex items-center gap-4 pt-6 border-t border-border/30">
              {/* PLACEHOLDER: swap this div for a real headshot <img> */}
              <div
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground text-xs font-inter"
              >
                Photo
              </div>
              <div>
                <span className={`text-sm font-semibold text-foreground block ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {c.founder}
                </span>
                <span className={`text-xs text-muted-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {c.founderNote}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}