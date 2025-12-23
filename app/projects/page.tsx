"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    name: "Event Management System (DentalKart)",
    description:
      "Built scalable event-driven microservices in Go (Gin framework) with Redis caching and KrakenD API Gateway, improving response time by 50%. Integrated RazorPay payment processing handling 5,000+ transactions/day with 99.99% success rate.",
    techStack: ["Go (Golang)", "Gin", "MySQL", "KrakenD API Gateway", "Redis", "Microservices", "RazorPay"],
    achievements: [
      "Architected async event processing with Redis message queuing",
      "Implemented API key-guard and trace ID middleware for enhanced security",
      "Built Buying Guide feature serving 100+ dentists with SKU recommendations",
      "Enhanced e-commerce catalog performance boosting conversion by 15%",
    ],
  },
  {
    name: "Workforce Management (Adani)",
    description:
      "Enterprise workforce management system built with Node.js (NestJS), MSSQL, and RabbitMQ for event-driven workflows. Engineered SuperAdmin Portal with SSO for centralized authentication across 10+ microservices.",
    techStack: ["Node.js", "NestJS", "MSSQL", "RabbitMQ", "Redis", "Microservices", "SSO"],
    achievements: [
      "Developed inventory module with material tracking and return cycle management",
      "Built RESTful APIs with RabbitMQ event queuing, reducing manual work by 60%",
      "Achieved 99.9% uptime handling 500+ concurrent requests per second",
      "Implemented cron-based background workers for automated data synchronization",
    ],
  },
  {
    name: "StudyNotion",
    description:
      "Educational technology platform providing online learning resources and interactive content. Full-stack MERN application with modern UI/UX.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/Prabhat07saini/StudyNotion",
    liveLink: "https://study-notion-edtech-project-beta-nine.vercel.app/",
  },
  {
    name: "HomeSphere",
    description:
      "Full-featured Estate Management app allowing users to list properties for rent/sale. Utilized Firebase for image storage and Google OAuth for authentication.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "OAuth"],
    githubLink: "https://github.com/Prabhat07saini",
  },
  {
    name: "Text-it",
    description:
      "Web chat application with integrated steganography feature using LSB algorithm. Enables secure message exchange while concealing information within images.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Steganography"],
    githubLink: "https://github.com/Prabhat07saini",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            Enterprise-grade microservices and event-driven systems built with Go (Golang), alongside full-stack
            applications emphasizing scalability, performance, and reliability.
          </motion.p>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
