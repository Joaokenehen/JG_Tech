import { Linkedin, MessageCircle, Monitor, HardDrive, Settings, Instagram } from 'lucide-react';
import { useState } from 'react';
import { ActionLink } from '../components/ActionLink';
import { ServiceCard } from '../components/ServiceCard';

export default function App() {
  // Estado para controlar qual serviço está aberto (baseado no nome do serviço)
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
      url: 'https://www.linkedin.com/in/joao-gustavo-quennehen?utm_source=instagram&utm_medium=bio', 
      icon: <Linkedin className="w-6 h-6" />,
      color: 'bg-blue-700 hover:bg-blue-600'
    }
  ];

  const servicos = [
    { 
      name: 'Limpeza Técnica', 
      desc: 'Remoção de poeira e troca de pasta térmica premium.',
      icon: <Settings className="w-8 h-8 text-cyan-400" />,
      detalhes: (
        <div className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-300 space-y-3 animate-in fade-in duration-500">
          <div>
            <h4 className="font-bold text-cyan-500">Limpeza Profunda</h4>
            <p>Remoção de oxidação e poeira acumulada em fans e dissipadores. Feito em notebook e desktop.</p>
          </div>
          <div>
            <h4 className="font-bold text-cyan-500">Troca de Pasta Térmica</h4>
            <p>Utilizamos pasta térmica de melhor qualidade. A aplicação é ajustada conforme a finalidade do seu PC (Gamer, Edição ou Office).</p>
          </div>
        </div>
      )
    },
    { 
      name: 'Formatação & Backup', 
      desc: 'Sistema limpo, rápido e seus arquivos protegidos.',
      icon: <HardDrive className="w-8 h-8 text-cyan-400" />,
      detalhes: (
        <div className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-300 space-y-3 animate-in fade-in duration-500">
        <div >
          <h4 className="font-bold text-cyan-500">Instalação</h4>
          <p>Instalação de drivers oficiais completos, instalação do kit Office e caso necessário otimização do sistema para melhor desempenho.</p>
        </div>
         <div>
            <h4 className="font-bold text-cyan-500">Troca de Pasta Térmica</h4>
            <p>Utilizamos pasta térmica de melhor qualidade. A aplicação é ajustada conforme a finalidade do seu PC (Gamer, Edição ou Office).</p>
          </div>
        </div>
      )
    },
    { 
      name: 'Montagem de PC', 
      desc: 'Montagem profissional com cable management.',
      icon: <Monitor className="w-8 h-8 text-cyan-400" />,
      detalhes: (
        <div className="mt-4 pt-4 border-t border-slate-800 text-sm space-y-3 text-slate-300 animate-in fade-in duration-500">
          <div>
          <h4 className="font-bold text-cyan-500">Montagem de PC</h4>
          <p>Montagem completa de CPU com os componentes corretamente instalados.</p>
          </div>
          <div>
          <h4 className="font-bold text-cyan-500">Cable Management</h4>
          <p>Organização impecável dos cabos para melhor fluxo de ar e estética do seu setup.</p>
          </div>
          <div>
          <h4 className="font-bold text-cyan-500">Upgrade de máquina</h4>
          <p>Melhoria de componentes (SSD, RAM, etc.), feito tanto para notebooks e CPU .</p>
          </div>
        </div>
      )
    },
  ];

  const handleSafeClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.includes('google.com/url') || url.includes('linkedin.com')) {
      e.preventDefault();
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
      
      {/* Perfil */}
      <div className="flex flex-col items-center mt-8 mb-8">
        <div className="w-24 h-24 rounded-full border-2 border-cyan-500 p-1 shadow-[0_0_20px_rgba(6,182,212,0.4)] mb-4 transition-transform hover:scale-105">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
             <span className="text-2xl font-bold text-cyan-500 tracking-tighter">JG</span>
          </div>
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white uppercase text-center">JGKenehen_Tech</h1>
        <p className="text-cyan-500 font-medium text-sm tracking-widest uppercase mt-1">Soluções em Hardware</p>
      </div>

  

      {/* Seção de Serviços - Usando o Componente ServiceCard */}
      <div className="w-full max-w-md flex flex-col gap-3 mb-10">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-2 mb-1">Nossos Serviços</h2>
        {servicos.map((s) => (
          <ServiceCard
            key={s.name}
            {...s} // Isso passa automaticamente: name, desc, icon e detalhes
            isOpen={activeService === s.name}
            onToggle={() => setActiveService(activeService === s.name ? null : s.name)}
          />
        ))}
      </div>

     {/* Botões de Ação - Usando o Componente ActionLink */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-2 mb-1">Links Úteis</h2>
        {links.map((link) => (
          <ActionLink
            key={link.name}
            {...link} // Passa name, url, icon, color
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