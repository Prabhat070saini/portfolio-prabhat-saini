import { Metadata } from "next";

export const siteConfig = {
  name: "Prabhat Saini",
  title: "Prabhat Saini - Backend Engineer",
  description:
    "Backend Engineer with 2+ years of experience in Go (Golang), Node.js, NestJS. Building scalable microservices and event-driven systems with Redis, RabbitMQ, PostgreSQL.",
  url: "https://prabhatsaini.com", // Placeholder
  ogImage: "https://prabhatsaini.com/og.jpg", // Placeholder
  keywords: [
    "Backend Engineer",
    "Golang",
    "Go Developer",
    "NestJS",
    "Node.js",
    "Microservices",
    "Event-Driven Systems",
  ],
  authors: [
    { name: "Prabhat Saini", url: "https://github.com/Prabhat070saini" },
  ],
  creator: "Prabhat Saini",
  logo: "PS",
  copyrightText: "All rights reserved.",

  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Publications", href: "/publications" },
    { name: "Certifications", href: "/certifications" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],

  socialLinks: {
    github: "https://github.com/Prabhat070saini",
    linkedin: "https://www.linkedin.com/in/prabhat-saini22/",
    twitter: "https://twitter.com/", // Placeholder if needed
    email: "mailto:Prabhat07saini@gmail.com",
    resume: "/resume.pdf", // Placeholder
  },

  contactInfo: {
    email: "Prabhat07saini@gmail.com",
    phone: "+91 8090104277",
    address: "Noida, Uttar Pradesh, India",
  },
};

export const siteMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  // Add OpenGraph, Twitter, etc. later if needed
};
