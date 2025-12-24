import { Icons } from "@/components/icons";

export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string; // For the dynamic page
  techStack: (string | { name: string; icon?: React.ElementType })[];
  achievements?: string[];
  githubLink?: string;
  liveLink?: string;
  images?: string[]; // For additional images
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "event-management-system",
    name: "Event Management System (DentalKart)",
    description:
      "Built scalable event-driven microservices in Go (Gin framework) with Redis caching and KrakenD API Gateway, improving response time by 50%. Integrated RazorPay payment processing handling 5,000+ transactions/day with 99.99% success rate.",
    longDescription:
      "A comprehensive Event Management System architected for DentalKart to handle high-volume event registrations and transactions. The system utilizes a microservices architecture to ensure scalability and reliability during peak traffic times.",
    techStack: [
      { name: "Go (Golang)", icon: Icons.Go },
      "Gin",
      { name: "MySQL", icon: Icons.MySQL },
      "KrakenD API Gateway",
      { name: "Redis", icon: Icons.Redis },
      "Microservices",
      "RazorPay",
    ],
    achievements: [
      "Architected async event processing with Redis message queuing",
      "Implemented API key-guard and trace ID middleware for enhanced security",
      "Built Buying Guide feature serving 100+ dentists with SKU recommendations",
      "Enhanced e-commerce catalog performance boosting conversion by 15%",
    ],
  },
  {
    id: "2",
    slug: "workforce-management",
    name: "Workforce Management (Adani)",
    description:
      "Enterprise workforce management system built with Node.js (NestJS), MSSQL, and RabbitMQ for event-driven workflows. Engineered SuperAdmin Portal with SSO for centralized authentication across 10+ microservices.",
    longDescription:
      "An Enterprise-grade solution for Adani Group to manage workforce allocation, tracking, and safety. The system integrates real-time tracking with complex workflow automation.",
    techStack: [
      { name: "Node.js", icon: Icons.NodeJS },
      { name: "NestJS", icon: Icons.NestJS },
      "MSSQL",
      { name: "RabbitMQ", icon: Icons.RabbitMQ },
      { name: "Redis", icon: Icons.Redis },
      "Microservices",
      "SSO",
    ],
    achievements: [
      "Developed inventory module with material tracking and return cycle management",
      "Built RESTful APIs with RabbitMQ event queuing, reducing manual work by 60%",
      "Achieved 99.9% uptime handling 500+ concurrent requests per second",
      "Implemented cron-based background workers for automated data synchronization",
    ],
  },
  {
    id: "3",
    slug: "studynotion",
    name: "StudyNotion",
    description:
      "Educational technology platform providing online learning resources and interactive content. Full-stack MERN application with modern UI/UX.",
    longDescription:
      "StudyNotion is a fully functional ed-tech platform that enables instructors to create courses and students to consume them.",
    techStack: [
      { name: "React.js", icon: Icons.React },
      { name: "Node.js", icon: Icons.NodeJS },
      { name: "Express.js", icon: Icons.Express },
      { name: "MongoDB", icon: Icons.MongoDB },
      { name: "Tailwind CSS", icon: Icons.TailwindCSS },
    ],
    githubLink: "https://github.com/Prabhat070saini/StudyNotion",
    liveLink: "https://study-notion-edtech-project-beta-nine.vercel.app/",
  },
  {
    id: "4",
    slug: "homesphere",
    name: "HomeSphere",
    description:
      "Full-featured Estate Management app allowing users to list properties for rent/sale. Utilized Firebase for image storage and Google OAuth for authentication.",
    techStack: [
      { name: "React.js", icon: Icons.React },
      { name: "Node.js", icon: Icons.NodeJS },
      { name: "Express.js", icon: Icons.Express },
      { name: "MongoDB", icon: Icons.MongoDB },
      "Firebase",
      "OAuth",
    ],
    githubLink: "https://github.com/Prabhat070saini",
  },
  {
    id: "5",
    slug: "text-it",
    name: "Text-it",
    description:
      "Web chat application with integrated steganography feature using LSB algorithm. Enables secure message exchange while concealing information within images.",
    techStack: [
      { name: "React.js", icon: Icons.React },
      { name: "Node.js", icon: Icons.NodeJS },
      { name: "Express.js", icon: Icons.Express },
      { name: "MongoDB", icon: Icons.MongoDB },
      "Steganography",
    ],
    githubLink: "https://github.com/Prabhat070saini",
  },
];
