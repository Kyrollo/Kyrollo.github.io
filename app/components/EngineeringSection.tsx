'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, 
  DatabaseZap, 
  CloudCog, 
  ServerCog, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  type LucideIcon
} from 'lucide-react';
import TechLogo from './TechLogo';

interface SkillItem {
  name: string;
}

interface SkillCategoryGroup {
  id: string;
  category: string;
  shortLabel: string;
  gradient: string;
  borderColor: string;
  glowColor: string;
  watermarkColor: string;
  IconComponent: LucideIcon;
  items: SkillItem[];
}

const PRINCIPLES = [
  {
    num: '01',
    title: 'Real data, measured results',
    desc: 'No mocked pipelines. Every latency and accuracy number comes from real benchmark runs on real datasets.',
  },
  {
    num: '02',
    title: 'Tested before shipped',
    desc: 'Exhaustive unit, integration, and load test suites across FastAPI and ASP.NET backends with automated CI.',
  },
  {
    num: '03',
    title: 'Right-sized architecture',
    desc: 'High-speed FastAPI monoliths where latency matters; isolated Redis queues where distributed scale matters.',
  },
  {
    num: '04',
    title: 'Production-ready deployment',
    desc: 'Containerized services with Docker, Redis caching, async task queues, automated evaluation, and resilient error recovery.',
  },
];

const SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    id: 'ai-agents',
    category: 'AI, LLMs & Multi-Agent Systems',
    shortLabel: 'AI & Agents',
    gradient: 'linear-gradient(135deg, #5EEAD4 0%, #38BDF8 100%)',
    borderColor: 'rgba(94, 234, 212, 0.4)',
    glowColor: 'rgba(94, 234, 212, 0.15)',
    watermarkColor: '#5EEAD4',
    IconComponent: BrainCircuit,
    items: [
      { name: 'LangGraph' },
      { name: 'LangChain' },
      { name: 'LlamaIndex' },
      { name: 'OpenAI API' },
      { name: 'Anthropic Claude' },
      { name: 'vLLM' },
      { name: 'Ollama' },
      { name: 'PyTorch' },
      { name: 'Hugging Face' },
      { name: 'Groq LPU' },
      { name: 'PEFT / LoRA' },
    ],
  },
  {
    id: 'retrieval-rag',
    category: 'Retrieval & Vector Databases',
    shortLabel: 'Retrieval & RAG',
    gradient: 'linear-gradient(135deg, #818CF8 0%, #C084FC 100%)',
    borderColor: 'rgba(129, 140, 248, 0.4)',
    glowColor: 'rgba(129, 140, 248, 0.15)',
    watermarkColor: '#818CF8',
    IconComponent: DatabaseZap,
    items: [
      { name: 'Qdrant' },
      { name: 'PostgreSQL (pgvector)' },
      { name: 'Apache AGE (Graph)' },
      { name: 'BM25 Lexical' },
      { name: 'Hybrid Search (RRF)' },
      { name: 'Cross-Encoder Rerank' },
      { name: 'ChromaDB' },
      { name: 'FAISS' },
    ],
  },
  {
    id: 'cloud-mlops',
    category: 'Cloud & MLOps Infrastructure',
    shortLabel: 'Cloud & MLOps',
    gradient: 'linear-gradient(135deg, #FBBF24 0%, #F97316 100%)',
    borderColor: 'rgba(251, 191, 36, 0.4)',
    glowColor: 'rgba(251, 191, 36, 0.15)',
    watermarkColor: '#FBBF24',
    IconComponent: CloudCog,
    items: [
      { name: 'Google Cloud Platform (GCP)' },
      { name: 'Vertex AI' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'GitHub Actions' },
      { name: 'MLflow' },
      { name: 'OpenTelemetry' },
      { name: 'Prometheus' },
      { name: 'Grafana' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend & Distributed Systems',
    shortLabel: 'Backend & Systems',
    gradient: 'linear-gradient(135deg, #34D399 0%, #14B8A6 100%)',
    borderColor: 'rgba(52, 211, 153, 0.4)',
    glowColor: 'rgba(52, 211, 153, 0.15)',
    watermarkColor: '#34D399',
    IconComponent: ServerCog,
    items: [
      { name: 'FastAPI' },
      { name: 'Python' },
      { name: 'ASP.NET Core' },
      { name: 'C#' },
      { name: 'Celery' },
      { name: 'Redis' },
      { name: 'Keycloak' },
      { name: 'Caddy' },
      { name: 'RESTful APIs' },
      { name: 'WebSockets' },
    ],
  },
  {
    id: 'languages',
    category: 'Languages & Core Frameworks',
    shortLabel: 'Languages & Core',
    gradient: 'linear-gradient(135deg, #FB7185 0%, #F43F5E 100%)',
    borderColor: 'rgba(251, 113, 133, 0.4)',
    glowColor: 'rgba(251, 113, 133, 0.15)',
    watermarkColor: '#FB7185',
    IconComponent: Code2,
    items: [
      { name: 'Python' },
      { name: 'C#' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'C++' },
      { name: 'SQL' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Git' },
      { name: 'Linux' },
    ],
  },
];

export default function EngineeringSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const displayedGroups = activeTab === 'all' 
    ? SKILL_GROUPS 
    : SKILL_GROUPS.filter((g) => g.id === activeTab);

  const totalTools = SKILL_GROUPS.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <section id="engineering" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">04 — Engineering</span>
        <h2 className="section-title">
          How I build
        </h2>
        <p className="section-subtitle">
          Pragmatic architecture principles and production-grade tools I use daily to build, evaluate, and scale AI systems.
        </p>
      </motion.div>

      {/* Part A: 4 Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {PRINCIPLES.map((p, idx) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="p-5 rounded-2xl bg-[#0E121B] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-[#5EEAD4] bg-[#5EEAD4]/10 px-2 py-0.5 rounded">
                {p.num}
              </span>
              <CheckCircle2 size={16} className="text-slate-600 group-hover:text-[#5EEAD4] transition-colors" />
            </div>
            <h3 className="text-base font-semibold text-slate-100 mb-2 font-['Space_Grotesk'] leading-snug">
              {p.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Part B: Stack Categories */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-100 font-['Space_Grotesk']">
              Production Stack & Tooling
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {totalTools} tools & frameworks tested across production repositories.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0E121B] border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-[#151B27] text-[#5EEAD4] shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Stack ({totalTools})
            </button>
            {SKILL_GROUPS.map((group) => {
              const Icon = group.IconComponent;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveTab(group.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    activeTab === group.id
                      ? 'bg-[#151B27] text-white shadow-sm border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon size={13} style={{ color: group.watermarkColor }} />
                  <span>{group.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedGroups.map((group, groupIdx) => {
              const Icon = group.IconComponent;
              return (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: groupIdx * 0.08, duration: 0.4 }}
                  className="relative p-6 rounded-3xl bg-[#0E121B] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 group overflow-hidden flex flex-col justify-between"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* Big faded watermark icon behind card content */}
                  <div 
                    className="absolute -bottom-6 -right-6 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 select-none"
                    style={{
                      opacity: 0.06,
                      color: group.watermarkColor,
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={170} />
                  </div>

                  <div>
                    {/* Header with big 56px gradient icon tile */}
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-300"
                        style={{
                          background: group.gradient,
                          boxShadow: `0 8px 24px ${group.glowColor}`,
                        }}
                      >
                        <Icon size={28} className="text-white drop-shadow-sm" />
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-slate-100 font-['Space_Grotesk'] leading-tight">
                          {group.category}
                        </h4>
                        <span className="text-xs text-slate-500 font-mono">
                          {group.items.length} core technologies
                        </span>
                      </div>
                    </div>

                    {/* Tools Chips */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#151B27]/90 border border-slate-800/90 hover:border-slate-600 hover:bg-[#1a2233] transition-all duration-200 group/chip"
                        >
                          <TechLogo name={item.name} size={18} />
                          <span className="text-xs font-medium text-slate-300 group-hover/chip:text-white transition-colors">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
