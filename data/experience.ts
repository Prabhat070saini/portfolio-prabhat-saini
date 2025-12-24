import { Icons } from "@/components/icons";

export const experiences = [
  {
    company: "Binmile Technology Pvt Ltd",
    role: "Software Developer",
    location: "Noida, UP",
    duration: "June 2024 - Present",
    achievements: [
      "Partnered with cross-functional teams to integrate frontend features using Next.js, reducing API call failures by 25%",
      "Constructed scalable backend systems for the WFM Adani project using MSSQL, Node.js, NestJS, Redis, and RabbitMQ, ensuring 99.9% uptime and handling 500+ concurrent requests per second",
      "Engineered reusable Node.js packages, including a pluggable cache management service enabling runtime selection of providers (Redis/Memcached), plus utilities for HTTP abstraction, S3 uploads, and trace-ID–based centralized logging",
      "Built reusable middleware (API key auth, RBAC, CORS, request validation), standardizing backend security and scalability across 10+ microservices",
    ],
    technologies: [
      { name: "NestJS", icon: Icons.NestJS },
      { name: "Node.js", icon: Icons.NodeJS },
      { name: "MSSQL", icon: null },
      { name: "Redis", icon: Icons.Redis },
      { name: "RabbitMQ", icon: Icons.RabbitMQ },
      { name: "Docker", icon: Icons.Docker },
      { name: "Next.js", icon: Icons.NextJS },
    ],
  },
  {
    company: "Stor Web",
    role: "Backend Intern",
    location: "Remote",
    duration: "August 2023 – October 2023",
    achievements: [
      "Architected and deployed the backend for a Hostel Management System using Express.js and MongoDB, supporting 1,000+ users and reducing data retrieval time by 35%",
      "Optimized API performance by creating efficient database schemas, decreasing query execution time by 50%",
    ],
    technologies: [
      { name: "Express.js", icon: Icons.Express },
      { name: "MongoDB", icon: Icons.MongoDB },
      { name: "Node.js", icon: Icons.NodeJS },
      { name: "REST API", icon: null },
    ],
  },
];
