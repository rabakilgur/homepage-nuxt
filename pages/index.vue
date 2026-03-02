<template>
  <div>
    <div class="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 class="mb-4 text-5xl font-bold text-purple-700">Hello World</h1>
      <p class="mb-6 text-xl font-semibold text-gray-700">Tailwind &amp; SCSS test page 🚀</p>
      <div class="p-4 font-mono rounded-lg test-box">If you see this box with a custom color, SCSS works!</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$test-scss-color: #0fc4ac; // teal-400 from Tailwind color palette for demonstration

.test-box {
  border: 2px dashed $test-scss-color; // purple-400
  color: $test-scss-color;
  box-shadow: 0 2px 12px 0 rgba(39, 39, 42, 0.12);
}
</style>
