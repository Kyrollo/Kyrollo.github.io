'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header-center">
        <span className="section-pill">Career Background</span>
        <h2 className="section-title">
          Professional <span className="text-gradient-cyan">Work Experience</span>
        </h2>
        <p className="section-subtitle">
          Proven track record of engineering, deploying, and maintaining production AI services and intelligent conversational systems.
        </p>
      </div>

      <div className="experience-timeline">
        {PROFILE.experience.map((exp, idx) => (
          <div key={idx} className="timeline-item">
            {/* Timeline Marker */}
            <div className="timeline-marker">
              <div className="marker-dot">
                <Briefcase size={16} />
              </div>
              {idx < PROFILE.experience.length - 1 && <div className="marker-line" />}
            </div>

            {/* Timeline Card */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                </div>

                <div className="timeline-meta">
                  <span className="meta-badge">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className="meta-badge location">
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              <div className="timeline-achievements">
                <h4 className="achievements-heading">Key Production Achievements:</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="achievement-item">
                      <CheckCircle2 size={16} className="text-emerald achievement-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="timeline-tech-stack">
                <span className="tech-stack-label">Technologies:</span>
                <div className="tech-tags-row">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="exp-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
