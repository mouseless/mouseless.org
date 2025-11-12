<template>
  <NuxtLink
    :href
    :target="target ?? external ? 'blank' : undefined"
    class="underline inline-block has-[img]:my-0.5"
    :class="{
      'text-dark-link hover:text-dark-link-hover': color === 'dark',
      'text-light-link hover:text-light-link-hover': color === 'light'
    }"
  >
    <slot />
    <i
      v-if="external"
      class="
        fa-solid fa-arrow-up-right-from-square
        ml-1 [img+i]:hidden
      "
    />
  </NuxtLink>
</template>
<script setup>
const { href } = defineProps({
  href: { type: String, default: "" },
  target: { type: String, default: undefined }
});

const color = inject("block-child-color", "dark");
const external = href.startsWith("http");
</script>
