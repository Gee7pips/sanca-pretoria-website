'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PARTNERS = [
  {
    name: 'University of Pretoria',
    shortName: 'UP',
    description: 'Academic Research & Training Partner',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UP_edit_18542722435737-WhoBDgielGj1QzPnz6jTvc2AZVdTF9.png',
    href: 'https://www.up.ac.za',
    width: 220,
    height: 70,
  },
  {
    name: 'Department of Social Development — Republic of South Africa',
    shortName: 'DSD',
    description: 'Government Funding & Regulatory Body',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-52F4zYYrJj6QmQi1Wlo1F41ZmQeWcl.png',
    href: 'https://www.dsd.gov.za',
    width: 220,
    height: 70,
  },
];

export default function PartnersStrip() {
  return (
    <section
      aria-label="Collaborative partners and affiliations"
      className="relative w-full overflow-hidden bg-white dark:bg-[#0a2a18]"
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sanca-gold/30 to-transparent" />

      {/* Subtle warm glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[30%] w-48 h-24 bg-sanca-gold/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[30%] w-48 h-24 bg-sanca-green/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">

          {/* Label */}
          <div className="flex-shrink-0 text-center sm:text-left">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-sanca-green-dark/40 dark:text-sanca-gold/60">
              In Collaboration With
            </p>
          </div>

          {/* Thin divider — desktop only */}
          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-sanca-gold/20 via-sanca-green/15 to-sanca-gold/20 flex-shrink-0" />

          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 flex-1">
            {PARTNERS.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="group flex flex-col items-center sm:items-start gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sanca-gold/50 rounded-xl p-3 sm:p-4 -m-3 sm:-m-4 transition-all duration-300 border border-sanca-gold/10 bg-sanca-cream/30 dark:bg-[#0D3B22]/50 hover:border-sanca-gold/25 hover:shadow-md"
                aria-label={`${partner.name} — ${partner.description}`}
              >
                <div className="relative h-16 sm:h-20 transition-all duration-300 group-hover:opacity-100 opacity-90 dark:brightness-0 dark:invert">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="h-full w-auto object-contain"
                    sizes="(max-width: 640px) 180px, 280px"
                  />
                </div>
                <p className="text-[11px] text-sanca-green-dark/40 dark:text-white/40 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Right badge */}
          <div className="hidden lg:flex flex-shrink-0 items-center gap-2 px-4 py-2.5 rounded-full bg-sanca-cream/50 dark:bg-[#0D3B22]/50 border border-sanca-gold/15">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-sanca-gold shadow-[0_0_6px_rgba(197,150,58,0.4)]"
            />
            <p className="text-[11px] font-semibold text-sanca-green-dark/50 dark:text-sanca-gold/60 tracking-wide">
              Accredited &amp; Registered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
