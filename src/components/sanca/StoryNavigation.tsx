'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Shield, Compass, Users, Building2, Phone } from 'lucide-react';

const chapters = [
  { id: 'chapter-1', label: 'Welcome', icon: Heart, color: 'bg-sanca-green' },
  { id: 'chapter-2', label: 'Our Story', icon: Shield, color: 'bg-sanca-emerald' },
  { id: 'chapter-3', label: 'Understanding', icon: Compass, color: 'bg-sanca-gold' },
  { id: 'chapter-4', label: 'Recovery', icon: Users, color: 'bg-sanca-green-dark' },
  { id: 'chapter-5', label: 'Community', icon: Building2, color: 'bg-sanca-gold-dark' },
  { id: 'chapter-6', label: 'Take Action', icon: Phone, color: 'bg-sanca-emerald' },
];

export default function StoryNavigation() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero
      setIsVisible(window.scrollY > window.innerHeight * 0.8);

      // Determine active chapter based on scroll position
      const chapterElements = chapters.map(ch => document.getElementById(ch.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = chapterElements.length - 1; i >= 0; i--) {
        const el = chapterElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveChapter(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-1"
        >
          {chapters.map((chapter, i) => {
            const Icon = chapter.icon;
            const isActive = activeChapter === i;
            return (
              <motion.button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                whileHover={{ x: -4 }}
                className="group relative flex items-center justify-end gap-2"
                aria-label={`Navigate to ${chapter.label}`}
              >
                {/* Label tooltip — appears on hover */}
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="hidden group-hover:block absolute right-8 whitespace-nowrap text-[10px] uppercase tracking-widest font-semibold text-sanca-green-dark/70 dark:text-white/70 bg-white/90 dark:bg-[#0D3B22]/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-sanca-green/10 dark:border-sanca-gold/10 shadow-premium-sm"
                >
                  {chapter.label}
                </motion.span>

                {/* Dot indicator */}
                <div className="relative">
                  <motion.div
                    animate={{
                      width: isActive ? 28 : 8,
                      height: 8,
                      borderRadius: 4,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`${
                      isActive
                        ? `${chapter.color} shadow-sm`
                        : 'bg-sanca-green/15 dark:bg-sanca-gold/15 group-hover:bg-sanca-green/30 dark:group-hover:bg-sanca-gold/30'
                    } transition-colors duration-300`}
                  />

                  {/* Active icon */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute -top-0.5 left-1"
                      >
                        <Icon className="h-3.5 w-3.5 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            );
          })}

          {/* Progress line */}
          <div className="absolute right-[3px] top-0 bottom-0 w-[2px] bg-sanca-green/10 dark:bg-sanca-gold/10 -z-10">
            <motion.div
              animate={{
                height: `${((activeChapter + 1) / chapters.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full bg-gradient-to-b from-sanca-green via-sanca-gold to-sanca-emerald rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
