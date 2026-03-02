<script setup lang="ts">
useHead({
  title: "Robin Uhl – Homepage",
  htmlAttrs: { lang: "de" },
  link: [{ rel: "icon", type: "shortcut icon", href: "/favicon/favicon.ico" }],
});
</script>

<template>
  <div>
    <LoaderIndicator />
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
