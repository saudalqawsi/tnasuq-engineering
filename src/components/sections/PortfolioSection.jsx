import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import TemplateCarousel from '@/components/sections/TemplateCarousel';

const BASE = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/';
const CATEGORY = { en: 'Residential', ar: 'سكني', color: '#9A7A4D' };

const TEMPLATES = [
{
  id: 'najdi',
  nameEn: 'Najdi',
  nameAr: 'نجدي',
  descEn: 'Terracotta mud-plaster walls, white geometric Najdi friezes, traditional wooden ceilings, lantern lighting, and a central open courtyard.',
  descAr: 'جدران طينية مطلية باللون الطيني، وأفاريز نجدية هندسية بيضاء، وأسقف خشبية تقليدية، وإضاءة بالفوانيس، وفناء مكشوف مركزي.',
  tagEn: 'Arabian Heritage',
  tagAr: 'التراث العربي النجدي',
  accentColor: '#a0622a',
  images: [
  { url: BASE + '9c4b26bc9_NAJD1.jpg', type: 'facade' },
  { url: BASE + '2d9717b45_NAJD2.jpg', type: 'facade' },
  { url: BASE + '1182663f5_NAJD3.jpg', type: 'amenity' },
  { url: BASE + '8cdb4cdc8_NAJD4.jpg', type: 'interior' },
  { url: BASE + '80bfe92d0_NAJD5.jpg', type: 'interior' },
  { url: BASE + '1db0ccf15_NAJD6.jpg', type: 'interior' },
  { url: BASE + '24767c659_NAJD7.jpg', type: 'interior' }]

},
{
  id: 'palatial',
  nameEn: 'Palatial',
  nameAr: 'الطراز القصري',
  descEn: 'Grand white marble palace with full-height Corinthian columns, blue mansard roof, gold-detailed ironwork doors, and a monumental symmetrical façade.',
  descAr: 'قصر رخامي أبيض فخم بأعمدة كورنثية كاملة الارتفاع، وسقف مانسارد أزرق، وأبواب حديدية مذهّبة، وواجهة متناظرة ضخمة.',
  tagEn: 'Grand Palace',
  tagAr: 'القصر الملكي',
  accentColor: '#c8a96e',
  images: [
  { url: BASE + '138ff0b95_PALATIAL.jpg', type: 'facade' },
  { url: BASE + '8c84c2ce4_PALATIAL1.jpg', type: 'facade' },
  { url: BASE + 'c7497d736_PALATIAL3.jpg', type: 'facade' },
  { url: BASE + 'cecbc42fa_PALATIAL5.jpg', type: 'facade' }]

},
{
  id: 'neoclassical',
  nameEn: 'Neo-Classical',
  nameAr: 'نيو-كلاسيكي',
  descEn: 'White stone façade with tall fluted columns, arched windows, crystal chandelier entrance portico, and ornate cornice detailing.',
  descAr: 'واجهة حجرية بيضاء بأعمدة بأخاديد عمودية، ونوافذ مقوسة، ومدخل رواقي بثريا كريستالية، وتفاصيل كورنيش منحوتة.',
  tagEn: 'Neo-Classical',
  tagAr: 'نيو-كلاسيكي',
  accentColor: '#b8a888',
  images: [
  { url: BASE + '673c1ec3b_NEOCLASSICAL.jpg', type: 'facade' },
  { url: BASE + '0fbd9a84a_NEOCLASSICAL1.jpg', type: 'facade' },
  { url: BASE + 'b9433e987_NEOCLASSICAL2.jpg', type: 'facade' },
  { url: BASE + 'a4c9f0f0f_NEOCLASSICAL3.jpg', type: 'facade' }]

},
{
  id: 'french-neoclassical',
  nameEn: 'French Neo-Classical',
  nameAr: 'نيو-كلاسيكي فرنسي',
  descEn: 'Cream-ivory rendered walls, black mansard roof, ornate arched entry with gold chandelier, wrought-iron balconies, and classical column articulation.',
  descAr: 'جدران بلون كريمي عاجي، وسقف مانسارد أسود، ومدخل مقوس مزخرف بثريا ذهبية، وشرفات حديدية مزخرفة، وتفاصيل أعمدة كلاسيكية.',
  tagEn: 'French Classical Villa',
  tagAr: 'فيلا كلاسيكية فرنسية',
  accentColor: '#b59a6c',
  images: [
  { url: BASE + 'caa01534e_FRENCHNEOCLASSICAL.jpg', type: 'facade' },
  { url: BASE + 'b411b3517_FRENCHNEOCLASSICAL1.jpg', type: 'facade' },
  { url: BASE + 'c1d6780c0_FRENCHNEOCLASSICAL2.jpg', type: 'facade' },
  { url: BASE + 'da5d542e5_FRENCHNEOCLASSICAL4.jpg', type: 'facade' }]

},
{
  id: 'contemporary-classical',
  nameEn: 'Contemporary Classical',
  nameAr: 'كلاسيكي معاصر',
  descEn: 'Crisp white render with travertine stone inlays, clean cornice lines, timber-slatted garage doors, and a refined modern-classical balance.',
  descAr: 'طلاء أبيض نقي مع تطعيمات من حجر الترافيرتين، وخطوط كورنيش نظيفة، وأبواب مرآب بألواح خشبية، وتوازن معاصر راقٍ.',
  tagEn: 'Modern Neo-Classical',
  tagAr: 'نيو-كلاسيك عصري',
  accentColor: '#9a8a7a',
  images: [
  { url: BASE + 'b6b4c64bb_CONTEMPORARYCLASSICAL.jpg', type: 'facade' },
  { url: BASE + '82fdaa692_CONTEMPORARYCLASSICAL1.jpg', type: 'facade' },
  { url: BASE + 'b2adeccb2_CONTEMPORARYCLASSICAL3.jpg', type: 'amenity' },
  { url: BASE + '6f5e5dc0d_CONTEMPORARYCLASSICAL5.jpg', type: 'amenity' }]

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
  { url: BASE + 'c385295e9_MODERNCLASSICAL.jpg', type: 'facade' },
  { url: BASE + '884c09e76_MODERNCLASSICAL1.jpg', type: 'facade' }]

},
{
  id: 'contemporary-lux',
  nameEn: 'Contemporary Luxury',
  nameAr: 'فخامة معاصرة',
  descEn: 'Flat roof with bronze cantilevered overhangs, floor-to-ceiling glazing, beige stone cladding, landscaped pool deck, and dramatic night lighting.',
  descAr: 'سقف مسطح مع بروزات برونزية معلّقة، وتزجيج من الأرض إلى السقف، وكسوة حجرية بلون البيج، وسطح مسبح منسّق، وإضاءة ليلية درامية.',
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
  { url: BASE + 'bb281c3c6_MODERNLUX6.jpg', type: 'interior' },
  { url: BASE + '9d51f6981_MODERNLUX8.jpg', type: 'interior' }]

},
{
  id: 'contemporary-villas',
  nameEn: 'Contemporary Villas',
  nameAr: 'فلل معاصرة',
  descEn: 'Compact three-storey units with beige stone tile cladding, vertical timber louvre bays, open roof terraces, and individual street numbers for compound living.',
  descAr: 'وحدات مكوّنة من ثلاثة طوابق بكسوة بلاط حجري بلون البيج، وألواح خشبية عمودية، وأسطح مفتوحة، وأرقام شوارع فردية تتناسب مع نمط المجمعات السكنية.',
  tagEn: 'Compact Modern Compound',
  tagAr: 'مجمع سكني حديث متكامل',
  accentColor: '#6a7a8a',
  images: [
  { url: BASE + '778872ed1_CONTEMPORARYVILLAS.jpg', type: 'facade' },
  { url: BASE + 'ab96b03d0_CONTEMPORARYVILLAS2.jpg', type: 'facade' },
  { url: BASE + '92e4d77a7_CONTEMPORARYVILLAS3.jpg', type: 'facade' },
  { url: BASE + '9c402e638_CONTEMPORARYVILLAS4.jpg', type: 'facade' }]

}];


export default function PortfolioSection() {
  const { t, isRTL } = useLanguage();
  const cat = CATEGORY;

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-40 overflow-hidden bg-background"
      dir={isRTL ? 'rtl' : 'ltr'}>
      
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

      {/* 2×2 hover-expand template grid */}
      <div className="px-6 md:px-16 lg:px-24">
        <TemplateCarousel templates={TEMPLATES} category={cat} />
      </div>

      {/* Portfolio CTA */}
      <div className="px-6 md:px-16 lg:px-24 mt-16">
        

















        
      </div>
    </section>);

}