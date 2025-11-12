import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, HeartIcon, CodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function FooterNew() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Accueil', href: '/' },
        { label: 'À Propos', href: '/#about' },
        { label: 'Compétences', href: '/#skills' },
        { label: 'Projets', href: '/#projects' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
    {
      title: 'Réseaux',
      links: [
        { label: 'GitHub', href: 'https://github.com/Xnern', external: true },
        { label: 'LinkedIn', href: '#', external: true },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-yellow-500/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Logo size={50} />
                <div>
                  <span className="text-2xl font-bold text-yellow-500">Nathan</span>
                  <span className="text-2xl font-bold text-white">Berthaud</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Développeur Web & Web3 passionné par la création d'expériences numériques
                exceptionnelles. Basé à Nancy, France.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <CodeIcon size={16} />
                <span className="text-sm">Construit avec React, TypeScript & TailwindCSS</span>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com/Xnern"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
                aria-label="Voir mon profil GitHub"
              >
                <GithubIcon size={24} aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
                aria-label="Voir mon profil LinkedIn"
              >
                <LinkedinIcon size={24} aria-hidden="true" />
              </motion.a>
            </motion.div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h3 className="text-white font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-yellow-500 transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <span className="text-xs">↗</span>
                      </motion.a>
                    ) : (
                      <Link to={link.href}>
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-yellow-500 transition-colors inline-block"
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-yellow-500/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Nathan Berthaud. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Fait avec <HeartIcon className="text-yellow-500 fill-yellow-500" size={16} /> et
              beaucoup de café
            </p>
          </div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30 transition-colors z-50"
          aria-label="Retour en haut de la page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
