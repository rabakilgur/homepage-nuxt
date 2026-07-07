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

const phoneParts = getObfuscatedPhoneDisplayParts();
const domOrderedParts = [...phoneParts].reverse();
const rootClass = computed(() => [
  "contact-phone",
  "obfuscated-contact",
  props.variant === "block" ? "contact-phone--block" : "contact-phone--inline",
  props.class,
]);

function onClick() {
  openContactPhone();
}
</script>

<template>
  <component :is="displayOnly ? 'span' : 'button'" :type="displayOnly ? undefined : 'button'" :class="rootClass" @click="displayOnly ? undefined : onClick()">
    <span
      v-for="(part, index) in domOrderedParts"
      :key="index"
      class="obfuscated-text"
      :style="{ order: phoneParts.length - index }">
      {{ part }}
    </span>
  </component>
</template>

<style scoped>
.contact-phone {
  padding: 0;
  color: inherit;
  font: inherit;
  text-align: inherit;
  cursor: pointer;
  background: transparent;
  border: 0;
}

.contact-phone--inline,
.obfuscated-contact {
  display: inline-flex;
  align-items: baseline;
  gap: 0.25em;
}

.contact-phone--block {
  display: inline-flex;
  margin-top: 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: left;
  gap: 0.25em;
}

.obfuscated-text {
  unicode-bidi: bidi-override;
  direction: rtl;
}
</style>
