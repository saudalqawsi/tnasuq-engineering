import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Template definitions ────────────────────────────────────────────────────
const BASE = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/';
const TEMPLATES = [
  {
    id: 'najdi',
    nameEn: 'Najdi',
    nameAr: 'نجدي',
    descEn: 'Terracotta mud-plaster walls, white geometric Najdi friezes, traditional wooden ceilings, lantern lighting, and a central open courtyard.',
    descAr: 'جدران طينية بلون الطرا، أفاريز نجدية هندسية بيضاء، أسقف خشبية تقليدية، إضاءة فوانيس، وفناء مكشوف مركزي.',
    tagEn: 'Arabian Heritage',
    tagAr: 'التراث العربي النجدي',
    accentColor: '#a0622a',
    images: [
      { url: BASE + '9c4b26bc9_NAJD1.jpg',  type: 'facade' },
      { url: BASE + '2d9717b45_NAJD2.jpg',  type: 'facade' },
      { url: BASE + '1182663f5_NAJD3.jpg',  type: 'amenity' },
      { url: BASE + '8cdb4cdc8_NAJD4.jpg',  type: 'interior' },
      { url: BASE + '80bfe92d0_NAJD5.jpg',  type: 'interior' },
      { url: BASE + '1db0ccf15_NAJD6.jpg',  type: 'interior' },
      { url: BASE + '24767c659_NAJD7.jpg',  type: 'interior' },
    ],
  },
  {
    id: 'palatial',
    nameEn: 'Palatial',
    nameAr: 'قصري',
    descEn: 'Grand white marble palace with full-height Corinthian columns, blue mansard roof, gold-detailed ironwork doors, and a monumental symmetrical façade.',
    descAr: 'قصر رخامي أبيض فخم بأعمدة كورنثية كاملة الارتفاع، سقف مانسارد أزرق، أبواب حديدية مذهبة، وواجهة متماثلة ضخمة.',
    tagEn: 'Grand Palace',
    tagAr: 'القصر الملكي',
    accentColor: '#c8a96e',
    images: [
      { url: BASE + '138ff0b95_PALATIAL.jpg',   type: 'facade' },
      { url: BASE + '8c84c2ce4_PALATIAL1.jpg',  type: 'facade' },
      { url: BASE + 'c7497d736_PALATIAL3.jpg',  type: 'facade' },
      { url: BASE + 'cecbc42fa_PALATIAL5.jpg',  type: 'facade' },
    ],
  },
  {
    id: 'neoclassical',
    nameEn: 'Neo-Classical',
    nameAr: 'نيو-كلاسيكي',
    descEn: 'White stone façade with tall fluted columns, arched windows, crystal chandelier entrance portico, and ornate cornice detailing.',
    descAr: 'واجهة حجرية بيضاء بأعمدة مخططة طويلة، نوافذ مقوسة، مدخل رواقي بثريا كريستال، وتفاصيل كورنيش منقوشة.',
    tagEn: 'Neo-Classical',
    tagAr: 'نيو-كلاسيكي',
    accentColor: '#b8a888',
    images: [
      { url: BASE + '673c1ec3b_NEOCLASSICAL.jpg',  type: 'facade' },
      { url: BASE + '0fbd9a84a_NEOCLASSICAL1.jpg', type: 'facade' },
      { url: BASE + 'b9433e987_NEOCLASSICAL2.jpg', type: 'facade' },
      { url: BASE + 'a4c9f0f0f_NEOCLASSICAL3.jpg', type: 'facade' },
    ],
  },
  {
    id: 'french-neoclassical',
    nameEn: 'French Neo-Classical',
    nameAr: 'فرنسي نيو-كلاسيكي',
    descEn: 'Cream-ivory rendered walls, black mansard roof, ornate arched entry with gold chandelier, wrought-iron balconies, and classical column articulation.',
    descAr: 'جدران بلون الكريمي الرائع، سقف مانسارد أسود، مدخل مقوس مزخرف بثريا ذهبية، شرفات حديدية مزوّقة، وتفاصيل أعمدة كلاسيكية.',
    tagEn: 'French Classical Villa',
    tagAr: 'فيلا كلاسيكية فرنسية',
    accentColor: '#b59a6c',
    images: [
      { url: BASE + 'caa01534e_FRENCHNEOCLASSICAL.jpg',  type: 'facade' },
      { url: BASE + 'b411b3517_FRENCHNEOCLASSICAL1.jpg', type: 'facade' },
      { url: BASE + 'c1d6780c0_FRENCHNEOCLASSICAL2.jpg', type: 'facade' },
      { url: BASE + 'da5d542e5_FRENCHNEOCLASSICAL4.jpg', type: 'facade' },
    ],
  },
  {
    id: 'contemporary-classical',
    nameEn: 'Contemporary Classical',
    nameAr: 'كلاسيكي معاصر',
    descEn: 'Crisp white render with travertine stone inlays, clean cornice lines, timber-slatted garage doors, and a refined modern-classical balance.',
    descAr: 'طلاء أبيض نقي مع تحصينات من حجر الترافيرتين، خطوط كورنيش نظيفة، أبواب كراج بألواح خشبية، وتوازن معاصر راقٍ.',
    tagEn: 'Modern Neo-Classical',
    tagAr: 'نيو-كلاسيك عصري',
    accentColor: '#9a8a7a',
    images: [
      { url: BASE + 'b6b4c64bb_CONTEMPORARYCLASSICAL.jpg',  type: 'facade' },
      { url: BASE + '82fdaa692_CONTEMPORARYCLASSICAL1.jpg', type: 'facade' },
      { url: BASE + 'b2adeccb2_CONTEMPORARYCLASSICAL3.jpg', type: 'amenity' },
      { url: BASE + '6f5e5dc0d_CONTEMPORARYCLASSICAL5.jpg', type: 'amenity' },
    ],
  },
  {
    id: 'modern-classical',
    nameEn: 'Modern Classical',
    nameAr: 'كلاسيكي حديث',
    descEn: 'Beige travertine stone cladding, monumental double-height entry portal, dark-framed floor-to-ceiling glazing, and bold geometric massing.',
    descAr: 'كسوة حجر ترافيرتين بيجي، بوابة مدخل فارهة بارتفاع مضاعف، تزجيج كامل من الأرض للسقف بإطار داكن، وتكتيل هندسي جريء.',
    tagEn: 'Contemporary Monumental',
    tagAr: 'معاصر فخم',
    accentColor: '#8a7a6a',
    images: [
      { url: BASE + 'c385295e9_MODERNCLASSICAL.jpg',  type: 'facade' },
      { url: BASE + '884c09e76_MODERNCLASSICAL1.jpg', type: 'facade' },
    ],
  },
  {
    id: 'contemporary-lux',
    nameEn: 'Contemporary Luxury',
    nameAr: 'فاخر معاصر',
    descEn: 'Flat roof with bronze cantilevered overhangs, floor-to-ceiling glazing, beige stone cladding, landscaped pool deck, and dramatic night lighting.',
    descAr: 'سقف مسطح مع بروزات برونزية، تزجيج من الأرض للسقف، كسوة حجرية بيجي، سطح مسبح منسّق، وإضاءة ليلية درامية.',
    tagEn: 'Contemporary Villa',
    tagAr: 'فيلا معاصرة',
    accentColor: '#7a8a7a',
    images: [
      { url: BASE + '0a081b503_CONTEMPORARYLUX1.jpg', type: 'facade' },
      { url: BASE + 'e843f476e_CONTEMPORARYLUX2.jpg', type: 'facade' },
      { url: BASE + '480dcf68f_CONTEMPORARYLUX3.jpg', type: 'facade' },
      { url: BASE + '9872e0968_CONTEMPORARYLUX5.jpg', type: 'facade' },
      { url: BASE + 'df825ea97_CONTEMPORARYLUX6.jpg', type: 'facade' },
      { url: BASE + '8ebe061c7_CONTEMPORARYLUX4.jpg', type: 'amenity' },
      { url: BASE + '5394914e1_CONTEMPORARYLUX8.jpg', type: 'amenity' },
      { url: BASE + 'bb281c3c6_MODERNLUX6.jpg',       type: 'interior' },
      { url: BASE + '9d51f6981_MODERNLUX8.jpg',       type: 'interior' },
    ],
  },
  {
    id: 'contemporary-villas',
    nameEn: 'Contemporary Villas',
    nameAr: 'فلل معاصرة',
    descEn: 'Compact three-storey units with beige stone tile cladding, vertical timber louvre bays, open roof terraces, and individual street numbers for compound living.',
    descAr: 'وحدات ثلاثية الطوابق بكسوة بلاط حجري بيجي، بروزات خشبية عمودية، أسطح مكشوفة، وأرقام شوارع فردية لنمط حياة الكمبوند.',
    tagEn: 'Compact Modern Compound',
    tagAr: 'كمبوند حديث متكامل',
    accentColor: '#6a7a8a',
    images: [
      { url: BASE + '778872ed1_CONTEMPORARYVILLAS.jpg',  type: 'facade' },
      { url: BASE + 'ab96b03d0_CONTEMPORARYVILLAS2.jpg', type: 'facade' },
      { url: BASE + '92e4d77a7_CONTEMPORARYVILLAS3.jpg', type: 'facade' },
      { url: BASE + '9c402e638_CONTEMPORARYVILLAS4.jpg', type: 'facade' },
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
                      <p className={`text-white/50 text-xs mt-1 leading-relaxed max-w-[260px] ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        {lang === 'ar' ? tpl.descAr : tpl.descEn}
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

                {/* Category pill */}
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                  <span className="text-[9px] tracking-[0.18em] uppercase px-3 py-1 bg-black/35 backdrop-blur-sm text-white/70 font-inter">
                    {lang === 'ar' ? tpl.tagAr : tpl.tagEn}
                  </span>
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