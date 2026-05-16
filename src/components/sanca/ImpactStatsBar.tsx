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
      <span className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold ${color} drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]`}>
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
    // Warm amber → blue
    cardBg: 'linear-gradient(135deg, rgba(251,191,36,0.25) 0%, rgba(245,158,11,0.15) 40%, rgba(59,130,246,0.12) 100%)',
    borderGlow: 'rgba(251,191,36,0.3)',
    topBar: 'from-amber-400 via-orange-400 to-blue-400',
    iconBg: 'bg-amber-400/20',
    iconColor: 'text-amber-300',
    numberColor: 'text-amber-100',
    hoverShadow: '0 8px 40px rgba(251,191,36,0.2), 0 0 60px rgba(59,130,246,0.1)',
    orbColor: 'bg-amber-400',
    reflectionGradient: 'from-amber-300/10 via-orange-300/5 to-transparent',
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Patients/Year',
    sublabel: 'Across all facilities',
    // Warm rose → blue
    cardBg: 'linear-gradient(135deg, rgba(251,113,133,0.25) 0%, rgba(244,63,94,0.15) 40%, rgba(59,130,246,0.12) 100%)',
    borderGlow: 'rgba(251,113,133,0.3)',
    topBar: 'from-rose-400 via-pink-400 to-blue-400',
    iconBg: 'bg-rose-400/20',
    iconColor: 'text-rose-300',
    numberColor: 'text-rose-100',
    hoverShadow: '0 8px 40px rgba(251,113,133,0.2), 0 0 60px rgba(59,130,246,0.1)',
    orbColor: 'bg-rose-400',
    reflectionGradient: 'from-rose-300/10 via-pink-300/5 to-transparent',
  },
  {
    icon: Building2,
    value: 4,
    suffix: '',
    label: 'Facilities',
    sublabel: 'Pretoria region',
    // Warm teal → blue
    cardBg: 'linear-gradient(135deg, rgba(45,212,191,0.25) 0%, rgba(20,184,166,0.15) 40%, rgba(59,130,246,0.12) 100%)',
    borderGlow: 'rgba(45,212,191,0.3)',
    topBar: 'from-teal-400 via-emerald-400 to-blue-400',
    iconBg: 'bg-teal-400/20',
    iconColor: 'text-teal-300',
    numberColor: 'text-teal-100',
    hoverShadow: '0 8px 40px rgba(45,212,191,0.2), 0 0 60px rgba(59,130,246,0.1)',
    orbColor: 'bg-teal-400',
    reflectionGradient: 'from-teal-300/10 via-emerald-300/5 to-transparent',
  },
  {
    icon: Award,
    value: 100,
    suffix: '+',
    label: 'National Service Points',
    sublabel: 'SANCA network',
    // Warm gold → blue
    cardBg: 'linear-gradient(135deg, rgba(250,204,21,0.25) 0%, rgba(234,179,8,0.15) 40%, rgba(59,130,246,0.12) 100%)',
    borderGlow: 'rgba(250,204,21,0.3)',
    topBar: 'from-yellow-400 via-amber-400 to-blue-400',
    iconBg: 'bg-yellow-400/20',
    iconColor: 'text-yellow-300',
    numberColor: 'text-yellow-100',
    hoverShadow: '0 8px 40px rgba(250,204,21,0.2), 0 0 60px rgba(59,130,246,0.1)',
    orbColor: 'bg-yellow-400',
    reflectionGradient: 'from-yellow-300/10 via-amber-300/5 to-transparent',
  },
  {
    icon: Clock,
    value: 7,
    suffix: '',
    label: 'Days/Week Admissions',
    sublabel: 'Always open',
    // Warm coral → blue
    cardBg: 'linear-gradient(135deg, rgba(251,146,60,0.25) 0%, rgba(249,115,22,0.15) 40%, rgba(59,130,246,0.12) 100%)',
    borderGlow: 'rgba(251,146,60,0.3)',
    topBar: 'from-orange-400 via-red-400 to-blue-400',
    iconBg: 'bg-orange-400/20',
    iconColor: 'text-orange-300',
    numberColor: 'text-orange-100',
    hoverShadow: '0 8px 40px rgba(251,146,60,0.2), 0 0 60px rgba(59,130,246,0.1)',
    orbColor: 'bg-orange-400',
    reflectionGradient: 'from-orange-300/10 via-red-300/5 to-transparent',
  },
  {
    icon: Heart,
    value: 10,
    suffix: 'M+',
    label: 'Lives Touched',
    sublabel: 'Since 1956',
    // Warm pink/fuchsia → blue
    cardBg: 'linear-gradient(135deg, rgba(232,121,249,0.25) 0%, rgba(217,70,239,0.15) 40%, rgba(59,130,246,0.12) 100%)',
    borderGlow: 'rgba(232,121,249,0.3)',
    topBar: 'from-fuchsia-400 via-pink-400 to-blue-400',
    iconBg: 'bg-fuchsia-400/20',
    iconColor: 'text-fuchsia-300',
    numberColor: 'text-fuchsia-100',
    hoverShadow: '0 8px 40px rgba(232,121,249,0.2), 0 0 60px rgba(59,130,246,0.1)',
    orbColor: 'bg-fuchsia-400',
    reflectionGradient: 'from-fuchsia-300/10 via-pink-300/5 to-transparent',
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
    <section ref={sectionRef} className="relative py-14 sm:py-20 overflow-hidden">
      {/* Deep blue-to-purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1445] via-[#141e5e] to-[#1a0a3e]" />

      {/* Warm radial glow overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-amber-500/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-rose-500/[0.06] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.05] rounded-full blur-[150px]" />
      </div>

      {/* Animated mesh pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 40%, rgba(251,191,36,0.2) 0%, transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(59,130,246,0.2) 0%, transparent 40%),
            radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 22px 22px',
        }}
      />

      {/* Top accent line — warm to blue sweep */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-rose-400 to-blue-500" />

      {/* Parallax background orbs */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute -top-24 right-[8%] w-72 h-72 bg-amber-400/[0.08] rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-[12%] w-56 h-56 bg-blue-400/[0.08] rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-rose-400/[0.05] rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/[0.12]"
            style={{
              background: 'linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(59,130,246,0.1) 100%)',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
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
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.06 }}
                className="group"
              >
                <div
                  className="relative rounded-2xl p-4 sm:p-5 text-center overflow-hidden transition-all duration-500 cursor-default"
                  style={{
                    background: stat.cardBg,
                    backdropFilter: 'blur(24px) saturate(1.5)',
                    WebkitBackdropFilter: 'blur(24px) saturate(1.5)',
                    border: `1px solid ${stat.borderGlow}`,
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = stat.hoverShadow + ', inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.borderColor = stat.borderGlow.replace('0.3', '0.6');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = stat.borderGlow;
                  }}
                >
                  {/* Top gradient accent bar — expands on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${stat.topBar} group-hover:h-2 transition-all duration-500 rounded-t-2xl`} />

                  {/* Glassmorphism top reflection */}
                  <div className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b ${stat.reflectionGradient} pointer-events-none rounded-t-2xl`} />

                  {/* Shimmer sweep on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out" />
                  </div>

                  {/* Hover outer glow */}
                  <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at center, ${stat.borderGlow.replace('0.3', '0.08')}, transparent 70%)`,
                    }}
                  />

                  {/* Icon with animated glow ring */}
                  <div className="relative mx-auto mb-3 z-10">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${stat.iconBg} backdrop-blur-md flex items-center justify-center group-hover:scale-115 transition-all duration-300 relative border border-white/10`}
                      style={{
                        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1)',
                      }}
                    >
                      {/* Animated glow pulse behind icon */}
                      <div className={`absolute inset-[-8px] rounded-xl ${stat.orbColor} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`} />
                      <Icon className={`h-5 w-5 sm:h-5.5 sm:w-5.5 ${stat.iconColor} relative z-10 drop-shadow-[0_0_6px_currentColor]`} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="relative z-10">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} color={stat.numberColor} />
                  </div>

                  {/* Label */}
                  <p className="text-xs sm:text-sm font-semibold text-white/85 mt-1.5 relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    {stat.label}
                  </p>

                  {/* Sublabel */}
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-medium text-blue-300/50 mt-0.5 relative z-10">
                    {stat.sublabel}
                  </p>

                  {/* Bottom glassmorphism reflection line */}
                  <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                  {/* Bottom accent glow */}
                  <div className="absolute bottom-0 left-[20%] right-[20%] h-[2px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                    style={{
                      background: stat.borderGlow,
                      filter: 'blur(2px)',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

      {/* Bottom warm glow fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
    </section>
  );
}
