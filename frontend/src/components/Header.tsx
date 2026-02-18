import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'Tecnologias', href: '#tech' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  // Lógica de Scroll para Mobile e Desktop
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Se rolar para baixo, esconde. Se rolar para cima, mostra.
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Timer inicial para sumir após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.scrollY < 100) setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.header
      // Mantém a interação de mouse para Desktop
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        if (window.scrollY > 100) setIsVisible(false);
      }}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -75 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <nav className="w-full max-w-6xl flex items-center justify-between px-6 md:px-8 py-3 md:py-4 bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-2xl shadow-2xl">
        
        {/* Esquerda: Seu Nome */}
        <div className="flex items-center gap-2">
          <span className="text-base md:text-lg font-black tracking-tighter text-white">
            JOÃO <span className="text-cyan-500">GUSTAVO</span>
          </span>
        </div>

        {/* Direita: Abas (Com ajuste de tamanho para Mobile) */}
        <div className="flex items-center gap-3 md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] md:text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors uppercase md:normal-case"
            >
              {item.name}
            </a>
          ))}
          <div className="w-px h-4 bg-slate-700 hidden sm:block" />
          <a
            href="mailto:joao_quennehen@outlook.com"
            className="hidden sm:block text-sm font-bold text-slate-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </nav>
    </motion.header>
  );
};