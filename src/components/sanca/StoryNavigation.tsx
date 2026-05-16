'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Shield, Compass, Users, Building2, Phone, ChevronUp } from 'lucide-react';

const chapters = [
  { id: 'chapter-1', label: 'Welcome', description: 'Hook & Emotional Connection', icon: Heart, color: 'bg-sanca-green' },
  { id: 'chapter-2', label: 'Our Story', description: 'Identity, Heritage & Credibility', icon: Shield, color: 'bg-sanca-emerald' },
  { id: 'chapter-3', label: 'Understanding', description: 'Education & Self-Discovery', icon: Compass, color: 'bg-sanca-gold' },
  { id: 'chapter-4', label: 'Recovery', description: 'Solutions & Care', icon: Users, color: 'bg-sanca-green-dark' },
  { id: 'chapter-5', label: 'Community', description: 'Stories of Hope', icon: Building2, color: 'bg-sanca-gold-dark' },
  { id: 'chapter-6', label: 'Take Action', description: 'Connection & Next Steps', icon: Phone, color: 'bg-sanca-emerald' },
];

export default function StoryNavigation() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Show after scrolling past hero
      setIsVisible(scrollY > window.innerHeight * 0.8);
      setShowBackToTop(scrollY > window.innerHeight * 1.5);
      
      // Reading progress
      if (docHeight > 0) {
        setReadingProgress(Math.round((scrollY / docHeight) * 100));
      }

      // Determine active chapter based on scroll position
      const chapterElements = chapters.map(ch => document.getElementById(ch.id));
      const scrollPos = scrollY + window.innerHeight / 3;

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed right-3 lg:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-1.5"
        >
          {/* Current chapter indicator */}
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="mb-2 text-right"
          >
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-sanca-green-dark/40 dark:text-white/30">
              Ch. {activeChapter + 1}
            </p>
            <p className="text-[10px] font-semibold text-sanca-green-dark/60 dark:text-white/50">
              {chapters[activeChapter].label}
            </p>
          </motion.div>

          {/* Chapter dots */}
          {chapters.map((chapter, i) => {
            const Icon = chapter.icon;
            const isActive = activeChapter === i;
            const isPast = i < activeChapter;
            return (
              <motion.button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                whileHover={{ x: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-end gap-2 py-0.5"
                aria-label={`Navigate to ${chapter.label}`}
              >
                {/* Tooltip — appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
                  <div className="relative whitespace-nowrap bg-white/95 dark:bg-[#0D3B22]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-sanca-green/10 dark:border-sanca-gold/10 shadow-lg">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-sanca-green-dark dark:text-sanca-gold">
                      {chapter.label}
                    </p>
                    <p className="text-[9px] text-sanca-green-dark/50 dark:text-white/40 mt-0.5">
                      {chapter.description}
                    </p>
                    {/* Arrow */}
                    <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white/95 dark:bg-[#0D3B22]/95 rotate-45 border-r border-b border-sanca-green/10 dark:border-sanca-gold/10" />
                  </div>
                </div>

                {/* Dot indicator */}
                <div className="relative">
                  <motion.div
                    animate={{
                      width: isActive ? 32 : isPast ? 12 : 8,
                      height: 8,
                      borderRadius: 4,
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`${
                      isActive
                        ? `${chapter.color} shadow-md`
                        : isPast
                        ? 'bg-sanca-gold/40 dark:bg-sanca-gold/30'
                        : 'bg-sanca-green/10 dark:bg-sanca-gold/10 group-hover:bg-sanca-green/25 dark:group-hover:bg-sanca-gold/25'
                    } transition-colors duration-300`}
                  />

                  {/* Active icon */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-0.5 left-1.5"
                      >
                        <Icon className="h-3 w-3 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            );
          })}

          {/* Progress line */}
          <div className="relative right-[3px] w-[2px] h-4 bg-sanca-green/10 dark:bg-sanca-gold/10 mt-1">
            <motion.div
              animate={{
                height: `${((activeChapter + 1) / chapters.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full bg-gradient-to-b from-sanca-green via-sanca-gold to-sanca-emerald rounded-full"
            />
          </div>

          {/* Reading progress */}
          <div className="mt-1.5 text-right">
            <p className="text-[8px] font-mono text-sanca-green-dark/30 dark:text-white/20 tabular-nums">
              {readingProgress}%
            </p>
          </div>

          {/* Back to top */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="mt-2 w-7 h-7 rounded-full bg-sanca-green/10 dark:bg-sanca-gold/10 border border-sanca-green/15 dark:border-sanca-gold/15 flex items-center justify-center hover:bg-sanca-green/20 dark:hover:bg-sanca-gold/20 transition-all duration-300 group/top"
                aria-label="Back to top"
              >
                <ChevronUp className="h-3 w-3 text-sanca-green-dark/40 dark:text-white/40 group-hover/top:text-sanca-green dark:group-hover/top:text-sanca-gold transition-colors" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
