export const translations = {
  pt: {
    header: {
      contact: "Contato",
      about: "Sobre",
      techs: "Tecnologias",
      projects: "Projetos",
      email: "Email"
    },
    services: {
      subtitle: "Soluções em Hardware",
      ourServices: "Nossos Serviços",
      usefulLinks: "Links Úteis",
      aboutDev: "Sobre o Desenvolvedor",
      budget: "Orçamento via WhatsApp",
      follow: "Siga no Instagram",
      linkedin: "Meu LinkedIn Profissional",
      anydesk: "Baixar AnyDesk (Suporte)",
      portfolio: "Conhecer meu Portfólio",
      footer: "João Gustavo • 2026"
    },
    hero: {
      role: "Desenvolvedor",
      highlight: "Full Stack",
      description: "especializado em criar experiências digitais escaláveis e arquitetura moderna.",
      welcome: "Bem-vindo"
    },
    about: {
      tag: "Minha História",
      title: "Transformando ideias em",
      titleHighlight: "realidade digital",
      p1: "Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam \"por baixo do capô\". O que era apenas um hobby se transformou em uma paixão por criar soluções que impactam pessoas.",
      p2: "Além do desenvolvimento, sou um entusiasta da área de <strong>Cybersegurança</strong>. Atualmente, dedico parte do meu tempo explorando o universo <strong>Linux</strong> e aprendendo técnicas de <strong>Pentesting</strong> e hacking ético. Acredito que entender como sistemas são testados e protegidos me torna um desenvolvedor muito mais consciente e preparado.",
      p3: "Hoje, foco em desenvolver aplicações web de alta performance, unindo um design intuitivo com arquiteturas de código limpas e escaláveis. Acredito que a tecnologia deve ser uma ponte para resolver problemas reais.",
      badges: { exp: "Anos de Exp.", proj: "Projetos", cyber: "Security Student", ads: "developer student" }
    },
    experience: {
      title: "Trilha de Evolução",
      subtitle: "Do hardware ao código, construindo uma base sólida para resolver problemas reais.",
      showLess: "Ver Menos",
      showMore: "Ver Histórico Completo",
      item1: { year: "O Início", title: "Estudando linguagem C", company: "Estudante Engenharia Eletrônica UTFPR", description: "Tudo começou quando vi programação pela primeira vez na UTFPR. A linguagem C me fascinou por sua proximidade com o hardware e a capacidade de criar sistemas eficientes do zero.", tech: ["Programming", "C"] },
      item2: { year: "2025 - Presente", title: "Estudante de T.A.D.S", company: "Análise e Desenvolvimento de Sistemas", description: "Aprofundamento acadêmico em arquiteturas de software, lógica de programação avançada e padrões de projeto.", tech: ["Lógica", "Arquitetura", "Engenharia de Software"] },
      item3: { year: "2025 - Presente", title: "Desenvolvedor Full Stack Autônomo", company: "Projetos Freelance & Enterprise", description: "Desenvolvimento de sistemas escaláveis e de alta complexidade (como o WMS Estoque Raiz e o JGTech Brasil). Foco em microserviços, performance com Redis e interfaces modernas. Cada vez mais aprendendo novas linguagens para aprofundar minha visão de software e arquitetura.", tech: ["React", "Node.js", "Java", "TypeScript", "React Native"] },
      item4: { year: "2026 - Presente", title: "Entusiasta em Segurança Ofensiva", company: "Estudos em Cybersegurança", description: "Exploração de vulnerabilidades web (como falhas IDOR), uso de ferramentas do Kali Linux e foco em construir aplicações blindadas desde o código fonte.", tech: ["Pentesting", "Kali Linux", "Hacking Ético", "SecDevOps"] },
      item5: { year: "2025 - Presente", title: "Inicio da carreira de TI", company: "Expresso Nordeste - TI", description: "Atuação em suporte técnico, manutenção de hardware e software, além de desenvolvimento de sistemas internos para otimizar processos logísticos. Essa experiência me proporcionou uma visão prática do impacto da tecnologia no mundo real e a importância de soluções eficientes.", tech: ["Suporte Técnico", "Manutenção de Hardware", "Desenvolvimento Interno"] }
    },
    tech: {
      title: "Stack Tecnológica",
      subtitle: "Tecnologias que utilizo para dar vida a projetos de alta performance.",
      viewList: "Ver todas em lista",
      viewGlobe: "Voltar para o Globo",
      showLess: "Mostrar Menos",
      showAll: "Ver Todas"
    },
    projects: {
      title: "Projetos",
      focus: "Foco",
      grid: "Grid",
      search: "Nome ou tecnologia...",
      notFound: "Nenhum projeto encontrado com",
      viewServices: "Ver Serviços",
      repository: "Repositório",
      items: [
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
          repoUrl: "https://github.com/Joaokenehen/Estoque_Raiz", 
          servicesUrl: "#", 
          date: "2024-05-20"
        },
        {
          title: "Estoque Raiz - Web App",
          badge: "Frontend Specialist",
          description: "Interface moderna do sistema WMS para gestão de insumos agrícolas. Focada em dashboards dinâmicos, controle de inventário em tempo real e alta fidelidade visual com React e Tailwind.",
          tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
          repoUrl: "https://github.com/Joaokenehen/EstoqueRaizWeb", 
          servicesUrl: "#",
          date: "2024-05-25"
        },
        {
          title: "PetWorking",
          badge: "Full Stack Ecosystem",
          description: "Sistema completo de gestão para Pet Shops que une e-commerce e agendamento de serviços. Inclui controle de estoque, perfis de pets, autenticação JWT e uma arquitetura robusta com Node.js, React e MySQL.",
          tags: ["React", "Node.js", "MySQL", "Docker", "TypeScript", "Sequelize"],
          repoUrl: "https://github.com/LucasSC98/Pet-Working",
          servicesUrl: "#", 
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
          servicesUrl: "#",
          date: "2024-04-05"
        }
      ]
    },
    contact: {
      title: "VAMOS",
      titleHighlight: "CONVERSAR?",
      emailLabel: "E-mail para contato",
      copied: "Copiado!",
      send: "ENVIAR MENSAGEM"
    }
  },
  en: {
    header: {
      contact: "Contact",
      about: "About",
      techs: "Techs",
      projects: "Projects",
      email: "Email"
    },
    services: {
      subtitle: "Hardware Solutions",
      ourServices: "Our Services",
      usefulLinks: "Useful Links",
      aboutDev: "About the Developer",
      budget: "Quote via WhatsApp",
      follow: "Follow on Instagram",
      linkedin: "My Professional LinkedIn",
      anydesk: "Download AnyDesk (Support)",
      portfolio: "Check out my Portfolio",
      footer: "John Gustavo • 2026"
    },
    hero: {
      role: "Developer",
      highlight: "Full Stack",
      description: "specialized in creating scalable digital experiences and modern architecture.",
      welcome: "Welcome"
    },
    about: {
      tag: "My Story",
      title: "Turning ideas into",
      titleHighlight: "digital reality",
      p1: "My journey in technology started with a curiosity to understand how things work \"under the hood\". What was once just a hobby turned into a passion for creating solutions that impact people.",
      p2: "Besides development, I am a <strong>Cybersecurity</strong> enthusiast. Currently, I dedicate part of my time exploring the <strong>Linux</strong> universe and learning <strong>Pentesting</strong> and ethical hacking techniques. I believe that understanding how systems are tested and protected makes me a much more aware and prepared developer.",
      p3: "Today, I focus on developing high-performance web applications, combining intuitive design with clean and scalable code architectures. I believe technology should be a bridge to solve real problems.",
      badges: { exp: "Years Exp.", proj: "Projects", cyber: "Security Student", ads: "Developer Student" }
    },
    experience: {
      title: "Evolution Track",
      subtitle: "From hardware to code, building a solid foundation to solve real problems.",
      showLess: "Show Less",
      showMore: "View Full History",
      item1: { year: "The Beginning", title: "Studying C Language", company: "Electronic Eng. Student at UTFPR", description: "It all started when I saw programming for the first time at UTFPR. The C language fascinated me due to its proximity to hardware and the ability to create efficient systems from scratch.", tech: ["Programming", "C"] },
      item2: { year: "2025 - Present", title: "S.D.A Student", company: "Systems Design and Analysis", description: "Academic deepening in software architectures, advanced programming logic, and design patterns.", tech: ["Logic", "Architecture", "Software Engineering"] },
      item3: { year: "2025 - Present", title: "Freelance Full Stack Developer", company: "Freelance & Enterprise Projects", description: "Development of scalable and highly complex systems (like WMS Estoque Raiz and JGTech Brasil). Focus on microservices, performance with Redis, and modern interfaces. Increasingly learning new languages to deepen my vision of software and architecture.", tech: ["React", "Node.js", "Java", "TypeScript", "React Native"] },
      item4: { year: "2026 - Present", title: "Offensive Security Enthusiast", company: "Cybersecurity Studies", description: "Exploration of web vulnerabilities (like IDOR flaws), use of Kali Linux tools, and focus on building armored applications from the source code.", tech: ["Pentesting", "Kali Linux", "Ethical Hacking", "SecDevOps"] },
      item5: { year: "2025 - Present", title: "Start of IT Career", company: "Expresso Nordeste - IT", description: "Acting in technical support, hardware and software maintenance, in addition to developing internal systems to optimize logistical processes. This experience gave me a practical view of the impact of technology in the real world and the importance of efficient solutions.", tech: ["Technical Support", "Hardware Maintenance", "Internal Development"] }
    },
    tech: {
      title: "Tech Stack",
      subtitle: "Technologies I use to bring high-performance projects to life.",
      viewList: "View all in list",
      viewGlobe: "Back to Globe",
      showLess: "Show Less",
      showAll: "View All"
    },
    projects: {
      title: "Projects",
      focus: "Focus",
      grid: "Grid",
      search: "Name or tech...",
      notFound: "No project found for",
      viewServices: "View Services",
      repository: "Repository",
      items: [
        {
          title: "JGTech Brasil",
          badge: "Success Case",
          description: "A digital ecosystem for IT service delivery. Focused on extreme performance and a clean interface.",
          tags: ["React", "Node.js", "TypeScript", "Tailwind"],
          repoUrl: "https://github.com/Joaokenehen/jg_tech",
          servicesUrl: "/servicos"
        },
        {
          title: "Estoque Raiz - WMS",
          badge: "Enterprise Architecture",
          description: "Highly complex WMS system for agricultural input management. Uses distributed microservices architecture focusing on batch traceability, performance with Redis, and monitoring via Prometheus/Grafana.",
          tags: ["Microservices", "TypeScript", "Docker", "DDD", "Redis", "PostgreSQL"],
          repoUrl: "https://github.com/Joaokenehen/Estoque_Raiz", 
          servicesUrl: "#", 
          date: "2024-05-20"
        },
        {
          title: "Estoque Raiz - Web App",
          badge: "Frontend Specialist",
          description: "Modern WMS system interface for agricultural input management. Focused on dynamic dashboards, real-time inventory control, and high visual fidelity with React and Tailwind.",
          tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
          repoUrl: "https://github.com/Joaokenehen/EstoqueRaizWeb", 
          servicesUrl: "#",
          date: "2024-05-25"
        },
        {
          title: "PetWorking",
          badge: "Full Stack Ecosystem",
          description: "Complete management system for Pet Shops that combines e-commerce and service scheduling. Includes inventory control, pet profiles, JWT authentication, and a robust architecture with Node.js, React, and MySQL.",
          tags: ["React", "Node.js", "MySQL", "Docker", "TypeScript", "Sequelize"],
          repoUrl: "https://github.com/LucasSC98/Pet-Working",
          servicesUrl: "#", 
          date: "2024-06-15"
        },
        {
          title: "Cardápio do Pajé",
          badge: "Full Stack & Mobile",
          description: "Digital menu system composed of a robust REST API and a mobile application for real-time orders. Developed to optimize service in gastronomic establishments.",
          tags: ["React Native", "Node.js", "Express", "Expo"],
          repoUrl: "https://github.com/Joaokenehen/cardapio-do-paje",
          servicesUrl: "#", 
          date: "2024-02-15"
        },
        {
          title: "Cardápio Jatos Mobile",
          badge: "Mobile Specialist",
          description: "An interactive air defense catalog that allows exploring military jets with technical details. Focused on fluid UX and high performance for mobile devices.",
          tags: ["React Native", "Expo", "TypeScript", "Lucide React"],
          repoUrl: "https://github.com/Joaokenehen/cardapio-jatos-mobile",
          servicesUrl: "#", 
          date: "2024-03-10"
        },
        {
          title: "Secure Auth & File Manager",
          badge: "Security & Backend",
          description: "Full-stack system focused on security, implementing Role-Based Access Control (RBAC), robust authentication, and modular file upload management.",
          tags: ["Node.js", "Express", "RBAC", "JWT", "Multer"],
          repoUrl: "https://github.com/Joaokenehen/atividade5_tpi4",
          servicesUrl: "#",
          date: "2024-04-05"
        }
      ]
    },
    contact: {
      title: "LET'S",
      titleHighlight: "TALK?",
      emailLabel: "Contact e-mail",
      copied: "Copied!",
      send: "SEND MESSAGE"
    }
  }
};