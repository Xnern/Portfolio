import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectCardNew } from './ProjectCardNew';
import { FolderIcon } from 'lucide-react';

// Placeholder projects
const placeholderProjects = [
  {
    id: '1',
    title: 'CRM Inertia',
    description:
      'Application CRM complète développée avec Laravel et Inertia.js pour une gestion optimale des relations clients.',
    technologies: ['Laravel', 'Inertia.js', 'React', 'TailwindCSS', 'MySQL'],
    category: 'Web App',
    githubUrl: 'https://github.com/Xnern',
  },
  {
    id: '2',
    title: 'RAG Chatbot',
    description:
      'Chatbot intelligent utilisant la technologie RAG (Retrieval-Augmented Generation) pour des réponses contextuelles précises.',
    technologies: ['Python', 'LangChain', 'FastAPI', 'OpenAI', 'ChromaDB'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Xnern',
  },
  {
    id: '3',
    title: 'VideoHost Platform',
    description:
      'Plateforme complète d\'hébergement et de streaming vidéo avec gestion des utilisateurs et analytics avancés.',
    technologies: ['Next.js', 'Node.js', 'FFmpeg', 'AWS S3', 'PostgreSQL'],
    category: 'Web App',
    githubUrl: 'https://github.com/Xnern',
  },
  {
    id: '4',
    title: 'Publication Articles',
    description:
      'Système de gestion et publication d\'articles avec éditeur riche, SEO optimisé et interface d\'administration.',
    technologies: ['Laravel', 'Vue.js', 'TailwindCSS', 'Redis', 'Elasticsearch'],
    category: 'CMS',
    githubUrl: 'https://github.com/Xnern',
  },
  {
    id: '5',
    title: 'LeCoinBeaurain',
    description:
      'Marketplace locale inspirée de LeBonCoin, avec système de messagerie, paiements sécurisés et géolocalisation.',
    technologies: ['Laravel', 'React', 'Stripe', 'Google Maps API', 'MySQL'],
    category: 'E-commerce',
    githubUrl: 'https://github.com/Xnern',
  },
  {
    id: '6',
    title: 'Web3 DApp',
    description:
      'Application décentralisée (DApp) pour la blockchain avec smart contracts et interface utilisateur moderne.',
    technologies: ['Solidity', 'Ethers.js', 'React', 'Hardhat', 'MetaMask'],
    category: 'Blockchain',
    githubUrl: 'https://github.com/Xnern',
  },
];

export function ProjectsSectionNew() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(placeholderProjects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === 'All'
      ? placeholderProjects
      : placeholderProjects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 md:px-8 bg-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl mb-6"
          >
            <FolderIcon className="text-yellow-500" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="text-yellow-500">Projets</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-yellow-500 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une sélection de projets qui démontrent ma passion pour le développement et ma capacité
            à créer des solutions innovantes
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all min-w-[44px] min-h-[44px] ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/50'
                  : 'bg-gray-900 text-gray-300 border border-yellow-500/30 hover:border-yellow-500'
              }`}
              aria-label={category === 'All' ? 'Afficher tous les projets' : `Filtrer les projets par catégorie ${category}`}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">
                (
                {category === 'All'
                  ? placeholderProjects.length
                  : placeholderProjects.filter((p) => p.category === category).length}
                )
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCardNew key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Xnern"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold rounded-xl transition-all shadow-lg shadow-yellow-500/30"
            aria-label="Voir plus de projets sur mon profil GitHub"
          >
            <span>Voir plus sur GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-yellow-500 mb-2">20+</div>
            <div className="text-gray-400">Projets Réalisés</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
            <div className="text-gray-400">Satisfaction Client</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-gray-400">Disponible</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
