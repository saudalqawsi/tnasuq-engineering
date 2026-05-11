import React from 'react';
import { LanguageProvider } from '@/lib/LanguageContext';
import PerimeterNav from '@/components/navigation/PerimeterNav';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a01985ff51577d637f369f5/5e0aff43e_generated_95c7e70c.png';
const PROJECT_IMAGES = [
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/e746819d0_generated_2fb429c9.png',
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/da8cc2f25_generated_b539105a.png',
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/6ff340606_generated_0a4a4cdb.png',
  'https://media.base44.com/images/public/6a01985ff51577d637f369f5/c96547783_generated_8bf85ec5.png',
];

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <PerimeterNav />
        <HeroSection heroImage={HERO_IMAGE} />
        <PortfolioSection projectImages={PROJECT_IMAGES} />
        <ServicesSection />
        <ContactSection />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
}