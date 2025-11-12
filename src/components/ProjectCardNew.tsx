import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLinkIcon, GithubIcon, CodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
}

export function ProjectCardNew({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#FFD700"
        glareBorderRadius="16px"
        scale={1.02}
        transitionSpeed={1000}
        className="h-full"
      >
        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all h-full flex flex-col group">
          {/* Image */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-yellow-500/10 to-transparent">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <CodeIcon size={64} className="text-yellow-500/30" />
              </div>
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

            {/* Category badge */}
            {project.category && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">
                  {project.category}
                </span>
              </div>
            )}

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-yellow-500/20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Voir le code source de ${project.title} sur GitHub`}
                >
                  <GithubIcon size={24} aria-hidden="true" />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-black/80 rounded-full flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Voir le site en ligne de ${project.title}`}
                >
                  <ExternalLinkIcon size={24} aria-hidden="true" />
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 flex-1 line-clamp-3">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-500 text-xs font-medium"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-500 text-xs font-medium">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* View details button */}
            <Link to={`/project/${project.id}`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black border border-yellow-500/30 hover:border-yellow-500 rounded-lg font-medium transition-all flex items-center justify-center gap-2 group/btn"
                aria-label={`Voir les détails du projet ${project.title}`}
              >
                Voir les détails
                <motion.span
                  initial={{ x: 0 }}
                  className="group-hover/btn:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-yellow-500/20 border-l-[40px] border-l-transparent transform rotate-0" />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
