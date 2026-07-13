export const profile = {
  name: "Nishita Gupta",
  role: "Computer Science Student & Aspiring Full-Stack Developer",
  tagline: "I build fast, real-time interfaces — and the systems that keep them in sync.",
  location: "Amaravati, Andhra Pradesh, India",
  email: "nishitagupta2005@gmail.com",
  github: "https://github.com/Nishita-Gupta",
  githubHandle: "github.com/Nishita-Gupta",
  linkedin: "https://linkedin.com/in/nishita-gupta1",
  linkedinHandle: "linkedin.com/in/nishita-gupta1",
  resumeFile: "/resume.pdf",
};

export const about = {
  who: "I'm a third-year Computer Science and Engineering student at VIT-AP University. Most of my time outside coursework goes into building products end-to-end — from data model to pixel.",
  interest:
    "I'm drawn to real-time, multi-user software: the kind of interface where several people are looking at the same screen at once and everything has to stay in sync without feeling fragile.",
  learning:
    "I'm currently deepening my data science toolkit — Python, NumPy, Pandas-adjacent analysis and visualization with Matplotlib and Seaborn — alongside continued work on full-stack TypeScript.",
  goal: "My goal is to start my career as a software engineer on a product team, building interfaces that are as reliable under real usage as they are considered in design.",
};

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "Vellore Institute of Technology, Amaravati",
  period: "2023 — Present",
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

export const featuredProject = {
  name: "CollabSheet",
  tagline: "A real-time collaborative spreadsheet, built down to first principles.",
  year: "2025",
  stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  github: "https://github.com/Nishita-Gupta",
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
};

export const secondaryProject = {
  name: "Personal Portfolio",
  tagline: "An earlier portfolio focused on clean, reusable React components.",
  stack: ["React", "Tailwind CSS"],
  detail:
    "A responsive portfolio site built with reusable React components and a clean, mobile-friendly UI using Tailwind CSS — the predecessor to this one.",
};
