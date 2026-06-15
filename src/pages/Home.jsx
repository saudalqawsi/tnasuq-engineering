import React from 'react';
import { LanguageProvider } from '@/lib/LanguageContext';
import PerimeterNav from '@/components/navigation/PerimeterNav';
import HeroSection from '@/components/sections/HeroSection';
import StatsStrip from '@/components/sections/StatsStrip';
import PortfolioSection from '@/components/sections/PortfolioSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CalligraphyPickerSection from '@/components/sections/CalligraphyPickerSection';

// Hero
const HERO_IMAGE = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/5e0aff43e_generated_95c7e70c.png';

// Saudi market asset class project images
const PROJECT_IMAGES = [
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/0b027aac4_generated_image.png',
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/3887353f2_generated_image.png',
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/04a976b0a_generated_image.png',
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/9af34f3a7_generated_image.png',
];

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <PerimeterNav />
        <HeroSection heroImage={HERO_IMAGE} />
        <StatsStrip />
        <AboutSection />
        <PortfolioSection />
        <WhyUsSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />

        <CalligraphyPickerSection />
        <FooterSection />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}