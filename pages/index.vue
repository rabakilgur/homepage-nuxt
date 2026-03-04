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

const technologies = [
  "TypeScript",
  "Vue",
  "Nuxt",
  "React",
  "Node.js",
  "Deno",
  "Ruby on Rails",
  "PostgreSQL",
  "Docker",
  "Python",
  "Electron",
  "AWS",
];

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
    subtitle: "Electron App fur R&D, Fertigung und Cloud Engineering",
    description:
      "Vielseitige Desktop-Anwendung fur Forschung, Fertigung, Support und Cloud-Engineering mit AWS-API-Integration und Hardware-Schnittstellen.",
    tags: ["Electron", "Vue", "Node.js", "AWS"],
    imageSrc: "/proj/proj_FabApp.jpg",
  },
  {
    title: "Apojet App",
    subtitle: "React Native Android App",
    description:
      "Weiterentwicklung der bestehenden Apojet App und Entwicklung einer neuen Android App mit React Native.",
    tags: ["React Native", "Android", "App"],
    imageSrc: "/proj/proj_ApojetAndroidApp.png",
    link: "https://play.google.com/store/apps/details?id=de.cida.mobile.apojet",
  },
  {
    title: "Spargelhof Monich Website",
    subtitle: "Website mit individueller CMS-Losung",
    description:
      "Entwicklung einer Webseite mit individueller CMS-Losung, Verkaufsstellen-Finder und OpenStreetMap-Integration.",
    tags: ["Frontend", "Bootstrap", "PHP"],
    imageSrc: "/proj/proj_MoenichWebsite.jpg",
    link: "http://www.spargelhof-moenich.de/",
  },
];

const profileLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/robin-garbe/" },
  { label: "GitHub", href: "https://github.com/rabakilgur" },
  { label: "CodePen", href: "https://codepen.io/rabakilgur" },
  { label: "Telegram", href: "https://t.me/rabakilgur" },
];

const contactLinks = [
  { label: "E-Mail", value: "kontakt@uhl.sh", href: "mailto:kontakt@uhl.sh" },
  { label: "Telefon", value: "+49 159 0245 0748", href: "tel:+4915902450748" },
  { label: "Standort", value: "Darmstadt", href: "https://www.google.com/maps/place/Darmstadt/" },
];

const currentYear = new Date().getFullYear();

const toneByType: Record<TimelineItem["type"], "primary" | "warning" | "neutral"> = {
  highlight: "primary",
  education: "warning",
  job: "neutral",
};

const accentTones: Array<"primary" | "success" | "info" | "warning" | "error" | "neutral"> = [
  "primary",
  "success",
  "info",
  "warning",
  "error",
  "neutral",
];
</script>

<template>
  <div class="min-h-screen from-sky-50 to-white bg-linear-to-b via-indigo-50/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
    <div class="fixed top-4 right-4 z-50">
      <UColorModeButton color="primary" variant="soft" />
    </div>

    <section class="border-b border-default bg-linear-to-r from-primary/10 via-info/10 to-success/10">
      <UContainer class="py-20 sm:py-24">
        <div class="mx-auto max-w-4xl text-center">
          <UBadge color="primary" variant="solid" class="mb-4">Portfolio</UBadge>
          <h1 class="text-4xl font-bold tracking-tight text-highlighted sm:text-5xl md:text-6xl">
            Hallo, ich bin Robin Uhl
          </h1>
          <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted">
            Softwareingenieur und -architekt aus Darmstadt mit Fokus auf Cloud- und Fullstack-Entwicklung.
            Ich baue robuste Produkte mit klarer UX, solider Architektur und hoher Delivery-Geschwindigkeit.
          </p>
          <div class="flex flex-wrap gap-3 justify-center items-center mt-8">
            <UButton as="a" href="#projects" color="primary" variant="solid">Projekte ansehen</UButton>
            <UButton as="a" href="#contact" variant="solid" color="info">Kontakt</UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <main>
      <UContainer class="py-14 space-y-20 sm:py-16">
        <section id="about" class="space-y-5 text-center">
          <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Uber mich</h2>
          <p class="mx-auto max-w-3xl leading-8 text-toned">
            Ich arbeite aktuell bei FlexHome.Energy an einer Plattform fur nachhaltigere Energieversorgung.
            Mein Schwerpunkt liegt auf der Verbindung von nutzerzentriertem Frontend, skalierbarem Backend und Cloud-Betrieb.
          </p>
        </section>

        <USeparator />

        <section id="focus" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Schwerpunkte</h2>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <UCard
              v-for="(area, idx) in focusAreas"
              :key="area.title"
              variant="soft"
              class="border-t-4 border-t-primary-500/70"
            >
              <template #header>
                <h3 class="font-semibold text-highlighted">
                  <UBadge :color="accentTones[idx % accentTones.length]" variant="soft">{{ area.title }}</UBadge>
                </h3>
              </template>
              <ul class="space-y-2 text-sm text-toned">
                <li v-for="detail in area.details" :key="detail">{{ detail }}</li>
              </ul>
            </UCard>
          </div>
          <div class="flex flex-wrap gap-2 justify-center">
            <UBadge
              v-for="(tech, idx) in technologies"
              :key="tech"
              :color="accentTones[idx % accentTones.length]"
              variant="subtle"
              size="md"
            >
              {{ tech }}
            </UBadge>
          </div>
        </section>

        <USeparator />

        <section id="experience" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Erfahrung</h2>
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
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Projekte</h2>
          </div>
          <div class="grid gap-5 lg:grid-cols-3">
            <UCard
              v-for="(project, idx) in projects"
              :key="project.title"
              class="overflow-hidden"
              variant="soft"
            >
              <NuxtImg
                :src="project.imageSrc"
                :alt="project.title"
                class="object-cover w-full h-48 rounded-lg"
                loading="lazy"
              />
              <div class="mt-5">
                <p class="text-xs font-semibold uppercase tracking-wide text-muted">
                  {{ project.subtitle }}
                </p>
                <h3 class="mt-1 text-xl font-semibold text-highlighted">{{ project.title }}</h3>
                <p class="mt-3 text-sm leading-7 text-toned">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <UBadge
                    v-for="tag in project.tags"
                    :key="`${project.title}-${tag}`"
                    :color="accentTones[idx % accentTones.length]"
                    variant="subtle"
                    size="sm"
                  >
                    {{ tag }}
                  </UBadge>
                </div>
                <UButton
                  v-if="project.link"
                  as="a"
                  :href="project.link"
                  target="_blank"
                  rel="noreferrer"
                  :color="accentTones[idx % accentTones.length]"
                  variant="solid"
                  class="mt-4"
                >
                  Projekt ansehen
                </UButton>
              </div>
            </UCard>
          </div>
        </section>

        <USeparator />

        <section id="links" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Links</h2>
          </div>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <UButton
              v-for="(link, idx) in profileLinks"
              :key="link.label"
              as="a"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
              :color="accentTones[idx % accentTones.length]"
              variant="soft"
              class="justify-center py-8 font-semibold"
            >
              {{ link.label }}
            </UButton>
          </div>
        </section>

        <USeparator />

        <section id="contact" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Kontakt</h2>
          </div>
          <div class="grid gap-4 mx-auto max-w-3xl">
            <UCard v-for="(entry, idx) in contactLinks" :key="entry.label" variant="soft">
              <div class="flex flex-wrap gap-3 justify-between items-center">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-wide text-muted">{{ entry.label }}</p>
                  <p class="mt-1 text-lg font-semibold text-highlighted">{{ entry.value }}</p>
                </div>
                <UButton
                  as="a"
                  :href="entry.href"
                  target="_blank"
                  rel="noreferrer"
                  :color="accentTones[idx % accentTones.length]"
                  variant="solid"
                >
                  Offnen
                </UButton>
              </div>
            </UCard>
          </div>
        </section>
      </UContainer>
    </main>

    <footer class="border-t border-default py-8">
      <UContainer class="text-center text-sm text-muted">
        <p>Copyright {{ currentYear }}</p>
        <p class="mt-1">Made with heart by Robin Uhl</p>
      </UContainer>
    </footer>
  </div>
</template>
