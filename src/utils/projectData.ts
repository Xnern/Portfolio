import { Project } from './types';
import { v4 as uuidv4 } from 'uuid';
const STORAGE_KEY = 'portfolio_projects';
// Sample project data
const sampleProjects: Project[] = [{
  id: uuidv4(),
  title: 'Plateforme E-commerce',
  description: 'Une plateforme e-commerce complète avec fonctionnalités de recherche, filtrage, panier et paiement sécurisé.',
  context: "Le client avait besoin d'une solution e-commerce moderne pour remplacer son site vieillissant. Les principales problématiques étaient la performance, l'expérience utilisateur mobile et la simplicité de gestion des produits.",
  role: "Développeur principal responsable de l'architecture technique, du développement front-end et back-end, et de l'intégration des API de paiement.",
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'AWS S3', 'Redis'],
  solution: "J'ai développé une application React pour le front-end avec un design responsive, et une API RESTful avec Node.js pour le back-end. L'architecture a été conçue pour être évolutive avec mise en cache Redis pour optimiser les performances.",
  results: "Augmentation de 30% du taux de conversion mobile, réduction de 60% du temps de chargement des pages, et simplification du processus d'achat réduisant l'abandon de panier de 25%.",
  imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  githubUrl: 'https://github.com',
  liveUrl: 'https://example.com',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}, {
  id: uuidv4(),
  title: 'Application Météo',
  description: 'Une application météo qui fournit des données en temps réel, des prévisions et des cartes interactives.',
  context: "Développer une application météo intuitive capable d'afficher des prévisions précises et des alertes en temps réel pour les utilisateurs du monde entier.",
  role: "Développeur front-end responsable de l'interface utilisateur, de la visualisation des données météorologiques et de l'intégration des API météo.",
  technologies: ['React', 'TypeScript', 'Leaflet.js', 'OpenWeatherMap API', 'Chart.js', 'PWA'],
  solution: "J'ai créé une Progressive Web App avec React qui fonctionne hors ligne et affiche des données météo via des graphiques interactifs et des cartes. L'application utilise la géolocalisation pour fournir des prévisions locales précises.",
  results: "Plus de 10 000 utilisateurs actifs mensuels, temps de chargement initial de moins de 2 secondes, et fonctionnalité hors ligne permettant l'accès aux dernières prévisions sans connexion internet.",
  imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  githubUrl: 'https://github.com',
  liveUrl: 'https://example.com',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}, {
  id: uuidv4(),
  title: 'Système de Gestion de Contenu',
  description: "Un CMS sur mesure pour une agence de presse permettant la publication multicanal et la gestion des droits d'accès.",
  context: "L'agence de presse avait besoin d'un système permettant à ses journalistes de créer, éditer et publier du contenu sur différentes plateformes simultanément, avec un workflow d'approbation complexe.",
  role: "Architecte technique et développeur full-stack, responsable de la conception du système, du développement de l'API et de l'interface d'administration.",
  technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  solution: "J'ai conçu une architecture basée sur GraphQL pour une API flexible, avec un système de rôles et permissions avancé. L'interface d'administration React permet l'édition en temps réel et la prévisualisation sur différents canaux.",
  results: 'Réduction de 70% du temps de publication, augmentation de 40% de la productivité des journalistes, et capacité à publier sur 5 canaux différents simultanément.',
  imageUrl: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  githubUrl: 'https://github.com',
  liveUrl: 'https://example.com',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}];
// Initialize projects in localStorage if none exist
const initializeProjects = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleProjects));
  }
};
// Get all projects
export const getProjects = (): Project[] => {
  initializeProjects();
  const projectsJson = localStorage.getItem(STORAGE_KEY);
  return projectsJson ? JSON.parse(projectsJson) : [];
};
// Get a specific project by ID
export const getProjectById = (id: string): Project | undefined => {
  const projects = getProjects();
  return projects.find(project => project.id === id);
};
// Save a new project or update an existing one
export const saveProject = (project: Project): void => {
  const projects = getProjects();
  const existingIndex = projects.findIndex(p => p.id === project.id);
  if (existingIndex >= 0) {
    // Update existing project
    projects[existingIndex] = project;
  } else {
    // Add new project
    projects.push(project);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};
// Delete a project
export const deleteProject = (id: string): void => {
  const projects = getProjects();
  const filteredProjects = projects.filter(project => project.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProjects));
};