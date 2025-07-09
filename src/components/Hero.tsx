import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative h-screen flex items-center justify-center px-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-500/5 blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Développeur.</span>
          <span className="text-yellow-500"> Créateur.</span>
          <span className="text-white"> Innovateur.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Je crée des expériences numériques exceptionnelles à l'aide de technologies modernes.
          Découvrez mes derniers projets ci-dessous.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={scrollToProjects} className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 rounded-lg transition-colors">
            Voir les Projets
          </button>
          <a href="#contact" className="border border-yellow-500/30 hover:border-yellow-500 text-white px-8 py-3 rounded-lg transition-colors">
            Contactez-moi
          </a>
        </div>
      </div>
      <button onClick={scrollToProjects} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="text-yellow-500" size={32} />
      </button>
    </section>;
}