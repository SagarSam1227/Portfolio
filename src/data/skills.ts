import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for robust frontend and server-side engineering.",
    iconName: "Code2",
    skills: [
      { name: "JavaScript", highlighted: true },
      { name: "TypeScript", highlighted: true },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Component-driven architectures, responsive systems, and state management.",
    iconName: "Layout",
    skills: [
      { name: "React.js", highlighted: true },
      { name: "Redux", highlighted: true },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Material Tailwind" },
      { name: "Bootstrap" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Scalable server architectures, real-time protocols, and authentication.",
    iconName: "Server",
    skills: [
      { name: "Node.js", highlighted: true },
      { name: "Express.js", highlighted: true },
      { name: "REST APIs", highlighted: true },
      { name: "JWT Authentication", highlighted: true },
      { name: "Socket.io", highlighted: true },
      { name: "WebRTC" },
      { name: "AJAX" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "NoSQL and relational data modeling with query optimization.",
    iconName: "Database",
    skills: [
      { name: "MongoDB", highlighted: true },
      { name: "PostgreSQL", highlighted: true },
    ],
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    description: "Deployment, version control, API testing, and web server configuration.",
    iconName: "Cpu",
    skills: [
      { name: "GitHub", highlighted: true },
      { name: "Postman", highlighted: true },
      { name: "AWS", highlighted: true },
      { name: "Nginx" },
      { name: "Figma" },
    ],
  },
  {
    id: "concepts",
    title: "Engineering Concepts",
    description: "Disciplined software design patterns and architectural fundamentals.",
    iconName: "Boxes",
    skills: [
      { name: "Clean Architecture", highlighted: true },
      { name: "MVC Architecture", highlighted: true },
      { name: "Data Structures", highlighted: true },
      { name: "SOLID Principles", highlighted: true },
    ],
  },
];
