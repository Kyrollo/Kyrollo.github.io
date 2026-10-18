'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function EducationSection() {
  const edu = PROFILE.education[0];

  return (
    <section id="education" className="education-section-standalone">
      <motion.div 
        className="section-header-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-pill">Education</span>
        <h2 className="section-title">
          Academic <span className="text-gradient-cyan">Foundations</span>
        </h2>
        <p className="section-subtitle">
          CS and AI foundations from Cairo University.
        </p>
      </motion.div>

      <motion.div 
        className="education-standalone-card glassmorphic-card relative overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top Gradient Line Accent */}
        <div 
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-violet-500 to-rose-400" 
          aria-hidden="true" 
        />

        {/* University Header Row */}
        <div className="edu-card-top-row">
          <div className="edu-institution-info">
            <div className="edu-cap-icon-box shadow-lg shadow-cyan-500/20">
              <GraduationCap size={28} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="edu-degree-title">{edu.degree}</h3>
              <div className="edu-institution-meta">
                <span className="edu-institution-name font-semibold text-white">{edu.institution}</span>
                <span className="edu-bullet">•</span>
                <span className="edu-specialization text-cyan-300">Specialization: {edu.specialization}</span>
              </div>
            </div>
          </div>

          <div className="edu-timing-badge">
            <Calendar size={14} className="text-cyan-400" />
            <span>{edu.period}</span>
          </div>
        </div>

        {/* Academic Description */}
        <p className="edu-description-text text-slate-300 mt-4 leading-relaxed">{edu.description}</p>

        {/* Core Academic Foundations & Coursework */}
        <div className="edu-highlights-block mt-6 pt-6 border-t border-white/5">
          <h4 className="highlights-title flex items-center gap-2 text-white font-semibold mb-4">
            <BookOpen size={17} className="text-cyan-400" />
            <span>Core Academic & Algorithmic Foundations:</span>
          </h4>
          <div className="highlights-grid">
            {edu.highlights.map((highlight, idx) => (
              <motion.div 
                key={idx} 
                className="highlight-item-card hover:border-cyan-500/30 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <CheckCircle2 size={16} className="text-emerald-400 highlight-check flex-shrink-0" />
                <span className="highlight-text text-slate-200">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
