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
  GitBranch,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot size={20} className="text-cyan" />;
      case 'Cloud':
        return <Cloud size={20} className="text-cyan" />;
      case 'Server':
        return <Server size={20} className="text-emerald" />;
      case 'Database':
        return <Database size={20} className="text-violet" />;
      case 'Layout':
        return <Layout size={20} className="text-amber" />;
      default:
        return <Sparkles size={20} className="text-cyan" />;
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

  const filteredCategories = activeCategory === 'All'
    ? PROFILE.skillCategories
    : PROFILE.skillCategories.filter((c) => c.category === activeCategory);

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

      {/* Engineering Methodology Pillars (Merged from Architecture section) */}
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

      {/* Domain Category Filter Tabs */}
      <div className="skills-header-divider">
        <h3 className="skills-subtitle">Core Technical Competencies</h3>
      </div>

      <div className="skills-filter-tabs">
        <button
          className={`skills-tab-btn ${activeCategory === 'All' ? 'active' : ''}`}
          onClick={() => setActiveCategory('All')}
        >
          All Domains
        </button>
        {PROFILE.skillCategories.map((c) => (
          <button
            key={c.category}
            className={`skills-tab-btn ${activeCategory === c.category ? 'active' : ''}`}
            onClick={() => setActiveCategory(c.category)}
          >
            {c.category}
          </button>
        ))}
      </div>

      {/* Grid of Skill Categories */}
      <div className="skills-cards-grid">
        {filteredCategories.map((cat) => (
          <div key={cat.category} className="skill-category-card">
            <div className="category-card-header">
              <div className="category-icon-wrapper">{getIcon(cat.icon)}</div>
              <h3 className="category-title">{cat.category}</h3>
            </div>

            <div className="skills-badges-wrap">
              {cat.skills.map((skill) => (
                <div key={skill} className="skill-badge-item">
                  <CheckCircle2 size={14} className="badge-check" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
