import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "wedring-matrimony",
    role: "Freelance Full Stack Developer",
    company: "Wedring Matrimony",
    period: "January 2026 – Present",
    type: "freelance",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    bullets: [
      "Developing a full-stack matrimony platform, including a web-based admin panel and cross-platform mobile application.",
      "Building responsive React.js interfaces, REST APIs with Node.js and Express.js, and MongoDB-backed services.",
      "Collaborating directly with the client to deliver new features, optimize performance, and maintain production-ready applications.",
    ],
    projectUrl: "", // Optional placeholder
  },
  {
    id: "cybexel-technologies",
    role: "Full Stack Developer",
    company: "Cybexel Technologies",
    period: "March 2024 – October 2025",
    type: "fulltime",
    technologies: ["React.js", "Node.js", "AWS"],
    bullets: [
      "Developed scalable web applications using React.js and Node.js, improving application performance and user experience.",
      "Optimized backend APIs and database queries, enhancing system performance and reliability.",
      "Managed AWS deployments and collaborated with cross-functional teams to deliver production-ready features.",
    ],
  },
  {
    id: "brototype",
    role: "MERN Stack Developer Intern",
    company: "Brototype",
    period: "November 2023 – December 2024",
    type: "internship",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    bullets: [
      "Built full-stack web applications using the MERN stack with responsive user interfaces.",
      "Implemented JWT authentication, Redux state management, and RESTful APIs.",
      "Applied MVC architecture and SOLID principles to develop clean, maintainable, and scalable code.",
    ],
  },
];
