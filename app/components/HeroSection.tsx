'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { TypewriterText } from './TypewriterText';
import { AnimatedCounter } from './AnimatedCounter';

export default function HeroSection() {
  const stats = [
    { value: 13, suffix: '', label: 'Projects Shipped' },
    { value: 2, suffix: '+ Yrs', label: 'Applied AI Experience' },
    { value: 40, suffix: '+', label: 'Tools & Frameworks' },
    { value: 5, suffix: '\u00A0Systems', label: 'Autonomous Agents' },
  ];

  return (
    <section className="hero-section-clean relative overflow-hidden pt-12 pb-20 md:py-24" id="hero">
      <div className="hero-clean-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Call-to-Actions */}
          <motion.div 
            className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Clean Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-4"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#5EEAD4]">
                01 — Hello World
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 font-['Space_Grotesk'] leading-[1.15]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Hi, I&apos;m <span className="text-white">Kerollos</span>{' '}
              <span className="bg-gradient-to-r from-[#5EEAD4] to-[#818CF8] bg-clip-text text-transparent font-extrabold">
                Mansour
              </span>
            </motion.h1>

            {/* Typewriter Role Title with Cursor */}
            <motion.div 
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 min-h-[2.5rem] flex items-center mb-5 font-['Space_Grotesk']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <TypewriterText 
                titles={[
                  'Software AI Engineer',
                  'Agentic AI Engineer',
                  'ML & AI Engineer',
                  'LLM & RAG Engineer',
                ]}
              />
            </motion.div>

            {/* Grounded Bio */}
            <motion.p 
              className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8 font-['Inter']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              {PROFILE.bio}
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#5EEAD4] hover:bg-[#2DD4BF] text-[#070A12] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#5EEAD4]/20 hover:shadow-[#5EEAD4]/30 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Explore Work</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E121B] hover:bg-[#151B27] text-slate-200 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={16} className="text-[#5EEAD4]" />
                <span>Let&apos;s Connect</span>
              </a>

              <a
                href={PROFILE.cvPath}
                download="Kerollos_Mansour_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors"
                title="Download CV"
              >
                <Download size={15} />
                <span>Resume (PDF)</span>
              </a>
            </motion.div>

            {/* Recruiter Stats Row */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              {stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight flex items-baseline gap-0.5 whitespace-nowrap">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Full-Body Portrait with Website CSS Background & Enhanced Area */}
          <motion.div 
            className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[480px] xl:max-w-[500px] aspect-[7/10] rounded-3xl p-2.5 bg-gradient-to-tr from-[#5EEAD4]/30 via-transparent to-[#818CF8]/30 border border-slate-800 shadow-2xl flex items-center justify-center group"
            >
              {/* Soft Ambient Aurora Behind Portrait */}
              <div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#5EEAD4]/20 via-transparent to-[#818CF8]/20 blur-2xl -z-10 group-hover:scale-105 transition-transform duration-700" 
                aria-hidden="true" 
              />

              {/* Inner Frame with Website CSS Dark Gradient & Ambient Glows */}
              <div 
                className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#111622] via-[#0E121B] to-[#070A12] relative flex items-center justify-center border border-slate-800/80"
              >
                {/* CSS Spotlights inside the frame */}
                <div 
                  className="absolute -top-10 -left-10 w-52 h-52 bg-[#5EEAD4]/20 rounded-full blur-3xl pointer-events-none" 
                  aria-hidden="true" 
                />
                <div 
                  className="absolute bottom-10 -right-10 w-56 h-56 bg-[#818CF8]/25 rounded-full blur-3xl pointer-events-none" 
                  aria-hidden="true" 
                />
                <div 
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700/20 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Full cutout photo with hands in pockets, suit, and trousers */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PROFILE.heroPhoto}
                  alt={PROFILE.name}
                  className="w-full h-full object-contain object-bottom hover:scale-[1.03] transition-transform duration-500 pt-2 relative z-10 drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
