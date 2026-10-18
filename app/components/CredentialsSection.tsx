'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink,
  Maximize2,
  X,
  FileCheck
} from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function CredentialsSection() {
  const [activeTab, setActiveTab] = useState<'certifications' | 'courses'>('certifications');
  const [selectedCert, setSelectedCert] = useState<{ src: string; title: string; issuer: string } | null>(null);

  const edu = PROFILE.education[0];

  return (
    <section id="education" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">05 — Credentials</span>
        <h2 className="section-title">
          Education &amp; Certifications
        </h2>
        <p className="section-subtitle">
          Academic foundations in Computer Science &amp; AI from Cairo University alongside specialized industry programs.
        </p>
      </motion.div>

      {/* Part A: Academic Degree Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-slate-800 relative overflow-hidden shadow-xl"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#151B27] border border-slate-800 flex items-center justify-center text-[#5EEAD4] shrink-0">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
                {edu.degree}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1.5 text-sm text-slate-300">
                <span className="font-semibold text-white">{edu.institution}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-[#5EEAD4] font-medium">Specialization: {edu.specialization}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151B27] border border-slate-800 text-xs font-mono text-slate-300 w-fit">
            <Calendar size={14} className="text-[#5EEAD4]" />
            <span>{edu.period}</span>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-4xl">
          {edu.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {edu.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
              <CheckCircle2 size={15} className="text-[#34D399] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{highlight}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Part B: Industry Certifications & Specialized Courses */}
      <div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
              Professional Credentials
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click any certificate card to inspect the verified credential.
            </p>
          </div>

          {/* Toggle between Certifications and Courses */}
          <div className="inline-flex p-1 rounded-xl bg-[#0E121B] border border-slate-800">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'certifications'
                  ? 'bg-[#151B27] text-[#5EEAD4] border border-slate-700 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award size={14} />
              <span>Certificates ({PROFILE.certifications.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'courses'
                  ? 'bg-[#151B27] text-[#5EEAD4] border border-slate-700 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen size={14} />
              <span>Specializations ({PROFILE.courses.length})</span>
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'certifications' ? (
            <motion.div
              key="certs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {PROFILE.certifications.map((cert) => (
                <div
                  key={cert.title}
                  onClick={() => cert.image && setSelectedCert({ src: cert.image, title: cert.title, issuer: cert.issuer })}
                  className="p-6 rounded-3xl bg-[#0E121B] border border-slate-800 hover:border-[#5EEAD4]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Cert Image Thumbnail */}
                    {cert.image && (
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black border border-slate-800 mb-4 group-hover:scale-[1.02] transition-transform">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" 
                        />
                        <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#070A12]/80 text-[#5EEAD4] backdrop-blur-md">
                          <Maximize2 size={13} />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                      <span className="text-[#5EEAD4]">{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-[#5EEAD4] transition-colors leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded-md bg-[#151B27] text-[10px] text-slate-300 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {PROFILE.courses.map((course) => (
                <div
                  key={course.title}
                  onClick={() => course.badgeImage && setSelectedCert({ src: course.badgeImage, title: course.title, issuer: course.issuer })}
                  className="p-6 rounded-3xl bg-[#0E121B] border border-slate-800 hover:border-[#818CF8]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {course.badgeImage && (
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black border border-slate-800 mb-4 group-hover:scale-[1.02] transition-transform">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={course.badgeImage} 
                          alt={course.title} 
                          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" 
                        />
                        <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#070A12]/80 text-[#818CF8] backdrop-blur-md">
                          <Maximize2 size={13} />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                      <span className="text-[#818CF8]">{course.platform}</span>
                      <span>{course.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-[#818CF8] transition-colors leading-snug">
                      {course.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {course.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded-md bg-[#151B27] text-[10px] text-slate-300 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal for Full-Size Certificate Inspection */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0E121B] border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div>
                <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
                  {selectedCert.title}
                </h4>
                <span className="text-xs text-slate-400 font-mono">
                  Issued by {selectedCert.issuer}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-[#151B27] hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-auto flex items-center justify-center bg-black rounded-2xl p-2 border border-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedCert.src}
                alt={selectedCert.title}
                className="max-h-[68vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
