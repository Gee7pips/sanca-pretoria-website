'use client';

import { motion } from 'framer-motion';
import { Play, Heart, Shield, Users } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="video" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#FAF6ED' }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1B5E3B 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #C5963A 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: '#1B5E3B15', border: '1px solid #1B5E3B30' }}
          >
            <Play className="w-4 h-4" style={{ color: '#1B5E3B' }} />
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#1B5E3B' }}>From SANCA Pretoria</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4" style={{ color: '#1A1A2E' }}>
            Helping Families{' '}
            <span className="text-gradient-gold">Choose Recovery</span>
          </h2>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#4A5568' }}>
            It is hard to help a child with an addiction. You have to set strong rules. 
            You have to love them by choosing recovery over comfort.
          </p>
        </motion.div>

        {/* Video Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Premium frame around the video */}
          <div className="relative rounded-2xl overflow-hidden shadow-premium-xl" style={{ border: '3px solid #1B5E3B20' }}>
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 z-10 pointer-events-none" style={{ borderTop: '3px solid #C5963A', borderLeft: '3px solid #C5963A', borderTopLeftRadius: '16px' }} />
            <div className="absolute top-0 right-0 w-16 h-16 z-10 pointer-events-none" style={{ borderTop: '3px solid #C5963A', borderRight: '3px solid #C5963A', borderTopRightRadius: '16px' }} />
            <div className="absolute bottom-0 left-0 w-16 h-16 z-10 pointer-events-none" style={{ borderBottom: '3px solid #C5963A', borderLeft: '3px solid #C5963A', borderBottomLeftRadius: '16px' }} />
            <div className="absolute bottom-0 right-0 w-16 h-16 z-10 pointer-events-none" style={{ borderBottom: '3px solid #C5963A', borderRight: '3px solid #C5963A', borderBottomRightRadius: '16px' }} />

            {/* Facebook Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1CWH51uLjn%2F&show_text=false&autoplay=false&mute=0"
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="SANCA Pretoria - Helping Families Choose Recovery"
              />
            </div>
          </div>
        </motion.div>

        {/* Video Description & Key Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Description Card */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-xl bg-white shadow-premium-md hover-lift" style={{ border: '1px solid #1B5E3B10' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1B5E3B15' }}>
                <Heart className="w-5 h-5" style={{ color: '#1B5E3B' }} />
              </div>
              <h3 className="text-xl font-serif font-bold" style={{ color: '#1A1A2E' }}>A Message for Families</h3>
            </div>
            <p className="leading-relaxed mb-4" style={{ color: '#4A5568' }}>
              When a child struggles with addiction, the entire family is affected. At SANCA Pretoria, we understand 
              the delicate balance between setting firm boundaries and showing unconditional love. This video from our 
              Castle Carey Clinic highlights the importance of choosing recovery over comfort — even when it feels 
              impossibly hard.
            </p>
            <p className="leading-relaxed" style={{ color: '#4A5568' }}>
              Our family support programmes are designed to help parents and loved ones navigate the challenges of 
              addiction with compassion, structure, and hope. Follow our page for more tips to help you achieve a 
              healthy, sober life and lasting recovery for your child.
            </p>
          </div>

          {/* Key Takeaways Card */}
          <div className="p-6 sm:p-8 rounded-xl shadow-premium-md hover-lift" style={{ background: 'linear-gradient(135deg, #1B5E3B 0%, #2D8B57 100%)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white">Key Takeaways</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#C5963A' }}>
                  <span className="text-xs font-bold text-white">1</span>
                </div>
                <span className="text-white/90 text-sm leading-relaxed">Set strong, consistent rules — boundaries show love</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#C5963A' }}>
                  <span className="text-xs font-bold text-white">2</span>
                </div>
                <span className="text-white/90 text-sm leading-relaxed">Choose recovery over short-term comfort</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#C5963A' }}>
                  <span className="text-xs font-bold text-white">3</span>
                </div>
                <span className="text-white/90 text-sm leading-relaxed">You don&apos;t have to face this alone — SANCA is here</span>
              </li>
            </ul>
            <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-white/60" />
                <span className="text-white/60 text-xs">From SANCA Pretoria — Castle Carey Clinic</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm" style={{ color: '#718096' }}>
            Need help for your family?{' '}
            <a href="#contact" className="font-semibold underline underline-offset-2 hover:no-underline transition-all" style={{ color: '#1B5E3B' }}>
              Contact SANCA Pretoria today
            </a>{' '}
            or call{' '}
            <a href="tel:0125421121" className="font-semibold underline underline-offset-2 hover:no-underline transition-all" style={{ color: '#C5963A' }}>
              012 542 1121
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
