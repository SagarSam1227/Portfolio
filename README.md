# Sagar Sam — Full Stack Developer Portfolio

A modern, high-performance developer portfolio built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**. Features an electric-lime on dark aesthetic, interactive developer terminal preview, comprehensive project breakdowns, real career timeline, categorized skills, and seamless resume downloading.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Run Linter
```bash
npm run lint
```

---

## 🛠 Project Structure

```
PORTFOLIO/
├── public/
│   ├── Sagar-Sam-Resume.pdf    # Direct download resume PDF
│   └── favicon.svg             # Website favicon
├── src/
│   ├── assets/                 # Static visual assets
│   ├── components/             # Modular UI components
│   │   ├── Navbar.tsx          # Responsive sticky navigation with mobile drawer
│   │   ├── Hero.tsx            # Hero with status pill, CTAs, and interactive terminal
│   │   ├── InteractiveTerminal.tsx # Developer panel with code views & interactive bash
│   │   ├── About.tsx           # Bio, core engineering strengths & stat cards
│   │   ├── Skills.tsx          # Categorized technical competencies with filter tabs
│   │   ├── Experience.tsx      # Chronological career timeline & achievements
│   │   ├── Projects.tsx        # Featured showcase with filter tabs
│   │   ├── ProjectCard.tsx     # Project card with visual mockup preview
│   │   ├── ProjectModal.tsx    # Detailed architecture & impact modal
│   │   ├── ProjectMockup.tsx   # Custom simulation mockups for each project
│   │   ├── Education.tsx       # Degrees & training credentials
│   │   ├── Contact.tsx         # Direct contact cards & mailto generator
│   │   ├── Footer.tsx          # Brand, social links & back-to-top
│   │   ├── SocialIcons.tsx     # GitHub and LinkedIn SVG components
│   │   └── Toast.tsx           # Floating toast notification provider
│   ├── data/                   # Centralized data sources
│   │   ├── personalInfo.ts     # Name, title, contact, bio, and resume paths
│   │   ├── projects.ts         # Centralized project definitions & URL constants
│   │   ├── experience.ts       # Career history and bullet points
│   │   ├── skills.ts           # Categorized technical skill sets
│   │   └── education.ts        # Academic and bootcamp credentials
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Root component
│   └── main.tsx                # Application entry point
├── package.json
└── vite.config.ts
```

---

## 🔗 Configuring Project URLs

Project live deployment and GitHub repository links are centralized in [`src/data/projects.ts`](file:///home/sagar/Documents/SAGAR/RESUME/PORTFOLIO/src/data/projects.ts).

When you are ready to connect real URLs, update the constants at the top of the file:

```typescript
export const ADD_CHESS_LIVE_URL = "https://your-chess-url.com";
export const ADD_CHESS_GITHUB_URL = "https://github.com/SagarSam1227/chess-app";

export const ADD_ECOMMERCE_LIVE_URL = "https://your-ecommerce-url.com";
export const ADD_ECOMMERCE_GITHUB_URL = "https://github.com/SagarSam1227/b2b-ecommerce";

export const ADD_REAL_ESTATE_LIVE_URL = "https://your-realestate-url.com";
export const ADD_REAL_ESTATE_GITHUB_URL = "https://github.com/SagarSam1227/real-estate";

export const ADD_WEDRING_LIVE_URL = "https://wedring.com";
export const ADD_WEDRING_GITHUB_URL = ""; // Private client repository
```

> **Note:** Whenever a URL is left empty (`""`), the corresponding **Live Demo** or **Source Code** button is automatically hidden, ensuring users never encounter broken or placeholder links.

---

## 📄 Updating Resume

To replace the resume PDF, place your updated file in `public/` and ensure the filename matches `resumeFileName` and `resumeUrl` in [`src/data/personalInfo.ts`](file:///home/sagar/Documents/SAGAR/RESUME/PORTFOLIO/src/data/personalInfo.ts).
# Portfolio
