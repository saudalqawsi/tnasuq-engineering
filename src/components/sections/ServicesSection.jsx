import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { CheckCircle } from 'lucide-react';
import {
  IconArchitectural,
  IconStructural,
  IconManagement,
  IconHardHat,
  IconMEP,
  IconGeotech,
  IconUrban,
  IconCadastral,
  IconLandscape,
} from '@/components/ui/BrandIcons';

const serviceIcons = [
  IconArchitectural,
  IconStructural,
  IconManagement,
  IconHardHat,
  IconMEP,
  IconGeotech,
  IconUrban,
  IconCadastral,
  IconLandscape,
];

export default function ServicesSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="services"
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
        <div className="mb-16 md:mb-24">
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
        </div>

        {/* Services grid — constrained, compact blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 max-w-6xl mx-auto">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <div
                key={i}
                className={`group relative bg-foreground p-6 md:p-7 hover:bg-foreground/80 transition-colors duration-500 ${
                  service.highlight ? 'ring-1 ring-inset ring-primary/30' : ''
                }`}
              >
                {service.highlight && (
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                    <span className={`text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 bg-primary/20 text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {isRTL ? 'خدماتنا' : 'Core Service'}
                    </span>
                  </div>
                )}
                {service.partner && (
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                    <span className={`text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 bg-primary-foreground/10 text-primary-foreground/40 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {isRTL ? 'عبر الشركاء' : 'Via Partners'}
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <Icon
                    className="w-9 h-9 group-hover:text-primary-foreground transition-colors duration-500"
                    style={{ color: 'hsl(32 55% 60%)' }}
                  />
                </div>
                <h3 className={`text-base font-semibold mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {service.title}
                </h3>
                <p className={`text-xs text-primary-foreground/50 leading-[1.75] group-hover:text-primary-foreground/70 transition-colors duration-500 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {service.description}
                </p>
                <div className="mt-6 font-inter text-[2.25rem] font-bold text-primary-foreground/[0.06] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

        {/* Saudi Code & Authority expertise strip */}
        <div className="mt-16 border border-primary/20 p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="shrink-0">
              <span className={`text-xs tracking-[0.2em] text-primary uppercase block mb-3 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {t.services.codesBadge.title}
              </span>
              <div className="w-8 h-[1.5px] bg-primary" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 flex-1">
              {t.services.codesBadge.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: 'hsl(32 55% 60%)' }} />
                  <span className={`text-sm text-primary-foreground/60 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}