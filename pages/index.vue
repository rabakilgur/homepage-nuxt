<template>
  <div class="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
    <HomeThemeToggle />
    <HomeHero />

    <main class="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-16 sm:py-20">
      <HomeAboutSection />
      <HomeFocusAreasSection />
      <HomeExperienceSection />
      <HomeProjectsSection />
      <HomeLinksSection />
      <HomeContactSection />
    </main>

    <HomeFooter />
  </div>
</template>
