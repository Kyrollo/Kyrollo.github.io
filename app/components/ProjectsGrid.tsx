'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Github, 
  ExternalLink, 
  Layers, 
  Video, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { ProjectData, PROJECTS_DATA } from '../data/projectsData';

interface ProjectsGridProps {
  onSelectProject: (project: ProjectData) => void;
  onJumpToSlider: (project: ProjectData) => void;
}

export default function ProjectsGrid({ onSelectProject, onJumpToSlider }: ProjectsGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'RAG & Search',
    'Agentic AI & DevOps',
    'LLMOps & Security',
    'Local Inference & Fine-Tuning',
    'Multimodal & Vision',
  ];

  const filtered = PROJECTS_DATA.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesQuery = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Object.values(p.technologies).some((arr) => 
        arr.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesCat && matchesQuery;
  });

  return (
    <section id="projects" className="projects-grid-section">
      <div className="section-header-center">
        <span className="section-pill">Complete Architecture Catalog</span>
        <h2 className="section-title">
          All <span className="text-gradient-cyan">13 Production Platforms</span>
        </h2>
        <p className="section-subtitle">
          Full catalog of production-grade AI systems spanning GraphRAG, Multi-Agent Supervisors, LLM Firewalls, and Fine-Tuning Studios.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="catalog-controls-bar">
        {/* Search Input */}
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search by technology (e.g. LangGraph, Qdrant, FastAPI)..."
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

        {/* Category Pills */}
        <div className="catalog-category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="projects-cards-grid">
        {filtered.map((proj) => (
          <div key={proj.id} className="project-catalog-card">
            {/* Screenshot Thumbnail Preview */}
            <div className="card-media-preview" onClick={() => onSelectProject(proj)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={proj.screenshots[0]?.src}
                alt={proj.name}
                className="card-preview-img"
              />
              <div className="preview-overlay">
                <span className="preview-label">Explore Case Study</span>
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

            {/* Card Content */}
            <div className="card-content-body">
              <div className="card-category-row">
                <span className="card-category-text">{proj.category}</span>
                <span className="card-screenshots-count">
                  {proj.screenshots.length} Screenshots • 1080p Video
                </span>
              </div>

              <h3 className="card-project-title" onClick={() => onSelectProject(proj)}>
                {proj.name}
              </h3>
              <p className="card-project-subtitle">{proj.subtitle}</p>

              <p className="card-project-desc">{proj.summary}</p>

              {/* Metrics Row */}
              <div className="card-metrics-row">
                {Object.entries(proj.metrics).slice(0, 3).map(([mk, mv]) => (
                  <div key={mk} className="card-metric-pill">
                    <span className="metric-k">{mk}:</span>
                    <span className="metric-v">{mv}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="card-tech-chips">
                {[...proj.technologies.ai_ml.slice(0, 2), ...proj.technologies.backend.slice(0, 2), ...proj.technologies.data_storage.slice(0, 1)].map((tech) => (
                  <span key={tech} className="tech-chip-small">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="card-footer-actions">
              <button
                className="btn-card-study"
                onClick={() => onSelectProject(proj)}
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

      {filtered.length === 0 && (
        <div className="no-results-box">
          <p>No platforms match &quot;{searchQuery}&quot;.</p>
          <button
            className="btn-clear-filter"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}
