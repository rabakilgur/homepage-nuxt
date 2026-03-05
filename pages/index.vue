<script setup lang="ts">
type Color =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "neutral"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "slate"
  | "gray"
  | "zinc"
  | "stone";

type FocusArea = {
  title: string;
  details: string[];
};

const focusAreas: FocusArea[] = [
  { title: "Frontend", details: ["React, Next.js, Preact", "Vue, Nuxt", "UI Systems"] },
  { title: "Backend", details: ["Node.js, Deno", "Ruby on Rails", "API Design"] },
  { title: "Cloud & DevOps", details: ["AWS", "Docker", "CI/CD"] },
  { title: "Mobile", details: ["React Native", "Native Android", "Hybrid Apps"] },
  { title: "Data", details: ["PostgreSQL", "MySQL", "S3 Buckets"] },
  { title: "Design", details: ["Modern Web Design", "Adobe Creative Cloud"] },
];

type Technology = {
  name: string;
  color: Color;
  icon: string;
};

const technologies: Technology[] = [
  { name: "TypeScript", color: "blue", icon: "i-mdi-language-typescript" },
  { name: "Vue", color: "green", icon: "i-mdi-vuejs" },
  { name: "Nuxt", color: "purple", icon: "i-mdi-nuxt" },
  { name: "React", color: "blue", icon: "i-mdi-react" },
  { name: "Node.js", color: "green", icon: "i-mdi-nodejs" },
  { name: "Deno", color: "blue", icon: "i-bxl-deno" },
  { name: "Ruby on Rails", color: "red", icon: "i-mdi-language-ruby-on-rails" },
  { name: "PostgreSQL", color: "blue", icon: "i-bxl-postgresql" },
  { name: "Docker", color: "blue", icon: "i-mdi-docker" },
  { name: "Python", color: "yellow", icon: "i-mdi-language-python" },
  { name: "Electron", color: "blue", icon: "i-mdi-electron-framework" },
  { name: "AWS", color: "blue", icon: "i-mdi-aws" },
];

type TimelineItem = {
  title: string;
  info: string;
  text: string;
  type: "job" | "education" | "highlight";
};

const timeline: TimelineItem[] = [
  {
    title: "FlexHome.Energy",
    info: "Okt 2024 - heute",
    text: "Senior Cloud and Software Architect.",
    type: "highlight",
  },
  {
    title: "Solarnative",
    info: "Feb 2024 - Sep 2024",
    text: "Senior DevOps, Cloud and Software Engineer.",
    type: "job",
  },
  {
    title: "ARZ Darmstadt",
    info: "Apr 2022 - Jan 2024",
    text: "Softwareingenieur im Bereich Management Information Systems.",
    type: "job",
  },
  {
    title: "TU Darmstadt (Master)",
    info: "Apr 2022 - heute",
    text: "Informatik Master-Studium.",
    type: "education",
  },
  {
    title: "ARZ Darmstadt",
    info: "Mar 2020 - Mar 2022",
    text: "Entwickler im Bereich MIS als Werkstudent.",
    type: "job",
  },
  {
    title: "TU Darmstadt (Bachelor)",
    info: "Okt 2015 - Mar 2022",
    text: "Bachelor of Science Informatik.",
    type: "education",
  },
];

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  link?: string;
  accentColor: Color;
};

const projects: Project[] = [
  {
    title: "FabApp",
    subtitle: "App für R&D, Fertigung und Cloud Engineering",
    description: "Vielseitige Desktop-Anwendung für Forschung, Fertigung, Support und Cloud-Engineering mit AWS-API-Integration und Hardware-Schnittstellen.",
    tags: ["Electron", "Vue", "Node.js", "AWS"],
    imageSrc: "/proj/proj_FabApp.jpg",
    accentColor: "violet",
  },
  {
    title: "Apojet App",
    subtitle: "React Native Android App",
    description: "Weiterentwicklung der bestehenden Apojet App und Entwicklung einer vollständig neuen Android App mit React Native.",
    tags: ["React Native", "Android", "App"],
    imageSrc: "/proj/proj_ApojetAndroidApp.png",
    link: "https://play.google.com/store/apps/details?id=de.cida.mobile.apojet",
    accentColor: "orange",
  },
  {
    title: "Spargelhof Monich Website",
    subtitle: "Webseite mit individueller CMS-Losung",
    description: "Entwicklung einer Webseite mit individueller CMS-Losung, Verkaufsstellen-Finder und OpenStreetMap-Integration.",
    tags: ["CMS", "Bootstrap", "PHP"],
    imageSrc: "/proj/proj_MoenichWebsite.jpg",
    link: "http://www.spargelhof-moenich.de/",
    accentColor: "amber",
  },
  {
    title: "Thor Robot GUI",
    subtitle: "Benutzeroberflache zur Steuerung des Thor-Roboters",
    description: "Electron-App zur prazisen Steuerung eines Open-Source-6-Achsen-Roboters in Zusammenarbeit mit dem FabLab Darmstadt.",
    tags: ["Node.js", "Electron", "Robotik"],
    imageSrc: "/proj/proj_RobotControlGUI.jpg",
    link: "https://github.com/rabakilgur/ThorRobotGUI",
    accentColor: "orange",
  },
  {
    title: "Dice Project App",
    subtitle: "App für iOS, Android und Web",
    description: "Cross-Plattform-Würfel-App als App-Development-Projekt mit Fokus auf mobile und webbasierte Nutzung.",
    tags: ["PhoneGap", "Hybrid App", "Framework 7"],
    imageSrc: "/proj/proj_DiceProjectApp.jpg",
    link: "https://robin-garbe.de/p/dice_project",
    accentColor: "blue",
  },
  {
    title: "OPC Factory Control Panel",
    subtitle: "Programm zur Steuerung von Maschinen via OPC-UA",
    description: "Im Rahmen eines Bachelorpraktikums entwickelte Anwendung zum dynamischen Senden von Auftragen an industrielle Maschinen mit erweiterbarer Architektur.",
    tags: ["Node.js", "Electron", "OPC-UA"],
    imageSrc: "/proj/proj_OPCFactoryControlPanel.jpg",
    link: "https://github.com/rabakilgur/OPC_Factory_Control_Panel",
    accentColor: "neutral",
  },
];

const profileLinks = [
  { label: "LinkedIn", icon: "i-mdi-linkedin", href: "https://www.linkedin.com/in/robin-garbe/" },
  { label: "GitHub", icon: "i-mdi-github", href: "https://github.com/rabakilgur" },
  { label: "CodePen", icon: "i-mdi-codepen", href: "https://codepen.io/rabakilgur" },
  { label: "Telegram", icon: "i-mdi-telegram", href: "https://t.me/rabakilgur" },
];

const contactLinks = [
  { label: "E-Mail", value: "kontakt@uhl.sh", href: "mailto:kontakt@uhl.sh" },
  { label: "Telefon", value: "+49 159 0245 0748", href: "tel:+4915902450748" },
  { label: "Standort", value: "Darmstadt", href: "https://www.google.com/maps/place/Darmstadt/" },
];

const currentYear = new Date().getFullYear();

const navItems = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const quickStats = [
  { label: "Experience", value: "10+ Years" },
  { label: "Core Domains", value: "Cloud + Fullstack" },
  { label: "Current Role", value: "Senior Cloud & Software Architect" },
];

const toneByType: Record<TimelineItem["type"], "primary" | "warning" | "neutral"> = {
  highlight: "primary",
  education: "warning",
  job: "neutral",
};

const accentTones: Array<"primary" | "success" | "info" | "warning" | "error" | "neutral"> = ["primary", "success", "info", "warning", "error", "neutral"];
</script>

<template>
  <div class="min-h-screen from-sky-50 to-white bg-linear-to-b via-indigo-50/40 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
    <header class="sticky top-0 z-50 border-b backdrop-blur-xl border-default/70 bg-default/70">
      <UContainer class="py-3">
        <div class="flex gap-3 justify-between items-center">
          <div class="flex gap-3 items-center">
            <UAvatar alt="Robin Uhl" text="RU" color="primary" size="sm" />
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-highlighted">Robin Uhl</span>
              <span class="text-xs text-muted">Senior Cloud & Software Architect</span>
            </div>
          </div>

          <nav class="hidden gap-1 items-center md:flex">
            <UButton v-for="item in navItems" :key="item.href" :href="item.href" as="a" color="neutral" variant="ghost" size="sm">
              {{ item.label }}
            </UButton>
          </nav>

          <div class="flex gap-2 items-center">
            <UColorModeButton color="primary" variant="soft" />
            <UButton as="a" href="#contact" color="primary" variant="solid" size="sm">Contact Info</UButton>
          </div>
        </div>
      </UContainer>
    </header>

    <main>
      <section class="overflow-hidden relative border-b border-default">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute -top-24 left-1/2 w-80 h-80 rounded-full blur-3xl -translate-x-1/2 bg-primary/20" />
          <div class="absolute -left-16 top-28 w-64 h-64 rounded-full blur-3xl bg-info/20" />
          <div class="absolute top-16 -right-16 w-64 h-64 rounded-full blur-3xl bg-success/20" />
        </div>
        <UContainer class="relative py-20 sm:py-24">
          <div class="mx-auto max-w-5xl text-center">
            <UBadge color="primary" variant="soft" size="lg" class="mb-5"> Senior Cloud & Software Architect </UBadge>
            <h1 class="text-4xl font-bold tracking-tight text-balance text-highlighted sm:text-6xl">Ich bin Robin, Senior Cloud & Software Architect aus Darmstadt.</h1>
            <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-toned">
              Seit über zehn Jahren entwickle ich Cloud- und Fullstack-Losungen mit Fokus auf saubere Architektur, stabile Systeme und nachhaltige Weiterentwicklung.
            </p>
            <div class="flex flex-wrap gap-3 justify-center items-center mt-9">
              <UButton as="a" href="#projects" color="primary" variant="solid" size="lg"> Projekte ansehen </UButton>
              <UButton as="a" href="#focus" color="info" variant="soft" size="lg"> Technischer Fokus </UButton>
            </div>
          </div>
          <div class="grid gap-4 mx-auto mt-12 max-w-5xl md:grid-cols-3">
            <UPageCard v-for="item in quickStats" :key="item.label" :title="item.label" :description="item.value" spotlight spotlight-color="primary" />
          </div>
        </UContainer>
      </section>

      <UContainer class="py-14 space-y-20 sm:py-16">
        <section id="about" class="space-y-5 text-center">
          <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">About</h2>
          <UCard variant="soft" class="mx-auto max-w-4xl">
            <p class="mx-auto max-w-3xl leading-8 text-toned">
              Ich arbeite aktuell bei FlexHome.Energy an einer Plattform für nachhaltigere Energieversorgung. Mein Schwerpunkt liegt auf der Verbindung von nutzerzentriertem Frontend, skalierbarem
              Backend und Cloud-Betrieb.
            </p>
          </UCard>
        </section>

        <USeparator />

        <section id="focus" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Focus Areas</h2>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <UPageCard v-for="(area, idx) in focusAreas" :key="area.title" spotlight spotlight-color="primary">
              <template #header>
                <h3 class="font-semibold text-highlighted">
                  <UBadge :color="accentTones[idx % accentTones.length]" variant="soft">{{ area.title }}</UBadge>
                </h3>
              </template>
              <ul class="space-y-2 text-sm text-toned">
                <li v-for="detail in area.details" :key="detail">{{ detail }}</li>
              </ul>
            </UPageCard>
          </div>
          <div class="flex flex-wrap gap-2 justify-center">
            <UBadge v-for="tech in technologies" :key="tech.name" :color="tech.color" variant="subtle" size="lg" :icon="tech.icon">
              {{ tech.name }}
            </UBadge>
          </div>
        </section>

        <USeparator />

        <section id="experience" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Experience</h2>
          </div>
          <div class="grid gap-4">
            <UCard v-for="item in timeline" :key="`${item.title}-${item.info}`" variant="soft" class="border-l-4 border-l-primary-500/50">
              <div class="flex flex-wrap gap-3 justify-between items-start">
                <div>
                  <h3 class="text-xl font-semibold text-highlighted">{{ item.title }}</h3>
                  <p class="mt-2 text-toned">{{ item.text }}</p>
                </div>
                <div class="flex gap-2 items-center">
                  <UBadge :color="toneByType[item.type]" variant="subtle">
                    {{ item.type === "education" ? "Education" : item.type === "highlight" ? "Current" : "Job" }}
                  </UBadge>
                  <UBadge color="neutral" variant="outline">{{ item.info }}</UBadge>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <USeparator />

        <section id="projects" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Selected Projects</h2>
          </div>
          <div class="grid gap-5 lg:grid-cols-2">
            <UPageCard v-for="(project, idx) in projects" :key="project.title" spotlight :spotlight-color="project.accentColor" class="spotlight-card">
              <NuxtImg :src="project.imageSrc" :alt="project.title" class="object-cover w-full h-48 rounded-lg" loading="lazy" />
              <div class="mt-5">
                <p class="text-xs font-semibold tracking-wide uppercase text-muted">
                  {{ project.subtitle }}
                </p>
                <h3 class="mt-1 text-xl font-semibold text-highlighted">{{ project.title }}</h3>
                <p class="mt-3 text-sm leading-7 text-toned">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <UBadge v-for="tag in project.tags" :key="`${project.title}-${tag}`" variant="subtle" size="sm" :color="project.accentColor">
                    {{ tag }}
                  </UBadge>
                </div>
                <UButton
                  v-if="project.link"
                  as="a"
                  :href="project.link"
                  target="_blank"
                  rel="noreferrer"
                  :color="project.accentColor"
                  variant="subtle"
                  size="sm"
                  icon="i-mdi-open-in-new"
                  class="absolute right-3 bottom-3 mt-4 sm:right-5 sm:bottom-5">
                  Open Project
                </UButton>
              </div>
            </UPageCard>
          </div>
        </section>

        <section id="links" class="py-14 space-y-8 rounded-lg bg-neutral-900">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Find Me Online</h2>
          </div>
          <div class="flex gap-8 justify-center">
            <a v-for="link in profileLinks" :key="link.label" :href="link.href" target="_blank" rel="noreferrer" class="opacity-70 transition-opacity duration-200 hover:opacity-100">
              <UTooltip :text="link.label" :delay-duration="0" arrow :content="{ side: 'bottom' }">
                <UIcon :name="link.icon" class="size-8" />
              </UTooltip>
            </a>
          </div>
        </section>

        <section id="contact" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Contact</h2>
          </div>
          <div class="grid gap-4 mx-auto max-w-3xl">
            <UCard v-for="(entry, idx) in contactLinks" :key="entry.label" variant="soft">
              <div class="flex flex-wrap gap-3 justify-between items-center">
                <div>
                  <p class="text-xs font-semibold tracking-wide uppercase text-muted">{{ entry.label }}</p>
                  <p class="mt-1 text-lg font-semibold text-highlighted">{{ entry.value }}</p>
                </div>
                <UButton as="a" :href="entry.href" target="_blank" rel="noreferrer" :color="accentTones[idx % accentTones.length]" variant="solid"> Open </UButton>
              </div>
            </UCard>
          </div>
        </section>
      </UContainer>
    </main>

    <footer class="py-10 border-t border-default">
      <UContainer class="text-sm text-center text-muted">
        <p>Copyright {{ currentYear }}</p>
        <p class="mt-1">Made with ❤️ by Robin Uhl</p>
        <div class="flex gap-2 justify-center items-center mt-4">
          <UButton as="a" href="#about" variant="ghost" color="neutral" size="sm">About</UButton>
          <UButton as="a" href="#projects" variant="ghost" color="neutral" size="sm">Projects</UButton>
          <UButton as="a" href="#contact" variant="ghost" color="neutral" size="sm">Contact</UButton>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<style lang="scss">
// @property --spotlight-color {
//   initial-value: var(--ui-primary);
//   inherits: true;
//   syntax: "<color>";
// }
.spotlight-card {
  &:not(:hover)::before {
    opacity: 0;
  }
  &::before {
    transition: opacity 0.5s ease-in-out;
  }
}
</style>
