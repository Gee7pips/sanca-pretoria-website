'use client';

import Navbar from '@/components/sanca/Navbar';
import HeroSection from '@/components/sanca/HeroSection';
import SelfAssessment from '@/components/sanca/SelfAssessment';
import AboutSection from '@/components/sanca/AboutSection';
import ProgrammesSection from '@/components/sanca/ProgrammesSection';
import FacilitiesSection from '@/components/sanca/FacilitiesSection';
import AdmissionsSection from '@/components/sanca/AdmissionsSection';
import DiagnosisTips from '@/components/sanca/DiagnosisTips';
import DrugInfoSection from '@/components/sanca/DrugInfoSection';
import TestimonialsSection from '@/components/sanca/TestimonialsSection';
import EmergencyCTA from '@/components/sanca/EmergencyCTA';
import Footer from '@/components/sanca/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SelfAssessment />
        <DiagnosisTips />
        <AboutSection />
        <ProgrammesSection />
        <FacilitiesSection />
        <AdmissionsSection />
        <DrugInfoSection />
        <TestimonialsSection />
        <EmergencyCTA />
      </main>
      <Footer />
    </div>
  );
}
