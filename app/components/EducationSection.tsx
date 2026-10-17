'use client';

import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function EducationSection() {
  const edu = PROFILE.education[0];

  return (
    <section id="education" className="education-section-standalone">
      <div className="section-header-center">
        <span className="section-pill">Academic Degree</span>
        <h2 className="section-title">
          Higher <span className="text-gradient-cyan">Education</span>
        </h2>
        <p className="section-subtitle">
          Formal academic training in computer science, machine learning theory, and algorithmic problem solving.
        </p>
      </div>

      <div className="education-standalone-card">
        {/* University Header Row */}
        <div className="edu-card-top-row">
          <div className="edu-institution-info">
            <div className="edu-cap-icon-box">
              <GraduationCap size={28} className="text-cyan" />
            </div>
            <div>
              <h3 className="edu-degree-title">{edu.degree}</h3>
              <div className="edu-institution-meta">
                <span className="edu-institution-name">{edu.institution}</span>
                <span className="edu-bullet">•</span>
                <span className="edu-specialization">Specialization: {edu.specialization}</span>
              </div>
            </div>
          </div>

          <div className="edu-timing-badge">
            <Calendar size={14} />
            <span>{edu.period}</span>
          </div>
        </div>

        {/* Academic Description */}
        <p className="edu-description-text">{edu.description}</p>

        {/* Core Academic Foundations & Coursework */}
        <div className="edu-highlights-block">
          <h4 className="highlights-title">
            <BookOpen size={17} className="text-cyan" />
            <span>Core Academic & Algorithmic Foundations:</span>
          </h4>
          <div className="highlights-grid">
            {edu.highlights.map((highlight, idx) => (
              <div key={idx} className="highlight-item-card">
                <CheckCircle2 size={16} className="text-emerald highlight-check" />
                <span className="highlight-text">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
