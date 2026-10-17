'use client';

import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-content-wrap">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="brand-monogram">KM</span>
            <span className="brand-dot">.</span>
            <div className="footer-brand-info">
              <h4 className="footer-name">{PROFILE.name}</h4>
              <p className="footer-title">{PROFILE.title}</p>
            </div>
          </div>

          <div className="footer-links-group">
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#skills" className="footer-link">Skills & Methodology</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#contact" className="footer-link">Contact</a>
            <a href={PROFILE.cvPath} download="Kerollos_Mansour_CV.pdf" className="footer-link highlight">
              Download CV (PDF)
            </a>
          </div>

          <button className="footer-scroll-top-btn" onClick={scrollToTop} title="Scroll to Top">
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2026 {PROFILE.name}. All rights reserved.
          </p>

          <div className="footer-social-icons">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="GitHub">
              <Github size={16} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="footer-social-btn" title="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
