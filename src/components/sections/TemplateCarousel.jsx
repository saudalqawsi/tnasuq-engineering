import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const TYPE_ORDER = { facade: 0, amenity: 1, interior: 2 };
function sortedImages(images) {
  return [...images].sort((a, b) => (TYPE_ORDER[a.type] ?? 9) - (TYPE_ORDER[b.type] ?? 9));
}

export default function TemplateCarousel({ templates, category }) {
  const { isRTL, lang } = useLanguage();
  const [center, setCenter] = useState(0);
  const [gallery, setGallery] = useState(null);
  const [idx, setIdx] = useState(0);

  const n = templates.length;
  const imgs = gallery ? sortedImages(gallery.images) : [];
  const count = imgs.length;

  const openGallery = useCallback((tpl) => {
    setGallery(tpl);
    setIdx(0);
    document.body.style.overflow = 'hidden';
  }, []);
  const closeGallery = useCallback(() => {
    setGallery(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    if (!gallery) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeGallery();
      else if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % count);
      else if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [gallery, count, closeGallery]);

  // Normalise an offset to the shortest signed distance (handles wrap-around)
  const wrapOffset = (i, c) => {
    let d = i - c;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const step = (dir) => setCenter((c) => (c + dir + n) % n);

  return (
    <>
      {/* Coverflow stage */}
      <div className="relative select-none" style={{ height: 'clamp(22rem, 52vw, 34rem)' }}>
        {/* Arrows */}
        <button
          onClick={() => step(isRTL ? 1 : -1)}
          aria-label={isRTL ? 'التالي' : 'Previous'}
          className="absolute top-1/2 -translate-y-1/2 z-40 w-11 h-11 flex items-center justify-center border border-border/60 bg-background/70 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-colors"
          style={isRTL ? { right: '4rem' } : { left: '4rem' }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => step(isRTL ? -1 : 1)}
          aria-label={isRTL ? 'السابق' : 'Next'}
          className="absolute top-1/2 -translate-y-1/2 z-40 w-11 h-11 flex items-center justify-center border border-border/60 bg-background/70 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-colors"
          style={isRTL ? { left: '4rem' } : { right: '4rem' }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards */}
        <div className="absolute inset-0 flex items-center justify-center">
          {templates.map((tpl, i) => {
            const off = wrapOffset(i, center);
            if (Math.abs(off) > 2) return null;

            const hero = sortedImages(tpl.images)[0];
            const name = lang === 'ar' ? tpl.nameAr : tpl.nameEn;
            const tag = lang === 'ar' ? tpl.tagAr : tpl.tagEn;
            const galleryLabel = isRTL ? 'تصفّح المعرض' : 'View Gallery';
            const isCenter = off === 0;

            // spacing responsive to viewport width
            const spacing = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.62 : 0.42;
            const xPct = off * spacing * 100;
            const scale = isCenter ? 1 : 1 - Math.min(Math.abs(off), 2) * 0.16;
            const opacity = isCenter ? 1 : Math.max(0.18, 1 - Math.abs(off) * 0.42);
            const z = 30 - Math.abs(off) * 10;

            return (
              <motion.div
                key={tpl.id}
                onClick={() => { if (isCenter) openGallery(tpl); else setCenter(i); }}
                animate={{ x: `${xPct}%`, scale, opacity, zIndex: z }}
                transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 1 }}
                className="group absolute w-[78%] sm:w-[52%] lg:w-[38%] cursor-pointer"
                style={{ aspectRatio: '4 / 3', transformOrigin: 'center', pointerEvents: Math.abs(off) > 2 ? 'none' : 'auto' }}
              >
                <div className="relative w-full h-full overflow-hidden bg-muted shadow-2xl">
                  <img
                    src={hero.url}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />

                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  {isCenter && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                  )}

                  {/* Name */}
                  <div className={`absolute inset-x-0 bottom-0 p-4 md:p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className={`text-lg md:text-2xl font-bold text-white leading-tight ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {name}
                    </h3>
                  </div>

                  {/* Hover: View Gallery prompt — top-right corner (center only) */}
                  {isCenter && (
                    <div className={`absolute top-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isRTL ? 'left-3' : 'right-3'}`}>
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/30 text-white text-[10px] tracking-[0.2em] uppercase ${
                          isRTL ? 'font-arabic' : 'font-inter'
                        }`}
                      >
                        {galleryLabel}
                        <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40">
          {templates.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenter(i)}
              aria-label={`${i + 1}`}
              className={`h-1.5 transition-all duration-300 ${i === center ? 'w-8 bg-primary' : 'w-3 bg-border'}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen gallery lightbox */}
      <AnimatePresence>
        {gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4 px-6 md:px-12 py-5 border-b border-white/10">
              <div className={`min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                <p
                  className={`text-xs tracking-[0.2em] uppercase mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  style={{ color: gallery.accentColor }}
                >
                  {lang === 'ar' ? gallery.tagAr : gallery.tagEn}
                </p>
                <h2
                  className={`text-xl md:text-2xl font-bold text-white truncate ${
                    isRTL ? 'font-arabic' : 'font-inter'
                  }`}
                >
                  {lang === 'ar' ? gallery.nameAr : gallery.nameEn}
                </h2>
              </div>
              <button
                onClick={closeGallery}
                aria-label={isRTL ? 'إغلاق' : 'Close'}
                className="shrink-0 w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image stage */}
            <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 select-none">
              <button
                onClick={() => setIdx((i) => (i - 1 + count) % count)}
                aria-label={isRTL ? 'السابق' : 'Previous'}
                className="absolute left-3 md:left-6 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-white/70 hover:bg-white/5 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={idx}
                  src={imgs[idx].url}
                  alt={`${lang === 'ar' ? gallery.nameAr : gallery.nameEn} ${idx + 1}`}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="max-w-[88vw] max-h-[64vh] object-contain"
                />
              </AnimatePresence>

              <button
                onClick={() => setIdx((i) => (i + 1) % count)}
                aria-label={isRTL ? 'التالي' : 'Next'}
                className="absolute right-3 md:right-6 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-white/70 hover:bg-white/5 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Counter + thumbnail strip */}
            <div className="px-6 pt-4 pb-6">
              <div className="text-center text-white/50 text-[11px] tracking-[0.25em] font-inter mb-3">
                {idx + 1} / {count}
              </div>
              <div className="flex items-center justify-center gap-2 overflow-x-auto max-w-3xl mx-auto pb-1">
                {imgs.map((im, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`${i + 1}`}
                    className={`shrink-0 overflow-hidden border transition-all duration-300 ${
                      i === idx
                        ? 'border-primary opacity-100 w-20 h-14'
                        : 'border-white/10 opacity-50 hover:opacity-100 w-14 h-10'
                    }`}
                  >
                    <img src={im.url} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}