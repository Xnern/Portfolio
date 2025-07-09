import { AboutInfo } from './types';
const ABOUT_STORAGE_KEY = 'portfolio_about';
// Sample about data
const sampleAbout: AboutInfo = {
  name: 'John Developer',
  title: 'Développeur Full-Stack',
  specialization: "Expert en développement d'applications web modernes et performantes",
  bio: "Avec plus de 5 ans d'expérience dans le développement web, je me spécialise dans la création d'applications robustes et évolutives. Ma passion pour les technologies web et mon engagement envers l'excellence technique me permettent de livrer des solutions qui répondent parfaitement aux besoins de mes clients.",
  philosophy: "Je crois en une approche agile et centrée sur l'utilisateur, où la communication transparente et la qualité du code sont primordiales. Chaque projet est une opportunité d'apprendre et d'innover.",
  values: ['Qualité et excellence technique', 'Innovation et créativité', 'Communication transparente', 'Apprentissage continu'],
  photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  location: 'Paris, France',
  email: 'john@devportfolio.com',
  phone: '+33 6 12 34 56 78',
  linkedin: 'https://linkedin.com/in/johndeveloper',
  github: 'https://github.com/johndeveloper'
};
// Initialize about in localStorage if none exists
const initializeAbout = () => {
  if (!localStorage.getItem(ABOUT_STORAGE_KEY)) {
    localStorage.setItem(ABOUT_STORAGE_KEY, JSON.stringify(sampleAbout));
  }
};
// Get about info
export const getAboutInfo = (): AboutInfo => {
  initializeAbout();
  const aboutJson = localStorage.getItem(ABOUT_STORAGE_KEY);
  return aboutJson ? JSON.parse(aboutJson) : sampleAbout;
};
// Save about info
export const saveAboutInfo = (about: AboutInfo): void => {
  localStorage.setItem(ABOUT_STORAGE_KEY, JSON.stringify(about));
};