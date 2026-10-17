'use client';

import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function EducationSection() {
  return (
    <section id="education" className="education-section">
      <div className="section-header-center">
        <span className="section-pill">Academic Credentials</span>
        <h2 className="section-title">
          Education & <span className="text-gradient-cyan">Certifications</span>
        </h2>
        <p className="section-subtitle">
          Rigorous academic foundations in Computer Science & Artificial Intelligence coupled with advanced industry certifications.
        </p>
      </div>

      <div className="education-grid">
        {/* Academic Degree Card */}
        <div className="degree-showcase-column">
          <h3 className="column-heading">
            <GraduationCap size={22} className="text-cyan" />
            <span>Academic Degree</span>
          </h3>

          {PROFILE.education.map((edu, idx) => (
            <div key={idx} className="degree-card">
              <div className="degree-badge-row">
                <span className="degree-period">
                  <Calendar size={13} />
                  {edu.period}
                </span>
                <span className="degree-specialization">{edu.specialization}</span>
              </div>

              <h4 className="degree-title">{edu.degree}</h4>
              <div className="degree-institution">{edu.institution}</div>

              <p className="degree-desc">{edu.description}</p>

              <div className="degree-highlights">
                <h5 className="highlights-title">Curriculum & Technical Foundations:</h5>
                <ul className="highlights-list">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="highlight-item">
                      <CheckCircle2 size={15} className="text-cyan" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Column */}
        <div className="certifications-column">
          <h3 className="column-heading">
            <Award size={22} className="text-violet" />
            <span>Industry Certifications</span>
          </h3>

          <div className="certs-list">
            {PROFILE.certifications.map((cert, cIdx) => (
              <div key={cIdx} className="cert-card">
                <div className="cert-top-row">
                  <div className="cert-icon-box">
                    <Award size={18} className="text-violet" />
                  </div>
                  <div className="cert-meta">
                    <span className="cert-date">{cert.date}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>

                <h4 className="cert-title">{cert.title}</h4>

                <div className="cert-skills-wrap">
                  {cert.skills.map((s) => (
                    <span key={s} className="cert-skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
