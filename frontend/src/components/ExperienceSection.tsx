import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Wrench, Code, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceSection = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      id: 1,
      year: t('experience.item1.year'),
      title: t('experience.item1.title'),
      company: t('experience.item1.company'),
      description: t('experience.item1.description'),
      icon: <Wrench size={20} />,
      tech: ["Programming", "C"]
    },
    {
      id: 2,
      year: t('experience.item2.year'),
      title: t('experience.item2.title'),
      company: t('experience.item2.company'),
      description: t('experience.item2.description'),
      icon: <Terminal size={20} />,
      tech: ["Lógica", "Arquitetura", "Engenharia de Software"]
    },
    {
      id: 3,
      year: t('experience.item3.year'),
      title: t('experience.item3.title'),
      company: t('experience.item3.company'),
      description: t('experience.item3.description'),
      icon: <Code size={20} />,
      tech: ["React", "Node.js", "Java", "TypeScript", "React Native"]
    },
    {
      id: 5,
      year: t('experience.item5.year'),
      title: t('experience.item5.title'),
      company: t('experience.item5.company'),
      description: t('experience.item5.description'),
      icon: <Terminal size={20} />,
      tech: ["Suporte Técnico", "Manutenção de Hardware", "Desenvolvimento Interno"]
    },
    {
      id: 6,
      year: t('experience.item4.year'),
      title: t('experience.item4.title'),
      company: t('experience.item4.company'),
      description: t('experience.item4.description'),
      icon: <Shield size={20} />,
      tech: ["Pentesting", "Kali Linux", "Hacking Ético", "SecDevOps"]
    },
  ];
  
  const INITIAL_COUNT = 3;
  const visibleExperiences = showAll ? experiences : experiences.slice(0, INITIAL_COUNT);

  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/40 relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center mb-16 text-center">
          <Terminal className="text-cyan-500 w-12 h-12 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t('experience.title')}</h2>
          <p className="text-slate-500 mt-2 max-w-lg">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Linha vertical central que liga os pontos */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 md:-translate-x-1/2 transition-all duration-500" />

          <div className="space-y-12">
            <AnimatePresence initial={false}>
              {visibleExperiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={exp.id}
                    layout // Fundamental para a animação de encolher/crescer a lista
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative flex flex-col md:flex-row items-start md:justify-between w-full group"
                  >
                    
                    {/* Ponto na linha */}
                    <div className="absolute left-[16px] md:left-1/2 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 md:-translate-x-1/2 mt-1.5 z-10 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    </div>

                    {/* Lado Esquerdo (Desktop) */}
                    <div className={`hidden md:block w-[45%] pr-12 text-right ${isEven ? '' : 'opacity-0'}`}>
                      {isEven && (
                        <>
                          <span className="text-cyan-500 font-mono text-sm font-bold tracking-widest">{exp.year}</span>
                          <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                          <p className="text-slate-400 text-sm font-medium mt-1">{exp.company}</p>
                          <p className="text-slate-500 mt-4 text-sm leading-relaxed">{exp.description}</p>
                          <div className="flex flex-wrap gap-2 mt-4 justify-end">
                            {exp.tech.map(t => (
                              <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-md">
                                {t}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Lado Direito (Desktop) */}
                    <div className={`hidden md:block w-[45%] pl-12 ${!isEven ? '' : 'opacity-0'}`}>
                      {!isEven && (
                        <>
                          <span className="text-cyan-500 font-mono text-sm font-bold tracking-widest">{exp.year}</span>
                          <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                          <p className="text-slate-400 text-sm font-medium mt-1">{exp.company}</p>
                          <p className="text-slate-500 mt-4 text-sm leading-relaxed">{exp.description}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.tech.map(t => (
                              <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-md">
                                {t}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Conteúdo Mobile (Sempre visível para todos os itens em telas menores) */}
                    <div className="md:hidden w-full pl-16 pr-6">
                      <span className="text-cyan-500 font-mono text-sm font-bold tracking-widest">{exp.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                      <p className="text-slate-400 text-sm font-medium mt-1">{exp.company}</p>
                      <p className="text-slate-500 mt-3 text-sm leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tech.map(t => (
                          <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* BOTÃO DE EXPANDIR TIMELINE */}
          {experiences.length > INITIAL_COUNT && (
            <div className="flex justify-center mt-16 relative z-20">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 px-8 py-3 rounded-full border border-cyan-500/30 text-cyan-400 font-bold bg-slate-950 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95"
              >
                {showAll ? (
                  <>{t('experience.showLess')} <ChevronUp size={18} /></>
                ) : (
                  <>{t('experience.showMore')} <ChevronDown size={18} /></>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};