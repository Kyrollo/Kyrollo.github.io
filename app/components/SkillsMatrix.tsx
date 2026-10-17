'use client';

import React, { useState } from 'react';
import { 
  Bot, 
  Server, 
  Database, 
  Shield, 
  Layout, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot size={20} className="text-cyan" />;
      case 'Server':
        return <Server size={20} className="text-emerald" />;
      case 'Database':
        return <Database size={20} className="text-violet" />;
      case 'Shield':
        return <Shield size={20} className="text-amber" />;
      case 'Layout':
        return <Layout size={20} className="text-rose" />;
      default:
        return <Sparkles size={20} className="text-cyan" />;
    }
  };

  const filteredCategories = activeCategory === 'All'
    ? PROFILE.skillCategories
    : PROFILE.skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="skills-matrix-section">
      <div className="section-header-center">
        <span className="section-pill">Technical Competencies</span>
        <h2 className="section-title">
          Core <span className="text-gradient-cyan">Skill Matrix</span>
        </h2>
        <p className="section-subtitle">
          End-to-end capabilities spanning autonomous agent design, high-concurrency microservices, and modern ML infrastructure.
        </p>
      </div>

      {/* Domain Category Filter Tabs */}
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
