import { FaReact, FaNodeJs, FaJs, FaGithub, FaLinkedin, FaWhatsapp, FaJava } from 'react-icons/fa';
import { SiTypescript, SiVite, SiC } from 'react-icons/si';

export const techStack = [
  { name: 'React', icon: FaReact, color: '#61DAFB', shadow: 'shadow-blue-500/20' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', shadow: 'shadow-green-500/20' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', shadow: 'shadow-blue-600/20' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', shadow: 'shadow-yellow-500/20' },
  { name: 'Linguagem C', icon: SiC, color: '#A8B9CC', shadow: 'shadow-slate-400/20' },
  { name: 'Java', icon: FaJava, color: '#ED8B00', shadow: 'shadow-orange-500/20' },
  { name: 'Vite', icon: SiVite, color: '#646CFF', shadow: 'shadow-purple-500/20' },
];

export const socialLinks = [
  { name: 'GitHub', href:   'https://github.com/Joaokenehen', icon: FaGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joao-gustavo-quennehen', icon: FaLinkedin },
  { name: 'WhatsApp', href: 'https://wa.me/5544997025387', icon: FaWhatsapp },
];

export const projects = [
  {
    title: "JGTech Brasil",
    badge: "Case de Sucesso",
    description: "Um ecossistema digital para prestação de serviços de TI. Focado em performance extrema e interface limpa.",
    tags: ["React", "Node.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/Joaokenehen/jg_tech",
    servicesUrl: "/servicos"
  },
  {
    title: "E-Commerce Alpha",
    badge: "Full Stack",
    description: "Plataforma de vendas com integração de pagamentos e painel administrativo completo.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    repoUrl: "https://github.com/Joaokenehen/ecommerce",
    servicesUrl: "#"
  },
  {
    title: "Sistema de Agendamento",
    badge: "Mobile First",
    description: "App para barbearias e salões controlarem horários e clientes em tempo real.",
    tags: ["React Native", "Firebase"],
    repoUrl: "https://github.com/Joaokenehen/agendamento",
    servicesUrl: "#"
  }
];