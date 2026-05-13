import React, { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <img
          src={heroImage}
          alt="Architectural structure"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </motion.div>

      {/* Blueprint hairlines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8.33%] top-0 bottom-0 w-[0.5px] bg-border/30" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[0.5px] bg-border/20" />
        <div className="absolute right-[8.33%] top-0 bottom-0 w-[0.5px] bg-border/30" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24"
        style={{ opacity: textOpacity, y: textY }}
      >
        <div className="max-w-4xl">
          {/* Vertical company name on the side */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 hidden lg:block ${
              isRTL ? 'left-8' : 'right-8'
            }`}
          >
            <span
              className="text-[10rem] font-inter font-black text-foreground/[0.04] leading-none tracking-tighter"
              style={{ writingMode: 'vertical-lr' }}
            >
              TNASUQ
            </span>
          </div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1.5px] bg-primary" />
            <span
              className={`text-sm tracking-[0.2em] font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}
              style={{ color: 'hsl(32 55% 36%)', textShadow: '0 1px 8px hsl(32 55% 70% / 0.35)' }}
            >
              {t.hero.tagline}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6"
          >
            {isRTL ? (
              <span className="font-arabic text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] text-foreground">
                تناسق
                <br />
                للاستشارات
                <br />
                <span style={{ color: 'hsl(32 55% 36%)', textShadow: '0 2px 20px hsl(32 55% 70% / 0.4)' }}>الهندسية</span>
              </span>
            ) : (
              <span className="font-inter text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-foreground">
                Tnasuq
                <br />
                Engineering
                <br />
                <span style={{ color: 'hsl(32 55% 36%)', textShadow: '0 2px 20px hsl(32 55% 70% / 0.4)' }}>Consultancy</span>
              </span>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 ${
              isRTL ? 'font-arabic' : 'font-inter'
            }`}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-wider font-medium hover:bg-primary transition-colors duration-500 ${
              isRTL ? 'font-arabic' : 'font-inter'
            }`}
          >
            {t.hero.cta}
            <span className="inline-block w-5 h-[1.5px] bg-background group-hover:w-8 transition-all duration-300" />
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className={`text-[10px] tracking-[0.3em] text-muted-foreground uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}