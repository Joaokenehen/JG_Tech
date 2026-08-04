export interface Project {
  id: string;
  tags: string[];
  repoUrl: string;
  servicesUrl: string;
  date: string; // Formato YYYY-MM-DD para facilitar a ordenação
}

export const projectsData: Project[] = [
  {
    id: "petworking",
    tags: ["React", "Node.js", "MySQL", "Docker", "TypeScript", "Sequelize"],
    repoUrl: "https://github.com/LucasSC98/Pet-Working",
    servicesUrl: "#", 
    date: "2024-06-15"
  },
  {
    id: "estoque-raiz-webapp",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    repoUrl: "https://github.com/Joaokenehen/EstoqueRaizWeb", 
    servicesUrl: "#",
    date: "2024-05-25"
  },
  {
    id: "estoque-raiz-wms",
    tags: ["Microservices", "TypeScript", "Docker", "DDD", "Redis", "PostgreSQL"],
    repoUrl: "https://github.com/Joaokenehen/Estoque_Raiz", 
    servicesUrl: "#", 
    date: "2024-05-20"
  },
  {
    id: "secure-auth-manager",
    tags: ["Node.js", "Express", "RBAC", "JWT", "Multer"],
    repoUrl: "https://github.com/Joaokenehen/atividade5_tpi4",
    servicesUrl: "#",
    date: "2024-04-05"
  },
  {
    id: "cardapio-jatos-mobile",
    tags: ["React Native", "Expo", "TypeScript", "Lucide React"],
    repoUrl: "https://github.com/Joaokenehen/cardapio-jatos-mobile",
    servicesUrl: "#", 
    date: "2024-03-10"
  },
  {
    id: "cardapio-do-paje",
    tags: ["React Native", "Node.js", "Express", "Expo"],
    repoUrl: "https://github.com/Joaokenehen/cardapio-do-paje",
    servicesUrl: "#", 
    date: "2024-02-15"
  },
  {
    id: "jgtech-brasil",
    tags: ["React", "Node.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/Joaokenehen/jg_tech",
    servicesUrl: "/servicos",
    date: "2024-01-20" // Adicionei uma data para consistência
  },
  {
    id: "simulador-financeiro",
    tags: ["TypeScript","React","Vite","Tailwind CSS","Node.js","SQLite"],
    repoUrl: "https://github.com/Joaokenehen/simulador-financeiro", 
    servicesUrl: "https://game-financeiro.vercel.app/", 
    date: "2026-08-03" 
  }
];


