import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'Laravel', level: 90, category: 'Backend', icon: '🐘' },
  { name: 'TailwindCSS', level: 80, category: 'Frontend', icon: '🎨' },
  { name: 'React', level: 70, category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js', level: 70, category: 'Frontend', icon: '▲' },
  { name: 'TypeScript', level: 75, category: 'Language', icon: '📘' },
  { name: 'Python', level: 50, category: 'Language', icon: '🐍' },
  { name: 'C', level: 50, category: 'Language', icon: '⚙️' },
  { name: 'MySQL', level: 75, category: 'Database', icon: '🗃️' },
  { name: 'Git', level: 85, category: 'Tools', icon: '🔀' },
  { name: 'SEO', level: 80, category: 'Marketing', icon: '📈' },
  { name: 'UI/UX', level: 75, category: 'Design', icon: '✨' },
  { name: 'Web3', level: 60, category: 'Blockchain', icon: '🔗' },
];

function CircularProgress({ skill, delay }: { skill: Skill; delay: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay * 100);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, delay]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.1, y: -10 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/50 transition-all hover:shadow-2xl hover:shadow-yellow-500/20">
        <div className="flex flex-col items-center">
          {/* Circular progress */}
          <div className="relative w-32 h-32 mb-4">
            <svg className="transform -rotate-90 w-32 h-32">
              {/* Background circle */}
              <circle
                cx="64"
                cy="64"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-800"
              />
              {/* Progress circle */}
              <motion.circle
                cx="64"
                cy="64"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-yellow-500"
                strokeLinecap="round"
                initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                animate={{
                  strokeDashoffset: inView ? strokeDashoffset : circumference,
                }}
                transition={{ duration: 1.5, delay: delay * 0.1, ease: 'easeInOut' }}
              />
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl mb-1">{skill.icon}</span>
              <span className="text-2xl font-bold text-yellow-500">
                {inView ? progress : 0}%
              </span>
            </div>
          </div>

          {/* Skill name */}
          <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
          <span className="text-xs text-gray-400 px-3 py-1 bg-yellow-500/10 rounded-full">
            {skill.category}
          </span>
        </div>

        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(255, 215, 0, 0.1), transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSectionNew() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(skills.map((s) => s.category)))];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="text-yellow-500">Compétences</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-yellow-500 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un éventail de technologies maîtrisées pour créer des solutions web complètes et
            performantes
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-medium transition-all min-w-[44px] min-h-[44px] ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-900 text-gray-300 border border-yellow-500/30 hover:border-yellow-500'
              }`}
              aria-label={category === 'All' ? 'Afficher toutes les compétences' : `Filtrer par catégorie ${category}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <CircularProgress key={skill.name} skill={skill} delay={index} />
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-8">
            Toujours en apprentissage continu pour rester à la pointe de la technologie
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl px-8 py-4"
            >
              <div className="text-3xl font-bold text-yellow-500 mb-1">12+</div>
              <div className="text-gray-400 text-sm">Technologies Maîtrisées</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl px-8 py-4"
            >
              <div className="text-3xl font-bold text-yellow-500 mb-1">5+</div>
              <div className="text-gray-400 text-sm">Ans d'Expérience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl px-8 py-4"
            >
              <div className="text-3xl font-bold text-yellow-500 mb-1">∞</div>
              <div className="text-gray-400 text-sm">Volonté d'Apprendre</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
