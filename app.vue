<script setup lang="ts">
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
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
