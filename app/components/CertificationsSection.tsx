'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  Maximize2, 
  CheckCircle2, 
  Sparkles, 
  X, 
  ShieldCheck 
} from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function CertificationsSection() {
  const [activeSegment, setActiveSegment] = useState<'certificates' | 'courses'>('certificates');
  const [selectedCertImage, setSelectedCertImage] = useState<{ src: string; title: string; issuer: string } | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="certifications" className="certifications-courses-section">
      <motion.div 
        className="section-header-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-pill">Credentials</span>
        <h2 className="section-title">
          Verified <span className="text-gradient-cyan">Certifications & Courses</span>
        </h2>
        <p className="section-subtitle">
          Industry certifications and specialized technical training.
        </p>
      </motion.div>

      {/* Segment Switcher */}
      <div className="credentials-segment-tabs flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md">
          <button
            className={`credential-tab-btn flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeSegment === 'certificates' 
                ? 'bg-gradient-to-r from-cyan-500/25 to-violet-500/25 text-white border border-cyan-500/40 shadow-lg shadow-cyan-500/10' 
                : 'text-slate-400 hover:text-white'
            }`}
            onClick={() => setActiveSegment('certificates')}
            type="button"
          >
            <Award size={17} className={activeSegment === 'certificates' ? 'text-cyan-400' : ''} />
            <span>Industry Certifications ({PROFILE.certifications.length})</span>
          </button>
          <button
            className={`credential-tab-btn flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeSegment === 'courses' 
                ? 'bg-gradient-to-r from-cyan-500/25 to-violet-500/25 text-white border border-cyan-500/40 shadow-lg shadow-cyan-500/10' 
                : 'text-slate-400 hover:text-white'
            }`}
            onClick={() => setActiveSegment('courses')}
            type="button"
          >
            <BookOpen size={17} className={activeSegment === 'courses' ? 'text-violet-400' : ''} />
            <span>Specialized Courses ({PROFILE.courses.length})</span>
          </button>
        </div>
      </div>

      {/* Segment 1: Industry Certifications */}
      <AnimatePresence mode="wait">
        {activeSegment === 'certificates' ? (
          <motion.div 
            key="certificates-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="certificates-cards-grid"
          >
            {PROFILE.certifications.map((cert) => (
              <motion.div 
                key={cert.title} 
                variants={itemVariants}
                className="certificate-document-card glassmorphic-card group hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Certificate Image Frame */}
                <div 
                  className="certificate-image-wrapper cursor-pointer overflow-hidden rounded-t-xl relative group"
                  onClick={() => setSelectedCertImage({ src: cert.image, title: cert.title, issuer: cert.issuer })}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="certificate-preview-img w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="certificate-zoom-overlay absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white">
                    <Maximize2 size={24} className="zoom-icon text-cyan-400" />
                    <span className="zoom-text text-xs font-semibold uppercase tracking-wider">Inspect Certificate</span>
                  </div>
                </div>

                {/* Certificate Meta Details */}
                <div className="certificate-meta-content p-6 flex flex-col flex-1">
                  <div className="cert-header-meta flex items-center justify-between gap-2 mb-3">
                    <span className="cert-issuer-badge flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                      <ShieldCheck size={13} className="text-cyan-400" />
                      {cert.issuer}
                    </span>
                    <span className="cert-date-badge flex items-center gap-1 text-xs text-slate-400 font-mono">
                      <Calendar size={13} />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="cert-title text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <p className="cert-desc text-sm text-slate-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Verified Skills */}
                  <div className="cert-skills-wrap mt-auto pt-4 border-t border-white/5">
                    <span className="cert-skills-label text-xs text-slate-500 uppercase tracking-wider block mb-2 font-mono">
                      Validated Competencies:
                    </span>
                    <div className="cert-skills-chips flex flex-wrap gap-1.5">
                      {cert.skills.map((s) => (
                        <span key={s} className="cert-skill-tag inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-slate-800/60 border border-white/5 text-slate-300">
                          <CheckCircle2 size={12} className="text-emerald-400" />
                          <span>{s}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inspect Button */}
                  <button
                    className="btn-inspect-cert mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-xs font-semibold text-white transition-colors"
                    onClick={() => setSelectedCertImage({ src: cert.image, title: cert.title, issuer: cert.issuer })}
                    type="button"
                  >
                    <Maximize2 size={14} />
                    <span>View Full Size</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="courses-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="courses-cards-grid"
          >
            {PROFILE.courses.map((course) => (
              <motion.div 
                key={course.title} 
                variants={itemVariants}
                className="course-credential-card glassmorphic-card p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="course-card-top flex items-start gap-4 mb-3">
                  {course.badgeImage && (
                    <div className="course-badge-box w-12 h-12 rounded-xl bg-slate-900 border border-white/10 p-2 flex items-center justify-center flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={course.badgeImage}
                        alt={course.title}
                        className="course-badge-img max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="course-meta-info flex-1">
                    <span className="course-platform-pill text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 mb-1 inline-block">
                      {course.platform}
                    </span>
                    <h3 className="course-title text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {course.title}
                    </h3>
                    <span className="course-issuer-name text-xs text-slate-400 block font-mono mt-1">
                      {course.issuer} • {course.date}
                    </span>
                  </div>
                </div>

                <p className="course-desc text-sm text-slate-400 leading-relaxed mb-4">{course.description}</p>

                <div className="course-skills-wrap pt-3 border-t border-white/5">
                  <span className="course-skills-label text-xs text-slate-500 uppercase tracking-wider block mb-2 font-mono">
                    Curriculum Highlights:
                  </span>
                  <div className="course-skills-chips flex flex-wrap gap-1.5">
                    {course.skills.map((s) => (
                      <span key={s} className="course-skill-pill text-xs px-2.5 py-0.5 rounded-full bg-slate-800/50 border border-white/5 text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Image Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedCertImage && (
          <motion.div 
            className="cert-modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertImage(null)}
          >
            <motion.div 
              className="cert-modal-dialog max-w-4xl w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header p-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="modal-cert-title text-lg font-bold text-white">{selectedCertImage.title}</h3>
                  <span className="modal-cert-issuer text-xs text-cyan-400 font-mono">{selectedCertImage.issuer}</span>
                </div>
                <button
                  className="cert-modal-close-btn p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  onClick={() => setSelectedCertImage(null)}
                  aria-label="Close certificate preview"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="cert-modal-body p-4 max-h-[75vh] overflow-auto flex items-center justify-center bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedCertImage.src}
                  alt={selectedCertImage.title}
                  className="cert-modal-full-img max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
