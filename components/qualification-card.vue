<script lang="ts" setup>
defineProps<{
  item: {
    position: string;
    org: string;
    period: string;
    description: string;
    tags?: string[];
    highlight?: boolean;
  };
  icon?: string;
}>();
</script>

<template>
  <UCard
    variant="subtle"
    class="pr-4 pl-2 card-timeline relative bg-transparent"
    :class="{ 'bg-neutral-500/3 card-timeline--highlighted': item.highlight }"
  >
    <div
      v-if="item.highlight"
      class="inset-0 rounded-lg bg-noise absolute opacity-4 mix-blend-multiply brightness-150 dark:opacity-25 dark:brightness-100"
    ></div>
    <div class="gap-3 md:flex-row flex flex-col justify-between">
      <span class="text-muted lg:w-[23ch] py-0.5 w-[20ch] shrink-0">
        {{ $rt(item.period) }}
      </span>
      <UIcon
        :name="icon"
        class="-right-2 -bottom-6 text-neutral-500/7 size-40 absolute rotate-14"
      />
      <div class="grow">
        <h3 class="text-xl font-semibold inline-block">
          {{ $rt(item.org) }}
          <span class="text-lg text-muted">– {{ $rt(item.position) }}</span>
        </h3>
        <p class="mt-2 text-muted" v-if="$rt(item.description)">
          {{ $rt(item.description) }}
        </p>
        <div class="gap-2 mt-4 flex flex-wrap" v-if="item.tags && item.tags.length > 0">
          <UBadge v-for="tag in item.tags" :key="tag" variant="subtle" size="sm" color="neutral">
            {{ $rt(tag) }}
          </UBadge>
        </div>
      </div>
    </div>
  </UCard>
</template>
