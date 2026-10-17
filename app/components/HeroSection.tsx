'use client';

import React from 'react';
import { 
  Cpu, 
  Download, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Terminal,
  Code2,
  Zap,
  MapPin
} from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function HeroSection() {
  const floatingChips = [
    { label: 'LangGraph Multi-Agent', icon: 'Bot', top: '8%', left: '-8%' },
    { label: 'Hybrid RAG (Vector+Graph)', icon: 'Layers', top: '35%', right: '-12%' },
    { label: 'FastAPI Monoliths', icon: 'Zap', bottom: '25%', left: '-10%' },
    { label: 'QLoRA on RTX A5000', icon: 'Cpu', bottom: '5%', right: '-5%' },
  ];

  return (
    <section className="hero-section-wrapper">
      <div className="hero-grid">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          {/* Availability & Hardware Badges */}
          <div className="hero-badge-group">
            <span className="badge-status">
              <span className="pulse-dot" />
              {PROFILE.relocation}
            </span>
            <span className="badge-hardware">
              <Cpu size={14} />
              {PROFILE.hardware}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-main-title">
            Architecting <span className="text-gradient-cyan">Autonomous AI Platforms</span> & Production <span className="text-gradient-violet">LLM Infrastructure</span>
          </h1>

          {/* Bio / Value Proposition */}
          <p className="hero-bio-lead">
            {PROFILE.bio}
          </p>

          {/* Key Engineering Pillars */}
          <div className="hero-pillars">
            <div className="pillar-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>Zero Mock Answers</span>
            </div>
            <div className="pillar-item">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>100% Pytest Coverage</span>
            </div>
            <div className="pillar-item">
              <CheckCircle2 size={16} className="text-violet" />
              <span>Real 1080p Demos</span>
            </div>
            <div className="pillar-item">
              <CheckCircle2 size={16} className="text-amber" />
              <span>Docker & GPU Ready</span>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="hero-cta-row">
            <a href="#slider" className="btn-primary-glow">
              <span>Explore Featured Systems</span>
              <ArrowRight size={17} />
            </a>
            <a
              href={PROFILE.cvPath}
              download="Kerollos_Mansour_CV.pdf"
              className="btn-secondary-glow"
            >
              <Download size={17} />
              <span>Download Resume (PDF)</span>
            </a>
            <a href="#contact" className="btn-tertiary">
              Contact Me
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-stats-bar">
            <div className="stat-card">
              <span className="stat-number">13</span>
              <span className="stat-label">AI Platforms</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-card">
              <span className="stat-number">5</span>
              <span className="stat-label">Flagship Systems</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">CI Test Pass</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-card">
              <span className="stat-number">16 GB</span>
              <span className="stat-label">CUDA VRAM</span>
            </div>
          </div>
        </div>

        {/* Right Column: Stylized Portrait */}
        <div className="hero-portrait-wrapper">
          <div className="portrait-container">
            {/* Ambient Background Glows */}
            <div className="portrait-ambient-glow" />
            <div className="portrait-ring-outer" />
            <div className="portrait-ring-inner" />

            {/* Photo Card */}
            <div className="portrait-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="portrait-image"
              />
              <div className="portrait-glass-overlay">
                <div className="portrait-badge-name">
                  <span className="name">{PROFILE.name}</span>
                  <span className="title">Senior AI & Systems Engineer</span>
                </div>
                <div className="portrait-location">
                  <MapPin size={13} />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Chips */}
            {floatingChips.map((chip, idx) => (
              <div
                key={idx}
                className="floating-chip"
                style={{
                  top: chip.top,
                  bottom: chip.bottom,
                  left: chip.left,
                  right: chip.right,
                  animationDelay: `${idx * 0.4}s`,
                }}
              >
                <Sparkles size={13} className="chip-icon" />
                <span>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
