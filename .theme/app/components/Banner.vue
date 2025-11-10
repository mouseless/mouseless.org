<template>
  <div class="c--banner w-full text-xl">
    <slot />
  </div>
</template>
<style>
@reference "../assets/tailwind.css";

.c--banner {
  h1, h2, h3, h4, h5, h6 { @apply leading-[1.2em]; }
}

.c--block:has(.c--banner) {
  @apply py-xl px-0;

  &.dark strong { @apply text-dark-text-highlight; }
  &.light strong { @apply text-light-text-highlight; }
}
</style>
