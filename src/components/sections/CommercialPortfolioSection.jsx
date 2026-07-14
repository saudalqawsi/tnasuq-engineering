import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const TEMPLATES = [
  {
    id: 'strip-mall',
    nameEn: 'Retail Strip Mall',
    nameAr: 'مجمع تجاري (ستريب مول)',
    descEn: 'Single-storey neighbourhood retail strip with covered walkways, storefront glazing, and ample customer parking — sized to Saudi plot and setback standards.',
    descAr: 'مجمع تجاري أرضي بواجهات محلات زجاجية، ممرات مغطاة، ومواقف سيارات كافية — مصمم وفق أنظمة الارتداد ومساحات القطع السعودية.',
    tagEn: 'Neighbourhood Retail',
    tagAr: 'تجاري محلي',
    accentColor: '#a0622a',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/8691d0d6c_generated_image.png', type: 'facade' },
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/16894ed5d_generated_image.png', type: 'facade' },
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/bb6b412f6_generated_image.png', type: 'amenity' },
    ],
  },
  {
    id: 'mixed-use',
    nameEn: 'Mixed-Use Building',
    nameAr: 'مبنى متعدد الاستخدامات',
    descEn: 'Ground-floor retail arcade with office and residential floors above, rooftop amenity deck, and a stone-and-glass façade suited to urban infill sites.',
    descAr: 'أروقة تجارية أرضية مع طوابق مكتبية وسكنية أعلاها، سطح ملحقات علوي، وواجهة حجرية زجاجية مناسبة لمواقع التكثيف الحضري.',
    tagEn: 'Urban Mixed-Use',
    tagAr: 'متعدد الاستخدامات حضري',
    accentColor: '#8a7a6a',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/0de43692f_generated_image.png', type: 'facade' },
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/79a8f4ceb_generated_image.png', type: 'facade' },
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/14a36ec3e_generated_image.png', type: 'amenity' },
    ],
  },
  {
    id: 'drive-thru',
    nameEn: 'Commercial Drive-Thru',
    nameAr: 'محل تجاري بسياق القيادة',
    descEn: 'Single-storey drive-thru retail or F&B unit with a wrapped canopied drive lane, dedicated surface parking, and blank signage band sized to typical roadside Saudi commercial plots.',
    descAr: 'وحدة تجارية أرضية بمسار قيادة مغطى، مواقف سطحية مخصصة، وحزام إعلاني فارغ منظّم حسب القطع التجارية الطرقية السعودية.',
    tagEn: 'Roadside Drive-Thru',
    tagAr: 'محل بطريق سريع',
    accentColor: '#9a7a4a',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/0d5f1a3e2_generated_image.png', type: 'facade' },
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/e7af9bbc1_generated_image.png', type: 'facade' },
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/1dadf3fce_generated_image.png', type: 'amenity' },
    ],
  },
  {
    id: 'office',
    nameEn: 'Commercial Office',
    nameAr: 'مبنى مكتبي تجاري',
    descEn: 'Glass curtain-wall office building with a grand double-height lobby, landscaped forecourt, and floorplates designed for flexible tenant fit-out.',
    descAr: 'مبنى مكتبي بواجهة زجاجية ستائرية، بهو رئيسي مزدوج الارتفاع، ساحة أمامية منسّقة، وطوابق مصممة لتجهيزات مستأجرين مرنة.',
    tagEn: 'Grade-A Office',
    tagAr: 'مكاتب من الفئة الأولى',
    accentColor: '#6a7a8a',
    images: [
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/5a8b5cdff_generated_image.png', type: 'facade' },
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/5c305e1e6_generated_image.png', type: 'facade' },
      { url: 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/ea1b4efe3_generated_image.png', type: 'interior' },
    ],
  },
];

function sortedImages(images) {
  const order = { facade: 0, amenity: 1, interior: 2 };
  return [...images].sort((a, b) => order[a.type] - order[b.type]);
}

export default function CommercialPortfolioSection() {
  const { isRTL, lang } = useLanguage();
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
      id="commercial"
      className="relative py-24 md:py-40 overflow-hidden bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Section header */}
      <div className="px-6 md:px-16 lg:px-24 mb-16 md:mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-[1.5px] bg-primary" />
          <span className={`text-sm tracking-[0.2em] text-primary font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {isRTL ? 'نماذج المشاريع' : 'Project Templates'}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
              {isRTL ? 'نماذج تجارية للسوق السعودي' : 'Commercial Templates for the Saudi Market'}
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl leading-relaxed ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL
                ? 'نماذج جاهزة للتنفيذ للمجمعات التجارية والمباني متعددة الاستخدامات والمكاتب، معدّة وفق اشتراطات البلديات ومتطلبات التخطيط التجاري في المملكة.'
                : 'Ready-to-execute templates for retail centres, mixed-use buildings, and office developments — calibrated to Saudi municipal and commercial planning requirements.'}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `${tpl.accentColor}22` }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
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

                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                  <span
                    className="text-[9px] tracking-[0.18em] uppercase px-3 py-1 bg-black/40 backdrop-blur-sm font-inter"
                    style={{
                      color: tpl.accentColor,
                      textShadow: `0 0 10px ${tpl.accentColor}cc, 0 0 20px ${tpl.accentColor}66`,
                      boxShadow: `0 0 8px ${tpl.accentColor}44, inset 0 0 6px ${tpl.accentColor}18`,
                    }}
                  >
                    {lang === 'ar' ? tpl.tagAr : tpl.tagEn}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─── Commercial CTA ─── */}
      <div className="px-6 md:px-16 lg:px-24 mt-16">
        <div className="border border-border/50 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-2 ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
              {isRTL ? 'أعجبك ما رأيت؟' : 'See something you like?'}
            </h3>
            <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL
                ? 'كل نموذج قابل للتخصيص وفق قطعتك ومتطلباتك.'
                : 'Every template is fully customisable to your plot and requirements.'}
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`group shrink-0 inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-wider font-medium hover:bg-primary transition-colors duration-500 ${isRTL ? 'font-arabic' : 'font-inter'}`}
          >
            {isRTL ? 'ابدأ مشروعك' : 'Start a Project'}
            <span className="inline-block w-5 h-[1.5px] bg-current group-hover:w-8 transition-all duration-300" />
          </button>
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

            <div className="px-6 md:px-12 py-10 space-y-14">
              {['facade', 'amenity', 'interior'].map((type) => {
                const imgs = sortedImages(activeTemplate.images).filter(x => x.type === type);
                if (!imgs.length) return null;
                return (
                  <div key={type}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-6 h-[1.5px]" style={{ background: activeTemplate.accentColor }} />
                    </div>

                    <div className={`grid gap-3 ${
                      imgs.length === 1 ? 'grid-cols-1' :
                      imgs.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}>
                      {imgs.map((img, localIdx) => {
                        const allSorted = sortedImages(activeTemplate.images);
                        const globalIdx = allSorted.indexOf(img);
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