import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import TemplateGrid from '@/components/sections/TemplateGrid';

const CATEGORY = { en: 'Commercial', ar: 'تجاري', color: '#5A6B7A' };

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

export default function CommercialPortfolioSection() {
  const { isRTL } = useLanguage();
  const cat = CATEGORY;

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 border" style={{ borderColor: cat.color + '66' }}>
              <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
              <span className={`text-xs tracking-[0.25em] uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`} style={{ color: cat.color }}>
                {isRTL ? cat.ar : cat.en}
              </span>
            </div>
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

      {/* 2×2 hover-expand template grid */}
      <div className="px-6 md:px-16 lg:px-24">
        <TemplateGrid templates={TEMPLATES} category={cat} />
      </div>

      {/* Commercial CTA */}
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
    </section>
  );
}