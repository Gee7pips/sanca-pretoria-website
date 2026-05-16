'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Heart, Clock, Users, Building2, Award } from 'lucide-react';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <span className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-sanca-green-dark dark:text-white stat-premium">
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
    color: 'from-sanca-green to-sanca-green-dark',
    iconColor: 'text-sanca-green dark:text-sanca-gold',
    iconBg: 'bg-sanca-green/10 dark:bg-sanca-gold/10',
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Patients/Year',
    sublabel: 'Across all facilities',
    color: 'from-sanca-gold to-sanca-gold-dark',
    iconColor: 'text-sanca-gold-dark dark:text-sanca-gold',
    iconBg: 'bg-sanca-gold/10 dark:bg-sanca-gold/10',
  },
  {
    icon: Building2,
    value: 4,
    suffix: '',
    label: 'Facilities',
    sublabel: 'Pretoria region',
    color: 'from-sanca-emerald to-sanca-green',
    iconColor: 'text-sanca-emerald dark:text-sanca-emerald',
    iconBg: 'bg-sanca-emerald/10',
  },
  {
    icon: Award,
    value: 100,
    suffix: '+',
    label: 'National Service Points',
    sublabel: 'SANCA network',
    color: 'from-sanca-green-dark to-sanca-green',
    iconColor: 'text-sanca-green-dark dark:text-sanca-gold-light',
    iconBg: 'bg-sanca-green/10 dark:bg-sanca-gold/10',
  },
  {
    icon: Clock,
    value: 7,
    suffix: '',
    label: 'Days/Week Admissions',
    sublabel: 'Always open',
    color: 'from-sanca-gold-dark to-sanca-gold',
    iconColor: 'text-sanca-gold-dark dark:text-sanca-gold',
    iconBg: 'bg-sanca-gold/10',
  },
  {
    icon: Heart,
    value: 10,
    suffix: 'M+',
    label: 'Lives Touched',
    sublabel: 'Since 1956',
    color: 'from-sanca-emerald to-sanca-green',
    iconColor: 'text-sanca-emerald dark:text-sanca-emerald',
    iconBg: 'bg-sanca-emerald/10 dark:bg-sanca-emerald/10',
  },
];

export default function ImpactStatsBar() {
  return (
    <section className="relative py-10 sm:py-14 bg-white dark:bg-[#0a2a18] overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-sanca-cream/40 via-transparent to-sanca-cream/20 dark:from-sanca-green-dark/20 dark:via-transparent dark:to-sanca-green-dark/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sanca-green/5 dark:bg-sanca-gold/10 border border-sanca-gold/15">
            <div className="w-1.5 h-1.5 rounded-full bg-sanca-green animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-sanca-green-dark/60 dark:text-sanca-gold/70">
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
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white dark:bg-[#0D3B22] rounded-2xl p-4 sm:p-5 text-center border border-sanca-green/[0.06] dark:border-sanca-gold/[0.06] shadow-premium-sm hover:shadow-premium-md transition-all duration-300 overflow-hidden">
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.color}`} />

                  {/* Icon */}
                  <div className={`mx-auto mb-2.5 w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${stat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.iconColor}`} />
                  </div>

                  {/* Value */}
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />

                  {/* Label */}
                  <p className="text-xs sm:text-sm font-semibold text-foreground/70 dark:text-white/60 mt-1.5">
                    {stat.label}
                  </p>

                  {/* Sublabel */}
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-medium text-sanca-gold/50 dark:text-sanca-gold/40 mt-0.5">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
