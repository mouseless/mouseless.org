<template>
  <NuxtLink
    class="inline-flex no-underline rounded-xs py-xs px-sm"
    :class="{
      'bg-dark-link text-gray-100 hover:bg-dark-link-hover hover:text-gray-100': type === 'default' && color === 'dark',
      'bg-light-link text-gray-900 hover:bg-light-link-hover hover:text-gray-900': type === 'default' && color === 'light',
      'text-[x-large]': type === 'cta',
      'bg-red-700 text-gray-100 hover:bg-red-800 hover:text-gray-100': type === 'cta' && color === 'dark',
      'bg-green-500 text-darkgreen-900 hover:bg-green-800 hover:text-gray-100': type === 'cta' && color === 'light'
    }"
    :to="to"
  >
    {{ text }}
  </NuxtLink>
</template>
<script setup>
defineProps({
  text: { type: String, default: null },
  type: { type: String, default: "default" },
  to: { type: String, default: "" }
});

const color = inject("block-child-color", "dark");
</script>
