<template>
  <div
    class="flex items-start m0 p0 mt-(--space-sm) mb-(--space-sm) gap-(--space-md) max-md:flex-col max-md:gap-(--space-md)"
  >
    <div
      v-for="i in Array(count)
        .fill(0)
        .map((_, i) => i)"
      :key="i"
      class="w-full max-md:has-[.mermaid]:hidden max-md:has-[img.prose]:hidden"
      :style="`width: ${itemWidths[i] || itemWidth}`"
    >
      <slot :name="items[i]" />
    </div>
  </div>
</template>
<script setup>
defineProps({
  itemWidth: {
    type: String,
    default: "100%"
  },
  itemWidths: {
    type: Array,
    default: () => []
  }
});
const slots = useSlots();

const items = Object.keys(slots);
const count = computed(() => items.length);
</script>
