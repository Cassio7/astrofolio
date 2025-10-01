import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Gesenu",
    positions: [
      {
        title: "Full Stack Developer",
        year: "10.2024 - present",
        description: `
- ♦ Built a **web application** for managing the GPS and RFID reader of the company's vehicles fleet, for real-time tracking, monitoring and anomaly detection.
- ♦ Working within an **Agile development team**, contributing to the design, implementation, and maintenance of the company’s management system.
- ♦ Architected and maintained the company’s web application infrastructure, leveraging **Docker Swarm** to ensure scalability, reliability, and efficient container orchestration.
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
        title: "University Internship",
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
