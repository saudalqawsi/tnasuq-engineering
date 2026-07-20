import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import TnasuqLogo from '@/components/ui/TnasuqLogo';
import MaskedLogo from '@/components/ui/MaskedLogo';

// Social icons as inline SVGs (no external dependency needed)
function TwitterX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function Instagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function Snapchat() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.5 2 6 4.5 6 8v1.5c-.6.2-1.5.5-2 1 0 .8.5 1.2 1 1.4-.1.3-.3.6-.5.9-.5.8-1.3 1.4-2.5 1.7.3.7 1.2 1 2.5 1.1.2.5.3 1 .5 1.4.3.6 1 1 2 1 .8 0 1.5-.3 2.5-.6.8-.3 1.5-.4 2-.4s1.2.1 2 .4c1 .3 1.7.6 2.5.6 1 0 1.7-.4 2-1 .2-.4.3-.9.5-1.4 1.3-.1 2.2-.4 2.5-1.1-1.2-.3-2-.9-2.5-1.7-.2-.3-.4-.6-.5-.9.5-.2 1-.6 1-1.4-.5-.5-1.4-.8-2-1V8c0-3.5-2.5-6-6-6z" />
    </svg>
  );
}

// PLACEHOLDER: Replace '#' with your actual social media URLs.
// Remove any entry whose account doesn't exist yet.
const socialLinks = [
  { label: 'X (Twitter)', href: 'https://x.com/tnasuq', Icon: TwitterX },
  { label: 'Instagram', href: 'https://instagram.com/tnasuq', Icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/tnasuq', Icon: LinkedIn },
  { label: 'Snapchat', href: 'https://snapchat.com/add/tnasuq', Icon: Snapchat },
];

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
      {/* Massive brand-mark watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <MaskedLogo className="h-[55vh] w-auto max-w-none select-none opacity-[0.3]" />
      </div>

      <div className="relative px-6 md:px-16 lg:px-24 pt-20 pb-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6 opacity-90">
              <TnasuqLogo size="lg" dark={true} />
            </div>
            <p className={`text-sm text-primary-foreground/40 leading-relaxed max-w-xs mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {t.footer.tagline}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-primary-foreground/15 text-primary-foreground/40 hover:text-primary-foreground hover:border-primary-foreground/40 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className={`text-xs tracking-[0.2em] text-primary-foreground/30 uppercase block mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL ? 'روابط' : 'Links'}
            </span>
            <div className="flex flex-col gap-3">
              {[
                { id: 'about', label: t.footer.links.about },
                { id: 'portfolio', label: t.footer.links.portfolio },
                { id: 'services', label: t.footer.links.services },
                { id: 'process', label: t.footer.links.process },
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
              <a href="tel:+966530336660" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors font-inter">
                +966(0)530336660
              </a>
              <span className={`text-sm text-primary-foreground/50 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {isRTL ? 'حي القيروان، الرياض ١٣٥٣١' : 'Al Qairawan, Riyadh 13531, KSA'}
              </span>
            </div>
          </div>

          {/* National Unified Number / CR */}
          <div>
            <span className={`text-xs tracking-[0.2em] text-primary-foreground/30 uppercase block mb-6 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {t.footer.nationalNumber}
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-inter text-2xl font-bold text-primary-foreground/60 tracking-wider">
                {t.footer.crNumber}
              </span>
              <span className={`text-xs text-primary-foreground/25 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {isRTL ? 'الرقم الموحّد الوطني' : 'National Unified Number'}
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