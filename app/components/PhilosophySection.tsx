'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  CheckCircle2, 
  Server, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Activity,
  GitBranch,
  Terminal,
  Zap
} from 'lucide-react';

export default function PhilosophySection() {
  const pillars = [
    {
      icon: <CheckCircle2 size={24} className="text-cyan-400" />,
      title: 'Zero Mock Policy',
      description: 'Every system processes authentic data: real tree-sitter AST parsing, real Arabic morphological normalization, exact line-level citation offsets, and verified benchmark ground truths.',
      badge: 'Grounded Data',
      accent: 'rgba(14, 165, 233, 0.4)',
      glow: 'rgba(14, 165, 233, 0.15)',
    },
    {
      icon: <Server size={24} className="text-emerald-400" />,
      title: '100% Pytest CI Pass Rate',
      description: 'Exhaustive unit, integration, and load testing suites across all FastAPI and ASP.NET Core backends, verified through automated GitHub Actions CI workflows.',
      badge: 'Automated CI',
      accent: 'rgba(16, 185, 129, 0.4)',
      glow: 'rgba(16, 185, 129, 0.15)',
    },
    {
      icon: <Layers size={24} className="text-violet-400" />,
      title: 'Monoliths & Microservices',
      description: 'Pragmatic architectural choices: consolidating high-frequency RAG loops into zero-network-overhead FastAPI monoliths while isolating distributed agents with Redis queues.',
      badge: 'Clean Architecture',
      accent: 'rgba(139, 92, 246, 0.4)',
      glow: 'rgba(139, 92, 246, 0.15)',
    },
    {
      icon: <ShieldCheck size={24} className="text-amber-400" />,
      title: 'Reliable Agent Orchestration',
      description: 'Stateful LangGraph multi-agent supervisors with dynamic state recovery, strict schema validation, human-in-the-loop gates, and automated evaluation loops.',
      badge: 'Agentic Reliability',
      accent: 'rgba(245, 158, 11, 0.4)',
      glow: 'rgba(245, 158, 11, 0.15)',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="philosophy" className="philosophy-section">
      <motion.div 
        className="section-header-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-pill">Engineering Philosophy</span>
        <h2 className="section-title">
          Production-Grade <span className="text-gradient-cyan">System Architecture</span>
        </h2>
        <p className="section-subtitle">
          Every platform is engineered as an independent, enterprise-ready software product with verifiable metrics, complete visual recordings, and production test suites.
        </p>
      </motion.div>

      <motion.div 
        className="philosophy-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {pillars.map((p, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="philosophy-card group hover:-translate-y-1.5 transition-all duration-300"
            style={{
              '--card-glow': p.glow,
              '--card-border': p.accent,
            } as React.CSSProperties}
          >
            <div className="philosophy-card-top">
              <div className="philosophy-icon-box group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <span className="philosophy-badge">{p.badge}</span>
            </div>
            <h3 className="philosophy-title group-hover:text-cyan-400 transition-colors">
              {p.title}
            </h3>
            <p className="philosophy-desc">{p.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
