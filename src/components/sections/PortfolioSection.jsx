import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Template definitions ────────────────────────────────────────────────────
// Each template: { id, nameEn, nameAr, tagEn, tagAr, accentColor, images: [{url, type:'facade'|'amenity'|'interior'}] }
const TEMPLATES = [
  {
    // Terracotta mud architecture, white Najdi friezes, wooden ceilings & courtyard
    id: 'najdi',
    nameEn: 'Najdi',
    nameAr: 'نجدي',
    tagEn: 'Arabian Heritage',
    tagAr: 'التراث العربي النجدي',
    accentColor: '#a0622a',
    images: [
      // Façades first
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/817efed2c_Picture1.jpg',  type: 'facade' },   // P1  – front day
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/4b00b3f98_Picture32.jpg', type: 'facade' },   // P32 – front dusk
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/b81fb5b86_Picture31.jpg', type: 'facade' },   // P31 – side night
      // Amenity
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/e853e80d2_Picture36.jpg', type: 'amenity' },  // P36 – open courtyard
      // Interiors
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/6898d0f84_Picture33.jpg', type: 'interior' }, // P33 – living + dining
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/69121363a_Picture34.jpg', type: 'interior' }, // P34 – living view 2
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/a13b0aef1_Picture35.jpg', type: 'interior' }, // P35 – living view 3
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/f613f59af_Picture37.jpg', type: 'interior' }, // P37 – atrium ground
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/0d404ee75_Picture38.jpg', type: 'interior' }, // P38 – atrium tall
    ],
  },
  {
    // Crisp white Neo-Classic palace — grand columns, arched windows, black slate roof
    id: 'versailles',
    nameEn: 'Versailles',
    nameAr: 'فرساي',
    tagEn: 'Neo-Classical Palace',
    tagAr: 'قصر نيو-كلاسيك',
    accentColor: '#c8a96e',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/e2d356fb5_Picture21.jpg', type: 'facade' },   // P21 – full grand palace front
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/740035d2e_Picture22.jpg', type: 'facade' },   // P22 – wide street view
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/d20efc734_Picture23.jpg', type: 'facade' },   // P23 – far street view
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/7227695e8_Picture15.jpg', type: 'facade' },   // P15 – smaller villa front
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/3fa4d56a7_Picture16.jpg', type: 'facade' },   // P16 – villa corner
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/e13595c9b_Picture20.jpg', type: 'facade' },   // P20 – entrance portico
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/730c8769e_Picture17.jpg', type: 'facade' },   // P17 – entrance close
    ],
  },
  {
    // Cream/ivory French baroque — mansard black roof, balconies, ornate arch entry
    id: 'ivory',
    nameEn: 'Ivory Classique',
    nameAr: 'إيفوري كلاسيك',
    tagEn: 'French Classical Villa',
    tagAr: 'فيلا كلاسيكية فرنسية',
    accentColor: '#b59a6c',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/ca4b3ff82_Picture19.jpg', type: 'facade' },   // P19 – full front
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/6e6625fe5_Picture25.jpg', type: 'facade' },   // P25 – full front alt
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/3d4c59d70_Picture27.jpg', type: 'facade' },   // P27 – front with G-Wagon
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/dbdd9d0a8_Picture18.jpg', type: 'facade' },   // P18 – side garden view
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/74be3f9e2_Picture24.jpg', type: 'facade' },   // P24 – side garden alt
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/0e0333eb0_Picture26.jpg', type: 'facade' },   // P26 – entrance arch close
    ],
  },
  {
    // Beige travertine stone cladding, tall portal entrance, ultra-luxury
    id: 'travertine',
    nameEn: 'Travertine',
    nameAr: 'ترافيرتين',
    tagEn: 'Contemporary Monumental',
    tagAr: 'معاصر فخم',
    accentColor: '#8a7a6a',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/2bde9ab3d_Picture28.jpg', type: 'facade' },   // P28 – tall entrance portal front
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/dad088333_Picture29.jpg', type: 'facade' },   // P29 – full facade with RR
    ],
  },
  {
    // Flat roof, bronze/beige cladding panels, floor-to-ceiling glazing, pool, landscaped
    id: 'modern-luxury',
    nameEn: 'Modern Luxury',
    nameAr: 'فاخر معاصر',
    tagEn: 'Contemporary Villa',
    tagAr: 'فيلا معاصرة',
    accentColor: '#7a8a7a',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/b774cfc55_Picture7.jpg',  type: 'facade' },   // P7  – front day
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/2a22500e6_Picture8.jpg',  type: 'facade' },   // P8  – pool side angle
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/5b0a29eef_Picture9.jpg',  type: 'facade' },   // P9  – street compact
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/721577587_Picture12.jpg', type: 'facade' },   // P12 – night front
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/25a6a2314_Picture10.jpg', type: 'amenity' },  // P10 – pool aerial
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/a9bd617ef_Picture11.jpg', type: 'amenity' },  // P11 – pool night
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/4a0d7a4bd_Picture2.jpg',  type: 'interior' }, // P2  – luxury dining room
    ],
  },
  {
    // Grey/beige stone cladding, compact 3-storey, vertical timber bays, numbered units compound
    id: 'urban',
    nameEn: 'Urban Villas',
    nameAr: 'فلل حضرية',
    tagEn: 'Compact Modern Compound',
    tagAr: 'كمبوند حديث متكامل',
    accentColor: '#6a7a8a',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/bbdb5fc72_Picture30.jpg', type: 'facade' },   // P30 – single unit front
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/25c2b8ad6_Picture3.jpg',  type: 'facade' },   // P3  – compound street 2 units
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/419eb94e9_Picture4.jpg',  type: 'facade' },   // P4  – compound close detail
    ],
  },
  {
    // Crisp white with travertine accent panels, minimal ornament, neo-classic lite
    id: 'neo-classic-villa',
    nameEn: 'Neo-Classic Villa',
    nameAr: 'فيلا نيو-كلاسيك',
    tagEn: 'Modern Neo-Classical',
    tagAr: 'نيو-كلاسيك عصري',
    accentColor: '#9a8a7a',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/adfa18b56_Picture5.jpg',  type: 'facade' },   // P5  – front
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/39b49592b_Picture6.jpg',  type: 'facade' },   // P6  – corner
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/d8f4eede1_Picture13.jpg', type: 'amenity' },  // P13 – outdoor terrace/pergola
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/8f4439479_Picture14.jpg', type: 'amenity' },  // P14 – waterfall wall terrace
    ],
  },
];

// Reorder images: facade first, then amenity, then interior
function sortedImages(images) {
  const order = { facade: 0, amenity: 1, interior: 2 };
  return [...images].sort((a, b) => order[a.type] - order[b.type]);
}

// Type badge label
const TYPE_LABELS = {
  facade:   { en: 'Façade',   ar: 'واجهة' },
  amenity:  { en: 'Amenities', ar: 'ملحقات' },
  interior: { en: 'Interior', ar: 'داخلي' },
};

export default function PortfolioSection() {
  const { t, isRTL, lang } = useLanguage();
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const openTemplate = (tpl) => {
    setActiveTemplate(tpl);
    setLightboxIdx(null);
    document.body.style.overflow = 'hidden';
  };
  const closeTemplate = () => {
    setActiveTemplate(null);
    setLightboxIdx(null);
    document.body.style.overflow = '';
  };
  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImg = () => {
    const imgs = sortedImages(activeTemplate.images);
    setLightboxIdx((i) => (i - 1 + imgs.length) % imgs.length);
  };
  const nextImg = () => {
    const imgs = sortedImages(activeTemplate.images);
    setLightboxIdx((i) => (i + 1) % imgs.length);
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-40 overflow-hidden bg-background"
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

      {/* Templates grid */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEMPLATES.map((tpl, i) => {
            const sorted = sortedImages(tpl.images);
            const hero = sorted[0];
            return (
              <motion.div
                key={tpl.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => openTemplate(tpl)}
                className="group relative cursor-pointer overflow-hidden bg-muted"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src={hero.url}
                  alt={lang === 'ar' ? tpl.nameAr : tpl.nameEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Hover tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `${tpl.accentColor}22` }}
                />

                {/* Template name */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className={`text-xs tracking-[0.18em] uppercase mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                        style={{ color: tpl.accentColor }}>
                        {lang === 'ar' ? tpl.tagAr : tpl.tagEn}
                      </p>
                      <h3 className={`text-2xl md:text-3xl font-bold text-white leading-tight ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {lang === 'ar' ? tpl.nameAr : tpl.nameEn}
                      </h3>
                      <p className="text-white/50 text-xs mt-1 font-inter">
                        {sorted.length} {lang === 'ar' ? 'صورة' : 'renders'}
                      </p>
                    </div>
                    <div
                      className="shrink-0 w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white/40"
                      style={{ background: `${tpl.accentColor}44` }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Image count pills */}
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex gap-1.5`}>
                  {['facade','amenity','interior'].map((type) => {
                    const count = tpl.images.filter(x => x.type === type).length;
                    if (!count) return null;
                    return (
                      <span key={type} className="text-[9px] tracking-wider uppercase px-2 py-0.5 bg-black/40 backdrop-blur-sm text-white/70 font-inter">
                        {TYPE_LABELS[type][lang === 'ar' ? 'ar' : 'en']}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─── Template Detail Modal ─── */}
      <AnimatePresence>
        {activeTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/10 bg-black/80 backdrop-blur-sm">
              <div>
                <p className={`text-xs tracking-[0.2em] uppercase mb-0.5 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                  style={{ color: activeTemplate.accentColor }}>
                  {lang === 'ar' ? activeTemplate.tagAr : activeTemplate.tagEn}
                </p>
                <h2 className={`text-2xl font-bold text-white ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {lang === 'ar' ? activeTemplate.nameAr : activeTemplate.nameEn}
                </h2>
              </div>
              <button
                onClick={closeTemplate}
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:border-white/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grouped renders */}
            <div className="px-6 md:px-12 py-10 space-y-14">
              {['facade', 'amenity', 'interior'].map((type) => {
                const imgs = sortedImages(activeTemplate.images).filter(x => x.type === type);
                if (!imgs.length) return null;
                const globalOffset = sortedImages(activeTemplate.images).findIndex(x => x.type === type);
                return (
                  <div key={type}>
                    {/* Group label */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-6 h-[1.5px]" style={{ background: activeTemplate.accentColor }} />
                      <span
                        className={`text-xs tracking-[0.2em] uppercase font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}
                        style={{ color: activeTemplate.accentColor }}
                      >
                        {TYPE_LABELS[type][lang === 'ar' ? 'ar' : 'en']}
                      </span>
                    </div>

                    {/* Images */}
                    <div className={`grid gap-3 ${
                      imgs.length === 1 ? 'grid-cols-1' :
                      imgs.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}>
                      {imgs.map((img, localIdx) => {
                        const allSorted = sortedImages(activeTemplate.images);
                        const globalIdx = allSorted.indexOf(img);
                        // First facade image gets hero treatment
                        const isHero = type === 'facade' && localIdx === 0;
                        return (
                          <div
                            key={localIdx}
                            onClick={() => openLightbox(globalIdx)}
                            className={`relative overflow-hidden cursor-zoom-in group/img bg-neutral-900 ${
                              isHero && imgs.length > 1 ? 'md:col-span-2' : ''
                            }`}
                            style={{ aspectRatio: isHero ? '16/7' : type === 'interior' ? '4/3' : '16/9' }}
                          >
                            <img
                              src={img.url}
                              alt={`${lang === 'ar' ? activeTemplate.nameAr : activeTemplate.nameEn} ${localIdx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-103"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {activeTemplate && lightboxIdx !== null && (() => {
          const imgs = sortedImages(activeTemplate.images);
          const img = imgs[lightboxIdx];
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/98"
              onClick={closeLightbox}
            >
              <button onClick={(e) => { e.stopPropagation(); prevImg(); }}
                className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-white/60 transition-colors z-10">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <img
                src={img.url}
                alt=""
                className="max-w-[90vw] max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button onClick={(e) => { e.stopPropagation(); nextImg(); }}
                className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-white/60 transition-colors z-10">
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-6 text-white/40 text-xs font-inter tracking-widest">
                {lightboxIdx + 1} / {imgs.length}
              </div>
              <button onClick={closeLightbox}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:border-white/60 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}