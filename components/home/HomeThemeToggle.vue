<script setup lang="ts">
import { useDark, usePreferredDark, useToggle } from "@vueuse/core";
import { onMounted, ref } from "vue";

const preferredDark = usePreferredDark();
const isDark = useDark({
  storageKey: "homepage-theme",
});
const toggleDark = useToggle(isDark);

const isClient = ref(false);
onMounted(() => {
  isClient.value = true;
});
</script>

<template>
  <button
    type="button"
    class="fixed right-4 top-4 z-50 rounded-full border border-zinc-300 bg-white/85 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-lg backdrop-blur transition hover:scale-[1.03] hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/85 dark:text-zinc-200 dark:hover:bg-zinc-800"
    aria-label="Dark mode umschalten"
    @click="toggleDark()">
    {{ isClient ? (isDark ? "Dark" : "Light") : preferredDark ? "Theme (prefers dark)" : "Theme (prefers light)" }}
  </button>
</template>
