import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, CodeIcon } from 'lucide-react';
import gsap from 'gsap';

export function HeroNew() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // GSAP animations for floating elements
    gsap.to('.floating-1', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.floating-2', {
      y: -30,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.5,
    });

    gsap.to('.floating-3', {
      y: -25,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1,
    });

    // Particle animation
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -1000,
        opacity: 0,
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        delay: index * 0.2,
        ease: 'none',
      });
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden bg-gradient-to-b from-black via-black to-gray-900"
    >
      {/* Animated background elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl floating-1"></div>
        <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-yellow-500/5 blur-3xl floating-2"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-yellow-500/7 blur-3xl floating-3"></div>
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-yellow-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FFD700 1px, transparent 1px),
              linear-gradient(to bottom, #FFD700 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto text-center z-10 relative"
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-500 text-sm font-medium">
            👋 Bienvenue sur mon portfolio
          </span>
        </motion.div>

        {/* Main title with animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Je suis </span>
          <span className="relative inline-block">
            <span className="text-yellow-500">Nathan</span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </span>
        </motion.h1>

        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-20"
        >
          <TypeAnimation
            sequence={[
              'Développeur Web 💻',
              2000,
              'Développeur Web3 🔗',
              2000,
              'Ingénieur Logiciel 🚀',
              2000,
              'Spécialiste SEO 📈',
              2000,
              'Designer UI/UX 🎨',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-yellow-500"
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          22 ans • Nancy, France
          <br />
          Étudiant en Master 5 au CESI & Développeur chez Félix Informatique
          <br />
          Passionné par la création d'expériences web exceptionnelles
        </motion.p>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['Laravel', 'React', 'Next.js', 'TailwindCSS', 'Python', 'Web3'].map(
            (tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-black border border-yellow-500/30 rounded-lg text-yellow-500 text-sm font-medium hover:bg-yellow-500/10 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Découvrir mon travail
              <CodeIcon className="w-5 h-5" />
            </span>
            <motion.div
              className="absolute inset-0 bg-yellow-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-yellow-500/30 hover:border-yellow-500 hover:bg-yellow-500/10 text-white font-medium rounded-lg transition-all"
          >
            Me contacter
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/Xnern"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 hover:text-yellow-500 transition-colors"
          >
            <GithubIcon size={28} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 hover:text-yellow-500 transition-colors"
          >
            <LinkedinIcon size={28} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-yellow-500 text-sm font-medium">Scroll</span>
          <ArrowDownIcon className="text-yellow-500" size={32} />
        </div>
      </motion.button>

      {/* Decorative code brackets */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 text-yellow-500 text-9xl font-bold pointer-events-none hidden lg:block"
      >
        {'<'}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 text-yellow-500 text-9xl font-bold pointer-events-none hidden lg:block"
      >
        {'/>'}
      </motion.div>
    </section>
  );
}
