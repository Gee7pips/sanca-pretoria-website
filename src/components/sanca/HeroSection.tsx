'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Heart, Shield, ArrowRight, Sparkles, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_IMAGES = [
  {
    url: '/images/sanca/uploads/hero-community.jpeg',
    alt: 'SANCA Pretoria — Community of care and support',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%2817%29-mw6UyPbYV3HfLiyQQYZhENhYtI9jSh.jpeg',
    alt: 'SANCA Pretoria welcome sign with community member',
  },
  {
    url: '/images/sanca/uploads/hero-facility-exterior.jpg',
    alt: 'SANCA Castle Carey Clinic — Serene healing environment',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240516-WA0027-scaled-kmUcsTfZqZQoXyJt6ANGvs5WUPIFqC.jpg',
    alt: 'SANCA clinic exterior with modern architecture and landscaping',
  },
  {
    url: '/images/sanca/uploads/hero-building-scaled.jpg',
    alt: 'Castle Carey Clinic — Professional rehabilitation facility',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240516-WA0114-K98FL6aprFFHE5NpqYPQfLyJmuIk1b.jpg',
    alt: 'Castle Carey Clinic entrance with welcoming vegetation',
  },
  {
    url: '/images/sanca/uploads/hero-logo-modern.jpeg',
    alt: 'SANCA Pretoria — A legacy of healing and hope',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240516-WA0059-nVNI5IEj4SGML8AelsLzQ9D5cGt1hu.jpg',
    alt: 'SANCA clinic courtyard with peaceful landscaping',
  },
];

const AUTOPLAY_INTERVAL = 8000;

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const advance = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-sanca-green-dark"
    >
      {/* ── Image Carousel Background ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMAGES[currentImageIndex].url}
              alt={HERO_IMAGES[currentImageIndex].alt}
              className="w-full h-full object-cover"
              loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-sanca-green-dark/70 via-sanca-green-dark/55 to-sanca-green-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-sanca-green-dark/55 via-transparent to-sanca-green-dark/30" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/12 backdrop-blur-md border border-sanca-gold/40 text-white text-sm mb-8"
          >
            <Shield className="h-4 w-4 text-sanca-gold flex-shrink-0" />
            <span className="font-medium label-premium">Est. 1957 — Nearly 70 Years of Restoring Lives</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="heading-hero text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-6 tracking-tight"
          >
            Your Journey to{' '}
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38 }}
              className="text-gradient-animated font-display block"
            >
              Healing Starts
            </motion.span>
            Now
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mb-12 leading-relaxed body-elegant"
          >
            Compassionate clinical care meets accessible recovery. Our serene facilities in Pretoria,
            Soshanguve, and Hammanskraal welcome you to a sanctuary where healing begins the moment you arrive.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.46 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            {/* Primary CTA — Start Your Recovery */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Glow ring behind button */}
              <div className="absolute -inset-1 bg-sanca-gold/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Button
                onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="relative bg-gradient-to-r from-sanca-gold via-sanca-gold to-sanca-gold-dark hover:from-sanca-gold-dark hover:via-sanca-gold hover:to-sanca-gold text-white font-bold text-base px-8 py-6 shadow-[0_8px_32px_rgba(197,150,58,0.35)] hover:shadow-[0_12px_40px_rgba(197,150,58,0.5)] transition-all duration-500 rounded-2xl group/btn border border-sanca-gold-light/30"
              >
                <span className="flex items-center gap-2.5">
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 group-hover/btn:bg-white/30 transition-all duration-300">
                    <Heart className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  </span>
                  <span>Start Your Recovery</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                </span>
              </Button>
            </motion.div>

            {/* Secondary CTA — Call Admissions */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Subtle glow */}
              <div className="absolute -inset-1 bg-white/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Button
                onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="relative border-2 border-white/30 text-white hover:bg-white/15 hover:border-white/60 font-bold text-base px-8 py-6 bg-white/[0.08] backdrop-blur-xl transition-all duration-500 rounded-2xl group/btn shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              >
                <span className="flex items-center gap-2.5">
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-sanca-emerald/30 backdrop-blur-sm border border-sanca-emerald/30 group-hover/btn:bg-sanca-emerald/50 transition-all duration-300">
                    <Phone className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  </span>
                  <span>Call Admissions</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Action Chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="https://wa.me/27813181511"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sanca-emerald/20 backdrop-blur-sm border border-sanca-emerald/30 text-white text-sm font-medium hover:bg-sanca-emerald/30 hover:border-sanca-emerald/50 transition-all duration-300 group/chip"
            >
              <MessageCircle className="h-4 w-4 group-hover/chip:scale-110 transition-transform" />
              WhatsApp Us
            </a>
            <a
              href="tel:0125421121"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-300 group/chip"
            >
              <Phone className="h-4 w-4 group-hover/chip:scale-110 transition-transform" />
              012 542 1121
            </a>
            <button
              onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sanca-gold/15 backdrop-blur-sm border border-sanca-gold/30 text-sanca-gold-light text-sm font-medium hover:bg-sanca-gold/25 hover:border-sanca-gold/50 transition-all duration-300 group/chip"
            >
              <CalendarCheck className="h-4 w-4 group-hover/chip:scale-110 transition-transform" />
              Book Assessment
            </button>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.56 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-white/75 text-sm"
          >
            {[
              { color: 'bg-sanca-emerald', label: 'DSD Registered' },
              { color: 'bg-sanca-gold',    label: 'Medical Aid Accepted' },
              { color: 'bg-sanca-emerald', label: 'Confidential Care' },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${color}`} />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Dot Indicators (autoplay only, no arrows) ── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20"
        aria-label="Carousel position"
      >
        {HERO_IMAGES.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentImageIndex
                ? 'bg-sanca-gold w-8'
                : 'bg-white/35 w-1.5'
            }`}
          />
        ))}
      </div>

      {/* ── Floating Emergency Contacts (icons only) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="fixed bottom-8 right-6 flex flex-col gap-3 z-50"
        aria-label="Emergency contact shortcuts"
      >
        <a
          href="tel:0125421121"
          aria-label="Call SANCA Pretoria"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-sanca-green hover:bg-sanca-green-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/27813181511"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp SANCA Pretoria"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-sanca-emerald hover:bg-sanca-green text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </motion.div>

      {/* ── Bottom Fade into next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-sanca-cream dark:from-background to-transparent z-10 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
