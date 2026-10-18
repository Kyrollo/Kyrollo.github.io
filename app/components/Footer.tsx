'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/profileData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070A12] border-t border-slate-800 text-slate-400 text-xs font-['Inter']">
      {/* 2px Gradient Accent Line */}
      <div 
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#5EEAD4] to-[#818CF8]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#0E121B] border border-slate-800 flex items-center justify-center p-1.5 text-white">
              <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left Stem (K, M, and I) */}
                <path d="M16 16 V48" stroke="url(#foot-kmai-grad)" strokeWidth="4" strokeLinecap="round" />
                <circle cx="16" cy="16" r="2.5" fill="#5EEAD4" />
                <circle cx="16" cy="48" r="2.5" fill="#818CF8" />

                {/* M Valley & K Upper arm */}
                <path d="M16 16 L27 32 L38 16" stroke="url(#foot-kmai-grad)" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="38" cy="16" r="2.5" fill="#5EEAD4" />

                {/* A Crossbar */}
                <path d="M21 24.5 H33" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" />

                {/* K Lower leg */}
                <path d="M27 32 L38 48" stroke="url(#foot-kmai-grad)" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="38" cy="48" r="2.5" fill="#818CF8" />

                {/* M Right wing & I pillar */}
                <path d="M38 16 L48 30 V48" stroke="url(#foot-kmai-grad)" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="48" cy="16" r="3" fill="#818CF8" />
                <circle cx="48" cy="48" r="2.5" fill="#818CF8" />

                {/* Central AI Neural Core */}
                <circle cx="27" cy="32" r="4.2" fill="#0E121B" stroke="#5EEAD4" strokeWidth="2.2" />
                <circle cx="27" cy="32" r="2" fill="#5EEAD4" />

                <defs>
                  <linearGradient id="foot-kmai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5EEAD4" />
                    <stop offset="100%" stopColor="#818CF8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
                {PROFILE.name}
              </h4>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                Software AI Engineer &bull; Agentic AI Engineer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#engineering" className="hover:text-white transition-colors">Engineering</a>
            <a href="#education" className="hover:text-white transition-colors">Credentials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href={PROFILE.cvPath} download="Kerollos_Mansour_CV.pdf" className="text-[#5EEAD4] hover:underline font-medium">
              Resume (PDF)
            </a>
          </div>

          <button 
            onClick={scrollToTop} 
            className="p-2.5 rounded-xl bg-[#0E121B] hover:bg-[#151B27] border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-500">
          <p>
            &copy; 2026 {PROFILE.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a 
              href={PROFILE.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 text-slate-400 hover:text-white transition-colors" 
              title="GitHub"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a 
              href={PROFILE.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 text-slate-400 hover:text-[#5EEAD4] transition-colors" 
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href={`mailto:${PROFILE.email}`} 
              className="p-1.5 text-slate-400 hover:text-[#5EEAD4] transition-colors" 
              title="Email"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
