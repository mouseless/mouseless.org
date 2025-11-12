<template>
  <div
    class="
      flex items-start my-sm gap-md
      max-md:flex-col
    "
    :class="{
      'max-md:flex-col-reverse': imageBehavior === 'icon'
    }"
  >
    <div
      v-for="i in Array(count)
        .fill(0)
        .map((_, i) => i)"
      :key="i"
      class="c--column max-md:w-full!"
      :class="{
        'c--column--image-default': imageBehavior === 'default',
        'c--column--image-icon': imageBehavior === 'icon'
      }"
      :style="{ width: itemWidths[i] || itemWidth }"
    >
      <slot :name="items[i]" />
    </div>
  </div>
</template>
<script setup>
defineProps({
  itemWidth: { type: String, default: "100%" },
  itemWidths: { type: Array, default: () => [] },
  imageBehavior: { type: String, default: "default" }
});
const slots = useSlots();

const items = Object.keys(slots);
const count = computed(() => items.length);
</script>
