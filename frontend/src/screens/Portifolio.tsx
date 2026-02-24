import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Code2 } from 'lucide-react';
import { Header } from '../components/Header';
import { SocialButton } from '../components/SocialButtons';
import { ContactSection } from '../components/ContactSection';
import { ProjectCard } from '../components/ProjectCard';
import { useState } from 'react';
import { ChevronRight, ChevronLeft, Search } from 'lucide-react';
import { projects, techStack } from '../data/portifolioData';
import { TechSphere } from '../components/TechSphere';
import { TechCard } from '../components/TechCard';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Globe2 } from 'lucide-react';

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'sphere' | 'grid'>('sphere');
  const [showAllTechMobile, setShowAllTechMobile] = useState(false);
  
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden">

      {/* --- HEADER --- */}
      <Header />
      
      {/* --- HERO SECTION --- */}
      <section id="contact" className="relative flex flex-col items-center justify-center min-h-[65vh] pt-32 pb-12 px-6 text-center">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">     
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/20 to-transparent z-10" />      
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100%] origin-bottom"
            style={{ 
              perspective: '500px', 
              transform: 'rotateX(60deg) translateX(-25%)' 
            }}
          >
            <motion.div 
              animate={{ backgroundPosition: '0 40px' }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-full shadow-[inset_0_0_100px_rgba(6,182,212,0.2)]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(6,182,212,0.2) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(6,182,212,0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-cyan-900/20 blur-[120px] rounded-full" />
        </div>

        <div className="z-20 flex flex-col items-center gap-8">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-36 h-36 md:w-48 md:h-48"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse" />
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQG3JV95Ng5_Ig/profile-displayphoto-scale_200_200/B4DZfpq5qzGgAg-/0/1751972028042?e=1772668800&v=beta&t=9Hs5RXX3yXAi0vZ6fISXK2TRPw6wjyfinqWNff9yF2w" 
              alt="João Gustavo" 
              className="relative w-full h-full rounded-full border-4 border-slate-900 object-cover shadow-2xl"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              João <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Gustavo</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl text-shadow-sm">
              Desenvolvedor <span className="text-white font-semibold">Full Stack</span> especializado em criar experiências digitais escaláveis e arquitetura moderna.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-4"
          >
            <SocialButton href="https://github.com/Joaokenehen" icon={<FaGithub />} label="GitHub" />
            <SocialButton href="https://www.linkedin.com/in/joao-gustavo-quennehen" icon={<FaLinkedin />} label="LinkedIn" />
            <SocialButton href="https://wa.me/5544997025387" icon={<FaWhatsapp />} label="WhatsApp" />
          </motion.div>
        </div>
      </section>

      {/* --- 2. TECH STACK --- */}
      <section id="tech" className="pt-32 pb-24 px-6 bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8 text-center">
          <Code2 className="text-cyan-500 w-12 h-12 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Stack Tecnológica</h2>
          <p className="text-slate-400 mt-2 max-w-lg">
            Tecnologias que utilizo para dar vida a projetos de alta performance.
          </p>
          
          {/* BOTÃO DE ALTERNAR (Apenas Desktop) */}
          <button 
            onClick={() => setViewMode(viewMode === 'sphere' ? 'grid' : 'sphere')}
            className="hidden md:flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-lg backdrop-blur-sm group"
          >
            {viewMode === 'sphere' ? (
              <>
                <LayoutGrid size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-medium">Ver todas em lista</span>
              </>
            ) : (
              <>
                <Globe2 size={18} className="group-hover:animate-spin-slow" />
                <span className="text-sm font-medium">Voltar para o Globo</span>
              </>
            )}
          </button>
        </div>

        {/* --- ÁREA DAS TECHS --- */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* VERSÃO DESKTOP: GLOBO */}
            {viewMode === 'sphere' ? (
              <motion.div
                key="sphere"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="hidden md:block"
              >
                <TechSphere />
              </motion.div>
            ) : (
              /* VERSÃO DESKTOP: GRID COMPLETA */
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 py-10"
              >
                {techStack.map((tech, index) => (
                  <TechCard key={tech.name} {...tech} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* VERSÃO MOBILE: MANTÉM A LÓGICA DE MOSTRAR MAIS/MENOS */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-4">
              {techStack.slice(0, showAllTechMobile ? techStack.length : 8).map((tech, index) => (
                <TechCard key={tech.name} {...tech} index={index} />
              ))}
            </div>
            <button
              onClick={() => setShowAllTechMobile(!showAllTechMobile)}
              className="w-full mt-8 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-bold"
            >
              {showAllTechMobile ? 'Mostrar Menos' : 'Ver Todas'}
            </button>
          </div>
        </div>
      </div>
    </section>

     {/* --- 3. PROJETOS --- */}
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
                  setCurrentIndex(0); // Volta para o primeiro ao pesquisar
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

              {/* SETAS DE NAVEGAÇÃO (Só aparecem se houver mais de 1 projeto) */}
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

      {/* --- 4. CONTATO --- */}
      <div id="email">
      <ContactSection />
      </div>

      {/* --- 5. FOOTER --- */}
      <footer className="py-16 text-center border-t border-slate-900">
        <p className="text-slate-500 font-medium tracking-wide">
          JOÃO GUSTAVO <span className="mx-2 text-slate-800">/</span> {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}