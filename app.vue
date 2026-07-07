<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt/runtime";
import { SpeedInsights } from "@vercel/speed-insights/nuxt/runtime";

useHead({
  title: "Robin Uhl – Homepage",
  htmlAttrs: { lang: "de" },
  link: [{ rel: "icon", type: "shortcut icon", href: "/favicon/favicon.ico" }],
});
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <Analytics />
    <SpeedInsights />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
