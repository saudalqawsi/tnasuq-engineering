import React, { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection({ projectImages }) {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Section header */}
      <div className="px-6 md:px-16 lg:px-24 mb-16 md:mb-20">
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
                {t.portfolio.subtitle}
              </h2>
              <p className={`text-lg text-muted-foreground max-w-2xl leading-relaxed ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {t.portfolio.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project grid — nasaq-style large cards */}
      <div className="px-6 md:px-16 lg:px-24">
        {/* Top row: two equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
          {t.portfolio.projects.slice(0, 2).map((project, i) => (
            <ProjectCard key={i} project={project} image={projectImages[i]} index={i} inView={inView} isRTL={isRTL} t={t} />
          ))}
        </div>
        {/* Bottom row: two equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {t.portfolio.projects.slice(2, 4).map((project, i) => (
            <ProjectCard key={i + 2} project={project} image={projectImages[i + 2]} index={i + 2} inView={inView} isRTL={isRTL} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, image, index, inView, isRTL, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="group relative overflow-hidden bg-muted cursor-pointer"
      style={{ aspectRatio: '4/3' }}
    >
      <img
        src={image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Persistent dark gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category pill top */}
      <div className={`absolute top-5 ${isRTL ? 'right-5' : 'left-5'}`}>
        <span
          className={`text-[10px] tracking-[0.18em] uppercase px-3 py-1 bg-background/10 backdrop-blur-sm border border-white/20 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}
        >
          {project.category}
        </span>
      </div>

      {/* Bottom info */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8`}>
        {/* Title always visible */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className={`text-xl md:text-2xl font-bold text-white mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {project.title}
            </h3>
            <span className={`text-xs text-white/50 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {project.location} — {project.year}
            </span>
          </div>
          <div className="shrink-0 w-9 h-9 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Description slides up on hover */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out">
          <p className={`text-sm text-white/75 leading-relaxed mt-4 max-w-md ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}