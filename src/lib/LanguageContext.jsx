import React, { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Project Templates',
      services: 'Services',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      tagline: 'Engineering Consultancy · Riyadh, KSA',
      subtitle: 'From residential villas to commercial towers, we deliver complete design, management, and supervision services built on deep knowledge of Saudi building codes and municipal requirements.',
      cta: 'Start a Project',
      scroll: 'Scroll to explore',
    },
    portfolio: {
      title: 'Project Templates',
      subtitle: 'Saudi Market Design Templates',
      description: 'Ready-to-execute design templates across Saudi Arabia\'s key asset classes. Every template is calibrated to the Saudi Building Code (SBC), Wadi Hanifah environmental regulations, and all municipal service provider requirements.',
      viewSpecs: 'View Template',
      projects: [
        {
          title: 'Residential Villa',
          category: 'Residential Design',
          location: 'Riyadh Neighbourhoods',
          year: 'Template Ready',
          description: 'Single-family villa templates compliant with municipal setback rules, SBC structural requirements, and standard utility connection specifications from SEC, NWC, and municipal authorities.',
        },
        {
          title: 'Apartment Building',
          category: 'Multi-Unit Residential',
          location: 'Urban Infill Sites',
          year: 'Template Ready',
          description: 'Multi-storey residential building templates optimised for Riyadh\'s plot ratios, fire safety zoning, elevator requirements, and Amanat Al-Riyadh submission standards.',
        },
        {
          title: 'Commercial Retail & Office',
          category: 'Commercial Development',
          location: 'Commercial Corridors',
          year: 'Template Ready',
          description: 'Ground-floor retail and office tower templates aligned with commercial zoning regulations, Baladiya permitting workflows, SASO standards, and MEP coordination for SRACO and other local providers.',
        },
        {
          title: 'Warehouse & Light Industrial',
          category: 'Industrial Facilities',
          location: 'Industrial Zones, Riyadh',
          year: 'Template Ready',
          description: 'Industrial shed and warehouse templates engineered to MODON zone regulations, heavy vehicle access standards, structural load requirements, and full MEP fit-out coordination.',
        },
      ],
    },
    services: {
      title: 'Services',
      subtitle: 'Full Project Lifecycle',
      description: 'We manage the entire engineering journey, from concept and structural design through permitting, construction supervision, and handover. Built on deep expertise in Saudi codes and authorities.',
      items: [
        {
          title: 'Architectural Design',
          description: 'Permit-ready drawings for villas, apartments, commercial, and industrial buildings — coordinated with Amanat Al-Riyadh setback rules, municipal zoning, and Saudi planning standards.',
          highlight: true,
        },
        {
          title: 'Structural Engineering',
          description: 'Foundations, frames, slabs, and connections engineered for all building types — fully compliant with the Saudi Building Code.',
          highlight: true,
        },
        {
          title: 'Project Management',
          description: 'Full project delivery from concept to handover, covering programme control, contractor coordination, cost management, and authority liaison with Baladiya and MOMRA.',
          highlight: true,
        },
        {
          title: 'Construction Supervision',
          description: 'Resident engineer and site supervision ensuring compliance with approved drawings, SBC requirements, material standards, and Health & Safety regulations on every visit.',
          highlight: true,
        },
        {
          title: 'MEP Engineering',
          description: 'Integrated mechanical, electrical, and plumbing design coordinated with SEC, NWC, and SASO — including full management of all service provider approvals.',
          highlight: true,
        },
        {
          title: 'Landscape Design',
          description: 'Softscape and hardscape design, irrigation planning, and outdoor space design delivered in partnership with specialised landscape architects.',
          highlight: false,
          partner: true,
        },
      ],
      codesBadge: {
        title: 'Code & Authority Expertise',
        items: [
          'Saudi Building Codes',
          'Environmental Regulations',
          'Municipal Standards',
          'Government Requirements',
          'Utility Provider Approvals',
          'National Standards Compliance',
          'Special Zone Design Codes',
        ],
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Start a Conversation',
      description: 'Tell us about your project. We respond to every inquiry within 24 hours.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        service: 'Service Needed',
        location: 'Project Location',
        message: 'Tell us about your project',
        submit: 'Submit Inquiry',
        sending: 'Sending...',
        success: 'Your inquiry has been submitted. We will be in touch shortly.',
        selectService: 'Select a service',
      },
      serviceOptions: {
        structural_analysis: 'Structural Engineering',
        architectural_design: 'Architectural Design',
        project_management: 'Project Management',
        construction_supervision: 'Construction Supervision',
        mep_engineering: 'MEP Engineering',
        other: 'Other',
      },
    },
    footer: {
      tagline: 'Engineering Excellence Through Harmony',
      rights: '© 2026 Tnasuq Engineering Consultancy. All rights reserved.',
      nationalNumber: 'National Unified Number',
      crNumber: '7048788926',
      links: {
        about: 'About',
        portfolio: 'Project Templates',
        services: 'Services',
        process: 'How We Work',
        contact: 'Contact',
      },
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن تناسق',
      portfolio: 'نماذج المشاريع',
      services: 'الخدمات',
      contact: 'تواصل معنا',
      menu: 'القائمة',
    },
    hero: {
      tagline: 'استشارات هندسية · الرياض، المملكة العربية السعودية',
      subtitle: 'من الفلل السكنية إلى الأبراج التجارية، نقدّم خدمات متكاملة للتصميم والإدارة والإشراف، مبنيّة على خبرة عميقة بالكود السعودي للبناء ومتطلبات الجهات البلدية.',
      cta: 'ابدأ مشروعك',
      scroll: 'مرّر للاستكشاف',
    },
    portfolio: {
      title: 'نماذج المشاريع',
      subtitle: 'نماذج تصميمية للسوق السعودي',
      description: 'نماذج تصميمية جاهزة للتنفيذ عبر أبرز فئات الأصول في المملكة العربية السعودية. كل نموذج معدّ وفق اشتراطات الكود السعودي للبناء (SBC) وأنظمة وادي حنيفة ومتطلبات جميع الجهات الخدمية والبلديات.',
      viewSpecs: 'عرض النموذج',
      projects: [
        {
          title: 'فيلا سكنية',
          category: 'تصميم سكني',
          location: 'أحياء الرياض',
          year: 'نموذج جاهز',
          description: 'نماذج فلل سكنية متوافقة مع قواعد الارتداد البلدي، اشتراطات الكود السعودي الإنشائية، ومواصفات توصيل الخدمات من شركة الكهرباء والمياه والبلديات.',
        },
        {
          title: 'عمارة سكنية',
          category: 'سكني متعدد الوحدات',
          location: 'مواقع التكثيف الحضري',
          year: 'نموذج جاهز',
          description: 'نماذج مباني سكنية متعددة الطوابق مُحسَّنة لنسب البناء في الرياض، اشتراطات السلامة من الحريق، متطلبات المصاعد، ومعايير تقديم أمانة الرياض.',
        },
        {
          title: 'تجاري ومكتبي',
          category: 'تطوير تجاري',
          location: 'المحاور التجارية',
          year: 'نموذج جاهز',
          description: 'نماذج تجارية ومكتبية متوافقة مع أنظمة التخطيط التجاري، إجراءات تراخيص البلديات، معايير هيئة المواصفات، وتنسيق الأنظمة الكهروميكانيكية مع موفري الخدمات المحليين.',
        },
        {
          title: 'مستودع وخفيف صناعي',
          category: 'منشآت صناعية',
          location: 'المناطق الصناعية، الرياض',
          year: 'نموذج جاهز',
          description: 'نماذج مستودعات ومنشآت صناعية خفيفة مُهندَسة وفق أنظمة مناطق مدن الاستثمار الصناعية، معايير وصول المركبات الثقيلة، اشتراطات الأحمال الإنشائية، وتنسيق كامل للتجهيزات.',
        },
      ],
    },
    services: {
      title: 'الخدمات',
      subtitle: 'كامل دورة المشروع',
      description: 'ندير الرحلة الهندسية بالكامل — من التصميم والتحليل الإنشائي إلى التراخيص والإشراف على التنفيذ والتسليم — قائمين على خبرة عميقة بالأكواد السعودية والجهات المختصة.',
      items: [
        {
          title: 'التصميم المعماري',
          description: 'رسومات معمارية جاهزة للترخيص للفلل والعمائر والمباني التجارية والصناعية — منسّقة مع اشتراطات الارتداد لدى أمانة الرياض والتخطيط البلدي والمعايير السعودية.',
          highlight: true,
        },
        {
          title: 'الهندسة الإنشائية',
          description: 'أساسات وهياكل وبلاطات ووصلات لجميع أنواع المباني — متوافقة بالكامل مع الكود السعودي للبناء.',
          highlight: true,
        },
        {
          title: 'إدارة المشاريع',
          description: 'إدارة متكاملة للمشروع من الفكرة إلى التسليم، تشمل ضبط الجدول الزمني وتنسيق المقاولين وإدارة التكاليف والتواصل مع البلديات ووزارة الشؤون البلدية.',
          highlight: true,
        },
        {
          title: 'الإشراف على التنفيذ',
          description: 'مهندس مقيم وإشراف ميداني منتظم يضمن الالتزام بالرسومات المعتمدة، اشتراطات الكود السعودي، جودة المواد، وأنظمة الصحة والسلامة.',
          highlight: true,
        },
        {
          title: 'الهندسة الكهروميكانيكية',
          description: 'تصميم ميكانيكي وكهربائي وصحي متكامل منسّق مع الشركة السعودية للكهرباء، والشركة الوطنية للمياه، وهيئة المواصفات والمقاييس والجودة — مع إدارة كاملة لموافقات جميع مقدمي الخدمات.',
          highlight: true,
        },
        {
          title: 'تصميم المناظر الطبيعية',
          description: 'تصميم المسطحات الخضراء والصلبة وتخطيط أنظمة الري وتصميم المساحات الخارجية، بالشراكة مع مكاتب متخصصة في تنسيق الحدائق.',
          highlight: false,
          partner: true,
        },
      ],
      codesBadge: {
        title: 'خبرتنا في الكودات والجهات',
        items: [
          'الكود السعودي للبناء',
          'الأنظمة البيئية',
          'المعايير البلدية',
          'المتطلبات الحكومية',
          'موافقات مقدمي الخدمات',
          'الالتزام بالمعايير الوطنية',
          'أكواد تصميم المناطق الخاصة',
        ],
      },
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'ابدأ محادثة',
      description: 'أخبرنا عن مشروعك. نستجيب لكل استفسار خلال ٢٤ ساعة.',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        service: 'الخدمة المطلوبة',
        location: 'موقع المشروع',
        message: 'أخبرنا عن مشروعك',
        submit: 'إرسال الاستفسار',
        sending: 'جاري الإرسال...',
        success: 'تم إرسال استفسارك. سنتواصل معك قريباً.',
        selectService: 'اختر خدمة',
      },
      serviceOptions: {
        structural_analysis: 'الهندسة الإنشائية',
        architectural_design: 'التصميم المعماري',
        project_management: 'إدارة المشاريع',
        construction_supervision: 'الإشراف على التنفيذ',
        mep_engineering: 'الهندسة الكهروميكانيكية',
        other: 'أخرى',
      },
    },
    footer: {
      tagline: 'التميز الهندسي من خلال التناسق',
      rights: '© ٢٠٢٦ تناسق للاستشارات الهندسية. جميع الحقوق محفوظة.',
      nationalNumber: 'الرقم الموحّد الوطني',
      crNumber: '7048788926',
      links: {
        about: 'عن تناسق',
        portfolio: 'نماذج المشاريع',
        services: 'الخدمات',
        process: 'كيف نعمل',
        contact: 'تواصل معنا',
      },
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const t = translations[lang];
  const isRTL = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}