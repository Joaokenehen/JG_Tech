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
    title: "Estoque Raiz - WMS",
    badge: "Enterprise Architecture",
    description: "Sistema WMS de alta complexidade para gestão de insumos agrícolas. Utiliza arquitetura de microserviços distribuídos com foco em rastreabilidade de lotes, performance com Redis e monitoramento via Prometheus/Grafana.",
    tags: ["Microservices", "TypeScript", "Docker", "DDD", "Redis", "PostgreSQL"],
    repoUrl: "https://github.com/Joaokenehen/Estoque_Raiz", // Confirme se o nome do repo está correto
    servicesUrl: "#", // Mantemos oculto como os outros repositórios
    date: "2024-05-20"
  },
  {
    title: "PetWorking",
    badge: "Full Stack Ecosystem",
    description: "Sistema completo de gestão para Pet Shops que une e-commerce e agendamento de serviços. Inclui controle de estoque, perfis de pets, autenticação JWT e uma arquitetura robusta com Node.js, React e MySQL.",
    tags: ["React", "Node.js", "MySQL", "Docker", "TypeScript", "Sequelize"],
    repoUrl: "https://github.com/LucasSC98/Pet-Working",
    servicesUrl: "#", // Mantemos oculto como os outros repositórios
    date: "2024-06-15"
  },
  {
    title: "Cardápio do Pajé",
    badge: "Full Stack & Mobile",
    description: "Sistema de cardápio digital composto por uma API REST robusta e uma aplicação mobile para pedidos em tempo real. Desenvolvido para otimizar o atendimento de estabelecimentos gastronómicos.",
    tags: ["React Native", "Node.js", "Express", "Expo"],
    repoUrl: "https://github.com/Joaokenehen/cardapio-do-paje",
    servicesUrl: "#", 
    date: "2024-02-15"
  },
  {
    title: "Cardápio Jatos Mobile",
    badge: "Mobile Specialist",
    description: "Um catálogo interativo de defesa aérea que permite explorar jatos militares com detalhes técnicos. Focado em UX fluida e alta performance para dispositivos móveis.",
    tags: ["React Native", "Expo", "TypeScript", "Lucide React"],
    repoUrl: "https://github.com/Joaokenehen/cardapio-jatos-mobile",
    servicesUrl: "#", 
    date: "2024-03-10"
  },
  {
    title: "Secure Auth & File Manager",
    badge: "Security & Backend",
    description: "Sistema full-stack focado em segurança, implementando controle de acesso baseado em funções (RBAC), autenticação robusta e gestão modular de uploads de ficheiros.",
    tags: ["Node.js", "Express", "RBAC", "JWT", "Multer"],
    repoUrl: "https://github.com/Joaokenehen/atividade5_tpi4",
    servicesUrl: "#", // Botão de serviços oculto
    date: "2024-04-05"
  },
  
];