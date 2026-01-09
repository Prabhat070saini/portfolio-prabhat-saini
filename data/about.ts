import { Code2, Zap, Database, GitBranch } from "lucide-react";

export const aboutContent = {
  title: "About Me",
  description:
    "Backend Engineer with 2+ years of experience designing scalable, cloud-native microservices using Go (Golang) and Node.js (NestJS). Specialized in building event-driven systems with async event processing, message queuing (RabbitMQ), background workers, and cron-based job scheduling. Strong focus on performance optimization, clean architecture, and system reliability with expertise in PostgreSQL, MySQL, Redis, and distributed systems design.",
  highlights: {
    sectionTitle: "Key Highlights",
    items: [
      {
        title: "Go (Golang) & Node.js Microservices",
        description:
          "Architected scalable backend systems using Go (Gin, GORM), Node.js (NestJS, Express), Redis, and RabbitMQ for high-concurrency enterprise platforms",
        icon: Code2,
      },
      {
        title: "Event-Driven Architecture",
        description:
          "Built async event processing systems with message queuing, background workers, and cron-based job scheduling for reliable workflows",
        icon: GitBranch,
      },
      {
        title: "Production Scale",
        description:
          "Deployed systems for Adani, DentalKart, and Truemeds handling 500+ concurrent requests/sec with 99.9% uptime and 5000+ daily transactions",
        icon: Zap,
      },
      {
        title: "Database Expertise",
        description:
          "Designed efficient schemas and optimized queries across PostgreSQL, MySQL, MSSQL with Redis caching improving response times by 50%",
        icon: Database,
      },
    ],
  },
  education: {
    sectionTitle: "Education",
    items: [
      {
        degree: "B.Tech in Computer Science and Information Technology",
        institution: "KIET Group of Institutions, Affiliated to AKTU",
        location: "Ghaziabad, UP",
        duration: "Nov 2020 – Jun 2024",
        cgpa: "7.85 CGPA",
      },
      {
        degree: "Intermediate (XII) - CBSE Board",
        institution: "BSS Public School",
        location: "Raebareli, UP",
        duration: "2019",
        cgpa: "79.2%",
      },
      {
        degree: "High School (X) - CBSE Board",
        institution: "BSS Public School",
        location: "Raebareli, UP",
        duration: "2017",
        cgpa: "10 CGPA",
      },
    ],
  },
};
