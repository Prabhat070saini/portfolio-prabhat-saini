import { Icons } from "@/components/icons";

export const skillCategories = [
  {
    title: "Backend Frameworks",
    skills: [
      { name: "NestJS", icon: Icons.NestJS },
      { name: "Express.js", icon: Icons.Express },
      { name: "Node.js", icon: Icons.NodeJS },
      { name: "Gin (Go)", icon: Icons.Go },
      { name: "GORM", icon: Icons.Go },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: Icons.React },
      { name: "Next.js", icon: Icons.NextJS },
      { name: "Tailwind CSS", icon: Icons.TailwindCSS },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Icons.PostgreSQL },
      { name: "MySQL", icon: Icons.MySQL },
      { name: "MSSQL", icon: Icons.PostgreSQL }, 
      { name: "MongoDB", icon: Icons.MongoDB },
      { name: "Redis", icon: Icons.Redis },
    ],
  },
  {
    title: "Technologies & Tools",
    skills: [
      { name: "Microservices", icon: null },
      { name: "RabbitMQ", icon: Icons.RabbitMQ },
      { name: "Docker", icon: Icons.Docker },
      { name: "KrakenD API Gateway", icon: null },
      { name: "REST API", icon: null },
      { name: "Git/GitHub", icon: Icons.Git },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: Icons.JavaScript },
      { name: "TypeScript", icon: Icons.TypeScript },
      { name: "C/C++", icon: Icons.Cpp },
      { name: "GOLang", icon: Icons.Go },
    ],
  },
  {
    title: "Domain Expertise",
    skills: [
      { name: "System Design", icon: null },
      { name: "Data Structures & Algorithms", icon: null },
      { name: "DBMS", icon: null },
      { name: "OOPS", icon: null },
    ],
  },
];
