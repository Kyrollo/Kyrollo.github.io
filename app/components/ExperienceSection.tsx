'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import TechLogo from './TechLogo';

export default function ExperienceSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="experience" className="experience-section">
      <motion.div 
        className="section-header-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-pill">Experience</span>
        <h2 className="section-title">
          Professional <span className="text-gradient-cyan">Work Experience</span>
        </h2>
        <p className="section-subtitle">
          Building and shipping AI systems at scale.
        </p>
      </motion.div>

      <motion.div 
        className="experience-timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {PROFILE.experience.map((exp, idx) => (
          <motion.div key={idx} variants={itemVariants} className="timeline-item">
            {/* Timeline Marker with Pulsing Glow Ring & Clear, Enlarged Company Logo */}
            <div className="timeline-marker">
              <div className="marker-dot pulse-marker !bg-white shadow-xl shadow-cyan-950/40 border-2 border-[#5EEAD4] p-2 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110">
                {exp.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full object-contain filter-none" 
                  />
                ) : (
                  <Briefcase size={22} className="text-slate-800" />
                )}
              </div>
              {idx < PROFILE.experience.length - 1 && (
                <div className="marker-line-animated" />
              )}
            </div>

            {/* Timeline Card */}
            <div className="timeline-card glassmorphic-card group hover:-translate-y-1 transition-all duration-300">
              <div className="timeline-card-header">
                <div>
                  <h3 className="timeline-role group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="timeline-company flex items-center gap-2">
                    <span className="company-dot" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="timeline-meta">
                  <span className="meta-badge">
                    <Calendar size={13} className="text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="meta-badge location">
                    <MapPin size={13} className="text-rose-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Created Project Callout */}
              {exp.projectCreated && (
                <div className="timeline-project-created-badge">
                  <div className="project-badge-left">
                    <Sparkles size={15} className="text-cyan-400 animate-pulse" />
                    <span className="badge-label">Key Platform Shipped:</span>
                    <strong className="badge-project-name text-white">{exp.projectCreated.name}</strong>
                  </div>
                  <a
                    href={exp.projectCreated.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge-project-link hover:text-cyan-300 transition-colors"
                    title="View Shipped Project on GitHub"
                  >
                    <span>View Repository</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              )}

              <p className="timeline-desc">{exp.description}</p>

              <div className="timeline-achievements">
                <h4 className="achievements-heading">Key Production Achievements:</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="achievement-item">
                      <CheckCircle2 size={16} className="text-emerald-400 achievement-icon flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="timeline-tech-stack">
                <span className="tech-stack-label">Technologies:</span>
                <div className="tech-tags-row">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="exp-tech-tag inline-flex items-center gap-1.5">
                      <TechLogo name={tech} size={14} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
