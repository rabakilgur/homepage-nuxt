<script setup lang="ts">
type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  link?: string;
  right?: boolean;
};

const projects: Project[] = [
  {
    title: "FabApp",
    subtitle: "Interne App fuer R&D, Fertigung und Cloud-Engineering",
    description: "Bei Solarnative entwickelte ich eine vielseitige Electron-Anwendung fuer Forschung, Fertigung, Support und Cloud-Engineering mit AWS-API-Integration und Hardware-Schnittstellen.",
    tags: ["Electron", "Vue", "Node.js", "AWS"],
    imageSrc: "/proj/proj_FabApp.jpg",
  },
  {
    title: "Apojet App",
    subtitle: "React Native Apojet App fuer Android",
    description: "Fuer das ARZ erweiterte ich die bestehende Apojet App und entwickelte eine neue Android App mit React Native.",
    tags: ["App", "React Native", "Android"],
    imageSrc: "/proj/proj_ApojetAndroidApp.png",
    link: "https://play.google.com/store/apps/details?id=de.cida.mobile.apojet",
    right: true,
  },
  {
    title: "Spargelhof Moenich Webseite",
    subtitle: "Neue Webseite mit individueller CMS-Loesung",
    description: "Neben den klassischen Seiten entstand eine massgeschneiderte CMS-Loesung in PHP mit Verkaufsstellen-Finder und OpenStreetMap-Integration.",
    tags: ["Frontend", "Bootstrap", "PHP"],
    imageSrc: "/proj/proj_MoenichWebsite.jpg",
    link: "http://www.spargelhof-moenich.de/",
  },
  {
    title: "Thor Robot GUI",
    subtitle: "Benutzeroberflaeche zur Steuerung eines Thor Roboters",
    description: "Electron-App zur praezisen Steuerung eines 3D-gedruckten Open-Source 6-Achsen-Roboters im FabLab Darmstadt Umfeld.",
    tags: ["Node", "Electron", "Robotik"],
    imageSrc: "/proj/proj_RobotControlGUI.jpg",
    link: "https://github.com/rabakilgur/ThorRobotGUI",
    right: true,
  },
  {
    title: "Dice Project App",
    subtitle: "Wuerfel-App fuer iOS, Android und Web",
    description: "Aus einer einfachen Idee wurde eine eigene App fuer mehrere Plattformen und mein Einstieg in die App-Entwicklung.",
    tags: ["PhoneGap", "Hybrid App", "Framework 7"],
    imageSrc: "/proj/proj_DiceProjectApp.jpg",
    link: "https://robin-garbe.de/p/dice_project",
  },
  {
    title: "OPC Factory Control Panel",
    subtitle: "Programm zur Steuerung von Maschinen via OPC-UA",
    description: "Entwickelt im Rahmen eines Bachelorpraktikums zur dynamischen Auftragsverteilung auf industrielle Maschinen.",
    tags: ["Node", "Electron", "OPC-UA"],
    imageSrc: "/proj/proj_OPCFactoryControlPanel.jpg",
    link: "https://github.com/rabakilgur/OPC_Factory_Control_Panel",
    right: true,
  },
];
</script>

<template>
  <section id="projects" class="scroll-mt-24">
    <h2 class="mb-8 text-3xl font-bold text-center sm:text-4xl">Projekte</h2>
    <div class="space-y-8">
      <article
        v-for="project in projects"
        :key="project.title"
        class="overflow-hidden bg-white rounded-3xl border shadow-sm transition border-zinc-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
        <div class="grid gap-0 md:grid-cols-2">
          <div :class="project.right ? 'md:order-2' : ''" class="relative min-h-56 bg-zinc-100 dark:bg-zinc-800">
            <NuxtImg :src="project.imageSrc" :alt="project.title" class="object-cover w-full h-full" loading="lazy" />
          </div>

          <div :class="project.right ? 'md:order-1' : ''" class="p-6 sm:p-8">
            <h3 class="text-2xl font-bold">{{ project.title }}</h3>
            <p class="mt-1 text-sm font-semibold tracking-wide uppercase text-zinc-500 dark:text-zinc-400">{{ project.subtitle }}</p>
            <p class="mt-4 text-zinc-600 dark:text-zinc-300">{{ project.description }}</p>
            <ul class="flex flex-wrap gap-2 mt-5">
              <li v-for="tag in project.tags" :key="`${project.title}-${tag}`" class="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                {{ tag }}
              </li>
            </ul>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noreferrer"
              class="inline-flex mt-5 text-sm font-semibold text-blue-600 underline decoration-blue-400/60 underline-offset-4 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              Projekt ansehen
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
