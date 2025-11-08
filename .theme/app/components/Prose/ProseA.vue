<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="underline"
    :class="{
      'text-(--color-dark-link) hover:text-(--color-dark-link-hover)': color === 'dark',
      'text-(--color-light-link) hover:text-(--color-light-link-hover)': color === 'light'
    }"
  >
    <slot />
    <i
      v-if="href.startsWith('http')"
      class="
        fa-solid fa-arrow-up-right-from-square
        ml-(--space-xs)
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
