<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <section>
    <h2 class="m-0 mb-2.5 text-base tracking-wider uppercase">{{ title }}</h2>
    <div class="pl-4">
      <slot />
    </div>
  </section>
</template>
