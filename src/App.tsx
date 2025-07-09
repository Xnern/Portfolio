import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { ProjectDetail } from './pages/ProjectDetail';
import { GithubIcon, UserIcon } from 'lucide-react';
export function App() {
  return <Router>
      <div className="min-h-screen bg-black text-white">
        <header className="py-6 px-8 flex justify-between items-center border-b border-yellow-500/20">
          <Link to="/" className="text-2xl font-bold text-yellow-500">
            Nathan<span className="text-white">Berthaud</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-white hover:text-yellow-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-white hover:text-yellow-500 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/#skills" className="text-white hover:text-yellow-500 transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="text-white hover:text-yellow-500 transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-white hover:text-yellow-500 transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-white hover:text-yellow-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-white hover:text-yellow-500 transition-colors flex items-center">
                  <UserIcon size={18} className="mr-1" />
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <footer className="py-8 px-8 border-t border-yellow-500/20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Nathan Berthaud. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500">
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>;
}