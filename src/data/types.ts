export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Content {
  locale: string;
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    role: string;
    location: string;
    tagline: string;
    ctaContact: string;
    ctaLinkedin: string;
    photoAlt: string;
    scrollHint: string;
  };
  marquee: string[];
  about: {
    label: string;
    title: string;
    statement: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  skills: {
    label: string;
    title: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  experience: {
    label: string;
    title: string;
    subtitle: string;
    jobs: Job[];
  };
  education: {
    label: string;
    title: string;
    degrees: { school: string; degree: string; period: string }[];
    certsTitle: string;
    certs: string[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    whatsapp: string;
    linkedin: string;
  };
  footer: {
    madeWith: string;
  };
}
