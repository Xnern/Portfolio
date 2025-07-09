import React, { useEffect, useState } from 'react';
import { ProjectForm } from '../components/ProjectForm';
import { SkillForm } from '../components/SkillForm';
import { CategoryForm } from '../components/CategoryForm';
import { AboutForm } from '../components/AboutForm';
import { TestimonialForm } from '../components/TestimonialForm';
import { Project, Skill, SkillCategory, AboutInfo, Testimonial } from '../utils/types';
import { getProjects, saveProject, deleteProject } from '../utils/projectData';
import { getSkills, saveSkill, deleteSkill, getSkillCategories, saveSkillCategory, deleteSkillCategory } from '../utils/skillsData';
import { getAboutInfo, saveAboutInfo } from '../utils/aboutData';
import { getTestimonials, saveTestimonial, deleteTestimonial } from '../utils/testimonialData';
import { PencilIcon, TrashIcon, LayersIcon, TagIcon, UserIcon, MessageSquareIcon } from 'lucide-react';
export function Admin() {
  // Projects state
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  // Skills state
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  // Categories state
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [editingCategory, setEditingCategory] = useState<SkillCategory | null>(null);
  // About state
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null);
  // Testimonials state
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  // Active tab state
  const [activeTab, setActiveTab] = useState<'projects' | 'skills' | 'categories' | 'about' | 'testimonials'>('projects');
  useEffect(() => {
    loadProjects();
    loadSkills();
    loadCategories();
    loadAboutInfo();
    loadTestimonials();
  }, []);
  // Project handlers
  const loadProjects = () => {
    setProjects(getProjects());
  };
  const handleSaveProject = (project: Project) => {
    saveProject(project);
    setEditingProject(null);
    loadProjects();
  };
  const handleDeleteProject = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      deleteProject(id);
      loadProjects();
    }
  };
  // Skill handlers
  const loadSkills = () => {
    setSkills(getSkills());
  };
  const handleSaveSkill = (skill: Skill) => {
    saveSkill(skill);
    setEditingSkill(null);
    loadSkills();
  };
  const handleDeleteSkill = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette compétence ?')) {
      deleteSkill(id);
      loadSkills();
    }
  };
  // Category handlers
  const loadCategories = () => {
    setCategories(getSkillCategories());
  };
  const handleSaveCategory = (category: SkillCategory) => {
    saveSkillCategory(category);
    setEditingCategory(null);
    loadCategories();
  };
  const handleDeleteCategory = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
      deleteSkillCategory(id);
      loadCategories();
    }
  };
  // About handlers
  const loadAboutInfo = () => {
    setAboutInfo(getAboutInfo());
  };
  const handleSaveAboutInfo = (info: AboutInfo) => {
    saveAboutInfo(info);
    loadAboutInfo();
  };
  // Testimonial handlers
  const loadTestimonials = () => {
    setTestimonials(getTestimonials());
  };
  const handleSaveTestimonial = (testimonial: Testimonial) => {
    saveTestimonial(testimonial);
    setEditingTestimonial(null);
    loadTestimonials();
  };
  const handleDeleteTestimonial = (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) {
      deleteTestimonial(id);
      loadTestimonials();
    }
  };
  return <div className="max-w-7xl mx-auto py-12 px-8">
      <h1 className="text-3xl font-bold mb-2">Panneau d'Administration</h1>
      <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-800 mb-8">
        <button className={`py-3 px-5 font-medium ${activeTab === 'projects' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveTab('projects')}>
          Projets
        </button>
        <button className={`py-3 px-5 font-medium ${activeTab === 'skills' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveTab('skills')}>
          Compétences
        </button>
        <button className={`py-3 px-5 font-medium ${activeTab === 'categories' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveTab('categories')}>
          Catégories
        </button>
        <button className={`py-3 px-5 font-medium ${activeTab === 'about' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveTab('about')}>
          À Propos
        </button>
        <button className={`py-3 px-5 font-medium ${activeTab === 'testimonials' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-400 hover:text-white'}`} onClick={() => setActiveTab('testimonials')}>
          Témoignages
        </button>
      </div>
      {/* Projects Tab */}
      {activeTab === 'projects' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <LayersIcon className="mr-2" size={22} />
              Vos Projets
            </h2>
            {projects.length > 0 ? <div className="space-y-4">
                {projects.map(project => <div key={project.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium text-yellow-500">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mt-2 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => setEditingProject(project)} className="p-2 text-gray-400 hover:text-yellow-500">
                        <PencilIcon size={18} />
                      </button>
                      <button onClick={() => handleDeleteProject(project.id)} className="p-2 text-gray-400 hover:text-red-500">
                        <TrashIcon size={18} />
                      </button>
                    </div>
                  </div>)}
              </div> : <div className="text-center py-12 bg-gray-900/30 rounded-lg">
                <p className="text-gray-400">
                  Aucun projet. Ajoutez votre premier projet !
                </p>
              </div>}
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-6">
              {editingProject ? 'Modifier le Projet' : 'Ajouter un Projet'}
            </h2>
            <ProjectForm project={editingProject} onSave={handleSaveProject} onCancel={() => setEditingProject(null)} />
          </div>
        </div>}
      {/* Skills Tab */}
      {activeTab === 'skills' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <TagIcon className="mr-2" size={22} />
              Vos Compétences
            </h2>
            {skills.length > 0 ? <div className="space-y-4">
                {skills.map(skill => <div key={skill.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex justify-between items-start">
                    <div className="w-full">
                      <div className="flex justify-between mb-2">
                        <h3 className="text-xl font-medium text-yellow-500">
                          {skill.name}
                        </h3>
                        <span className="text-gray-400">{skill.category}</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2.5 mb-1">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{
                  width: `${skill.level}%`
                }}></div>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button onClick={() => setEditingSkill(skill)} className="p-2 text-gray-400 hover:text-yellow-500">
                        <PencilIcon size={18} />
                      </button>
                      <button onClick={() => handleDeleteSkill(skill.id)} className="p-2 text-gray-400 hover:text-red-500">
                        <TrashIcon size={18} />
                      </button>
                    </div>
                  </div>)}
              </div> : <div className="text-center py-12 bg-gray-900/30 rounded-lg">
                <p className="text-gray-400">
                  Aucune compétence. Ajoutez votre première compétence !
                </p>
              </div>}
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-6">
              {editingSkill ? 'Modifier la Compétence' : 'Ajouter une Compétence'}
            </h2>
            <SkillForm skill={editingSkill} onSave={handleSaveSkill} onCancel={() => setEditingSkill(null)} />
          </div>
        </div>}
      {/* Categories Tab */}
      {activeTab === 'categories' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <TagIcon className="mr-2" size={22} />
              Catégories de Compétences
            </h2>
            {categories.length > 0 ? <div className="space-y-4">
                {categories.map(category => <div key={category.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex justify-between items-center">
                    <h3 className="text-xl font-medium text-yellow-500">
                      {category.name}
                    </h3>
                    <div className="flex space-x-2">
                      <button onClick={() => setEditingCategory(category)} className="p-2 text-gray-400 hover:text-yellow-500">
                        <PencilIcon size={18} />
                      </button>
                      <button onClick={() => handleDeleteCategory(category.id)} className="p-2 text-gray-400 hover:text-red-500">
                        <TrashIcon size={18} />
                      </button>
                    </div>
                  </div>)}
              </div> : <div className="text-center py-12 bg-gray-900/30 rounded-lg">
                <p className="text-gray-400">
                  Aucune catégorie. Ajoutez votre première catégorie !
                </p>
              </div>}
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-6">
              {editingCategory ? 'Modifier la Catégorie' : 'Ajouter une Catégorie'}
            </h2>
            <CategoryForm category={editingCategory} onSave={handleSaveCategory} onCancel={() => setEditingCategory(null)} />
          </div>
        </div>}
      {/* About Tab */}
      {activeTab === 'about' && aboutInfo && <div>
          <div className="flex items-center mb-6">
            <UserIcon className="mr-2" size={22} />
            <h2 className="text-2xl font-semibold">
              Informations Personnelles
            </h2>
          </div>
          <AboutForm aboutInfo={aboutInfo} onSave={handleSaveAboutInfo} />
        </div>}
      {/* Testimonials Tab */}
      {activeTab === 'testimonials' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <MessageSquareIcon className="mr-2" size={22} />
              Témoignages Clients
            </h2>
            {testimonials.length > 0 ? <div className="space-y-4">
                {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex justify-between">
                    <div>
                      <div className="flex items-center mb-3">
                        {testimonial.imageUrl ? <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                          </div> : <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
                            <span className="text-yellow-500 font-bold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>}
                        <div>
                          <h3 className="font-medium text-yellow-500">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 line-clamp-2">
                        {testimonial.content}
                      </p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button onClick={() => setEditingTestimonial(testimonial)} className="p-2 text-gray-400 hover:text-yellow-500">
                        <PencilIcon size={18} />
                      </button>
                      <button onClick={() => handleDeleteTestimonial(testimonial.id)} className="p-2 text-gray-400 hover:text-red-500">
                        <TrashIcon size={18} />
                      </button>
                    </div>
                  </div>)}
              </div> : <div className="text-center py-12 bg-gray-900/30 rounded-lg">
                <p className="text-gray-400">
                  Aucun témoignage. Ajoutez votre premier témoignage client !
                </p>
              </div>}
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-6">
              {editingTestimonial ? 'Modifier le Témoignage' : 'Ajouter un Témoignage'}
            </h2>
            <TestimonialForm testimonial={editingTestimonial} onSave={handleSaveTestimonial} onCancel={() => setEditingTestimonial(null)} />
          </div>
        </div>}
    </div>;
}