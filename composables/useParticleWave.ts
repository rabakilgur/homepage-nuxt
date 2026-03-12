export function useParticleWave(canvas: Ref<HTMLCanvasElement | null>) {
  const particleWave = ref<ParticleWaveVisual | null>(null);

  onMounted(() => {
    if (!canvas.value) {
      throw new Error("Canvas element is required");
    }
    particleWave.value = new ParticleWaveVisual(canvas.value);
    particleWave.value.start();
  });

  onUnmounted(() => {
    particleWave.value?.stop();
  });
}
