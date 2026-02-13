import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  servicesUrl: string;
  badge?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, description, tags, repoUrl, servicesUrl, badge 
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-1"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity" />
      
      <div className="relative bg-slate-950 rounded-[22px] p-8 md:p-12 md:flex gap-12 items-center text-center md:text-left">
        <div className="flex-1 space-y-6">
          {badge && (
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="px-4 py-1 text-xs font-black uppercase tracking-widest text-cyan-400 bg-cyan-950/30 rounded-full border border-cyan-900/50">
                {badge}
              </span>
            </div>
          )}
          
          <h3 className="text-3xl md:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Link 
              to={servicesUrl}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-cyan-500 hover:text-white transition-all shadow-xl shadow-white/5"
            >
              Ver Serviços <ChevronRight size={20} />
            </Link>
            
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-slate-300 font-bold rounded-2xl hover:bg-slate-800 transition-all border border-slate-800"
            >
              Repositório <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};