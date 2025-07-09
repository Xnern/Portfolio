import React, { useEffect, useState } from 'react';
import { ProjectGrid } from '../components/ProjectGrid';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Project } from '../utils/types';
import { getProjects } from '../utils/projectData';
export function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    // Load projects from local storage
    setProjects(getProjects());
  }, []);
  return <main className="w-full">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <section id="projects" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Mes Projets</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-12"></div>
          {projects.length > 0 ? <ProjectGrid projects={projects} /> : <div className="text-center py-20 bg-gray-900/30 rounded-lg">
              <p className="text-gray-400">
                Aucun projet pour le moment. Ajoutez-en depuis le panneau
                d'administration.
              </p>
            </div>}
        </div>
      </section>
      <TestimonialsSection />
      <ContactSection />
    </main>;
}