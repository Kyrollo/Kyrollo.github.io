'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Sparkles, Star } from 'lucide-react';
import { ProjectData, PROJECTS_DATA } from '../data/projectsData';
import TechLogo from './TechLogo';

interface ProjectsSectionProps {
  onOpenModal?: (project: ProjectData) => void;
}

export default function ProjectsSection({ onOpenModal }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'RAG & Search',
    'Agentic AI & DevOps',
    'LLMOps & Security',
    'Local Inference & Fine-Tuning',
    'Multimodal & Vision',
  ];

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // When 'All' is selected, separate the top 2 featured (FixedRAG & TaskTune)
  const isAll = selectedCategory === 'All';
  const featuredProjects = isAll ? filteredProjects.slice(0, 2) : [];
  const standardProjects = isAll ? filteredProjects.slice(2) : filteredProjects;

  return (
    <section id="projects" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">02 — Featured Work</span>
        <h2 className="section-title">
          Production AI Platforms
        </h2>
        <p className="section-subtitle">
          13 complete software platforms with authentic benchmark metrics, automated CI pipelines, and real datasets.
        </p>
      </motion.div>

      {/* Category Filter Pills (No Bento/Slider toggle) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-[#5EEAD4] text-[#070A12] font-semibold shadow-lg shadow-[#5EEAD4]/20'
                : 'bg-[#0E121B] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat} {cat === 'All' ? `(${PROJECTS_DATA.length})` : ''}
          </button>
        ))}
      </div>

      {/* Featured Flagship Grid (FixedRAG & TaskTune side by side) */}
      {isAll && featuredProjects.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Star size={16} className="text-[#FBBF24] fill-[#FBBF24]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 font-mono">
              Featured Flagships
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => {
              const metricsEntries = Object.entries(project.metrics).slice(0, 3);
              const allTech = [
                ...project.technologies.backend.slice(0, 2),
                ...project.technologies.ai_ml.slice(0, 3),
              ];

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className="group relative rounded-3xl bg-[#0E121B] border border-slate-800/90 hover:border-[#5EEAD4]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1.5"
                >
                  <div>
                    {/* Cover Screenshot Container with Badges */}
                    <div 
                      className="relative aspect-[16/9] w-full overflow-hidden bg-[#070A12] border-b border-slate-800/80"
                      style={{ aspectRatio: '16/9', maxHeight: '360px', width: '100%' }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.screenshots[0]?.src || '/media/placeholder.png'}
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E121B] via-transparent to-transparent opacity-80" />

                      {/* Featured Amber Ribbon */}
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBBF24]/15 border border-[#FBBF24]/40 text-[#FBBF24] text-xs font-semibold backdrop-blur-md">
                        <Star size={12} className="fill-[#FBBF24]" />
                        <span>Featured Flagship</span>
                      </div>

                      {/* Category Pill */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#070A12]/80 border border-slate-700 text-slate-300 text-xs font-mono backdrop-blur-md">
                        {project.category}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <h4 className="text-2xl font-bold text-white font-['Space_Grotesk'] group-hover:text-[#5EEAD4] transition-colors">
                          {project.name}
                        </h4>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#151B27] border border-transparent hover:border-slate-700 transition-colors shrink-0"
                          title="View GitHub Repository"
                          aria-label="GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      </div>

                      <p className="text-sm font-medium text-slate-300 mb-3">
                        {project.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                        {project.summary}
                      </p>

                      {/* Recruiter Verified Metrics Grid */}
                      <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#070A12]/70 border border-slate-800/80 mb-6">
                        {metricsEntries.map(([label, val]) => (
                          <div key={label} className="flex flex-col">
                            <span className="text-sm sm:text-base font-extrabold text-[#5EEAD4] font-['Space_Grotesk']">
                              {val}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium truncate">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Logos */}
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        {allTech.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#151B27] border border-slate-800 text-[11px] text-slate-300"
                          >
                            <TechLogo name={tech} size={14} />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                    <Link
                      href={`/projects/${project.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#151B27] hover:bg-[#5EEAD4] text-slate-200 hover:text-[#070A12] text-sm font-semibold border border-slate-700/80 hover:border-[#5EEAD4] transition-all duration-200 group/link"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Standard Projects Grid (3 columns) */}
      <div>
        {isAll && (
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
              All Platforms ({standardProjects.length})
            </h3>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {standardProjects.map((project, idx) => {
              const metricsEntries = Object.entries(project.metrics).slice(0, 2);
              const stackSummary = [
                ...project.technologies.backend.slice(0, 2),
                ...project.technologies.ai_ml.slice(0, 2),
              ];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group rounded-3xl bg-[#0E121B] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    {/* Thumbnail */}
                    <div 
                      className="relative aspect-[16/10] w-full overflow-hidden bg-[#070A12] border-b border-slate-800/80"
                      style={{ aspectRatio: '16/10', maxHeight: '220px', width: '100%' }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.screenshots[0]?.src || '/media/placeholder.png'}
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#070A12]/80 border border-slate-700 text-slate-300 text-[11px] font-mono backdrop-blur-md">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <h4 className="text-lg font-bold text-white font-['Space_Grotesk'] group-hover:text-[#5EEAD4] transition-colors truncate">
                          {project.name}
                        </h4>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-white transition-colors"
                          title="GitHub Repository"
                          aria-label="GitHub Repository"
                        >
                          <Github size={16} />
                        </a>
                      </div>

                      <p className="text-xs text-slate-300 font-medium mb-3 line-clamp-1">
                        {project.subtitle}
                      </p>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {project.summary}
                      </p>

                      {/* 2 Key Metrics */}
                      <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#070A12]/60 border border-slate-800/60 mb-4">
                        {metricsEntries.map(([k, v]) => (
                          <div key={k} className="flex flex-col">
                            <span className="text-xs font-bold text-[#5EEAD4] font-mono">{v}</span>
                            <span className="text-[10px] text-slate-400 truncate">{k}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {stackSummary.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#151B27] border border-slate-800 text-[10px] text-slate-300"
                          >
                            <TechLogo name={tech} size={12} />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="p-5 sm:p-6 pt-0">
                    <Link
                      href={`/projects/${project.id}`}
                      className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-[#151B27]/80 hover:bg-[#5EEAD4] text-xs font-semibold text-slate-200 hover:text-[#070A12] border border-slate-800 hover:border-[#5EEAD4] transition-all duration-200 group/btn"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
