import { Testimonial } from './types';
import { v4 as uuidv4 } from 'uuid';
const TESTIMONIALS_STORAGE_KEY = 'portfolio_testimonials';
// Sample testimonials data
const sampleTestimonials: Testimonial[] = [{
  id: uuidv4(),
  name: 'Marie Dupont',
  company: 'TechInnovate',
  role: 'Directrice Marketing',
  content: "John a complètement transformé notre site e-commerce. Non seulement l'interface utilisateur est maintenant intuitive et moderne, mais les performances se sont améliorées de façon spectaculaire. Le temps de chargement a été réduit de 60%, ce qui a contribué à une augmentation de 25% de notre taux de conversion. Un vrai professionnel qui comprend les besoins commerciaux au-delà du code.",
  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
}, {
  id: uuidv4(),
  name: 'Thomas Lefebvre',
  company: 'FinanceApp',
  role: 'CTO',
  content: 'Collaborer avec John sur notre application de gestion financière a été une expérience exceptionnelle. Son expertise technique, notamment en React et Node.js, nous a permis de développer une solution sécurisée et performante dans des délais serrés. Sa capacité à traduire nos exigences métier en fonctionnalités techniques est remarquable.',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
}, {
  id: uuidv4(),
  name: 'Sophie Martin',
  company: 'EduTech Solutions',
  role: 'Product Owner',
  content: "John a développé notre plateforme d'apprentissage en ligne avec une attention particulière aux détails. Sa maîtrise des technologies front-end et back-end nous a permis de créer une expérience utilisateur fluide et engageante. Grâce à son travail, nous avons pu augmenter le temps moyen passé sur notre plateforme de 45%. Je recommande vivement ses services.",
  imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80'
}];
// Initialize testimonials in localStorage if none exist
const initializeTestimonials = () => {
  if (!localStorage.getItem(TESTIMONIALS_STORAGE_KEY)) {
    localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(sampleTestimonials));
  }
};
// Get all testimonials
export const getTestimonials = (): Testimonial[] => {
  initializeTestimonials();
  const testimonialsJson = localStorage.getItem(TESTIMONIALS_STORAGE_KEY);
  return testimonialsJson ? JSON.parse(testimonialsJson) : [];
};
// Save a new testimonial or update an existing one
export const saveTestimonial = (testimonial: Testimonial): void => {
  const testimonials = getTestimonials();
  const existingIndex = testimonials.findIndex(t => t.id === testimonial.id);
  if (existingIndex >= 0) {
    // Update existing testimonial
    testimonials[existingIndex] = testimonial;
  } else {
    // Add new testimonial
    testimonials.push(testimonial);
  }
  localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(testimonials));
};
// Delete a testimonial
export const deleteTestimonial = (id: string): void => {
  const testimonials = getTestimonials();
  const filteredTestimonials = testimonials.filter(testimonial => testimonial.id !== id);
  localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(filteredTestimonials));
};