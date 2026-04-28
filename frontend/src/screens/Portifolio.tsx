import { Header } from '../components/Header';
import { ContactSection } from '../components/ContactSection';
import { AboutSection } from '../components/AboutSection';
import { TechSection } from '../components/TechSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { HeroSection } from '../components/HeroSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { LanguageProvider } from '../context/LanguageContext';

export default function Portfolio() {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden">

      {/* --- HEADER --- */}
      <Header />
      
      {/* --- HERO SECTION --- */}
      <HeroSection />

      {/* --- SEÇÃO SOBRE MIM --- */}
      <AboutSection />

      {/* --- EXPERIÊNCIA --- */}
      <ExperienceSection />

      {/* --- 2. TECH STACK --- */}
      <TechSection />

     {/* --- 3. PROJETOS --- */}
      <ProjectsSection />

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
    </LanguageProvider>
  );
}