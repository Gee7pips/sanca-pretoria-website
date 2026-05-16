'use client';

import dynamic from 'next/dynamic';

// ── Core Layout & UI ──
const Navbar = dynamic(() => import('@/components/sanca/Navbar'), { ssr: false });
const PageLoader = dynamic(() => import('@/components/sanca/PageLoader'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/sanca/ScrollProgress'), { ssr: false });
const Footer = dynamic(() => import('@/components/sanca/Footer'), { ssr: false });
const FloatingActions = dynamic(() => import('@/components/sanca/FloatingActions'), { ssr: false });
const DonateButton = dynamic(() => import('@/components/sanca/DonateButton'), { ssr: false });

// ── Storytelling Framework ──
const StoryNavigation = dynamic(() => import('@/components/sanca/StoryNavigation'), { ssr: false });
const ChapterDivider = dynamic(() => import('@/components/sanca/ChapterDivider'), { ssr: false });
const NarrativeBridge = dynamic(() => import('@/components/sanca/NarrativeBridge'), { ssr: false });
const ImpactStatsBar = dynamic(() => import('@/components/sanca/ImpactStatsBar'), { ssr: false });

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 1: WELCOME HOME — Hook & Emotional Connection
// The visitor arrives with questions, fears, or hope. We meet them
// with warmth, credibility, and an immediate sense that they've
// come to the right place.
// ═══════════════════════════════════════════════════════════════════
const HeroSection = dynamic(() => import('@/components/sanca/HeroSection'), { ssr: false });
const HeroTicker = dynamic(() => import('@/components/sanca/HeroTicker'), { ssr: false });
const PartnersStrip = dynamic(() => import('@/components/sanca/PartnersStrip'), { ssr: false });
const CEOWelcomeSection = dynamic(() => import('@/components/sanca/CEOWelcomeSection'), { ssr: false });

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 2: WHO WE ARE — Identity, Heritage & Credibility
// Trust deepens as they learn about our nearly seven decades of
// service, our values, and the nationwide SANCA network that
// stands behind every promise we make.
// ═══════════════════════════════════════════════════════════════════
const AboutSection = dynamic(() => import('@/components/sanca/AboutSection'), { ssr: false });
const TeamSection = dynamic(() => import('@/components/sanca/TeamSection'), { ssr: false });
const NationalFootprintSection = dynamic(() => import('@/components/sanca/NationalFootprintSection'), { ssr: false });

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 3: UNDERSTANDING — Education & Self-Discovery
// Now that trust is established, we guide them through
// understanding their situation and the nature of addiction.
// Knowledge replaces fear with clarity.
// ═══════════════════════════════════════════════════════════════════
const SelfAssessment = dynamic(() => import('@/components/sanca/SelfAssessment'), { ssr: false });
const RecoveryVisualizer = dynamic(() => import('@/components/sanca/RecoveryVisualizer'), { ssr: false });
const DiagnosisTips = dynamic(() => import('@/components/sanca/DiagnosisTips'), { ssr: false });
const MythsSection = dynamic(() => import('@/components/sanca/MythsSection'), { ssr: false });
const DrugInfoSection = dynamic(() => import('@/components/sanca/DrugInfoSection'), { ssr: false });
const DrugSeverityMeter = dynamic(() => import('@/components/sanca/DrugSeverityMeter'), { ssr: false });
const DrugTrendsSection = dynamic(() => import('@/components/sanca/DrugTrendsSection'), { ssr: false });
const AddictionCostCalculator = dynamic(() => import('@/components/sanca/AddictionCostCalculator'), { ssr: false });

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 4: YOUR PATH TO RECOVERY — Solutions & Care
// They understand the problem. Now we present our solution —
// comprehensive, evidence-based, accessible care that meets
// them exactly where they are.
// ═══════════════════════════════════════════════════════════════════
const RecoveryJourney = dynamic(() => import('@/components/sanca/RecoveryJourney'), { ssr: false });
const ProgrammesSection = dynamic(() => import('@/components/sanca/ProgrammesSection'), { ssr: false });
const TreatmentComparison = dynamic(() => import('@/components/sanca/TreatmentComparison'), { ssr: false });
const MedicalAidSection = dynamic(() => import('@/components/sanca/MedicalAidSection'), { ssr: false });
const FacilitiesSection = dynamic(() => import('@/components/sanca/FacilitiesSection'), { ssr: false });
const AdmissionsSection = dynamic(() => import('@/components/sanca/AdmissionsSection'), { ssr: false });

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 5: STORIES OF HOPE — Social Proof & Community
// They see the solution works. Now we show them the community
// and support they'll be part of — real stories, real families,
// real transformation.
// ═══════════════════════════════════════════════════════════════════
const TestimonialsSection = dynamic(() => import('@/components/sanca/TestimonialsSection'), { ssr: false });
const FamiliesSection = dynamic(() => import('@/components/sanca/FamiliesSection'), { ssr: false });
const VideoSection = dynamic(() => import('@/components/sanca/VideoSection'), { ssr: false });
const PreventionProgrammesSection = dynamic(() => import('@/components/sanca/PreventionProgrammesSection'), { ssr: false });

// ═══════════════════════════════════════════════════════════════════
// CHAPTER 6: TAKE THE NEXT STEP — Action & Connection
// The story reaches its climax — the call to action. We make it
// as easy and warm as possible to take the next step.
// ═══════════════════════════════════════════════════════════════════
const EmergencyCTA = dynamic(() => import('@/components/sanca/EmergencyCTA'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sanca/ContactSection'), { ssr: false });
const FAQSection = dynamic(() => import('@/components/sanca/FAQSection'), { ssr: false });
const VolunteerSection = dynamic(() => import('@/components/sanca/VolunteerSection'), { ssr: false });
const NewsletterSection = dynamic(() => import('@/components/sanca/NewsletterSection'), { ssr: false });
const EventsSection = dynamic(() => import('@/components/sanca/EventsSection'), { ssr: false });
const ResourceLibrary = dynamic(() => import('@/components/sanca/ResourceLibrary'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        {/* ═══════════════════════════════════════════════════════════
            CHAPTER 1: WELCOME HOME
            Hook & Emotional Connection
            ═══════════════════════════════════════════════════════════ */}
        <div id="chapter-1">
          <HeroSection />
          <HeroTicker />
          <PartnersStrip />
          <ImpactStatsBar />

          <NarrativeBridge text="You are not alone. Nearly 70 years of hope, healing, and humanity stand behind every word on this page." icon="heart" emphasis="not alone" />

          <CEOWelcomeSection />
        </div>

        {/* ── Chapter Transition ── */}
        <ChapterDivider
          chapter={2}
          title="Who We Are"
          subtitle="Nearly seven decades of unwavering commitment to individuals, families, and communities affected by substance misuse — rooted in compassion, guided by excellence, and sustained by the South African spirit of ubuntu."
          quote='"I am because we are" — Ubuntu'
          icon={undefined}
        />

        {/* ═══════════════════════════════════════════════════════════
            CHAPTER 2: WHO WE ARE
            Identity, Heritage & Credibility
            ═══════════════════════════════════════════════════════════ */}
        <div id="chapter-2">
          <AboutSection />

          <NarrativeBridge text="Behind every programme is a person — dedicated professionals who bring both clinical expertise and genuine heart to the work they do." icon="feather" emphasis="genuine heart" />

          <TeamSection />
          <NationalFootprintSection />
        </div>

        {/* ── Chapter Transition ── */}
        <ChapterDivider
          chapter={3}
          title="Understanding"
          subtitle="Knowledge replaces fear with clarity. Whether you are exploring your own relationship with substances or trying to help someone you love, understanding is the first step toward lasting change."
          quote='"The truth will set you free — but first it may make you uncomfortable."'
          icon={undefined}
        />

        {/* ═══════════════════════════════════════════════════════════
            CHAPTER 3: UNDERSTANDING
            Education & Self-Discovery
            ═══════════════════════════════════════════════════════════ */}
        <div id="chapter-3">
          <SelfAssessment />

          <NarrativeBridge text="Your answers are just the beginning. Let us show you what the path forward looks like." icon="arrow" emphasis="path forward" />

          <RecoveryVisualizer />
          <DiagnosisTips />
          <MythsSection />

          <NarrativeBridge text="Understanding the substances themselves is not about fear — it is about empowerment. When you know what you are facing, you can face it with confidence." icon="sparkles" emphasis="empowerment" />

          <DrugInfoSection />
          <DrugSeverityMeter />
          <DrugTrendsSection />
          <AddictionCostCalculator />
        </div>

        {/* ── Chapter Transition ── */}
        <ChapterDivider
          chapter={4}
          title="Your Path to Recovery"
          subtitle="You have understood the challenge. Now let us show you the solution — comprehensive, evidence-based, and deeply personal care that meets you exactly where you are and walks with you every step of the way."
          quote='"A journey of a thousand miles begins with a single step" — African proverb'
          icon={undefined}
        />

        {/* ═══════════════════════════════════════════════════════════
            CHAPTER 4: YOUR PATH TO RECOVERY
            Solutions & Care
            ═══════════════════════════════════════════════════════════ */}
        <div id="chapter-4">
          <RecoveryJourney />
          <ProgrammesSection />
          <TreatmentComparison />

          <NarrativeBridge text="Quality care should never be out of reach. We have made it our mission to ensure that financial concerns never stand between you and recovery." icon="heart" emphasis="never stand between you and recovery" />

          <MedicalAidSection />
          <FacilitiesSection />
          <AdmissionsSection />
        </div>

        {/* ── Chapter Transition ── */}
        <ChapterDivider
          chapter={5}
          title="Stories of Hope"
          subtitle="They walked this path before you — and they emerged stronger, clearer, and more alive than they ever thought possible. Their stories are living proof that recovery is not just possible, but probable, with the right support."
          quote='"Every recovery story is a love letter to the future self."'
          icon={undefined}
        />

        {/* ═══════════════════════════════════════════════════════════
            CHAPTER 5: STORIES OF HOPE
            Social Proof & Community
            ═══════════════════════════════════════════════════════════ */}
        <div id="chapter-5">
          <TestimonialsSection />
          <FamiliesSection />
          <VideoSection />
          <PreventionProgrammesSection />
        </div>

        {/* ── Chapter Transition ── */}
        <ChapterDivider
          chapter={6}
          title="Take the Next Step"
          subtitle="The hardest step is the first one — and you have already taken it by being here. Whether you are ready to begin today or simply need someone to talk to, we are here with open arms and zero judgement."
          quote='"It is never too late to become who you were meant to be."'
          icon={undefined}
        />

        {/* ═══════════════════════════════════════════════════════════
            CHAPTER 6: TAKE THE NEXT STEP
            Action & Connection
            ═══════════════════════════════════════════════════════════ */}
        <div id="chapter-6">
          <EmergencyCTA />
          <ContactSection />
          <FAQSection />

          <NarrativeBridge text="Recovery is not just about treatment — it is about community. Join the movement of hope that is transforming lives across South Africa." icon="feather" emphasis="community" />

          <VolunteerSection />
          <NewsletterSection />
          <EventsSection />
          <ResourceLibrary />
        </div>
      </main>

      <Footer />
      <FloatingActions />
      <DonateButton />
      <StoryNavigation />
    </div>
  );
}
