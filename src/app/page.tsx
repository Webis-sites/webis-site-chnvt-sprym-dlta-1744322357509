'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HealthCategoriesSection from '@/components/HealthCategoriesSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import ContactSection from '@/components/ContactSection';
import LocationSection from '@/components/LocationSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LocationSection />
      
      <ContactSection />
      
      <ExpertiseSection />
      
      <HealthCategoriesSection />
      
      <ServicesSection />
      
      <AboutSection />
      
      <HeroSection />
      
      <Header />
      
      <Layout />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
      </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 חנות ספרים דלתא. webis
        </div>
      </footer>
    </div>
  );
}