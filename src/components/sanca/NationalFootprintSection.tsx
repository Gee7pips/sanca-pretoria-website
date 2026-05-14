'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Building2,
  Users,
  Globe,
  TreePine,
  GraduationCap,
  BedDouble,
  Stethoscope,
  Tent,
  Network,
  ChevronRight,
  Landmark,
  Truck,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type CenterType = 'Inpatient' | 'Outpatient' | 'In- & Out-patient';

interface TreatmentCenter {
  province: string;
  location: string;
  name: string;
  type: CenterType;
  capacity: string;
  ownership: string;
}

const centers: TreatmentCenter[] = [
  { province: 'Gauteng', location: 'Pretoria', name: 'Castle Carey Clinic', type: 'Inpatient', capacity: '50+', ownership: 'SANCA' },
  { province: 'Gauteng', location: 'Boksburg', name: 'SANCA Horizon', type: 'Inpatient', capacity: '40+', ownership: 'SANCA' },
  { province: 'Gauteng', location: 'Soweto', name: 'SANCA Soweto', type: 'Outpatient', capacity: '150+', ownership: 'SANCA' },
  { province: 'Gauteng', location: 'Vanderbijlpark', name: 'SANCA Vaal', type: 'Outpatient', capacity: '100+', ownership: 'SANCA' },
  { province: 'Gauteng', location: 'Cullinan', name: 'Dr. Fabian Ribeiro', type: 'Inpatient', capacity: '200+', ownership: 'State' },
  { province: 'KwaZulu-Natal', location: 'Durban', name: 'SANCA Lulama', type: 'Inpatient', capacity: '42', ownership: 'SANCA' },
  { province: 'KwaZulu-Natal', location: 'Durban', name: 'SANCA Durban', type: 'Outpatient', capacity: '200+', ownership: 'SANCA' },
  { province: 'KwaZulu-Natal', location: 'Newcastle', name: 'Madadeni Rehab', type: 'Inpatient', capacity: '100', ownership: 'State' },
  { province: 'KwaZulu-Natal', location: 'Empangeni', name: 'SANCA Zululand', type: 'Outpatient', capacity: '60+', ownership: 'SANCA' },
  { province: 'Free State', location: 'Bloemfontein', name: 'SANCA Aurora', type: 'In- & Out-patient', capacity: '50', ownership: 'SANCA' },
  { province: 'Free State', location: 'Sasolburg', name: 'SANRA', type: 'Outpatient', capacity: '60', ownership: 'SANCA' },
  { province: 'Limpopo', location: 'Polokwane', name: 'SANCA Limpopo', type: 'Outpatient', capacity: '100', ownership: 'SANCA' },
  { province: 'North West', location: 'Klerksdorp', name: 'Sanpark', type: 'Inpatient', capacity: '34', ownership: 'SANCA' },
  { province: 'Mpumalanga', location: 'Nelspruit', name: 'SANCA Lowveld', type: 'Outpatient', capacity: '56', ownership: 'SANCA' },
  { province: 'Mpumalanga', location: 'Witbank', name: 'SANCA Witbank', type: 'Outpatient', capacity: '120', ownership: 'SANCA' },
  { province: 'Eastern Cape', location: 'East London', name: 'SANCA CEC', type: 'In- & Out-patient', capacity: '40+', ownership: 'SANCA' },
  { province: 'Western Cape', location: 'Kraaifontein', name: 'De Novo', type: 'Inpatient', capacity: '90', ownership: 'State' },
];

const provinces = [
  'All',
  'Gauteng',
  'KwaZulu-Natal',
  'Free State',
  'Limpopo',
  'North West',
  'Mpumalanga',
  'Eastern Cape',
  'Western Cape',
] as const;

type ProvinceFilter = (typeof provinces)[number];

const stats = [
  { icon: MapPin, value: '100+', label: 'Service Points', color: 'from-sanca-green to-sanca-green-light' },
  { icon: Building2, value: '30+', label: 'Treatment Centres', color: 'from-sanca-gold to-sanca-gold-light' },
  { icon: Users, value: '10M+', label: 'Lives Touched', color: 'from-sanca-emerald to-sanca-green-light' },
  { icon: Globe, value: '9', label: 'Provinces', color: 'from-sanca-green-dark to-sanca-green' },
];

const serviceTiers = [
  {
    icon: Building2,
    title: 'Treatment Centres',
    subtitle: 'Fully-fledged facilities',
    desc: 'Offering both inpatient (residential) and outpatient medical services with comprehensive clinical teams, detoxification, and structured therapeutic programmes.',
    color: 'sanca-green',
    accent: 'bg-sanca-green',
    badge: 'Tier 1',
  },
  {
    icon: Stethoscope,
    title: 'Sub-Clinics',
    subtitle: 'Community-based offices',
    desc: 'Permanent community-based offices providing counselling services, early intervention programmes, and ongoing support — closer to where people live and work.',
    color: 'sanca-gold',
    accent: 'bg-sanca-gold',
    badge: 'Tier 2',
  },
  {
    icon: Truck,
    title: 'Satellite Offices',
    subtitle: 'Mobile & rural outreach',
    desc: 'Temporary or mobile service points reaching remote rural areas and high-density townships, ensuring no community is beyond the reach of help.',
    color: 'sanca-emerald',
    accent: 'bg-sanca-emerald',
    badge: 'Tier 3',
  },
];

const hubSpokes = [
  { province: 'Western Cape', note: '"Tik" (methamphetamine) focus', icon: '🪴' },
  { province: 'Gauteng', note: '"Nyaope" & "Whoonga" focus', icon: '🏙️' },
  { province: 'KwaZulu-Natal', note: 'Alcohol & cannabis interventions', icon: '🌊' },
  { province: 'Free State', note: 'Rural & mining community outreach', icon: '🌾' },
  { province: 'Eastern Cape', note: 'Youth & community-based care', icon: '🦁' },
  { province: 'Limpopo', note: 'Cross-border trafficking awareness', icon: '🌳' },
  { province: 'Mpumalanga', note: 'Mining belt substance abuse', icon: '⛏️' },
  { province: 'North West', note: 'Rural & farming community support', icon: '🌻' },
  { province: 'Northern Cape', note: 'Remote & desert community outreach', icon: '🏜️' },
];

/* ------------------------------------------------------------------ */
/*  HELPER: type icon & colour                                        */
/* ------------------------------------------------------------------ */

function typeIcon(type: CenterType) {
  if (type === 'Inpatient') return BedDouble;
  if (type === 'Outpatient') return Stethoscope;
  return Building2; // In- & Out-patient
}

function typeBadgeColor(type: CenterType) {
  if (type === 'Inpatient') return 'bg-sanca-green/10 text-sanca-green border-sanca-green/20';
  if (type === 'Outpatient') return 'bg-sanca-gold/10 text-sanca-gold-dark border-sanca-gold/20';
  return 'bg-sanca-emerald/10 text-sanca-emerald border-sanca-emerald/20';
}

function ownershipColor(ownership: string) {
  return ownership === 'State'
    ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/30'
    : 'bg-sanca-cream text-sanca-green-dark border-sanca-sage dark:bg-sanca-green/20 dark:text-sanca-gold-light dark:border-sanca-green/30';
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function NationalFootprintSection() {
  const [activeProvince, setActiveProvince] = useState<ProvinceFilter>('All');

  const filteredCenters =
    activeProvince === 'All'
      ? centers
      : centers.filter((c) => c.province === activeProvince);

  return (
    <section
      id="national-footprint"
      className="py-20 sm:py-28 bg-white dark:bg-[#0a2a18] relative overflow-hidden"
    >
      {/* Subtle pattern background */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ============= SECTION HEADER ============= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 dark:bg-sanca-gold/15 text-sanca-green dark:text-sanca-gold text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <TreePine className="h-4 w-4" />
            Nationwide Presence
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4">
            SANCA&apos;s National{' '}
            <span className="text-gradient-gold">Footprint</span>
          </h2>

          <p className="text-muted-foreground dark:text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            For nearly seven decades, SANCA has been the beating heart of substance abuse
            treatment in South Africa — with over 100 service points across all nine provinces,
            bringing hope and healing to communities from urban centres to the most remote rural areas.
          </p>
        </motion.div>

        {/* ============= IMPACT STAT CARDS ============= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-5 sm:p-6 text-center shadow-premium-md hover-lift border-0 dark:bg-[#0D3B22] relative overflow-hidden group">
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />

                <div className={`mx-auto mb-3 w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-premium-sm group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>

                <p className="font-serif text-3xl sm:text-4xl font-bold text-sanca-green-dark dark:text-white stat-counter">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground dark:text-white/60 mt-1 font-medium">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ============= PROVINCE FILTER ============= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-sanca-green" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark dark:text-white">
              Filter by Province
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {provinces.map((province) => {
              const isActive = activeProvince === province;
              const count =
                province === 'All'
                  ? centers.length
                  : centers.filter((c) => c.province === province).length;

              return (
                <Button
                  key={province}
                  variant={isActive ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveProvince(province)}
                  className={`
                    rounded-full text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? 'bg-sanca-green hover:bg-sanca-green-light text-white shadow-gold border-sanca-green'
                        : 'border-sanca-green/30 text-sanca-green-dark dark:text-white/80 hover:bg-sanca-green/10 dark:hover:bg-sanca-green/20 hover:border-sanca-green/50'
                    }
                  `}
                >
                  {province}
                  <span
                    className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-sanca-cream dark:bg-sanca-green/30 text-sanca-green-dark dark:text-white/60'
                    }`}
                  >
                    {count}
                  </span>
                </Button>
              );
            })}
          </div>
        </motion.div>

        {/* ============= CENTER CARDS GRID ============= */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProvince}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredCenters.map((center, i) => {
                const Icon = typeIcon(center.type);
                return (
                  <motion.div
                    key={`${center.name}-${center.location}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Card className="p-5 shadow-premium-md hover-lift border-0 dark:bg-[#0D3B22] h-full flex flex-col card-spotlight relative overflow-hidden">
                      {/* Province accent stripe */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sanca-green via-sanca-gold to-sanca-emerald rounded-l-xl" />

                      <div className="pl-3 flex-1 flex flex-col">
                        {/* Header row */}
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-sanca-green/10 dark:bg-sanca-green/20 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-4.5 w-4.5 text-sanca-green" />
                            </div>
                            <div>
                              <h4 className="font-serif font-bold text-sm sm:text-base text-sanca-green-dark dark:text-white leading-tight">
                                {center.name}
                              </h4>
                              <div className="flex items-center gap-1 mt-0.5">
                                <MapPin className="h-3 w-3 text-sanca-gold" />
                                <span className="text-xs text-muted-foreground dark:text-white/60">
                                  {center.location}, {center.province}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${typeBadgeColor(center.type)}`}
                          >
                            <Icon className="h-3 w-3" />
                            {center.type}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${ownershipColor(center.ownership)}`}
                          >
                            <Landmark className="h-3 w-3" />
                            {center.ownership}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border bg-sanca-cream text-sanca-green-dark border-sanca-sage dark:bg-sanca-green/20 dark:text-sanca-gold-light dark:border-sanca-green/30">
                            <Users className="h-3 w-3" />
                            Capacity: {center.capacity}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredCenters.length === 0 && (
            <div className="text-center py-12 text-muted-foreground dark:text-white/50">
              No centres found for this province.
            </div>
          )}
        </div>

        {/* ============= THREE-TIER SERVICE MODEL ============= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-gold/10 dark:bg-sanca-gold/15 text-sanca-gold-dark dark:text-sanca-gold text-sm font-medium mb-4 border border-sanca-gold/20">
              <GraduationCap className="h-4 w-4" />
              Service Delivery Model
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-3">
              Three-Tier <span className="text-gradient-gold">Service Model</span>
            </h3>
            <p className="text-muted-foreground dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              SANCA&apos;s service delivery is structured across three tiers — ensuring that help reaches every corner of South Africa, from cities to the most remote communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceTiers.map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="p-6 shadow-premium-lg hover-lift border-0 dark:bg-[#0D3B22] h-full flex flex-col relative overflow-hidden group">
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${tier.accent}`} />

                  {/* Badge */}
                  <span className={`inline-flex self-start items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 ${tier.accent} text-white`}>
                    {tier.badge}
                  </span>

                  <div className={`w-14 h-14 rounded-2xl ${tier.accent} flex items-center justify-center shadow-premium-sm mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <tier.icon className="h-7 w-7 text-white" />
                  </div>

                  <h4 className="font-serif text-xl font-bold text-sanca-green-dark dark:text-white mb-1">
                    {tier.title}
                  </h4>
                  <p className="text-sm font-medium text-sanca-gold dark:text-sanca-gold-light mb-3">
                    {tier.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-white/70 leading-relaxed flex-1">
                    {tier.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============= HUB-AND-SPOKE MODEL ============= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-emerald/10 dark:bg-sanca-emerald/15 text-sanca-emerald text-sm font-medium mb-4 border border-sanca-emerald/20">
              <Network className="h-4 w-4" />
              Organisational Structure
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-3">
              Hub-and-Spoke <span className="text-gradient-gold">Model</span>
            </h3>
            <p className="text-muted-foreground dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              The National Office serves as the intellectual and administrative custodian of the SANCA brand, while regional affiliates are independent legal entities that adapt interventions to local realities.
            </p>
          </div>

          {/* Hub-and-Spoke Visual */}
          <Card className="p-6 sm:p-10 shadow-premium-lg border-0 dark:bg-[#0D3B22] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

            <div className="flex flex-col items-center">
              {/* National Office Hub */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="relative mb-8"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-sanca-green to-sanca-green-dark flex flex-col items-center justify-center shadow-green-glow border-4 border-sanca-gold/30 relative z-10">
                  <Landmark className="h-8 w-8 sm:h-10 sm:w-10 text-sanca-gold-light mb-1" />
                  <span className="text-white text-xs sm:text-sm font-serif font-bold text-center px-2 leading-tight">
                    National Office
                  </span>
                  <span className="text-sanca-gold-light text-[10px] sm:text-xs mt-0.5">
                    Custodian
                  </span>
                </div>
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-sanca-green/20 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute -inset-3 rounded-full border border-sanca-gold/10 animate-pulse" />
              </motion.div>

              {/* Connecting Lines */}
              <div className="relative w-full max-w-4xl">
                {/* Decorative radial lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 800 200" fill="none">
                  <line x1="400" y1="0" x2="100" y2="180" stroke="#1B5E3B" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                  <line x1="400" y1="0" x2="230" y2="180" stroke="#1B5E3B" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                  <line x1="400" y1="0" x2="360" y2="180" stroke="#1B5E3B" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                  <line x1="400" y1="0" x2="440" y2="180" stroke="#1B5E3B" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                  <line x1="400" y1="0" x2="570" y2="180" stroke="#1B5E3B" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                  <line x1="400" y1="0" x2="700" y2="180" stroke="#1B5E3B" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                </svg>

                {/* Province spokes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 mt-4">
                  {hubSpokes.map((spoke, i) => (
                    <motion.div
                      key={spoke.province}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="group"
                    >
                      <div className="p-3 sm:p-4 rounded-xl bg-sanca-cream/60 dark:bg-sanca-green/15 border border-sanca-sage dark:border-sanca-green/20 hover:border-sanca-green/40 dark:hover:border-sanca-gold/30 transition-all duration-300 hover:shadow-premium-md cursor-default">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-lg">{spoke.icon}</span>
                          <h5 className="font-serif font-bold text-sm text-sanca-green-dark dark:text-white">
                            {spoke.province}
                          </h5>
                        </div>
                        <div className="flex items-center gap-1">
                          <ChevronRight className="h-3 w-3 text-sanca-gold flex-shrink-0" />
                          <span className="text-[11px] sm:text-xs text-muted-foreground dark:text-white/60 leading-snug">
                            {spoke.note}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key insight */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 max-w-2xl mx-auto"
              >
                <div className="p-4 rounded-xl bg-sanca-green/5 dark:bg-sanca-green/10 border border-sanca-green/15 dark:border-sanca-green/20">
                  <p className="text-sm text-center text-sanca-green-dark dark:text-white/80 leading-relaxed">
                    <span className="font-serif font-bold text-sanca-gold">Regional Adaptability:</span>{' '}
                    Each affiliate is an independent legal entity that adapts interventions to local realities — for example, addressing &ldquo;tik&rdquo; (methamphetamine) in the Cape and &ldquo;nyaope&rdquo; in the northern provinces. This decentralised model ensures that SANCA&apos;s response is always locally relevant, culturally sensitive, and community-owned.
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
