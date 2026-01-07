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
      { name: "NestJS", icon: Icons.NestJS },
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
    slug: "go-backend-boilerplate",
    name: "Go Backend Boilerplate (Clean Architecture)",
    description:
      "Reusable production-oriented Go backend foundation implementing Clean Architecture with JWT authentication, PostgreSQL migrations, Redis caching, structured logging, and AWS S3 integration.",
    longDescription:
      "A reusable backend boilerplate designed to standardize Go service architecture across projects. Built to avoid repeatedly implementing authentication, configuration, database access, caching, logging, and infrastructure wiring. Follows Clean Architecture principles to keep business logic independent of frameworks and external services.",
    techStack: [
      { name: "Go (Golang)", icon: Icons.Go },
      "Gin",
      { name: "PostgreSQL", icon: Icons.PostgreSQL },
      { name: "Redis", icon: Icons.Redis },
      "GORM",
      "JWT Authentication",
      "AWS S3",
      "Clean Architecture",
    ],
    achievements: [
      "Designed strict dependency boundaries using Clean Architecture principles",
      "Implemented JWT-based authentication and authorization middleware",
      "Integrated PostgreSQL with migrations and repository pattern",
      "Added Redis caching and AWS S3 client abstractions",
      "Built environment-based configuration and structured logging with Zap",
    ],
    githubLink: "https://github.com/Prabhat070saini/coreGoboilerplatecode",
  },
  {
    id: "4",
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
    githubLink: "https://github.com/Prabhat070saini/BrainBoost",
    liveLink: "https://study-notionfd.vercel.app/",
  },
  {
    id: "5",
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
    githubLink: "https://github.com/Prabhat070saini/HomeSphere",
    liveLink: "https://homesphere-4d63.onrender.com/",
  },
  {
    id: "6",
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
    githubLink: "https://github.com/Prabhat070saini/Text_it",
  },
];
