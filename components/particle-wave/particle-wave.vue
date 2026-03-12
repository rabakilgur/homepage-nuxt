<script lang="ts" setup>
const canvas = useTemplateRef("canvas");
useParticleWave(canvas);
</script>

<template>
  <canvas v-once ref="canvas" class="particlewave"></canvas>
</template>

<style scoped>
.particlewave {
  animation: fade-in 1s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
