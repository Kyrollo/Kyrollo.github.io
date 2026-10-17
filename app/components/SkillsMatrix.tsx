'use client';

import React, { useState } from 'react';
import { 
  Bot, 
  Server, 
  Database, 
  Layout, 
  Cloud,
  CheckCircle2, 
  Sparkles,
  Layers,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function SkillsMatrix() {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot size={22} className="text-cyan" />;
      case 'Cloud':
        return <Cloud size={22} className="text-cyan" />;
      case 'Server':
        return <Server size={22} className="text-emerald" />;
      case 'Database':
        return <Database size={22} className="text-violet" />;
      case 'Layout':
        return <Layout size={22} className="text-amber" />;
      default:
        return <Sparkles size={22} className="text-cyan" />;
    }
  };

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu size={22} className="text-cyan" />;
      case 1:
        return <Layers size={22} className="text-violet" />;
      case 2:
        return <Bot size={22} className="text-emerald" />;
      case 3:
        return <Cloud size={22} className="text-amber" />;
      default:
        return <Sparkles size={22} className="text-cyan" />;
    }
  };

  const activeCategory = PROFILE.skillCategories[activeTabIdx] || PROFILE.skillCategories[0];

  return (
    <section id="skills" className="skills-matrix-section">
      {/* Methodology Section Header */}
      <div className="section-header-center">
        <span className="section-pill">Engineering Standard & Stack</span>
        <h2 className="section-title">
          Methodology & <span className="text-gradient-cyan">Technical Skills</span>
        </h2>
        <p className="section-subtitle">
          How I architect, evaluate, and scale production AI systems from conception to cloud deployment.
        </p>
      </div>

      {/* Engineering Methodology Pillars */}
      <div className="methodology-pillars-grid">
        {PROFILE.methodology.pillars.map((pillar, idx) => (
          <div key={pillar.title} className="methodology-card">
            <div className="methodology-card-header">
              <div className="methodology-icon-box">{getPillarIcon(idx)}</div>
              <span className="methodology-tag">{pillar.tag}</span>
            </div>
            <h3 className="methodology-title">{pillar.title}</h3>
            <p className="methodology-desc">{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Core Technical Competencies Section */}
      <div className="skills-competencies-wrap">
        <div className="skills-header-divider">
          <span className="section-pill">Domain Architecture</span>
          <h3 className="skills-subtitle">Core Technical Competencies</h3>
          <p className="skills-subdesc">
            Select a specialized technical domain below to explore verified tools, frameworks, and production stacks.
          </p>
        </div>

        {/* 5 Distinct Rectangle Category Cards / Tabs */}
        <div className="skills-rectangle-tabs-grid">
          {PROFILE.skillCategories.map((cat, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button
                key={cat.category}
                className={`skill-rectangle-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTabIdx(idx)}
                type="button"
              >
                <div className="rect-tab-left">
                  <div className="rect-tab-icon-box">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div className="rect-tab-text">
                    <h4 className="rect-tab-title">{cat.category}</h4>
                    <span className="rect-tab-count">{cat.skillsCount} Technologies</span>
                  </div>
                </div>
                <div className="rect-tab-indicator">
                  <span className="indicator-dot" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Display Box Showing ONLY the Skills of the Single Active Tab */}
        <div className="active-tab-skills-display-card">
          <div className="active-display-header">
            <div className="active-header-left">
              <div className="active-icon-frame">
                {getCategoryIcon(activeCategory.icon)}
              </div>
              <div>
                <span className="active-label">Active Technical Domain</span>
                <h3 className="active-category-name">{activeCategory.category}</h3>
                <p className="active-tagline">{activeCategory.tagline}</p>
              </div>
            </div>
            <div className="active-header-badge">
              <span className="verified-badge-pill">
                <CheckCircle2 size={14} className="text-emerald" />
                <span>{activeCategory.skills.length} Production Skills</span>
              </span>
            </div>
          </div>

          <div className="active-skills-badges-grid">
            {activeCategory.skills.map((skill) => (
              <div key={skill} className="single-skill-card">
                <div className="skill-check-circle">
                  <CheckCircle2 size={16} className="skill-check-icon text-cyan" />
                </div>
                <span className="skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
