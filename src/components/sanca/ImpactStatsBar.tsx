'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Shield, Heart, Clock, Users, Building2, Award } from 'lucide-react';

function AnimatedNumber({ value, suffix = '', color }: { value: number; suffix?: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2400;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <span className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold stat-premium ${color}`}>
        {count.toLocaleString('en-ZA')}{suffix}
      </span>
    </div>
  );
}

const stats = [
  {
    icon: Shield,
    value: 68,
    suffix: '+',
    label: 'Years of Service',
    sublabel: 'Est. 1957',
    // Warm amber-orange with blue accent
    cardGradient: 'from-amber-500/20 via-orange-400/15 to-blue-500/10',
    borderGradient: 'from-amber-400/40 via-orange-400/30 to-blue-400/30',
    topBar: 'from-amber-400 via-orange-400 to-blue-400',
    iconBg: 'bg-amber-500/20',
    iconColor: 'text-amber-300',
    numberColor: 'text-white',
    glowColor: 'shadow-amber-500/20',
    hoverGlow: 'group-hover:shadow-amber-500/30',
    orbColor: 'bg-amber-400',
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Patients/Year',
    sublabel: 'Across all facilities',
    // Warm rose-gold with blue
    cardGradient: 'from-rose-400/20 via-pink-400/15 to-blue-500/10',
    borderGradient: 'from-rose-400/40 via-pink-400/30 to-blue-400/30',
    topBar: 'from-rose-400 via-pink-400 to-blue-400',
    iconBg: 'bg-rose-400/20',
    iconColor: 'text-rose-300',
    numberColor: 'text-white',
    glowColor: 'shadow-rose-400/20',
    hoverGlow: 'group-hover:shadow-rose-400/30',
    orbColor: 'bg-rose-400',
  },
  {
    icon: Building2,
    value: 4,
    suffix: '',
    label: 'Facilities',
    sublabel: 'Pretoria region',
    // Warm teal with blue
    cardGradient: 'from-teal-400/20 via-emerald-400/15 to-blue-500/10',
    borderGradient: 'from-teal-400/40 via-emerald-400/30 to-blue-400/30',
    topBar: 'from-teal-400 via-emerald-400 to-blue-400',
    iconBg: 'bg-teal-400/20',
    iconColor: 'text-teal-300',
    numberColor: 'text-white',
    glowColor: 'shadow-teal-400/20',
    hoverGlow: 'group-hover:shadow-teal-400/30',
    orbColor: 'bg-teal-400',
  },
  {
    icon: Award,
    value: 100,
    suffix: '+',
    label: 'National Service Points',
    sublabel: 'SANCA network',
    // Warm gold with blue
    cardGradient: 'from-yellow-400/20 via-amber-400/15 to-blue-500/10',
    borderGradient: 'from-yellow-400/40 via-amber-400/30 to-blue-400/30',
    topBar: 'from-yellow-400 via-amber-400 to-blue-400',
    iconBg: 'bg-yellow-400/20',
    iconColor: 'text-yellow-300',
    numberColor: 'text-white',
    glowColor: 'shadow-yellow-400/20',
    hoverGlow: 'group-hover:shadow-yellow-400/30',
    orbColor: 'bg-yellow-400',
  },
  {
    icon: Clock,
    value: 7,
    suffix: '',
    label: 'Days/Week Admissions',
    sublabel: 'Always open',
    // Warm coral with blue
    cardGradient: 'from-orange-400/20 via-red-400/15 to-blue-500/10',
    borderGradient: 'from-orange-400/40 via-red-400/30 to-blue-400/30',
    topBar: 'from-orange-400 via-red-400 to-blue-400',
    iconBg: 'bg-orange-400/20',
    iconColor: 'text-orange-300',
    numberColor: 'text-white',
    glowColor: 'shadow-orange-400/20',
    hoverGlow: 'group-hover:shadow-orange-400/30',
    orbColor: 'bg-orange-400',
  },
  {
    icon: Heart,
    value: 10,
    suffix: 'M+',
    label: 'Lives Touched',
    sublabel: 'Since 1956',
    // Warm pink with blue
    cardGradient: 'from-pink-400/20 via-fuchsia-400/15 to-blue-500/10',
    borderGradient: 'from-pink-400/40 via-fuchsia-400/30 to-blue-400/30',
    topBar: 'from-pink-400 via-fuchsia-400 to-blue-400',
    iconBg: 'bg-pink-400/20',
    iconColor: 'text-pink-300',
    numberColor: 'text-white',
    glowColor: 'shadow-pink-400/20',
    hoverGlow: 'group-hover:shadow-pink-400/30',
    orbColor: 'bg-pink-400',
  },
];

export default function ImpactStatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 overflow-hidden">
      {/* Rich warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0f3460]" />

      {/* Animated mesh background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,180,100,0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(100,150,255,0.15) 0%, transparent 50%),
            radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 24px 24px',
        }}
      />

      {/* Top accent line — warm to blue gradient */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-rose-400 to-blue-400" />

      {/* Parallax background orbs */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-32 right-[10%] w-80 h-80 bg-amber-500/[0.07] rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-[15%] w-64 h-64 bg-blue-500/[0.07] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-400/[0.04] rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section label with live indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12]">
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-amber-400"
            />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-white/70">
              Trusted Since 1957 — SANCA Pretoria by the Numbers
            </span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, scale: 1.04 }}
                className="group"
              >
                <div className={`relative rounded-2xl p-4 sm:p-5 text-center overflow-hidden transition-all duration-500 ${stat.hoverGlow}`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Glassmorphism inner gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.cardGradient} opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />

                  {/* Top gradient accent bar — thicker on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.topBar} group-hover:h-1.5 transition-all duration-500`} />

                  {/* Hover glow ring */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{
                      boxShadow: `inset 0 0 30px rgba(255, 255, 255, 0.05), 0 0 40px rgba(100, 150, 255, 0.1)`,
                    }}
                  />

                  {/* Shimmer sweep on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Icon with glow */}
                  <div className="relative mx-auto mb-3 z-10">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${stat.iconBg} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative border border-white/10`}>
                      {/* Animated glow pulse on hover */}
                      <div className={`absolute inset-[-6px] rounded-xl ${stat.orbColor} opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500`} />
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.iconColor} relative z-10`} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="relative z-10">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} color={stat.numberColor} />
                  </div>

                  {/* Label */}
                  <p className="text-xs sm:text-sm font-semibold text-white/80 mt-1.5 relative z-10">
                    {stat.label}
                  </p>

                  {/* Sublabel */}
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-medium text-blue-300/60 mt-0.5 relative z-10">
                    {stat.sublabel}
                  </p>

                  {/* Bottom glassmorphism reflection line */}
                  <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
    </section>
  );
}
