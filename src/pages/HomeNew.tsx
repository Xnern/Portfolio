import React from 'react';
import { HeroNew } from '../components/HeroNew';
import { AboutSectionNew } from '../components/AboutSectionNew';
import { SkillsSectionNew } from '../components/SkillsSectionNew';
import { ProjectsSectionNew } from '../components/ProjectsSectionNew';
import { TestimonialsSectionNew } from '../components/TestimonialsSectionNew';
import { ContactSectionNew } from '../components/ContactSectionNew';

export function HomeNew() {
  return (
    <main className="w-full">
      <HeroNew />
      <AboutSectionNew />
      <SkillsSectionNew />
      <ProjectsSectionNew />
      <TestimonialsSectionNew />
      <ContactSectionNew />
    </main>
  );
}
