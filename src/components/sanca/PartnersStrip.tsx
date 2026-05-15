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
      className="w-full bg-white dark:bg-[#0a2818] border-b border-sanca-gold/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">

          {/* Label */}
          <div className="flex-shrink-0 text-center sm:text-left">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground dark:text-white/40">
              In Collaboration With
            </p>
          </div>

          {/* Thin divider — desktop only */}
          <div className="hidden sm:block w-px h-14 bg-sanca-gold/20 flex-shrink-0" />

          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-10 sm:gap-16 flex-1">
            {PARTNERS.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col items-center sm:items-start gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sanca-gold/50 rounded-lg"
                aria-label={`${partner.name} — ${partner.description}`}
              >
                <div className="relative h-16 sm:h-20 transition-all duration-300 group-hover:opacity-100 opacity-85">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="h-full w-auto object-contain"
                    sizes="(max-width: 640px) 180px, 280px"
                  />
                </div>
                <p className="text-[11px] text-muted-foreground dark:text-white/50 font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {partner.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Right badge */}
          <div className="hidden lg:flex flex-shrink-0 items-center gap-2 px-4 py-2.5 rounded-full bg-sanca-cream dark:bg-white/5 border border-sanca-gold/20">
            <span className="w-1.5 h-1.5 rounded-full bg-sanca-gold animate-pulse" />
            <p className="text-[11px] font-semibold text-sanca-green-dark dark:text-white/70 tracking-wide">
              Accredited &amp; Registered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
