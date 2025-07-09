import React from 'react';
import { Project } from '../utils/types';
import { GithubIcon, ExternalLinkIcon, ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({
  project
}: ProjectCardProps) {
  return <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group hover:border-yellow-500/50 transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        {project.imageUrl ? <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500">No image</span>
          </div>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-500 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        {project.technologies && project.technologies.length > 0 && <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md">
                {tech}
              </span>)}
            {project.technologies.length > 4 && <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md">
                +{project.technologies.length - 4}
              </span>}
          </div>}
        <div className="flex justify-between items-center">
          <div className="space-x-2">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-yellow-500 transition-colors">
                <GithubIcon size={18} className="mr-1" />
                <span>GitHub</span>
              </a>}
          </div>
          <div className="flex space-x-4">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors">
                <span>Demo</span>
                <ExternalLinkIcon size={16} className="ml-1" />
              </a>}
            <Link to={`/project/${project.id}`} className="inline-flex items-center text-yellow-500 hover:text-yellow-400 transition-colors">
              <span>Détails</span>
              <ArrowRightIcon size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>;
}