import type { Project } from '../types';

/**
 * ============================================================================
 * PROJECT LINKS CONFIGURATION
 * ============================================================================
 * Replace the placeholder constants below with your real live URLs and GitHub repository URLs.
 * When a placeholder is present, the website automatically disables the button safely
 * with a "Pending URL" badge, so broken or fake links are never clicked.
 */

export const ADD_CHESS_LIVE_URL = "https://chess-virid-kappa.vercel.app/"; // e.g. ""
export const ADD_CHESS_GITHUB_URL = "https://github.com/SagarSam1227/chess-.git"; // e.g. "https://github.com/SagarSam1227/chess-app"

export const ADD_ECOMMERCE_LIVE_URL = ""; // e.g. "https://shop.yourdomain.com"
export const ADD_ECOMMERCE_GITHUB_URL = ""; // e.g. "https://github.com/SagarSam1227/b2b-ecommerce"

export const ADD_REAL_ESTATE_LIVE_URL = ""; // e.g. "https://realestate.yourdomain.com"
export const ADD_REAL_ESTATE_GITHUB_URL = ""; // e.g. "https://github.com/SagarSam1227/real-estate"

export const ADD_WEDRING_LIVE_URL = ""; // e.g. "https://wedring.com"
export const ADD_WEDRING_GITHUB_URL = ""; // Client / private repository
export const ADD_TUTORFLOW_LIVE_URL = "https://tutor-flow-tan-two.vercel.app/"; // e.g. "https://tutorflow.com"
export const ADD_TUTORFLOW_GITHUB_URL = "https://github.com/SagarSam1227/TutorFlow.git";

export const ADD_RESTAURANT_BILLING_LIVE_URL = "https://billing-system-kappa-six.vercel.app/"; // e.g. "https://restaurant-billing.com"
export const ADD_RESTAURANT_BILLING_GITHUB_URL = "https://github.com/SagarSam1227/Restaurant-Billing-System.git"; // e.g. "

export const ADD_MY_JEWELRY_LIVE_URL = ""; // e.g. "https://my-jewelry.com"
export const ADD_MY_JEWELRY_GITHUB_URL = "";
/**
 * Helper function to safely check whether a URL is real or a placeholder.
 * Returns false if url is empty, starts with "ADD_", is "#", or whitespace.
 */
export const isConfiguredUrl = (url?: string): boolean => {
  if (!url) return false;
  const trimmed = url.trim();
  if (trimmed === "" || trimmed === "#") return false;
  if (trimmed.startsWith("ADD_")) return false;
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) return false;
  return true;
};

export const projects: Project[] = [
    {
    id: "tutor-flow",
    title: "TutorFlow",
    tagline: "AI-powered tutoring platform for personalized learning experiences",
    description:
      "Developed an AI-driven tutoring platform that provides personalized learning paths and real-time feedback to students.",
    technologies: ["React.js", "next.js", "Node.js", "OpenAI API"],
    category: "Full Stack",
    featured: true,
    liveUrl: ADD_TUTORFLOW_LIVE_URL,
    githubUrl: ADD_TUTORFLOW_GITHUB_URL,
    mockupType: "tutorflow",
    image: "../src/assets/projects/tutorflow.png", // Place custom image at ../src/assets/projects/tutorflow.png and set path here if desired
    highlights: [
  "Developed a multi-role tutoring platform with dedicated tutor and student dashboards using Next.js, React, TypeScript, and MongoDB.",
  "Implemented AI-powered pre-session lesson planning that generates personalized learning objectives, lesson outlines, and practice questions based on student profiles and session history.",
  "Designed session management workflows with automated scheduling, server-side validation, and concurrency safeguards to improve reliability and prevent scheduling conflicts.",
],
  },
    {
    id: "restaurant-billing-system",
    title: "Restaurant Billing System",
    tagline: "Streamlined billing and inventory management for restaurants",
    description:
      "Developed a comprehensive billing system for restaurants with real-time inventory tracking and automated reporting.",
    technologies: ["React.js"],

    category: "Full Stack",
    featured: true,
    liveUrl: ADD_RESTAURANT_BILLING_LIVE_URL,
    githubUrl: ADD_RESTAURANT_BILLING_GITHUB_URL,
    mockupType: "restaurant-billing",
    image: "../src/assets/projects/restaurant-billing.png", // Place custom image at ../src/assets/projects/restaurant-billing.png and set path here if desired
  highlights: [
  "Developed a restaurant billing system with an intuitive interface for managing orders, menu items, and customer bills.",
  "Implemented billing workflows with automatic total calculations, itemized bills, and efficient order processing.",
  "Demo Login Credentials — Username: user@gmail.com | Password: 123",
],
  },
   {
    id: "My jewelry my design",
    title: "Online Jewelry Store",
    tagline: "E-commerce platform for custom jewelry",
    description:
      "Built a full-stack e-commerce platform for custom jewelry with product discovery, shopping cart, and secure checkout.",
    technologies: ["React.js", "Node.js", "augmented reality"],
    category: "Full Stack",
    featured: true,
    liveUrl: ADD_MY_JEWELRY_LIVE_URL,
    githubUrl: ADD_MY_JEWELRY_GITHUB_URL,
    mockupType: "my-jewelry",
    image: "../src/assets/projects/myjewelry.png", // Place custom image at ../src/assets/projects/my-jewelry.png and set path here if desired
   highlights: [
  "Developed a virtual jewelry store that allows customers to explore and discover jewelry designs through an interactive online shopping experience.",
  "Implemented real-time jewelry matching to help users find matching jewelry pieces and discover complementary designs.",
  "Created an intuitive interface for browsing jewelry collections and viewing matching results in real time.",
],
  },
  {
    id: "online-chess",
    title: "Online Chess Web Application",
    tagline: "Real-time multiplayer chess platform with instant move synchronization",
    description:
      "Built a real-time multiplayer chess platform with instant move synchronization and responsive gameplay across devices.",
    technologies: ["React.js", "Node.js", "Socket.io"],
    category: "Full Stack",
    featured: true,
    liveUrl: ADD_CHESS_LIVE_URL,
    githubUrl: ADD_CHESS_GITHUB_URL,
    mockupType: "chess",
    image: "../src/assets/projects/chess.png", // Place custom image at ../src/assets/projects/chess.png and set path here if desired
    highlights: [
      "Reduced gameplay latency by 35% with optimized WebSocket payloads and state management.",
      "Improved cross-device usability by 30% through adaptive touch-friendly chessboard controls.",
      "Achieved 99% real-time state consistency preventing move desynchronization and illegal board states.",
    ],
  },
  {
    id: "b2b-ecommerce",
    title: "Wholesale-Retail E-Commerce Platform",
    tagline: "Scalable B2B commerce system with tiered role-based access and product discovery",
    description:
      "Developed a B2B e-commerce platform with role-based access control, product discovery, authentication, and cart functionality.",
    technologies: ["React.js", "Django", "PostgreSQL"],
    category: "Full Stack",
    featured: true,
    liveUrl: ADD_ECOMMERCE_LIVE_URL,
    githubUrl: ADD_ECOMMERCE_GITHUB_URL,
    mockupType: "ecommerce",
    image: "", // Place custom image at ../src/assets/projects/ecommerce.png and set path here if desired
    highlights: [
      "Streamlined order workflows by 40% through role-specific purchasing and bulk checkout pipelines.",
      "Improved checkout efficiency by 25% with multi-step validation and persistent cart caching.",
      "Configured the production environment using Git and Hostinger for seamless continuous deployment.",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate Platform",
    tagline: "Full-stack property marketplace with dynamic discovery and customer inquiry pipelines",
    description:
      "Built a full-stack property listing platform with property inquiries, favorites, REST APIs, and responsive navigation.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "Full Stack",
    featured: true,
    liveUrl: ADD_REAL_ESTATE_LIVE_URL,
    githubUrl: ADD_REAL_ESTATE_GITHUB_URL,
    mockupType: "realestate",
    image: "", // Place custom image at ../src/assets/projects/real-estate.png and set path here if desired
    highlights: [
      "Increased user interaction by 30% with an interactive property viewer and saved favorites.",
      "Improved data retrieval speed by 28% through indexed MongoDB queries and caching strategies.",
      "Enhanced user experience and navigation efficiency by 35% across high-density listings.",
    ],
  },
  {
    id: "wedring-matrimony",
    title: "Wedring Matrimony",
    tagline: "Full-stack matchmaking platform with web administration and mobile client",
    description:
      "A full-stack matrimony platform featuring a web-based admin panel and mobile application.",
    technologies: ["React-native.js", "Node.js", "Express.js", "MongoDB"],
    category: "Client Work",
    isClientWork: true,
    featured: true,
    liveUrl: ADD_WEDRING_LIVE_URL,
    githubUrl: ADD_WEDRING_GITHUB_URL,
    mockupType: "matrimony",
    image: "", // Place custom image at ../src/assets/projects/wedring.png and set path here if desired
    highlights: [
      "Architected administrative control suite for profile verification and member management.",
      "Built resilient REST APIs with Node.js and Express.js supporting complex matchmaking queries.",
      "Delivered production-grade MongoDB data models ensuring secure handling of confidential user data.",
    ],
  },
];
