<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="underline"
    :class="{
      'text-dark-link hover:text-dark-link-hover': color === 'dark',
      'text-light-link hover:text-light-link-hover': color === 'light'
    }"
  >
    <slot />
    <i
      v-if="href.startsWith('http')"
      class="
        fa-solid fa-arrow-up-right-from-square
        ml-xs
      "
    />
  </NuxtLink>
</template>
<script setup>
defineProps({
  href: { type: String, default: "" },
  target: { type: String, default: undefined }
});

const color = inject("block-child-color", "dark");
</script>
<style lang="scss" scoped>
img + i {
  display: none;
}
</style>
