<script lang="ts" setup>
const { setLocale, locale } = useI18n();
</script>

<template>
  <div>
    <UButton v-if="locale === 'de'" color="neutral" variant="outline" size="sm" class="px-3 py-2 cursor-pointer bg-(--ui-bg)/20 backdrop-blur ring-(--ui-border-accented)/30" @click="setLocale('en')">
      <UIcon name="i-flag-gb-4x3" class="size-5" /> EN
    </UButton>
    <UButton v-else color="neutral" variant="outline" size="sm" class="px-3 py-2 cursor-pointer bg-(--ui-bg)/20 backdrop-blur" @click="setLocale('de')">
      <UIcon name="i-flag-de-4x3" class="size-5" /> DE
    </UButton>
  </div>
</template>
