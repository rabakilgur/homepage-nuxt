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
  <div class="dark:bg-neutral-950/75 min-h-screen">
    <header>
      <div class="inset-x-0 top-3 gap-3 fixed z-50 mx-auto flex max-w-fit">
        <UTooltip
          :text="$t('cvTooltip')"
          arrow
          :delay-duration="300"
          :content="{ side: 'bottom', sideOffset: 3 }"
        >
          <NuxtLink
            href="/cv"
            as="a"
            color="neutral"
            variant="ghost"
            size="sm"
            class="group flex max-[468px]:hidden"
          >
            <UCard
              variant="subtle"
              class="w-16 backdrop-blur-xl bg-default/70"
              :ui="{ root: 'flex items-center justify-center', body: 'p-0!' }"
            >
              <div
                class="gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md group-hover:bg-elevated flex items-center justify-center transition-colors"
              >
                CV
              </div>
            </UCard>
          </NuxtLink>
        </UTooltip>
        <UCard
          variant="subtle"
          class="backdrop-blur-xl bg-default/70"
          :ui="{
            body: 'px-3! py-2.5! max-[37rem]:px-2! max-[37rem]:py-1.5! max-[24.5rem]:px-1! max-[24.5rem]:py-1!',
          }"
        >
          <div class="inset-0 rounded-lg bg-noise absolute opacity-4 dark:opacity-2"></div>
          <div
            class="gap-3 max-[37rem]:gap-1 max-[24.5rem]:gap-0.5 relative flex items-center justify-between whitespace-nowrap"
          >
            <nav role="navigation">
              <UButton
                href="#about"
                :locale="false"
                as="a"
                color="neutral"
                variant="ghost"
                size="sm"
                class="max-[434px]:hidden"
              >
                About
              </UButton>
              <UButton
                href="#focus"
                :locale="false"
                as="a"
                color="neutral"
                variant="ghost"
                size="sm"
                class="max-[374px]:hidden"
              >
                Focus
              </UButton>
              <UButton
                href="#experience"
                :locale="false"
                as="a"
                color="neutral"
                variant="ghost"
                size="sm"
              >
                Experience
              </UButton>
              <UButton
                href="#projects"
                :locale="false"
                as="a"
                color="neutral"
                variant="ghost"
                size="sm"
                class="max-[328px]:hidden"
              >
                Projects
              </UButton>
            </nav>

            <div class="gap-2 flex items-center">
              <UColorModeButton color="primary" variant="soft" class="cursor-pointer!" />
              <UButton
                as="a"
                href="#contact"
                :locale="false"
                color="primary"
                variant="solid"
                size="sm"
                class="whitespace-nowrap"
                >Contact</UButton
              >
            </div>
          </div>
        </UCard>
      </div>

      <ButtonLocale
        class="top-4 right-4 max-[40rem]:top-16 fixed z-50 max-[40rem]:absolute max-[40rem]:z-49"
      />
    </header>

    <main role="main">
      <section class="pt-10 relative">
        <div class="inset-0 -bottom-26 pointer-events-none absolute overflow-hidden">
          <div
            class="-left-24 top-30 w-130 h-130 absolute rounded-full bg-[#0170FE]/15 blur-[100px]"
          />
          <div
            class="-top-24 -right-28 w-130 h-130 absolute rounded-full bg-[#0088FF]/15 blur-[100px]"
          />
        </div>
        <ParticleWave class="top-0 left-0 h-150 absolute w-full opacity-100" />
        <UContainer class="pt-20 pb-10 max-w-5xl sm:pt-24 sm:pb-14 relative">
          <div class="max-w-5xl mx-auto text-center">
            <UBadge color="primary" variant="soft" size="lg" class="mb-5 backdrop-blur">
              {{ $t("currentRole") }}
            </UBadge>
            <h1
              class="text-4xl font-bold tracking-tight leading-13 sm:leading-18 text-highlighted sm:text-6xl text-balance text-shadow-[0_0_10px_white] dark:text-shadow-[0_0_10px_var(--color-neutral-950)]"
            >
              {{ $t("heading") }}
            </h1>
            <p
              class="mt-6 max-w-3xl text-lg leading-8 text-toned mx-auto text-balance text-shadow-[0_0_1px_white,0_0_3px_white,0_0_6px_white,0_0_12px_white,0_0_24px_white,0_0_48px_white] dark:text-shadow-[0_0_4px_var(--color-neutral-950)]"
            >
              {{ $t("subheading") }}
            </p>
            <div class="gap-3 mt-9 flex flex-wrap items-center justify-center">
              <UButton
                as="a"
                href="#projects"
                :locale="false"
                color="primary"
                variant="solid"
                size="lg"
              >
                {{ $t("projectsBtn") }}
              </UButton>
              <UButton
                as="a"
                href="#focus"
                :locale="false"
                color="secondary"
                variant="soft"
                size="lg"
                class="backdrop-blur"
              >
                {{ $t("focusBtn") }}
              </UButton>
            </div>
          </div>
          <div class="gap-4 mt-18 max-w-5xl md:grid-cols-3 mx-auto grid">
            <div
              v-for="(item, index) in $tm('quickStats')"
              :key="$rt(item.label)"
              class="relative flex flex-col items-center justify-center text-center"
            >
              <div
                class="blur-2xl bg-slate-500/10 dark:bg-slate-500 absolute -z-1 rounded-full"
                :class="{
                  'h-[70%] w-[80%] rotate-10': index === 0,
                  'h-[109%] w-[80%] -rotate-5': index === 1,
                  'h-[70%] w-[80%] rotate-2': index === 2,
                }"
              ></div>
              <div class="text-2xl font-semibold text-highlighted text-balance">
                {{ $rt(item.value) }}
              </div>
              <div class="text-muted mt-1 text-[15px] text-balance">
                {{ $rt(item.label) }}
              </div>
            </div>
          </div>
        </UContainer>
      </section>

      <UContainer class="pb-10 space-y-5 max-w-5xl">
        <Section id="about">
          <Heading>About</Heading>
          <UPageCard spotlight class="card-spotlight-subtle">
            <div
              class="inset-0 rounded-lg bg-noise absolute opacity-4 mix-blend-multiply brightness-150 dark:opacity-25 dark:brightness-100"
            ></div>
            <div class="gap-2 px-4 leading-8 text-toned relative flex flex-col">
              <p v-for="paragraph in $t('about').split('\n\n')" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </UPageCard>
        </Section>

        <Section id="focus">
          <Heading>Focus Areas</Heading>
          <div class="gap-4 grid min-[520px]:grid-cols-2 min-[820px]:grid-cols-3">
            <UPageCard
              v-for="area in focusAreas"
              :key="area.title"
              spotlight
              :spotlight-color="area.color"
              class="card-spotlight group"
            >
              <div
                class="inset-0 rounded-lg bg-noise absolute opacity-4 mix-blend-multiply brightness-150 dark:opacity-25 dark:brightness-100"
              ></div>
              <div class="inset-0 absolute overflow-hidden">
                <UIcon
                  :name="area.icon"
                  class="-bottom-4 -right-4 text-neutral size-34 absolute rotate-14 opacity-3 transition-all duration-300 group-hover:text-(--spotlight-color) group-hover:opacity-8 dark:opacity-1 dark:group-hover:opacity-5"
                />
              </div>
              <h3 class="relative">
                <UBadge :color="area.color" variant="soft" size="lg" class="mb-1">{{
                  area.title
                }}</UBadge>
              </h3>
              <ul class="space-y-2 text-sm text-toned relative">
                <li v-for="detail in area.details" :key="detail">{{ detail }}</li>
              </ul>
            </UPageCard>
          </div>
          <UMarquee
            :overlay="false"
            :ui="{
              root: '[--gap:--spacing(3)] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]',
              content: '[--duration:30s]',
            }"
          >
            <UBadge
              v-for="tech in shuffledTechnologies"
              :key="tech.name"
              :color="tech.color"
              variant="subtle"
              size="lg"
              :icon="tech.icon"
            >
              {{ tech.name }}
            </UBadge>
          </UMarquee>
        </Section>

        <Section id="experience">
          <Heading>Experience</Heading>
          <div class="gap-4 grid">
            <UCard
              v-for="item in $tm('experience')"
              :key="`${$rt(item.org)}-${$rt(item.period)}`"
              variant="subtle"
              class="pr-4 pl-2 card-timeline relative bg-transparent"
              :class="{ 'bg-neutral-500/3 card-timeline--highlighted': item.highlight }"
            >
              <div
                v-if="item.highlight"
                class="inset-0 rounded-lg bg-noise absolute opacity-4 mix-blend-multiply brightness-150 dark:opacity-25 dark:brightness-100"
              ></div>
              <div class="gap-3 md:items-center md:flex-row relative flex flex-col justify-between">
                <span class="text-muted lg:w-[35%] w-[21ch] shrink-0">{{ $rt(item.period) }}</span>
                <div class="grow">
                  <h3 class="text-xl font-semibold inline-block">
                    {{ $rt(item.org) }}
                    <span class="text-lg text-muted">– {{ $rt(item.position) }}</span>
                  </h3>
                  <p class="mt-2 text-muted">{{ $rt(item.description) }}</p>
                  <div class="gap-2 mt-4 flex flex-wrap">
                    <UBadge
                      v-for="tag in item.tags"
                      :key="tag"
                      variant="subtle"
                      size="sm"
                      color="neutral"
                    >
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
          <div class="gap-4 grid">
            <UCard
              v-for="item in $tm('education')"
              :key="`${$rt(item.org)}-${$rt(item.period)}`"
              variant="subtle"
              class="pr-4 pl-2 card-timeline relative bg-transparent"
            >
              <div class="gap-3 md:items-center md:flex-row flex flex-col justify-between">
                <span class="text-muted lg:w-[35%] w-[21ch] shrink-0">{{ $rt(item.period) }}</span>
                <UIcon
                  name="i-mdi-university"
                  class="-right-2 -bottom-6 text-neutral-500/7 size-40 absolute rotate-14"
                />
                <div class="grow">
                  <h3 class="text-xl font-semibold inline-block">
                    {{ $rt(item.org) }}
                    <span class="text-lg text-muted">– {{ $rt(item.position) }}</span>
                  </h3>
                  <p class="mt-2 text-muted">{{ $rt(item.description) }}</p>
                  <div class="gap-2 mt-4 flex flex-wrap">
                    <UBadge
                      v-for="tag in item.tags"
                      :key="tag"
                      variant="subtle"
                      size="sm"
                      color="neutral"
                    >
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
          <div class="gap-5 grid">
            <UPageCard
              v-for="(project, index) in $tm('projects')"
              :key="$rt(project.title)"
              spotlight
              :spotlight-color="$rt(project.accentColor) as CommonColor"
              class="p-0 card-spotlight group hover:-translate-y-1 transition-all duration-300"
              :ui="{
                container: `overflow-hidden rounded-lg p-0! flex! flex-row! gap-0! ${Number(index) % 2 === 1 ? 'flex-row-reverse!' : ''}`,
              }"
            >
              <div
                class="inset-0 absolute opacity-4"
                :style="`background: linear-gradient(to ${Number(index) % 2 === 0 ? 'right' : 'left'}, transparent 60%, var(--ui-color-${$rt(project.accentColor)}-500));`"
              ></div>
              <div
                class="inset-0 rounded-lg bg-noise absolute opacity-4 mix-blend-multiply brightness-150 dark:opacity-25 dark:brightness-100"
              ></div>
              <div
                class="w-80 md:block relative hidden shrink-0 grow-0 overflow-hidden"
                :class="{
                  '[clip-path:polygon(0%_0%,99%_0%,89%_100%,0%_100%)]': Number(index) % 2 === 0,
                  '[clip-path:polygon(11%_0%,100%_0%,100%_100%,1%_100%)]': Number(index) % 2 === 1,
                }"
              >
                <div
                  :style="`background-image: url(${$rt(project.imageSrc)})`"
                  class="h-full w-full bg-cover bg-center transition-all duration-300 group-hover:scale-103 group-hover:rotate-1"
                />
              </div>
              <div class="px-8 my-5 relative" :class="{ 'md:pl-6': Number(index) % 2 === 0 }">
                <h3 class="mb-1 text-xl font-semibold text-highlighted">
                  {{ $rt(project.title) }}
                </h3>
                <p class="font-semibold tracking-wide text-toned">
                  {{ $rt(project.subtitle) }}
                </p>
                <div
                  class="mt-3.5 mb-2.5 w-14 group-hover:w-18 h-[0.3rem] rounded-full opacity-40 transition-all duration-300 group-hover:opacity-60"
                  :style="`background-color: var(--ui-color-${$rt(project.accentColor)}-500)`"
                ></div>
                <p class="text-sm leading-7 text-toned">{{ $rt(project.description) }}</p>
                <div class="gap-2 mt-4 flex flex-wrap">
                  <UBadge
                    v-for="tag in project.tags"
                    :key="`${$rt(project.title)}-${$rt(tag)}`"
                    variant="subtle"
                    size="sm"
                    :color="$rt(project.accentColor) as CommonColor"
                  >
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
                  class="-bottom-1 right-4 absolute"
                  :aria-label="`Open project '${$rt(project.title)}' in new tab`"
                >
                  Open Project
                </UButton>
              </div>
            </UPageCard>
          </div>
        </Section>

        <Section id="contact">
          <Heading>Contact</Heading>
          <div class="gap-4 max-w-5xl sm:grid-cols-[1fr_14rem] mx-auto grid grid-cols-1">
            <UPageCard
              v-for="entry in contactLinks"
              :key="entry.label"
              spotlight
              class="card-spotlight-subtle sm:col-start-1 group"
            >
              <div
                class="inset-0 rounded-lg bg-noise absolute opacity-4 mix-blend-multiply brightness-150 dark:opacity-25 dark:brightness-100"
              ></div>
              <div class="gap-3 relative flex flex-wrap items-center justify-between">
                <div
                  class="relative z-10"
                  :class="{ 'pointer-events-none': isActionContactLink(entry) }"
                >
                  <p class="text-xs font-semibold tracking-wide text-muted uppercase">
                    {{ entry.label }}
                  </p>
                  <a
                    v-if="entry.href"
                    class="mt-1 text-lg font-semibold text-highlighted block transition-colors duration-200 group-hover:underline"
                    :href="entry.href"
                    target="_blank"
                    rel="noreferrer"
                    :aria-label="entry.label"
                  >
                    {{ entry.value }}
                  </a>
                  <ContactEmail
                    v-else-if="isEmailContactLink(entry)"
                    variant="block"
                    display-only
                    class="text-highlighted group-hover:underline"
                  />
                  <ContactPhone
                    v-else-if="isPhoneContactLink(entry)"
                    variant="block"
                    display-only
                    class="text-highlighted group-hover:underline"
                  />
                </div>
              </div>
              <a
                v-if="entry.href"
                class="inset-0 absolute block overflow-hidden"
                :href="entry.href"
                target="_blank"
                rel="noreferrer"
                :aria-label="entry.label"
              >
                <UIcon
                  :name="entry.icon"
                  class="-right-4 -bottom-4 text-neutral size-24 absolute rotate-14 opacity-3 transition-all duration-300 group-hover:opacity-8 dark:opacity-1 dark:group-hover:opacity-5"
                />
              </a>
              <button
                v-else-if="isActionContactLink(entry)"
                type="button"
                class="inset-0 p-0 absolute block cursor-pointer overflow-hidden border-0 bg-transparent"
                :aria-label="entry.label"
                @click="openContactLink(entry)"
              >
                <UIcon
                  :name="entry.icon"
                  class="-right-4 -bottom-4 text-neutral size-24 pointer-events-none absolute rotate-14 opacity-3 transition-all duration-300 group-hover:opacity-8 dark:opacity-1 dark:group-hover:opacity-5"
                />
              </button>
            </UPageCard>
            <UPageCard
              spotlight
              class="card-spotlight-subtle sm:col-start-2 sm:row-start-1 sm:row-span-3"
              :ui="{ container: 'md:grid justify-center md:gap-y-1!' }"
            >
              <div
                class="inset-0 rounded-lg bg-noise absolute opacity-4 mix-blend-multiply brightness-150 dark:opacity-25 dark:brightness-100"
              ></div>
              <p class="text-xs font-semibold tracking-wide text-muted relative uppercase">
                Find me online
              </p>
              <div class="gap-7 sm:flex-col relative flex items-center justify-center">
                <a
                  v-for="link in profileLinks"
                  :key="link.label"
                  :href="link.href"
                  target="_blank"
                  rel="noreferrer"
                  class="pb-3 md:pb-0 opacity-70 transition-opacity duration-200 hover:opacity-100"
                  :aria-label="link.label"
                >
                  <UTooltip
                    :text="link.label"
                    :delay-duration="0"
                    arrow
                    :content="{ side: 'right' }"
                    class="sm:block hidden"
                  >
                    <UIcon :name="link.icon" class="size-8" />
                  </UTooltip>
                  <UTooltip
                    :text="link.label"
                    :delay-duration="0"
                    arrow
                    :content="{ side: 'bottom' }"
                    class="sm:hidden block"
                  >
                    <UIcon :name="link.icon" class="size-8" />
                  </UTooltip>
                </a>
              </div>
            </UPageCard>
          </div>
        </Section>
      </UContainer>
    </main>

    <footer class="py-10 border-default border-t" role="contentinfo">
      <UContainer class="text-sm text-muted text-center">
        <p>Copyright {{ currentYear }}</p>
        <p class="mt-1">Made with ♥ by Robin Uhl</p>
        <div class="gap-2 mt-4 flex items-center justify-center">
          <UButton as="a" href="#about" :locale="false" variant="ghost" color="neutral" size="sm"
            >About</UButton
          >
          <UButton as="a" href="#projects" :locale="false" variant="ghost" color="neutral" size="sm"
            >Projects</UButton
          >
          <UButton as="a" href="#contact" :locale="false" variant="ghost" color="neutral" size="sm"
            >Contact</UButton
          >
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
  background-image: radial-gradient(
    circle calc(var(--size) / 2) at center,
    var(--color-center) 0%,
    var(--color-center) 20%,
    transparent 100%
  );
  filter: url(#dither3);
}
</style>
