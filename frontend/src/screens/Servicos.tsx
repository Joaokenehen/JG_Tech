import { Linkedin, MessageCircle, Instagram, Download, FolderCode } from 'lucide-react';
import { useState } from 'react';
import { ActionLink } from '../components/ActionLink';
import { ServiceCard } from '../components/ServiceCard';
import { servicos } from '../data/servicesData';

export default function App() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const links = [
    {
      name: 'Orçamento via WhatsApp',
      url: 'https://wa.me/5544997025387',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-green-600 hover:bg-green-500'
    },
    {
      name: 'Siga no Instagram',
      url: 'https://www.instagram.com/jgkenehen_tech/', 
      icon: <Instagram className="w-6 h-6" />,
      color: 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400'
    },
    {
      name: 'Meu LinkedIn Profissional',
      url: 'https://www.linkedin.com/in/joao-gustavo-quennehen', 
      icon: <Linkedin className="w-6 h-6" />,
      color: 'bg-blue-700 hover:bg-blue-600'
    },
    {
      name: 'Baixar AnyDesk (Suporte)',
      url: 'https://anydesk.com/pt/downloads/windows', 
      icon: <Download className="w-6 h-6" />,
      color: 'bg-red-700 hover:bg-red-600'
    }
  ];

  const navigationLinks = [
    {
      name: "Conhecer meu Portfólio",
      url: "/portfolio", 
      icon: <FolderCode className="w-6 h-6" />,
      color: "bg-cyan-600 hover:bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]" 
    }
  ];

  const handleSafeClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.includes('linkedin.com') || url.includes('anydesk.com')) {
      e.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
      
      {/* Perfil */}
      <div className="flex flex-col items-center mt-8 mb-8">
        <div className="w-24 h-24 rounded-full border-2 border-cyan-500 p-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] mb-4">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
             <span className="text-2xl font-bold text-cyan-500 tracking-tighter">JG</span>
          </div>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white uppercase text-center">JG_Tech</h1>
        <p className="text-cyan-500 font-medium text-sm tracking-widest uppercase mt-1">Soluções em Hardware</p>
      </div>

      {/* Serviços */}
      <div className="w-full max-w-md flex flex-col gap-3 mb-10">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-2 mb-1">Nossos Serviços</h2>
        {servicos.map((s) => (
          <ServiceCard
            key={s.name}
            {...s}
            isOpen={activeService === s.name}
            onToggle={() => setActiveService(activeService === s.name ? null : s.name)}
          />
        ))}
      </div>

      {/* Links Úteis */}
      <div className="w-full max-w-md flex flex-col gap-4 mb-10">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-2 mb-1">Links Úteis</h2>
        {links.map((link) => (
          <ActionLink key={link.name} {...link} onClick={handleSafeClick} />
        ))}
      </div>

      {/* SOBRE MIM */}
      <div className="w-full max-w-md flex flex-col gap-4 mb-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-2" />
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-2 mb-1">
          Sobre o Desenvolvedor
        </h2>
        {navigationLinks.map((link) => (
          <ActionLink
            key={link.name}
            {...link}
            onClick={handleSafeClick}
          />
        ))}
      </div>

      <footer className="mt-auto py-12 text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em] text-center">
        João Gustavo • 2026
      </footer>
    </div>
  );
}