'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Maximize2, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Server, 
  Database, 
  Cloud,
  Code2,
  Image as ImageIcon,
  Video,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ProjectData, PROJECTS_DATA } from '../../data/projectsData';
import TechLogo from '../../components/TechLogo';
import Lightbox from '../../components/Lightbox';

interface ProjectDetailClientProps {
  project: ProjectData;
  prevProject: ProjectData;
  nextProject: ProjectData;
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'screenshots'>(
    project.demoVideo ? 'video' : 'screenshots'
  );
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const activeScreenshot = project.screenshots[activeScreenshotIdx] || project.screenshots[0];
  const accentColor = project.accentColor || '#5EEAD4';

  return (
    <div className="min-h-screen bg-[#070A12] text-[#E8ECF3] relative overflow-hidden font-['Inter']">
      {/* Dynamic Ambient Background Glow for this project */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentColor}15 0%, transparent 70%)`,
          filter: 'blur(90px)',
        }}
        aria-hidden="true"
      />

      {/* Top Floating / Sticky Header Bar */}
      <header className="sticky top-0 z-50 bg-[#070A12]/85 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center flex-wrap gap-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono" aria-label="Breadcrumb">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <ChevronRight size={13} className="text-slate-600" />
            <Link href="/#projects" className="text-slate-400 hover:text-white transition-colors">Projects</Link>
            <ChevronRight size={13} className="text-slate-600" />
            <span className="text-[#5EEAD4] font-semibold">{project.name}</span>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#0E121B] border border-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              <span>All Projects</span>
            </Link>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#5EEAD4] text-[#070A12] hover:bg-[#2DD4BF] transition-all shadow-md shadow-[#5EEAD4]/20"
            >
              <Github size={14} />
              <span>Source Code</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero Header Section */}
        <motion.section 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-2.5 mb-6 flex-wrap">
            <span 
              className="text-xs font-bold font-mono px-3 py-1 rounded-full border"
              style={{
                borderColor: `${accentColor}50`,
                color: accentColor,
                background: `${accentColor}12`,
              }}
            >
              {project.tier.toUpperCase()} PLATFORM
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0E121B] border border-slate-800 text-slate-300 font-mono">
              {project.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0E121B] border border-slate-800 text-slate-400">
              Benchmarked & Tested
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 font-['Space_Grotesk']">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl text-[#5EEAD4] font-medium mb-6 font-['Space_Grotesk']">
            {project.subtitle}
          </p>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {project.summary}
          </p>
        </motion.section>

        {/* Media Showcase: Video & Screenshot Gallery */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Tab Switcher */}
          <div className="flex items-center gap-3 mb-4">
            {project.demoVideo && (
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeMediaTab === 'video' 
                    ? 'bg-[#5EEAD4] text-[#070A12] shadow-lg shadow-[#5EEAD4]/20' 
                    : 'bg-[#0E121B] border border-slate-800 text-slate-400 hover:text-white'
                }`}
                onClick={() => setActiveMediaTab('video')}
              >
                <Video size={14} />
                <span>Video Walkthrough</span>
              </button>
            )}

            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeMediaTab === 'screenshots' 
                  ? 'bg-[#5EEAD4] text-[#070A12] shadow-lg shadow-[#5EEAD4]/20' 
                  : 'bg-[#0E121B] border border-slate-800 text-slate-400 hover:text-white'
              }`}
              onClick={() => setActiveMediaTab('screenshots')}
            >
              <ImageIcon size={14} />
              <span>Interactive Screenshots ({project.screenshots.length})</span>
            </button>
          </div>

          {/* Media Display Container */}
          <div className="rounded-3xl p-4 sm:p-6 bg-[#0E121B] border border-slate-800 overflow-hidden shadow-2xl">
            {activeMediaTab === 'video' && project.demoVideo ? (
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-slate-800">
                <video
                  key={project.demoVideo}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                  poster={project.screenshots[0]?.src}
                >
                  <source src={project.demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-[#070A12]/80 border border-slate-700 text-[#5EEAD4] backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    1080p Recorded Session
                  </span>
                </div>
              </div>
            ) : (
              <div>
                {/* Main Selected Screenshot in Device Frame */}
                <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#070A12]">
                  {/* Clean Window Chrome (Clean repository context, NO FAKE URL) */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#0E121B] border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <div className="text-xs font-mono text-slate-400 px-3 py-1 rounded-md bg-[#070A12] border border-slate-800 truncate max-w-md hidden sm:block">
                      {project.name} &bull; {activeScreenshot?.title}
                    </div>
                    <button
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                      onClick={() => setIsLightboxOpen(true)}
                      title="Expand Fullscreen"
                    >
                      <Maximize2 size={14} />
                      <span className="hidden sm:inline">Fullscreen</span>
                    </button>
                  </div>

                  {/* Screenshot Image */}
                  <div 
                    className="cursor-pointer relative group overflow-hidden bg-black"
                    onClick={() => setIsLightboxOpen(true)}
                    title="Click to view fullscreen lightbox"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeScreenshot?.src}
                      alt={activeScreenshot?.title}
                      className="w-full max-h-[600px] object-contain mx-auto"
                    />
                  </div>
                </div>

                {/* Screenshot Thumbnails Ribbon */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {project.screenshots.map((shot, idx) => (
                      <button
                        key={shot.src}
                        className={`flex-shrink-0 w-28 sm:w-36 rounded-xl overflow-hidden border-2 transition-all ${
                          activeScreenshotIdx === idx 
                            ? 'border-[#5EEAD4] shadow-md shadow-[#5EEAD4]/20 scale-[1.02]' 
                            : 'border-slate-800 opacity-60 hover:opacity-100'
                        }`}
                        onClick={() => setActiveScreenshotIdx(idx)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={shot.src} 
                          alt={shot.title} 
                          className="w-full h-16 sm:h-20 object-cover object-top" 
                        />
                        <div className="p-1.5 bg-[#0E121B] text-[10px] text-slate-300 truncate text-left">
                          {shot.title}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* Engineering Performance Metrics */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="section-eyebrow">Benchmarks</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
              Performance Metrics
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(project.metrics).map(([metricKey, metricVal]) => (
              <div 
                key={metricKey} 
                className="p-6 rounded-2xl bg-[#0E121B] border border-slate-800 flex flex-col justify-center"
              >
                <span className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-[#5EEAD4] mb-1">
                  {metricVal}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                  {metricKey}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Problem vs Solution */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="section-eyebrow">Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
              The Challenge &amp; Engineering Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* The Challenge */}
            <div className="p-8 rounded-3xl bg-[#0E121B] border border-rose-500/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500" />
                <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">The Engineering Challenge</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 rounded-3xl bg-[#0E121B] border border-[#5EEAD4]/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5EEAD4] shadow-sm shadow-[#5EEAD4]" />
                <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">The Engineered Solution</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.solutionDetails}
              </p>
            </div>
          </div>

          {/* Execution Pipeline (4 STAGES FIXED: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4) */}
          <div className="p-8 rounded-3xl bg-[#0E121B] border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk']">
              Core Execution Pipeline &amp; Dataflow
            </h3>
            <p className="text-sm text-slate-400 mb-8">{project.architecture.overview}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {project.architecture.stages.map((stage) => (
                <div key={stage.step} className="p-5 rounded-2xl bg-[#151B27] border border-slate-800 relative flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#5EEAD4]/10 border border-[#5EEAD4]/30 text-[#5EEAD4] w-fit mb-3">
                      Step {stage.step}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 font-['Space_Grotesk']">
                      {stage.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {stage.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dataflow Pills Sequence */}
            <div className="pt-6 border-t border-slate-800">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-3">
                End-to-End Dataflow:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {project.architecture.diagramFlow.map((flowItem, idx) => (
                  <React.Fragment key={flowItem}>
                    <span className="px-3 py-1.5 rounded-lg bg-[#151B27] border border-slate-800 text-xs font-mono text-[#5EEAD4]">
                      {flowItem}
                    </span>
                    {idx < project.architecture.diagramFlow.length - 1 && (
                      <ChevronRight size={14} className="text-slate-600 flex-shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Consolidated Technology Stack */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="section-eyebrow">Stack</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
              Technologies &amp; Infrastructure
            </h2>
          </div>

          <div className="p-8 rounded-3xl bg-[#0E121B] border border-slate-800 space-y-6">
            {project.technologies.backend && project.technologies.backend.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Server size={16} className="text-[#34D399]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                    Backend &amp; Services
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.backend.map((t) => (
                    <div key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151B27] border border-slate-800 text-xs text-slate-300">
                      <TechLogo name={t} size={15} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.ai_ml && project.technologies.ai_ml.length > 0 && (
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={16} className="text-[#5EEAD4]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                    AI Models, Vectors &amp; Agents
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.ai_ml.map((t) => (
                    <div key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151B27] border border-slate-800 text-xs text-slate-300">
                      <TechLogo name={t} size={15} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.data_storage && project.technologies.data_storage.length > 0 && (
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 mb-3">
                  <Database size={16} className="text-[#818CF8]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                    Data Storage &amp; Persistence
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.data_storage.map((t) => (
                    <div key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151B27] border border-slate-800 text-xs text-slate-300">
                      <TechLogo name={t} size={15} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.devops_infra && project.technologies.devops_infra.length > 0 && (
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 mb-3">
                  <Cloud size={16} className="text-[#FBBF24]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                    DevOps &amp; Infrastructure
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.devops_infra.map((t) => (
                    <div key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151B27] border border-slate-800 text-xs text-slate-300">
                      <TechLogo name={t} size={15} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.technologies.frontend && project.technologies.frontend.length > 0 && (
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 size={16} className="text-[#FB7185]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                    Frontend &amp; Interface
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.map((t) => (
                    <div key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#151B27] border border-slate-800 text-xs text-slate-300">
                      <TechLogo name={t} size={15} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* Project Navigation Footer (Prev / Next) */}
        <section className="mt-20 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Previous Project Card */}
            <Link 
              href={`/projects/${prevProject.id}`}
              className="p-6 rounded-2xl bg-[#0E121B] border border-slate-800 hover:border-[#5EEAD4]/50 flex justify-between items-center gap-4 group transition-all"
            >
              <div className="flex-1">
                <span className="flex items-center gap-1 text-xs font-mono text-[#5EEAD4] uppercase tracking-wider mb-1">
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  <span>Previous Platform</span>
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-[#5EEAD4] transition-colors font-['Space_Grotesk']">
                  {prevProject.name}
                </h4>
                <p className="text-xs text-slate-400 truncate max-w-xs">{prevProject.subtitle}</p>
              </div>
              <div className="w-20 h-16 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={prevProject.screenshots[0]?.src || '/media/placeholder.png'} 
                  alt={prevProject.name}
                  className="w-full h-full object-cover" 
                />
              </div>
            </Link>

            {/* Next Project Card */}
            <Link 
              href={`/projects/${nextProject.id}`}
              className="p-6 rounded-2xl bg-[#0E121B] border border-slate-800 hover:border-[#5EEAD4]/50 flex justify-between items-center gap-4 group transition-all"
            >
              <div className="flex-1 text-right">
                <span className="flex items-center justify-end gap-1 text-xs font-mono text-[#5EEAD4] uppercase tracking-wider mb-1">
                  <span>Next Platform</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-[#5EEAD4] transition-colors font-['Space_Grotesk']">
                  {nextProject.name}
                </h4>
                <p className="text-xs text-slate-400 truncate max-w-xs ml-auto">{nextProject.subtitle}</p>
              </div>
              <div className="w-20 h-16 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={nextProject.screenshots[0]?.src || '/media/placeholder.png'} 
                  alt={nextProject.name}
                  className="w-full h-full object-cover" 
                />
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#5EEAD4] text-[#070A12] text-sm font-semibold hover:bg-[#2DD4BF] transition-all shadow-lg shadow-[#5EEAD4]/20"
            >
              <ArrowLeft size={16} />
              <span>Back to All {PROJECTS_DATA.length} Platforms</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Lightbox for Fullscreen Screenshot Zoom */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={project.screenshots}
        currentIndex={activeScreenshotIdx}
        onNavigate={setActiveScreenshotIdx}
      />
    </div>
  );
}
