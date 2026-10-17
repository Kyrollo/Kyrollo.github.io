'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Github, 
  Layers, 
  Video, 
  Image as ImageIcon, 
  Activity, 
  Maximize2, 
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Cpu,
  Zap,
  Info
} from 'lucide-react';
import { ProjectData, PROJECTS_DATA } from '../data/projectsData';
import Lightbox from './Lightbox';

interface ProjectSliderProps {
  onOpenModal: (project: ProjectData) => void;
}

export default function ProjectSlider({ onOpenModal }: ProjectSliderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'screenshots' | 'architecture' | 'tech'>('video');
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const categories = [
    'All',
    'RAG & Search',
    'Agentic AI & DevOps',
    'LLMOps & Security',
    'Local Inference & Fine-Tuning',
    'Multimodal & Vision',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setActiveScreenshotIdx(0);
  }, [selectedCategory]);

  const currentProject = filteredProjects[currentIndex] || PROJECTS_DATA[0];

  // Auto-play timer
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

  return (
    <section id="slider" className="project-slider-section">
      <div className="section-header-center">
        <span className="section-pill">Interactive Showcase</span>
        <h2 className="section-title">
          Featured <span className="text-gradient-cyan">AI Platforms</span> Showcase
        </h2>
        <p className="section-subtitle">
          Explore all 13 systems through high-definition video demonstrations, real screenshot galleries, architectural flowcharts, and source repositories.
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

      {/* Main Showcase Slider Card */}
      <div className="slider-showcase-card">
        {/* Card Header Bar */}
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
            {/* Auto Play Toggle */}
            <button
              className={`slider-autoplay-btn ${isPlaying ? 'playing' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause Auto-Play' : 'Start Auto-Play'}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              <span>{isPlaying ? 'Auto-Advancing' : 'Auto-Play'}</span>
            </button>

            {/* Slider Counter */}
            <div className="slider-counter">
              <span className="current-num">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="sep">/</span>
              <span className="total-num">{String(filteredProjects.length).padStart(2, '0')}</span>
            </div>

            {/* Navigation Arrows */}
            <div className="slider-arrow-group">
              <button className="slider-nav-btn" onClick={handlePrev} aria-label="Previous Project">
                <ChevronLeft size={20} />
              </button>
              <button className="slider-nav-btn" onClick={handleNext} aria-label="Next Project">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Media Tab Selector */}
        <div className="slider-media-tabs">
          <button
            className={`media-tab-btn ${activeMediaTab === 'video' ? 'active' : ''}`}
            onClick={() => setActiveMediaTab('video')}
          >
            <Video size={16} />
            <span>1080p Video Demo</span>
          </button>
          <button
            className={`media-tab-btn ${activeMediaTab === 'screenshots' ? 'active' : ''}`}
            onClick={() => setActiveMediaTab('screenshots')}
          >
            <ImageIcon size={16} />
            <span>Screenshots ({currentProject.screenshots.length})</span>
          </button>
          <button
            className={`media-tab-btn ${activeMediaTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveMediaTab('architecture')}
          >
            <Layers size={16} />
            <span>System Architecture</span>
          </button>
          <button
            className={`media-tab-btn ${activeMediaTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveMediaTab('tech')}
          >
            <Activity size={16} />
            <span>Tech Stack & Metrics</span>
          </button>
        </div>

        {/* Media Stage */}
        <div className="slider-media-stage">
          {/* TAB 1: 1080p Video Demo */}
          {activeMediaTab === 'video' && (
            <div className="video-player-container">
              <video
                key={currentProject.demoVideo}
                src={currentProject.demoVideo}
                poster={currentProject.screenshots[0]?.src}
                controls
                playsInline
                className="project-video-element"
              >
                Your browser does not support the video tag.
              </video>
              <div className="video-player-overlay-tag">
                <span className="dot-red" />
                <span>1080p Recorded Session</span>
              </div>
            </div>
          )}

          {/* TAB 2: Screenshots Gallery */}
          {activeMediaTab === 'screenshots' && (
            <div className="screenshot-gallery-container">
              {/* Main Displayed Screenshot */}
              <div className="screenshot-main-viewport" onClick={() => setIsLightboxOpen(true)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentProject.screenshots[activeScreenshotIdx]?.src}
                  alt={currentProject.screenshots[activeScreenshotIdx]?.title}
                  className="screenshot-main-img"
                />
                <button
                  className="btn-zoom-lightbox"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  title="Click to Zoom Fullscreen"
                >
                  <Maximize2 size={16} />
                  <span>Click to Zoom</span>
                </button>
                <div className="screenshot-caption-bar">
                  <span className="shot-title">
                    {currentProject.screenshots[activeScreenshotIdx]?.title}
                  </span>
                  <span className="shot-index">
                    {activeScreenshotIdx + 1} of {currentProject.screenshots.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="screenshot-thumbnail-strip">
                {currentProject.screenshots.map((shot, sIdx) => (
                  <button
                    key={sIdx}
                    className={`thumb-item ${activeScreenshotIdx === sIdx ? 'active' : ''}`}
                    onClick={() => setActiveScreenshotIdx(sIdx)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={shot.src} alt={shot.title} className="thumb-img" />
                    <span className="thumb-number">{sIdx + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: System Architecture */}
          {activeMediaTab === 'architecture' && (
            <div className="architecture-stage-container">
              <div className="arch-overview-box">
                <div className="arch-header">
                  <Layers size={18} className="text-cyan" />
                  <h4>System Dataflow & Pipeline Architecture</h4>
                </div>
                <p className="arch-text">{currentProject.architecture.overview}</p>
              </div>

              {/* Step Sequence Flow */}
              <div className="arch-stages-grid">
                {currentProject.architecture.stages.map((stage) => (
                  <div key={stage.step} className="arch-stage-card">
                    <span className="stage-step-num">{stage.step}</span>
                    <h5 className="stage-step-title">{stage.title}</h5>
                    <p className="stage-step-detail">{stage.detail}</p>
                  </div>
                ))}
              </div>

              {/* Data Flow Pipeline Sequence */}
              <div className="arch-flow-sequence">
                <span className="sequence-label">End-to-End Pipeline:</span>
                <div className="sequence-flow-row">
                  {currentProject.architecture.diagramFlow.map((step, fIdx) => (
                    <React.Fragment key={fIdx}>
                      <span className="sequence-chip">{step}</span>
                      {fIdx < currentProject.architecture.diagramFlow.length - 1 && (
                        <span className="sequence-arrow">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Tech Stack & Metrics */}
          {activeMediaTab === 'tech' && (
            <div className="tech-stage-container">
              {/* Metrics Grid */}
              <div className="metrics-showcase-grid">
                {Object.entries(currentProject.metrics).map(([metricKey, metricVal]) => (
                  <div key={metricKey} className="metric-showcase-card">
                    <span className="metric-showcase-label">{metricKey}</span>
                    <span className="metric-showcase-val">{metricVal}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Breakdown */}
              <div className="tech-categories-grid">
                <div className="tech-cat-box">
                  <span className="tech-cat-title">Frontend</span>
                  <div className="tech-chips-wrap">
                    {currentProject.technologies.frontend.map((t) => (
                      <span key={t} className="tech-chip blue">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="tech-cat-box">
                  <span className="tech-cat-title">Backend & Microservices</span>
                  <div className="tech-chips-wrap">
                    {currentProject.technologies.backend.map((t) => (
                      <span key={t} className="tech-chip green">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="tech-cat-box">
                  <span className="tech-cat-title">AI, LLMs & Retrieval</span>
                  <div className="tech-chips-wrap">
                    {currentProject.technologies.ai_ml.map((t) => (
                      <span key={t} className="tech-chip purple">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="tech-cat-box">
                  <span className="tech-cat-title">Data Storage & Vectors</span>
                  <div className="tech-chips-wrap">
                    {currentProject.technologies.data_storage.map((t) => (
                      <span key={t} className="tech-chip cyan">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="tech-cat-box">
                  <span className="tech-cat-title">DevOps, MLOps & Hardware</span>
                  <div className="tech-chips-wrap">
                    {currentProject.technologies.devops_infra.map((t) => (
                      <span key={t} className="tech-chip amber">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Problem Statement & Solution Callout */}
        <div className="slider-narrative-grid">
          <div className="narrative-box problem">
            <span className="narrative-tag text-rose">Core Problem Solved</span>
            <p className="narrative-text">{currentProject.problemStatement}</p>
          </div>
          <div className="narrative-box solution">
            <span className="narrative-tag text-emerald">Production Solution</span>
            <p className="narrative-text">{currentProject.solutionDetails}</p>
          </div>
        </div>

        {/* Card Action Footer */}
        <div className="slider-action-footer">
          <div className="action-buttons-left">
            <a
              href={currentProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github-repo"
              title="Inspect Source Code on GitHub"
            >
              <Github size={18} />
              <span>View on GitHub</span>
              <ExternalLink size={14} />
            </a>

            <button
              className="btn-deep-dive"
              onClick={() => onOpenModal(currentProject)}
            >
              <Info size={16} />
              <span>Full Case Study & Architecture</span>
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="slider-dots-group">
            {filteredProjects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                className={`slider-dot ${currentIndex === dotIdx ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(dotIdx);
                  setActiveScreenshotIdx(0);
                }}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for Zooming Screenshots */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={currentProject.screenshots}
        currentIndex={activeScreenshotIdx}
        onNavigate={(newIdx) => setActiveScreenshotIdx(newIdx)}
      />
    </section>
  );
}
