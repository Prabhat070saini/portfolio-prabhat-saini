export interface Certification {
  title: string;
  issuer: string;
  year: string;
  link: string;
  credentialId?: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    title: "Backend Master Class (Golang + PostgreSQL + Kubernetes + gRPC)",
    issuer: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-5ac740d5-a655-4111-8ce8-ee638526e983/",
    credentialId: "UC-5ac740d5-a655-4111-8ce8-ee638526e983",
    description:
      "Focused on how real backend systems are designed, built, and operated. Covered core backend fundamentals including designing scalable services using Go, database modeling with PostgreSQL, gRPC services, Kubernetes orchestration, and clean architecture principles.",
  },
  {
    title: "Fundamentals of Database Engineering",
    issuer: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-ac814179-1214-4a2a-89da-f00cddf679d8/",
    credentialId: "UC-ac814179-1214-4a2a-89da-f00cddf679d8",
    description:
      "Deepened understanding of database internals, indexing, transactions, query optimization, and system design principles that power modern databases.",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    link: "https://www.credly.com/badges/921b1b24-a5c2-4ee6-8e5a-20bb3547c637/linked_in?t=sa5fmm",
    description:
      "Gained a foundational understanding of AWS Cloud concepts, security, architecture, pricing, and support.",
  },
];
