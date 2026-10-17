'use client';

import React from 'react';
import { 
  CheckCircle2, 
  Server, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Activity,
  GitBranch,
  Terminal
} from 'lucide-react';

export default function PhilosophySection() {
  const pillars = [
    {
      icon: <CheckCircle2 size={24} className="text-cyan" />,
      title: 'Zero Mock Policy',
      description: 'Every system processes authentic data: real tree-sitter AST parsing, real Arabic morphological normalization, exact line-level citation offsets, and verified benchmark ground truths.',
      badge: 'Grounded Data',
    },
    {
      icon: <Server size={24} className="text-emerald" />,
      title: '100% Pytest CI Pass Rate',
      description: 'Exhaustive unit, integration, and load testing suites across all FastAPI and ASP.NET Core backends, verified through automated GitHub Actions CI workflows.',
      badge: 'Automated CI',
    },
    {
      icon: <Layers size={24} className="text-violet" />,
      title: 'Monoliths & Microservices',
      description: 'Pragmatic architectural choices: consolidating high-frequency RAG loops into zero-network-overhead FastAPI monoliths while isolating distributed agents with Redis queues.',
      badge: 'Clean Architecture',
    },
    {
      icon: <Cpu size={24} className="text-amber" />,
      title: 'Local GPU Acceleration',
      description: 'Production inference and QLoRA fine-tuning powered by an NVIDIA Dedicated NVIDIA GPU (16GB GDDR6 VRAM, CUDA 13.4), delivering sub-15ms TTFT with zero cloud reliance.',
      badge: 'Dedicated NVIDIA GPU',
    },
  ];

  return (
    <section className="philosophy-section">
      <div className="section-header-center">
        <span className="section-pill">Engineering Standard</span>
        <h2 className="section-title">
          Production-Grade <span className="text-gradient-cyan">System Architecture</span>
        </h2>
        <p className="section-subtitle">
          Every platform is engineered as an independent, enterprise-ready software product with verifiable metrics, complete visual recordings, and production test suites.
        </p>
      </div>

      <div className="philosophy-grid">
        {pillars.map((p, idx) => (
          <div key={idx} className="philosophy-card">
            <div className="philosophy-card-top">
              <div className="philosophy-icon-box">{p.icon}</div>
              <span className="philosophy-badge">{p.badge}</span>
            </div>
            <h3 className="philosophy-title">{p.title}</h3>
            <p className="philosophy-desc">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
