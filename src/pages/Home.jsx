import React from 'react';
import { LanguageProvider } from '@/lib/LanguageContext';
import PerimeterNav from '@/components/navigation/PerimeterNav';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import LogoProposalsSection from '@/components/sections/LogoProposalsSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

// Hero
const HERO_IMAGE = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/5e0aff43e_generated_95c7e70c.png';

// Aspirational project images
const PROJECT_IMAGES = [
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/4c8d9b838_generated_image.png',
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/a26002cb1_generated_image.png',
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/3c6f05496_generated_image.png',
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/939357ebf_generated_image.png',
];

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <PerimeterNav />
        <HeroSection heroImage={HERO_IMAGE} />
        <PortfolioSection projectImages={PROJECT_IMAGES} />
        <ServicesSection />
        <LogoProposalsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
}