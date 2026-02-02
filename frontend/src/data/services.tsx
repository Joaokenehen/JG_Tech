import { type ReactNode } from 'react';
import { Settings, HardDrive, Monitor } from 'lucide-react';

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
      <div className="mt-4 pt-4 border-t border-slate-800 text-sm space-y-3 text-slate-300 animate-in fade-in duration-500">
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
];