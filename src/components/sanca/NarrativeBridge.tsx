'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Feather, Heart, ArrowRight } from 'lucide-react';

interface NarrativeBridgeProps {
  text: string;
  align?: 'center' | 'left';
  icon?: 'sparkles' | 'feather' | 'heart' | 'arrow';
  emphasis?: string; // optional bold/colored portion of the text
}

const iconMap = {
  sparkles: Sparkles,
  feather: Feather,
  heart: Heart,
  arrow: ArrowRight,
};

export default function NarrativeBridge({ text, align = 'center', icon = 'sparkles', emphasis }: NarrativeBridgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const iconRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [0, 1, 1, 0]);

  const Icon = iconMap[icon];

  // Parse emphasis: if emphasis is provided, highlight that portion of text
  const renderText = () => {
    if (!emphasis) return <>{text}</>;
    const parts = text.split(emphasis);
    return (
      <>
        {parts[0]}
        <span className="text-sanca-gold dark:text-sanca-gold-light font-semibold not-italic">{emphasis}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      ref={ref}
      className={`relative py-10 sm:py-14 max-w-4xl ${align === 'center' ? 'mx-auto text-center' : 'ml-auto text-left'} px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      {/* Floating ambient particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-sanca-gold/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Animated gradient line - left */}
      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute top-1/2 -translate-y-1/2 left-0 w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-sanca-gold/40 to-sanca-gold/20 origin-left"
      />

      {/* Animated gradient line - right */}
      <motion.div
        style={{ scaleX: lineScale }}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-sanca-gold/40 to-sanca-gold/20 origin-right"
      />

      {/* Central content */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative flex items-center gap-3 justify-center"
      >
        {/* Left decorative dot cluster */}
        <motion.div 
          className="hidden sm:flex items-center gap-1.5"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-1 h-1 rounded-full bg-sanca-gold/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-sanca-gold/50" />
          <div className="w-1 h-1 rounded-full bg-sanca-gold/30" />
        </motion.div>

        {/* Central icon with rotating ring */}
        <motion.div className="relative flex-shrink-0">
          {/* Outer ring */}
          <motion.div
            style={{ rotate: iconRotate }}
            className="absolute inset-[-6px] rounded-full border border-dashed border-sanca-gold/20"
          />
          {/* Inner circle */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sanca-gold/15 to-sanca-gold/5 border border-sanca-gold/25 flex items-center justify-center backdrop-blur-sm">
            <Icon className="h-3.5 w-3.5 text-sanca-gold dark:text-sanca-gold-light" />
          </div>
        </motion.div>

        {/* Narrative text */}
        <p className="text-sm sm:text-base text-sanca-green-dark/60 dark:text-white/50 italic font-light leading-relaxed tracking-wide max-w-xl">
          {renderText()}
        </p>

        {/* Right decorative dot cluster */}
        <motion.div 
          className="hidden sm:flex items-center gap-1.5"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-1 h-1 rounded-full bg-sanca-gold/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-sanca-gold/50" />
          <div className="w-1 h-1 rounded-full bg-sanca-gold/30" />
        </motion.div>
      </motion.div>

      {/* Bottom subtle gradient fade */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mx-auto mt-6 w-24 h-px bg-gradient-to-r from-transparent via-sanca-gold/20 to-transparent"
      />
    </motion.div>
  );
}
