export const profile = {
  name: "Nishita Gupta",
  role: "Computer Science Student & Aspiring Full-Stack Developer",
  tagline: "I build for the web, from pixels to production.",
  location: "Amaravati, Andhra Pradesh, India",
  email: "nishitagupta2005@gmail.com",
  github: "https://github.com/Nishita-Gupta",
  githubHandle: "github.com/Nishita-Gupta",
  linkedin: "https://linkedin.com/in/nishita-gupta1",
  linkedinHandle: "linkedin.com/in/nishita-gupta1",
  resumeFile: "/Nishita_Gupta.pdf",
};


export const about = {
  who: "I'm a fourth-year Computer Science and Engineering student at VIT-AP University. I enjoy building products end-to-end — from designing the backend and data layer to crafting the interface users actually interact with.",

  interest:
    "I'm especially interested in full-stack development and real-time systems — building software where the frontend, backend, and data layer work together seamlessly and reliably.",

  learning:
    "I'm currently strengthening my software engineering fundamentals through Java, data structures and algorithms, while continuing to build full-stack applications with React, Next.js, Node.js, Express, and MongoDB.",

  goal: "My goal is to start my career as a software engineer, working on real products where I can contribute across the stack, solve meaningful problems, and keep growing as an engineer.",
};



export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "Vellore Institute of Technology, Amaravati",
  period: "2023 — Present",
  detail: "CGPA 8.45",
};

export const experience = {
  company: "Prodigy Infotech",
  title: "Data Science Intern",
  period: "Dec 2024 — Jan 2025",
  detail:
    "Hands-on experience in data analysis and visualization using Python, working with Matplotlib, NumPy and Seaborn.",
};

export const certifications = [
  {
    name: "Data Science and Business Analytics",
    issuer: "BlackBucks",
    period: "Feb 2025 — May 2025",
  },
  {
    name: "Python Programming Certification",
    issuer: "Kaggle",
    period: "Dec 2024",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Languages",
    items: ["Python", "Java", "C"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Firebase", "SQL"],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  year: string;
  stack: string[];
  github: string;
  live?: string;
  problem: string;
  solution: string;
  features: string[];
};

export const projects: Project[] = [
  {
    id: "projectpulse",
    name: "ProjectPulse",
    tagline:
      "A collaborative project management platform for developer teams, with live-computed productivity analytics.",
    year: "2026",
    stack: ["React 19", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Nishita-Gupta/ProjectPulse",
    live: "https://project-pulse-seven-kohl.vercel.app",
    problem:
      "Most student MERN projects stop at basic CRUD todo apps. ProjectPulse was built to go further — real role-based permissions enforced server-side, analytics computed live from actual data instead of hardcoded numbers, and two independent authentication strategies.",
    solution:
      "A full MERN application with stateless JWT authentication throughout — both email/password with bcrypt hashing, and Google OAuth 2.0 with server-side ID token verification. Role-based access control runs through custom Express middleware, and the analytics dashboard is built entirely on MongoDB aggregation pipelines rather than application-level computation.",
    features: [
      "Two independent auth strategies: email/password with bcrypt + JWT, and Google OAuth 2.0 verified server-side",
      "Role-based access control (Owner/Member) enforced server-side via custom Express middleware, not just hidden in the UI",
      "Full task management: CRUD with status, priority, due dates, labels, and membership-validated assignment",
      "Threaded comments per task with author-only deletion",
      "Live analytics dashboard — completion rate, a weighted productivity score, activity charts, streaks, week-over-week growth, and per-member contribution — all computed via MongoDB aggregation pipelines",
      "Centralized error handling via a custom asyncHandler wrapper and shared Express error middleware",
    ],
  },
  {
    id: "collabsheet",
    name: "CollabSheet",
    tagline: "A real-time collaborative spreadsheet, built down to first principles.",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Nishita-Gupta/collabsheets",
    live: "https://collabsheets.vercel.app",
    problem:
      "Spreadsheets are one of the hardest UI surfaces to make collaborative: many cursors, many edits, and a grid that has to feel instant even while it's talking to a server. The brief was to build a lightweight Google Sheets analogue and be deliberate about where state lives, how contention is handled, and what not to build.",
    solution:
      "I built a scrollable, numbered grid with live multi-user editing powered by Firestore's onSnapshot listeners and debounced writes, so concurrent edits converge without stepping on each other. A presence layer, backed by the Firebase Realtime Database, shows who else is in the document, their color, and the cell they currently have selected.",
    features: [
      "Real-time sync across every open session of a document, with a write-state indicator so users always know whether their change has landed",
      "A custom formula parser supporting =SUM, =AVERAGE, =MAX, =MIN and arithmetic expressions across cell references",
      "Live presence: active collaborators, their assigned colors, and their selected cells, updated in real time",
      "Cell formatting, column and row resizing, full keyboard navigation, dark mode and CSV export",
      "Google OAuth and guest authentication, deployed on Vercel with a strict, zero-error TypeScript build",
    ],
  },
];
