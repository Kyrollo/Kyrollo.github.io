'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Cpu, Github, ExternalLink, Download, Sparkles, Terminal } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function AboutSection() {
  const quickFacts = [
    {
      icon: <MapPin size={16} className="text-[#5EEAD4]" />,
      label: 'Location',
      value: 'Cairo, Egypt (Remote & Relocation)',
    },
    {
      icon: <Briefcase size={16} className="text-[#818CF8]" />,
      label: 'Role Focus',
      value: 'Software AI & Agentic AI Engineer',
    },
    {
      icon: <GraduationCap size={16} className="text-[#34D399]" />,
      label: 'Education',
      value: 'B.Sc. Computer Science & AI (Cairo Univ.)',
    },
    {
      icon: <Sparkles size={16} className="text-[#FBBF24]" />,
      label: 'Engineering Philosophy',
      value: 'Production-First & CI Verified',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">03 — About Me</span>
        <h2 className="section-title">
          Engineering Autonomous Systems with Passion &amp; Rigor
        </h2>
        <p className="section-subtitle">
          Bridging modern AI research and production software engineering with real code and verified pipelines.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Story & Facts */}
        <motion.div 
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0E121B] border border-slate-800 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am a <strong className="text-white font-semibold">Software AI Engineer</strong> and <strong className="text-white font-semibold">Agentic AI Engineer</strong> based in Cairo, Egypt, passionate about architecting intelligent systems that bridge cutting-edge AI research with battle-tested software engineering. My work focuses on building coordinated multi-agent workflows, production-grade hybrid retrieval systems (RAG), and high-throughput backends that run reliably under demanding real-world conditions.
            </p>
            <p>
              My foundation is grounded in Computer Science and Artificial Intelligence from Cairo University, reinforced through rigorous programs such as the 288-hour Agentic AI Systems Engineering track at NTI, where I architected and shipped <span className="text-[#5EEAD4] font-medium">TaskTune AI</span> (a 5-agent supervisor orchestrating tasks across C# and Python services) and <span className="text-[#818CF8] font-medium">FixedRAG</span> during my tenure at Fixed Solutions.
            </p>
            <p>
              What drives me every day is the challenge of building AI systems that don&apos;t just stay as notebook experiments, but ship to production with automated CI testing, clear observability, and measurable impact. Whether designing autonomous supervisor graphs with LangGraph, fine-tuning task-specific models, or architecting multi-domain RAG platforms, I take pride in end-to-end engineering craftsmanship.
            </p>

            {/* Quick Facts Grid */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3 p-3 rounded-xl bg-[#151B27]/70 border border-slate-800/60">
                  <div className="p-2 rounded-lg bg-[#0E121B] border border-slate-800 shrink-0">
                    {fact.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">{fact.label}</span>
                    <span className="text-xs font-semibold text-slate-200 block mt-0.5">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Real GitHub Activity & Repos Card */}
        <motion.div 
          className="lg:col-span-5 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 rounded-3xl bg-[#0E121B] border border-slate-800 space-y-6 shadow-xl">
            {/* GitHub Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#151B27] flex items-center justify-center text-white border border-slate-800">
                  <Github size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-['Space_Grotesk']">
                    Kyrollo on GitHub
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    Public Repositories &amp; Commits
                  </span>
                </div>
              </div>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#151B27] hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
                title="View GitHub"
              >
                <ExternalLink size={15} />
              </a>
            </div>

            {/* GitHub Stats Row */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#070A12] border border-slate-800 text-center">
              <div>
                <span className="text-xl font-bold text-[#5EEAD4] font-['Space_Grotesk'] block">13</span>
                <span className="text-[10px] text-slate-400 font-mono uppercase">Platforms</span>
              </div>
              <div className="border-x border-slate-800">
                <span className="text-xl font-bold text-[#818CF8] font-['Space_Grotesk'] block">100%</span>
                <span className="text-[10px] text-slate-400 font-mono uppercase">Pytest CI</span>
              </div>
              <div>
                <span className="text-xl font-bold text-[#34D399] font-['Space_Grotesk'] block">2+</span>
                <span className="text-[10px] text-slate-400 font-mono uppercase">Years Active</span>
              </div>
            </div>

            {/* Real Contribution Heatmap Image */}
            <div className="p-4 rounded-2xl bg-[#070A12] border border-slate-800 overflow-hidden">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2">
                Contribution Activity
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/5EEAD4/Kyrollo"
                alt="Kerollos Mansour GitHub Contribution Chart"
                className="w-full opacity-90 hover:opacity-100 transition-opacity rounded"
                loading="lazy"
              />
            </div>

            {/* Quick CTAs */}
            <div className="flex gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5EEAD4] hover:bg-[#2DD4BF] text-[#070A12] text-xs font-semibold transition-all shadow-md shadow-[#5EEAD4]/20"
              >
                <Github size={14} />
                <span>Visit GitHub Profile</span>
              </a>

              <a
                href={PROFILE.cvPath}
                download="Kerollos_Mansour_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#151B27] hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                title="Download CV"
              >
                <Download size={14} />
                <span>CV</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
