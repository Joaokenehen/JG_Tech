import { ChevronRight } from 'lucide-react';
import { type ReactNode } from 'react';

interface ActionLinkProps {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}

export function ActionLink({ name, url, icon, color, onClick }: ActionLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => onClick(e, url)}
      className={`flex items-center justify-between px-6 py-5 rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl ${color}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg">{name}</span>
      </div>
      <ChevronRight className="w-5 h-5 opacity-50" />
    </a>
  );
}