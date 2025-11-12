import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, UserIcon } from 'lucide-react';
import { Logo } from './Logo';

export function HeaderNew() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/', section: null },
    { label: 'À Propos', href: '/#about', section: 'about' },
    { label: 'Compétences', href: '/#skills', section: 'skills' },
    { label: 'Projets', href: '/#projects', section: 'projects' },
    { label: 'Témoignages', href: '/#testimonials', section: 'testimonials' },
    { label: 'Contact', href: '/#contact', section: 'contact' },
  ];

  const scrollToSection = (sectionId: string | null) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-lg border-b border-yellow-500/20 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => scrollToSection(null)}
              className="flex items-center gap-3 group"
            >
              <Logo size={40} className="group-hover:scale-110 transition-transform" />
              <motion.div
                whileHover={{ x: 5 }}
                className="hidden sm:block"
              >
                <span className="text-xl md:text-2xl font-bold text-yellow-500">
                  Nathan
                </span>
                <span className="text-xl md:text-2xl font-bold text-white">Berthaud</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <motion.button
                      onClick={() => scrollToSection(item.section)}
                      whileHover={{ y: -2 }}
                      className="px-4 py-2 text-white hover:text-yellow-500 transition-colors relative group"
                    >
                      {item.label}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                      />
                    </motion.button>
                  </li>
                ))}
                <li>
                  <Link to="/admin">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ml-4 px-4 py-2 bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black border border-yellow-500/30 hover:border-yellow-500 rounded-lg font-medium transition-all flex items-center gap-2"
                    >
                      <UserIcon size={18} />
                      Admin
                    </motion.button>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/98 backdrop-blur-lg border-t border-yellow-500/20"
            >
              <nav className="px-4 py-6">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.section)}
                        className="w-full text-left px-4 py-3 text-white hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-all"
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                  >
                    <Link
                      to="/admin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 w-full px-4 py-3 bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black border border-yellow-500/30 rounded-lg font-medium transition-all"
                    >
                      <UserIcon size={18} />
                      Admin
                    </Link>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
}
