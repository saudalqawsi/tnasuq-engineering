import React, { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, useInView } from 'framer-motion';

const serviceIcons = [
  // Abstract geometric SVG icons for each service
  ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="6" width="36" height="36" />
      <line x1="6" y1="24" x2="42" y2="24" />
      <line x1="24" y1="6" x2="24" y2="42" />
      <circle cx="24" cy="24" r="8" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="24,4 44,16 44,36 24,44 4,36 4,16" />
      <line x1="24" y1="4" x2="24" y2="44" />
      <line x1="4" y1="16" x2="44" y2="36" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 40 L24 8 L40 40 Z" />
      <line x1="14" y1="28" x2="34" y2="28" />
      <line x1="24" y1="8" x2="24" y2="40" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="10" y="24" width="28" height="18" />
      <path d="M6 24 L24 10 L42 24" />
      <line x1="24" y1="24" x2="24" y2="42" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="3" />
      <line x1="24" y1="6" x2="24" y2="14" />
      <line x1="24" y1="34" x2="24" y2="42" />
    </svg>
  ),
  ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 6 L12 42" />
      <path d="M24 6 L24 42" />
      <path d="M36 6 L36 42" />
      <path d="M6 16 L42 16" />
      <path d="M6 32 L42 32" />
    </svg>
  ),
];

export default function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-40 bg-foreground text-primary-foreground overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute left-[8.33%] top-0 bottom-0 w-[0.5px] bg-primary-foreground" />
        <div className="absolute left-[25%] top-0 bottom-0 w-[0.5px] bg-primary-foreground" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[0.5px] bg-primary-foreground" />
        <div className="absolute left-[75%] top-0 bottom-0 w-[0.5px] bg-primary-foreground" />
        <div className="absolute right-[8.33%] top-0 bottom-0 w-[0.5px] bg-primary-foreground" />
      </div>

      <div className="px-6 md:px-16 lg:px-24">
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
              {t.services.title}
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
            {t.services.subtitle}
          </h2>
          <p className={`text-lg text-primary-foreground/60 max-w-2xl leading-relaxed ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {t.services.description}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-foreground p-8 md:p-10 hover:bg-foreground/80 transition-colors duration-500"
              >
                <div className="mb-8">
                  <Icon className="w-12 h-12 group-hover:text-primary-foreground transition-colors duration-500" style={{ color: 'hsl(32 55% 60%)' }} />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm text-primary-foreground/50 leading-[1.8] group-hover:text-primary-foreground/70 transition-colors duration-500 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {service.description}
                </p>
                {/* Index number */}
                <div className="mt-8 font-inter text-[3rem] font-bold text-primary-foreground/[0.06] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}