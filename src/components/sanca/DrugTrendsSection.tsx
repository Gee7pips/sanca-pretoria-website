'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  Brain,
  TrendingUp,
  ShieldAlert,
  Users,
  Syringe,
  Zap,
  Flame,
  Pill,
  Activity,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Siren,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/* ────────────────────────────────────────────
   Data — Drug Epidemic Cards
   ──────────────────────────────────────────── */

interface DrugEpidemic {
  id: string;
  name: string;
  streetNames: string;
  region: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  severity: number; // 1-5
  dangers: {
    type: string;
    icon: React.ElementType;
    description: string;
  }[];
  keyFact: string;
}

const drugEpidemics: DrugEpidemic[] = [
  {
    id: 'tik',
    name: 'Tik (Methamphetamine)',
    streetNames: 'Crystal Meth, Ice, Speed, Tik',
    region: 'Western Cape — Dominant drug of concern',
    icon: Zap,
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
    severity: 5,
    dangers: [
      {
        type: 'Neurological Impact',
        icon: Brain,
        description:
          'High dopamine-depletion requires longer "stabilization" period, often needing psychiatric intervention for drug-induced psychosis',
      },
      {
        type: 'Social Devastation',
        icon: Users,
        description:
          'Tied to extreme poverty and gang culture in Cape Flats; fuels property crime and violent offences',
      },
      {
        type: 'Recidivism',
        icon: TrendingUp,
        description:
          'High relapse rate unless treatment is followed by intensive vocational reintegration and ongoing community support',
      },
    ],
    keyFact: 'Tik accounts for the highest proportion of treatment admissions in the Western Cape',
  },
  {
    id: 'nyaope',
    name: 'Nyaope (Heroin Cocktail)',
    streetNames: 'Nyaope, Whoonga, Sugars, Plazana',
    region: 'Gauteng & Mpumalanga — Epidemic proportions',
    icon: Pill,
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    severity: 5,
    dangers: [
      {
        type: 'Neurological Impact',
        icon: Brain,
        description:
          'Combination of low-grade heroin, cannabis, and antiretroviral drugs creates severe neurological damage and unpredictable withdrawal',
      },
      {
        type: 'Social Devastation',
        icon: Users,
        description:
          'Extreme poverty drives users to crime; the drug is cheap (R20–R30 a hit), making it pervasive in townships',
      },
      {
        type: 'Recidivism',
        icon: TrendingUp,
        description:
          'Tied to extreme poverty and lack of economic opportunity — relapse is near-certain without vocational reintegration',
      },
    ],
    keyFact: 'Nyaope has reached epidemic proportions in Gauteng and Mpumalanga townships',
  },
];

/* ────────────────────────────────────────────
   Severity Indicator
   ──────────────────────────────────────────── */

function SeverityIndicator({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-2.5 rounded-full transition-all duration-500 ${
            i < level
              ? level >= 5
                ? 'w-8 bg-red-500'
                : level >= 4
                  ? 'w-7 bg-orange-500'
                  : 'w-6 bg-yellow-500'
              : 'w-5 bg-white/10'
          }`}
        />
      ))}
      <span className="ml-2 text-xs font-bold text-red-400 uppercase tracking-wider">
        Critical
      </span>
    </div>
  );
}

/* ────────────────────────────────────────────
   Policy Timeline Data
   ──────────────────────────────────────────── */

const policySteps = [
  {
    year: 'Pre-2019',
    label: 'Traditional Abstinence',
    description: 'Zero-tolerance approach; abstinence as the only goal',
    active: false,
  },
  {
    year: '2019',
    label: 'National Drug Master Plan',
    description: 'Began embracing harm reduction principles nationally',
    active: true,
  },
  {
    year: 'Current',
    label: 'OST Integration',
    description: 'Opioid Substitution Therapy with methadone for heroin users',
    active: true,
  },
  {
    year: 'Ongoing',
    label: 'SANCA Integration',
    description: 'Harm reduction guidelines integrated into SANCA medical manuals',
    active: true,
  },
];

/* ────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────── */

export default function DrugTrendsSection() {
  const [selectedDrug, setSelectedDrug] = useState<string>('tik');

  return (
    <section
      id="drug-trends"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D3B22 0%, #071a10 40%, #000000 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-sanca-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-sanca-gold/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sanca-green-dark/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 text-red-400 text-sm font-medium mb-4 border border-red-500/20">
            <Siren className="h-4 w-4" />
            Drug Trends &amp; Policy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            South Africa&apos;s <span className="text-gradient-gold">Drug Epidemic</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
            Two substances have reached crisis levels in South Africa. Understanding the unique
            challenges they present is critical for effective treatment and policy response.
          </p>
        </motion.div>

        {/* ─── Two-Column Layout ─── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Drug Epidemic Cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                The <span className="text-gradient-gold">Crisis</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Two drugs dominate South Africa&apos;s substance abuse landscape — each with
                devastating, unique challenges
              </p>
            </motion.div>

            {/* Drug Toggle Buttons */}
            <div className="flex gap-3 mb-6">
              {drugEpidemics.map((drug) => {
                const Icon = drug.icon;
                return (
                  <motion.button
                    key={drug.id}
                    onClick={() => setSelectedDrug(drug.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      selectedDrug === drug.id
                        ? 'bg-white/15 text-white border border-white/20 shadow-[0_0_20px_rgba(27,94,59,0.3)]'
                        : 'bg-white/5 text-white/50 border border-white/5 hover:bg-white/8 hover:text-white/70'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {drug.name.split('(')[0].trim()}
                  </motion.button>
                );
              })}
            </div>

            {/* Drug Detail Card */}
            <AnimatePresence mode="wait">
              {drugEpidemics
                .filter((d) => d.id === selectedDrug)
                .map((drug) => {
                  const Icon = drug.icon;
                  return (
                    <motion.div
                      key={drug.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover-lift">
                        {/* Card Header */}
                        <div className="p-6 sm:p-8 border-b border-white/10">
                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className={`relative w-14 h-14 rounded-2xl ${drug.iconBg} flex items-center justify-center flex-shrink-0`}
                            >
                              <Icon className={`h-7 w-7 ${drug.iconColor}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                                {drug.name}
                              </h4>
                              <p className="text-white/40 text-xs mt-1">{drug.streetNames}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <Flame className="h-4 w-4 text-orange-400 flex-shrink-0" />
                            <span className="text-orange-400 text-sm font-medium">
                              {drug.region}
                            </span>
                          </div>
                          <SeverityIndicator level={drug.severity} />
                        </div>

                        {/* Danger Indicators */}
                        <div className="p-6 sm:p-8">
                          <h5 className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">
                            Key Danger Indicators
                          </h5>
                          <div className="space-y-5">
                            {drug.dangers.map((danger, i) => {
                              const DangerIcon = danger.icon;
                              return (
                                <motion.div
                                  key={danger.type}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  className="flex items-start gap-4"
                                >
                                  <div className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    <DangerIcon className="h-5 w-5 text-sanca-gold" />
                                  </div>
                                  <div>
                                    <p className="text-white font-semibold text-sm mb-1">
                                      {danger.type}
                                    </p>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                      {danger.description}
                                    </p>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>

                          {/* Key Fact */}
                          <div className="mt-6 p-4 rounded-xl bg-sanca-gold/10 border border-sanca-gold/20">
                            <div className="flex items-start gap-3">
                              <AlertTriangle className="h-5 w-5 text-sanca-gold flex-shrink-0 mt-0.5" />
                              <p className="text-sanca-gold-light text-sm leading-relaxed font-medium">
                                {drug.keyFact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </div>

          {/* Right Column: Harm Reduction & Innovation */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Harm Reduction &amp; <span className="text-gradient-gold">Innovation</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                A shift in South African policy is opening new pathways to treatment
              </p>
            </motion.div>

            {/* Debate Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-8 mb-6 hover-lift">
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative w-12 h-12 rounded-xl bg-sanca-green/20 border border-sanca-green/30 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-sanca-green-light" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white tracking-tight mb-1">
                      The Policy Debate
                    </h4>
                    <p className="text-white/40 text-xs">Harm Reduction vs. Traditional Abstinence</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  An ongoing debate within South African drug policy centres on whether treatment
                  should demand complete abstinence or embrace{' '}
                  <span className="text-sanca-gold-light font-semibold">harm reduction</span> —
                  meeting people where they are and reducing the negative consequences of drug use
                  even if abstinence isn&apos;t immediately achievable.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  The <span className="text-white font-semibold">National Drug Master Plan 2019–2024</span> has
                  begun to embrace harm reduction principles, marking a significant policy evolution.
                </p>
              </Card>
            </motion.div>

            {/* OST Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-8 mb-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-xl bg-sanca-gold/15 border border-sanca-gold/25 flex items-center justify-center">
                    <Syringe className="h-5 w-5 text-sanca-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white tracking-tight">
                      Opioid Substitution Therapy (OST)
                    </h4>
                    <p className="text-white/40 text-xs">Methadone-assisted stabilisation</p>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  OST uses <span className="text-sanca-gold-light font-semibold">methadone</span> to stabilise
                  heroin and Nyaope users, reducing withdrawal severity, cravings, and the
                  compulsion to engage in risky behaviour to fund the addiction.
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Reduces overdose risk', icon: ShieldAlert },
                    { label: 'Stabilises daily life', icon: Activity },
                    { label: 'Lowers crime rates', icon: CheckCircle2 },
                    { label: 'Enables treatment entry', icon: ChevronRight },
                  ].map((benefit) => {
                    const BIcon = benefit.icon;
                    return (
                      <div
                        key={benefit.label}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-sanca-green/10 border border-sanca-green/15"
                      >
                        <BIcon className="h-4 w-4 text-sanca-green-light flex-shrink-0" />
                        <span className="text-white/70 text-xs font-medium">{benefit.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Barriers */}
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/15">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">
                      Barriers
                    </span>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    High cost of methadone and lack of state funding remain significant barriers to
                    widespread OST implementation in South Africa.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Policy Evolution Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 sm:p-8 hover-lift">
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative w-10 h-10 rounded-xl bg-sanca-emerald/15 border border-sanca-emerald/25 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-sanca-emerald" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white tracking-tight">
                    Policy Evolution
                  </h4>
                </div>

                <div className="space-y-4">
                  {policySteps.map((step, i) => (
                    <motion.div
                      key={step.year}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      {/* Timeline dot */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div
                          className={`w-3 h-3 rounded-full border-2 ${
                            step.active
                              ? 'bg-sanca-gold border-sanca-gold shadow-[0_0_8px_rgba(197,150,58,0.4)]'
                              : 'bg-white/10 border-white/20'
                          }`}
                        />
                        {i < policySteps.length - 1 && (
                          <div className="w-0.5 h-8 bg-white/10 mt-1" />
                        )}
                      </div>
                      <div className="pb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold ${
                              step.active ? 'text-sanca-gold' : 'text-white/30'
                            }`}
                          >
                            {step.year}
                          </span>
                          <span className="text-white/80 text-sm font-semibold">
                            {step.label}
                          </span>
                        </div>
                        <p className="text-white/40 text-xs leading-relaxed mt-0.5">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* SANCA Integration Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <div className="p-5 rounded-xl bg-gradient-to-r from-sanca-green/20 to-sanca-green-dark/30 border border-sanca-green/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-sanca-green-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      SANCA&apos;s Integrated Approach
                    </p>
                    <p className="text-white/50 text-xs leading-relaxed">
                      SANCA has integrated harm reduction guidelines — including OST protocols — into
                      its medical manuals. This means patients at Castle Carey Clinic and all SANCA
                      facilities benefit from evidence-based treatment that combines the best of
                      traditional abstinence goals with modern harm reduction science.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-sanca-gold hover:bg-sanca-gold-dark text-white font-semibold px-8 py-3 text-base shadow-gold btn-ripple w-full sm:w-auto"
              >
                Get Evidence-Based Help
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
