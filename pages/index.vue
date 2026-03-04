<script setup lang="ts">
type FocusArea = {
  title: string;
  details: string[];
};

type TimelineItem = {
  title: string;
  info: string;
  text: string;
  type: "job" | "education" | "highlight";
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  link?: string;
};

const focusAreas: FocusArea[] = [
  { title: "Frontend", details: ["React, Next.js, Preact", "Vue, Nuxt", "UI Systems"] },
  { title: "Backend", details: ["Node.js, Deno", "Ruby on Rails", "API Design"] },
  { title: "Cloud & DevOps", details: ["AWS", "Docker", "CI/CD"] },
  { title: "Mobile", details: ["React Native", "Native Android", "Hybrid Apps"] },
  { title: "Data", details: ["PostgreSQL", "MySQL", "S3 Buckets"] },
  { title: "Design", details: ["Modern Web Design", "Adobe Creative Cloud"] },
];

const technologies = ["TypeScript", "Vue", "Nuxt", "React", "Node.js", "Deno", "Ruby on Rails", "PostgreSQL", "Docker", "Python", "Electron", "AWS"];

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

const projects: Project[] = [
  {
    title: "FabApp",
    subtitle: "Electron App für R&D, Fertigung und Cloud Engineering",
    description: "Vielseitige Desktop-Anwendung für Forschung, Fertigung, Support und Cloud-Engineering mit AWS-API-Integration und Hardware-Schnittstellen.",
    tags: ["Electron", "Vue", "Node.js", "AWS"],
    imageSrc: "/proj/proj_FabApp.jpg",
  },
  {
    title: "Apojet App",
    subtitle: "React Native Android App",
    description: "Weiterentwicklung der bestehenden Apojet App und Entwicklung einer neuen Android App mit React Native.",
    tags: ["React Native", "Android", "App"],
    imageSrc: "/proj/proj_ApojetAndroidApp.png",
    link: "https://play.google.com/store/apps/details?id=de.cida.mobile.apojet",
  },
  {
    title: "Spargelhof Monich Website",
    subtitle: "Website mit individueller CMS-Losung",
    description: "Entwicklung einer Webseite mit individueller CMS-Losung, Verkaufsstellen-Finder und OpenStreetMap-Integration.",
    tags: ["Frontend", "Bootstrap", "PHP"],
    imageSrc: "/proj/proj_MoenichWebsite.jpg",
    link: "http://www.spargelhof-moenich.de/",
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
            <UBadge v-for="(tech, idx) in technologies" :key="tech" :color="accentTones[idx % accentTones.length]" variant="subtle" size="md">
              {{ tech }}
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
            <UPageCard v-for="(project, idx) in projects" :key="project.title" spotlight :spotlight-color="accentTones[idx % accentTones.length]">
              <NuxtImg :src="project.imageSrc" :alt="project.title" class="object-cover w-full h-48 rounded-lg" loading="lazy" />
              <div class="mt-5">
                <p class="text-xs font-semibold tracking-wide uppercase text-muted">
                  {{ project.subtitle }}
                </p>
                <h3 class="mt-1 text-xl font-semibold text-highlighted">{{ project.title }}</h3>
                <p class="mt-3 text-sm leading-7 text-toned">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <UBadge v-for="tag in project.tags" :key="`${project.title}-${tag}`" :color="accentTones[idx % accentTones.length]" variant="subtle" size="sm">
                    {{ tag }}
                  </UBadge>
                </div>
                <UButton v-if="project.link" as="a" :href="project.link" target="_blank" rel="noreferrer" :color="accentTones[idx % accentTones.length]" variant="solid" class="mt-4">
                  Open Project
                </UButton>
              </div>
            </UPageCard>
          </div>
        </section>

        <USeparator />

        <section id="links" class="space-y-8">
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

        <USeparator />

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
