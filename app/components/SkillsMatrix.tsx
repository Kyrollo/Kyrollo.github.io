'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Server, 
  Database, 
  Cloud,
  Sparkles,
  Layers,
  Cpu,
  Code2
} from 'lucide-react';
import { PROFILE } from '../data/profileData';
import TechLogo from './TechLogo';

interface SkillItem {
  name: string;
  level?: 'Expert' | 'Advanced' | 'Proficient';
}

interface SkillCategoryGroup {
  id: string;
  category: string;
  icon: React.ReactNode;
  items: SkillItem[];
}

const SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    id: 'ai-agents',
    category: 'AI, LLMs & Multi-Agent Systems',
    icon: <Bot size={18} className="text-cyan-400" />,
    items: [
      { name: 'LangGraph', level: 'Expert' },
      { name: 'LangChain', level: 'Expert' },
      { name: 'LlamaIndex', level: 'Advanced' },
      { name: 'OpenAI API', level: 'Expert' },
      { name: 'Anthropic Claude', level: 'Expert' },
      { name: 'vLLM', level: 'Advanced' },
      { name: 'Ollama', level: 'Expert' },
      { name: 'PyTorch', level: 'Advanced' },
      { name: 'Hugging Face', level: 'Expert' },
      { name: 'Groq LPU', level: 'Advanced' },
    ],
  },
  {
    id: 'retrieval-rag',
    category: 'Retrieval & Vector Databases',
    icon: <Database size={18} className="text-violet-400" />,
    items: [
      { name: 'Qdrant', level: 'Expert' },
      { name: 'ChromaDB', level: 'Expert' },
      { name: 'PostgreSQL (pgvector)', level: 'Expert' },
      { name: 'Apache AGE (Graph)', level: 'Advanced' },
      { name: 'FAISS', level: 'Advanced' },
      { name: 'BM25 Lexical', level: 'Expert' },
      { name: 'Hybrid Search (RRF)', level: 'Expert' },
    ],
  },
  {
    id: 'cloud-mlops',
    category: 'Cloud & MLOps Infrastructure',
    icon: <Cloud size={18} className="text-amber-400" />,
    items: [
      { name: 'Google Cloud Platform (GCP)', level: 'Advanced' },
      { name: 'Vertex AI', level: 'Advanced' },
      { name: 'Docker', level: 'Expert' },
      { name: 'Kubernetes', level: 'Proficient' },
      { name: 'GitHub Actions', level: 'Expert' },
      { name: 'MLflow', level: 'Advanced' },
      { name: 'OpenTelemetry', level: 'Advanced' },
      { name: 'Prometheus', level: 'Advanced' },
      { name: 'Grafana', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend & Distributed Systems',
    icon: <Server size={18} className="text-emerald-400" />,
    items: [
      { name: 'FastAPI', level: 'Expert' },
      { name: 'Python', level: 'Expert' },
      { name: 'ASP.NET Core', level: 'Advanced' },
      { name: 'Celery', level: 'Advanced' },
      { name: 'Redis', level: 'Expert' },
      { name: 'Keycloak', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Expert' },
      { name: 'WebSockets', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Expert' },
      { name: 'MySQL', level: 'Advanced' },
    ],
  },
  {
    id: 'languages',
    category: 'Languages & Core Frameworks',
    icon: <Code2 size={18} className="text-rose-400" />,
    items: [
      { name: 'Python', level: 'Expert' },
      { name: 'C#', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'SQL', level: 'Expert' },
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Git', level: 'Expert' },
      { name: 'Linux', level: 'Advanced' },
    ],
  },
];

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu size={22} className="text-cyan-400" />;
      case 1:
        return <Layers size={22} className="text-violet-400" />;
      case 2:
        return <Bot size={22} className="text-emerald-400" />;
      case 3:
        return <Cloud size={22} className="text-amber-400" />;
      default:
        return <Sparkles size={22} className="text-cyan-400" />;
    }
  };

  const displayedGroups = activeTab === 'all' 
    ? SKILL_GROUPS 
    : SKILL_GROUPS.filter((g) => g.id === activeTab);

  return (
    <section id="skills" className="skills-matrix-section">
      {/* Methodology Section Header */}
      <motion.div 
        className="section-header-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-pill">Tech Stack & Methodology</span>
        <h2 className="section-title">
          Technical <span className="text-gradient-cyan">Stack & Engineering Principles</span>
        </h2>
        <p className="section-subtitle">
          Tools, frameworks, and principles I use daily to architect and scale production AI systems.
        </p>
      </motion.div>

      {/* Engineering Methodology Pillars */}
      <motion.div 
        className="methodology-pillars-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.1 }}
      >
        {PROFILE.methodology.pillars.map((pillar, idx) => (
          <motion.div 
            key={pillar.title} 
            className="methodology-card glassmorphic-card group hover:-translate-y-1.5 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="methodology-card-header">
              <div className="methodology-icon-box group-hover:scale-110 transition-transform">
                {getPillarIcon(idx)}
              </div>
              <span className="methodology-tag">{pillar.tag}</span>
            </div>
            <h3 className="methodology-title group-hover:text-cyan-400 transition-colors">
              {pillar.title}
            </h3>
            <p className="methodology-desc">{pillar.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Clean Technical Skills Showcase */}
      <div className="skills-reference-container mt-16">
        <div className="skills-reference-header">
          <span className="section-pill">Tools & Infrastructure</span>
          <h3 className="skills-showcase-title">Core Technical Competencies</h3>
          <p className="skills-showcase-desc">
            Production-proven tools, distributed frameworks, and cloud AI infrastructure.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="skills-tab-filter-row mt-6 flex flex-wrap gap-2 justify-center">
            <button
              className={`category-pill ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Stack ({SKILL_GROUPS.reduce((acc, g) => acc + g.items.length, 0)})
            </button>
            {SKILL_GROUPS.map((group) => (
              <button
                key={group.id}
                className={`category-pill flex items-center gap-2 ${activeTab === group.id ? 'active' : ''}`}
                onClick={() => setActiveTab(group.id)}
              >
                <span>{group.category.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="skills-reference-groups-list"
          >
            {displayedGroups.map((group) => (
              <div key={group.category} className="skill-reference-category-block">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-lg bg-slate-800/60 border border-white/5">
                    {group.icon}
                  </div>
                  <h4 className="skill-reference-category-title m-0">
                    {group.category}
                  </h4>
                </div>

                <div className="skill-reference-items-grid">
                  {group.items.map((item) => (
                    <div 
                      key={item.name} 
                      className="skill-reference-item group hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-200"
                    >
                      <div className="skill-reference-logo-wrap group-hover:scale-110 transition-transform">
                        <TechLogo name={item.name} size={22} />
                      </div>
                      <div className="flex flex-col">
                        <span className="skill-reference-name group-hover:text-white transition-colors">
                          {item.name}
                        </span>
                        {item.level && (
                          <span className="text-[0.68rem] text-slate-400 font-mono tracking-wider">
                            {item.level}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
