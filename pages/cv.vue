<script lang="ts" setup>
const colorMode = useColorMode();
const { t, tm } = useI18n();

const cvLinks = computed<ContactLink[]>(() => [
  ...(tm("contactLinks") as ContactLink[]).map((link, index) => ({
    label: t(`contactLinks[${index}].label`),
    value: link.value ? t(`contactLinks[${index}].value`) : undefined,
    href: link.href ? t(`contactLinks[${index}].href`) : undefined,
    icon: t(`contactLinks[${index}].icon`),
    action: link.action ? (t(`contactLinks[${index}].action`) as ContactLinkAction) : undefined,
  })),
  ...profileLinks.map((link) => ({ ...link, value: link.href })),
  { label: "Website", value: "https://uhl.sh", href: "https://uhl.sh", icon: "i-mdi-home" },
]);

const strengths = [
  "Cloud architecture (AWS, containerized platforms, CI/CD)",
  "Backend and API design for high-availability systems",
  "Frontend engineering with modern TypeScript frameworks",
  "Cross-functional collaboration with product, operations, and hardware teams",
];

const languages = ["German (native)", "English (professional working proficiency)"];

function changeColorMode(mode: string) {
  document.startViewTransition(() => (colorMode.preference = mode));
}
</script>

<template>
  <main class="flex justify-center items-center px-6 py-8 min-h-screen cv-page dark:bg-neutral-950/75 print:bg-white!">
    <div class="flex fixed top-4 left-4 z-50 gap-2 items-center print:hidden">
      <NuxtLink to="/">
        <UButton color="neutral" variant="outline" size="sm" class="px-3 py-2 cursor-pointer bg-(--ui-bg)/20 backdrop-blur ring-(--ui-border-accented)/30">
          <UIcon name="i-lucide-home" class="size-5" />
        </UButton>
      </NuxtLink>

      <ClientOnly>
        <UButton color="neutral" variant="outline" size="sm" class="px-3 py-2 cursor-pointer bg-(--ui-bg)/20 backdrop-blur ring-(--ui-border-accented)/30">
          <template #fallback>
            <UIcon name="i-lucide-moon" class="opacity-0 size-5" />
          </template>
          <UIcon v-show="colorMode.value === 'dark'" name="i-lucide-moon" class="size-5" @click="changeColorMode('light')" />
          <UIcon v-show="colorMode.value === 'light'" name="i-lucide-sun" class="size-5" @click="changeColorMode('dark')" />
        </UButton>
      </ClientOnly>
    </div>
    <ButtonLocale class="fixed top-4 right-4 z-50 print:hidden" />

    <UPageCard spotlight class="cv-sheet" :ui="{ container: 'p-0! print:bg-white!', spotlight: 'print:bg-white!' }">
      <header class="flex gap-4 justify-between items-start pb-5 mb-6 border-b border-default">
        <div>
          <h1 class="m-0 text-[clamp(1.8rem,3vw,2.2rem)] leading-[1.15]">Robin Uhl</h1>
          <p class="mt-[0.4rem] mb-0 ml-0 mr-0 text-[1.02rem] text-muted">{{ $t("currentRole") }}</p>
        </div>
      </header>

      <CvSection title="Contact">
        <div class="cv-contact-grid">
          <template v-for="link in cvLinks" :key="link.label">
            <a v-if="link.href" :href="link.href" target="_blank" rel="noreferrer" class="cv-link">
              <UIcon :name="link.icon" mode="svg" class="size-4 text-muted" />
              <strong>{{ link.label }}:</strong> {{ link.value?.replace("https://", "") }}
            </a>
            <button v-else-if="isActionContactLink(link)" type="button" class="cv-link" @click="openContactLink(link)">
              <UIcon :name="link.icon" mode="svg" class="size-4 text-muted" />
              <strong>{{ link.label }}:</strong>
              <ContactEmail v-if="isEmailContactLink(link)" display-only />
              <ContactPhone v-else-if="isPhoneContactLink(link)" display-only />
            </button>
          </template>
        </div>
      </CvSection>

      <CvSection title="About">
        <p>{{ $t("about") }}</p>
      </CvSection>

      <CvSection title="Experience">
        <!-- <div v-for="item in $tm('experience')" :key="`${$rt(item.org)}-${$rt(item.period)}`" class="cv-entry">
          <div class="cv-entry-heading">
            <h3>{{ $rt(item.position) }}, {{ $rt(item.org) }}</h3>
            <span>{{ $rt(item.period) }}</span>
          </div>
          <p>{{ $rt(item.description) }}</p>
          <p class="cv-tags"><strong>Technologies:</strong> {{ item.tags.map($rt).join(", ") }}</p>
        </div> -->
        <div class="flex flex-col gap-4">
          <div v-for="item in $tm('experience')" :key="`${$rt(item.org)}-${$rt(item.period)}`">
            <div class="flex relative flex-col gap-y-1 gap-x-5 justify-between md:items-start md:flex-row-reverse">
              <span class="text-muted shrink-0 grow-0">{{ $rt(item.period) }}</span>
              <div class="grow">
                <h3 class="inline-block font-semibold text-md">
                  {{ $rt(item.org) }} <span class="text-md text-muted">– {{ $rt(item.position) }}</span>
                </h3>
                <p class="mt-1">{{ $rt(item.description) }}</p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <UBadge v-for="tag in item.tags" :key="tag" variant="subtle" size="sm" color="neutral">
                    {{ $rt(tag) }}
                  </UBadge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CvSection>

      <CvSection title="Education">
        <div v-for="item in $tm('education')" :key="`${$rt(item.org)}-${$rt(item.period)}`" class="cv-entry">
          <div class="cv-entry-heading">
            <h3>{{ $rt(item.position) }}, {{ $rt(item.org) }}</h3>
            <span>{{ $rt(item.period) }}</span>
          </div>
          <p>{{ $rt(item.description) }}</p>
          <p class="cv-tags"><strong>Focus Areas:</strong> {{ item.tags.map($rt).join(", ") }}</p>
        </div>
      </CvSection>

      <div class="cv-grid-two">
        <CvSection title="Key Strengths">
          <ul class="cv-list">
            <li v-for="item in strengths" :key="item">{{ item }}</li>
          </ul>
        </CvSection>
        <div class="flex flex-col gap-5">
          <CvSection title="Languages">
            <ul class="cv-list">
              <li v-for="item in languages" :key="item">{{ item }}</li>
            </ul>
          </CvSection>
          <CvSection title="References">
            <p>Available upon request.</p>
          </CvSection>
        </div>
      </div>
    </UPageCard>
  </main>
</template>

<style lang="scss" scoped>
:global(::view-transition-old(root)),
:global(::view-transition-new(root)) {
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
}
:global(::view-transition-old(root)) {
  animation-name: blurOut;
}
:global(::view-transition-new(root)) {
  animation-name: blurIn;
}

@keyframes blurIn {
  from {
    filter: blur(10px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes blurOut {
  from {
    filter: blur(0);
    opacity: 1;
  }
  to {
    filter: blur(10px);
    opacity: 0;
  }
}

.cv-sheet {
  --spotlight-color: color-mix(in srgb, var(--ui-color-neutral-500), transparent 70%);
  --spotlight-size: 600px;
  width: min(980px, 100%);
  padding: 2.25rem 2.5rem;
  line-height: 1.55;
}

.cv-home-link {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.cv-home-link:hover {
  border-bottom-color: currentColor;
}

.cv-contact-grid {
  display: grid;
  gap: 0.35rem 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.cv-entry + .cv-entry {
  margin-top: 0.95rem;
}

.cv-entry-heading {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
}

.cv-entry-heading h3 {
  margin: 0;
  font-size: 1rem;
}

.cv-entry-heading span {
  color: var(--ui-text-muted);
  font-size: 0.95rem;
}

.cv-entry p,
.cv-list {
  margin: 0.35rem 0 0;
}

.cv-list {
  padding-left: 1.2rem;
  list-style: disc;
}

.cv-tags {
  color: var(--ui-text-muted);
  font-size: 0.94rem;
}

.cv-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: 0;
  border-bottom: 1px solid transparent;
  width: fit-content;
  &:hover {
    border-bottom-color: currentColor;
  }
}

.cv-grid-two {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.mt {
  margin-top: 1rem;
}

@media (max-width: 680px) {
  .cv-sheet {
    padding: 1.4rem 1.2rem;
  }
}

@media print {
  :global(.dark),
  :global(body),
  .cv-page {
    // These variables are copied from the light mode
    --ui-text-dimmed: var(--ui-color-neutral-400);
    --ui-text-muted: var(--ui-color-neutral-500);
    --ui-text-toned: var(--ui-color-neutral-600);
    --ui-text: var(--ui-color-neutral-700);
    --ui-text-highlighted: var(--ui-color-neutral-900);
    --ui-text-inverted: #fff;
    --ui-bg: #fff;
    --ui-bg-muted: var(--ui-color-neutral-50);
    --ui-bg-elevated: var(--ui-color-neutral-100);
    --ui-bg-accented: var(--ui-color-neutral-200);
    --ui-bg-inverted: var(--ui-color-neutral-900);
    --ui-border: var(--ui-color-neutral-200);
    --ui-border-muted: var(--ui-color-neutral-200);
    --ui-border-accented: var(--ui-color-neutral-300);
    --ui-border-inverted: var(--ui-color-neutral-900);
    --ui-radius: 0.25rem;
    --ui-container: 80rem;
  }

  :global(body::before) {
    display: none;
  }

  .cv-page {
    padding: 0;
    background: #fff;
    color: #111;
  }

  .cv-sheet {
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    max-width: none;
    padding: 0;
    background: #fff;
    &::before,
    [data-slot="spotlight"] {
      display: none;
    }
  }
}
</style>
