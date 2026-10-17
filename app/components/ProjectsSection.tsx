'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Github, 
  Video, 
  Image as ImageIcon, 
  Maximize2, 
  Sparkles,
  ArrowUpRight,
  Code2,
  Layers,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { ProjectData, PROJECTS_DATA } from '../data/projectsData';
import Lightbox from './Lightbox';

interface ProjectsSectionProps {
  onOpenModal: (project: ProjectData) => void;
}

export default function ProjectsSection({ onOpenModal }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'screenshots' | 'architecture' | 'tech'>('video');
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const showcaseRef = useRef<HTMLDivElement>(null);
  const thumbsTrackRef = useRef<HTMLDivElement>(null);

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

  // Active project
  const currentProject = filteredProjects[currentIndex] || PROJECTS_DATA[0];

  useEffect(() => {
    setCurrentIndex(0);
    setActiveScreenshotIdx(0);
  }, [selectedCategory]);

  // Auto-advance timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
      setActiveScreenshotIdx(0);
    }, 9000);
    return () => clearInterval(interval);
  }, [isPlaying, filteredProjects.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    setActiveScreenshotIdx(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    setActiveScreenshotIdx(0);
  };

  const handleSelectThumb = (idx: number) => {
    setCurrentIndex(idx);
    setActiveScreenshotIdx(0);
    if (showcaseRef.current) {
      showcaseRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="projects" className="projects-unified-section">
      {/* Section Header */}
      <div className="section-header-center">
        <span className="section-pill">Interactive Project Slider</span>
        <h2 className="section-title">
          All <span className="text-gradient-cyan">Projects (13)</span>
        </h2>
        <p className="section-subtitle">
          Explore all 13 production machine learning platforms, multi-agent systems, and enterprise RAG engines.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="slider-category-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat} {cat === 'All' ? `(${PROJECTS_DATA.length})` : ''}
          </button>
        ))}
      </div>

      {/* Main Interactive Project Slider Card */}
      <div ref={showcaseRef} className="slider-showcase-card">
        {/* Slider Card Header */}
        <div className="slider-card-header">
          <div className="header-meta-left">
            <span
              className="tier-badge"
              style={{
                borderColor: currentProject.tier === 'Flagship' ? 'rgba(14, 165, 233, 0.4)' : 'rgba(139, 92, 246, 0.4)',
                color: currentProject.tier === 'Flagship' ? 'var(--cyan-400)' : 'var(--violet-400)',
                background: currentProject.tier === 'Flagship' ? 'rgba(14, 165, 233, 0.12)' : 'rgba(139, 92, 246, 0.12)',
              }}
            >
              {currentProject.tier.toUpperCase()} • {currentProject.category}
            </span>
            <h3 className="slider-project-name">{currentProject.name}</h3>
            <span className="slider-project-subtitle">{currentProject.subtitle}</span>
          </div>

          <div className="header-meta-right">
            <button
              className={`slider-autoplay-btn ${isPlaying ? 'playing' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause Auto-Advance' : 'Start Auto-Advance'}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              <span>{isPlaying ? 'Auto-Advancing' : 'Auto-Play'}</span>
            </button>

            <div className="slider-counter">
              <span className="current-num">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="sep">/</span>
              <span className="total-num">{String(filteredProjects.length).padStart(2, '0')}</span>
            </div>

            <div className="slider-nav-arrows">
              <button className="slider-arrow-btn" onClick={handlePrev} aria-label="Previous Project">
                <ChevronLeft size={18} />
              </button>
              <button className="slider-arrow-btn" onClick={handleNext} aria-label="Next Project">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Card Body */}
        <div className="slider-card-body">
          {/* Media Stage */}
          <div className="slider-media-stage">
            <div className="media-tabs-bar">
              <button
                className={`media-tab-btn ${activeMediaTab === 'video' ? 'active' : ''}`}
                onClick={() => setActiveMediaTab('video')}
              >
                <Video size={15} />
                <span>Video Demo</span>
              </button>
              <button
                className={`media-tab-btn ${activeMediaTab === 'screenshots' ? 'active' : ''}`}
                onClick={() => setActiveMediaTab('screenshots')}
              >
                <ImageIcon size={15} />
                <span>Screenshots ({currentProject.screenshots.length})</span>
              </button>
              <button
                className={`media-tab-btn ${activeMediaTab === 'architecture' ? 'active' : ''}`}
                onClick={() => setActiveMediaTab('architecture')}
              >
                <Layers size={15} />
                <span>Architecture</span>
              </button>
              <button
                className={`media-tab-btn ${activeMediaTab === 'tech' ? 'active' : ''}`}
                onClick={() => setActiveMediaTab('tech')}
              >
                <Code2 size={15} />
                <span>Tech Stack</span>
              </button>
            </div>

            <div className="media-display-container">
              {activeMediaTab === 'video' && (
                <div className="video-player-wrap">
                  <video
                    key={currentProject.demoVideo}
                    src={currentProject.demoVideo}
                    controls
                    playsInline
                    className="showcase-video-elem"
                    poster={currentProject.screenshots[0]?.src}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-caption-bar">
                    <span className="video-caption-text">
                      Interactive Walkthrough: {currentProject.name}
                    </span>
                  </div>
                </div>
              )}

              {activeMediaTab === 'screenshots' && (
                <div className="screenshots-viewer-wrap">
                  <div className="screenshot-main-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentProject.screenshots[activeScreenshotIdx]?.src || currentProject.screenshots[0]?.src}
                      alt={currentProject.screenshots[activeScreenshotIdx]?.title || currentProject.name}
                      className="screenshot-preview-img"
                    />
                    <button
                      className="lightbox-trigger-btn"
                      onClick={() => setIsLightboxOpen(true)}
                      title="View Full Resolution Image"
                    >
                      <Maximize2 size={16} />
                    </button>
                    <div className="screenshot-meta-badge">
                      <span className="meta-title">
                        {currentProject.screenshots[activeScreenshotIdx]?.title}
                      </span>
                      <span className="meta-desc">
                        {currentProject.screenshots[activeScreenshotIdx]?.description}
                      </span>
                    </div>
                  </div>

                  <div className="screenshots-thumb-strip">
                    {currentProject.screenshots.map((shot, idx) => (
                      <button
                        key={idx}
                        className={`thumb-btn ${idx === activeScreenshotIdx ? 'active' : ''}`}
                        onClick={() => setActiveScreenshotIdx(idx)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={shot.src} alt={shot.title} className="thumb-img" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeMediaTab === 'architecture' && (
                <div className="architecture-diagram-wrap">
                  <div className="arch-flowchart-card">
                    <h4 className="arch-card-title">System Architecture & Pipeline Flow</h4>
                    <p className="arch-card-desc">{currentProject.architecture.overview}</p>
                    <div className="arch-components-grid">
                      {currentProject.architecture.stages.map((stage, i) => (
                        <div key={i} className="arch-component-pill">
                          <span className="comp-name">{stage.step}: {stage.title}</span>
                          <span className="comp-role">{stage.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeMediaTab === 'tech' && (
                <div className="tech-stack-viewer-wrap">
                  <div className="tech-category-group">
                    <span className="tech-cat-label">AI & Machine Learning</span>
                    <div className="tech-pill-row">
                      {currentProject.technologies.ai_ml.map((t) => (
                        <span key={t} className="tech-tag-pill cyan">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="tech-category-group">
                    <span className="tech-cat-label">Backend & Cloud Architecture</span>
                    <div className="tech-pill-row">
                      {currentProject.technologies.backend.map((t) => (
                        <span key={t} className="tech-tag-pill emerald">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="tech-category-group">
                    <span className="tech-cat-label">Databases & Storage</span>
                    <div className="tech-pill-row">
                      {currentProject.technologies.data_storage.map((t) => (
                        <span key={t} className="tech-tag-pill violet">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Information Panel */}
          <div className="slider-info-panel">
            <div className="info-summary-block">
              <h4 className="info-panel-title">Overview & Architecture</h4>
              <p className="info-summary-text">{currentProject.summary}</p>
            </div>

            <div className="info-metrics-block">
              <h4 className="info-panel-title">Production Benchmarks</h4>
              <div className="metrics-pills-grid">
                {Object.entries(currentProject.metrics).map(([mk, mv]) => (
                  <div key={mk} className="metric-box">
                    <span className="metric-val">{mv}</span>
                    <span className="metric-key">{mk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-actions-block">
              <button
                className="btn-deepdive-modal"
                onClick={() => onOpenModal(currentProject)}
              >
                <span>Explore Full Case Study</span>
                <ArrowUpRight size={17} />
              </button>

              <a
                href={currentProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github-repo"
                title="View Source on GitHub"
              >
                <Github size={18} />
                <span>GitHub Source</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project Thumbnail Navigation Track */}
        <div className="slider-thumbnails-track-wrap">
          <div className="track-header">
            <span className="track-title">Select from Project Track ({filteredProjects.length})</span>
            <span className="track-hint">Click any platform to slide directly</span>
          </div>

          <div ref={thumbsTrackRef} className="slider-thumbnails-track">
            {filteredProjects.map((p, idx) => (
              <button
                key={p.id}
                className={`thumb-card-btn ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => handleSelectThumb(idx)}
              >
                <div className="thumb-card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.screenshots[0]?.src} alt={p.name} className="thumb-card-img" />
                  <span className="thumb-card-index">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className="thumb-card-info">
                  <span className="thumb-card-name">{p.name}</span>
                  <span className="thumb-card-cat">{p.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <Lightbox
          isOpen={isLightboxOpen}
          images={currentProject.screenshots}
          currentIndex={activeScreenshotIdx}
          onClose={() => setIsLightboxOpen(false)}
          onNavigate={(newIdx) => setActiveScreenshotIdx(newIdx)}
        />
      )}
    </section>
  );
}
