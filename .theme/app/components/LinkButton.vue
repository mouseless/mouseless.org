<template>
  <NuxtLink
    class="inline-flex no-underline rounded-(--space-xs) py-(--space-xs) px-(--space-sm)"
    :class="{
      'bg-(--color-dark-link) text-(--color-gray-100) hover:bg-(--color-dark-link-hover) hover:text-(--color-gray-100)': type === 'default' && color === 'dark',
      'bg-(--color-light-link) text-(--color-gray-900) hover:bg-(--color-light-link-hover) hover:text-(--color-gray-900)': type === 'default' && color === 'light',
      'text-[x-large]': type === 'cta',
      'bg-(--color-red-700) text-(--color-gray-100) hover:bg-(--color-red-800) hover:text-(--color-gray-100)': type === 'cta' && color === 'dark',
      'bg-(--color-green-500) text-(--color-darkgreen-900) hover:bg-(--color-green-800) hover:text-(--color-gray-100)': type === 'cta' && color === 'light'
    }"
    :to="to"
  >
    {{ text }}
  </NuxtLink>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: "default"
  },
  to: {
    type: String,
    default: ""
  }
});

const color = inject("block-child-color", "dark");
</script>
