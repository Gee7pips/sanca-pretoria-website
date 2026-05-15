'use client';

import { useRef, useEffect } from 'react';
import { Phone, Clock, MapPin, Award, Shield, Heart } from 'lucide-react';

const TICKER_ITEMS = [
  { icon: Phone,  text: 'Helpline: 012 542 1121', highlight: false },
  { icon: Clock,  text: 'Open Mon – Fri, 7:30am – 4:30pm', highlight: false },
  { icon: MapPin, text: 'Pretoria · Soshanguve · Hammanskraal', highlight: false },
  { icon: Award,  text: 'Accredited by the Department of Social Development', highlight: true },
  { icon: Shield, text: 'Medical Aid & PMB Benefits Accepted', highlight: false },
  { icon: Heart,  text: 'Confidential, judgement-free care since 1957', highlight: false },
  { icon: Phone,  text: 'WhatsApp: +27 81 318 1511', highlight: false },
  { icon: MapPin, text: 'Castle Carey Clinic · Lapalamé Drug Unit', highlight: false },
  { icon: Award,  text: '68+ Years Serving South African Communities', highlight: true },
  { icon: Shield, text: 'Subsidised Treatment Available — No One Turned Away', highlight: false },
];

// Duplicate to create a seamless infinite loop
const DOUBLED = [...TICKER_ITEMS, ...TICKER_ITEMS];

export default function HeroTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Pure CSS animation — no JS scroll loop, zero jank
  return (
    <div
      className="relative w-full bg-sanca-green-dark border-y border-sanca-gold/20 overflow-hidden"
      aria-label="Live information ticker"
      role="marquee"
    >
      {/* Gradient edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sanca-green-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sanca-green-dark to-transparent z-10 pointer-events-none" />

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sanca-gold/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sanca-gold/30 to-transparent" />

      {/* Ticker track */}
      <div
        ref={trackRef}
        className="ticker-track flex items-center gap-0 py-3.5"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        {DOUBLED.map((item, idx) => {
          const Icon = item.icon;
          return (
            <span
              key={idx}
              className="inline-flex items-center gap-2.5 flex-shrink-0 px-8"
            >
              {/* Icon */}
              <Icon
                className={`h-3.5 w-3.5 flex-shrink-0 ${
                  item.highlight ? 'text-sanca-gold' : 'text-sanca-gold/60'
                }`}
              />

              {/* Text */}
              <span
                className={`text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap ${
                  item.highlight
                    ? 'text-sanca-gold'
                    : 'text-white/80'
                }`}
              >
                {item.text}
              </span>

              {/* Divider */}
              <span className="ml-8 w-px h-3.5 bg-sanca-gold/25 flex-shrink-0" />
            </span>
          );
        })}
      </div>
    </div>
  );
}
