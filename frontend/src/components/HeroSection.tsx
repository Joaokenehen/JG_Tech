import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SocialButton } from './SocialButtons';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[65vh] pt-32 pb-12 px-6 text-center">
      
      {/* Background animado */}
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
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-36 h-36 md:w-48 md:h-48"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse" />
          <div 
            aria-hidden="true"
            className="relative w-full h-full rounded-full border-4 border-slate-900 bg-gradient-to-br from-cyan-500/70 via-slate-900 to-slate-950 shadow-2xl flex items-center justify-center"
          >
            <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-white opacity-90">
              {t('hero.welcome')}
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            João <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Gustavo</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl text-shadow-sm">
            {t('hero.role')} <span className="text-white font-semibold">{t('hero.highlight')}</span> {t('hero.description')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          <SocialButton href="https://github.com/Joaokenehen" icon={<FaGithub />} label="GitHub" />
          <SocialButton href="https://www.linkedin.com/in/joao-gustavo-quennehen" icon={<FaLinkedin />} label="LinkedIn" />
        </motion.div>
      </div>
    </section>
  );
};