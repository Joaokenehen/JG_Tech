import { type ReactNode } from 'react';
import { Settings, HardDrive, Monitor, Globe } from 'lucide-react';

// Definimos o contrato (interface) de como um serviço deve ser
export interface ServiceData {
  name: string;
  desc: string;
  icon: ReactNode;
  detalhes: ReactNode;
}

export const servicos: ServiceData[] = [
  { 
    name: 'Limpeza Técnica', 
    desc: 'Remoção de poeira e troca de pasta térmica premium.',
    icon: <Settings className="w-8 h-8 text-cyan-400" />,
    detalhes: (
      <div className="mt-4 pt-4 border-t border-slate-800 text-base text-slate-300 space-y-4 animate-in fade-in duration-500">
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
      <div className="mt-4 pt-4 border-t border-slate-800 text-base text-slate-300 space-y-4 animate-in fade-in duration-500">
        <div>
          <h4 className="font-bold text-cyan-500">Instalação</h4>
          <p>Instalação de drivers oficiais completos, kit Office e otimização do sistema para melhor desempenho.</p>
        </div>
        <div>
          <h4 className="font-bold text-cyan-500">Backup Seguro</h4>
          <p>Seus arquivos são preservados com integridade total antes de qualquer procedimento no sistema.</p>
        </div>
      </div>
    )
  },
  { 
    name: 'Montagem de PC', 
    desc: 'Montagem profissional com cable management.',
    icon: <Monitor className="w-8 h-8 text-cyan-400" />,
    detalhes: (
      <div className="mt-4 pt-4 border-t border-slate-800 text-base text-slate-300 space-y-4 animate-in fade-in duration-500">
        <div>
          <h4 className="font-bold text-cyan-500">Montagem de PC</h4>
          <p>Montagem completa de CPU com os componentes corretamente instalados e testados.</p>
        </div>
        <div>
          <h4 className="font-bold text-cyan-500">Cable Management</h4>
          <p>Organização impecável dos cabos para melhor fluxo de ar e estética do seu setup.</p>
        </div>
        <div>
          <h4 className="font-bold text-cyan-500">Upgrade de máquina</h4>
          <p>Melhoria de componentes (SSD, RAM, etc.), feito tanto para notebooks quanto CPUs.</p>
        </div>
      </div>
    )
  },
 { 
  name: 'Suporte Remoto', 
  desc: 'Solução de problemas de software e sistema sem sair de casa.',
  icon: <Globe className="w-8 h-8 text-cyan-400" />,
  detalhes: (
    <div className="mt-4 pt-4 border-t border-slate-800 text-base text-slate-300 space-y-4 animate-in fade-in duration-500">
      <div>
        <h4 className="font-bold text-cyan-500">Soluções Rápidas</h4>
        <p>Seu Windows está lento? O Office parou de funcionar? Algum programa não abre? Resolvemos erros de sistema, instalação de drivers e suporte a aplicativos de forma ágil.</p>
      </div>
      <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
        <h4 className="font-bold text-yellow-500 mb-1 text-xs uppercase tracking-wider">Como preparar o acesso:</h4>
        <ul className="list-disc list-outside ml-5 space-y-2 text-xs text-slate-300">
            <li>
             Ter o software <strong>AnyDesk</strong> instalado (você pode baixá-lo no link 
             <span className="text-cyan-400 font-bold"> "Baixar AnyDesk"</span> logo abaixo).
            </li>
            <li>Possuir uma conexão estável com a internet.</li>
            <li>Informar o seu <strong>Código de Acesso</strong> ao técnico.</li>
        </ul>
      </div>
    </div>
  )
},
];