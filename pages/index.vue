<script setup lang="ts">
type SemanticColor = "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral";
type CommonColor =
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
type Color = SemanticColor | CommonColor;

type FocusArea = {
  title: string;
  color: CommonColor;
  icon: string;
  details: string[];
};

const focusAreas: FocusArea[] = [
  { title: "Frontend", color: "blue", icon: "i-mdi-web", details: ["React, Next.js, Preact", "Vue, Nuxt", "UI Systems"] },
  { title: "Backend", color: "green", icon: "i-mdi-server", details: ["Node.js, Deno, Bun", "Ruby on Rails", "API Design"] },
  { title: "Cloud & DevOps", color: "sky", icon: "i-mdi-cloud", details: ["AWS", "K8s, Docker", "CI/CD"] },
  { title: "Architecture", color: "red", icon: "i-mdi-architecture", details: ["Cloud-Native, Containerization", "Event-Driven, API-First", "High-Availability, Scalability"] },
  { title: "Data", color: "yellow", icon: "i-mdi-database", details: ["PostgreSQL, MySQL", "InfluxDB, S3", "AI"] },
  { title: "Mobile", color: "purple", icon: "i-mdi-smartphone", details: ["React Native", "Native Android", "Hybrid Apps"] },
];

type Technology = {
  name: string;
  color: CommonColor;
  icon: string;
};

const technologies: Technology[] = [
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

function generateHash(string: string): number {
  let hash = 0;
  for (const char of string) {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    hash |= 0; // Constrain to 32bit integer
  }
  return hash;
}

function deterministicShuffleArray<T>(array: T[], hashKey: keyof T): T[] {
  return array
    .map((value) => ({ value, sort: generateHash(value[hashKey] as string) }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const shuffledTechnologies = deterministicShuffleArray(technologies, "name");

type TimelineItem = {
  org: string;
  period: string;
  position: string;
  description: string;
  tags: string[];
  highlight?: boolean;
};

const experience: TimelineItem[] = [
  {
    position: "Senior Cloud and Software Architect",
    org: "FlexHome.Energy",
    period: "Okt 2024 – heute",
    description:
      "Entwurf und Entwicklung der Cloud-Architektur und Services für die FlexHome.Energy Plattform, inklusive smarter Energiemanagement-Lösungen mit bidirektionalen Batteriespeichern, Backend mit MQTT-APIs und Zeitreihendatenbanken, einer Analyse- und Verwaltungskonsole und einem REST API-Wrapper für Kunden-Onboarding.",
    tags: ["AWS", "K8s / RKE2", "TypeScript", "Vue / Nuxt", "Node / Deno / Bun", "InfluxDB", "AI"],
    highlight: true,
  },
  {
    position: "Senior Cloud and Software Engineer",
    org: "Solarnative",
    period: "Feb 2024 – Sep 2024",
    description:
      "Ausbau des AWS-Backends mit robusten APIs und Time-Series-Datenbanken für Daten von Mikroinvertern und smarten Gateways für Solaranlagen. Entwicklung einer umfangreichen Electron-Anwendung für R&D, Fertigung und Cloud-Engineering, welche REST-APIs integriert und über Schnittstellen direkt mit Hardware-Komponenten kommuniziert.",
    tags: ["AWS", "TypeScript", "Vue / Nuxt", "Node", "Electron", "InfluxDB"],
  },
  {
    position: "Softwareingenieur im Bereich Management Information Systems",
    org: "ARZ Darmstadt",
    period: "Apr 2022 – Jan 2024",
    description:
      "Testgetriebene und agile Full-Stack Entwicklung (TDD) von Web-Applikationen. Entwicklung von Android Apps und Backends zum Bestellen von Medikamenten. Migration kritischer Dienste auf einen modernen Tech-Stack mit API-first Design und Module Federation.",
    tags: ["TypeScript", "Next.js", "Angular", "K8s / Docker", "Java", "Ruby on Rails", "App Development"],
  },
  {
    position: "Entwickler im Bereich Management Information Systems als Werkstudent",
    org: "ARZ Darmstadt",
    period: "Mar 2020 – Mar 2022",
    description:
      "Erweiterung und Neuentwicklung von Android Apps und Container-based Backends zum Bestellen von Medikamenten sowie die Entwicklung einer testgetriebenen Full-Stack Applikation für die Heimbelieferung.",
    tags: ["TypeScript", "Next.js", "K8s / Docker", "Ruby on Rails", "App Development"],
  },
  {
    position: "Entwickler als Werksstudent",
    org: "EKHN",
    period: "Nov 2015 – Mar 2019",
    description: "Entwicklung einer webbasierten Auswertungsplattform sowie Analyse und automatisierte Datenverarbeitung mit Excel und VBA.",
    tags: ["JavaScript", "PHP", "VBA", "Design"],
  },
];

const education: TimelineItem[] = [
  {
    position: "Master of Science Informatik",
    org: "TU Darmstadt (Master)",
    period: "Apr 2022 – heute",
    description:
      "Schwerpunkt auf Internet-/Web-Systemen und KI/ML mit Vertiefung in Computer Vision, NLP / Deep Learning, statistischem und kontinuierlichem Lernen sowie ergänzenden Modulen in Ambient Intelligence, Quantencomputing und KI-Sicherheit.",
    tags: ["AI", "System Design", "UI/UX"],
  },
  {
    position: "Bachelor of Science Informatik",
    org: "TU Darmstadt (Bachelor)",
    period: "Okt 2015 – Mar 2022",
    description:
      'Fokus auf Software- und Systementwicklung, ergänzt durch Visual Computing, HCI, Embedded Systems und KI. Bachelorarbeit: "Potenzialanalyse von benutzergesteuerten Anpassungs- und Analysewerkzeugen für Wertschöpfungsketten"',
    tags: ["UI/UX", "System Design", "CS Basics"],
  },
];

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  link?: string;
  accentColor: CommonColor;
};

const projects: Project[] = [
  {
    title: "FabApp",
    subtitle: "App für R&D, Fertigung und Cloud Engineering",
    description: "Vielseitige Desktop-Anwendung für Forschung, Fertigung, Support und Cloud-Engineering mit AWS-API-Integration und Hardware-Schnittstellen.",
    tags: ["Electron", "Vue", "Nuxt", "Node", "AWS"],
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
    title: "Spargelhof Mönich Webseite",
    subtitle: "Webseite mit individueller CMS-Lösung",
    description: "Entwicklung einer Webseite mit individueller CMS-Lösung, Verkaufsstellen-Finder und OpenStreetMap-Integration.",
    tags: ["CMS", "Bootstrap", "PHP", "OpenStreetMap"],
    imageSrc: "/proj/proj_MoenichWebsite.jpg",
    link: "http://www.spargelhof-moenich.de/",
    accentColor: "yellow",
  },
  {
    title: "Thor Robot GUI",
    subtitle: "Benutzeroberflache zur Steuerung des Thor-Roboters",
    description: "Electron-App zur prazisen Steuerung eines Open-Source-6-Achsen-Roboters in Zusammenarbeit mit dem FabLab Darmstadt.",
    tags: ["Node", "Electron", "Robotik"],
    imageSrc: "/proj/proj_RobotControlGUI.jpg",
    link: "https://github.com/rabakilgur/ThorRobotGUI",
    accentColor: "amber",
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
    tags: ["Node", "Electron", "OPC-UA"],
    imageSrc: "/proj/proj_OPCFactoryControlPanel.jpg",
    link: "https://github.com/rabakilgur/OPC_Factory_Control_Panel",
    accentColor: "stone",
  },
];

const profileLinks = [
  { label: "LinkedIn", icon: "i-mdi-linkedin", href: "https://www.linkedin.com/in/robin-garbe/" },
  { label: "GitHub", icon: "i-mdi-github", href: "https://github.com/rabakilgur" },
  { label: "CodePen", icon: "i-mdi-codepen", href: "https://codepen.io/rabakilgur" },
  { label: "Telegram", icon: "i-mdi-telegram", href: "https://t.me/rabakilgur" },
];

const contactLinks = [
  { label: "E-Mail", value: "kontakt@uhl.sh", href: "mailto:kontakt@uhl.sh", icon: "i-mdi-email" },
  { label: "Telefon", value: "+49 159 0245 0748", href: "tel:+4915902450748", icon: "i-mdi-phone" },
  { label: "Standort", value: "Darmstadt", href: "https://www.google.com/maps/place/Darmstadt/", icon: "i-mdi-map-marker" },
];

const currentYear = new Date().getFullYear();

const quickStats = [
  { label: "Experience", value: "10+ Years" },
  { label: "Core Domains", value: "Cloud + Fullstack" },
  { label: "Current Role", value: "Senior Cloud & Software Architect" },
];
</script>

<template>
  <div class="min-h-screen dark:bg-neutral-950/75">
    <header>
      <UCard variant="subtle" class="fixed top-3 left-1/2 z-50 max-w-5xl backdrop-blur-xl -translate-x-1/2 bg-default/70" :ui="{ body: 'py-3! px-3!' }">
        <div class="absolute inset-0 opacity-4 dark:opacity-3 bg-noise"></div>
        <div class="flex relative gap-3 justify-between items-center whitespace-nowrap">
          <nav role="navigation">
            <UButton href="#about" as="a" color="neutral" variant="ghost" size="sm" class="max-[434px]:hidden">About</UButton>
            <UButton href="#focus" as="a" color="neutral" variant="ghost" size="sm" class="max-[374px]:hidden">Focus</UButton>
            <UButton href="#experience" as="a" color="neutral" variant="ghost" size="sm">Experience</UButton>
            <UButton href="#projects" as="a" color="neutral" variant="ghost" size="sm" class="max-[328px]:hidden">Projects</UButton>
          </nav>

          <div class="flex gap-2 items-center">
            <UColorModeButton color="primary" variant="soft" />
            <UButton as="a" href="#contact" color="primary" variant="solid" size="sm" class="whitespace-nowrap">Contact</UButton>
          </div>
        </div>
      </UCard>
    </header>

    <main role="main">
      <section class="overflow-hidden relative pt-10">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute -top-24 left-1/2 w-80 h-80 rounded-full blur-3xl -translate-x-1/2 bg-sky/20" />
          <div class="absolute -left-16 top-28 w-64 h-64 rounded-full blur-3xl bg-cyan/20" />
          <div class="absolute top-16 -right-16 w-64 h-64 rounded-full blur-3xl bg-blue/20" />
        </div>
        <UContainer class="relative py-20 max-w-5xl sm:py-24">
          <div class="mx-auto max-w-5xl text-center">
            <UBadge color="primary" variant="soft" size="lg" class="mb-5"> Senior Cloud & Software Architect </UBadge>
            <h1 class="text-4xl font-bold tracking-tight leading-18 text-balance text-highlighted sm:text-6xl">Ich bin Robin, Senior Cloud & Software Architect aus Darmstadt.</h1>
            <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-toned">
              Seit über zehn Jahren entwickle ich Cloud- und Fullstack-Losungen mit Fokus auf saubere Architektur, stabile Systeme und nachhaltige Weiterentwicklung.
            </p>
            <div class="flex flex-wrap gap-3 justify-center items-center mt-9">
              <UButton as="a" href="#projects" color="primary" variant="solid" size="lg"> Projekte ansehen </UButton>
              <UButton as="a" href="#focus" color="secondary" variant="soft" size="lg"> Technischer Fokus </UButton>
            </div>
          </div>
          <div class="grid gap-4 mx-auto mt-12 max-w-5xl md:grid-cols-3">
            <UPageCard v-for="item in quickStats" :key="item.label" spotlight class="card-spotlight-subtle">
              <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="relative">
                <div class="text-base font-semibold text-pretty text-highlighted">
                  {{ item.label }}
                </div>
                <div class="text-[15px] text-pretty text-muted mt-1">
                  {{ item.value }}
                </div>
              </div>
            </UPageCard>
          </div>
        </UContainer>
      </section>

      <UContainer class="py-14 space-y-20 max-w-5xl sm:py-16">
        <section id="about" class="space-y-5 text-center">
          <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">About</h2>
          <UPageCard spotlight class="card-spotlight-subtle">
            <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
            <p class="relative mx-auto max-w-3xl leading-8 text-toned">
              Ich arbeite aktuell bei FlexHome.Energy an einer Plattform für nachhaltigere Energieversorgung. Mein Schwerpunkt liegt auf der Verbindung von nutzerzentriertem Frontend, skalierbarem
              Backend und Cloud-Betrieb.
            </p>
          </UPageCard>
        </section>

        <USeparator class="opacity-0" />

        <section id="focus" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Focus Areas</h2>
          </div>
          <div class="grid gap-4 min-[520px]:grid-cols-2 min-[820px]:grid-cols-3">
            <UPageCard v-for="area in focusAreas" :key="area.title" spotlight :spotlight-color="area.color" class="card-spotlight group">
              <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="overflow-hidden absolute inset-0">
                <UIcon
                  :name="area.icon"
                  class="absolute -bottom-4 -right-4 rotate-14 opacity-3 dark:opacity-1 group-hover:opacity-8 dark:group-hover:opacity-5 text-neutral size-34 group-hover:text-(--spotlight-color) transition-all duration-300" />
              </div>
              <h3 class="relative">
                <UBadge :color="area.color" variant="soft" size="lg" class="mb-1">{{ area.title }}</UBadge>
              </h3>
              <ul class="relative space-y-2 text-sm text-toned">
                <li v-for="detail in area.details" :key="detail">{{ detail }}</li>
              </ul>
            </UPageCard>
          </div>
          <UMarquee :overlay="false" :ui="{ root: '[--gap:--spacing(3)] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]', content: '[--duration:30s]' }">
            <UBadge v-for="tech in shuffledTechnologies" :key="tech.name" :color="tech.color" variant="subtle" size="lg" :icon="tech.icon">
              {{ tech.name }}
            </UBadge>
          </UMarquee>
        </section>

        <USeparator class="opacity-0" />

        <section id="experience" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Experience</h2>
          </div>
          <div class="grid gap-4">
            <UCard
              v-for="item in experience"
              :key="`${item.org}-${item.period}`"
              variant="subtle"
              class="relative pr-4 pl-2 bg-transparent card-timeline"
              :class="{ 'bg-neutral-500/5 dark:bg-neutral-500/10': item.highlight }">
              <div v-if="item.highlight" class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="flex relative flex-col gap-3 justify-between md:items-center md:flex-row">
                <span class="text-muted w-[21ch] lg:w-[35%] shrink-0">{{ item.period }}</span>
                <div class="grow">
                  <h3 class="inline-block text-xl font-semibold">
                    {{ item.org }} <span class="text-lg text-muted">– {{ item.position }}</span>
                  </h3>
                  <p class="mt-2 text-muted">{{ item.description }}</p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <UBadge v-for="tag in item.tags" :key="tag" variant="subtle" size="sm" color="neutral">
                      {{ tag }}
                    </UBadge>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <USeparator class="opacity-0" />

        <section id="education" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Education</h2>
          </div>
          <div class="grid gap-4">
            <UCard
              v-for="item in education"
              :key="`${item.org}-${item.period}`"
              variant="subtle"
              class="relative pr-4 pl-2 bg-transparent card-timeline"
              :class="{ 'bg-neutral-500/5 dark:bg-neutral-500/10': item.highlight }">
              <div class="flex flex-col gap-3 justify-between md:items-center md:flex-row">
                <span class="text-muted w-[21ch] lg:w-[35%] shrink-0">{{ item.period }}</span>
                <UIcon name="i-mdi-university" class="absolute -right-2 -bottom-6 rotate-14 text-neutral-500/7 size-40" />
                <div class="grow">
                  <h3 class="inline-block text-xl font-semibold">
                    {{ item.org }} <span class="text-lg text-muted">– {{ item.position }}</span>
                  </h3>
                  <p class="mt-2 text-muted">{{ item.description }}</p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <UBadge v-for="tag in item.tags" :key="tag" variant="subtle" size="sm" color="neutral">
                      {{ tag }}
                    </UBadge>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <USeparator class="opacity-0" />

        <section id="projects" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Selected Projects</h2>
          </div>
          <div class="grid gap-5">
            <UPageCard
              v-for="(project, index) in projects"
              :key="project.title"
              spotlight
              :spotlight-color="project.accentColor"
              class="p-0 transition-all duration-300 card-spotlight group hover:-translate-y-1"
              :ui="{
                container: `overflow-hidden rounded-lg p-0! flex! flex-row! gap-0! ${index % 2 === 1 ? 'flex-row-reverse!' : ''}`,
              }">
              <div
                class="absolute inset-0 opacity-4"
                :style="`background: linear-gradient(to ${index % 2 === 0 ? 'right' : 'left'}, transparent 60%, var(--ui-color-${project.accentColor}-500));`"></div>
              <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div
                class="hidden overflow-hidden relative w-80 shrink-0 grow-0 md:block"
                :class="{
                  '[clip-path:polygon(0%_0%,99%_0%,89%_100%,0%_100%)]': index % 2 === 0,
                  '[clip-path:polygon(11%_0%,100%_0%,100%_100%,1%_100%)]': index % 2 === 1,
                }">
                <div :style="`background-image: url(${project.imageSrc})`" class="w-full h-full bg-center bg-cover transition-all duration-300 group-hover:rotate-1 group-hover:scale-103" />
              </div>
              <div class="relative px-8 my-5" :class="{ 'md:pl-6': index % 2 === 0 }">
                <h3 class="mb-1 text-xl font-semibold text-highlighted">{{ project.title }}</h3>
                <p class="font-semibold tracking-wide text-toned">
                  {{ project.subtitle }}
                </p>
                <div
                  class="mt-3.5 mb-2.5 w-14 h-[0.3rem] opacity-40 group-hover:opacity-60 rounded-full transition-all duration-300 group-hover:w-18"
                  :style="`background-color: var(--ui-color-${project.accentColor}-500)`"></div>
                <p class="text-sm leading-7 text-toned">{{ project.description }}</p>
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
                  class="absolute -bottom-1 right-4"
                  :aria-label="`Open project '${project.title}' in new tab`">
                  Open Project
                </UButton>
              </div>
            </UPageCard>
          </div>
        </section>

        <USeparator class="opacity-0" />

        <section id="contact" class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-semibold tracking-tight text-highlighted sm:text-4xl">Contact</h2>
          </div>
          <div class="grid grid-cols-1 gap-4 mx-auto max-w-5xl sm:grid-cols-[1fr_14rem]">
            <UPageCard v-for="(entry, index) in contactLinks" :key="entry.label" spotlight class="card-spotlight-subtle sm:col-start-1 group">
              <div v-if="index === 1" class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="flex relative flex-wrap gap-3 justify-between items-center">
                <div>
                  <p class="text-xs font-semibold tracking-wide uppercase text-muted">{{ entry.label }}</p>
                  <a
                    class="block mt-1 text-lg font-semibold transition-colors duration-200 text-highlighted group-hover:underline"
                    :href="entry.href"
                    target="_blank"
                    rel="noreferrer"
                    :aria-label="entry.label">
                    {{ entry.value }}
                  </a>
                </div>
              </div>
              <a class="block overflow-hidden absolute inset-0" :href="entry.href" target="_blank" rel="noreferrer" :aria-label="entry.label">
                <UIcon
                  :name="entry.icon"
                  class="absolute -right-4 -bottom-4 transition-all duration-300 rotate-14 opacity-3 dark:opacity-1 group-hover:opacity-8 dark:group-hover:opacity-5 text-neutral size-24" />
              </a>
            </UPageCard>
            <UPageCard spotlight class="card-spotlight-subtle sm:col-start-2 sm:row-start-1 sm:row-span-3" :ui="{ container: 'md:grid justify-center md:gap-y-1!' }">
              <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <p class="relative text-xs font-semibold tracking-wide uppercase text-muted">Find me online</p>
              <div class="flex relative gap-7 justify-center items-center sm:flex-col">
                <a
                  v-for="link in profileLinks"
                  :key="link.label"
                  :href="link.href"
                  target="_blank"
                  rel="noreferrer"
                  class="pb-3 opacity-70 transition-opacity duration-200 hover:opacity-100 md:pb-0"
                  :aria-label="link.label">
                  <UTooltip :text="link.label" :delay-duration="0" arrow :content="{ side: 'right' }" class="hidden sm:block">
                    <UIcon :name="link.icon" class="size-8" />
                  </UTooltip>
                  <UTooltip :text="link.label" :delay-duration="0" arrow :content="{ side: 'bottom' }" class="block sm:hidden">
                    <UIcon :name="link.icon" class="size-8" />
                  </UTooltip>
                </a>
              </div>
            </UPageCard>
          </div>
        </section>
      </UContainer>
    </main>

    <footer class="py-10 border-t border-default" role="contentinfo">
      <UContainer class="text-sm text-center text-muted">
        <p>Copyright {{ currentYear }}</p>
        <p class="mt-1">Made with ♥ by Robin Uhl</p>
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
.card-spotlight-subtle {
  --spotlight-color: color-mix(in srgb, var(--ui-color-neutral-500), transparent 70%);
}
.card-spotlight {
  &:not(:hover)::before {
    opacity: 0;
  }
  &::before {
    transition: opacity 0.5s ease-in-out;
  }
}
.card-timeline {
  --tw-ring-color: color-mix(in srgb, var(--ui-border) 50%, transparent);
}
</style>
