import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingFromClick, setIsScrollingFromClick] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: t('header.contact'), mobileName: t('header.contact'), href: '#contact' },
    { name: t('header.about'), mobileName: t('header.about'), href: '#about' },
    { name: t('header.techs'), mobileName: t('header.techs'), href: '#tech' }, 
    { name: t('header.projects'), mobileName: t('header.projects'), href: '#projects' },
    { name: t('header.email'), mobileName: t('header.email'), href: '#email'}
  ];

  const handleNavLinkClick = () => {
    setIsScrollingFromClick(true);
    setIsVisible(true);
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
  }, [lastScrollY, isScrollingFromClick]);

  return (
    <motion.header
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        if (window.scrollY > 100 && !isScrollingFromClick) setIsVisible(false);
      }}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -110 }} // Aumento o recuo para garantir que suma no mobile
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 md:p-6" // Reduzi p-4 para p-2 no mobile
    >
      <nav className="w-full max-w-6xl flex items-center justify-between px-4 md:px-8 py-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Lado Esquerdo: Nome (Ajustado para não quebrar) */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <span className="text-sm md:text-lg font-black tracking-tighter text-white whitespace-nowrap">
            JOÃO <span className="text-cyan-500">G</span>
          </span>
          <div className="flex px-1.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30">
             <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest">Dev</span>
          </div>
        </div>

        {/* Lado Direito: Nav (Ajustado para scroll horizontal se necessário ou nomes curtos) */}
        <div className="flex items-center gap-3 md:gap-6 overflow-x-auto no-scrollbar ml-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavLinkClick}
              className="text-[10px] md:text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors uppercase whitespace-nowrap"
            >
              {/* No mobile mostra o nome curto, no desktop o nome completo */}
              <span className="md:hidden">{item.mobileName}</span>
              <span className="hidden md:inline">{item.name}</span>
            </a>
          ))}

          {/* Botão de Idioma */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 ml-2 text-[10px] md:text-xs font-bold text-cyan-500 hover:text-cyan-300 transition-all duration-300 uppercase bg-slate-800/50 hover:bg-slate-700 active:scale-95 px-2 py-1.5 md:px-3 rounded-lg border border-slate-700 hover:border-cyan-500/50 cursor-pointer shadow-md hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          >
            <Globe size={14} />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </nav>
    </motion.header>
  );
};