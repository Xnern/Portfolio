import React, { useEffect, useState } from 'react';
import { Project } from '../utils/types';
import { v4 as uuidv4 } from 'uuid';
interface ProjectFormProps {
  project: Project | null;
  onSave: (project: Project) => void;
  onCancel: () => void;
}
export function ProjectForm({
  project,
  onSave,
  onCancel
}: ProjectFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [context, setContext] = useState('');
  const [role, setRole] = useState('');
  const [technologiesInput, setTechnologiesInput] = useState('');
  const [solution, setSolution] = useState('');
  const [results, setResults] = useState('');
  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setImageUrl(project.imageUrl || '');
      setGithubUrl(project.githubUrl || '');
      setLiveUrl(project.liveUrl || '');
      setContext(project.context || '');
      setRole(project.role || '');
      setTechnologiesInput(project.technologies ? project.technologies.join(', ') : '');
      setSolution(project.solution || '');
      setResults(project.results || '');
    } else {
      resetForm();
    }
  }, [project]);
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImageUrl('');
    setGithubUrl('');
    setLiveUrl('');
    setContext('');
    setRole('');
    setTechnologiesInput('');
    setSolution('');
    setResults('');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Parse technologies from comma-separated string
    const technologies = technologiesInput ? technologiesInput.split(',').map(tech => tech.trim()).filter(tech => tech) : undefined;
    const updatedProject: Project = {
      id: project?.id || uuidv4(),
      title,
      description,
      imageUrl: imageUrl || undefined,
      githubUrl: githubUrl || undefined,
      liveUrl: liveUrl || undefined,
      context: context || undefined,
      role: role || undefined,
      technologies,
      solution: solution || undefined,
      results: results || undefined,
      createdAt: project?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    onSave(updatedProject);
    resetForm();
  };
  return <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-medium">
            Titre du Projet*
          </label>
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium">
            Description*
          </label>
          <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" required></textarea>
        </div>
        <div>
          <label htmlFor="context" className="block mb-2 text-sm font-medium">
            Contexte / Problématique
          </label>
          <textarea id="context" value={context} onChange={e => setContext(e.target.value)} rows={3} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"></textarea>
        </div>
        <div>
          <label htmlFor="role" className="block mb-2 text-sm font-medium">
            Votre Rôle
          </label>
          <textarea id="role" value={role} onChange={e => setRole(e.target.value)} rows={2} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"></textarea>
        </div>
        <div>
          <label htmlFor="technologies" className="block mb-2 text-sm font-medium">
            Technologies (séparées par des virgules)
          </label>
          <input type="text" id="technologies" value={technologiesInput} onChange={e => setTechnologiesInput(e.target.value)} placeholder="React, Node.js, MongoDB, etc." className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" />
        </div>
        <div>
          <label htmlFor="solution" className="block mb-2 text-sm font-medium">
            Solution Apportée
          </label>
          <textarea id="solution" value={solution} onChange={e => setSolution(e.target.value)} rows={3} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"></textarea>
        </div>
        <div>
          <label htmlFor="results" className="block mb-2 text-sm font-medium">
            Résultats / Bénéfices
          </label>
          <textarea id="results" value={results} onChange={e => setResults(e.target.value)} rows={2} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"></textarea>
        </div>
        <div>
          <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium">
            URL de l'Image
          </label>
          <input type="url" id="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="https://example.com/image.jpg" />
        </div>
        <div>
          <label htmlFor="githubUrl" className="block mb-2 text-sm font-medium">
            URL GitHub
          </label>
          <input type="url" id="githubUrl" value={githubUrl} onChange={e => setGithubUrl(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="https://github.com/username/repo" />
        </div>
        <div>
          <label htmlFor="liveUrl" className="block mb-2 text-sm font-medium">
            URL du Site
          </label>
          <input type="url" id="liveUrl" value={liveUrl} onChange={e => setLiveUrl(e.target.value)} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500" placeholder="https://example.com" />
        </div>
      </div>
      <div className="mt-6 flex space-x-3">
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-5 py-2 rounded-lg transition-colors">
          Enregistrer
        </button>
        {project && <button type="button" onClick={onCancel} className="border border-gray-700 hover:border-gray-600 px-5 py-2 rounded-lg transition-colors">
            Annuler
          </button>}
      </div>
    </form>;
}