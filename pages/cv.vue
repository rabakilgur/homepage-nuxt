<script lang="ts" setup>
const { locales, setLocale, locale } = useI18n();

type CVLink = { label: string; value: string; href: string; icon: string };

const cvLinks: CVLink[] = [
  ...($tm("contactLinks") as CVLink[]).map((link: any) => ({ label: $rt(link.label), value: $rt(link.value), href: $rt(link.href), icon: $rt(link.icon) })),
  ...profileLinks.map((link) => ({ ...link, value: link.href })),
  { label: "Website", value: "https://uhl.sh", href: "https://uhl.sh", icon: "i-mdi-home" },
];

const profileSummary = [
  "Cloud and full-stack engineer with 10+ years of hands-on product development across web, mobile, and distributed backend systems.",
  "Strong focus on cloud-native architecture, API-first design, and pragmatic engineering decisions that improve reliability and maintainability.",
  "Combines technical depth with product thinking to ship scalable solutions from architecture to implementation.",
];

const strengths = [
  "Cloud architecture (AWS, containerized platforms, CI/CD)",
  "Backend and API design for high-availability systems",
  "Frontend engineering with modern TypeScript frameworks",
  "Cross-functional collaboration with product, operations, and hardware teams",
];

const languages = ["German (native)", "English (professional working proficiency)"];
</script>

<template>
  <main class="cv-page">
    <UPageCard spotlight class="cv-sheet">
      <header class="cv-header">
        <div>
          <h1 class="cv-name">Robin Uhl</h1>
          <p class="cv-role">{{ $t("currentRole") }}</p>
        </div>
      </header>

      <section class="cv-section">
        <h2 class="cv-title">Contact</h2>
        <div class="cv-contact-grid">
          <a v-for="link in cvLinks" :key="link.label" :href="link.href" target="_blank" rel="noreferrer" class="cv-link">
            <UIcon :name="link.icon" mode="svg" class="size-4 text-muted" />
            <strong>{{ link.label }}:</strong> {{ link.value.replace("https://", "") }}
          </a>
        </div>
      </section>

      <section class="cv-section">
        <h2 class="cv-title">Profile</h2>
        <ul class="cv-list">
          <li v-for="item in profileSummary" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="cv-section">
        <h2 class="cv-title">Professional Experience</h2>
        <div v-for="item in $tm('experience')" :key="`${$rt(item.org)}-${$rt(item.period)}`" class="cv-entry">
          <div class="cv-entry-heading">
            <h3>{{ $rt(item.position) }}, {{ $rt(item.org) }}</h3>
            <span>{{ $rt(item.period) }}</span>
          </div>
          <p>{{ $rt(item.description) }}</p>
          <p class="cv-tags"><strong>Technologies:</strong> {{ item.tags.map($rt).join(", ") }}</p>
        </div>
      </section>

      <section class="cv-section">
        <h2 class="cv-title">Education</h2>
        <div v-for="item in $tm('education')" :key="`${$rt(item.org)}-${$rt(item.period)}`" class="cv-entry">
          <div class="cv-entry-heading">
            <h3>{{ $rt(item.position) }}, {{ $rt(item.org) }}</h3>
            <span>{{ $rt(item.period) }}</span>
          </div>
          <p>{{ $rt(item.description) }}</p>
          <p class="cv-tags"><strong>Focus Areas:</strong> {{ item.tags.map($rt).join(", ") }}</p>
        </div>
      </section>

      <section class="cv-section cv-grid-two">
        <div>
          <h2 class="cv-title">Key Strengths</h2>
          <ul class="cv-list">
            <li v-for="item in strengths" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div>
          <h2 class="cv-title">Languages</h2>
          <ul class="cv-list">
            <li v-for="item in languages" :key="item">{{ item }}</li>
          </ul>
          <h2 class="cv-title mt">References</h2>
          <p>Available upon request.</p>
        </div>
      </section>
    </UPageCard>
  </main>
</template>

<style lang="scss" scoped>
.cv-page {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem 3rem;
  // background: var(--ui-bg);
  color: var(--ui-text);
}

.cv-sheet {
  // --spotlight-color: color-mix(in srgb, var(--ui-color-neutral-500), transparent 70%);
  // --spotlight-size: 600px !important;
  width: min(980px, 100%);
  padding: 2.25rem 2.5rem;
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--ui-bg) 96%, var(--ui-text) 4%);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  line-height: 1.55;
}

.cv-header {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--ui-border);
}

.cv-name {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  line-height: 1.15;
}

.cv-role {
  margin: 0.4rem 0 0;
  font-size: 1.02rem;
  color: var(--ui-text-muted);
}

.cv-home-link {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
}

.cv-home-link:hover {
  border-bottom-color: currentColor;
}

.cv-section + .cv-section {
  margin-top: 1.4rem;
}

.cv-title {
  margin: 0 0 0.55rem;
  font-size: 1rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
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
}

.cv-tags {
  color: var(--ui-text-muted);
  font-size: 0.94rem;
}

.cv-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: inherit;
  text-decoration: none;
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
