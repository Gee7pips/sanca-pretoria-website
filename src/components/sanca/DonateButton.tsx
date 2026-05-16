'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  HandHeart,
  X,
  Shield,
  Users,
  GraduationCap,
  Building2,
  Sparkles,
  ArrowRight,
  Check,
  Gift,
  Star,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

/* ═══════════════════════════════════════════════════════════════════
   DONATE / SPONSOR ONBOARDING DATA
   ═══════════════════════════════════════════════════════════════════ */

const sponsorTiers = [
  {
    icon: Heart,
    title: 'Hope Giver',
    range: 'R100 – R499/mo',
    color: 'from-sanca-emerald to-sanca-green',
    iconBg: 'bg-sanca-emerald/15',
    iconColor: 'text-sanca-emerald',
    benefits: [
      'Sponsor a counselling session for someone in need',
      'Receive quarterly impact updates',
      'Personal thank-you from our team',
      'Tax-deductible certificate (Section 18A)',
    ],
  },
  {
    icon: Star,
    title: 'Recovery Champion',
    range: 'R500 – R1,999/mo',
    color: 'from-sanca-gold to-sanca-gold-dark',
    iconBg: 'bg-sanca-gold/15',
    iconColor: 'text-sanca-gold-dark',
    benefits: [
      'Fund a week of group therapy sessions',
      'Named on our Wall of Hope',
      'Exclusive quarterly newsletter',
      'Invitation to annual gratitude event',
      'Tax-deductible certificate (Section 18A)',
    ],
    featured: true,
  },
  {
    icon: Sparkles,
    title: 'Lifesaver Patron',
    range: 'R2,000+/mo',
    color: 'from-sanca-green-dark to-sanca-green',
    iconBg: 'bg-sanca-green/15',
    iconColor: 'text-sanca-green-dark',
    benefits: [
      'Fund a full month of inpatient treatment',
      'Personalised impact reports',
      'Private facility tour & meet the team',
      'Priority invitations to all events',
      'Named on our Wall of Hope',
      'Tax-deductible certificate (Section 18A)',
    ],
  },
];

const impactStats = [
  { value: 'R350', label: 'One counselling session', icon: HandHeart },
  { value: 'R2,500', label: 'One week of rehab care', icon: Shield },
  { value: 'R8,500', label: 'Full month of treatment', icon: Users },
  { value: 'R50', label: 'Feeds a patient for a day', icon: GraduationCap },
];

const corporateBenefits = [
  { icon: Shield, title: 'Section 18A Tax Deduction', desc: 'Donations are tax-deductible, reducing your corporate tax liability' },
  { icon: Building2, title: 'B-BBEE Scorecard Points', desc: 'Socio-economic development contributions count toward your B-BBEE scorecard' },
  { icon: Users, title: 'Employee Wellness Partner', desc: 'Align your brand with mental health and community wellbeing' },
  { icon: Gift, title: 'CSR Reporting & Impact', desc: 'Receive detailed impact reports for your annual sustainability reporting' },
];

/* ═══════════════════════════════════════════════════════════════════
   DONATE BUTTON — Cute 3D Heart with subtle animations
   ═══════════════════════════════════════════════════════════════════ */

export default function DonateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'individual' | 'corporate'>('individual');

  return (
    <>
      {/* ── Floating 3D Heart Button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 2.5 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 group"
            aria-label="Donate or sponsor SANCA Pretoria"
          >
            {/* Label tooltip */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white dark:bg-[#0D3B22] text-sanca-green-dark dark:text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-premium-lg whitespace-nowrap pointer-events-none border border-sanca-gold/15"
            >
              Donate / Sponsor
              <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-[#0D3B22] rotate-45 border-r border-b border-sanca-gold/15" />
            </motion.span>

            {/* Outer pulsing glow ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.05, 0.15],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[-8px] rounded-full bg-sanca-gold/20"
            />

            {/* Main button container */}
            <div className="relative">
              {/* 3D Heart Image */}
              <motion.div
                whileHover={{ scale: 1.12, rotate: [-2, 2, -2, 0] }}
                whileTap={{ scale: 0.92 }}
                className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full shadow-premium-2xl overflow-hidden border-2 border-sanca-gold/30 bg-gradient-to-br from-sanca-gold/10 to-white dark:from-sanca-gold/10 dark:to-[#0D3B22] flex items-center justify-center transition-all duration-300"
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sanca-gold/20 via-transparent to-sanca-emerald/10 pointer-events-none" />

                {/* 3D Heart Icon */}
                <motion.div
                  animate={{
                    y: [0, -3, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative"
                >
                  <img
                    src="/images/sanca/donate-heart-3d.png"
                    alt=""
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-lg"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Sparkle accents */}
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
                  className="absolute top-1 right-1 w-2 h-2 rounded-full bg-sanca-gold"
                />
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                  className="absolute bottom-2 left-1 w-1.5 h-1.5 rounded-full bg-sanca-emerald"
                />
              </motion.div>

              {/* Subtle floating particles around the heart */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-sanca-gold/40"
                  style={{
                    left: `${35 + Math.cos(i * 2.1) * 40}%`,
                    top: `${35 + Math.sin(i * 2.1) * 40}%`,
                  }}
                  animate={{
                    y: [-4, 4, -4],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 2.5 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.8,
                  }}
                />
              ))}
            </div>

            {/* Badge */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-sanca-gold rounded-full flex items-center justify-center shadow-md"
            >
              <Heart className="h-2.5 w-2.5 text-white fill-white" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════
         ONBOARDING DIALOG — Benefits & Sponsorship Tiers
         ═══════════════════════════════════════════════════════════ */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0a2a18] border-sanca-gold/20 rounded-2xl p-0"
          showCloseButton={false}
        >
          {/* ── Hero Header ── */}
          <div className="relative overflow-hidden bg-gradient-to-br from-sanca-green-dark via-sanca-green to-sanca-emerald p-6 sm:p-8">
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />
            {/* Glow orb */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-sanca-gold/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-start gap-4">
                {/* Heart icon */}
                <motion.div
                  animate={{ y: [0, -4, 0], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex-shrink-0"
                >
                  <img
                    src="/images/sanca/donate-heart-3d.png"
                    alt=""
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-lg"
                    aria-hidden="true"
                  />
                </motion.div>
                <div>
                  <DialogTitle className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                    Change a Life Today
                  </DialogTitle>
                  <DialogDescription className="text-white/80 mt-2 text-sm sm:text-base leading-relaxed max-w-md">
                    Your generosity transforms lives. Every rand funds recovery, restores families,
                    and rebuilds communities across South Africa.
                  </DialogDescription>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* ── Impact Quick Stats ── */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-sanca-gold-dark dark:text-sanca-gold mb-4">
                Your Impact at a Glance
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {impactStats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-sanca-cream/50 dark:bg-[#0D3B22] rounded-xl p-3 text-center border border-sanca-gold/10"
                    >
                      <Icon className="h-4 w-4 text-sanca-gold mx-auto mb-1.5" />
                      <p className="text-lg font-serif font-bold text-sanca-green-dark dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-muted-foreground dark:text-white/50 leading-tight mt-0.5">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ── Tab Switcher ── */}
            <div className="flex gap-1 p-1 bg-sanca-cream/50 dark:bg-[#0D3B22] rounded-xl border border-sanca-gold/10">
              {(['individual', 'corporate'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-white dark:bg-sanca-green-dark text-sanca-green-dark dark:text-white shadow-md'
                      : 'text-sanca-green-dark/50 dark:text-white/40 hover:text-sanca-green-dark dark:hover:text-white/70'
                  }`}
                >
                  {tab === 'individual' ? 'Individual Donor' : 'Corporate Sponsor'}
                </button>
              ))}
            </div>

            {/* ── Individual: Sponsorship Tiers ── */}
            <AnimatePresence mode="wait">
              {activeTab === 'individual' && (
                <motion.div
                  key="individual"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-sanca-gold-dark dark:text-sanca-gold">
                    Choose Your Impact Level
                  </h3>
                  <div className="grid gap-4">
                    {sponsorTiers.map((tier, i) => {
                      const Icon = tier.icon;
                      return (
                        <motion.div
                          key={tier.title}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className={`relative rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg group ${
                            tier.featured
                              ? 'border-sanca-gold/40 bg-gradient-to-br from-sanca-gold/[0.06] to-sanca-gold/[0.02] dark:from-sanca-gold/[0.08] dark:to-transparent'
                              : 'border-sanca-green/10 dark:border-sanca-gold/10 bg-white dark:bg-[#0D3B22] hover:border-sanca-gold/25'
                          }`}
                        >
                          {/* Featured badge */}
                          {tier.featured && (
                            <div className="absolute -top-3 right-4 px-3 py-0.5 bg-sanca-gold text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                              Most Popular
                            </div>
                          )}

                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div
                              className={`w-12 h-12 rounded-xl ${tier.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Icon className={`h-6 w-6 ${tier.iconColor}`} />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline gap-3 mb-1">
                                <h4 className="font-serif text-lg font-bold text-sanca-green-dark dark:text-white">
                                  {tier.title}
                                </h4>
                                <span className="text-sm font-semibold text-sanca-gold-dark dark:text-sanca-gold">
                                  {tier.range}
                                </span>
                              </div>

                              <ul className="space-y-1.5 mt-3">
                                {tier.benefits.map((benefit) => (
                                  <li key={benefit} className="flex items-start gap-2">
                                    <Check className="h-3.5 w-3.5 text-sanca-emerald mt-0.5 flex-shrink-0" />
                                    <span className="text-xs sm:text-sm text-sanca-green-dark/70 dark:text-white/60 leading-relaxed">
                                      {benefit}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <a
                      href="https://www.givengain.com/c/sancapretoria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-sanca-gold to-sanca-gold-dark hover:from-sanca-gold-dark hover:to-sanca-gold text-white font-bold text-base py-6 rounded-xl shadow-[0_8px_32px_rgba(197,150,58,0.3)] hover:shadow-[0_12px_40px_rgba(197,150,58,0.45)] transition-all duration-500 group/btn"
                      >
                        <span className="flex items-center justify-center gap-2.5">
                          <Heart className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                          <span>Start Donating Now</span>
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                        </span>
                      </Button>
                    </a>
                    <p className="text-center text-[10px] text-muted-foreground dark:text-white/30 mt-2">
                      All donations are tax-deductible under Section 18A • Secure payment via GivenGain
                    </p>
                  </div>
                </motion.div>
              )}

              {/* ── Corporate: Sponsorship Benefits ── */}
              {activeTab === 'corporate' && (
                <motion.div
                  key="corporate"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-sanca-gold-dark dark:text-sanca-gold">
                    Why Partner with SANCA Pretoria
                  </h3>

                  <div className="grid gap-3">
                    {corporateBenefits.map((benefit, i) => {
                      const Icon = benefit.icon;
                      return (
                        <motion.div
                          key={benefit.title}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#0D3B22] border border-sanca-green/[0.06] dark:border-sanca-gold/[0.06] hover:border-sanca-gold/25 transition-all duration-300 hover:shadow-md group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-sanca-gold/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-5 w-5 text-sanca-gold-dark dark:text-sanca-gold" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-sanca-green-dark dark:text-white">
                              {benefit.title}
                            </h4>
                            <p className="text-xs text-muted-foreground dark:text-white/50 mt-1 leading-relaxed">
                              {benefit.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Corporate sponsorship options */}
                  <div className="bg-gradient-to-br from-sanca-green-dark to-sanca-green rounded-2xl p-5 text-white relative overflow-hidden">
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full" />
                    <div className="absolute -top-8 -left-8 w-24 h-24 bg-sanca-gold/10 rounded-full" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 className="h-5 w-5 text-sanca-gold-light" />
                        <h4 className="font-serif text-lg font-bold">Corporate Partnership</h4>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        Become a SANCA Pretoria corporate partner and make a measurable difference
                        in the fight against substance abuse while earning valuable B-BBEE points
                        and tax benefits for your organisation.
                      </p>
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {[
                          { value: '18A', label: 'Tax Deduction' },
                          { value: 'B-BBEE', label: 'Scorecard Points' },
                          { value: 'CSR', label: 'Impact Reports' },
                        ].map((item) => (
                          <div key={item.label} className="text-center p-2 bg-white/10 rounded-lg">
                            <p className="text-sm font-bold text-sanca-gold-light">{item.value}</p>
                            <p className="text-[9px] text-white/60 mt-0.5">{item.label}</p>
                          </div>
                        ))}
                      </div>
                      <a href="tel:0125421121">
                        <Button
                          size="lg"
                          className="w-full bg-white text-sanca-green-dark font-bold text-base py-5 rounded-xl hover:bg-sanca-cream transition-all duration-300 shadow-md group/btn"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <span>Contact Our Partnerships Team</span>
                            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </a>
                    </div>
                  </div>

                  <p className="text-center text-[10px] text-muted-foreground dark:text-white/30">
                    Contact us at 012 542 1121 or partnerships@sancapta.org.za for custom partnership packages
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Trust Indicators ── */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-sanca-gold/10">
              {[
                { icon: Shield, label: 'DSD Registered' },
                { icon: GraduationCap, label: 'University of Pretoria Partner' },
                { icon: Building2, label: 'SANCA National Affiliate' },
              ].map(({ icon: IconComp, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-[10px] text-muted-foreground dark:text-white/30">
                  <IconComp className="h-3 w-3 text-sanca-gold/60" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
