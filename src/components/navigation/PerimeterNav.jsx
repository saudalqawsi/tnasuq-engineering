import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import TnasuqLogo from '@/components/ui/TnasuqLogo';
import MaskedLogo from '@/components/ui/MaskedLogo';

export default function PerimeterNav() {
  const { lang, toggleLanguage, t, isRTL } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Top bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/90 backdrop-blur-md' : 'bg-transparent'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          {/* Logo */}
          <TnasuqLogo size="md" onClick={() => scrollTo('hero')} scrolled={scrolled} />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 ${
                  isRTL ? 'font-arabic' : 'font-inter'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side: language toggle + menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 border border-border text-xs tracking-widest font-medium text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 group"
              aria-label={t.nav.menu}
            >
              <span className="block w-6 h-[1.5px] bg-foreground transition-all" />
              <span className="block w-4 h-[1.5px] bg-foreground transition-all group-hover:w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Gold-tone company watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <MaskedLogo
                className="h-[72vh] w-auto max-w-none select-none"
                style={{ filter: 'sepia(1) saturate(8) hue-rotate(8deg) brightness(1.15) contrast(1.05)' }}
              />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            <div className="flex flex-col gap-8 items-center">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className={`text-3xl font-light text-foreground hover:text-primary transition-colors ${
                    isRTL ? 'font-arabic' : 'font-inter uppercase tracking-wide'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}