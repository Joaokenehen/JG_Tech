import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export const AboutSection = () => {
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
              <span className="font-mono tracking-widest uppercase text-sm">Minha História</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white">
              Transformando ideias em <span className="text-cyan-500">realidade digital</span>
            </h2>
            
            <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                    Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam "por baixo do capô". O que era apenas um hobby se transformou em uma paixão por criar soluções que impactam pessoas.
                </p>
                <p>
                    Além do desenvolvimento, sou um entusiasta da área de <strong>Cybersegurança</strong>. Atualmente, dedico parte do meu tempo explorando o universo <strong>Linux</strong> e aprendendo técnicas de <strong>Pentesting</strong> e hacking ético. Acredito que entender como sistemas são testados e protegidos me torna um desenvolvedor muito mais consciente e preparado em seus projetos.
                </p>
                <p>
                    Hoje, foco em desenvolver aplicações web de alta performance, unindo um design intuitivo com arquiteturas de código limpas e escaláveis. Acredito que a tecnologia deve ser uma ponte para resolver problemas reais.
                </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Badge title="2+" subtitle="Anos de Exp." />
              <Badge title="15+" subtitle="Projetos" />
              <Badge title="Cyber" subtitle="Security Student" highlight />
              <Badge title="ADS" subtitle='developer student' highlight />
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
  
  {/* Header do Terminal (Botões de fechar/minimizar) */}
  <div className="flex gap-1.5 mb-3 border-b border-slate-900 pb-2">
    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
    <span className="text-[10px] text-slate-700 ml-2 tracking-widest uppercase">System.Terminal</span>
  </div>

  {/* Conteúdo que preenche a tela */}
  <div className="text-[10px] md:text-[12px] leading-[1.2] break-all select-none">
    <Typewriter
      options={{
        strings: [
          // Criamos uma string longa repetindo JG DEV com cores diferentes
          Array(40).fill(null).map(() => 
            `<span class="text-cyan-500/40">JG_DEV</span> <span class="text-slate-800">0101</span> <span class="text-cyan-900">SYSTEM</span>`
          ).join(' ') + 
          `<br/><br/><span class="text-white font-bold bg-cyan-600 px-2">WHOAMI: JOAO GUSTAVO</span><br/><br/>` +
          Array(40).fill(null).map(() => 
            `<span class="text-slate-800">0110</span> <span class="text-cyan-500/40">JG_DEV</span>`
          ).join(' ')
        ],
        autoStart: true,
        loop: true,
        delay: 1, // Velocidade máxima para parecer que o sistema está "carregando"
        cursor: '█',
        wrapperClassName: "opacity-80"
      }}
    />
  </div>

  {/* Overlay de Scanlines e Brilho para dar profundidade */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none" />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />

  {/* O "JG" grande que aparece sutilmente por cima de tudo no centro */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <span className="text-white/10 font-black text-9xl tracking-tighter">JG</span>
  </div>
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