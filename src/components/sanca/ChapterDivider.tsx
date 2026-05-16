'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Shield, Compass, Users, Phone } from 'lucide-react';

interface ChapterDividerProps {
  chapter: number;
  title: string;
  subtitle: string;
  quote?: string;
  icon?: React.ElementType;
}

const chapterColors = [
  { gradient: 'from-sanca-green-dark to-sanca-green', accent: 'text-sanca-gold-light', dot: 'bg-sanca-gold' },
  { gradient: 'from-sanca-green to-sanca-emerald', accent: 'text-sanca-gold', dot: 'bg-sanca-gold-light' },
  { gradient: 'from-sanca-emerald to-sanca-gold-dark', accent: 'text-sanca-emerald', dot: 'bg-sanca-emerald' },
  { gradient: 'from-sanca-gold-dark to-sanca-green', accent: 'text-sanca-gold-light', dot: 'bg-sanca-gold' },
  { gradient: 'from-sanca-green to-sanca-green-dark', accent: 'text-white', dot: 'bg-sanca-gold' },
  { gradient: 'from-sanca-green-dark to-sanca-emerald', accent: 'text-sanca-gold-light', dot: 'bg-sanca-emerald' },
];

export default function ChapterDivider({ chapter, title, subtitle, quote, icon: Icon }: ChapterDividerProps) {
  const color = chapterColors[(chapter - 1) % chapterColors.length];

  return (
    <div className="relative py-16 sm:py-20 overflow-hidden">
      {/* Full-width gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color.gradient}`} />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top/bottom fade transitions */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 dark:from-[#0a2a18]/80 to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 dark:from-[#0a2a18]/80 to-transparent z-[1]" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-sanca-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Chapter number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 mb-6"
        >
          {/* Left decorative line */}
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-white/30" />

          {/* Chapter badge */}
          <div className="relative">
            {/* Outer ring */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center">
              {/* Inner ring */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-sanca-gold/30 bg-white/10 flex items-center justify-center backdrop-blur-sm">
                {Icon ? (
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-sanca-gold-light" />
                ) : (
                  <span className="text-xs sm:text-sm font-bold text-sanca-gold-light font-serif">
                    {chapter}
                  </span>
                )}
              </div>
            </div>
            {/* Decorative top dot */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sanca-gold/60" />
          </div>

          {/* Right decorative line */}
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-white/30" />
        </motion.div>

        {/* Chapter label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-white/50 mb-3"
        >
          Chapter {chapter}
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4"
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Optional quote */}
        {quote && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15"
          >
            <Sparkles className="h-3.5 w-3.5 text-sanca-gold-light" />
            <span className="text-sm text-white/80 italic font-light">{quote}</span>
          </motion.div>
        )}

        {/* Decorative dots line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          <div className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
          <div className="w-8 h-px bg-white/20" />
          <div className={`w-2 h-2 rounded-full ${color.dot}`} />
          <div className="w-8 h-px bg-white/20" />
          <div className={`w-1.5 h-1.5 rounded-full ${color.dot}`} />
        </motion.div>
      </div>
    </div>
  );
}
