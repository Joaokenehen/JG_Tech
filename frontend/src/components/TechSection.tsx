import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, LayoutGrid, Globe2 } from 'lucide-react';
import { TechSphere } from './TechSphere';
import { TechCard } from './TechCard';
import { techStack } from '../data/portifolioData';
import { useLanguage } from '../context/LanguageContext';

export const TechSection = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'sphere' | 'grid'>('sphere');
  const [showAllTechMobile, setShowAllTechMobile] = useState(false);

  return (
    <section id="tech" className="pt-32 pb-24 px-6 bg-slate-900/40 border-y border-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Secção */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Code2 className="text-cyan-500 w-12 h-12 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t('tech.title')}
          </h2>
          <p className="text-slate-500 mt-2 max-w-lg">
            {t('tech.subtitle')}
          </p>

          {/* Botão de Alternar Visualização (Apenas Desktop) */}
          <button 
            onClick={() => setViewMode(viewMode === 'sphere' ? 'grid' : 'sphere')}
            className="hidden md:flex items-center gap-2 mt-8 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-lg backdrop-blur-sm group"
          >
            {viewMode === 'sphere' ? (
              <>
                <LayoutGrid size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-medium">{t('tech.viewList')}</span>
              </>
            ) : (
              <>
                <Globe2 size={18} className="group-hover:animate-spin-slow" />
                <span className="text-sm font-medium">{t('tech.viewGlobe')}</span>
              </>
            )}
          </button>
        </div>

        {/* Conteúdo Principal */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* VERSÃO DESKTOP */}
            <div className="hidden md:block">
              {viewMode === 'sphere' ? (
                <motion.div
                  key="sphere"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <TechSphere />
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {techStack.map((tech, index) => (
                    <TechCard key={tech.name} {...tech} index={index} />
                  ))}
                </motion.div>
              )}
            </div>

            {/* VERSÃO MOBILE */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-4">
                {techStack.slice(0, showAllTechMobile ? techStack.length : 8).map((tech, index) => (
                  <TechCard key={tech.name} {...tech} index={index} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllTechMobile(!showAllTechMobile)}
                  className="px-6 py-2 rounded-full border border-cyan-500/50 text-cyan-400 font-bold text-sm bg-cyan-500/10 hover:bg-cyan-500/20 transition-all active:scale-95"
                >
                  {showAllTechMobile ? t('tech.showLess') : t('tech.showAll')}
                </button>
              </div>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};