'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/profileData';
import { SentientSparkLogo } from './SentientSparkLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['projects', 'about', 'experience', 'engineering', 'education', 'contact'];
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Work', href: '/#projects', id: 'projects' },
    { label: 'About', href: '/#about', id: 'about' },
    { label: 'Experience', href: '/#experience', id: 'experience' },
    { label: 'Engineering', href: '/#engineering', id: 'engineering' },
    { label: 'Credentials', href: '/#education', id: 'education' },
    { label: 'Contact', href: '/#contact', id: 'contact' },
  ];

  return (
    <>
      {/* 2px Mint Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#818CF8] z-[9999] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true"
      />

      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#070A12]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand with KM Monogram & Open to work badge */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2.5 group" aria-label="Kerollos Mansour">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                <SentientSparkLogo className="w-full h-full" size={36} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-100 font-['Space_Grotesk'] group-hover:text-white transition-colors leading-none">
                  Kerollos Mansour
                </span>
                <span className="text-[11px] text-slate-400 font-mono mt-1">
                  Software AI &bull; Agentic AI Engineer
                </span>
              </div>
            </a>

            {/* "Open to work" Status Indicator with Tooltip */}
            <div className="relative group/status hidden md:flex items-center ml-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-medium cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to work</span>
              </div>
              <div className="absolute top-full left-0 mt-2 hidden group-hover/status:block z-50 w-64 p-2.5 bg-[#0E121B] border border-slate-800 rounded-xl shadow-xl text-xs text-slate-300 font-['Inter'] pointer-events-none">
                <p className="font-semibold text-white mb-1">Available for Roles Worldwide</p>
                <p className="text-slate-400">Software AI & Agentic AI Engineer · Cairo, Egypt · Open to Remote & Relocation</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#0E121B]/90 border border-slate-800/80 px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'text-[#5EEAD4] bg-[#151B27] font-semibold shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Resume & Socials */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PROFILE.cvPath}
              download="Kerollos_Mansour_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#5EEAD4] hover:bg-[#2DD4BF] text-[#070A12] text-xs font-semibold transition-all duration-200 hover:scale-[1.02] shadow-sm shadow-[#5EEAD4]/20"
              title="Download Resume"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>

            <div className="w-[1px] h-4 bg-slate-800 mx-1" />

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#0E121B] transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-[#5EEAD4] hover:bg-[#0E121B] transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="sm:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#0E121B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-800 bg-[#070A12]/95 backdrop-blur-xl px-4 py-5 space-y-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-medium w-fit mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to work (Software & Agentic AI)</span>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-[#0E121B] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <a
                href={PROFILE.cvPath}
                download="Kerollos_Mansour_CV.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#5EEAD4] text-[#070A12] text-xs font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={13} />
                <span>Resume (PDF)</span>
              </a>

              <div className="flex items-center gap-2">
                <a 
                  href={PROFILE.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={PROFILE.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-[#5EEAD4]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
