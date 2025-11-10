<template>
  <hr
    :class="{
      'border-t-dark-text-mute': color === 'dark',
      'border-t-light-text-mute': color === 'light'
    }"
  >
</template>
<script setup>
const color = inject("block-child-color", "dark");
</script>
