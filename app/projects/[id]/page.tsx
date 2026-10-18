import React from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA, ProjectData } from '../../data/projectsData';
import ProjectDetailClient from './ProjectDetailClient';

const ALIASES: { [key: string]: string } = {
  'tasktune-ai': 'tasktune',
  'chatbot-fixed-solutions': 'fixedrag',
};

export function generateStaticParams() {
  const baseParams = PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
  const aliasParams = Object.keys(ALIASES).map((alias) => ({
    id: alias,
  }));
  return [...baseParams, ...aliasParams];
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const resolvedId = ALIASES[params.id] || params.id;
  const project = PROJECTS_DATA.find((p) => p.id === resolvedId);
  if (!project) {
    return {
      title: 'Project Not Found | Kerollos Mansour',
    };
  }
  return {
    title: `${project.name} — Kerollos Mansour | Software AI Engineer`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const resolvedId = ALIASES[params.id] || params.id;
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === resolvedId);

  if (currentIndex === -1) {
    notFound();
  }

  const project = PROJECTS_DATA[currentIndex];
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
