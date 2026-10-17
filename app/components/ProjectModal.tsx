'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Activity, 
  Image as ImageIcon, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck,
  Maximize2
} from 'lucide-react';
import { ProjectData } from '../data/projectsData';
import Lightbox from './Lightbox';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'screenshots' | 'tech' | 'metrics'>('architecture');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span
              className="tier-badge"
              style={{
                borderColor: project.tier === 'Flagship' ? 'rgba(6, 182, 212, 0.4)' : 'rgba(139, 92, 246, 0.4)',
                color: project.tier === 'Flagship' ? 'var(--cyan-400)' : 'var(--violet-400)',
                background: project.tier === 'Flagship' ? 'rgba(6, 182, 212, 0.12)' : 'rgba(139, 92, 246, 0.12)',
              }}
            >
              {project.tier.toUpperCase()} • {project.category}
            </span>
            <h2 className="modal-title">{project.name}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>

          <div className="modal-header-actions">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github-repo"
              title="Inspect Source Code on GitHub"
            >
              <Github size={17} />
              <span>View on GitHub</span>
              <ExternalLink size={13} />
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close Case Study">
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs-bar">
          <button
            className={`modal-tab ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            <Layers size={16} />
            <span>Architecture & Dataflow</span>
          </button>
          <button
            className={`modal-tab ${activeTab === 'screenshots' ? 'active' : ''}`}
            onClick={() => setActiveTab('screenshots')}
          >
            <ImageIcon size={16} />
            <span>Visual Evidence ({project.screenshots.length})</span>
          </button>
          <button
            className={`modal-tab ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            <Cpu size={16} />
            <span>Full Tech Stack</span>
          </button>
          <button
            className={`modal-tab ${activeTab === 'metrics' ? 'active' : ''}`}
            onClick={() => setActiveTab('metrics')}
          >
            <Activity size={16} />
            <span>Verified Benchmarks</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          {/* TAB 1: Architecture & Dataflow */}
          {activeTab === 'architecture' && (
            <div className="modal-content-section">
              <div className="modal-narrative-split">
                <div className="modal-narrative-box">
                  <h4 className="narrative-heading text-rose">Problem Formulation</h4>
                  <p className="narrative-body">{project.problemStatement}</p>
                </div>
                <div className="modal-narrative-box">
                  <h4 className="narrative-heading text-emerald">Production Solution</h4>
                  <p className="narrative-body">{project.solutionDetails}</p>
                </div>
              </div>

              <div className="modal-arch-overview">
                <h4 className="modal-subheading">System Architecture Overview</h4>
                <p className="modal-body-text">{project.architecture.overview}</p>
              </div>

              <div className="modal-stages-list">
                <h4 className="modal-subheading">Sequential Pipeline Stages</h4>
                <div className="stages-timeline">
                  {project.architecture.stages.map((stage) => (
                    <div key={stage.step} className="timeline-stage-item">
                      <div className="stage-step-circle">{stage.step}</div>
                      <div className="stage-step-content">
                        <h5>{stage.title}</h5>
                        <p>{stage.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-pipeline-strip">
                <span className="strip-title">Dataflow Execution Sequence:</span>
                <div className="strip-flow">
                  {project.architecture.diagramFlow.map((step, idx) => (
                    <span key={idx} className="strip-node">
                      {idx + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Full Screenshot Suite */}
          {activeTab === 'screenshots' && (
            <div className="modal-content-section">
              <div className="modal-screenshots-grid">
                {project.screenshots.map((shot, sIdx) => (
                  <div
                    key={sIdx}
                    className="modal-screenshot-card"
                    onClick={() => {
                      setLightboxIndex(sIdx);
                      setLightboxOpen(true);
                    }}
                  >
                    <div className="shot-img-wrapper">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={shot.src} alt={shot.title} className="shot-img" />
                      <div className="shot-overlay">
                        <Maximize2 size={20} />
                        <span>Click to Enlarge</span>
                      </div>
                    </div>
                    <div className="shot-info">
                      <h5 className="shot-title">{shot.title}</h5>
                      <p className="shot-desc">{shot.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Full Tech Stack */}
          {activeTab === 'tech' && (
            <div className="modal-content-section">
              <div className="modal-tech-grid">
                <div className="modal-tech-group">
                  <h5>Frontend & Interface</h5>
                  <div className="tech-tags-list">
                    {project.technologies.frontend.map((t) => (
                      <span key={t} className="tech-tag blue">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-tech-group">
                  <h5>Backend Architecture & APIs</h5>
                  <div className="tech-tags-list">
                    {project.technologies.backend.map((t) => (
                      <span key={t} className="tech-tag green">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-tech-group">
                  <h5>AI, LLMs & Retrieval Engines</h5>
                  <div className="tech-tags-list">
                    {project.technologies.ai_ml.map((t) => (
                      <span key={t} className="tech-tag purple">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-tech-group">
                  <h5>Databases & Vector Stores</h5>
                  <div className="tech-tags-list">
                    {project.technologies.data_storage.map((t) => (
                      <span key={t} className="tech-tag cyan">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-tech-group">
                  <h5>DevOps, MLOps & Hardware</h5>
                  <div className="tech-tags-list">
                    {project.technologies.devops_infra.map((t) => (
                      <span key={t} className="tech-tag amber">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Verified Benchmarks */}
          {activeTab === 'metrics' && (
            <div className="modal-content-section">
              <div className="modal-metrics-grid">
                {Object.entries(project.metrics).map(([k, v]) => (
                  <div key={k} className="modal-metric-card">
                    <span className="metric-label">{k}</span>
                    <span className="metric-value">{v}</span>
                    <span className="metric-check">
                      <CheckCircle2 size={14} className="text-emerald" /> Verified in Pytest Suite
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span className="footer-repo-label">
            Source repository on GitHub: <strong>{project.repo}</strong>
          </span>
          <div className="footer-actions">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github-repo"
            >
              <Github size={16} />
              <span>Open in GitHub</span>
              <ExternalLink size={13} />
            </a>
            <button className="btn-secondary" onClick={onClose}>
              Close Window
            </button>
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={project.screenshots}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
