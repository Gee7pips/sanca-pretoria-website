'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Heart, Shield, Compass, Users, Phone } from 'lucide-react';

interface ChapterDividerProps {
  chapter: number;
  title: string;
  subtitle: string;
  quote?: string;
  icon?: React.ElementType;
}

const chapterColors = [
  { gradient: 'from-sanca-green-dark via-sanca-green to-sanca-emerald', accent: 'text-sanca-gold-light', dot: 'bg-sanca-gold', glow: 'shadow-sanca-gold/30', orb1: 'bg-sanca-gold/[0.08]', orb2: 'bg-white/[0.05]' },
  { gradient: 'from-sanca-green via-sanca-emerald to-sanca-green-dark', accent: 'text-sanca-gold', dot: 'bg-sanca-gold-light', glow: 'shadow-sanca-gold/30', orb1: 'bg-sanca-gold/[0.08]', orb2: 'bg-sanca-emerald/[0.06]' },
  { gradient: 'from-sanca-emerald via-sanca-gold-dark to-sanca-green', accent: 'text-sanca-emerald', dot: 'bg-sanca-emerald', glow: 'shadow-sanca-emerald/30', orb1: 'bg-sanca-emerald/[0.08]', orb2: 'bg-sanca-gold/[0.06]' },
  { gradient: 'from-sanca-gold-dark via-sanca-green to-sanca-emerald', accent: 'text-sanca-gold-light', dot: 'bg-sanca-gold', glow: 'shadow-sanca-gold/30', orb1: 'bg-sanca-gold/[0.08]', orb2: 'bg-sanca-green/[0.06]' },
  { gradient: 'from-sanca-green via-sanca-green-dark to-sanca-emerald', accent: 'text-white', dot: 'bg-sanca-gold', glow: 'shadow-sanca-gold/30', orb1: 'bg-sanca-gold/[0.08]', orb2: 'bg-white/[0.04]' },
  { gradient: 'from-sanca-green-dark via-sanca-emerald to-sanca-green', accent: 'text-sanca-gold-light', dot: 'bg-sanca-emerald', glow: 'shadow-sanca-emerald/30', orb1: 'bg-sanca-emerald/[0.08]', orb2: 'bg-sanca-gold/[0.06]' },
];

const chapterIcons = [Heart, Shield, Compass, Users, Sparkles, Phone];

export default function ChapterDivider({ chapter, title, subtitle, quote, icon: IconProp }: ChapterDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const textY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  const color = chapterColors[(chapter - 1) % chapterColors.length];
  const Icon = IconProp || chapterIcons[(chapter - 1) % chapterIcons.length];

  return (
    <div ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      {/* Full-width gradient background — 3-stop for depth */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient}`} />

      {/* Diagonal light streak */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.03) 100%)',
        }}
      />

      {/* Animated mesh pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 24px 24px',
        }}
      />

      {/* Top wave divider — taller, more organic */}
      <svg
        className="absolute top-0 left-0 right-0 w-full -translate-y-[99%] z-10"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,80 C240,20 480,70 720,30 C960,-10 1200,50 1440,25 L1440,0 L0,0 Z"
          className="fill-white/80 dark:fill-[#0a2a18]/80"
        />
      </svg>

      {/* Bottom wave divider */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full translate-y-[99%] z-10"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,0 C240,60 480,10 720,50 C960,90 1200,30 1440,55 L1440,80 L0,80 Z"
          className="fill-white/80 dark:fill-[#0a2a18]/80"
        />
      </svg>

      {/* Floating orbs with parallax — larger, more dramatic */}
      <motion.div
        style={{ y: orbY1 }}
        className={`absolute top-[15%] -left-32 w-[400px] h-[400px] ${color.orb1} rounded-full blur-[100px]`}
      />
      <motion.div
        style={{ y: orbY2 }}
        className={`absolute bottom-[15%] -right-32 w-[500px] h-[500px] ${color.orb2} rounded-full blur-[120px]`}
      />
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.025] rounded-full blur-[140px]"
      />

      {/* Animated particles — more of them, larger */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-sanca-gold/30 w-1.5 h-1.5' : 'bg-white/15 w-1 h-1'}`}
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + (i % 5) * 17}%`,
            }}
            animate={{
              y: [-16, 16, -16],
              opacity: [0.1, 0.5, 0.1],
              scale: [0.6, 1.4, 0.6],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* ── CONTENT ── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Chapter number with pulsing rings — larger, more dramatic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-5 sm:gap-8 mb-10"
        >
          {/* Left decorative line — longer */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px w-16 sm:w-28 lg:w-36 bg-gradient-to-r from-transparent to-white/25 origin-right"
          />

          {/* Chapter badge — larger with more rings */}
          <div className="relative">
            {/* Outermost pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.04, 0.12] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[-12px] rounded-full border border-sanca-gold/15"
            />
            {/* Second pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.06, 0.18] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              className="absolute inset-[-6px] rounded-full border border-sanca-gold/25"
            />
            {/* Third ring (static) */}
            <div className="w-18 h-18 sm:w-[84px] sm:h-[84px] lg:w-24 lg:h-24 rounded-full border border-white/15 flex items-center justify-center bg-white/[0.06] backdrop-blur-sm">
              {/* Inner ring */}
              <div className="w-13 h-13 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-full border border-sanca-gold/35 bg-white/[0.08] backdrop-blur-sm flex items-center justify-center">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-sanca-gold-light" />
              </div>
            </div>
            {/* Decorative top diamond */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-sanca-gold/60"
            />
            {/* Decorative bottom dot */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
              className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sanca-gold/50"
            />
          </div>

          {/* Right decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px w-16 sm:w-28 lg:w-36 bg-gradient-to-l from-transparent to-white/25 origin-left"
          />
        </motion.div>

        {/* Chapter label — slightly larger, more spacing */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[11px] sm:text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-white/35 mb-6 sm:mb-8"
        >
          Chapter {chapter}
        </motion.p>

        {/* ═══ TITLE — MUCH BIGGER, ultra-premium ═══ */}
        <motion.div
          style={{ scale: titleScale }}
          className="relative mb-6 sm:mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05]"
          >
            {/* Gold glow behind title */}
            <span className="absolute inset-0 text-sanca-gold/20 blur-2xl select-none" aria-hidden="true">
              {title}
            </span>
            {/* Main title text */}
            <span className="relative">{title}</span>
          </motion.h2>

          {/* Animated underline sweep */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 sm:mt-6 w-32 sm:w-48 lg:w-64 h-[3px] rounded-full bg-gradient-to-r from-transparent via-sanca-gold/60 to-transparent origin-center"
          />
        </motion.div>

        {/* Subtitle — larger, more readable */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-white/65 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>

        {/* Optional quote — more premium styling */}
        {quote && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 sm:mt-10 inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/12"
          >
            <Sparkles className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-sanca-gold-light flex-shrink-0" />
            <span className="text-sm sm:text-base text-white/70 italic font-light">{quote}</span>
          </motion.div>
        )}

        {/* Decorative bottom ornament — more elaborate */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.75 }}
          className="flex items-center justify-center gap-2.5 mt-12 sm:mt-14"
        >
          <div className={`w-1.5 h-1.5 rounded-full ${color.dot} opacity-50`} />
          <div className="w-8 h-px bg-white/15" />
          <div className={`w-2 h-2 rounded-full ${color.dot} opacity-70`} />
          <div className="w-8 h-px bg-white/15" />
          <div className={`w-3 h-3 rounded-full ${color.dot}`} />
          <div className="w-8 h-px bg-white/15" />
          <div className={`w-2 h-2 rounded-full ${color.dot} opacity-70`} />
          <div className="w-8 h-px bg-white/15" />
          <div className={`w-1.5 h-1.5 rounded-full ${color.dot} opacity-50`} />
        </motion.div>
      </motion.div>
    </div>
  );
}
