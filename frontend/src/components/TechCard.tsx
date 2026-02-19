import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

interface TechCardProps {
  name: string;
  icon: IconType;
  color: string;
  shadow: string;
  index: number;
}

export const TechCard: React.FC<TechCardProps> = ({ name, icon: Icon, color, shadow, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`flex flex-col items-center gap-4 p-8 bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group ${shadow} hover:shadow-2xl w-40 md:w-56`}
    >
      <span 
        className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300"
        style={{ color }}
      >
        <Icon />
      </span>
      <span className="font-bold text-lg text-slate-300 group-hover:text-white">{name}</span>
    </motion.div>
  );
};