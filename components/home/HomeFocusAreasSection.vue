<script setup lang="ts">
const focusAreas = [
  {
    title: "Frontend",
    details: ["React, Next.js, Preact", "Vue, Nuxt", "Bootstrap"],
  },
  {
    title: "Backend",
    details: ["Node.js, Deno", "Ruby on Rails"],
  },
  {
    title: "Mobile",
    details: ["React Native", "Native Android", "Ionic, Cordova, PhoneGap"],
  },
  {
    title: "Database",
    details: ["PostgreSQL", "MySQL", "S3 Buckets"],
  },
  {
    title: "DevOps",
    details: ["Docker", "Git", "Agile Development"],
  },
  {
    title: "Design",
    details: ["Modern Web Design", "Adobe Creative Cloud"],
  },
];

const skills = [
  {
    name: "TypeScript and JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Ruby on Rails",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg",
  },
  {
    name: "Deno",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Deno_2021.svg",
  },
  {
    name: "React, Next.js, React Native",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Electron",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg",
  },
  {
    name: "PostgreSQL",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "PHP",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    name: "Vue and Nuxt",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
  },
  {
    name: "Docker",
    img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic-480x411.png.webp",
  },
  {
    name: "Adobe Creative Cloud",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg",
  },
];
</script>

<template>
  <section class="scroll-mt-24">
    <h3 class="mb-8 text-2xl font-bold text-center sm:text-3xl">Was ich mache</h3>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="area in focusAreas"
        :key="area.title"
        class="p-5 bg-white rounded-2xl border shadow-sm transition border-zinc-200 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
        <h4 class="mb-3 text-lg font-semibold">{{ area.title }}</h4>
        <ul class="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          <li v-for="detail in area.details" :key="detail">{{ detail }}</li>
        </ul>
      </article>
    </div>

    <div class="my-10 h-px bg-gradient-to-r from-transparent to-transparent via-zinc-300 dark:via-zinc-700" />

    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <article
        v-for="skill in skills"
        :key="skill.name"
        class="p-3 text-center bg-white rounded-xl border shadow-sm transition group border-zinc-200 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
        <div class="flex justify-center items-center p-3 rounded-lg aspect-square bg-zinc-50 dark:bg-zinc-800/70">
          <img :src="skill.img" :alt="skill.name" class="object-contain max-w-full max-h-full" loading="lazy" />
        </div>
        <p class="mt-2 text-xs font-medium leading-5 text-zinc-600 dark:text-zinc-300">{{ skill.name }}</p>
      </article>
    </div>
  </section>
</template>
