'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EngineeringSection from './components/EngineeringSection';
import CredentialsSection from './components/CredentialsSection';
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
    <div className="min-h-screen bg-[#070A12] text-[#E8ECF3] relative selection:bg-[#5EEAD4] selection:text-[#070A12]">
      {/* Top Navbar with Scroll Progress Bar & Active Link Tracking */}
      <Navbar />

      <main>
        {/* 01 Hero Section */}
        <HeroSection />

        {/* 02 Featured Work (FixedRAG & TaskTune pinned) */}
        <ProjectsSection onOpenModal={handleOpenModal} />

        {/* 03 About Me & GitHub Activity */}
        <AboutSection />

        {/* 04 Professional Work Experience */}
        <ExperienceSection />

        {/* 05 Engineering Methodology & Stack (Merged System Architecture & Tools) */}
        <EngineeringSection />

        {/* 06 Academic Foundations & Verified Credentials */}
        <CredentialsSection />

        {/* 07 Working Contact Form (Web3Forms) */}
        <ContactSection />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedModalProject}
        onClose={handleCloseModal}
      />
    </div>
  );
}
