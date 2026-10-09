export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  category: 'Full Stack' | 'Client Work' | 'Web Application';
  isClientWork?: boolean;
  featured: boolean;
  liveUrl: string;
  githubUrl: string;
  highlights: string[];
  mockupType: string;
  image?: string; // Optional custom screenshot path (e.g. /projects/chess.png)
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  technologies: string[];
  bullets: string[];
  projectUrl?: string;
  type: 'freelance' | 'fulltime' | 'internship';
}

export interface SkillItem {
  name: string;
  highlighted?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeFileName: string;
  resumeUrl: string;
  statusText: string;
  isAvailableForWork: boolean;
  headline: string;
  smallIntro: string;
  summary: string;
  aboutBio: string;
  coreHighlights: string[];
}
