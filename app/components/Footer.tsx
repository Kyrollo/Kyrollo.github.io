'use client';

import React from 'react';
import { Cpu, Github, Linkedin, Mail, Download, ArrowUp } from 'lucide-react';
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
            <div className="footer-avatar-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PROFILE.avatar} alt={PROFILE.name} className="footer-avatar-img" />
            </div>
            <div>
              <h4 className="footer-name">{PROFILE.name}</h4>
              <p className="footer-title">{PROFILE.title}</p>
            </div>
          </div>

          <div className="footer-links-group">
            <a href="#slider" className="footer-link">Featured Systems</a>
            <a href="#projects" className="footer-link">All Projects</a>
            <a href="#experience" className="footer-link">Experience</a>
            <a href="#education" className="footer-link">Education</a>
            <a href="#skills" className="footer-link">Skills</a>
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
          <div className="footer-hardware-spec">
            <Cpu size={15} className="text-cyan" />
            <span>{PROFILE.hardware}</span>
          </div>

          <p className="footer-copyright">
            © 2026 {PROFILE.name}. Built with Next.js 14, React 19, FastAPI, and PyTorch. Zero mock answers.
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
