<script setup lang="ts">
const profileLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/robin-garbe/" },
  { name: "GitHub", href: "https://github.com/rabakilgur" },
  { name: "CodePen", href: "https://codepen.io/rabakilgur" },
  { name: "Telegram", href: "https://t.me/rabakilgur" },
];
</script>

<template>
  <section id="links" class="scroll-mt-24">
    <h2 class="mb-8 text-3xl font-bold text-center sm:text-4xl">Links</h2>
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <a
        v-for="link in profileLinks"
        :key="link.name"
        :href="link.href"
        target="_blank"
        rel="noreferrer"
        class="group flex aspect-square items-center justify-center rounded-[28%] border border-zinc-200 bg-white p-3 text-center text-sm font-bold tracking-wide text-zinc-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
        <span class="transition group-hover:scale-105">{{ link.name }}</span>
      </a>
    </div>
  </section>
</template>
