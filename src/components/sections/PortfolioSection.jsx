import React, { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection({ projectImages }) {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Section header */}
      <div className="px-6 md:px-16 lg:px-24 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1.5px] bg-primary" />
            <span className={`text-sm tracking-[0.2em] text-primary font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {t.portfolio.title}
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
            {t.portfolio.subtitle}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl leading-relaxed ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {t.portfolio.description}
          </p>
        </motion.div>
      </div>

      {/* Project grid */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {t.portfolio.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
            >
              <img
                src={projectImages[i]}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/70 transition-all duration-500" />

              {/* Bottom info - always visible */}
              <div className={`absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-foreground/80 to-transparent`}>
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase block mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  style={{ color: 'hsl(32 65% 68%)' }}
                >
                  {project.category}
                </span>
                <h3 className={`text-lg md:text-xl font-semibold text-primary-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {project.title}
                </h3>
              </div>

              {/* Hover content */}
              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`text-sm text-primary-foreground/60 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {project.location}
                    </span>
                  </div>
                  <span className={`text-sm text-primary-foreground/60 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {project.year}
                  </span>
                </div>

                <div>
                  <p className={`text-sm text-primary-foreground/80 mb-6 leading-relaxed max-w-md ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {project.description}
                  </p>
                  <div className="inline-flex items-center gap-2 border-b pb-1 transition-colors" style={{ color: 'hsl(32 65% 68%)', borderColor: 'hsl(32 65% 68% / 0.5)' }}>
                    <span className={`text-xs tracking-wider uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {t.portfolio.viewSpecs}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}