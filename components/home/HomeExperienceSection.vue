<script setup lang="ts">
type TimelineItem = {
  title: string;
  info: string;
  text: string;
  isEducation?: boolean;
  highlighted?: boolean;
};

const timeline: TimelineItem[] = [
  {
    title: "FlexHome.Energy",
    info: "Okt 2024 - heute",
    text: "Senior Cloud and Software Architect bei FlexHome.Energy",
    highlighted: true,
  },
  {
    title: "Solarnative",
    info: "Feb 2024 - Sep 2024",
    text: "Senior DevOps, Cloud and Software Engineer bei Solarnative GmbH",
  },
  {
    title: "ARZ Darmstadt",
    info: "Apr 2022 - Jan 2024",
    text: "Softwareingenieur im Bereich Management Information Systems bei Apotheken-Rechen-Zentrum GmbH",
  },
  {
    title: "Master-Studium an der TU Darmstadt",
    info: "Apr 2022 - heute",
    text: "Master Student Informatik",
    isEducation: true,
  },
  {
    title: "ARZ Darmstadt",
    info: "Mar 2020 - Mar 2022",
    text: "Entwickler im Bereich Management Information Systems als Werksstudent",
  },
  {
    title: "EKHN",
    info: "Nov 2015 - Mar 2019",
    text: "Entwickler als Werksstudent bei der Kirchenverwaltung der Evangelischen Kirche in Hessen und Nassau",
  },
  {
    title: "Bachelor-Studium an der TU Darmstadt",
    info: "Okt 2015 - Mar 2022",
    text: "Bachelor of Science Informatik",
    isEducation: true,
  },
];
</script>

<template>
  <section id="experience" class="scroll-mt-24">
    <h2 class="mb-8 text-3xl font-bold text-center sm:text-4xl">Meine Erfahrung</h2>
    <ol class="relative pl-8 mx-auto max-w-4xl border-l-2 border-zinc-300 dark:border-zinc-700">
      <li v-for="item in timeline" :key="`${item.title}-${item.info}`" class="relative pb-10 last:pb-0">
        <span
          class="absolute -left-[2.2rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-white text-[10px] font-bold dark:bg-zinc-950"
          :class="
            item.highlighted
              ? 'border-blue-500 text-blue-600 dark:text-blue-300'
              : item.isEducation
                ? 'border-amber-500 text-amber-600 dark:text-amber-300'
                : 'border-zinc-400 text-zinc-500 dark:border-zinc-500 dark:text-zinc-300'
          ">
          {{ item.isEducation ? "EDU" : "JOB" }}
        </span>
        <p class="text-sm font-semibold tracking-wide uppercase text-zinc-500 dark:text-zinc-400">{{ item.info }}</p>
        <h3 class="mt-1 text-xl font-semibold">{{ item.title }}</h3>
        <p class="mt-2 text-zinc-600 dark:text-zinc-300">{{ item.text }}</p>
      </li>
    </ol>
  </section>
</template>
