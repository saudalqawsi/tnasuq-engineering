import React, { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Services',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      tagline: 'Engineering Consultancy',
      subtitle: 'Where precision meets vision. We transform complex engineering challenges into structures of enduring excellence.',
      cta: 'Technical Inquiry',
      scroll: 'Scroll to explore',
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Selected Projects',
      description: 'A curated selection of our most significant engineering achievements, each representing the intersection of technical precision and architectural vision.',
      viewSpecs: 'View Technical Specs',
      projects: [
        {
          title: 'Vision Tower — Concept',
          category: 'Structural Design',
          location: 'Riyadh, KSA',
          year: 'Aspirational',
          description: 'A landmark mixed-use high-rise envisioned for the Riyadh skyline — integrating parametric facade engineering with a seismic-isolated core and net-zero structural systems.',
        },
        {
          title: 'Desert Crossing Bridge — Concept',
          category: 'Infrastructure Engineering',
          location: 'Kingdom of Saudi Arabia',
          year: 'Aspirational',
          description: 'A cable-stayed pedestrian and transit bridge concept designed to endure extreme desert conditions while achieving structural elegance through minimal material use.',
        },
        {
          title: 'Civic & Cultural Hub — Concept',
          category: 'Architectural Engineering',
          location: 'Riyadh, KSA',
          year: 'Aspirational',
          description: 'A bold civic building concept merging Islamic geometric precision with brutalist mass — engineered for permanence and designed for cultural resonance.',
        },
        {
          title: 'Precision in Steel — Detail Study',
          category: 'Structural Engineering',
          location: 'Research & Development',
          year: 'Ongoing',
          description: 'An internal engineering research study exploring next-generation steel connection detailing, welding tolerances, and load-transfer efficiency for complex structural nodes.',
        },
      ],
    },
    services: {
      title: 'Services',
      subtitle: 'Precision Engineering',
      description: 'Our comprehensive suite of engineering consultancy services, each delivered with the rigor and exactitude that defines Tnasuq.',
      items: [
        {
          title: 'Structural Analysis',
          description: 'Advanced finite element analysis, seismic design, wind engineering, and structural optimization for buildings and infrastructure of any scale.',
        },
        {
          title: 'Architectural Design',
          description: 'Integrated architectural and engineering design that merges aesthetic vision with structural integrity from concept to completion.',
        },
        {
          title: 'Project Management',
          description: 'End-to-end project delivery with rigorous scheduling, cost control, quality assurance, and stakeholder coordination.',
        },
        {
          title: 'Construction Supervision',
          description: 'On-site technical oversight ensuring construction fidelity to design specifications, material quality, and safety standards.',
        },
        {
          title: 'Geotechnical Engineering',
          description: 'Subsurface investigation, foundation design, soil stabilization, and ground improvement for complex site conditions.',
        },
        {
          title: 'MEP Engineering',
          description: 'Mechanical, electrical, and plumbing systems design optimized for performance, energy efficiency, and sustainability.',
        },
      ],
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
        structural_analysis: 'Structural Analysis',
        architectural_design: 'Architectural Design',
        project_management: 'Project Management',
        construction_supervision: 'Construction Supervision',
        geotechnical_engineering: 'Geotechnical Engineering',
        mep_engineering: 'MEP Engineering',
        other: 'Other',
      },
    },
    footer: {
      tagline: 'Engineering Excellence Through Harmony',
      rights: '© 2026 Tnasuq Engineering Consultancy. All rights reserved.',
      links: {
        portfolio: 'Portfolio',
        services: 'Services',
        contact: 'Contact',
        privacy: 'Privacy Policy',
      },
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      portfolio: 'المشاريع',
      services: 'الخدمات',
      contact: 'تواصل معنا',
      menu: 'القائمة',
    },
    hero: {
      tagline: 'استشارات هندسية',
      subtitle: 'حيث تلتقي الدقة بالرؤية. نحوّل التحديات الهندسية المعقدة إلى هياكل متميزة ودائمة.',
      cta: 'استفسار تقني',
      scroll: 'اسحب للاستكشاف',
    },
    portfolio: {
      title: 'المشاريع',
      subtitle: 'مشاريع مختارة',
      description: 'مجموعة مختارة من أبرز إنجازاتنا الهندسية، يمثّل كل منها التقاء الدقة التقنية بالرؤية المعمارية.',
      viewSpecs: 'عرض المواصفات',
      projects: [
        {
          title: 'برج الرؤية — تصوّر مستقبلي',
          category: 'التصميم الإنشائي',
          location: 'الرياض، المملكة العربية السعودية',
          year: 'طموحي',
          description: 'برج متعدد الاستخدامات يُتخيّل في أفق الرياض — يدمج هندسة الواجهات الحسابية مع نواة معزولة زلزالياً وأنظمة إنشائية محايدة للكربون.',
        },
        {
          title: 'جسر العبور الصحراوي — تصور مستقبلي',
          category: 'هندسة البنية التحتية',
          location: 'المملكة العربية السعودية',
          year: 'طموحي',
          description: 'تصور لجسر مشاة ونقل معلّق مصمم لتحمل الظروف الصحراوية القاسية مع تحقيق أناقة إنشائية من خلال الاستخدام الأمثل للمواد.',
        },
        {
          title: 'مركز المدني والثقافي — تصور مستقبلي',
          category: 'الهندسة المعمارية',
          location: 'الرياض، المملكة العربية السعودية',
          year: 'طموحي',
          description: 'تصور جريء لمبنى مدني يدمج الدقة الهندسية الإسلامية مع الكتلة البروتالية — مُهندس للديمومة ومُصمم للصدى الثقافي.',
        },
        {
          title: 'الدقة في الفولاذ — دراسة تفصيلية',
          category: 'الهندسة الإنشائية',
          location: 'البحث والتطوير',
          year: 'جاري',
          description: 'دراسة هندسية داخلية لاستكشاف تفاصيل الوصلات الفولاذية من الجيل التالي، تفاوتات اللحام، وكفاءة نقل الأحمال في العُقد الإنشائية المعقدة.',
        },
      ],
    },
    services: {
      title: 'الخدمات',
      subtitle: 'هندسة دقيقة',
      description: 'مجموعتنا الشاملة من خدمات الاستشارات الهندسية، يتم تقديم كل منها بالصرامة والدقة التي تميز تناسق.',
      items: [
        {
          title: 'التحليل الإنشائي',
          description: 'تحليل متقدم بطريقة العناصر المحدودة، تصميم مقاوم للزلازل، هندسة الرياح، وتحسين الهياكل للمباني والبنية التحتية بأي حجم.',
        },
        {
          title: 'التصميم المعماري',
          description: 'تصميم معماري وهندسي متكامل يدمج الرؤية الجمالية مع السلامة الإنشائية من المفهوم إلى الإنجاز.',
        },
        {
          title: 'إدارة المشاريع',
          description: 'تسليم المشاريع من البداية إلى النهاية مع جدولة صارمة، ضبط التكاليف، ضمان الجودة، وتنسيق أصحاب المصلحة.',
        },
        {
          title: 'الإشراف على التنفيذ',
          description: 'إشراف تقني في الموقع يضمن مطابقة التنفيذ لمواصفات التصميم وجودة المواد ومعايير السلامة.',
        },
        {
          title: 'الهندسة الجيوتقنية',
          description: 'استكشاف باطن الأرض، تصميم الأساسات، تثبيت التربة، وتحسين الأرض للظروف الموقعية المعقدة.',
        },
        {
          title: 'الهندسة الكهروميكانيكية',
          description: 'تصميم أنظمة ميكانيكية وكهربائية وصحية محسّنة للأداء وكفاءة الطاقة والاستدامة.',
        },
      ],
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
        structural_analysis: 'التحليل الإنشائي',
        architectural_design: 'التصميم المعماري',
        project_management: 'إدارة المشاريع',
        construction_supervision: 'الإشراف على التنفيذ',
        geotechnical_engineering: 'الهندسة الجيوتقنية',
        mep_engineering: 'الهندسة الكهروميكانيكية',
        other: 'أخرى',
      },
    },
    footer: {
      tagline: 'التميز الهندسي من خلال التناسق',
      rights: '© ٢٠٢٦ تناسق للاستشارات الهندسية. جميع الحقوق محفوظة.',
      links: {
        portfolio: 'المشاريع',
        services: 'الخدمات',
        contact: 'تواصل معنا',
        privacy: 'سياسة الخصوصية',
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