import { Skill, SkillCategory } from './types';
import { v4 as uuidv4 } from 'uuid';
const SKILLS_STORAGE_KEY = 'portfolio_skills';
const CATEGORIES_STORAGE_KEY = 'portfolio_skill_categories';
// Sample skill categories
const sampleCategories: SkillCategory[] = [{
  id: uuidv4(),
  name: 'Frontend'
}, {
  id: uuidv4(),
  name: 'Backend'
}, {
  id: uuidv4(),
  name: 'Databases'
}, {
  id: uuidv4(),
  name: 'Tools & DevOps'
}];
// Sample skills data
const sampleSkills: Skill[] = [{
  id: uuidv4(),
  name: 'HTML/CSS',
  level: 90,
  category: 'Frontend'
}, {
  id: uuidv4(),
  name: 'JavaScript',
  level: 85,
  category: 'Frontend'
}, {
  id: uuidv4(),
  name: 'React',
  level: 80,
  category: 'Frontend'
}, {
  id: uuidv4(),
  name: 'PHP',
  level: 85,
  category: 'Backend'
}, {
  id: uuidv4(),
  name: 'Laravel',
  level: 90,
  category: 'Backend'
}, {
  id: uuidv4(),
  name: 'Node.js',
  level: 75,
  category: 'Backend'
}, {
  id: uuidv4(),
  name: 'MySQL',
  level: 80,
  category: 'Databases'
}, {
  id: uuidv4(),
  name: 'MongoDB',
  level: 70,
  category: 'Databases'
}, {
  id: uuidv4(),
  name: 'Git',
  level: 85,
  category: 'Tools & DevOps'
}, {
  id: uuidv4(),
  name: 'Docker',
  level: 65,
  category: 'Tools & DevOps'
}];
// Initialize skills in localStorage if none exist
const initializeSkills = () => {
  if (!localStorage.getItem(SKILLS_STORAGE_KEY)) {
    localStorage.setItem(SKILLS_STORAGE_KEY, JSON.stringify(sampleSkills));
  }
};
// Initialize categories in localStorage if none exist
const initializeCategories = () => {
  if (!localStorage.getItem(CATEGORIES_STORAGE_KEY)) {
    localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(sampleCategories));
  }
};
// Get all skills
export const getSkills = (): Skill[] => {
  initializeSkills();
  const skillsJson = localStorage.getItem(SKILLS_STORAGE_KEY);
  return skillsJson ? JSON.parse(skillsJson) : [];
};
// Get all skill categories
export const getSkillCategories = (): SkillCategory[] => {
  initializeCategories();
  const categoriesJson = localStorage.getItem(CATEGORIES_STORAGE_KEY);
  return categoriesJson ? JSON.parse(categoriesJson) : [];
};
// Save a new skill or update an existing one
export const saveSkill = (skill: Skill): void => {
  const skills = getSkills();
  const existingIndex = skills.findIndex(s => s.id === skill.id);
  if (existingIndex >= 0) {
    // Update existing skill
    skills[existingIndex] = skill;
  } else {
    // Add new skill
    skills.push(skill);
  }
  localStorage.setItem(SKILLS_STORAGE_KEY, JSON.stringify(skills));
};
// Delete a skill
export const deleteSkill = (id: string): void => {
  const skills = getSkills();
  const filteredSkills = skills.filter(skill => skill.id !== id);
  localStorage.setItem(SKILLS_STORAGE_KEY, JSON.stringify(filteredSkills));
};
// Save a new category or update an existing one
export const saveSkillCategory = (category: SkillCategory): void => {
  const categories = getSkillCategories();
  const existingIndex = categories.findIndex(c => c.id === category.id);
  if (existingIndex >= 0) {
    // Update existing category
    categories[existingIndex] = category;
  } else {
    // Add new category
    categories.push(category);
  }
  localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(categories));
};
// Delete a category
export const deleteSkillCategory = (id: string): void => {
  const categories = getSkillCategories();
  const filteredCategories = categories.filter(category => category.id !== id);
  localStorage.setItem(CATEGORIES_STORAGE_KEY, JSON.stringify(filteredCategories));
};