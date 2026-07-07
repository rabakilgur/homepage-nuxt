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

export type ContactLinkAction = "email" | "phone";

export type ContactLink = {
  label: string;
  value?: string;
  href?: string;
  icon: string;
  action?: ContactLinkAction;
};

function reverseForObfuscation(value: string) {
  return [...value].reverse().join("");
}

const EMAIL_LOCAL_PART = ["co", "nt", "act"].join("");
const EMAIL_DOMAIN_PART = ["u", "hl", ".", "sh"].join("");
const PHONE_COUNTRY_CODE = ["+", "4", "9"].join("");
const PHONE_PARTS = [["1", "5", "9"].join(""), ["0", "2", "4", "5"].join(""), ["0", "7", "4", "8"].join("")];

export function getObfuscatedEmailDisplayParts() {
  return {
    local: reverseForObfuscation(EMAIL_LOCAL_PART),
    domain: reverseForObfuscation(EMAIL_DOMAIN_PART),
  };
}

export function getObfuscatedPhoneDisplayParts() {
  return [PHONE_COUNTRY_CODE, ...PHONE_PARTS].map(reverseForObfuscation);
}

function buildContactEmailAddress() {
  return `${EMAIL_LOCAL_PART}@${EMAIL_DOMAIN_PART}`;
}

function buildContactPhoneNumber() {
  return `${PHONE_COUNTRY_CODE}${PHONE_PARTS.join("")}`;
}

function openContactHref(href: string) {
  const link = document.createElement("a");
  link.href = href;
  link.rel = "noopener";
  document.body.append(link);
  link.click();
  link.remove();
}

export function openContactEmail() {
  openContactHref(`mailto:${buildContactEmailAddress()}`);
}

export function openContactPhone() {
  openContactHref(`tel:${buildContactPhoneNumber()}`);
}

export function isEmailContactLink(link: Pick<ContactLink, "action" | "icon">) {
  return link.action === "email" || link.icon === "i-mdi-email";
}

export function isPhoneContactLink(link: Pick<ContactLink, "action" | "icon">) {
  return link.action === "phone" || link.icon === "i-mdi-phone";
}

export function isActionContactLink(link: Pick<ContactLink, "action" | "icon">) {
  return isEmailContactLink(link) || isPhoneContactLink(link);
}

export function openContactLink(link: Pick<ContactLink, "action" | "icon">) {
  if (isEmailContactLink(link)) {
    openContactEmail();
  } else if (isPhoneContactLink(link)) {
    openContactPhone();
  }
}
