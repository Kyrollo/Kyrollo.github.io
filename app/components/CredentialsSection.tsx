'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  Maximize2,
  X,
  Search,
  FileText,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';
import { PROFILE, CredentialItem } from '../data/profileData';

type FilterCategory = 'all' | 'featured' | 'coursera' | 'cisco' | 'ibm' | 'badges';

export default function CredentialsSection() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState<CredentialItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const edu = PROFILE.education[0];
  const allCredentials = PROFILE.credentials || [];

  // Responsive itemsPerPage tracking
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Filter and search logic
  const filteredCredentials = useMemo(() => {
    return allCredentials.filter((item) => {
      // Category filter
      let matchesCategory = true;
      if (selectedCategory === 'featured') {
        matchesCategory = !!item.featured;
      } else if (selectedCategory === 'coursera') {
        matchesCategory = item.category === 'coursera';
      } else if (selectedCategory === 'cisco') {
        matchesCategory = item.category === 'cisco';
      } else if (selectedCategory === 'ibm') {
        matchesCategory = item.category === 'ibm';
      } else if (selectedCategory === 'badges') {
        matchesCategory = !!item.badgeImage;
      }

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        item.title.toLowerCase().includes(q) ||
        item.issuer.toLowerCase().includes(q) ||
        item.skills.some((skill) => skill.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q)
      );

      return matchesCategory && matchesSearch;
    });
  }, [allCredentials, selectedCategory, searchQuery]);

  // Reset index whenever category or search changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredCredentials.length / itemsPerPage));
  const currentPage = Math.min(Math.floor(currentIndex / itemsPerPage), totalPages - 1);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => {
      const newIdx = prev - itemsPerPage;
      if (newIdx < 0) {
        // Wrap to last page
        const lastPageStart = (totalPages - 1) * itemsPerPage;
        return Math.max(0, lastPageStart);
      }
      return newIdx;
    });
  }, [itemsPerPage, totalPages]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => {
      const newIdx = prev + itemsPerPage;
      if (newIdx >= filteredCredentials.length) {
        // Wrap to first
        return 0;
      }
      return newIdx;
    });
  }, [itemsPerPage, filteredCredentials.length]);

  // Auto-swap player
  useEffect(() => {
    if (!isAutoPlaying || filteredCredentials.length <= itemsPerPage) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, handleNext, filteredCredentials.length, itemsPerPage]);

  const categoryCounts = useMemo(() => {
    return {
      all: allCredentials.length,
      featured: allCredentials.filter((c) => c.featured).length,
      coursera: allCredentials.filter((c) => c.category === 'coursera').length,
      cisco: allCredentials.filter((c) => c.category === 'cisco').length,
      ibm: allCredentials.filter((c) => c.category === 'ibm').length,
      badges: allCredentials.filter((c) => c.badgeImage).length,
    };
  }, [allCredentials]);

  // Sliced items for current visible window
  const visibleCards = useMemo(() => {
    return filteredCredentials.slice(currentIndex, currentIndex + itemsPerPage);
  }, [filteredCredentials, currentIndex, itemsPerPage]);

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

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
          Education &amp; Verified Credentials
        </h2>
        <p className="section-subtitle">
          Rigorous academic foundations in Computer Science &amp; AI alongside 30+ verified industry certifications, specializations, and digital badges.
        </p>
      </motion.div>

      {/* Part A: Academic Degree Card with Official Faculty Icon */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-slate-800 relative overflow-hidden shadow-xl"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-slate-800">
          <div className="flex items-start gap-4">
            {/* Cairo University / FCAI Official Seal */}
            <div className="w-16 h-16 rounded-2xl bg-[#151B27] border border-slate-800 flex items-center justify-center p-2 shrink-0 shadow-lg group-hover:border-[#5EEAD4]/60 transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={edu.logo || '/logos/cu.png'} 
                alt="Cairo University - FCAI" 
                className="w-full h-full object-contain filter drop-shadow-sm" 
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
                {edu.degree}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1.5 text-sm text-slate-300">
                <span className="font-semibold text-white">{edu.institution}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-[#5EEAD4] font-medium">Faculty of Computers &amp; Artificial Intelligence (FCAI-CU)</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-400 font-mono text-xs">Major: {edu.specialization}</span>
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

      {/* Part B: Interactive In-Place Certificate Swapper */}
      <div className="relative">
        {/* Controls Bar: Title & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5EEAD4] mb-1">
              <ShieldCheck size={16} />
              <span>Verified Accreditations Showcase</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
              Professional Certificates &amp; Digital Badges
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Swap through verified credentials directly in place without scrolling down the page.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by skill, title, issuer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#0E121B] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#5EEAD4]/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-white"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6 pb-2 border-b border-slate-800/60 overflow-x-auto">
          {[
            { id: 'all', label: 'All Credentials', count: categoryCounts.all },
            { id: 'featured', label: 'Featured & Core', count: categoryCounts.featured },
            { id: 'coursera', label: 'DeepLearning.AI / Stanford', count: categoryCounts.coursera },
            { id: 'cisco', label: 'Cisco & Python Institute', count: categoryCounts.cisco },
            { id: 'ibm', label: 'IBM SkillsBuild', count: categoryCounts.ibm },
            { id: 'badges', label: 'Digital Badges', count: categoryCounts.badges },
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as FilterCategory)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#151B27] text-[#5EEAD4] border border-[#5EEAD4]/40 shadow-sm shadow-[#5EEAD4]/10'
                    : 'bg-[#0E121B] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                  isActive ? 'bg-[#5EEAD4]/20 text-[#5EEAD4]' : 'bg-[#151B27] text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Swapper Navigation Header with Prev / Next & Progress */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              Showing <strong className="text-white">{filteredCredentials.length > 0 ? currentIndex + 1 : 0}–{Math.min(currentIndex + itemsPerPage, filteredCredentials.length)}</strong> of <strong className="text-[#5EEAD4]">{filteredCredentials.length}</strong>
              {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
            </span>

            {/* Auto-Swap Toggle */}
            {filteredCredentials.length > itemsPerPage && (
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
                  isAutoPlaying 
                    ? 'bg-[#5EEAD4]/20 text-[#5EEAD4] border border-[#5EEAD4]/40' 
                    : 'bg-[#151B27] text-slate-400 hover:text-white border border-slate-800'
                }`}
                title="Toggle Auto-Swap"
              >
                {isAutoPlaying ? <Pause size={12} /> : <Play size={12} />}
                <span>Auto-Swap</span>
              </button>
            )}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={filteredCredentials.length <= itemsPerPage}
              aria-label="Previous credentials"
              className="p-2.5 rounded-xl bg-[#0E121B] border border-slate-800 text-slate-300 hover:text-white hover:border-[#5EEAD4]/60 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-mono text-slate-500 px-1">
              {totalPages > 0 ? currentPage + 1 : 1} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={filteredCredentials.length <= itemsPerPage}
              aria-label="Next credentials"
              className="p-2.5 rounded-xl bg-[#0E121B] border border-slate-800 text-slate-300 hover:text-white hover:border-[#5EEAD4]/60 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* The In-Place Swapper Cards Container */}
        <div className="relative min-h-[460px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {filteredCredentials.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-12 text-center rounded-3xl bg-[#0E121B] border border-slate-800"
              >
                <Award size={40} className="mx-auto text-slate-600 mb-3" />
                <h4 className="text-base font-bold text-white mb-1">No credentials found</h4>
                <p className="text-xs text-slate-400 mb-4">No results matching your current query or category.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#151B27] border border-slate-700 text-xs text-[#5EEAD4] font-semibold hover:bg-slate-800 transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={`${selectedCategory}-${searchQuery}-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleCards.map((cert) => {
                  const isBadgeView = selectedCategory === 'badges';
                  const cardImage = isBadgeView && cert.badgeImage ? cert.badgeImage : (cert.image || cert.badgeImage);

                  return (
                    <div
                      key={cert.id}
                      onClick={() => setSelectedCert(cert)}
                      className="p-5 sm:p-6 rounded-3xl bg-[#0E121B] border border-slate-800 hover:border-[#5EEAD4]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-cyan-950/20"
                    >
                      <div>
                        {/* Image Thumbnail Showcase */}
                        <div className={`relative w-full rounded-2xl overflow-hidden border border-slate-800/80 mb-4 group-hover:scale-[1.01] transition-transform ${
                          isBadgeView ? 'aspect-[16/10] bg-gradient-to-b from-[#151B27] to-[#0A0D14] flex items-center justify-center p-4' : 'aspect-[16/10] bg-black'
                        }`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={cardImage} 
                            alt={cert.title} 
                            loading="lazy"
                            className={isBadgeView ? 'max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform' : 'w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity'} 
                          />
                          
                          {/* Overlay Badges */}
                          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                            {cert.pdfUrl && (
                              <span 
                                title="Verified PDF Available"
                                className="p-1.5 rounded-lg bg-[#070A12]/80 text-[#818CF8] border border-slate-800 backdrop-blur-md"
                              >
                                <FileText size={13} />
                              </span>
                            )}
                            <div className="p-1.5 rounded-lg bg-[#070A12]/80 text-[#5EEAD4] border border-slate-800 backdrop-blur-md">
                              <Maximize2 size={13} />
                            </div>
                          </div>

                          {cert.featured && (
                            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#5EEAD4]/20 border border-[#5EEAD4]/40 text-[#5EEAD4] text-[10px] font-mono font-semibold backdrop-blur-md flex items-center gap-1">
                              <Sparkles size={11} />
                              <span>Featured</span>
                            </div>
                          )}
                        </div>

                        {/* Issuer & Date */}
                        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                          <span className="text-[#5EEAD4] font-medium truncate max-w-[70%]" title={cert.issuer}>
                            {cert.issuer}
                          </span>
                          <span className="text-slate-500 shrink-0">{cert.date}</span>
                        </div>

                        {/* Title */}
                        <h4 className="text-base font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-[#5EEAD4] transition-colors leading-snug line-clamp-2">
                          {cert.title}
                        </h4>

                        {/* Description */}
                        <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                          {cert.description}
                        </p>
                      </div>

                      <div>
                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 mb-3">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <span key={skill} className="px-2 py-0.5 rounded-md bg-[#151B27] text-[10px] text-slate-300 font-mono">
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 3 && (
                            <span className="px-1.5 py-0.5 rounded-md bg-[#151B27] text-[10px] text-slate-500 font-mono">
                              +{cert.skills.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center justify-between pt-2 text-xs font-semibold text-slate-400 group-hover:text-slate-200">
                          <span className="flex items-center gap-1 text-[#5EEAD4]">
                            Inspect Credential
                          </span>
                          {cert.pdfUrl && (
                            <span 
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(cert.pdfUrl, '_blank');
                              }}
                              className="flex items-center gap-1 text-slate-400 hover:text-white text-[11px] font-mono px-2 py-0.5 rounded bg-[#151B27] border border-slate-800 hover:border-slate-700 transition-colors"
                            >
                              <span>PDF</span>
                              <ExternalLink size={11} />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Dots for quick swapping */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-8">
            {Array.from({ length: totalPages }).map((_, pIdx) => (
              <button
                key={pIdx}
                onClick={() => {
                  setDirection(pIdx > currentPage ? 1 : -1);
                  setCurrentIndex(pIdx * itemsPerPage);
                }}
                aria-label={`Jump to page ${pIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  pIdx === currentPage
                    ? 'w-7 bg-gradient-to-r from-[#5EEAD4] to-[#818CF8]'
                    : 'w-2 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal for Full-Size Certificate / Badge Inspection */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0E121B] border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-800 mb-4 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#5EEAD4] mb-1">
                  <span>{selectedCert.issuer}</span>
                  <span className="text-slate-600">&bull;</span>
                  <span>{selectedCert.date}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk'] leading-snug">
                  {selectedCert.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {selectedCert.pdfUrl && (
                  <a
                    href={selectedCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#151B27] hover:bg-[#1E2638] text-xs font-semibold text-[#5EEAD4] border border-slate-700 transition-colors"
                  >
                    <FileText size={14} />
                    <span className="hidden sm:inline">Open Authentic PDF</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl bg-[#151B27] hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="flex-1 overflow-auto flex items-center justify-center bg-black/80 rounded-2xl p-3 border border-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedCert.image || selectedCert.badgeImage}
                alt={selectedCert.title}
                className="max-h-[62vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer Info & Skills */}
            <div className="pt-4 mt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skills.map((skill) => (
                  <span key={skill} className="px-2 py-0.5 rounded-md bg-[#151B27] text-[10px] text-[#5EEAD4] font-mono border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
              <span className="text-slate-500 font-mono text-[11px] shrink-0">
                Verified Credential Archive
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
