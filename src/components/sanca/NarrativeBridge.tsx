'use client';

import { motion } from 'framer-motion';

interface NarrativeBridgeProps {
  text: string;
  align?: 'center' | 'left';
}

export default function NarrativeBridge({ text, align = 'center' }: NarrativeBridgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`py-6 sm:py-8 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'ml-auto text-left'} px-4 sm:px-6 lg:px-8`}
    >
      <div className="flex items-center gap-3 justify-center">
        <div className="h-px w-6 bg-gradient-to-r from-transparent to-sanca-gold/30" />
        <p className="text-sm sm:text-base text-sanca-green-dark/50 dark:text-white/40 italic font-light leading-relaxed tracking-wide">
          {text}
        </p>
        <div className="h-px w-6 bg-gradient-to-l from-transparent to-sanca-gold/30" />
      </div>
    </motion.div>
  );
}
