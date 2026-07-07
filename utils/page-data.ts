export type FocusArea = {
  title: string;
  color: CommonColor;
  icon: string;
  details: string[];
};

export const focusAreas: FocusArea[] = [
  {
    title: "Frontend",
    color: "blue",
    icon: "i-mdi-web",
    details: ["React, Next.js, Preact", "Vue, Nuxt", "UI Systems"],
  },
  {
    title: "Backend",
    color: "green",
    icon: "i-mdi-server",
    details: ["Node.js, Deno, Bun", "Ruby on Rails", "API Design"],
  },
  {
    title: "Cloud & DevOps",
    color: "sky",
    icon: "i-mdi-cloud",
    details: ["AWS", "K8s, Docker", "CI/CD"],
  },
  {
    title: "Architecture",
    color: "red",
    icon: "i-mdi-architecture",
    details: [
      "Cloud-Native, Containerization",
      "Event-Driven, API-First",
      "High-Availability, Scalability",
    ],
  },
  {
    title: "Data",
    color: "yellow",
    icon: "i-mdi-database",
    details: ["PostgreSQL, MySQL", "InfluxDB, S3", "AI"],
  },
  {
    title: "Mobile",
    color: "purple",
    icon: "i-mdi-smartphone",
    details: ["React Native", "Native Android", "Hybrid Apps"],
  },
];

export type Technology = {
  name: string;
  color: CommonColor;
  icon: string;
};

export const technologies: Technology[] = [
  { name: "TypeScript", color: "blue", icon: "i-mdi-language-typescript" },
  { name: "JavaScript", color: "yellow", icon: "i-mdi-language-javascript" },
  { name: "Vue", color: "green", icon: "i-mdi-vuejs" },
  { name: "Nuxt", color: "green", icon: "i-mdi-nuxt" },
  { name: "React", color: "sky", icon: "i-mdi-react" },
  { name: "Angular", color: "red", icon: "i-mdi-angular" },
  { name: "Tailwind", color: "sky", icon: "i-mdi-tailwind" },
  { name: "Node.js", color: "lime", icon: "i-mdi-nodejs" },
  { name: "Deno", color: "zinc", icon: "i-bxl-deno" },
  { name: "Bun", color: "zinc", icon: "i-bxl-bun" },
  { name: "Ruby on Rails", color: "red", icon: "i-mdi-language-ruby-on-rails" },
  { name: "PostgreSQL", color: "sky", icon: "i-bxl-postgresql" },
  { name: "Docker", color: "blue", icon: "i-mdi-docker" },
  { name: "Python", color: "yellow", icon: "i-mdi-language-python" },
  { name: "Electron", color: "blue", icon: "i-mdi-electron-framework" },
  { name: "AWS", color: "orange", icon: "i-mdi-aws" },
  { name: "K8s", color: "blue", icon: "i-mdi-kubernetes" },
  { name: "RKE2", color: "blue", icon: "i-mdi-tractor" },
  { name: "AI", color: "blue", icon: "i-mdi-sparkles" },
  // Check
  // { name: "Java", color: "red", icon: "i-mdi-language-java" },
  // { name: "Spring Boot", color: "green", icon: "i-bxl-spring-boot" },
  // { name: "PHP", color: "purple", icon: "i-mdi-language-php" },
  // { name: "HTML", color: "orange", icon: "i-mdi-language-html5" },
  // { name: "CSS", color: "blue", icon: "i-mdi-language-css3" },
  // { name: "SCSS", color: "pink", icon: "i-mdi-sass" },
  // { name: "Bootstrap", color: "purple", icon: "i-mdi-bootstrap" },
  // { name: "Git", color: "red", icon: "i-mdi-git" },
];

export const profileLinks = [
  { label: "LinkedIn", icon: "i-mdi-linkedin", href: "https://linkedin.com/in/r-uhl" },
  { label: "GitHub", icon: "i-mdi-github", href: "https://github.com/rabakilgur" },
  { label: "CodePen", icon: "i-mdi-codepen", href: "https://codepen.io/rabakilgur" },
  { label: "Telegram", icon: "i-mdi-telegram", href: "https://t.me/rabakilgur" },
];
