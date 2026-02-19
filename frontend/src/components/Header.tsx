import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingFromClick, setIsScrollingFromClick] = useState(false);

  const navItems = [
    { name: 'Contato', href: '#contact' },
    { name: 'Tecnologias', href: '#tech' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Email', href: '#email'}
  ];

  // Função para lidar com o clique
  const handleNavLinkClick = () => {
    setIsScrollingFromClick(true);
    setIsVisible(true); // Garante que fique visível ao clicar
    
    // Libera a trava após o tempo do scroll suave acabar (aprox 800ms)
    setTimeout(() => {
      setIsScrollingFromClick(false);
    }, 1000);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (isScrollingFromClick) return;

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
  }, [lastScrollY, isScrollingFromClick]); // Adicionado isScrollingFromClick aqui

  return (
    <motion.header
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        if (window.scrollY > 100 && !isScrollingFromClick) setIsVisible(false);
      }}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <nav className="w-full max-w-6xl flex items-center justify-between px-6 md:px-8 py-3 md:py-4 bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-2xl shadow-2xl">
        
        {/* Lado Esquerdo: Nome */}
        <div className="flex items-center gap-3">
          <span className="text-base md:text-lg font-black tracking-tighter text-white whitespace-nowrap">
            JOÃO <span className="text-cyan-500">GUSTAVO</span>
          </span>
          <div className="flex px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30">
             <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Dev</span>
          </div>
        </div>

        {/* Lado Direito: Nav */}
        <div className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavLinkClick}
              className="text-[11px] md:text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors uppercase md:normal-case"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};