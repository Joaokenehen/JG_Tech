import { FaReact, FaNodeJs, FaJs, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiTypescript, SiVite, SiC } from 'react-icons/si';

export const techStack = [
  { name: 'React', icon: FaReact, color: '#61DAFB', shadow: 'shadow-blue-500/20' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', shadow: 'shadow-green-500/20' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', shadow: 'shadow-blue-600/20' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', shadow: 'shadow-yellow-500/20' },
  { name: 'Linguagem C', icon: SiC, color: '#A8B9CC', shadow: 'shadow-slate-400/20' },
  
  { name: 'Vite', icon: SiVite, color: '#646CFF', shadow: 'shadow-purple-500/20' },
];

export const socialLinks = [
  { name: 'GitHub', href:   'https://github.com/Joaokenehen', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joao-gustavo-quennehen', icon: FaLinkedin },
  { name: 'WhatsApp', href: 'https://wa.me/5544997025387', icon: FaWhatsapp },
];