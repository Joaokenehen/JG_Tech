import { motion } from 'framer-motion';
import { User } from 'lucide-react';

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
        <div className="aspect-square rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 relative z-10">
          {/* Aqui você pode colocar sua foto futuramente */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-black text-8xl">
            JG
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </div>
        
        {/* Elemento Decorativo atrás da "foto" */}
        <div className="absolute -top-4 -right-4 w-full h-full border-2 border-cyan-500/20 rounded-3xl -z-0" />
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