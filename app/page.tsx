'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsMatrix from './components/SkillsMatrix';
import EducationSection from './components/EducationSection';
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

  return (
    <div className="portfolio-app-root">
      {/* Minimalist Top Navbar */}
      <Navbar />

      <main className="portfolio-main-content">
        {/* Minimalist Hero Section with Seamless Photo Cutout */}
        <HeroSection />

        {/* Unified Projects Section (Showcase & Catalog) */}
        <ProjectsSection onOpenModal={handleOpenModal} />

        {/* Professional Career Experience Timeline */}
        <ExperienceSection />

        {/* Engineering Methodology & Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Education & Industry Certifications */}
        <EducationSection />

        {/* Direct Contact & Resume Hub */}
        <ContactSection />
      </main>

      {/* Global Minimalist Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={selectedModalProject}
        onClose={handleCloseModal}
      />
    </div>
  );
}
