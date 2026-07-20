import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const TYPE_ORDER = { facade: 0, amenity: 1, interior: 2 };
function sortedImages(images) {
  return [...images].sort((a, b) => (TYPE_ORDER[a.type] ?? 9) - (TYPE_ORDER[b.type] ?? 9));
}

export default function TemplateCarousel({ templates, category }) {
  const { isRTL, lang } = useLanguage();
  const [active, setActive] = useState(null);
  const [idx, setIdx] = useState(0);
  const scroller = useRef(null);

  const imgs = active ? sortedImages(active.images) : [];
  const count = imgs.length;

  const openGallery = useCallback((tpl) => {
    setActive(tpl);
    setIdx(0);
    document.body.style.overflow = 'hidden';
  }, []);
  const closeGallery = useCallback(() => {
    setActive(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeGallery();
      else if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % count);
      else if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, count, closeGallery]);

  // Drag-to-scroll behaviour on the track
  const dragState = useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const onPointerDown = (e) => {
    const el = scroller.current;
    if (!el) return;
    dragState.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    const el = scroller.current;
    if (!el || !dragState.current.down) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 4) dragState.current.moved = true;
    el.scrollLeft = dragState.current.startLeft - dx;
  };
  const onPointerUp = () => { dragState.current.down = false; };

  const stepBy = (dir) => {
    const el = scroller.current;
    if (!el) return;
    // In RTL, scrollLeft is negative; normalize
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <>
      {/* Carousel track */}
      <div className="relative">
        {/* Edge dim + arrows */}
        <button
          onClick={() => stepBy(isRTL ? 1 : -1)}
          aria-label={isRTL ? 'التالي' : 'Previous'}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center border border-border/60 bg-background/80 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-colors"
          style={isRTL ? { right: '-1.25rem' } : { left: '-1.25rem' }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => stepBy(isRTL ? -1 : 1)}
          aria-label={isRTL ? 'السابق' : 'Next'}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center border border-border/60 bg-background/80 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-colors"
          style={isRTL ? { left: '-1.25rem' } : { right: '-1.25rem' }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scroller}
          dir={isRTL ? 'rtl' : 'ltr'}
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={onPointerUp}
          onMouseLeave={onPointerUp}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 cursor-grab active:cursor-grabbing hide-scroll"
          style={{ scrollbarWidth: 'none' }}
        >
          {templates.map((tpl, i) => {
            const hero = sortedImages(tpl.images)[0];
            const name = lang === 'ar' ? tpl.nameAr : tpl.nameEn;
            const tag = lang === 'ar' ? tpl.tagAr : tpl.tagEn;
            const galleryLabel = isRTL ? 'تصفّح المعرض' : 'View Gallery';
            return (
              <motion.div
                key={tpl.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => { if (!dragState.current.moved) openGallery(tpl); }}
                className="group relative shrink-0 snap-center cursor-pointer overflow-hidden bg-muted hover:z-10 transition-transform duration-500 ease-out hover:scale-[1.02] w-[82%] sm:w-[56%] lg:w-[40%]"
                style={{ aspectRatio: '4 / 3' }}
              >
                <img
                  src={hero.url}
                  alt={name}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06] pointer-events-none"
                />

                {/* Style tag pill */}
                <div className={`absolute top-3 z-10 ${isRTL ? 'left-3' : 'right-3'}`}>
                  <span
                    className="block text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 bg-black/40 backdrop-blur-sm font-inter"
                    style={{ color: tpl.accentColor, textShadow: `0 0 10px ${tpl.accentColor}cc` }}
                  >
                    {tag}
                  </span>
                </div>

                {/* Category chip */}
                {category && (
                  <div className={`absolute top-3 z-10 ${isRTL ? 'right-3' : 'left-3'}`}>
                    <span
                      className="block text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 bg-black/35 backdrop-blur-sm font-inter"
                      style={{ color: category.color }}
                    >
                      {lang === 'ar' ? category.ar : category.en}
                    </span>
                  </div>
                )}

                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Name (always visible) */}
                <div className={`absolute inset-x-0 bottom-0 p-4 md:p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className={`text-lg md:text-xl font-bold text-white leading-tight ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {name}
                  </h3>
                </div>

                {/* Hover: View Gallery prompt */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span
                    className={`inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white text-[11px] tracking-[0.2em] uppercase ${
                      isRTL ? 'font-arabic' : 'font-inter'
                    }`}
                  >
                    {galleryLabel}
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen gallery lightbox */}
      <AnimatePresence>
        {active && (
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
                  style={{ color: active.accentColor }}
                >
                  {lang === 'ar' ? active.tagAr : active.tagEn}
                </p>
                <h2
                  className={`text-xl md:text-2xl font-bold text-white truncate ${
                    isRTL ? 'font-arabic' : 'font-inter'
                  }`}
                >
                  {lang === 'ar' ? active.nameAr : active.nameEn}
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
                  alt={`${lang === 'ar' ? active.nameAr : active.nameEn} ${idx + 1}`}
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