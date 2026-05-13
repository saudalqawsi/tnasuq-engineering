import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioSection({ projectImages }) {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-40 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Section header */}
      <div className="px-6 md:px-16 lg:px-24 mb-16 md:mb-20">
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
      </div>

      {/* Project grid */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
          {t.portfolio.projects.slice(0, 2).map((project, i) => (
            <ProjectCard key={i} project={project} image={projectImages[i]} index={i} isRTL={isRTL} t={t} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {t.portfolio.projects.slice(2, 4).map((project, i) => (
            <ProjectCard key={i + 2} project={project} image={projectImages[i + 2]} index={i + 2} isRTL={isRTL} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, image, isRTL, t }) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer">
      <img
        src={image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Persistent dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category pill */}
      <div className={`absolute top-5 ${isRTL ? 'right-5' : 'left-5'}`}>
        <span className={`text-[10px] tracking-[0.18em] uppercase px-3 py-1 bg-black/30 backdrop-blur-sm border border-white/20 text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {project.category}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className={`text-xl md:text-2xl font-bold text-white mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {project.title}
            </h3>
            <span className={`text-xs text-white/50 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {project.location} — {project.year}
            </span>
          </div>
          <div className="shrink-0 w-9 h-9 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500 ease-in-out">
          <p className={`text-sm text-white/75 leading-relaxed mt-4 max-w-md ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}