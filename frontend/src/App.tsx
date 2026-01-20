import { Linkedin, MessageCircle, Monitor, HardDrive, Settings, ChevronRight } from 'lucide-react';

export default function App() {
  const links = [
    {
      name: 'Orçamento via WhatsApp',
      url: 'https://wa.me/5544997025387',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-green-600 hover:bg-green-500'
    },
    {
      name: 'Meu LinkedIn Profissional',
      // Técnica do Google Redirect: força o Instagram a abrir o navegador externo
      url: 'https://www.google.com/url?q=https://www.linkedin.com/in/joao-gustavo-quennehen', 
      icon: <Linkedin className="w-6 h-6" />,
      color: 'bg-blue-700 hover:bg-blue-600'
    }
  ];

  const servicos = [
    { 
      name: 'Limpeza Técnica', 
      desc: 'Remoção de poeira e troca de pasta térmica premium.',
      icon: <Settings className="w-8 h-8 text-cyan-400" /> 
    },
    { 
      name: 'Formatação & Backup', 
      desc: 'Sistema limpo, rápido e seus arquivos protegidos.',
      icon: <HardDrive className="w-8 h-8 text-cyan-400" /> 
    },
    { 
      name: 'Montagem de PC', 
      desc: 'Montagem profissional com cable management.',
      icon: <Monitor className="w-8 h-8 text-cyan-400" /> 
    },
  ];

  // Função otimizada para "quebrar" o navegador interno do Instagram
  const handleSafeClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    // Para o LinkedIn, forçamos a abertura fora do contexto do Instagram
    if (url.includes('google.com/url')) {
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

      {/* Seção de Serviços em Destaque */}
      <div className="w-full max-w-md flex flex-col gap-3 mb-10">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-2 mb-1">Nossos Serviços</h2>
        {servicos.map((s) => (
          <div 
            key={s.name} 
            className="group flex items-center gap-4 bg-slate-900/50 border border-slate-800 p-5 rounded-2xl transition-all hover:border-cyan-500/50 hover:bg-slate-900 shadow-xl"
          >
            <div className="p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg leading-none mb-1 group-hover:text-cyan-400 transition-colors">{s.name}</h3>
              <p className="text-slate-400 text-xs leading-tight">{s.desc}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-cyan-500 transition-colors" />
          </div>
        ))}
      </div>

      {/* Botões de Ação */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-2 mb-1">Links Úteis</h2>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleSafeClick(e, link.url)}
            className={`flex items-center justify-between px-6 py-5 rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl ${link.color}`}
          >
            <div className="flex items-center gap-3">
              {link.icon}
              <span className="text-lg">{link.name}</span>
            </div>
            <ChevronRight className="w-5 h-5 opacity-50" />
          </a>
        ))}
      </div>

      <footer className="mt-auto py-12 text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em] text-center">
        João Gustavo • 2026
      </footer>
    </div>
  );
}