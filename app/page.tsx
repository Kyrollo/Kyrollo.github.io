'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import ProjectSlider from './components/ProjectSlider';
import ProjectsGrid from './components/ProjectsGrid';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsMatrix from './components/SkillsMatrix';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { ProjectData } from './data/projectsData';

export default function MasterPortfolioPage() {
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectData | null>(null);

  const handleOpenModal = (project: ProjectData) => {
    setSelectedModalProject(project);
  };

  const handleCloseModal = () => {
    setSelectedModalProject(null);
  };

  const handleJumpToSlider = (project: ProjectData) => {
    const sliderElement = document.getElementById('slider');
    if (sliderElement) {
      sliderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      <main className="portfolio-main-content">
        {/* Hero Section with Photo Integration & Key CTAs */}
        <HeroSection />

        {/* Engineering Philosophy & Production Standards */}
        <PhilosophySection />

        {/* Featured Project Slider with 1080p Video Demos & Screenshot Gallery */}
        <ProjectSlider onOpenModal={handleOpenModal} />

        {/* Complete Searchable 13-Platform Catalog */}
        <ProjectsGrid
          onSelectProject={handleOpenModal}
          onJumpToSlider={handleJumpToSlider}
        />

        {/* Professional Work Experience Timeline */}
        <ExperienceSection />

        {/* Education & Industry Certifications */}
        <EducationSection />

        {/* Core Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Direct Contact Hub & Resume Download */}
        <ContactSection />
      </main>

      {/* Global Systems Engineer Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedModalProject}
        onClose={handleCloseModal}
      />
    </div>
  );
}
