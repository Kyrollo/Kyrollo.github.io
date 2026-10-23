'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { SentientSparkLogo } from './SentientSparkLogo';

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
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-sm">
              <SentientSparkLogo className="w-full h-full" size={32} />
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
