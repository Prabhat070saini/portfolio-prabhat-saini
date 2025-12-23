"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
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
    technologies: ["NestJS", "Node.js", "MSSQL", "Redis", "RabbitMQ", "Docker", "Next.js"],
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
    technologies: ["Express.js", "MongoDB", "Node.js", "REST API"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            Building production-grade systems for enterprise clients with focus on scalability, performance, and
            reliability.
          </motion.p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                <Card className="p-6 border-border bg-card">
                  <div className="flex gap-4 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-1">{exp.role}</h2>
                      <p className="text-muted-foreground mb-1">{exp.company}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-muted-foreground leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
