import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCapIcon, BriefcaseIcon, MapPinIcon, CalendarIcon } from 'lucide-react';

export function AboutSectionNew() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" ref={ref} className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section title */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">À Propos </span>
            <span className="text-yellow-500">de Moi</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-yellow-500 mx-auto"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Introduction */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/40 transition-all"
            >
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Développeur Web & Web3 | Ingénieur Logiciel | Spécialiste SEO & UI/UX
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Passionné par le développement web et les technologies blockchain, je combine
                expertise technique et sens du design pour créer des applications web modernes,
                performantes et esthétiques.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Mon objectif est de transformer des idées complexes en solutions digitales
                intuitives et impactantes, tout en restant à la pointe des dernières innovations
                technologiques.
              </p>
            </motion.div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-yellow-500 mb-2">5+</div>
                <div className="text-gray-400 text-sm">Ans d'Expérience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/30 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-yellow-500 mb-2">20+</div>
                <div className="text-gray-400 text-sm">Projets Réalisés</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Mon Parcours</h3>

            {/* Timeline items */}
            <div className="relative pl-8 border-l-2 border-yellow-500/30 space-y-8">
              {/* Current position */}
              <motion.div
                whileHover={{ x: 10 }}
                className="relative"
              >
                <motion.div
                  className="absolute -left-[45px] top-0 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center border-2 border-black"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(255, 215, 0, 0.4)',
                      '0 0 0 10px rgba(255, 215, 0, 0)',
                      '0 0 0 0 rgba(255, 215, 0, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <BriefcaseIcon size={20} className="text-black" />
                </motion.div>
                <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-500/60 transition-all">
                  <div className="flex items-center gap-2 text-yellow-500 mb-2">
                    <BriefcaseIcon size={20} />
                    <span className="font-semibold">Développeur Full Stack</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Félix Informatique
                  </h4>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <MapPinIcon size={14} />
                      Laxou
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={14} />
                      2023 - Présent
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Développement d'applications web complexes, optimisation SEO, et création
                    d'interfaces utilisateur modernes en alternance.
                  </p>
                </div>
              </motion.div>

              {/* Education - Master */}
              <motion.div
                whileHover={{ x: 10 }}
                className="relative"
              >
                <div className="absolute -left-[45px] top-0 w-10 h-10 bg-yellow-500/80 rounded-lg flex items-center justify-center border-2 border-black">
                  <GraduationCapIcon size={20} className="text-black" />
                </div>
                <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/40 transition-all">
                  <div className="flex items-center gap-2 text-yellow-500 mb-2">
                    <GraduationCapIcon size={20} />
                    <span className="font-semibold">Master en Informatique</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    CESI École d'Ingénieurs
                  </h4>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <MapPinIcon size={14} />
                      Nancy
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={14} />
                      2023 - 2025
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Master (Bac+5) en Ingénierie Logicielle en alternance, spécialisation en
                    développement web et architectures modernes.
                  </p>
                </div>
              </motion.div>

              {/* Education - BUT */}
              <motion.div
                whileHover={{ x: 10 }}
                className="relative"
              >
                <div className="absolute -left-[45px] top-0 w-10 h-10 bg-yellow-500/60 rounded-lg flex items-center justify-center border-2 border-black">
                  <GraduationCapIcon size={20} className="text-black" />
                </div>
                <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/40 transition-all">
                  <div className="flex items-center gap-2 text-yellow-500 mb-2">
                    <GraduationCapIcon size={20} />
                    <span className="font-semibold">BUT Informatique</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    BUT Développement d'Applications
                  </h4>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={14} />
                      2020 - 2023
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Diplôme Universitaire de Technologie (Bac+3) en développement d'applications,
                    bases solides en programmation et gestion de projet.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
