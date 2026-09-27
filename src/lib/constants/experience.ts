import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "GSA",
    positions: [
      {
        title: "Full Stack Developer",
        year: "10.2024 - present",
        description: `
- ♦ Own the full lifecycle of the company's application suite, used by **1,000+ users**, from development and code review to deployment, monitoring and maintenance in production.
- ♦ Build full-stack features in **TypeScript** with **NestJS** on the back end and **Angular** on the front end, designing RESTful APIs and relational data models.
- ♦ Manage the containerized infrastructure with **Docker** and **Docker Swarm** and maintain **CI/CD** pipelines for automated build and deployment, improving system reliability and reducing downtime.
- ♦ Administer the production **PostgreSQL** database, handling schema changes, data migrations and query performance.
- ♦ Cut data retrieval latency by up to **500×** by adding a **Redis** caching layer to an internal CMS-driven content delivery system that serves web and mobile applications.
- ♦ Designed and built a **real-time fleet management platform** that monitors 350+ vehicles, integrating GPS/RFID tracking and IoT telemetry to detect anomalies and send automatic alerts.
            `,
        skills: [
          "TypeScript",
          "Angular",
          "NestJS",
          "REST API",
          "Socket.IO",
          "Node.js",
          "TypeORM",
          "BullMQ",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Docker Swarm",
          "CI/CD",
          "Linux",
          "Git",
          "Version Control",
          "Agile Methodologies",
        ],
      },
    ],
  },
  {
    company: "Freelance | GreyLine Design",
    positions: [
      {
        title: "Web Developer",
        year: "06.2024 - 10-2024",
        description: `
- ♦ Developed a **website** for a local business, enhancing its online presence and user engagement.
- ♦ Implemented **responsive design** principles to ensure optimal viewing across various devices, and SEO best practies to improve search engine visibility.
- ♦ Allowed the client to easily sell local products online, increasing their sales and customer reach.
            `,
        skills: ["WordPress", "Elementor", "HTML", "Shopify", "SEO", "Responsive Design", "Web Development"],
      },
      {
        title: "Malware Analyst",
        year: "04.2024 - 06-2024",
        description: `
- ♦ Conducted a **malware analysis** on a client's WordPress website, identifying and removing a ClearFake malware infection.
- ♦ Restored the website to a clean state, removal of malicius files and cleanup of infected and unwanted pluginss.
- ♦ Wrote a detailed report on the findings and provided recommendations for future security measures.
            `,
        skills: ["WordPress", "Malware Analysis", "File System", "SHH"],
      },
    ],
  },
  {
    company: "Weedea",
    positions: [
      {
        title: "Web Security Intern",
        year: "06.2023 - 12/2023",
        description: `
- ♦ Analised and improved the **security** of the company's servers.
- ♦ Created a step-by-step guide to implementing best **security practices** for server hardening.
- ♦ Conducted **security testing** on web applications and developed my thesis based on the methodologies and results of these assessments.
            `,
        skills: [
          "Zap",
          "Burp Suite",
          "OWASP",
          "Nikto",
          "NMAP",
          "Kali Linux",
          "Security Testing",
          "Server Hardening",
          "Latex",
          "Markdown",
        ],
      },
    ],
  },
];
