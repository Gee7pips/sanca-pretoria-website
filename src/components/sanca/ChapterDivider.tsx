'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Sparkles, Heart, Shield, Compass, Users, Phone } from 'lucide-react';

interface ChapterDividerProps {
  chapter: number;
  title: string;
  subtitle: string;
  quote?: string;
  icon?: React.ElementType;
}

const chapterColors = [
  { gradient: 'from-sanca-green-dark to-sanca-green', accent: 'text-sanca-gold-light', dot: 'bg-sanca-gold', glow: 'shadow-sanca-gold/20' },
  { gradient: 'from-sanca-green to-sanca-emerald', accent: 'text-sanca-gold', dot: 'bg-sanca-gold-light', glow: 'shadow-sanca-gold/20' },
  { gradient: 'from-sanca-emerald to-sanca-gold-dark', accent: 'text-sanca-emerald', dot: 'bg-sanca-emerald', glow: 'shadow-sanca-emerald/20' },
  { gradient: 'from-sanca-gold-dark to-sanca-green', accent: 'text-sanca-gold-light', dot: 'bg-sanca-gold', glow: 'shadow-sanca-gold/20' },
  { gradient: 'from-sanca-green to-sanca-green-dark', accent: 'text-white', dot: 'bg-sanca-gold', glow: 'shadow-sanca-gold/20' },
  { gradient: 'from-sanca-green-dark to-sanca-emerald', accent: 'text-sanca-gold-light', dot: 'bg-sanca-emerald', glow: 'shadow-sanca-emerald/20' },
];

const chapterIcons = [Heart, Shield, Compass, Users, Sparkles, Phone];

export default function ChapterDivider({ chapter, title, subtitle, quote, icon: IconProp }: ChapterDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const textY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const color = chapterColors[(chapter - 1) % chapterColors.length];
  const Icon = IconProp || chapterIcons[(chapter - 1) % chapterIcons.length];

  return (
    <div ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Full-width gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient}`} />

      {/* Animated mesh pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 28px 28px',
        }}
      />

      {/* Top wave divider */}
      <svg
        className="absolute top-0 left-0 right-0 w-full -translate-y-[99%] z-10"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,60 C360,0 720,60 1080,20 C1260,0 1380,30 1440,20 L1440,0 L0,0 Z"
          className="fill-white/80 dark:fill-[#0a2a18]/80"
        />
      </svg>

      {/* Bottom wave divider */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full translate-y-[99%] z-10"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,0 C360,60 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,60 L0,60 Z"
          className="fill-white/80 dark:fill-[#0a2a18]/80"
        />
      </svg>

      {/* Floating orbs with parallax */}
      <motion.div
        style={{ y: orbY1 }}
        className="absolute top-1/4 -left-24 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: orbY2 }}
        className="absolute bottom-1/4 -right-24 w-96 h-96 bg-sanca-gold/[0.06] rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl"
      />

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-sanca-gold/25"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.15, 0.4, 0.15],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 4 + i * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Chapter number with pulsing rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-4 mb-8"
        >
          {/* Left decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-white/30 origin-right"
          />

          {/* Chapter badge with pulsing ring */}
          <div className="relative">
            {/* Outermost pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.05, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[-8px] rounded-full border border-sanca-gold/20"
            />
            {/* Middle pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.08, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute inset-[-4px] rounded-full border border-sanca-gold/30"
            />
            {/* Outer ring */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
              {/* Inner ring */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-sanca-gold/35 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                {Icon ? (
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-sanca-gold-light" />
                ) : (
                  <span className="text-sm sm:text-base font-bold text-sanca-gold-light font-serif">
                    {chapter}
                  </span>
                )}
              </div>
            </div>
            {/* Decorative top dot */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sanca-gold/70"
            />
          </div>

          {/* Right decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-white/30 origin-left"
          />
        </motion.div>

        {/* Chapter label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-white/40 mb-4"
        >
          Chapter {chapter}
        </motion.p>

        {/* Title with shimmer effect */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5"
        >
          {/* Shimmer overlay */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-[shimmer_4s_ease-in-out_infinite]" aria-hidden="true">
            {title}
          </span>
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>

        {/* Optional quote */}
        {quote && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-7 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15"
          >
            <Sparkles className="h-3.5 w-3.5 text-sanca-gold-light" />
            <span className="text-sm text-white/75 italic font-light">{quote}</span>
          </motion.div>
        )}

        {/* Decorative dots line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-10"
        >
          <div className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
          <div className="w-12 h-px bg-white/15" />
          <div className={`w-2.5 h-2.5 rounded-full ${color.dot} opacity-70`} />
          <div className="w-12 h-px bg-white/15" />
          <div className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
        </motion.div>
      </motion.div>

      {/* CSS animation for shimmer */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
}
