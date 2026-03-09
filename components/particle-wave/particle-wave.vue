<script lang="ts" setup>
import ParticleWaveModule from "./particle-wave-module";

const canvas = useTemplateRef("canvas");

onMounted(() => {
  new ParticleWaveModule(canvas.value!);
});
</script>

<template>
  <canvas v-once ref="canvas"></canvas>
</template>
