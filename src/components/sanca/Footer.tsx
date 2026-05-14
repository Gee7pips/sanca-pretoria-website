'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Heart, Shield, ExternalLink, ArrowUp, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Self-Assessment', href: '#assessment' },
  { label: 'Treatment Programmes', href: '#programmes' },
  { label: 'Admissions Process', href: '#admissions' },
  { label: 'Recovery Journey', href: '#recovery-journey' },
  { label: 'Resource Library', href: '#resources' },
  { label: 'For Families', href: '#families' },
  { label: 'Volunteer With Us', href: '#volunteer' },
  { label: 'FAQ', href: '#faq' },
];

const programmes = [
  'Inpatient Programme',
  'Youth Programme (Lapalamé)',
  'Outpatient Programme',
  'Aftercare',
  'Medical Services',
  'Family Support',
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/CastleCareyClinic', icon: 'facebook' },
  { label: 'SANCA National', href: 'https://www.sancanational.info', icon: 'external' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sanca-green-dark dark:bg-[#071a10] text-white relative">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-sanca-gold via-sanca-gold-light to-sanca-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-sanca-gold rounded-xl flex items-center justify-center shadow-gold">
                <span className="text-white font-serif font-bold text-lg">S</span>
              </div>
              <div>
                <p className="font-serif font-bold text-lg">SANCA Pretoria</p>
                <p className="text-xs text-white/50">Est. 1957</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              South African National Council on Alcoholism and Drug Dependence — Pretoria,
              Soshanguve &amp; Hammanskraal. Accessible, affordable, medically sound addiction
              recovery for all communities.
            </p>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 italic">
                &ldquo;Everyone deserves a chance at a healthy and fulfilling life, free from
                the chains of addiction.&rdquo;
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-sanca-gold/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon === 'facebook' ? (
                    <svg className="h-4 w-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ) : (
                    <ExternalLink className="h-4 w-4 text-white/70" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif font-bold text-sm mb-4 text-sanca-gold-light uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 hover:text-white hover:pl-1 transition-all duration-200 gold-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programmes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif font-bold text-sm mb-4 text-sanca-gold-light uppercase tracking-wider">
              Programmes
            </h4>
            <ul className="space-y-2">
              {programmes.map((prog) => (
                <li key={prog}>
                  <button
                    onClick={() => scrollTo('#programmes')}
                    className="text-sm text-white/60 hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {prog}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-serif font-bold text-sm mb-4 text-sanca-gold-light uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0125421121"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 text-sanca-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                012 542 1121
              </a>
              <a
                href="https://wa.me/27813181511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <MessageCircle className="h-4 w-4 text-sanca-emerald flex-shrink-0 group-hover:scale-110 transition-transform" />
                WhatsApp: 081 318 1511
              </a>
              <a
                href="mailto:info@sancapta.co.za"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 text-sanca-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                info@sancapta.co.za
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-sanca-gold flex-shrink-0 mt-0.5" />
                <span>Corner Rachel De Beer &amp; Waterbok St, Ninapark, Pretoria North, 0182</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4 text-sanca-gold flex-shrink-0" />
                Mon–Fri: 08:00–17:00
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 flex items-center gap-1">
                <Shield className="h-3 w-3" />
                DSD Registered — Meets Minimum Norms &amp; Standards
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SANCA Pretoria / Soshanguve / Hammanskraal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.sancanational.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/70 transition-colors flex items-center gap-1"
            >
              SANCA National <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://www.facebook.com/CastleCareyClinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/70 transition-colors flex items-center gap-1"
            >
              Facebook <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/30 flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-sanca-gold fill-sanca-gold" /> for healing
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-sanca-gold/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
