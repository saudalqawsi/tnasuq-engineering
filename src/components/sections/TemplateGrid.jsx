import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const TYPE_ORDER = { facade: 0, amenity: 1, interior: 2 };
function sortedImages(images) {
  return [...images].sort((a, b) => (TYPE_ORDER[a.type] ?? 9) - (TYPE_ORDER[b.type] ?? 9));
}

function TemplateCard({ tpl, index, isRTL, lang, onOpen, category }) {
  const hero = sortedImages(tpl.images)[0];
  const name = lang === 'ar' ? tpl.nameAr : tpl.nameEn;
  const desc = lang === 'ar' ? tpl.descAr : tpl.descEn;
  const tag = lang === 'ar' ? tpl.tagAr : tpl.tagEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      onClick={onOpen}
      className="group relative cursor-pointer overflow-hidden bg-muted hover:z-10 transition-transform duration-500 ease-out hover:scale-[1.015]"
      style={{ aspectRatio: '4 / 3' }}
    >
      <img
        src={hero.url}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
      />

      {/* Tag pill */}
      <div className={`absolute top-4 z-10 ${isRTL ? 'left-4' : 'right-4'}`}>
        <span
          className="block text-[9px] tracking-[0.18em] uppercase px-3 py-1 bg-black/40 backdrop-blur-sm font-inter"
          style={{
            color: tpl.accentColor,
            textShadow: `0 0 10px ${tpl.accentColor}cc, 0 0 20px ${tpl.accentColor}66`,
          }}
        >
          {tag}
        </span>
      </div>

      {/* Category chip */}
      {category && (
        <div className={`absolute top-4 z-10 ${isRTL ? 'right-4' : 'left-4'}`}>
          <span
            className="block text-[9px] tracking-[0.2em] uppercase px-3 py-1 bg-black/35 backdrop-blur-sm font-inter"
            style={{ color: category.color }}
          >
            {lang === 'ar' ? category.ar : category.en}
          </span>
        </div>
      )}

      {/* Base + hover gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Name + hover-reveal detail */}
      <div className={`absolute inset-x-0 bottom-0 p-6 md:p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        <h3 className={`text-2xl md:text-3xl font-bold text-white leading-tight ${isRTL ? 'font-arabic' : 'font-inter'}`}>
          {name}
        </h3>
        <div className="max-h-0 opacity-0 group-hover:max-h-56 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
          <p className={`text-white/75 text-sm leading-relaxed mt-3 mb-4 max-w-md ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {desc}
          </p>
          <span
            className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/90 border-b border-white/40 pb-1 ${
              isRTL ? 'font-arabic' : 'font-inter'
            }`}
          >
            {isRTL ? 'تصفّح المعرض' : 'Browse Gallery'}
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              className={isRTL ? 'rotate-180' : ''}
            >
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TemplateGrid({ templates, category }) {
  const { isRTL, lang } = useLanguage();
  const [active, setActive] = useState(null);
  const [idx, setIdx] = useState(0);

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

  return (
    <>
      {/* 2-column grid of hover-expand quadrants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {templates.map((tpl, i) => (
          <TemplateCard
            key={tpl.id}
            tpl={tpl}
            index={i}
            isRTL={isRTL}
            lang={lang}
            onOpen={() => openGallery(tpl)}
            category={category}
          />
        ))}
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