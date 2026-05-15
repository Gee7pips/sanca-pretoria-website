'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/sanca/Navbar'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/sanca/HeroSection'), { ssr: false });
const HeroTicker = dynamic(() => import('@/components/sanca/HeroTicker'), { ssr: false });
const PartnersStrip = dynamic(() => import('@/components/sanca/PartnersStrip'), { ssr: false });
const CEOWelcomeSection = dynamic(() => import('@/components/sanca/CEOWelcomeSection'), { ssr: false });
const SelfAssessment = dynamic(() => import('@/components/sanca/SelfAssessment'), { ssr: false });
const RecoveryVisualizer = dynamic(() => import('@/components/sanca/RecoveryVisualizer'), { ssr: false });
const DiagnosisTips = dynamic(() => import('@/components/sanca/DiagnosisTips'), { ssr: false });
const MythsSection = dynamic(() => import('@/components/sanca/MythsSection'), { ssr: false });
const MedicalAidSection = dynamic(() => import('@/components/sanca/MedicalAidSection'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/sanca/AboutSection'), { ssr: false });
const TeamSection = dynamic(() => import('@/components/sanca/TeamSection'), { ssr: false });
const NationalFootprintSection = dynamic(() => import('@/components/sanca/NationalFootprintSection'), { ssr: false });
const RecoveryJourney = dynamic(() => import('@/components/sanca/RecoveryJourney'), { ssr: false });
const ProgrammesSection = dynamic(() => import('@/components/sanca/ProgrammesSection'), { ssr: false });
const TreatmentComparison = dynamic(() => import('@/components/sanca/TreatmentComparison'), { ssr: false });
const FacilitiesSection = dynamic(() => import('@/components/sanca/FacilitiesSection'), { ssr: false });
const AdmissionsSection = dynamic(() => import('@/components/sanca/AdmissionsSection'), { ssr: false });
const DrugSeverityMeter = dynamic(() => import('@/components/sanca/DrugSeverityMeter'), { ssr: false });
const DrugInfoSection = dynamic(() => import('@/components/sanca/DrugInfoSection'), { ssr: false });
const AddictionCostCalculator = dynamic(() => import('@/components/sanca/AddictionCostCalculator'), { ssr: false });
const FamiliesSection = dynamic(() => import('@/components/sanca/FamiliesSection'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/sanca/FAQSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/sanca/TestimonialsSection'), { ssr: false });
const VolunteerSection = dynamic(() => import('@/components/sanca/VolunteerSection'), { ssr: false });
const NewsletterSection = dynamic(() => import('@/components/sanca/NewsletterSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sanca/ContactSection'), { ssr: false });
const EmergencyCTA = dynamic(() => import('@/components/sanca/EmergencyCTA'), { ssr: false });
const FloatingActions = dynamic(() => import('@/components/sanca/FloatingActions'), { ssr: false });
const ChatBot = dynamic(() => import('@/components/sanca/ChatBot'), { ssr: false });
const ResourceLibrary = dynamic(() => import('@/components/sanca/ResourceLibrary'), { ssr: false });
const EventsSection = dynamic(() => import('@/components/sanca/EventsSection'), { ssr: false });
const DrugTrendsSection = dynamic(() => import('@/components/sanca/DrugTrendsSection'), { ssr: false });
const PreventionProgrammesSection = dynamic(() => import('@/components/sanca/PreventionProgrammesSection'), { ssr: false });
const VideoSection = dynamic(() => import('@/components/sanca/VideoSection'), { ssr: false });
const PageLoader = dynamic(() => import('@/components/sanca/PageLoader'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/sanca/ScrollProgress'), { ssr: false });
const Footer = dynamic(() => import('@/components/sanca/Footer'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HeroTicker />
        <PartnersStrip />
        <CEOWelcomeSection />
        <div className="parallax-divider" />
        <SelfAssessment />
        <RecoveryVisualizer />
        <div className="parallax-divider" />
        <DiagnosisTips />
        <MythsSection />
        <MedicalAidSection />
        <div className="parallax-divider" />
        <AboutSection />
        <TeamSection />
        <NationalFootprintSection />
        <RecoveryJourney />
        <div className="parallax-divider" />
        <ProgrammesSection />
        <TreatmentComparison />
        <FacilitiesSection />
        <div className="parallax-divider" />
        <AdmissionsSection />
        <DrugSeverityMeter />
        <DrugInfoSection />
        <DrugTrendsSection />
        <AddictionCostCalculator />
        <div className="parallax-divider" />
        <FamiliesSection />
        <VideoSection />
        <PreventionProgrammesSection />
        <ResourceLibrary />
        <EventsSection />
        <div className="parallax-divider" />
        <FAQSection />
        <TestimonialsSection />
        <div className="parallax-divider" />
        <VolunteerSection />
        <NewsletterSection />
        <ContactSection />
        <EmergencyCTA />
      </main>
      <Footer />
      <FloatingActions />
      <ChatBot />
    </div>
  );
}
