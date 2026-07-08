import React, { useState, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const { t, lang, isRTL } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    project_location: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.ContactInquiry.create({
      ...form,
      language: lang,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1.5px] bg-primary" />
              <span className={`text-sm tracking-[0.2em] text-primary font-medium uppercase ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {t.contact.title}
              </span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic' : 'font-inter tracking-tight'}`}>
              {t.contact.subtitle}
            </h2>
            <p className={`text-lg text-muted-foreground leading-relaxed mb-12 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {t.contact.description}
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div>
                <span className={`text-xs tracking-[0.15em] text-muted-foreground uppercase block mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {isRTL ? 'البريد الإلكتروني' : 'Email'}
                </span>
                <a href="mailto:info@tnasuq.com" className="text-foreground hover:text-primary transition-colors font-inter">
                  info@tnasuq.com
                </a>
              </div>
              <div>
                <span className={`text-xs tracking-[0.15em] text-muted-foreground uppercase block mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {isRTL ? 'الهاتف' : 'Phone'}
                </span>
                <a href="tel:+966530336660" className="text-foreground hover:text-primary transition-colors font-inter" dir="ltr">
                  +966 53 033 6660
                </a>
              </div>
              <div>
                <span className={`text-xs tracking-[0.15em] text-muted-foreground uppercase block mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {isRTL ? 'واتساب' : 'WhatsApp'}
                </span>
                <a
                  href={`https://wa.me/966530336660?text=${encodeURIComponent(isRTL ? 'مرحباً، أود الاستفسار عن خدمات تناسق الهندسية.' : 'Hello, I would like to inquire about Tnasuq Engineering services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors font-inter"
                  dir="ltr"
                >
                  +966 53 033 6660
                </a>
              </div>
              <div>
                <span className={`text-xs tracking-[0.15em] text-muted-foreground uppercase block mb-1 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {isRTL ? 'العنوان' : 'Address'}
                </span>
                <span className={`text-foreground text-sm leading-relaxed ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {isRTL
                    ? 'شارع الشيخ عبدالله بن جبرين، حي القيروان\nالرياض ١٣٥٣١، المملكة العربية السعودية'
                    : '3649 Al Shaikh Abdullah Ibn Jibrin St.\nAl Qairawan District, Riyadh 13531, KSA'}
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 overflow-hidden border border-border/40" style={{ aspectRatio: '16/9' }}>
              <iframe
                title="Tnasuq Office Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=46.5890%2C24.8160%2C46.6190%2C24.8460&layer=mapnik&marker=24.831094%2C46.604048"
                className="w-full h-full"
                style={{ border: 0, filter: 'grayscale(30%) contrast(1.05)' }}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <a
              href="https://maps.google.com/maps?q=Al+Qairawan+District+Riyadh+Saudi+Arabia"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-2 text-xs text-muted-foreground hover:text-primary transition-colors ${isRTL ? 'font-arabic' : 'font-inter'}`}
            >
              {isRTL ? 'فتح في خرائط جوجل ↗' : 'Open in Google Maps ↗'}
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <CheckCircle2 className="w-12 h-12 text-primary mb-6" />
                <p className={`text-xl text-foreground font-medium ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                  {t.contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs tracking-[0.1em] text-muted-foreground uppercase block mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {t.contact.form.name}
                    </label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`bg-transparent border-border/60 focus:border-primary h-12 rounded-none ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
                    />
                  </div>
                  <div>
                    <label className={`text-xs tracking-[0.1em] text-muted-foreground uppercase block mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {t.contact.form.email}
                    </label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`bg-transparent border-border/60 focus:border-primary h-12 rounded-none ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs tracking-[0.1em] text-muted-foreground uppercase block mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {t.contact.form.phone}
                    </label>
                    <Input
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`bg-transparent border-border/60 focus:border-primary h-12 rounded-none ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
                    />
                  </div>
                  <div>
                    <label className={`text-xs tracking-[0.1em] text-muted-foreground uppercase block mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                      {t.contact.form.service}
                    </label>
                    <Select
                      required
                      value={form.service_type}
                      onValueChange={(val) => handleChange('service_type', val)}
                    >
                      <SelectTrigger className={`bg-transparent border-border/60 focus:border-primary h-12 rounded-none ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                        <SelectValue placeholder={t.contact.form.selectService} />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(t.contact.serviceOptions).map(([key, label]) => (
                          <SelectItem key={key} value={key} className={isRTL ? 'font-arabic' : 'font-inter'}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className={`text-xs tracking-[0.1em] text-muted-foreground uppercase block mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {t.contact.form.location}
                  </label>
                  <Input
                    value={form.project_location}
                    onChange={(e) => handleChange('project_location', e.target.value)}
                    className={`bg-transparent border-border/60 focus:border-primary h-12 rounded-none ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
                  />
                </div>

                <div>
                  <label className={`text-xs tracking-[0.1em] text-muted-foreground uppercase block mb-2 ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={5}
                    className={`bg-transparent border-border/60 focus:border-primary rounded-none resize-none ${isRTL ? 'font-arabic text-right' : 'font-inter'}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`group w-full flex items-center justify-center gap-3 bg-foreground text-background py-4 text-sm tracking-wider font-medium hover:bg-primary transition-colors duration-500 disabled:opacity-60 ${isRTL ? 'font-arabic' : 'font-inter'}`}
                >
                  {submitting ? t.contact.form.sending : t.contact.form.submit}
                  {!submitting && (
                    <span className="inline-block w-5 h-[1.5px] bg-background group-hover:w-8 transition-all duration-300" />
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}