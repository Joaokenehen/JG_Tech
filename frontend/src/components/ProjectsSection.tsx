import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, LayoutGrid, Square } from 'lucide-react';
import { projects } from '../data/portifolioData';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');

  // Lógica de filtro: Busca por Título e por Tags (Tecnologias)
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const search = searchTerm.toLowerCase();
      const matchesTitle = project.title.toLowerCase().includes(search);
      const matchesDescription = project.description.toLowerCase().includes(search);
      const matchesTags = project.tags.some((tag: string) => 
        tag.toLowerCase().includes(search)
      );

      return matchesTitle || matchesTags || matchesDescription;
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
        
        {/* CABEÇALHO E CONTROLES */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <div className="w-10 h-1 bg-cyan-500 rounded-full" /> Projetos
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* ALTERNADOR DE VISUALIZAÇÃO */}
            <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-800 self-stretch sm:self-auto">
              <button 
                onClick={() => setViewMode('single')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${viewMode === 'single' ? 'bg-cyan-500 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                title="Ver um por vez"
              >
                <Square size={14} /> Foco
              </button>
              <button 
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                title="Ver todos"
              >
                <LayoutGrid size={14} /> Grid
              </button>
            </div>

            {/* BARRA DE PESQUISA */}
            <div className="relative group w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
              <input 
                type="text"
                placeholder="Nome ou tecnologia..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentIndex(0);
                }}
                className="bg-slate-900/50 border border-slate-800 text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-cyan-500/50 w-full transition-all"
              />
            </div>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            viewMode === 'single' ? (
              /* MODO UM POR VEZ (FOCO) */
              <motion.div 
                key={`single-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <ProjectCard {...filteredProjects[currentIndex]} />

                {/* NAVEGAÇÃO DO MODO FOCO */}
                {filteredProjects.length > 1 && (
                  <div className="flex justify-center md:justify-end gap-4 mt-8">
                    <button onClick={prevProject} className="p-3 rounded-full bg-slate-900 border border-slate-800 text-white hover:border-cyan-500 transition-colors">
                      <ChevronLeft />
                    </button>
                    <button onClick={nextProject} className="p-3 rounded-full bg-slate-900 border border-slate-800 text-white hover:border-cyan-500 transition-colors">
                      <ChevronRight />
                    </button>
                  </div>
                )}
                <p className="text-center text-slate-500 mt-4 text-sm font-mono">
                  {currentIndex + 1} / {filteredProjects.length}
                </p>
              </motion.div>
            ) : (
              /* MODO LISTA COMPLETA (GRID) */
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </motion.div>
            )
          ) : (
            /* ESTADO VAZIO */
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
              <p className="text-slate-500">Nenhum projeto encontrado com "{searchTerm}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};