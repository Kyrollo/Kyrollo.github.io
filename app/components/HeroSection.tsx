'use client';

import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function HeroSection() {
  return (
    <section className="hero-section-clean">
      <div className="hero-clean-grid">
        {/* Left Column: Introduction & Call-to-Actions */}
        <div className="hero-clean-content">
          <p className="hero-greeting">Hi, I&apos;m</p>

          <h1 className="hero-clean-name">
            <span className="name-first">Kerollos</span>{' '}
            <span className="name-last">Mansour</span>
          </h1>

          <h2 className="hero-clean-role">{PROFILE.title}</h2>

          <p className="hero-clean-bio">
            {PROFILE.bio}
          </p>

          <div className="hero-clean-actions">
            <a href="#projects" className="btn-clean-primary">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>

            <a
              href={PROFILE.cvPath}
              download="Kerollos_Mansour_CV.pdf"
              className="btn-clean-secondary"
            >
              <span>Download CV</span>
              <Download size={17} />
            </a>
          </div>
        </div>

        {/* Right Column: Clean Portrait Cutout blending seamlessly into dark background */}
        <div className="hero-clean-portrait">
          <div className="portrait-cutout-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/kero_hero.png"
              alt={PROFILE.name}
              className="portrait-cutout-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
