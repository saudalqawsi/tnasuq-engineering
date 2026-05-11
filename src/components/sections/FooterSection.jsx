import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FooterSection() {
  const { t, isRTL } = useLanguage();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative bg-foreground text-primary-foreground overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Massive watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-inter font-black text-[18vw] text-primary-foreground/[0.03] leading-none tracking-tighter whitespace-nowrap select-none">
          TNASUQ
        </span>
      </div>

      <div className="relative px-6 md:px-16 lg:px-24 pt-20 pb-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-1 mb-6">
              <span className="text-2xl font-inter font-bold tracking-tight">TNASUQ</span>
              <span className="text-sm font-arabic text-primary-foreground/40">تناسق للاستشارات الهندسية</span>
            </div>
            <p className={`text-sm text-primary-foreground/40 leading-relaxed max-w-xs ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className={`text-xs tracking-[0.2em] text-primary-foreground/30 uppercase block mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL ? 'روابط' : 'Links'}
            </span>
            <div className="flex flex-col gap-3">
              {[
                { id: 'portfolio', label: t.footer.links.portfolio },
                { id: 'services', label: t.footer.links.services },
                { id: 'contact', label: t.footer.links.contact },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300 text-start ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <span className={`text-xs tracking-[0.2em] text-primary-foreground/30 uppercase block mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL ? 'تواصل' : 'Contact'}
            </span>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@tnasuq.com" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-inter">
                info@tnasuq.com
              </a>
              <span className={`text-sm text-primary-foreground/50 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, KSA'}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-primary-foreground/10 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className={`text-xs text-primary-foreground/30 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {t.footer.rights}
          </span>
          <a
            href="https://www.tnasuq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors font-inter"
          >
            www.tnasuq.com
          </a>
        </div>
      </div>
    </footer>
  );
}