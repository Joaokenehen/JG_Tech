import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/portifolioData';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const search = searchTerm.toLowerCase();
      const matchesTitle = project.title.toLowerCase().includes(search);
      const matchesTags = project.tags.some((tag: string) => 
        tag.toLowerCase().includes(search)
      );

      return matchesTitle || matchesTags;
    });
  }, [searchTerm]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-24 px-6 min-h-[600px]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <div className="w-10 h-1 bg-cyan-500 rounded-full" /> Projetos
          </h2>

          {/* BARRA DE PESQUISA */}
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
            <input 
              type="text"
              placeholder="Pesquisar projeto..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentIndex(0);
              }}
              className="bg-slate-900/50 border border-slate-800 text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-cyan-500/50 w-full md:w-64 transition-all"
            />
          </div>
        </div>
        
        {filteredProjects.length > 0 ? (
          <div className="relative group">
            {/* CARDS COM ANIMAÇÃO */}
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...filteredProjects[currentIndex]} />
            </motion.div>

            {/* SETAS DE NAVEGAÇÃO */}
            {filteredProjects.length > 1 && (
              <div className="flex justify-center md:justify-end gap-4 mt-8">
                <button 
                  onClick={prevProject}
                  className="p-3 rounded-full bg-slate-900 border border-slate-800 text-white hover:border-cyan-500 transition-colors shadow-lg"
                >
                  <ChevronLeft />
                </button>
                <button 
                  onClick={nextProject}
                  className="p-3 rounded-full bg-slate-900 border border-slate-800 text-white hover:border-cyan-500 transition-colors shadow-lg"
                >
                  <ChevronRight />
                </button>
              </div>
            )}
            
            {/* INDICADOR DE QUANTIDADE */}
            <p className="text-center text-slate-500 mt-4 text-sm font-mono">
              {currentIndex + 1} / {filteredProjects.length}
            </p>
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
            <p className="text-slate-500">Nenhum projeto encontrado com "{searchTerm}"</p>
          </div>
        )}
      </div>
    </section>
  );
};