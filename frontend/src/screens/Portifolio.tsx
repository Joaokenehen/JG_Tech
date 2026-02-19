import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Code2 } from 'lucide-react';
import { Header } from '../components/Header';
import { techStack } from '../data/portifolioData';
import { SocialButton } from '../components/SocialButtons';
import { TechCard } from '../components/TechCard';
import { ContactSection } from '../components/ContactSection';
import { ProjectCard } from '../components/ProjectCard';

export default function Portfolio() {
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
      <section id="tech" className="pt-16 pb-24 px-6 bg-slate-900/40 border-y border-slate-900 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <Code2 className="text-cyan-500 w-12 h-12 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Stack Tecnológica</h2>
            <p className="text-slate-500 mt-2">Tecnologias que utilizo para dar vida a projetos de alta performance.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <TechCard key={tech.name} {...tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. PROJETOS --- */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-1 bg-cyan-500 rounded-full" /> Projetos em Destaque
          </h2>
          
          <div className="grid gap-10">
            <ProjectCard 
              title="JGTech Brasil"
              badge="Case de Sucesso"
              description="Um ecossistema digital para prestação de serviços de TI. Focado em performance extrema e uma interface limpa que converte visitantes em clientes."
              tags={["React", "Node.js", "TypeScript", "Tailwind"]}
              servicesUrl="/servicos"
              repoUrl="https://github.com/Joaokenehen/jg_tech"
            />
          </div>
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