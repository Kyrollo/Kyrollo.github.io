'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Menu, X, Cpu } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Featured Systems', href: '#slider' },
    { label: 'All Projects (13)', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container">
        {/* Brand */}
        <a href="#" className="nav-brand">
          <div className="nav-avatar-ring">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PROFILE.avatar} alt={PROFILE.name} className="nav-avatar-img" />
          </div>
          <div className="nav-brand-text">
            <span className="nav-name">{PROFILE.name}</span>
            <span className="nav-role">Software AI Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-menu-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-menu-item">
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            title="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn"
            title="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={PROFILE.cvPath}
            download="Kerollos_Mansour_CV.pdf"
            className="btn-download-cv"
            title="Download Full Curriculum Vitae"
          >
            <Download size={15} />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mobile-nav-actions">
            <a
              href={PROFILE.cvPath}
              download="Kerollos_Mansour_CV.pdf"
              className="btn-download-cv mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={16} />
              <span>Download CV (PDF)</span>
            </a>
            <div className="mobile-social-row">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                <Github size={18} /> GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
