import React, { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, useInView } from 'framer-motion';

const LOGOS = [
  {
    url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/a8e7a2d10_generated_image.png',
    en: {
      title: 'Logo A — The Symmetry Diamond',
      description: 'Two mirrored triangles united by a precision hairline. The bisected rhombus embodies Tnasuq — perfect equilibrium between two forces. Timeless, structural, and globally legible.',
    },
    ar: {
      title: 'الشعار A — معين التناسق',
      description: 'مثلثان متقابلان متحدان بخط دقيق. المعين المنقسم يجسّد التناسق — توازن مثالي بين قوتين. خالد الزمن، إنشائي، ومقروء عالمياً.',
    },
  },
  {
    url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/70feb1e7c_generated_image.png',
    en: {
      title: 'Logo B — The Blueprint Letter',
      description: 'The Arabic letter "ت" (Ta for Tnasuq) deconstructed into its geometric skeleton — three nodes above a precise arch. A mark that speaks both languages at once: technical drafting meets Arabic calligraphic heritage.',
    },
    ar: {
      title: 'الشعار B — حرف المخطط',
      description: 'حرف "ت" (تناسق) مُفكَّك إلى هيكله الهندسي — ثلاث نقاط فوق قوس دقيق. علامة تتحدث باللغتين في آن واحد: رسم تقني يلتقي بالإرث الخطي العربي.',
    },
  },
  {
    url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/c48f41092_generated_image.png',
    en: {
      title: 'Logo C — The Structural Grid',
      description: 'Four equal squares in perfect rotational symmetry, each rotated 45°, forming a crystalline unified form — like a precision structural joint viewed from above. Pure homogeneity through repetition.',
    },
    ar: {
      title: 'الشعار C — الشبكة الإنشائية',
      description: 'أربعة مربعات متساوية في تماثل دوراني مثالي، كل منها مدوّر بزاوية ٤٥°، تُشكّل هيئة موحدة بلورية — كوصلة إنشائية دقيقة مرئية من الأعلى. تجانس خالص من خلال التكرار.',
    },
  },
];

export default function LogoProposalsSection() {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="logos"
      ref={ref}
      className="relative py-24 md:py-36 bg-secondary/40 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-40" />

      <div className="relative px-6 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1.5px] bg-primary" />
            <span className={`text-sm tracking-[0.2em] text-primary font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL ? 'هوية بصرية' : 'Visual Identity'}
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
            {isRTL ? '٣ مقترحات للشعار' : '3 Logo Proposals'}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl leading-relaxed ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {isRTL
              ? 'كل تصميم يُترجم مبدأ التناسق بطريقة مختلفة — من التماثل الهندسي البحت إلى الإرث الخطي العربي. اختر الصوت البصري الذي يمثّلك.'
              : 'Each design translates the principle of Tnasuq differently — from pure geometric symmetry to Arabic calligraphic heritage. Choose the visual voice that represents you.'}
          </p>
        </motion.div>

        {/* Logo cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {LOGOS.map((logo, i) => {
            const content = isRTL ? logo.ar : logo.en;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group bg-background border border-border/60 overflow-hidden hover:border-primary/40 transition-colors duration-500"
              >
                {/* Logo image */}
                <div className="relative aspect-square bg-[#F4F4F2] flex items-center justify-center p-8 border-b border-border/60 overflow-hidden">
                  <img
                    src={logo.url}
                    alt={content.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Index badge */}
                  <div className="absolute top-4 right-4 w-7 h-7 border border-border/40 flex items-center justify-center">
                    <span className="text-xs font-inter font-medium text-muted-foreground">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className={`text-base font-semibold text-foreground mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {content.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground leading-[1.8] ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {content.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-start gap-4"
        >
          <div className="w-12 h-[1.5px] bg-border mt-3 flex-shrink-0" />
          <p className={`text-sm text-muted-foreground leading-relaxed max-w-xl ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {isRTL
              ? 'هذه مقترحات أولية. بعد اختيار الاتجاه المناسب، يمكن تطوير الشعار المختار بشكل كامل مع تنويعات الألوان والاستخدامات المختلفة.'
              : 'These are initial concept directions. Once you select a preferred approach, the chosen logo can be fully refined with color variations and all use-case applications.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}