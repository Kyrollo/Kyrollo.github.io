'use client';

import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  ExternalLink, 
  Maximize2, 
  CheckCircle2, 
  Sparkles,
  X,
  ChevronRight
} from 'lucide-react';
import { PROFILE, CertificationItem, CourseItem } from '../data/profileData';

export default function CertificationsSection() {
  const [activeSegment, setActiveSegment] = useState<'certificates' | 'courses'>('certificates');
  const [selectedCertImage, setSelectedCertImage] = useState<{ src: string; title: string; issuer: string } | null>(null);

  return (
    <section id="certifications" className="certifications-courses-section">
      <div className="section-header-center">
        <span className="section-pill">Verified Credentials</span>
        <h2 className="section-title">
          Certifications & <span className="text-gradient-cyan">Courses</span>
        </h2>
        <p className="section-subtitle">
          Official industry certifications from NTI, Fixed Solutions, and Huawei, alongside technical course credentials from Coursera, IBM, and Cisco.
        </p>
      </div>

      {/* Segment Switcher: Certificates vs Courses */}
      <div className="credentials-segment-tabs">
        <button
          className={`credential-tab-btn ${activeSegment === 'certificates' ? 'active' : ''}`}
          onClick={() => setActiveSegment('certificates')}
          type="button"
        >
          <Award size={17} />
          <span>Industry Certifications ({PROFILE.certifications.length})</span>
        </button>
        <button
          className={`credential-tab-btn ${activeSegment === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveSegment('courses')}
          type="button"
        >
          <BookOpen size={17} />
          <span>Specialized Courses ({PROFILE.courses.length})</span>
        </button>
      </div>

      {/* Segment 1: Industry Certifications with Certificate Image Previews */}
      {activeSegment === 'certificates' && (
        <div className="certificates-cards-grid">
          {PROFILE.certifications.map((cert) => (
            <div key={cert.title} className="certificate-document-card">
              {/* Certificate Image Frame */}
              <div 
                className="certificate-image-wrapper"
                onClick={() => setSelectedCertImage({ src: cert.image, title: cert.title, issuer: cert.issuer })}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-preview-img"
                  loading="lazy"
                />
                <div className="certificate-zoom-overlay">
                  <Maximize2 size={20} className="zoom-icon" />
                  <span className="zoom-text">View Full Certificate</span>
                </div>
              </div>

              {/* Certificate Meta Details */}
              <div className="certificate-meta-content">
                <div className="cert-header-meta">
                  <span className="cert-issuer-badge">{cert.issuer}</span>
                  <span className="cert-date-badge">
                    <Calendar size={13} />
                    {cert.date}
                  </span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>

                {/* Verified Skills */}
                <div className="cert-skills-wrap">
                  <span className="cert-skills-label">Validated Competencies:</span>
                  <div className="cert-skills-chips">
                    {cert.skills.map((s) => (
                      <span key={s} className="cert-skill-tag">
                        <CheckCircle2 size={12} className="text-emerald" />
                        <span>{s}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inspect Button */}
                <button
                  className="btn-inspect-cert"
                  onClick={() => setSelectedCertImage({ src: cert.image, title: cert.title, issuer: cert.issuer })}
                  type="button"
                >
                  <Maximize2 size={15} />
                  <span>Inspect Official Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Segment 2: Specialized Professional Courses (Coursera, IBM, Cisco) */}
      {activeSegment === 'courses' && (
        <div className="courses-cards-grid">
          {PROFILE.courses.map((course) => (
            <div key={course.title} className="course-credential-card">
              <div className="course-card-top">
                {course.badgeImage && (
                  <div className="course-badge-box">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={course.badgeImage}
                      alt={course.title}
                      className="course-badge-img"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="course-meta-info">
                  <span className="course-platform-pill">{course.platform}</span>
                  <h3 className="course-title">{course.title}</h3>
                  <span className="course-issuer-name">{course.issuer} • {course.date}</span>
                </div>
              </div>

              <p className="course-desc">{course.description}</p>

              <div className="course-skills-wrap">
                <span className="course-skills-label">Curriculum Highlights:</span>
                <div className="course-skills-chips">
                  {course.skills.map((s) => (
                    <span key={s} className="course-skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certificate Image Lightbox Modal */}
      {selectedCertImage && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCertImage(null)}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div>
                <h3 className="modal-cert-title">{selectedCertImage.title}</h3>
                <span className="modal-cert-issuer">{selectedCertImage.issuer}</span>
              </div>
              <button
                className="cert-modal-close-btn"
                onClick={() => setSelectedCertImage(null)}
                aria-label="Close certificate preview"
              >
                <X size={20} />
              </button>
            </div>
            <div className="cert-modal-body">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedCertImage.src}
                alt={selectedCertImage.title}
                className="cert-modal-full-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
