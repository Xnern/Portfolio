import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Project } from '../utils/types';
import { getProjectById } from '../utils/projectData';
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon, ClockIcon, UserIcon, WrenchIcon, LightbulbIcon, BarChartIcon } from 'lucide-react';
export function ProjectDetail() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      if (projectData) {
        setProject(projectData);
      }
      setLoading(false);
    }
  }, [id]);
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>;
  }
  if (!project) {
    return <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">Projet non trouvé</h2>
        <p className="text-gray-400 mb-6">
          Le projet que vous recherchez n'existe pas ou a été supprimé.
        </p>
        <Link to="/" className="flex items-center text-yellow-500 hover:text-yellow-400 transition-colors">
          <ArrowLeftIcon size={16} className="mr-2" />
          Retour à l'accueil
        </Link>
      </div>;
  }
  return <main className="w-full min-h-screen py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="flex items-center text-yellow-500 hover:text-yellow-400 transition-colors mb-8">
          <ArrowLeftIcon size={16} className="mr-2" />
          Retour aux projets
        </Link>
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          {/* Project Header */}
          {project.imageUrl && <div className="aspect-video w-full overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
            </div>}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-yellow-500 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-300 text-lg mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <GithubIcon size={18} className="mr-2" />
                  Code Source
                </a>}
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition-colors">
                  <ExternalLinkIcon size={18} className="mr-2" />
                  Voir en ligne
                </a>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Context/Problem */}
              {project.context && <div className="bg-gray-800/50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <ClockIcon size={20} className="mr-2 text-yellow-500" />
                    Contexte / Problématique
                  </h2>
                  <p className="text-gray-300">{project.context}</p>
                </div>}
              {/* Role */}
              {project.role && <div className="bg-gray-800/50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <UserIcon size={20} className="mr-2 text-yellow-500" />
                    Mon Rôle
                  </h2>
                  <p className="text-gray-300">{project.role}</p>
                </div>}
            </div>
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <WrenchIcon size={20} className="mr-2 text-yellow-500" />
                  Technologies Utilisées
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md">
                      {tech}
                    </span>)}
                </div>
              </div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Solution */}
              {project.solution && <div className="bg-gray-800/50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <LightbulbIcon size={20} className="mr-2 text-yellow-500" />
                    Solution Apportée
                  </h2>
                  <p className="text-gray-300">{project.solution}</p>
                </div>}
              {/* Results */}
              {project.results && <div className="bg-gray-800/50 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <BarChartIcon size={20} className="mr-2 text-yellow-500" />
                    Résultats
                  </h2>
                  <p className="text-gray-300">{project.results}</p>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </main>;
}