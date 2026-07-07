<script setup lang="ts">
const { t, tm } = useI18n();
const shuffledTechnologies = deterministicShuffleArray(technologies, "name");
const currentYear = new Date().getFullYear();

const contactLinks = computed<ContactLink[]>(() =>
  (tm("contactLinks") as ContactLink[]).map((link, index) => ({
    label: t(`contactLinks[${index}].label`),
    value: link.value ? t(`contactLinks[${index}].value`) : undefined,
    href: link.href ? t(`contactLinks[${index}].href`) : undefined,
    icon: t(`contactLinks[${index}].icon`),
    action: link.action ? (t(`contactLinks[${index}].action`) as ContactLinkAction) : undefined,
  })),
);
</script>

<template>
  <div class="min-h-screen dark:bg-neutral-950/75">
    <header>
      <div class="flex fixed inset-x-0 top-3 z-50 gap-3 mx-auto max-w-fit">
        <UTooltip :text="$t('cvTooltip')" arrow :delay-duration="300" :content="{ side: 'bottom', sideOffset: 3 }">
          <NuxtLink href="/cv" as="a" color="neutral" variant="ghost" size="sm" class="max-[434px]:hidden flex group">
            <UCard variant="subtle" class="w-16 backdrop-blur-xl bg-default/70" :ui="{ root: 'flex items-center justify-center', body: 'p-0!' }">
              <div class="flex gap-1 justify-center items-center px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors group-hover:bg-elevated">CV</div>
            </UCard>
          </NuxtLink>
        </UTooltip>
        <UCard variant="subtle" class="backdrop-blur-xl bg-default/70" :ui="{ body: 'px-3! py-2.5!' }">
          <div class="absolute inset-0 rounded-lg opacity-4 dark:opacity-2 bg-noise"></div>
          <div class="flex relative gap-3 justify-between items-center whitespace-nowrap">
            <nav role="navigation">
              <UButton href="#about" :locale="false" as="a" color="neutral" variant="ghost" size="sm" class="max-[434px]:hidden">About</UButton>
              <UButton href="#focus" :locale="false" as="a" color="neutral" variant="ghost" size="sm" class="max-[374px]:hidden">Focus</UButton>
              <UButton href="#experience" :locale="false" as="a" color="neutral" variant="ghost" size="sm">Experience</UButton>
              <UButton href="#projects" :locale="false" as="a" color="neutral" variant="ghost" size="sm" class="max-[328px]:hidden">Projects</UButton>
            </nav>

            <div class="flex gap-2 items-center">
              <UColorModeButton color="primary" variant="soft" class="cursor-pointer!" />
              <UButton as="a" href="#contact" :locale="false" color="primary" variant="solid" size="sm" class="whitespace-nowrap">Contact</UButton>
            </div>
          </div>
        </UCard>
      </div>

      <ButtonLocale class="fixed top-4 right-4 z-50" />
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
            <UBadge color="primary" variant="soft" size="lg" class="mb-5 backdrop-blur">
              {{ $t("currentRole") }}
            </UBadge>
            <h1 class="text-4xl font-bold tracking-tight leading-18 text-balance text-highlighted sm:text-6xl text-shadow-[0_0_10px_white] dark:text-shadow-[0_0_10px_var(--color-neutral-950)]">
              {{ $t("heading") }}
            </h1>
            <p
              class="mx-auto mt-6 max-w-3xl text-balance text-lg leading-8 text-toned text-shadow-[0_0_1px_white,0_0_3px_white,0_0_6px_white,0_0_12px_white,0_0_24px_white,0_0_48px_white] dark:text-shadow-[0_0_4px_var(--color-neutral-950)]">
              {{ $t("subheading") }}
            </p>
            <div class="flex flex-wrap gap-3 justify-center items-center mt-9">
              <UButton as="a" href="#projects" :locale="false" color="primary" variant="solid" size="lg"> {{ $t("projectsBtn") }} </UButton>
              <UButton as="a" href="#focus" :locale="false" color="secondary" variant="soft" size="lg" class="backdrop-blur"> {{ $t("focusBtn") }} </UButton>
            </div>
          </div>
          <div class="grid gap-4 mx-auto mt-12 max-w-5xl md:grid-cols-3">
            <UPageCard v-for="item in $tm('quickStats')" :key="$rt(item.label)" spotlight class="card-spotlight-subtle">
              <div class="absolute inset-0 rounded-lg mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="relative">
                <div class="text-base font-semibold text-pretty text-highlighted">
                  {{ $rt(item.label) }}
                </div>
                <div class="text-[15px] text-pretty text-muted mt-1">
                  {{ $rt(item.value) }}
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
            <div class="absolute inset-0 rounded-lg mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
            <div class="flex relative flex-col gap-2 px-4 leading-8 text-toned">
              <p v-for="paragraph in $t('about').split('\n\n')" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </UPageCard>
        </Section>

        <Section id="focus">
          <Heading>Focus Areas</Heading>
          <div class="grid gap-4 min-[520px]:grid-cols-2 min-[820px]:grid-cols-3">
            <UPageCard v-for="area in focusAreas" :key="area.title" spotlight :spotlight-color="area.color" class="card-spotlight group">
              <div class="absolute inset-0 rounded-lg mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
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
              v-for="item in $tm('experience')"
              :key="`${$rt(item.org)}-${$rt(item.period)}`"
              variant="subtle"
              class="relative pr-4 pl-2 bg-transparent card-timeline"
              :class="{ 'bg-neutral-500/3 card-timeline--highlighted': item.highlight }">
              <div v-if="item.highlight" class="absolute inset-0 rounded-lg mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="flex relative flex-col gap-3 justify-between md:items-center md:flex-row">
                <span class="text-muted w-[21ch] lg:w-[35%] shrink-0">{{ $rt(item.period) }}</span>
                <div class="grow">
                  <h3 class="inline-block text-xl font-semibold">
                    {{ $rt(item.org) }} <span class="text-lg text-muted">– {{ $rt(item.position) }}</span>
                  </h3>
                  <p class="mt-2 text-muted">{{ $rt(item.description) }}</p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <UBadge v-for="tag in item.tags" :key="tag" variant="subtle" size="sm" color="neutral">
                      {{ $rt(tag) }}
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
            <UCard v-for="item in $tm('education')" :key="`${$rt(item.org)}-${$rt(item.period)}`" variant="subtle" class="relative pr-4 pl-2 bg-transparent card-timeline">
              <div class="flex flex-col gap-3 justify-between md:items-center md:flex-row">
                <span class="text-muted w-[21ch] lg:w-[35%] shrink-0">{{ $rt(item.period) }}</span>
                <UIcon name="i-mdi-university" class="absolute -right-2 -bottom-6 rotate-14 text-neutral-500/7 size-40" />
                <div class="grow">
                  <h3 class="inline-block text-xl font-semibold">
                    {{ $rt(item.org) }} <span class="text-lg text-muted">– {{ $rt(item.position) }}</span>
                  </h3>
                  <p class="mt-2 text-muted">{{ $rt(item.description) }}</p>
                  <div class="flex flex-wrap gap-2 mt-4">
                    <UBadge v-for="tag in item.tags" :key="tag" variant="subtle" size="sm" color="neutral">
                      {{ $rt(tag) }}
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
              v-for="(project, index) in $tm('projects')"
              :key="$rt(project.title)"
              spotlight
              :spotlight-color="$rt(project.accentColor) as CommonColor"
              class="p-0 transition-all duration-300 card-spotlight group hover:-translate-y-1"
              :ui="{
                container: `overflow-hidden rounded-lg p-0! flex! flex-row! gap-0! ${Number(index) % 2 === 1 ? 'flex-row-reverse!' : ''}`,
              }">
              <div
                class="absolute inset-0 opacity-4"
                :style="`background: linear-gradient(to ${Number(index) % 2 === 0 ? 'right' : 'left'}, transparent 60%, var(--ui-color-${$rt(project.accentColor)}-500));`"></div>
              <div class="absolute inset-0 rounded-lg mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div
                class="hidden overflow-hidden relative w-80 shrink-0 grow-0 md:block"
                :class="{
                  '[clip-path:polygon(0%_0%,99%_0%,89%_100%,0%_100%)]': Number(index) % 2 === 0,
                  '[clip-path:polygon(11%_0%,100%_0%,100%_100%,1%_100%)]': Number(index) % 2 === 1,
                }">
                <div :style="`background-image: url(${$rt(project.imageSrc)})`" class="w-full h-full bg-center bg-cover transition-all duration-300 group-hover:rotate-1 group-hover:scale-103" />
              </div>
              <div class="relative px-8 my-5" :class="{ 'md:pl-6': Number(index) % 2 === 0 }">
                <h3 class="mb-1 text-xl font-semibold text-highlighted">{{ $rt(project.title) }}</h3>
                <p class="font-semibold tracking-wide text-toned">
                  {{ $rt(project.subtitle) }}
                </p>
                <div
                  class="mt-3.5 mb-2.5 w-14 h-[0.3rem] opacity-40 group-hover:opacity-60 rounded-full transition-all duration-300 group-hover:w-18"
                  :style="`background-color: var(--ui-color-${$rt(project.accentColor)}-500)`"></div>
                <p class="text-sm leading-7 text-toned">{{ $rt(project.description) }}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <UBadge v-for="tag in project.tags" :key="`${$rt(project.title)}-${$rt(tag)}`" variant="subtle" size="sm" :color="$rt(project.accentColor) as CommonColor">
                    {{ $rt(tag) }}
                  </UBadge>
                </div>
                <UButton
                  v-if="project.link"
                  as="a"
                  :href="$rt(project.link)"
                  target="_blank"
                  rel="noreferrer"
                  :color="$rt(project.accentColor) as CommonColor"
                  variant="subtle"
                  size="sm"
                  icon="i-mdi-open-in-new"
                  class="absolute -bottom-1 right-4"
                  :aria-label="`Open project '${$rt(project.title)}' in new tab`">
                  Open Project
                </UButton>
              </div>
            </UPageCard>
          </div>
        </Section>

        <Section id="contact">
          <Heading>Contact</Heading>
          <div class="grid grid-cols-1 gap-4 mx-auto max-w-5xl sm:grid-cols-[1fr_14rem]">
            <UPageCard v-for="entry in contactLinks" :key="entry.label" spotlight class="card-spotlight-subtle sm:col-start-1 group">
              <div class="absolute inset-0 rounded-lg mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
              <div class="flex relative flex-wrap gap-3 justify-between items-center">
                <div class="relative z-10" :class="{ 'pointer-events-none': isActionContactLink(entry) }">
                  <p class="text-xs font-semibold tracking-wide uppercase text-muted">{{ entry.label }}</p>
                  <a
                    v-if="entry.href"
                    class="block mt-1 text-lg font-semibold transition-colors duration-200 text-highlighted group-hover:underline"
                    :href="entry.href"
                    target="_blank"
                    rel="noreferrer"
                    :aria-label="entry.label">
                    {{ entry.value }}
                  </a>
                  <ContactEmail
                    v-else-if="isEmailContactLink(entry)"
                    variant="block"
                    display-only
                    class="text-highlighted group-hover:underline" />
                  <ContactPhone
                    v-else-if="isPhoneContactLink(entry)"
                    variant="block"
                    display-only
                    class="text-highlighted group-hover:underline" />
                </div>
              </div>
              <a v-if="entry.href" class="block overflow-hidden absolute inset-0" :href="entry.href" target="_blank" rel="noreferrer" :aria-label="entry.label">
                <UIcon
                  :name="entry.icon"
                  class="absolute -right-4 -bottom-4 transition-all duration-300 rotate-14 opacity-3 dark:opacity-1 group-hover:opacity-8 dark:group-hover:opacity-5 text-neutral size-24" />
              </a>
              <button
                v-else-if="isActionContactLink(entry)"
                type="button"
                class="block overflow-hidden absolute inset-0 p-0 bg-transparent border-0 cursor-pointer"
                :aria-label="entry.label"
                @click="openContactLink(entry)">
                <UIcon
                  :name="entry.icon"
                  class="absolute -right-4 -bottom-4 transition-all duration-300 rotate-14 opacity-3 dark:opacity-1 group-hover:opacity-8 dark:group-hover:opacity-5 text-neutral size-24 pointer-events-none" />
              </button>
            </UPageCard>
            <UPageCard spotlight class="card-spotlight-subtle sm:col-start-2 sm:row-start-1 sm:row-span-3" :ui="{ container: 'md:grid justify-center md:gap-y-1!' }">
              <div class="absolute inset-0 rounded-lg mix-blend-multiply brightness-150 dark:brightness-100 opacity-4 dark:opacity-25 bg-noise"></div>
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
          <UButton as="a" href="#about" :locale="false" variant="ghost" color="neutral" size="sm">About</UButton>
          <UButton as="a" href="#projects" :locale="false" variant="ghost" color="neutral" size="sm">Projects</UButton>
          <UButton as="a" href="#contact" :locale="false" variant="ghost" color="neutral" size="sm">Contact</UButton>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<style lang="scss">
.card-spotlight-wrapper {
  --spotlight-color: color-mix(in srgb, var(--ui-color-neutral-500), transparent 95%);
  --padding: 0.5rem;
  backdrop-filter: blur(24px);
  border-radius: calc(var(--ui-radius) + var(--padding) + 1px);
  background: transparent;
  > [data-slot="spotlight"] {
    background: color-mix(in srgb, var(--ui-bg), transparent 70%);
  }
  > [data-slot="container"] {
    padding: var(--padding);
  }
}
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
