<template>
  <hr
    :class="{
      'border-t-(--color-dark-text-mute)': color === 'dark',
      'border-t-(--color-light-text-mute)': color === 'light'
    }"
  >
</template>
<script setup>
const color = inject("block-child-color", "dark");
</script>
