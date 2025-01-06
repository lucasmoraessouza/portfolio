import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiPrisma,
  SiDocker,
  SiJsonwebtokens,
  SiAuth0,
  SiPostman,
  SiMongodb,
  SiVite,
} from "react-icons/si";

interface TechItem {
  name: string;
  icon: React.ElementType;
  color: string;
  category: "frontend" | "backend" | "database" | "devops" | "testing";
}

export const techStack: TechItem[] = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38B2AC",
    category: "frontend",
  },
  {
    name: "SASS",
    icon: SiSass,
    color: "#CC6699",
    category: "frontend",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#ffffff",
    category: "backend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#ffffff",
    category: "frontend",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    category: "database",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    color: "#003B57",
    category: "database",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#dac497",
    category: "database",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    category: "devops",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    color: "#ffffff",
    category: "backend",
  },
  {
    name: "OAuth",
    icon: SiAuth0,
    color: "#EB5424",
    category: "backend",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    category: "testing",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    category: "database",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "#646CFF",
    category: "frontend",
  },
];
