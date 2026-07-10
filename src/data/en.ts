import type { Content } from './types';

export const en: Content = {
  locale: 'en',
  htmlLang: 'en',
  meta: {
    title: 'Lucas de Moraes Souza — Full-stack Developer',
    description:
      'Full-stack developer with 6 years of experience building web and mobile products with React, Next.js, Node.js and TypeScript. Based in Sorocaba/SP, Brazil.',
  },
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    role: 'Full-stack Developer',
    location: 'Sorocaba · São Paulo · Brazil',
    tagline: '6 years building web and mobile products end to end.',
    ctaContact: 'Get in touch',
    ctaLinkedin: 'LinkedIn',
    photoAlt: 'Photo of Lucas de Moraes Souza',
    scrollHint: 'Scroll to explore',
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
    label: '01 — About',
    title: 'About me',
    statement: 'I turn ideas into fast, scalable, user-centered digital products.',
    paragraphs: [
      "I'm a Full-stack developer specialized in building interactive, highly functional interfaces. I have deep expertise in ReactJS, Next.js, JavaScript and TypeScript, with advanced styling using TailwindCSS, Styled Components and Material UI. On the backend, I build efficient APIs with Node.js, NestJS and Express, working with PostgreSQL, MySQL and MongoDB, plus Docker for agile integration and deployment.",
      "Passionate about technology and always chasing innovation, I value scalable solutions centered on the best user experience. I work with unit testing, agile methodologies and modern development practices — delivering clean, testable, high-performance code. I've shipped everything from banking platforms (instant payments, invoices and bill payments) to apps published on the App Store and AI integrations on AWS.",
    ],
    stats: [
      { value: '6', label: 'years of experience' },
      { value: '15+', label: 'technologies in daily use' },
      { value: '5', label: 'companies and dozens of projects' },
    ],
  },
  skills: {
    label: '02 — Skills',
    title: 'What I master',
    subtitle: 'The technologies I use to ship real products.',
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
        items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'JWT', 'Microservices', 'Unit testing'],
      },
      {
        title: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'MongoDB'],
      },
      {
        title: 'DevOps & Cloud',
        items: ['Docker', 'AWS', 'AWS Bedrock', 'Firebase', 'Git', 'CI/CD'],
      },
    ],
  },
  experience: {
    label: '03 — Experience',
    title: 'My journey',
    subtitle: 'From internship to technical leadership — the road so far.',
    jobs: [
      {
        company: 'Zig. The Global Funtech · Cubos Tecnologia',
        role: 'Full-stack Developer',
        period: 'Jun 2025 — present',
        location: 'Remote',
        bullets: [
          'Development and evolution of scalable digital solutions, focused on performance and user experience.',
          'Backend APIs and services with Node.js and TypeScript; modern, high-performance interfaces with React and Next.js.',
          'Active participation in code reviews, standards definition and close collaboration with product, design and QA.',
        ],
        stack: ['Node.js', 'React', 'TypeScript', 'Next.js', 'REST APIs'],
      },
      {
        company: 'Lionsoft Inc.',
        role: 'Full-stack Developer',
        period: 'Aug 2024 — Jun 2025',
        location: 'Sorocaba, Brazil',
        bullets: [
          'Integration backend for a bank-as-a-service platform with three security layers: instant payments (Pix), bank invoices and bill payments.',
          'Backend for ZPL label printing and a medical on-call shifts app.',
          'Published apps to the App Store and TestFlight.',
        ],
        stack: ['Node.js', 'React', 'Next.js', 'React Native', 'TypeScript', 'Docker'],
      },
      {
        company: 'Gria',
        role: 'Front-end → Full-stack Developer',
        period: 'Feb 2023 — Aug 2024',
        location: 'São Paulo, Brazil',
        bullets: [
          'Candidate recruitment platform and an AI-powered behavioral assessment platform to identify dominant personality profiles.',
          'Built a chat with AWS Bedrock integration.',
          'Maintenance and development of new features in production.',
        ],
        stack: ['ReactJS', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
      },
      {
        company: 'Lionsoft Inc.',
        role: 'Front-end Developer',
        period: 'Sep 2021 — Feb 2023',
        location: 'Sorocaba, Brazil',
        bullets: [
          'Led a team of five developers on a digital marketing platform.',
          'Mercado Pago payment gateway integration for an e-commerce platform.',
          "Medical records system used by one of Brazil's biggest football clubs, and an exam scheduling platform for one of the city's largest labs.",
          'Introduced React Native for mobile app development.',
        ],
        stack: ['ReactJS', 'Next.js', 'Node.js', 'React Native', 'TypeScript', 'Styled Components'],
      },
      {
        company: 'Mind Consulting',
        role: 'Web/Mobile Developer',
        period: 'Mar 2021 — Aug 2021',
        location: 'Sorocaba, Brazil',
        bullets: [
          'Web system for business accounting management, with charts and XLS import.',
          'Pagination, filters and balance control in a service sales tracking system.',
          'Internal hackathon: dashboard for transfer management.',
        ],
        stack: ['ReactJS', 'JavaScript', 'TypeScript', 'Styled Components'],
      },
    ],
  },
  education: {
    label: '04 — Education',
    title: 'Education & Certifications',
    degrees: [
      {
        school: 'Universidade Paulista (UNIP)',
        degree: 'Associate degree in Systems Analysis and Development',
        period: '2020 — 2021',
      },
      {
        school: 'Etec Armando Pannunzio',
        degree: 'Technical degree in Industrial Automation',
        period: '2017 — 2019',
      },
    ],
    certsTitle: 'Certifications',
    certs: [
      'NLW Connect — React',
      'NLW Expert — React track',
      'NLW Connect — Node.js',
      'ReactJS',
      'NLW JavaScript Full-stack Intermediate',
    ],
  },
  contact: {
    label: '05 — Contact',
    title: "Let's build something together?",
    subtitle:
      "I'm always open to new projects, opportunities and good conversations about technology. Reach out however you prefer:",
    email: 'E-mail',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
  },
  footer: {
    madeWith: 'Built with Astro + Tailwind',
  },
};
