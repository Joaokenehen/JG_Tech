import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import kali from '../assets/kali-linux-logo.png'; // Certifique-se de que o caminho para a imagem está correto
import { useLanguage } from '../context/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-cyan-500 mb-2">
              <User size={28} />
              <span className="font-mono tracking-widest uppercase text-sm">{t('about.tag')}</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white">
              {t('about.title')} <span className="text-cyan-500">{t('about.titleHighlight')}</span>
            </h2>
            
            <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>{t('about.p1')}</p>
                <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
                <p>{t('about.p3')}</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Badge title="1+" subtitle={t('about.badges.exp')} />
              <Badge title="15+" subtitle={t('about.badges.proj')} />
              <Badge title="Cyber" subtitle={t('about.badges.cyber')} highlight />
              <Badge title="ADS" subtitle={t('about.badges.ads')} highlight />
            </div>
          </motion.div>

          {/* Lado Direito: Visual */}
           <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
        >

<div className="aspect-square rounded-3xl overflow-hidden border-2 border-slate-800 bg-black p-4 font-mono relative z-10 group">
  
  {/* Header do Terminal */}
  <div className="flex gap-1.5 mb-3 border-b border-slate-900 pb-2">
    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
    <span className="text-[10px] text-slate-700 ml-2 tracking-widest uppercase">kali@jg-lab:~</span>
  </div>

  {/* Conteúdo Matrix + WHOAMI + Kali Info */}
  <div className="text-[10px] md:text-[11px] leading-[1.2] break-all select-none">
    <Typewriter
      options={{
        strings: [
          // Fundo de código repetido
          Array(30).fill(null).map(() => 
            `<span class="text-cyan-900/30">JG_DEV</span> <span class="text-slate-900">0101</span>`
          ).join(' ') + 
          
          // Informações do Kali Linux no terminal
          `<br/><br/>` +
          `<span class="text-cyan-500">[ SYSTEM INFO ]</span><br/>` +
          `<span class="text-slate-400">OS:</span> <span class="text-white">Kali GNU/Linux Rolling</span><br/>` +
          `<span class="text-slate-400">KERNEL:</span> <span class="text-white">6.1.0-kali-amd64</span><br/>` +
          `<span class="text-slate-400">SHELL:</span> <span class="text-white">zsh 5.9</span><br/><br/>` +
          
          // Bloco WHOAMI em destaque
          `<span class="text-white font-bold bg-cyan-600 px-2 uppercase">WHOAMI: JOAO GUSTAVO</span><br/><br/>` +
          
          // Mais fundo de código para fechar
          Array(30).fill(null).map(() => 
            `<span class="text-slate-900">0110</span> <span class="text-cyan-900/30">JG_DEV</span>`
          ).join(' ')
        ],
        autoStart: true,
        loop: true,
        delay: 1, 
        cursor: '█',
        wrapperClassName: "opacity-80"
      }}
    />
  </div>

  {/* ELEMENTO CENTRAL: JG + LOGO KALI (Sutil) */}
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
    <span className="text-white/5 font-black text-9xl tracking-tighter">
      JG
    </span>
    {/* Logo Kali Linux */}
    <div className="flex flex-col items-center gap-3 mt-4 translate-y-4 opacity-15 group-hover:opacity-60 transition-all duration-700 ease-in-out transform group-hover:scale-105">
    {/* TAG IMG: Substitui o SVG problemático */}
    <img 
      src={kali} 
      alt="Kali Linux Dragon Logo"
      className="w-14 h-14 object-contain invert brightness-200 contrast-120 opacity-80" 
    />

    <span className="text-[8px] font-mono tracking-[0.5em] text-cyan-500/60 uppercase font-bold text-center">
      Kali Linux Verified
    </span>
  </div>
</div>

  {/* Overlay de Scanlines (Efeito TV antiga) */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_2px,3px_100%] pointer-events-none z-30" />
</div>
      </motion.div>
        </div>
      </div>
    </section>
  );
};

// Um sub-componente interno para os quadradinhos de destaque
const Badge = ({ title, subtitle, highlight = false }: { title: string, subtitle: string, highlight?: boolean }) => (
  <div className={`bg-slate-900 border ${highlight ? 'border-cyan-500/30' : 'border-slate-800'} p-4 rounded-2xl`}>
    <h4 className="text-2xl font-bold text-cyan-500">{title}</h4>
    <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">{subtitle}</p>
  </div>
);