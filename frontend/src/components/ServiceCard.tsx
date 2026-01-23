import { ChevronRight } from 'lucide-react';
import { type ReactNode } from 'react';

interface ServiceCardProps {
  name: string;
  desc: string;
  icon: ReactNode;
  detalhes: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function ServiceCard({ name, desc, icon, detalhes, isOpen, onToggle }: ServiceCardProps) {
  return (
    <div 
      onClick={onToggle}
      className={`group flex flex-col bg-slate-900/50 border ${isOpen ? 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'border-slate-800'} p-5 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-slate-900 shadow-xl overflow-hidden`}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg leading-none mb-1 group-hover:text-cyan-400 transition-colors">{name}</h3>
          <p className="text-slate-400 text-xs leading-tight">{desc}</p>
        </div>
        <ChevronRight className={`w-5 h-5 text-slate-700 transition-all duration-300 ${isOpen ? 'rotate-90 text-cyan-500' : ''}`} />
      </div>

      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          {detalhes}
        </div>
      </div>
    </div>
  );
}