<script setup lang="ts">
const shuffledTechnologies = deterministicShuffleArray(technologies, "name");
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="min-h-screen dark:bg-neutral-950/75">
    <header>
      <UCard variant="subtle" class="fixed inset-x-0 top-3 z-50 mx-auto backdrop-blur-xl max-w-fit bg-default/70" :ui="{ body: 'py-3! px-3!' }">
        <div class="absolute inset-0 opacity-4 dark:opacity-2 bg-noise"></div>
        <div class="flex relative gap-3 justify-between items-center whitespace-nowrap">
          <nav role="navigation">
            <UButton href="#about" as="a" color="neutral" variant="ghost" size="sm" class="max-[434px]:hidden">About</UButton>
            <UButton href="#focus" as="a" color="neutral" variant="ghost" size="sm" class="max-[374px]:hidden">Focus</UButton>
            <UButton href="#experience" as="a" color="neutral" variant="ghost" size="sm">Experience</UButton>
            <UButton href="#projects" as="a" color="neutral" variant="ghost" size="sm" class="max-[328px]:hidden">Projects</UButton>
          </nav>

          <div class="flex gap-2 items-center">
            <UColorModeButton color="primary" variant="soft" />
            <UButton as="a" href="#contact" color="primary" variant="solid" size="sm" class="whitespace-nowrap">Contact</UButton>
          </div>
        </div>
      </UCard>
    </header>

    <main role="main">
      <section class="relative pt-10">
        <div class="overflow-hidden absolute inset-0 pointer-events-none -bottom-26">
          <div class="absolute -left-24 top-30 rounded-full w-130 h-130 blur-[100px] bg-[#0170FE]/15" />
          <div class="absolute -top-24 -right-28 rounded-full w-130 h-130 blur-[100px] bg-[#0088FF]/15" />
        </div>
        <ParticleWave class="absolute top-0 left-0 w-full opacity-100 h-150" />
        <UContainer class="relative pt-20 pb-10 max-w-5xl sm:pt-24 sm:pb-14">
          <div class="mx-auto max-w-5xl text-center">
            <UBadge color="primary" variant="soft" size="lg" class="mb-5 backdrop-blur"> Senior Cloud & Software Architect </UBadge>
            <h1 class="text-4xl font-bold tracking-tight leading-18 text-balance text-highlighted sm:text-6xl text-shadow-[0_0_10px_white] dark:text-shadow-[0_0_10px_var(--color-neutral-950)]">
              Ich bin Robin, Senior Cloud & Software Architect aus Darmstadt.
            </h1>
            <p
              class="mx-auto mt-6 max-w-3xl text-balance text-lg leading-8 text-toned text-shadow-[0_0_1px_white,0_0_3px_white,0_0_6px_white,0_0_12px_white,0_0_24px_white,0_0_48px_white] dark:text-shadow-[0_0_4px_var(--color-neutral-950)]">
              Seit über zehn Jahren entwickle ich Cloud- und Fullstack-Lösungen mit Fokus auf sauberer Architektur, stabilem Systembetrieb und nachhaltiger Weiterentwicklung.
            </p>
            <div class="flex flex-wrap gap-3 justify-center items-center mt-9">
              <UButton as="a" href="#projects" color="primary" variant="solid" size="lg"> Projekte ansehen </UButton>
              <UButton as="a" href="#focus" color="secondary" variant="soft" size="lg" class="backdrop-blur"> Technischer Fokus </UButton>
            </div>
          </div>
          <div class="grid gap-4 mx-auto mt-12 max-w-5xl md:grid-cols-3">
            <UPageCard v-for="item in quickStats" :key="item.label" spotlight class="card-spotlight-subtle">
              <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="relative">
                <div class="text-base font-semibold text-pretty text-highlighted">
                  {{ item.label }}
                </div>
                <div class="text-[15px] text-pretty text-muted mt-1">
                  {{ item.value }}
                </div>
              </div>
            </UPageCard>
          </div>
        </UContainer>
      </section>

      <UContainer class="pb-10 space-y-5 max-w-5xl">
        <Section id="about">
          <Heading>About</Heading>
          <UPageCard spotlight class="card-spotlight-subtle">
            <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
            <div class="flex relative flex-col gap-2 px-4 leading-8 text-toned">
              <p>
                Ich arbeite aktuell bei FlexHome.Energy an einer Plattform für nachhaltigere Energieversorgung. Mir ist es wichtig, Software zu entwickeln, die unternehmensweit echten Impact hat und
                Nutzern wirklich etwas bringt. Dabei liegt mein Fokus darauf, dass Frontend, Backend und Cloud reibungslos zusammenspielen – sauber umgesetzt, nutzerfreundlich, skalierbar und
                zuverlässig.
              </p>
              <p>Großartige Software entsteht in großartigen Teams. Genau deshalb schätze ich es sehr, Teil eines solchen Teams zu sein.</p>
            </div>
          </UPageCard>
        </Section>

        <Section id="focus">
          <Heading>Focus Areas</Heading>
          <div class="grid gap-4 min-[520px]:grid-cols-2 min-[820px]:grid-cols-3">
            <UPageCard v-for="area in focusAreas" :key="area.title" spotlight :spotlight-color="area.color" class="card-spotlight group">
              <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="overflow-hidden absolute inset-0">
                <UIcon
                  :name="area.icon"
                  class="absolute -bottom-4 -right-4 rotate-14 opacity-3 dark:opacity-1 group-hover:opacity-8 dark:group-hover:opacity-5 text-neutral size-34 group-hover:text-(--spotlight-color) transition-all duration-300" />
              </div>
              <h3 class="relative">
                <UBadge :color="area.color" variant="soft" size="lg" class="mb-1">{{ area.title }}</UBadge>
              </h3>
              <ul class="relative space-y-2 text-sm text-toned">
                <li v-for="detail in area.details" :key="detail">{{ detail }}</li>
              </ul>
            </UPageCard>
          </div>
          <UMarquee :overlay="false" :ui="{ root: '[--gap:--spacing(3)] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]', content: '[--duration:30s]' }">
            <UBadge v-for="tech in shuffledTechnologies" :key="tech.name" :color="tech.color" variant="subtle" size="lg" :icon="tech.icon">
              {{ tech.name }}
            </UBadge>
          </UMarquee>
        </Section>

        <Section id="experience">
          <Heading>Experience</Heading>
          <div class="grid gap-4">
            <UCard
              v-for="item in experience"
              :key="`${item.org}-${item.period}`"
              variant="subtle"
              class="relative pr-4 pl-2 bg-transparent card-timeline"
              :class="{ 'bg-neutral-500/3 card-timeline--highlighted': item.highlight }">
              <div v-if="item.highlight" class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="flex relative flex-col gap-3 justify-between md:items-center md:flex-row">
                <span class="text-muted w-[21ch] lg:w-[35%] shrink-0">{{ item.period }}</span>
                <div class="grow">
                  <h3 class="inline-block text-xl font-semibold">
                    {{ item.org }} <span class="text-lg text-muted">– {{ item.position }}</span>
                  </h3>
                  <p class="mt-2 text-muted">{{ item.description }}</p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <UBadge v-for="tag in item.tags" :key="tag" variant="subtle" size="sm" color="neutral">
                      {{ tag }}
                    </UBadge>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </Section>

        <Section id="education">
          <Heading>Education</Heading>
          <div class="grid gap-4">
            <UCard
              v-for="item in education"
              :key="`${item.org}-${item.period}`"
              variant="subtle"
              class="relative pr-4 pl-2 bg-transparent card-timeline"
              :class="{ 'bg-neutral-500/5 dark:bg-neutral-500/10': item.highlight }">
              <div class="flex flex-col gap-3 justify-between md:items-center md:flex-row">
                <span class="text-muted w-[21ch] lg:w-[35%] shrink-0">{{ item.period }}</span>
                <UIcon name="i-mdi-university" class="absolute -right-2 -bottom-6 rotate-14 text-neutral-500/7 size-40" />
                <div class="grow">
                  <h3 class="inline-block text-xl font-semibold">
                    {{ item.org }} <span class="text-lg text-muted">– {{ item.position }}</span>
                  </h3>
                  <p class="mt-2 text-muted">{{ item.description }}</p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <UBadge v-for="tag in item.tags" :key="tag" variant="subtle" size="sm" color="neutral">
                      {{ tag }}
                    </UBadge>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </Section>

        <Section id="projects">
          <Heading>Selected Projects</Heading>
          <div class="grid gap-5">
            <UPageCard
              v-for="(project, index) in projects"
              :key="project.title"
              spotlight
              :spotlight-color="project.accentColor"
              class="p-0 transition-all duration-300 card-spotlight group hover:-translate-y-1"
              :ui="{
                container: `overflow-hidden rounded-lg p-0! flex! flex-row! gap-0! ${index % 2 === 1 ? 'flex-row-reverse!' : ''}`,
              }">
              <div
                class="absolute inset-0 opacity-4"
                :style="`background: linear-gradient(to ${index % 2 === 0 ? 'right' : 'left'}, transparent 60%, var(--ui-color-${project.accentColor}-500));`"></div>
              <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div
                class="hidden overflow-hidden relative w-80 shrink-0 grow-0 md:block"
                :class="{
                  '[clip-path:polygon(0%_0%,99%_0%,89%_100%,0%_100%)]': index % 2 === 0,
                  '[clip-path:polygon(11%_0%,100%_0%,100%_100%,1%_100%)]': index % 2 === 1,
                }">
                <div :style="`background-image: url(${project.imageSrc})`" class="w-full h-full bg-center bg-cover transition-all duration-300 group-hover:rotate-1 group-hover:scale-103" />
              </div>
              <div class="relative px-8 my-5" :class="{ 'md:pl-6': index % 2 === 0 }">
                <h3 class="mb-1 text-xl font-semibold text-highlighted">{{ project.title }}</h3>
                <p class="font-semibold tracking-wide text-toned">
                  {{ project.subtitle }}
                </p>
                <div
                  class="mt-3.5 mb-2.5 w-14 h-[0.3rem] opacity-40 group-hover:opacity-60 rounded-full transition-all duration-300 group-hover:w-18"
                  :style="`background-color: var(--ui-color-${project.accentColor}-500)`"></div>
                <p class="text-sm leading-7 text-toned">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <UBadge v-for="tag in project.tags" :key="`${project.title}-${tag}`" variant="subtle" size="sm" :color="project.accentColor">
                    {{ tag }}
                  </UBadge>
                </div>
                <UButton
                  v-if="project.link"
                  as="a"
                  :href="project.link"
                  target="_blank"
                  rel="noreferrer"
                  :color="project.accentColor"
                  variant="subtle"
                  size="sm"
                  icon="i-mdi-open-in-new"
                  class="absolute -bottom-1 right-4"
                  :aria-label="`Open project '${project.title}' in new tab`">
                  Open Project
                </UButton>
              </div>
            </UPageCard>
          </div>
        </Section>

        <Section id="contact">
          <Heading>Contact</Heading>
          <div class="grid grid-cols-1 gap-4 mx-auto max-w-5xl sm:grid-cols-[1fr_14rem]">
            <UPageCard v-for="(entry, index) in contactLinks" :key="entry.label" spotlight class="card-spotlight-subtle sm:col-start-1 group">
              <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="flex relative flex-wrap gap-3 justify-between items-center">
                <div>
                  <p class="text-xs font-semibold tracking-wide uppercase text-muted">{{ entry.label }}</p>
                  <a
                    class="block mt-1 text-lg font-semibold transition-colors duration-200 text-highlighted group-hover:underline"
                    :href="entry.href"
                    target="_blank"
                    rel="noreferrer"
                    :aria-label="entry.label">
                    {{ entry.value }}
                  </a>
                </div>
              </div>
              <a class="block overflow-hidden absolute inset-0" :href="entry.href" target="_blank" rel="noreferrer" :aria-label="entry.label">
                <UIcon
                  :name="entry.icon"
                  class="absolute -right-4 -bottom-4 transition-all duration-300 rotate-14 opacity-3 dark:opacity-1 group-hover:opacity-8 dark:group-hover:opacity-5 text-neutral size-24" />
              </a>
            </UPageCard>
            <UPageCard spotlight class="card-spotlight-subtle sm:col-start-2 sm:row-start-1 sm:row-span-3" :ui="{ container: 'md:grid justify-center md:gap-y-1!' }">
              <div class="absolute inset-0 mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <p class="relative text-xs font-semibold tracking-wide uppercase text-muted">Find me online</p>
              <div class="flex relative gap-7 justify-center items-center sm:flex-col">
                <a
                  v-for="link in profileLinks"
                  :key="link.label"
                  :href="link.href"
                  target="_blank"
                  rel="noreferrer"
                  class="pb-3 opacity-70 transition-opacity duration-200 hover:opacity-100 md:pb-0"
                  :aria-label="link.label">
                  <UTooltip :text="link.label" :delay-duration="0" arrow :content="{ side: 'right' }" class="hidden sm:block">
                    <UIcon :name="link.icon" class="size-8" />
                  </UTooltip>
                  <UTooltip :text="link.label" :delay-duration="0" arrow :content="{ side: 'bottom' }" class="block sm:hidden">
                    <UIcon :name="link.icon" class="size-8" />
                  </UTooltip>
                </a>
              </div>
            </UPageCard>
          </div>
        </Section>
      </UContainer>
    </main>

    <footer class="py-10 border-t border-default" role="contentinfo">
      <UContainer class="text-sm text-center text-muted">
        <p>Copyright {{ currentYear }}</p>
        <p class="mt-1">Made with ♥ by Robin Uhl</p>
        <div class="flex gap-2 justify-center items-center mt-4">
          <UButton as="a" href="#about" variant="ghost" color="neutral" size="sm">About</UButton>
          <UButton as="a" href="#projects" variant="ghost" color="neutral" size="sm">Projects</UButton>
          <UButton as="a" href="#contact" variant="ghost" color="neutral" size="sm">Contact</UButton>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<style lang="scss">
.card-spotlight-subtle {
  --spotlight-color: color-mix(in srgb, var(--ui-color-neutral-500), transparent 70%);
}
.card-spotlight {
  &:not(:hover)::before {
    opacity: 0;
  }
  &::before {
    transition: opacity 0.5s ease-in-out;
  }
}
.card-timeline:not(.card-timeline--highlighted) {
  --tw-ring-color: color-mix(in srgb, var(--ui-border) 50%, transparent);
}
.dark {
  .card-spotlight-subtle > [data-slot="spotlight"],
  .card-spotlight > [data-slot="spotlight"],
  .card-timeline--highlighted {
    --bg-lighter: oklch(from var(--ui-bg) clamp(0, calc(l + 0.02), 1) c h);
    --bg-darker: oklch(from var(--ui-bg) clamp(0, calc(l - 0.02), 1) c h);
    --bg-lighter-step: color-mix(in oklab, var(--bg-lighter) 90%, transparent);
    --bg-darker-step: color-mix(in oklab, var(--bg-darker) 90%, transparent);
    background: linear-gradient(175deg, var(--bg-lighter), var(--bg-darker));
  }
}

.gradient-circle {
  --size: 26rem;
  --color: var(--ui-blue);
  --color-center: color-mix(in srgb, var(--color) 10%, transparent);
  --color-edge: color-mix(in srgb, var(--color) 4%, transparent);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-image: radial-gradient(circle calc(var(--size) / 2) at center, var(--color-center) 0%, var(--color-center) 20%, transparent 100%);
  filter: url(#dither3);
}
</style>
