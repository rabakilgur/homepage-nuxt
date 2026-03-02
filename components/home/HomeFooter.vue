<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="px-6 py-10 text-sm text-center border-t border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
    Copyright {{ currentYear }}<br />
    Made with heart by Robin Uhl
  </footer>
</template>
