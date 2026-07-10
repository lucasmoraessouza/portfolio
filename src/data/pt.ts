import type { Content } from './types';

export const pt: Content = {
  locale: 'pt-BR',
  htmlLang: 'pt-BR',
  meta: {
    title: 'Lucas de Moraes Souza — Desenvolvedor Full-stack',
    description:
      'Desenvolvedor Full-stack com 6 anos de experiência criando produtos web e mobile com React, Next.js, Node.js e TypeScript. Sorocaba/SP, Brasil.',
  },
  nav: {
    about: 'Sobre',
    skills: 'Skills',
    experience: 'Experiência',
    education: 'Formação',
    contact: 'Contato',
  },
  hero: {
    role: 'Desenvolvedor Full-stack',
    location: 'Sorocaba · São Paulo · Brasil',
    tagline: '6 anos construindo produtos web e mobile de ponta a ponta.',
    ctaContact: 'Fale comigo',
    ctaLinkedin: 'LinkedIn',
    photoAlt: 'Foto de Lucas de Moraes Souza',
    scrollHint: 'Role para explorar',
  },
  marquee: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'React Native',
    'NestJS',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'AWS',
    'Tailwind',
    'Firebase',
  ],
  about: {
    label: '01 — Sobre',
    title: 'Sobre mim',
    statement: 'Transformo ideias em produtos digitais rápidos, escaláveis e centrados no usuário.',
    paragraphs: [
      'Sou desenvolvedor Full-stack especializado na criação de interfaces interativas e altamente funcionais. Tenho amplo domínio de ReactJS, Next.js, JavaScript e TypeScript, com expertise em estilização avançada usando TailwindCSS, Styled Components e Material UI. No backend, desenvolvo APIs eficientes com Node.js, NestJS e Express, trabalhando com PostgreSQL, MySQL e MongoDB, além de Docker para integração e implantação ágil.',
      'Apaixonado por tecnologia e sempre em busca de inovação, valorizo soluções escaláveis e centradas na melhor experiência do usuário. Trabalho com testes unitários, metodologias ágeis e práticas modernas de desenvolvimento — garantindo código limpo, testável e de alta performance. Já entreguei de plataformas bancárias (Pix, boletos e pagamentos) a apps publicados na App Store e integrações com IA na AWS.',
    ],
    stats: [
      { value: '6', label: 'anos de experiência' },
      { value: '15+', label: 'tecnologias no dia a dia' },
      { value: '5', label: 'empresas e dezenas de projetos' },
    ],
  },
  skills: {
    label: '02 — Skills',
    title: 'O que eu domino',
    subtitle: 'Tecnologias que uso para tirar produtos do papel.',
    groups: [
      {
        title: 'Frontend',
        items: [
          'ReactJS',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'React Native',
          'TailwindCSS',
          'Styled Components',
          'Material UI',
        ],
      },
      {
        title: 'Backend',
        items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'JWT', 'Microserviços', 'Testes unitários'],
      },
      {
        title: 'Banco de dados',
        items: ['PostgreSQL', 'MySQL', 'MongoDB'],
      },
      {
        title: 'DevOps & Cloud',
        items: ['Docker', 'AWS', 'AWS Bedrock', 'Firebase', 'Git', 'CI/CD'],
      },
    ],
  },
  experience: {
    label: '03 — Experiência',
    title: 'Minha trajetória',
    subtitle: 'De estágio a liderança técnica — a jornada até aqui.',
    jobs: [
      {
        company: 'Zig. The Global Funtech · Cubos Tecnologia',
        role: 'Desenvolvedor Full-stack',
        period: 'jun 2025 — atual',
        location: 'Remoto',
        bullets: [
          'Desenvolvimento e evolução de soluções digitais escaláveis, com foco em performance e experiência do usuário.',
          'APIs e serviços backend com Node.js e TypeScript; interfaces modernas e performáticas com React e Next.js.',
          'Participação ativa em code reviews, definição de padrões e colaboração próxima com produto, design e QA.',
        ],
        stack: ['Node.js', 'React', 'TypeScript', 'Next.js', 'REST APIs'],
      },
      {
        company: 'Lionsoft Inc.',
        role: 'Desenvolvedor Full-stack',
        period: 'ago 2024 — jun 2025',
        location: 'Sorocaba/SP',
        bullets: [
          'Backend de integração para plataforma bank-as-a-service com três camadas de segurança: Pix, boleto bancário e pagamento de contas.',
          'Backend para impressão de etiquetas ZPL e aplicativo de plantões médicos.',
          'Publicação de aplicativos na App Store e TestFlight.',
        ],
        stack: ['Node.js', 'React', 'Next.js', 'React Native', 'TypeScript', 'Docker'],
      },
      {
        company: 'Gria',
        role: 'Desenvolvedor Front-end → Full-stack',
        period: 'fev 2023 — ago 2024',
        location: 'São Paulo/SP',
        bullets: [
          'Plataforma de recrutamento de candidatos e plataforma de avaliação comportamental com IA para identificar perfis dominantes.',
          'Desenvolvimento de chat com integração ao AWS Bedrock.',
          'Manutenção e desenvolvimento de novas funcionalidades em produção.',
        ],
        stack: ['ReactJS', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
      },
      {
        company: 'Lionsoft Inc.',
        role: 'Desenvolvedor Front-end',
        period: 'set 2021 — fev 2023',
        location: 'Sorocaba/SP',
        bullets: [
          'Liderança de uma equipe de cinco desenvolvedores em uma plataforma de marketing digital.',
          'Integração com o gateway de pagamento do Mercado Pago em uma plataforma de lojas.',
          'Sistema de registros médicos usado por um dos grandes clubes do futebol brasileiro e plataforma de agendamento de exames para um dos maiores laboratórios da cidade.',
          'Introdução do React Native para o desenvolvimento de aplicativos móveis.',
        ],
        stack: ['ReactJS', 'Next.js', 'Node.js', 'React Native', 'TypeScript', 'Styled Components'],
      },
      {
        company: 'Mind Consulting',
        role: 'Desenvolvedor Web/Mobile',
        period: 'mar 2021 — ago 2021',
        location: 'Sorocaba/SP',
        bullets: [
          'Sistema web para controle de contabilidade de empresas, com gráficos e importação de XLS.',
          'Paginação, filtros e controle de saldo em um sistema de registro de vendas de serviços.',
          'Hackathon interno: dashboard para controle de transferências.',
        ],
        stack: ['ReactJS', 'JavaScript', 'TypeScript', 'Styled Components'],
      },
    ],
  },
  education: {
    label: '04 — Formação',
    title: 'Formação & Certificações',
    degrees: [
      {
        school: 'Universidade Paulista (UNIP)',
        degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        period: '2020 — 2021',
      },
      {
        school: 'Etec Armando Pannunzio',
        degree: 'Técnico em Automação Industrial',
        period: '2017 — 2019',
      },
    ],
    certsTitle: 'Certificações',
    certs: [
      'NLW Connect — React',
      'NLW Expert — Trilha React',
      'NLW Connect — Node.js',
      'ReactJS',
      'NLW JavaScript Full-stack Intermediário',
    ],
  },
  contact: {
    label: '05 — Contato',
    title: 'Vamos construir algo juntos?',
    subtitle:
      'Estou sempre aberto a novos projetos, oportunidades e boas conversas sobre tecnologia. Me chame por onde preferir:',
    email: 'E-mail',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
  },
  footer: {
    madeWith: 'Feito com Astro + Tailwind',
  },
};
