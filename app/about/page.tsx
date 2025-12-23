"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Database, GitBranch } from "lucide-react"
import { Card } from "@/components/ui/card"

const highlights = [
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
]

const education = [
  {
    degree: "B.Tech in Computer Science and Information Technology",
    institution: "KIET Group of Institutions, Affiliated to AKTU",
    location: "Ghaziabad, UP",
    duration: "Nov 2020 – Jun 2024",
    cgpa: "7.5",
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
]

export default function AboutPage() {
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
            About Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            Backend Engineer with 2+ years of experience designing scalable, cloud-native microservices using{" "}
            <span className="text-foreground font-semibold">Go (Golang)</span> and{" "}
            <span className="text-foreground font-semibold">Node.js (NestJS)</span>. Specialized in building{" "}
            <span className="text-foreground font-semibold">event-driven systems</span> with async event processing,
            message queuing (RabbitMQ), background workers, and cron-based job scheduling. Strong focus on performance
            optimization, clean architecture, and system reliability with expertise in PostgreSQL, MySQL, Redis, and
            distributed systems design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-8">Key Highlights</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="p-6 h-full border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:shadow-lg transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <highlight.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <h2 className="text-2xl font-semibold mb-8">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 border-border bg-card">
                  <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{edu.duration}</span>
                    <span className="font-medium">{edu.cgpa}</span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
