import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Printer } from 'lucide-react';

export default function PrintButton() {
  const { isRTL, t } = useLanguage();
  const label = isRTL ? 'طباعة / حفظ PDF' : 'Print / Save PDF';

  return (
    <button
      onClick={() => window.print()}
      className="fixed bottom-6 left-6 z-50 group flex items-center gap-2 bg-foreground text-background px-4 py-3 shadow-lg hover:bg-primary transition-colors duration-300 print:hidden"
      aria-label={label}
    >
      <Printer className="w-5 h-5" />
      <span className={`text-xs tracking-wider font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
        {label}
      </span>
    </button>
  );
}