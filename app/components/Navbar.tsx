'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Methodology & Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header-clean ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-clean-container">
        {/* Monogram Brand */}
        <a href="#" className="nav-brand-clean">
          <span className="brand-monogram">KM</span>
          <span className="brand-dot">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links-clean">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-clean-item">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="nav-actions-clean">
          <a
            href={PROFILE.cvPath}
            download="Kerollos_Mansour_CV.pdf"
            className="nav-cv-pill"
            title="Download CV (PDF)"
          >
            <Download size={14} />
            <span>CV</span>
          </a>

          <div className="nav-social-divider" />

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-icon-btn"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-icon-btn"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="nav-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="nav-mobile-footer">
            <a
              href={PROFILE.cvPath}
              download="Kerollos_Mansour_CV.pdf"
              className="btn-clean-secondary mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={15} />
              <span>Download CV (PDF)</span>
            </a>
            <div className="mobile-social-group">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="nav-social-icon-btn">
                <Github size={18} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="nav-social-icon-btn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
