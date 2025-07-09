export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  context?: string;
  role?: string;
  technologies?: string[];
  solution?: string;
  results?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100 for progress bar
  category: string;
}
export interface SkillCategory {
  id: string;
  name: string;
}
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  imageUrl?: string;
  projectId?: string;
}
export interface AboutInfo {
  name: string;
  title: string;
  specialization: string;
  bio: string;
  philosophy: string;
  values: string[];
  photoUrl?: string;
  location?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}