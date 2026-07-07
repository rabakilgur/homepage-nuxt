<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "inline" | "block";
    displayOnly?: boolean;
    class?: string;
  }>(),
  {
    variant: "inline",
    displayOnly: false,
  },
);

const emailParts = getObfuscatedEmailDisplayParts();
const rootClass = computed(() => [
  "contact-email",
  "obfuscated-contact",
  props.variant === "block" ? "contact-email--block" : "contact-email--inline",
  props.class,
]);

function onClick() {
  openContactEmail();
}
</script>

<template>
  <component :is="displayOnly ? 'span' : 'button'" :type="displayOnly ? undefined : 'button'" :class="rootClass" @click="displayOnly ? undefined : onClick()">
    <span class="obfuscated-text" style="order: 3">{{ emailParts.domain }}</span>
    <span class="obfuscated-separator obfuscated-separator--at" aria-hidden="true" style="order: 2" />
    <span class="obfuscated-text" style="order: 1">{{ emailParts.local }}</span>
  </component>
</template>

<style scoped>
.contact-email {
  padding: 0;
  color: inherit;
  font: inherit;
  text-align: inherit;
  cursor: pointer;
  background: transparent;
  border: 0;
}

.contact-email--inline,
.obfuscated-contact {
  display: inline-flex;
  align-items: baseline;
}

.contact-email--block {
  display: inline-flex;
  margin-top: 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: left;
}

.obfuscated-text {
  unicode-bidi: bidi-override;
  direction: rtl;
}

.obfuscated-separator--at::before {
  content: "\0040";
}
</style>
