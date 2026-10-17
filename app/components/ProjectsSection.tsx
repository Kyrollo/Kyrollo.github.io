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
  ExternalLink,
  Sparkles,
  Search,
  ArrowUpRight,
  Code2,
  Layers,
  Activity
} from 'lucide-react';
import { ProjectData, PROJECTS_DATA } from '../data/projectsData';
import Lightbox from './Lightbox';

interface ProjectsSectionProps {
  onOpenModal: (project: ProjectData) => void;
}

export default function ProjectsSection({ onOpenModal }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'screenshots' | 'architecture' | 'tech'>('video');
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const showcaseRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'RAG & Search',
    'Agentic AI & DevOps',
    'LLMOps & Security',
    'Local Inference & Fine-Tuning',
    'Multimodal & Vision',
  ];

  // Projects filtered by category
  const categoryFiltered = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Search filtered projects
  const searchFiltered = categoryFiltered.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      Object.values(p.technologies).some((arr) => 
        arr.some((t) => t.toLowerCase().includes(q))
      )
    );
  });

  // Current project for the showcase
  const currentProject = categoryFiltered[currentIndex] || PROJECTS_DATA[0];

  useEffect(() => {
    setCurrentIndex(0);
    setActiveScreenshotIdx(0);
  }, [selectedCategory]);

  // Auto-play timer for showcase
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categoryFiltered.length);
      setActiveScreenshotIdx(0);
    }, 10000);
    return () => clearInterval(interval);
  }, [isPlaying, categoryFiltered.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categoryFiltered.length) % categoryFiltered.length);
    setActiveScreenshotIdx(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categoryFiltered.length);
    setActiveScreenshotIdx(0);
  };

  const handleSelectFromGrid = (proj: ProjectData) => {
    const idx = categoryFiltered.findIndex((p) => p.id === proj.id);
    if (idx !== -1) {
      setCurrentIndex(idx);
    } else {
      setSelectedCategory('All');
      const allIdx = PROJECTS_DATA.findIndex((p) => p.id === proj.id);
      setCurrentIndex(allIdx !== -1 ? allIdx : 0);
    }
    setActiveScreenshotIdx(0);
    if (showcaseRef.current) {
      showcaseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="projects" className="projects-unified-section">
      {/* Section Header */}
      <div className="section-header-center">
        <span className="section-pill">Portfolio Showcase</span>
        <h2 className="section-title">
          Featured <span className="text-gradient-cyan">Projects</span>
        </h2>
        <p className="section-subtitle">
          Production AI systems spanning Enterprise Hybrid RAG, Multi-Agent Orchestration, LLM Guardrails, and Distributed Inference.
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

      {/* Active Interactive Showcase */}
      <div ref={showcaseRef} className="slider-showcase-card">
        {/* Showcase Header */}
        <div className="slider-card-header">
          <div className="header-meta-left">
            <span
              className="tier-badge"
              style={{
                borderColor: currentProject.tier === 'Flagship' ? 'rgba(6, 182, 212, 0.4)' : 'rgba(139, 92, 246, 0.4)',
                color: currentProject.tier === 'Flagship' ? 'var(--cyan-400)' : 'var(--violet-400)',
                background: currentProject.tier === 'Flagship' ? 'rgba(6, 182, 212, 0.12)' : 'rgba(139, 92, 246, 0.12)',
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
              title={isPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              <span>{isPlaying ? 'Auto' : 'Auto-Play'}</span>
            </button>

            <div className="slider-counter">
              <span className="current-num">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="sep">/</span>
              <span className="total-num">{String(categoryFiltered.length).padStart(2, '0')}</span>
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

        {/* Showcase Body: Media + Information */}
        <div className="slider-card-body">
          {/* Left Media Stage */}
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

            {/* Media Content Display */}
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
                    <span className="tech-cat-label">AI / Machine Learning</span>
                    <div className="tech-pill-row">
                      {currentProject.technologies.ai_ml.map((t) => (
                        <span key={t} className="tech-tag-pill cyan">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="tech-category-group">
                    <span className="tech-cat-label">Backend & Services</span>
                    <div className="tech-pill-row">
                      {currentProject.technologies.backend.map((t) => (
                        <span key={t} className="tech-tag-pill emerald">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="tech-category-group">
                    <span className="tech-cat-label">Storage & Retrieval</span>
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
              <h4 className="info-panel-title">Overview & Problem Statement</h4>
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
      </div>

      {/* Catalog Search & Projects Grid */}
      <div className="catalog-search-header">
        <h3 className="catalog-subtitle">All Projects ({categoryFiltered.length})</h3>
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search projects by technology or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
              ×
            </button>
          )}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="projects-cards-grid">
        {searchFiltered.map((proj) => (
          <div key={proj.id} className="project-catalog-card">
            <div className="card-media-preview" onClick={() => handleSelectFromGrid(proj)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={proj.screenshots[0]?.src}
                alt={proj.name}
                className="card-preview-img"
              />
              <div className="preview-overlay">
                <span className="preview-label">View in Showcase</span>
              </div>
              <span
                className="card-tier-chip"
                style={{
                  background: proj.tier === 'Flagship' ? 'rgba(6, 182, 212, 0.9)' : 'rgba(139, 92, 246, 0.9)',
                }}
              >
                {proj.tier.toUpperCase()}
              </span>
            </div>

            <div className="card-content-body">
              <div className="card-category-row">
                <span className="card-category-text">{proj.category}</span>
                <span className="card-screenshots-count">
                  {proj.screenshots.length} Screenshots
                </span>
              </div>

              <h3 className="card-project-title" onClick={() => handleSelectFromGrid(proj)}>
                {proj.name}
              </h3>
              <p className="card-project-subtitle">{proj.subtitle}</p>
              <p className="card-project-desc">{proj.summary}</p>

              <div className="card-metrics-row">
                {Object.entries(proj.metrics).slice(0, 3).map(([mk, mv]) => (
                  <div key={mk} className="card-metric-pill">
                    <span className="metric-k">{mk}:</span>
                    <span className="metric-v">{mv}</span>
                  </div>
                ))}
              </div>

              <div className="card-tech-chips">
                {[...proj.technologies.ai_ml.slice(0, 2), ...proj.technologies.backend.slice(0, 2)].map((tech) => (
                  <span key={tech} className="tech-chip-small">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-footer-actions">
              <button
                className="btn-card-study"
                onClick={() => onOpenModal(proj)}
              >
                <span>Architecture & Case Study</span>
                <ArrowUpRight size={15} />
              </button>

              <a
                href={proj.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-github"
                title="Open Source Code in GitHub"
              >
                <Github size={17} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {searchFiltered.length === 0 && (
        <div className="no-results-box">
          <p>No projects match &quot;{searchQuery}&quot;.</p>
          <button
            className="btn-clear-filter"
            onClick={() => setSearchQuery('')}
          >
            Reset Search
          </button>
        </div>
      )}

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
